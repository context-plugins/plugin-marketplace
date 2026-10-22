<!-- Generated file — do not edit; regenerated with the SDK. -->

# AssetRelations — operations

Accessor: `client.assetRelations` · Source: `src/resources/asset-relations.ts` · 4 operations · Request and error types: namespace `AssetRelations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAssetRelationsByAssetId

- **Signature**: `createAssetRelationsByAssetId(request: AssetRelations.CreateAssetRelationsByAssetIdRequest, options?: RequestOptions): ApiPromise<AssetRelationsResponse, AssetRelations.CreateAssetRelationsByAssetIdError>`
- **Wire**: `POST /v1_1/{cloud_name}/resources/related_assets/{asset_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetRelationsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `AssetRelations.CreateAssetRelationsByAssetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssetRelations.CreateAssetRelationsByAssetIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `assetId` | `path` | `asset_id` | `string` | yes |
| `body` | `body` | — | `RelateAssetsByAssetIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RelateAssetsByAssetIdRequest` | `relateAssetsByAssetIdRequestSchema` | `src/models/relate-assets-by-asset-id-request.ts` |
| `AssetRelationsResponse` | `assetRelationsResponseSchema` | `src/models/asset-relations-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### createAssetRelationsByPublicId

- **Signature**: `createAssetRelationsByPublicId(request: AssetRelations.CreateAssetRelationsByPublicIdRequest, options?: RequestOptions): ApiPromise<AssetRelationsResponse, AssetRelations.CreateAssetRelationsByPublicIdError>`
- **Wire**: `POST /v1_1/{cloud_name}/resources/related_assets/{resource_type}/{type}/{public_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetRelationsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `AssetRelations.CreateAssetRelationsByPublicIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssetRelations.CreateAssetRelationsByPublicIdRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes | — |
| `type` | `path` | — | `ManagedDeliveryType` | no | `ManagedDeliveryType.Upload` |
| `publicId` | `path` | `public_id` | `string` | yes | — |
| `body` | `body` | — | `RelateAssetsByPublicIdRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `ManagedDeliveryType` | `managedDeliveryTypeSchema` | `src/models/managed-delivery-type.ts` |
| `RelateAssetsByPublicIdRequest` | `relateAssetsByPublicIdRequestSchema` | `src/models/relate-assets-by-public-id-request.ts` |
| `AssetRelationsResponse` | `assetRelationsResponseSchema` | `src/models/asset-relations-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### deleteAssetRelationsByAssetId

- **Signature**: `deleteAssetRelationsByAssetId(request: AssetRelations.DeleteAssetRelationsByAssetIdRequest, options?: RequestOptions): ApiPromise<AssetRelationsResponse, AssetRelations.DeleteAssetRelationsByAssetIdError>`
- **Wire**: `DELETE /v1_1/{cloud_name}/resources/related_assets/{asset_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetRelationsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `AssetRelations.DeleteAssetRelationsByAssetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssetRelations.DeleteAssetRelationsByAssetIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `assetId` | `path` | `asset_id` | `string` | yes |
| `body` | `body` | — | `UnrelateAssetsByAssetIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnrelateAssetsByAssetIdRequest` | `unrelateAssetsByAssetIdRequestSchema` | `src/models/unrelate-assets-by-asset-id-request.ts` |
| `AssetRelationsResponse` | `assetRelationsResponseSchema` | `src/models/asset-relations-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### deleteAssetRelationsByPublicId

- **Signature**: `deleteAssetRelationsByPublicId(request: AssetRelations.DeleteAssetRelationsByPublicIdRequest, options?: RequestOptions): ApiPromise<AssetRelationsResponse, AssetRelations.DeleteAssetRelationsByPublicIdError>`
- **Wire**: `DELETE /v1_1/{cloud_name}/resources/related_assets/{resource_type}/{type}/{public_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetRelationsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `AssetRelations.DeleteAssetRelationsByPublicIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssetRelations.DeleteAssetRelationsByPublicIdRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes | — |
| `type` | `path` | — | `ManagedDeliveryType` | no | `ManagedDeliveryType.Upload` |
| `publicId` | `path` | `public_id` | `string` | yes | — |
| `body` | `body` | — | `UnrelateAssetsByPublicIdRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `ManagedDeliveryType` | `managedDeliveryTypeSchema` | `src/models/managed-delivery-type.ts` |
| `UnrelateAssetsByPublicIdRequest` | `unrelateAssetsByPublicIdRequestSchema` | `src/models/unrelate-assets-by-public-id-request.ts` |
| `AssetRelationsResponse` | `assetRelationsResponseSchema` | `src/models/asset-relations-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

