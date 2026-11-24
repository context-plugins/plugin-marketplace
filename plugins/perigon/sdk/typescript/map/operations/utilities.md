<!-- Generated file — do not edit; regenerated with the SDK. -->

# Utilities — operations

Accessor: `client.utilities` · Source: `src/resources/utilities.ts` · 1 operation · Request and error types: namespace `Utilities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `perigon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLimits

- **Signature**: `getLimits(request?: Utilities.GetLimitsRequest, options?: RequestOptions): ApiPromise<LimitsResult, Utilities.GetLimitsError>`
- **Wire**: `GET /v1/limits`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LimitsResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Utilities.GetLimitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Utilities.GetLimitsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiKeys` | `query` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LimitsResult` | `limitsResultSchema` | `src/models/limits-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

