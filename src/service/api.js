export async function getUsers() {
    const response = await fetch("https://presensi-vue.irfannuddin35272.workers.dev/api/users");
    return await response.json();
  }