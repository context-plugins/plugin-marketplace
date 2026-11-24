<!-- Generated file — do not edit; regenerated with the SDK. -->

# History — operations

Accessor: `client.history` · Source: `src/resources/history.ts` · 1 operation · Request and error types: namespace `History`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVehicleHistory

- **Signature**: `getVehicleHistory(request: History.GetVehicleHistoryRequest, options?: RequestOptions): ApiPromise<HistoryResponse, History.GetVehicleHistoryError>`
- **Wire**: `GET /history`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HistoryResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `History.GetVehicleHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `History.GetVehicleHistoryRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `vin` | `query` | `string` | yes | — |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `HistoryResponse` | `historyResponseSchema` | `src/models/history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

