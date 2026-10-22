<!-- Generated file — do not edit; regenerated with the SDK. -->

# KnowledgeBaseApi — operations

Accessor: `client.knowledgeBaseApi` · Source: `src/resources/knowledge-base-api.ts` · 22 operations · Request and error types: namespace `KnowledgeBaseApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### createFolder

- **Signature**: `createFolder(request: KnowledgeBaseApi.CreateFolderRequest, options?: RequestOptions): ApiPromise<FolderCreateResponseSchema, KnowledgeBaseApi.CreateFolderError>`
- **Wire**: `POST /knowledgeBase/{kbId}/folder`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderCreateResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.CreateFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.CreateFolderRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `kbId` | `path` | `string` | yes |
| `folderId` | `query` | `string` | no |
| `body` | `body` | `KnowledgeBaseFolderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KnowledgeBaseFolderRequest` | `knowledgeBaseFolderRequestSchema` | `src/models/knowledge-base-folder-request.ts` |
| `FolderCreateResponseSchema` | `folderCreateResponseSchemaSchema` | `src/models/folder-create-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createKnowledgeBase

- **Signature**: `createKnowledgeBase(request: KnowledgeBaseApi.CreateKnowledgeBaseRequest, options?: RequestOptions): ApiPromise<KnowledgeBaseCreateResponse, KnowledgeBaseApi.CreateKnowledgeBaseError>`
- **Wire**: `POST /knowledgeBase`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `KnowledgeBaseCreateResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.CreateKnowledgeBaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.CreateKnowledgeBaseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `KnowledgeBaseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KnowledgeBaseRequest` | `knowledgeBaseRequestSchema` | `src/models/knowledge-base-request.ts` |
| `KnowledgeBaseCreateResponse` | `knowledgeBaseCreateResponseSchema` | `src/models/knowledge-base-create-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteFolder

- **Signature**: `deleteFolder(request: KnowledgeBaseApi.DeleteFolderRequest, options?: RequestOptions): ApiPromise<FolderDeleteResponseSchema, KnowledgeBaseApi.DeleteFolderError>`
- **Wire**: `DELETE /knowledgeBase/{kbId}/folder/{folderId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderDeleteResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.DeleteFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.DeleteFolderRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `kbId` | `path` | `string` | yes |
| `folderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderDeleteResponseSchema` | `folderDeleteResponseSchemaSchema` | `src/models/folder-delete-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteKnowledgeBase

