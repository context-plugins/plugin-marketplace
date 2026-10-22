<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.assets` · Source: `src/resources/assets.ts` · 29 operations · Request and error types: namespace `Assets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBackupVersions

- **Signature**: `deleteBackupVersions(request: Assets.DeleteBackupVersionsRequestParams, options?: RequestOptions): ApiPromise<DeleteBackupVersionsResponse, Assets.DeleteBackupVersionsError>`
- **Wire**: `DELETE /v1_1/{cloud_name}/resources/backup/{asset_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBackupVersionsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.DeleteBackupVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.DeleteBackupVersionsRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `assetId` | `path` | `asset_id` | `string` | yes |
| `body` | `body` | — | `DeleteBackupVersionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBackupVersionsRequest` | `deleteBackupVersionsRequestSchema` | `src/models/delete-backup-versions-request.ts` |
| `DeleteBackupVersionsResponse` | `deleteBackupVersionsResponseSchema` | `src/models/delete-backup-versions-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### deleteResourcesByPublicId

- **Signature**: `deleteResourcesByPublicId(request: Assets.DeleteResourcesByPublicIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Assets.DeleteResourcesByPublicIdError>`
- **Wire**: `DELETE /v1_1/{cloud_name}/resources/{resource_type}/{type}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.DeleteResourcesByPublicIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.DeleteResourcesByPublicIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `type` | `path` | — | `DeliveryTypeAll1` | yes |
| `body` | `body` | — | `DeleteResourceByPublicIdsRequest3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `DeliveryTypeAll1` | `deliveryTypeAll1Schema` | `src/models/unions/delivery-type-all1.ts` |
| `DeleteResourceByPublicIdsRequest3` | `deleteResourceByPublicIdsRequest3Schema` | `src/models/unions/delete-resource-by-public-ids-request3.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### derivedDestroy

- **Signature**: `derivedDestroy(request: Assets.DerivedDestroyRequestParams, options?: RequestOptions): ApiPromise<DerivedDestroyResponse, Assets.DerivedDestroyError>`
- **Wire**: `DELETE /v1_1/{cloud_name}/derived_resources`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DerivedDestroyResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.DerivedDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.DerivedDestroyRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `DerivedDestroyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DerivedDestroyRequest` | `derivedDestroyRequestSchema` | `src/models/derived-destroy-request.ts` |
| `DerivedDestroyResponse` | `derivedDestroyResponseSchema` | `src/models/derived-destroy-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### destroyByAssetId

- **Signature**: `destroyByAssetId(request: Assets.DestroyByAssetIdRequestParams, options?: RequestOptions): ApiPromise<DestroyByAssetIdResponse, Assets.DestroyByAssetIdError>`
- **Wire**: `POST /v1_1/{cloud_name}/asset/destroy`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DestroyByAssetIdResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.DestroyByAssetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.DestroyByAssetIdRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `DestroyByAssetIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DestroyByAssetIdRequest` | `destroyByAssetIdRequestSchema` | `src/models/destroy-by-asset-id-request.ts` |
| `DestroyByAssetIdResponse` | `destroyByAssetIdResponseSchema` | `src/models/destroy-by-asset-id-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### downloadAsset

- **Signature**: `downloadAsset(request: Assets.DownloadAssetRequest, options?: RequestOptions): ApiPromise<undefined, Assets.DownloadAssetError>`
- **Wire**: `GET /v1_1/{cloud_name}/{resource_type}/download`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.DownloadAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.DownloadAssetRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes | — |
| `publicId` | `query` | `public_id` | `string` | yes | — |
| `format` | `query` | — | `string` | no | — |
| `type` | `query` | — | `ManagedDeliveryType` | no | — |
| `expiresAt` | `query` | `expires_at` | `number` | no | — |
| `attachment` | `query` | — | `boolean` | no | `false` |
| `targetFilename` | `query` | `target_filename` | `string` | no | — |
| `transformation` | `query` | — | `string` | no | — |
| `apiKey` | `query` | `api_key` | `string` | no | — |
| `signature` | `query` | — | `string` | no | — |
| `timestamp` | `query` | — | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `ManagedDeliveryType` | `managedDeliveryTypeSchema` | `src/models/managed-delivery-type.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### downloadAssetByAssetId

