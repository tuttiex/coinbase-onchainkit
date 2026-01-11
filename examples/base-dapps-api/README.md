# Base Dapps API Example

This example demonstrates how to use OnchainKit in a read-only context to consume a public Base ecosystem API and display onchain applications.

## Use cases

- Public dapp directories
- Ecosystem explorers
- Research dashboards
- Non-custodial discovery tools

## Features

- Wallet-optional usage
- Read-only Base data consumption
- Fully compatible with OnchainKit providers

## Getting started

This example shows how to fetch and display a list of Base dapps using OnchainKit's read-only capabilities, without requiring wallet interaction or authentication.

```tsx
import { fetchBaseDapps } from "./fetchDapps";

export default async function Page() {
  const dapps = await fetchBaseDapps();

  return (
    <div>
      <h1>Base Dapps</h1>
      <ul>
        {dapps.map((dapp) => (
          <li key={dapp.name}>
            <a href={dapp.website}>{dapp.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Learn more

- [OnchainKit Documentation](https://onchainkit.xyz)
- [Base Documentation](https://base.org)
