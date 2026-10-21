<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantManagementEndpoint — operations

Accessor: `client.grantManagementEndpoint` · Source: `src/resources/grant-management-endpoint.ts` · 1 operation · Request and error types: namespace `GrantManagementEndpoint`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### grantMApi

- **Signature**: `grantMApi(request: GrantManagementEndpoint.GrantMApiRequest, options?: RequestOptions): ApiPromise<GmResponse, GrantManagementEndpoint.GrantMApiError>`
- **Wire**: `POST /api/{serviceId}/gm`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GmResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `GrantManagementEndpoint.GrantMApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantManagementEndpoint.GrantMApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `GmRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GmRequest` | `gmRequestSchema` | `src/models/gm-request.ts` |
| `GmResponse` | `gmResponseSchema` | `src/models/gm-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

