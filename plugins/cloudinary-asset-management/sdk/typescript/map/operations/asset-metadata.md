<!-- Generated file — do not edit; regenerated with the SDK. -->

# AssetMetadata — operations

Accessor: `client.assetMetadata` · Source: `src/resources/asset-metadata.ts` · 3 operations · Request and error types: namespace `AssetMetadata`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### updateAssetsContext

- **Signature**: `updateAssetsContext(request: AssetMetadata.UpdateAssetsContextRequest, options?: RequestOptions): ApiPromise<PublicIdsResponse, AssetMetadata.UpdateAssetsContextError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/context`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicIdsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `AssetMetadata.UpdateAssetsContextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssetMetadata.UpdateAssetsContextRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `body` | `body` | — | `ContextUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `ContextUpdateRequest` | `contextUpdateRequestSchema` | `src/models/context-update-request.ts` |
| `PublicIdsResponse` | `publicIdsResponseSchema` | `src/models/public-ids-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### updateAssetsMetadata

- **Signature**: `updateAssetsMetadata(request: AssetMetadata.UpdateAssetsMetadataRequest, options?: RequestOptions): ApiPromise<PublicIdsResponse, AssetMetadata.UpdateAssetsMetadataError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/metadata`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicIdsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `AssetMetadata.UpdateAssetsMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssetMetadata.UpdateAssetsMetadataRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `body` | `body` | — | `MetadataUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `MetadataUpdateRequest` | `metadataUpdateRequestSchema` | `src/models/metadata-update-request.ts` |
| `PublicIdsResponse` | `publicIdsResponseSchema` | `src/models/public-ids-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### updateAssetsTags

- **Signature**: `updateAssetsTags(request: AssetMetadata.UpdateAssetsTagsRequest, options?: RequestOptions): ApiPromise<PublicIdsResponse, AssetMetadata.UpdateAssetsTagsError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/tags`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicIdsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `AssetMetadata.UpdateAssetsTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssetMetadata.UpdateAssetsTagsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `body` | `body` | — | `TagsUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `TagsUpdateRequest` | `tagsUpdateRequestSchema` | `src/models/tags-update-request.ts` |
| `PublicIdsResponse` | `publicIdsResponseSchema` | `src/models/public-ids-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

