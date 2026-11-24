<!-- Generated file — do not edit; regenerated with the SDK. -->

# LienTheft — operations

Accessor: `client.lienTheft` · Source: `src/resources/lien-theft.ts` · 1 operation · Request and error types: namespace `LienTheft`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLienTheft

- **Signature**: `getLienTheft(request: LienTheft.GetLienTheftRequest, options?: RequestOptions): ApiPromise<V1LienTheftResponse, LienTheft.GetLienTheftError>`
- **Wire**: `GET /v1/lien-theft`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1LienTheftResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `LienTheft.GetLienTheftError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LienTheft.GetLienTheftRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LienTheftResponse` | `v1LienTheftResponseSchema` | `src/models/v1-lien-theft-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

