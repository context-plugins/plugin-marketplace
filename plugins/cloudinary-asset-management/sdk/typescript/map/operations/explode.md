<!-- Generated file — do not edit; regenerated with the SDK. -->

# Explode — operations

Accessor: `client.explode` · Source: `src/resources/explode.ts` · 1 operation · Request and error types: namespace `Explode`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### explodeResource

- **Signature**: `explodeResource(request: Explode.ExplodeResourceRequest, options?: RequestOptions): ApiPromise<ExplodeResponse, Explode.ExplodeResourceError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/explode`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExplodeResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Explode.ExplodeResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Explode.ExplodeResourceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType9` | yes |
| `body` | `body` | — | `ExplodeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType9` | `resourceType9Schema` | `src/models/resource-type9.ts` |
| `ExplodeRequest` | `explodeRequestSchema` | `src/models/explode-request.ts` |
| `ExplodeResponse` | `explodeResponseSchema` | `src/models/explode-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

