export async function predictAge(
  name: string,
  countryCode: string
): Promise<number | null> {
  const url = new URL("https://api.agify.io");
  url.search = new URLSearchParams({
    name,
    country_id: countryCode,
  }).toString();
  const response = await fetch(url.toString());
  const jsonBody = await response.json();
  return jsonBody.age;
}
