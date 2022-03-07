export async function
onRequestGet({params}) { 
  const res = await
  fetch('http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true/${params.id}');
  
  const data = await res.json();
  const info = JSON.stringify(data);
  return new Response(info, null, 2);
}
