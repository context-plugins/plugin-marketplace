<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsiderTrading — operations

Accessor: `client.insiderTrading` · Source: `src/resources/insider-trading.ts` · 1 operation · Request types: namespace `InsiderTrading`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `financial-modeling-prep`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInsiderTrading

- **Signature**: `getInsiderTrading(request?: InsiderTrading.GetInsiderTradingRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>[], ApiError>`
- **Wire**: `GET /insider-trading`
- **Auth**: `apiKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinancialModelingPrepError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsiderTrading.GetInsiderTradingRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `symbol` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `40` |

