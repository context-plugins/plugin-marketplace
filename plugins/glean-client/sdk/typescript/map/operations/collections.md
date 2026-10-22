<!-- Generated file — do not edit; regenerated with the SDK. -->

# Collections — operations

Accessor: `client.collections` · Source: `src/resources/collections.ts` · 8 operations · Request and error types: namespace `Collections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addcollectionitems

- **Signature**: `addcollectionitems(request: Collections.AddcollectionitemsRequest, options?: RequestOptions): ApiPromise<AddCollectionItemsResponse, Collections.AddcollectionitemsError>`
- **Wire**: `POST /rest/api/v1/addcollectionitems`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AddCollectionItemsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Collections.AddcollectionitemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.AddcollectionitemsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `AddCollectionItemsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddCollectionItemsRequest` | `addCollectionItemsRequestSchema` | `src/models/add-collection-items-request.ts` |
| `AddCollectionItemsResponse` | `addCollectionItemsResponseSchema` | `src/models/add-collection-items-response.ts` |

### createcollection

- **Signature**: `createcollection(request: Collections.CreatecollectionRequest, options?: RequestOptions): ApiPromise<CreateCollectionResponse2, Collections.CreatecollectionError>`
- **Wire**: `POST /rest/api/v1/createcollection`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateCollectionResponse2`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Collections.CreatecollectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"collectionError"` [422] `CollectionError` · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.CreatecollectionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `CreateCollectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCollectionRequest` | `createCollectionRequestSchema` | `src/models/create-collection-request.ts` |
| `CreateCollectionResponse2` | `createCollectionResponse2Schema` | `src/models/unions/create-collection-response2.ts` |
| `CollectionError` | `collectionErrorSchema` | `src/models/collection-error.ts` |

### deletecollection

- **Signature**: `deletecollection(request: Collections.DeletecollectionRequest, options?: RequestOptions): ApiPromise<undefined, Collections.DeletecollectionError>`
- **Wire**: `POST /rest/api/v1/deletecollection`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Collections.DeletecollectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"collectionError"` [422] `CollectionError` · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.DeletecollectionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `DeleteCollectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCollectionRequest` | `deleteCollectionRequestSchema` | `src/models/delete-collection-request.ts` |
| `CollectionError` | `collectionErrorSchema` | `src/models/collection-error.ts` |

### deletecollectionitem

- **Signature**: `deletecollectionitem(request: Collections.DeletecollectionitemRequest, options?: RequestOptions): ApiPromise<DeleteCollectionItemResponse, Collections.DeletecollectionitemError>`
- **Wire**: `POST /rest/api/v1/deletecollectionitem`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteCollectionItemResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Collections.DeletecollectionitemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.DeletecollectionitemRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `DeleteCollectionItemRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCollectionItemRequest` | `deleteCollectionItemRequestSchema` | `src/models/delete-collection-item-request.ts` |
| `DeleteCollectionItemResponse` | `deleteCollectionItemResponseSchema` | `src/models/delete-collection-item-response.ts` |

### editcollection

- **Signature**: `editcollection(request: Collections.EditcollectionRequest, options?: RequestOptions): ApiPromise<EditCollectionResponse, Collections.EditcollectionError>`
- **Wire**: `POST /rest/api/v1/editcollection`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EditCollectionResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Collections.EditcollectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"collectionError"` [422] `CollectionError` · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.EditcollectionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `EditCollectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EditCollectionRequest` | `editCollectionRequestSchema` | `src/models/edit-collection-request.ts` |
| `EditCollectionResponse` | `editCollectionResponseSchema` | `src/models/edit-collection-response.ts` |
| `CollectionError` | `collectionErrorSchema` | `src/models/collection-error.ts` |

### editcollectionitem

- **Signature**: `editcollectionitem(request: Collections.EditcollectionitemRequest, options?: RequestOptions): ApiPromise<EditCollectionItemResponse, Collections.EditcollectionitemError>`
- **Wire**: `POST /rest/api/v1/editcollectionitem`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EditCollectionItemResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Collections.EditcollectionitemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.EditcollectionitemRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `EditCollectionItemRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EditCollectionItemRequest` | `editCollectionItemRequestSchema` | `src/models/edit-collection-item-request.ts` |
| `EditCollectionItemResponse` | `editCollectionItemResponseSchema` | `src/models/edit-collection-item-response.ts` |

### getcollection

- **Signature**: `getcollection(request: Collections.GetcollectionRequest, options?: RequestOptions): ApiPromise<GetCollectionResponse, Collections.GetcollectionError>`
- **Wire**: `POST /rest/api/v1/getcollection`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetCollectionResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Collections.GetcollectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.GetcollectionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetCollectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetCollectionRequest` | `getCollectionRequestSchema` | `src/models/get-collection-request.ts` |
| `GetCollectionResponse` | `getCollectionResponseSchema` | `src/models/get-collection-response.ts` |

### listcollections

- **Signature**: `listcollections(request: Collections.ListcollectionsRequest, options?: RequestOptions): ApiPromise<ListCollectionsResponse, Collections.ListcollectionsError>`
- **Wire**: `POST /rest/api/v1/listcollections`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListCollectionsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Collections.ListcollectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.ListcollectionsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `ListCollectionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCollectionsRequest` | `listCollectionsRequestSchema` | `src/models/list-collections-request.ts` |
| `ListCollectionsResponse` | `listCollectionsResponseSchema` | `src/models/list-collections-response.ts` |

