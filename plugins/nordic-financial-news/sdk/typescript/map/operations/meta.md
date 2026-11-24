<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.meta` · Source: `src/resources/meta.ts` · 1 operation · Request and error types: namespace `Meta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Meta

- **Signature**: `getApiV1Meta(options?: RequestOptions): ApiPromise<ApiV1MetaResponse, Meta.GetApiV1MetaError>`
- **Wire**: `GET /api/v1/meta`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MetaResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `Meta.GetApiV1MetaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [401] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MetaResponse` | `apiV1MetaResponseSchema` | `src/models/api-v1-meta-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