- **Signature**: `downloadAssetByAssetId(request: Assets.DownloadAssetByAssetIdRequest, options?: RequestOptions): ApiPromise<undefined, Assets.DownloadAssetByAssetIdError>`
- **Wire**: `GET /v1_1/{cloud_name}/asset/download`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.DownloadAssetByAssetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.DownloadAssetByAssetIdRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `assetId` | `query` | `asset_id` | `string` | yes | — |
| `format` | `query` | — | `string` | no | — |
| `transformation` | `query` | — | `string` | no | — |
| `attachment` | `query` | — | `boolean` | no | `false` |
| `targetFilename` | `query` | `target_filename` | `string` | no | — |
| `streamingAttachment` | `query` | `streaming_attachment` | `boolean` | no | — |
| `expiresAt` | `query` | `expires_at` | `number` | no | — |
| `apiKey` | `query` | `api_key` | `string` | no | — |
| `signature` | `query` | — | `string` | no | — |
| `timestamp` | `query` | — | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### downloadBackupAsset

- **Signature**: `downloadBackupAsset(request: Assets.DownloadBackupAssetRequest, options?: RequestOptions): ApiPromise<BinaryContent, Assets.DownloadBackupAssetError>`
- **Wire**: `GET /v1_1/{cloud_name}/download_backup`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.DownloadBackupAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.DownloadBackupAssetRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `assetId` | `query` | `asset_id` | `string` | yes |
| `versionId` | `query` | `version_id` | `string` | yes |
| `apiKey` | `query` | `api_key` | `string` | no |
| `signature` | `query` | — | `string` | no |
| `timestamp` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### explicitAsset

- **Signature**: `explicitAsset(request: Assets.ExplicitAssetRequest, options?: RequestOptions): ApiPromise<UploadResponse, Assets.ExplicitAssetError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/explicit`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ExplicitAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ExplicitAssetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `body` | `body` | — | `ExplicitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `ExplicitRequest` | `explicitRequestSchema` | `src/models/explicit-request.ts` |
| `UploadResponse` | `uploadResponseSchema` | `src/models/upload-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### generateArchive

- **Signature**: `generateArchive(request: Assets.GenerateArchiveRequestParams, options?: RequestOptions): ApiPromise<BinaryContent, Assets.GenerateArchiveError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/generate_archive`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.GenerateArchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.GenerateArchiveRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ArchiveResourceType` | yes |
| `body` | `body` | — | `GenerateArchiveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ArchiveResourceType` | `archiveResourceTypeSchema` | `src/models/archive-resource-type.ts` |
| `GenerateArchiveRequest` | `generateArchiveRequestSchema` | `src/models/generate-archive-request.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getResourceByAssetId

- **Signature**: `getResourceByAssetId(request: Assets.GetResourceByAssetIdRequest, options?: RequestOptions): ApiPromise<Info, Assets.GetResourceByAssetIdError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/{asset_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Info`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.GetResourceByAssetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.GetResourceByAssetIdRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `assetId` | `path` | `asset_id` | `string` | yes | — |
| `colors` | `query` | — | `boolean` | no | `false` |
| `mediaMetadata` | `query` | `media_metadata` | `boolean` | no | `false` |
| `faces` | `query` | — | `boolean` | no | `false` |
| `qualityAnalysis` | `query` | `quality_analysis` | `boolean` | no | `false` |
| `accessibilityAnalysis` | `query` | `accessibility_analysis` | `boolean` | no | `false` |
| `pages` | `query` | — | `boolean` | no | `false` |
| `phash` | `query` | — | `boolean` | no | `false` |
| `coordinates` | `query` | — | `boolean` | no | `false` |
| `versions` | `query` | — | `boolean` | no | `false` |
| `maxResults` | `query` | `max_results` | `number` | no | `10` |
| `derivedNextCursor` | `query` | `derived_next_cursor` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Info` | `infoSchema` | `src/models/info.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getResourceByBody

