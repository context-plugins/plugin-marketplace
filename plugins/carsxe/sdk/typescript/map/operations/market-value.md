<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketValue — operations

Accessor: `client.marketValue` · Source: `src/resources/market-value.ts` · 2 operations · Request and error types: namespace `MarketValue`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMarketValue

- **Signature**: `getMarketValue(request: MarketValue.GetMarketValueRequest, options?: RequestOptions): ApiPromise<MarketvalueResponse, MarketValue.GetMarketValueError>`
- **Wire**: `GET /marketvalue`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarketvalueResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `MarketValue.GetMarketValueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketValue.GetMarketValueRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `vin` | `query` | `string` | yes | — |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `MarketvalueResponse` | `marketvalueResponseSchema` | `src/models/marketvalue-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

### getMarketValueV2

- **Signature**: `getMarketValueV2(request: MarketValue.GetMarketValueV2Request, options?: RequestOptions): ApiPromise<V2MarketvalueResponse, MarketValue.GetMarketValueV2Error>`
- **Wire**: `GET /v2/marketvalue`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2MarketvalueResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `MarketValue.GetMarketValueV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketValue.GetMarketValueV2Request` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `query` | `string` | yes |
| `state` | `query` | `string` | no |
| `mileage` | `query` | `number` | no |
| `condition` | `query` | `Condition` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Condition` | `conditionSchema` | `src/models/condition.ts` |
| `V2MarketvalueResponse` | `v2MarketvalueResponseSchema` | `src/models/v2-marketvalue-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

