/*export const onRequestGet = () => {
  return new Response("This is alist of videos!")
}

export const onRequestPost = async ({ request }) => {
  const { name } = await request.json()
  return new Response(`Hello, ${name}!`)
}
*/

  import { getSignedStreamId } from "../../utils/cfStream"

  export async function onRequestGet(context) {

    const {
      env,
      params,
    } = context;
     
      //const { id } = params
  
      if (params.id) {
          const res = await fetch(`https://dash.cloudflare.com/${env.CF_ACCOUNT_ID}/stream/videos/${params.id}`, {
              method: "GET",
              headers: {
                  "Authorization": `Bearer ${env.CF_API_TOKEN_STREAM}`
              }
          })
  
          console.log('This is our response', res);
          const video = (await res.json()).result
  
          console.log('This is our video', video);
          if (video.meta.visibility !== "public") {
              return new Response(null, {status: 401})
          }
  
          const signedId = await getSignedStreamId(id, env.CF_STREAM_SIGNING_KEY)
  
          console.log('This is our signedID', signedId);
          return new Response(JSON.stringify({
              signedId: `${signedId}`
          }), {
              headers: {
                  "content-type": "application/json"
              }
          })
      }
       /*else {
          const url = new URL(request.url)
          const res = await (await fetch(`https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/stream?search=${url.searchParams.get("search") || ""}`, {
              headers: {
                  "Authorization": `Bearer ${env.CF_API_TOKEN_STREAM}`
              }
          })).json()
  
          const filteredVideos = res.result.filter(x => x.meta.visibility === "public") 
          const videos = await Promise.all(filteredVideos.map(async x => {
              const signedId = await getSignedStreamId(x.uid, env.CF_STREAM_SIGNING_KEY)
              return {
                  uid: x.uid,
                  status: x.status,
                  thumbnail: `https://videodelivery.net/${signedId}/thumbnails/thumbnail.jpg`,
                  meta: {
                      name: x.meta.name
                  },
                  created: x.created,
                  modified: x.modified,
                  duration: x.duration,
              }
          }))
          return new Response(JSON.stringify(videos), {headers: {"content-type": "application/json"}})
      }*/
  }
  