- **Signature**: `getResourceByBody(request: Assets.GetResourceByBodyRequest, options?: RequestOptions): ApiPromise<ResourceInternalResponse, Assets.GetResourceByBodyError>`
- **Wire**: `POST /v1_1/{cloud_name}/resources/get_resource`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResourceInternalResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.GetResourceByBodyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.GetResourceByBodyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `ResourceGetByBodyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceGetByBodyRequest` | `resourceGetByBodyRequestSchema` | `src/models/resource-get-by-body-request.ts` |
| `ResourceInternalResponse` | `resourceInternalResponseSchema` | `src/models/resource-internal-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getResourceByPublicId

- **Signature**: `getResourceByPublicId(request: Assets.GetResourceByPublicIdRequest, options?: RequestOptions): ApiPromise<Info, Assets.GetResourceByPublicIdError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/{resource_type}/{type}/{public_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Info`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.GetResourceByPublicIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.GetResourceByPublicIdRequest` (15):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes | — |
| `type` | `path` | — | `DeliveryTypeAll1` | yes | — |
| `publicId` | `path` | `public_id` | `string` | yes | — |
| `colors` | `query` | — | `boolean` | no | `false` |
| `mediaMetadata` | `query` | `media_metadata` | `boolean` | no | `false` |
| `faces` | `query` | — | `boolean` | no | `false` |
| `qualityAnalysis` | `query` | `quality_analysis` | `boolean` | no | `false` |
| `accessibilityAnalysis` | `query` | `accessibility_analysis` | `boolean` | no | `false` |
| `pages` | `query` | — | `boolean` | no | `false` |
| `phash` | `query` | — | `boolean` | no | `false` |
| `coordinates` | `query` | — | `boolean` | no | `false` |
| `versions` | `query` | — | `boolean` | no | `false` |
| `maxResults` | `query` | `max_results` | `number` | no | `10` |
| `derivedNextCursor` | `query` | `derived_next_cursor` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `DeliveryTypeAll1` | `deliveryTypeAll1Schema` | `src/models/unions/delivery-type-all1.ts` |
| `Info` | `infoSchema` | `src/models/info.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### invalidateDerivedByUrls

- **Signature**: `invalidateDerivedByUrls(request: Assets.InvalidateDerivedByUrlsRequest, options?: RequestOptions): ApiPromise<InvalidateByUrlsResponse, Assets.InvalidateDerivedByUrlsError>`
- **Wire**: `DELETE /v1_1/{cloud_name}/derived_resources/invalidate_by_urls`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvalidateByUrlsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.InvalidateDerivedByUrlsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.InvalidateDerivedByUrlsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `InvalidateByUrlsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidateByUrlsRequest` | `invalidateByUrlsRequestSchema` | `src/models/invalidate-by-urls-request.ts` |
| `InvalidateByUrlsResponse` | `invalidateByUrlsResponseSchema` | `src/models/invalidate-by-urls-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listImages

- **Signature**: `listImages(request: Assets.ListImagesRequest, options?: RequestOptions): ApiPromise<ListResponse, Assets.ListImagesError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/image`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListImagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListImagesRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `type` | `query` | — | `DeliveryTypeAll1` | no | — |
| `prefix` | `query` | — | `string` | no | — |
| `publicIds` | `query` | `public_ids` | `string[]` | no | — |
| `tags` | `query` | — | `boolean` | no | `false` |
| `nextCursor` | `query` | `next_cursor` | `string` | no | — |
| `maxResults` | `query` | `max_results` | `number` | no | — |
| `direction` | `query` | — | `DirectionEnum` | no | — |
| `startAt` | `query` | `start_at` | `Date` (date-time) | no | — |
| `fields` | `query` | — | `Fields` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeliveryTypeAll1` | `deliveryTypeAll1Schema` | `src/models/unions/delivery-type-all1.ts` |
| `DirectionEnum` | `directionEnumSchema` | `src/models/direction-enum.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listRawFiles

- **Signature**: `listRawFiles(request: Assets.ListRawFilesRequest, options?: RequestOptions): ApiPromise<ListResponse, Assets.ListRawFilesError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/raw`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListRawFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListRawFilesRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `type` | `query` | — | `DeliveryTypeAll1` | no | — |
| `prefix` | `query` | — | `string` | no | — |
| `publicIds` | `query` | `public_ids` | `string[]` | no | — |
| `tags` | `query` | — | `boolean` | no | `false` |
| `nextCursor` | `query` | `next_cursor` | `string` | no | — |
| `maxResults` | `query` | `max_results` | `number` | no | — |
| `direction` | `query` | — | `DirectionEnum` | no | — |
| `startAt` | `query` | `start_at` | `Date` (date-time) | no | — |
| `fields` | `query` | — | `Fields` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeliveryTypeAll1` | `deliveryTypeAll1Schema` | `src/models/unions/delivery-type-all1.ts` |
| `DirectionEnum` | `directionEnumSchema` | `src/models/direction-enum.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listResourceTags

- **Signature**: `listResourceTags(request: Assets.ListResourceTagsRequest, options?: RequestOptions): ApiPromise<TagsListResponse, Assets.ListResourceTagsError>`
- **Wire**: `GET /v1_1/{cloud_name}/tags/{resource_type}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagsListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListResourceTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListResourceTagsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `prefix` | `query` | — | `string` | no |
| `nextCursor` | `query` | `next_cursor` | `string` | no |
| `maxResults` | `query` | `max_results` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `TagsListResponse` | `tagsListResponseSchema` | `src/models/tags-list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listResourceTypes

- **Signature**: `listResourceTypes(request: Assets.ListResourceTypesRequest, options?: RequestOptions): ApiPromise<ResourceTypesResponse, Assets.ListResourceTypesError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResourceTypesResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListResourceTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListResourceTypesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceTypesResponse` | `resourceTypesResponseSchema` | `src/models/resource-types-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listResourcesByAssetFolder

- **Signature**: `listResourcesByAssetFolder(request: Assets.ListResourcesByAssetFolderRequest, options?: RequestOptions): ApiPromise<ListResponse, Assets.ListResourcesByAssetFolderError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/by_asset_folder`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListResourcesByAssetFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListResourcesByAssetFolderRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `assetFolder` | `query` | `asset_folder` | `string` | yes |
| `resourceType` | `query` | `resource_type` | `ResourceType` | no |
| `nextCursor` | `query` | `next_cursor` | `string` | no |
| `maxResults` | `query` | `max_results` | `number` | no |
| `direction` | `query` | — | `DirectionEnum` | no |
| `fields` | `query` | — | `Fields` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `DirectionEnum` | `directionEnumSchema` | `src/models/direction-enum.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listResourcesByAssetIDs

- **Signature**: `listResourcesByAssetIDs(request: Assets.ListResourcesByAssetIDsRequest, options?: RequestOptions): ApiPromise<ListResponse, Assets.ListResourcesByAssetIDsError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/by_asset_ids`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListResourcesByAssetIDsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListResourcesByAssetIDsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `assetIds` | `query` | `asset_ids` | `string[]` | yes |
| `resourceType` | `query` | `resource_type` | `ResourceType` | no |
| `fields` | `query` | — | `Fields` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listResourcesByContainerId

- **Signature**: `listResourcesByContainerId(request: Assets.ListResourcesByContainerIdRequest, options?: RequestOptions): ApiPromise<ResourcesByContainerIdResponse, Assets.ListResourcesByContainerIdError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/by_container_id/{container_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResourcesByContainerIdResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListResourcesByContainerIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListResourcesByContainerIdRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `containerId` | `path` | `container_id` | `string` | yes | — |
| `maxResults` | `query` | `max_results` | `number` | no | `10` |
| `nextCursor` | `query` | `next_cursor` | `string` | no | — |
| `sortBy` | `query` | `sort_by` | `string` | no | — |
| `fields` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourcesByContainerIdResponse` | `resourcesByContainerIdResponseSchema` | `src/models/resources-by-container-id-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listResourcesByContext

- **Signature**: `listResourcesByContext(request: Assets.ListResourcesByContextRequest, options?: RequestOptions): ApiPromise<ListResponse, Assets.ListResourcesByContextError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/{resource_type}/context`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListResourcesByContextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListResourcesByContextRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `key` | `query` | — | `string` | yes |
| `value` | `query` | — | `string` | no |
| `nextCursor` | `query` | `next_cursor` | `string` | no |
| `maxResults` | `query` | `max_results` | `number` | no |
| `direction` | `query` | — | `DirectionEnum` | no |
| `fields` | `query` | — | `Fields` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `DirectionEnum` | `directionEnumSchema` | `src/models/direction-enum.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listResourcesByExternalIDs

- **Signature**: `listResourcesByExternalIDs(request: Assets.ListResourcesByExternalIDsRequest, options?: RequestOptions): ApiPromise<ListResponse, Assets.ListResourcesByExternalIDsError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/by_external_ids`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListResourcesByExternalIDsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListResourcesByExternalIDsRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `externalIds` | `query` | `external_ids` | `string[]` | yes | — |
| `resourceType` | `query` | `resource_type` | `ResourceType` | no | — |
| `fields` | `query` | — | `Fields` | no | — |
| `tags` | `query` | — | `boolean` | no | `false` |
| `context` | `query` | — | `boolean` | no | `false` |
| `metadata` | `query` | — | `boolean` | no | `false` |
| `moderations` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listResourcesByModerationKindAndStatus

- **Signature**: `listResourcesByModerationKindAndStatus(request: Assets.ListResourcesByModerationKindAndStatusRequest, options?: RequestOptions): ApiPromise<ListResponse, Assets.ListResourcesByModerationKindAndStatusError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/{resource_type}/moderations/{moderation_kind}/{moderation_status}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListResourcesByModerationKindAndStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListResourcesByModerationKindAndStatusRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `moderationKind` | `path` | `moderation_kind` | `ModerationKind` | yes |
| `moderationStatus` | `path` | `moderation_status` | `ModerationStatus2` | yes |
| `fields` | `query` | — | `Fields` | no |
| `nextCursor` | `query` | `next_cursor` | `string` | no |
| `maxResults` | `query` | `max_results` | `number` | no |
| `direction` | `query` | — | `DirectionEnum` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `ModerationKind` | `moderationKindSchema` | `src/models/moderation-kind.ts` |
| `ModerationStatus2` | `moderationStatus2Schema` | `src/models/moderation-status2.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `DirectionEnum` | `directionEnumSchema` | `src/models/direction-enum.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listVideos

- **Signature**: `listVideos(request: Assets.ListVideosRequest, options?: RequestOptions): ApiPromise<ListResponse, Assets.ListVideosError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/video`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.ListVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListVideosRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `type` | `query` | — | `DeliveryTypeAll1` | no | — |
| `prefix` | `query` | — | `string` | no | — |
| `publicIds` | `query` | `public_ids` | `string[]` | no | — |
| `tags` | `query` | — | `boolean` | no | `false` |
| `nextCursor` | `query` | `next_cursor` | `string` | no | — |
| `maxResults` | `query` | `max_results` | `number` | no | — |
| `direction` | `query` | — | `DirectionEnum` | no | — |
| `startAt` | `query` | `start_at` | `Date` (date-time) | no | — |
| `fields` | `query` | — | `Fields` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeliveryTypeAll1` | `deliveryTypeAll1Schema` | `src/models/unions/delivery-type-all1.ts` |
| `DirectionEnum` | `directionEnumSchema` | `src/models/direction-enum.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### renameAsset

- **Signature**: `renameAsset(request: Assets.RenameAssetRequest, options?: RequestOptions): ApiPromise<UploadResponse, Assets.RenameAssetError>`
- **Wire**: `POST /v1_1/{cloud_name}/{resource_type}/rename`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.RenameAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.RenameAssetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `body` | `body` | — | `RenameRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `RenameRequest` | `renameRequestSchema` | `src/models/rename-request.ts` |
| `UploadResponse` | `uploadResponseSchema` | `src/models/upload-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### restoreResourcesByAssetIDs

- **Signature**: `restoreResourcesByAssetIDs(request: Assets.RestoreResourcesByAssetIDsRequest, options?: RequestOptions): ApiPromise<Record<string, RestoreResponse1>, Assets.RestoreResourcesByAssetIDsError>`
- **Wire**: `POST /v1_1/{cloud_name}/resources/restore`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, RestoreResponse1>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.RestoreResourcesByAssetIDsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.RestoreResourcesByAssetIDsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `RestoreRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestoreRequest` | `restoreRequestSchema` | `src/models/restore-request.ts` |
| `RestoreResponse1` | `restoreResponse1Schema` | `src/models/unions/restore-response1.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### updateResourceByAssetId

- **Signature**: `updateResourceByAssetId(request: Assets.UpdateResourceByAssetIdRequest, options?: RequestOptions): ApiPromise<Info, Assets.UpdateResourceByAssetIdError>`
- **Wire**: `PUT /v1_1/{cloud_name}/resources/{asset_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Info`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.UpdateResourceByAssetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.UpdateResourceByAssetIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `assetId` | `path` | `asset_id` | `string` | yes |
| `body` | `body` | — | `ResourceUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceUpdateRequest` | `resourceUpdateRequestSchema` | `src/models/resource-update-request.ts` |
| `Info` | `infoSchema` | `src/models/info.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### updateResourceByBody

- **Signature**: `updateResourceByBody(request: Assets.UpdateResourceByBodyRequest, options?: RequestOptions): ApiPromise<ResourceInternalResponse, Assets.UpdateResourceByBodyError>`
- **Wire**: `POST /v1_1/{cloud_name}/resources/update`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResourceInternalResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.UpdateResourceByBodyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.UpdateResourceByBodyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `ResourceUpdateByBodyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceUpdateByBodyRequest` | `resourceUpdateByBodyRequestSchema` | `src/models/resource-update-by-body-request.ts` |
| `ResourceInternalResponse` | `resourceInternalResponseSchema` | `src/models/resource-internal-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### updateResourceByPublicId

- **Signature**: `updateResourceByPublicId(request: Assets.UpdateResourceByPublicIdRequest, options?: RequestOptions): ApiPromise<Info, Assets.UpdateResourceByPublicIdError>`
- **Wire**: `POST /v1_1/{cloud_name}/resources/{resource_type}/{type}/{public_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Info`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Assets.UpdateResourceByPublicIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.UpdateResourceByPublicIdRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `type` | `path` | — | `DeliveryTypeAll1` | yes |
| `publicId` | `path` | `public_id` | `string` | yes |
| `body` | `body` | — | `ResourceUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `DeliveryTypeAll1` | `deliveryTypeAll1Schema` | `src/models/unions/delivery-type-all1.ts` |
| `ResourceUpdateRequest` | `resourceUpdateRequestSchema` | `src/models/resource-update-request.ts` |
| `Info` | `infoSchema` | `src/models/info.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

