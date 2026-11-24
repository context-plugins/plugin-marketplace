<!-- Generated file — do not edit; regenerated with the SDK. -->

# HistoricalPriceFull — operations

Accessor: `client.historicalPriceFull` · Source: `src/resources/historical-price-full.ts` · 1 operation · Request types: namespace `HistoricalPriceFull`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `financial-modeling-prep`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getHistoricalPrice

- **Signature**: `getHistoricalPrice(request: HistoricalPriceFull.GetHistoricalPriceRequest, options?: RequestOptions): ApiPromise<HistoricalPriceResponse, ApiError>`
- **Wire**: `GET /historical-price-full/{symbol}`
- **Auth**: `apiKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HistoricalPriceResponse`
- **Error**: `FinancialModelingPrepError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `HistoricalPriceFull.GetHistoricalPriceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `path` | `string` | yes |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HistoricalPriceResponse` | `historicalPriceResponseSchema` | `src/models/historical-price-response.ts` |

