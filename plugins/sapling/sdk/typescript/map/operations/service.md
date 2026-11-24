<!-- Generated file — do not edit; regenerated with the SDK. -->

# Service — operations

Accessor: `client.service` · Source: `src/resources/service.ts` · 2 operations · Request types: namespace `Service`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sapling`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### saplingLiveness

- **Signature**: `saplingLiveness(options?: RequestOptions): ApiPromise<ApiV1LivenessResponse, ApiError>`
- **Wire**: `GET /api/v1/liveness`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1LivenessResponse`
- **Error**: `SaplingError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1LivenessResponse` | `apiV1LivenessResponseSchema` | `src/models/api-v1-liveness-response.ts` |

### saplingVersion

- **Signature**: `saplingVersion(options?: RequestOptions): ApiPromise<ApiV1VersionResponse, ApiError>`
- **Wire**: `GET /api/v1/version`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1VersionResponse`
- **Error**: `SaplingError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1VersionResponse` | `apiV1VersionResponseSchema` | `src/models/api-v1-version-response.ts` |

