<!-- Generated file — do not edit; regenerated with the SDK. -->

# Uploads — operations

Accessor: `client.uploads` · Source: `src/resources/uploads.ts` · 1 operation · Request types: namespace `Uploads`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postApiV1Uploads

- **Signature**: `postApiV1Uploads(options?: RequestOptions): ApiPromise<ApiV1UploadsResponse, ApiError>`
- **Wire**: `POST /api/v1/uploads`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UploadsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UploadsResponse` | `apiV1UploadsResponseSchema` | `src/models/api-v1-uploads-response.ts` |

