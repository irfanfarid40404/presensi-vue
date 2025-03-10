export default {
    async fetch(request, env) {
      const { pathname } = new URL(request.url);
  
      if (pathname === "/api/users") {
        // Ambil data dari D1
        const result = await env.DB.prepare("SELECT * FROM mahasiwa").all();
        return new Response(JSON.stringify(result), {
          headers: { "Content-Type": "application/json" },
        });
      }
  
      return new Response("Hello, World!");
    },
  };