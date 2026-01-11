import { fetchBaseDapps, type BaseDapp } from "./fetchDapps";

/**
 * Base Dapps Example Page
 *
 * This page demonstrates how to use OnchainKit in a read-only context
 * to consume a public Base ecosystem API. No wallet is required.
 */
export default async function Page(): Promise<JSX.Element> {
  let dapps = [];
  let error: string | null = null;

  try {
    dapps = await fetchBaseDapps();
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load dapps";
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Base Ecosystem Dapps</h1>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        This example shows how OnchainKit can be used for read-only consumption
        of Base ecosystem data without requiring wallet interaction.
      </p>

      {error ? (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#fee",
            color: "#c33",
            borderRadius: "4px",
          }}
        >
          Error: {error}
        </div>
      ) : dapps.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {dapps.map((dapp: BaseDapp) => (
            <li
              key={dapp.name}
              style={{
                padding: "1rem",
                marginBottom: "1rem",
                backgroundColor: "#f5f5f5",
                borderRadius: "4px",
              }}
            >
              <a
                href={dapp.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0052ff", textDecoration: "none" }}
              >
                <strong>{dapp.name}</strong>
              </a>
              {dapp.description && (
                <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>
                  {dapp.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "#999" }}>No dapps found.</p>
      )}
    </div>
  );
}
