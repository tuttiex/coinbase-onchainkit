/**
 * Fetches a list of Base ecosystem dapps from a public API.
 * This demonstrates OnchainKit's read-only usage for consuming
 * public Base infrastructure without wallet interaction.
 */
export async function fetchBaseDapps() {
  // Placeholder: Replace with actual Base ecosystem API endpoint
  const apiUrl = "https://api.base.org/v1/dapps";

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch Base dapps: ${res.status} ${res.statusText}`
      );
    }

    const dapps = await res.json();
    return dapps;
  } catch (error) {
    console.error("Error fetching Base dapps:", error);
    throw error;
  }
}

export interface BaseDapp {
  name: string;
  website: string;
  description?: string;
  category?: string;
}
