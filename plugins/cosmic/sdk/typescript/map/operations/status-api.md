<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatusApi — operations

Accessor: `client.statusApi` · Source: `src/resources/status-api.ts` · 2 operations · Request and error types: namespace `StatusApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cosmic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOpenApiSpec

- **Signature**: `getOpenApiSpec(options?: RequestOptions): ApiPromise<OpenapiJsonResponse, StatusApi.GetOpenApiSpecError>`
- **Wire**: `GET /openapi.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OpenapiJsonResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `StatusApi.GetOpenApiSpecError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `OpenapiJsonResponse` | `openapiJsonResponseSchema` | `src/models/openapi-json-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getStatus

- **Signature**: `getStatus(options?: RequestOptions): ApiPromise<StatusResponse, StatusApi.GetStatusError>`
- **Wire**: `GET /status`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatusResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `StatusApi.GetStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusResponse` | `statusResponseSchema` | `src/models/status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

