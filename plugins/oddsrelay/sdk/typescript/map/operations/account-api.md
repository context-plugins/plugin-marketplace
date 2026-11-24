<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountApi — operations

Accessor: `client.accountApi` · Source: `src/resources/account-api.ts` · 2 operations · Request and error types: namespace `AccountApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `odds-relay`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPricing

- **Signature**: `getPricing(options?: RequestOptions): ApiPromise<PriceTable, AccountApi.GetPricingError>`
- **Wire**: `GET /v2/pricing`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PriceTable`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `AccountApi.GetPricingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error503"` [503] `Error503` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PriceTable` | `priceTableSchema` | `src/models/price-table.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error503` | `error503Schema` | `src/models/error503.ts` |

### getUsage

- **Signature**: `getUsage(options?: RequestOptions): ApiPromise<Usage, AccountApi.GetUsageError>`
- **Wire**: `GET /v2/usage`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Usage`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `AccountApi.GetUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error503"` [503] `Error503` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Usage` | `usageSchema` | `src/models/usage.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error503` | `error503Schema` | `src/models/error503.ts` |

