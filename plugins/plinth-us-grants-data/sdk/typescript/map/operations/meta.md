<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.meta` · Source: `src/resources/meta.ts` · 1 operation · Request and error types: namespace `Meta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `plinth-us-grants-data`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMeta

- **Signature**: `getMeta(request?: Meta.GetMetaRequest, options?: RequestOptions): ApiPromise<MetaResponse, Meta.GetMetaError>`
- **Wire**: `GET /api/v1/meta`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetaResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Meta.GetMetaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Meta.GetMetaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jurisdiction` | `query` | `Jurisdiction` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Jurisdiction` | `jurisdictionSchema` | `src/models/unions/jurisdiction.ts` |
| `MetaResponse` | `metaResponseSchema` | `src/models/meta-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