- **Signature**: `deleteKnowledgeBase(request: KnowledgeBaseApi.DeleteKnowledgeBaseRequest, options?: RequestOptions): ApiPromise<DeleteKnowledgeBaseById, KnowledgeBaseApi.DeleteKnowledgeBaseError>`
- **Wire**: `DELETE /knowledgeBase/{kbId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteKnowledgeBaseById`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.DeleteKnowledgeBaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"errorResponse5"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.DeleteKnowledgeBaseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `kbId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteKnowledgeBaseById` | `deleteKnowledgeBaseByIdSchema` | `src/models/delete-knowledge-base-by-id.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteRecord

- **Signature**: `deleteRecord(request: KnowledgeBaseApi.DeleteRecordRequest, options?: RequestOptions): ApiPromise<DeleteRecordResponseSchema, KnowledgeBaseApi.DeleteRecordError>`
- **Wire**: `DELETE /knowledgeBase/record/{recordId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteRecordResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.DeleteRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.DeleteRecordRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recordId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteRecordResponseSchema` | `deleteRecordResponseSchemaSchema` | `src/models/delete-record-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getKnowledgeBase

- **Signature**: `getKnowledgeBase(request: KnowledgeBaseApi.GetKnowledgeBaseRequest, options?: RequestOptions): ApiPromise<GetKnowledgeBaseById, KnowledgeBaseApi.GetKnowledgeBaseError>`
- **Wire**: `GET /knowledgeBase/{kbId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetKnowledgeBaseById`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.GetKnowledgeBaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"errorResponse5"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.GetKnowledgeBaseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `kbId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetKnowledgeBaseById` | `getKnowledgeBaseByIdSchema` | `src/models/get-knowledge-base-by-id.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getKnowledgeHubChildNodes

- **Signature**: `getKnowledgeHubChildNodes(request: KnowledgeBaseApi.GetKnowledgeHubChildNodesRequest, options?: RequestOptions): ApiPromise<KnowledgeHubNodesResponse, KnowledgeBaseApi.GetKnowledgeHubChildNodesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `KnowledgeHubNodesResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.GetKnowledgeHubChildNodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"knowledgeBaseKnowledgeHubNodes400Error1"` [400] `KnowledgeBaseKnowledgeHubNodes400Error1` · `"knowledgeBaseKnowledgeHubNodes401Error1"` [401] `KnowledgeBaseKnowledgeHubNodes401Error1` · `"knowledgeBaseKnowledgeHubNodes403Error1"` [403] `KnowledgeBaseKnowledgeHubNodes403Error1` · `"knowledgeBaseKnowledgeHubNodes404Error1"` [404] `KnowledgeBaseKnowledgeHubNodes404Error1` · `"knowledgeBaseKnowledgeHubNodes500Error1"` [500] `KnowledgeBaseKnowledgeHubNodes500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.GetKnowledgeHubChildNodesRequest` (19):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `parentType` | `path` | `ParentType` | yes | — |
| `parentId` | `path` | `string` | yes | — |
| `onlyContainers` | `query` | `boolean` | no | `false` |
| `page` | `query` | `number` | no | `1` |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |
| `sortBy` | `query` | `SortBy2` | no | `SortBy2.UpdatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `q` | `query` | `string` | no | — |
| `nodeTypes` | `query` | `string` | no | — |
| `recordTypes` | `query` | `string` | no | — |
| `origins` | `query` | `string` | no | — |
| `connectorIds` | `query` | `string` | no | — |
| `indexingStatus` | `query` | `string` | no | — |
| `createdAt` | `query` | `string` | no | — |
| `updatedAt` | `query` | `string` | no | — |
| `size` | `query` | `string` | no | — |
| `flattened` | `query` | `boolean` | no | — |
| `include` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParentType` | `parentTypeSchema` | `src/models/parent-type.ts` |
| `SortBy2` | `sortBy2Schema` | `src/models/sort-by2.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `KnowledgeHubNodesResponse` | `knowledgeHubNodesResponseSchema` | `src/models/knowledge-hub-nodes-response.ts` |
| `KnowledgeBaseKnowledgeHubNodes400Error1` | `knowledgeBaseKnowledgeHubNodes400Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes400-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes401Error1` | `knowledgeBaseKnowledgeHubNodes401Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes401-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes403Error1` | `knowledgeBaseKnowledgeHubNodes403Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes403-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes404Error1` | `knowledgeBaseKnowledgeHubNodes404Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes404-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes500Error1` | `knowledgeBaseKnowledgeHubNodes500Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes500-error1.ts` |

### getKnowledgeHubRootNodes

- **Signature**: `getKnowledgeHubRootNodes(request: KnowledgeBaseApi.GetKnowledgeHubRootNodesRequest, options?: RequestOptions): ApiPromise<KnowledgeHubNodesResponse, KnowledgeBaseApi.GetKnowledgeHubRootNodesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /knowledgeBase/knowledge-hub/nodes`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `KnowledgeHubNodesResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.GetKnowledgeHubRootNodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"knowledgeBaseKnowledgeHubNodes400Error1"` [400] `KnowledgeBaseKnowledgeHubNodes400Error1` · `"knowledgeBaseKnowledgeHubNodes401Error1"` [401] `KnowledgeBaseKnowledgeHubNodes401Error1` · `"knowledgeBaseKnowledgeHubNodes403Error1"` [403] `KnowledgeBaseKnowledgeHubNodes403Error1` · `"knowledgeBaseKnowledgeHubNodes500Error1"` [500] `KnowledgeBaseKnowledgeHubNodes500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.GetKnowledgeHubRootNodesRequest` (17):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `onlyContainers` | `query` | `boolean` | no | `false` |
| `page` | `query` | `number` | no | `1` |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |
| `sortBy` | `query` | `SortBy2` | no | `SortBy2.UpdatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `q` | `query` | `string` | no | — |
| `nodeTypes` | `query` | `string` | no | — |
| `recordTypes` | `query` | `string` | no | — |
| `origins` | `query` | `string` | no | — |
| `connectorIds` | `query` | `string` | no | — |
| `indexingStatus` | `query` | `string` | no | — |
| `createdAt` | `query` | `string` | no | — |
| `updatedAt` | `query` | `string` | no | — |
| `size` | `query` | `string` | no | — |
| `flattened` | `query` | `boolean` | no | — |
| `include` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy2` | `sortBy2Schema` | `src/models/sort-by2.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `KnowledgeHubNodesResponse` | `knowledgeHubNodesResponseSchema` | `src/models/knowledge-hub-nodes-response.ts` |
| `KnowledgeBaseKnowledgeHubNodes400Error1` | `knowledgeBaseKnowledgeHubNodes400Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes400-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes401Error1` | `knowledgeBaseKnowledgeHubNodes401Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes401-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes403Error1` | `knowledgeBaseKnowledgeHubNodes403Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes403-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes500Error1` | `knowledgeBaseKnowledgeHubNodes500Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes500-error1.ts` |

### getRecordById

- **Signature**: `getRecordById(request: KnowledgeBaseApi.GetRecordByIdRequest, options?: RequestOptions): ApiPromise<GetRecordByIdResponseSchema, KnowledgeBaseApi.GetRecordByIdError>`
- **Wire**: `GET /knowledgeBase/record/{recordId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetRecordByIdResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.GetRecordByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.GetRecordByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recordId` | `path` | `string` | yes |
| `convertTo` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetRecordByIdResponseSchema` | `getRecordByIdResponseSchemaSchema` | `src/models/get-record-by-id-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getUploadLimits

- **Signature**: `getUploadLimits(options?: RequestOptions): ApiPromise<UploadLimitsResponseSchema, KnowledgeBaseApi.GetUploadLimitsError>`
- **Wire**: `GET /knowledgeBase/limits`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UploadLimitsResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.GetUploadLimitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadLimitsResponseSchema` | `uploadLimitsResponseSchemaSchema` | `src/models/upload-limits-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listKnowledgeBases

- **Signature**: `listKnowledgeBases(request: KnowledgeBaseApi.ListKnowledgeBasesRequest, options?: RequestOptions): ApiPromise<GetAllKnowledgeBaseResponseSchema, KnowledgeBaseApi.ListKnowledgeBasesError>`
- **Wire**: `GET /knowledgeBase`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetAllKnowledgeBaseResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.ListKnowledgeBasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.ListKnowledgeBasesRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `search` | `query` | `string` | no | — |
| `permissions` | `query` | `string` | no | — |
| `sortBy` | `query` | `SortBy` | no | `SortBy.Name` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Asc` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `GetAllKnowledgeBaseResponseSchema` | `getAllKnowledgeBaseResponseSchemaSchema` | `src/models/get-all-knowledge-base-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listTrash

- **Signature**: `listTrash(request: KnowledgeBaseApi.ListTrashRequest, options?: RequestOptions): ApiPromise<ListTrashResponseSchema, KnowledgeBaseApi.ListTrashError>`
- **Wire**: `GET /knowledgeBase/{kbId}/trash`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTrashResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.ListTrashError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.ListTrashRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `kbId` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `25` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTrashResponseSchema` | `listTrashResponseSchemaSchema` | `src/models/list-trash-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### moveRecord

- **Signature**: `moveRecord(request: KnowledgeBaseApi.MoveRecordRequest, options?: RequestOptions): ApiPromise<KnowledgeBaseMoveRecordResponse, KnowledgeBaseApi.MoveRecordError>`
- **Wire**: `PUT /knowledgeBase/{kbId}/record/{recordId}/move`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `KnowledgeBaseMoveRecordResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.MoveRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.MoveRecordRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `kbId` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |
| `body` | `body` | `KnowledgeBaseMoveRecordRequestBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KnowledgeBaseMoveRecordRequestBody` | `knowledgeBaseMoveRecordRequestBodySchema` | `src/models/knowledge-base-move-record-request-body.ts` |
| `KnowledgeBaseMoveRecordResponse` | `knowledgeBaseMoveRecordResponseSchema` | `src/models/knowledge-base-move-record-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### reindexRecord

- **Signature**: `reindexRecord(request: KnowledgeBaseApi.ReindexRecordRequest, options?: RequestOptions): ApiPromise<ReIndexRecordResponseSchema, KnowledgeBaseApi.ReindexRecordError>`
- **Wire**: `POST /knowledgeBase/reindex/record/{recordId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReIndexRecordResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.ReindexRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.ReindexRecordRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recordId` | `path` | `string` | yes |
| `body` | `body` | `ReindexRecordRequestBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReindexRecordRequestBody` | `reindexRecordRequestBodySchema` | `src/models/reindex-record-request-body.ts` |
| `ReIndexRecordResponseSchema` | `reIndexRecordResponseSchemaSchema` | `src/models/re-index-record-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### reindexRecordGroup

- **Signature**: `reindexRecordGroup(request: KnowledgeBaseApi.ReindexRecordGroupRequest, options?: RequestOptions): ApiPromise<ReIndexRecordGroupResponseSchema, KnowledgeBaseApi.ReindexRecordGroupError>`
- **Wire**: `POST /knowledgeBase/reindex/record-group/{recordGroupId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReIndexRecordGroupResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.ReindexRecordGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.ReindexRecordGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recordGroupId` | `path` | `string` | yes |
| `body` | `body` | `ReindexRecordGroupRequestBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReindexRecordGroupRequestBody` | `reindexRecordGroupRequestBodySchema` | `src/models/reindex-record-group-request-body.ts` |
| `ReIndexRecordGroupResponseSchema` | `reIndexRecordGroupResponseSchemaSchema` | `src/models/re-index-record-group-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### restoreRecord

- **Signature**: `restoreRecord(request: KnowledgeBaseApi.RestoreRecordRequest, options?: RequestOptions): ApiPromise<RestoreRecordResponseSchema, KnowledgeBaseApi.RestoreRecordError>`
- **Wire**: `POST /knowledgeBase/record/{recordId}/restore`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RestoreRecordResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.RestoreRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [409] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.RestoreRecordRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recordId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestoreRecordResponseSchema` | `restoreRecordResponseSchemaSchema` | `src/models/restore-record-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### restoreRecords

- **Signature**: `restoreRecords(request: KnowledgeBaseApi.RestoreRecordsRequest, options?: RequestOptions): ApiPromise<RestoreRecordsResponseSchema, KnowledgeBaseApi.RestoreRecordsError>`
- **Wire**: `POST /knowledgeBase/records/restore`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RestoreRecordsResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.RestoreRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"errorResponse5"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.RestoreRecordsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RestoreRecordsRequestBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestoreRecordsRequestBody` | `restoreRecordsRequestBodySchema` | `src/models/restore-records-request-body.ts` |
| `RestoreRecordsResponseSchema` | `restoreRecordsResponseSchemaSchema` | `src/models/restore-records-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### streamRecordBuffer

- **Signature**: `streamRecordBuffer(request: KnowledgeBaseApi.StreamRecordBufferRequest, options?: RequestOptions): ApiPromise<undefined, KnowledgeBaseApi.StreamRecordBufferError>`
- **Wire**: `GET /knowledgeBase/stream/record/{recordId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.StreamRecordBufferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"knowledgeBaseStreamRecordResponse"` [403] `KnowledgeBaseStreamRecordResponse` · `"streamRecordErrorResponse"` [404] `StreamRecordErrorResponse` · `"streamRecordErrorResponse2"` [409] `StreamRecordErrorResponse` · `"streamRecordErrorResponse3"` [500] `StreamRecordErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.StreamRecordBufferRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recordId` | `path` | `string` | yes |
| `convertTo` | `query` | `string` | no |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `KnowledgeBaseStreamRecordResponse` | `knowledgeBaseStreamRecordResponseSchema` | `src/models/unions/knowledge-base-stream-record-response.ts` |
| `StreamRecordErrorResponse` | `streamRecordErrorResponseSchema` | `src/models/stream-record-error-response.ts` |

### updateFolder

- **Signature**: `updateFolder(request: KnowledgeBaseApi.UpdateFolderRequest, options?: RequestOptions): ApiPromise<FolderUpdateResponseSchema, KnowledgeBaseApi.UpdateFolderError>`
- **Wire**: `PUT /knowledgeBase/{kbId}/folder/{folderId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderUpdateResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.UpdateFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.UpdateFolderRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `kbId` | `path` | `string` | yes |
| `folderId` | `path` | `string` | yes |
| `body` | `body` | `KnowledgeBaseFolderRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KnowledgeBaseFolderRequest1` | `knowledgeBaseFolderRequest1Schema` | `src/models/knowledge-base-folder-request1.ts` |
| `FolderUpdateResponseSchema` | `folderUpdateResponseSchemaSchema` | `src/models/folder-update-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateKnowledgeBase

- **Signature**: `updateKnowledgeBase(request: KnowledgeBaseApi.UpdateKnowledgeBaseRequest, options?: RequestOptions): ApiPromise<UpdateKnowledgeBaseById, KnowledgeBaseApi.UpdateKnowledgeBaseError>`
- **Wire**: `PUT /knowledgeBase/{kbId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateKnowledgeBaseById`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.UpdateKnowledgeBaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.UpdateKnowledgeBaseRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `kbId` | `path` | `string` | yes |
| `body` | `body` | `KnowledgeBaseRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KnowledgeBaseRequest1` | `knowledgeBaseRequest1Schema` | `src/models/knowledge-base-request1.ts` |
| `UpdateKnowledgeBaseById` | `updateKnowledgeBaseByIdSchema` | `src/models/update-knowledge-base-by-id.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateRecord

- **Signature**: `updateRecord(request: KnowledgeBaseApi.UpdateRecordRequest, options?: RequestOptions): ApiPromise<KnowledgeBaseRecordResponse, KnowledgeBaseApi.UpdateRecordError>`
- **Wire**: `PUT /knowledgeBase/record/{recordId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `KnowledgeBaseRecordResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.UpdateRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.UpdateRecordRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recordId` | `path` | `string` | yes |
| `recordName` | `form` | `string` | no |
| `file` | `form` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `KnowledgeBaseRecordResponse` | `knowledgeBaseRecordResponseSchema` | `src/models/knowledge-base-record-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### uploadRecords

- **Signature**: `uploadRecords(request: KnowledgeBaseApi.UploadRecordsRequest, options?: RequestOptions): ApiPromise<EventStream<UploadStreamSseEvent>, KnowledgeBaseApi.UploadRecordsError>`
- **Wire**: `POST /knowledgeBase/{kbId}/upload`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<UploadStreamSseEvent>` — `text/event-stream`, resolved at the response headers and read one `UploadStreamSseEvent` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `UploadStreamSseEvent`, whatever the event is named. The stream ends when the server closes it
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeBaseApi.UploadRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [413] `ErrorResponse` · `"errorResponse7"` [429] `ErrorResponse` · `"errorResponse8"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeBaseApi.UploadRecordsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `kbId` | `path` | — | `string` | yes | — |
| `folderId` | `query` | — | `string` | no | — |
| `files` | `form` | — | `FileInput` | yes | — |
| `filesMetadata` | `form` | `files_metadata` | `string` | no | — |
| `isVersioned` | `form` | — | `boolean` | no | `true` |
| `recordType` | `form` | — | `string` | no | `"FILE"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventStream` | — | `src/core/event-stream.ts` |
| `UploadStreamSseEvent` | `uploadStreamSseEventSchema` | `src/models/upload-stream-sse-event.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

