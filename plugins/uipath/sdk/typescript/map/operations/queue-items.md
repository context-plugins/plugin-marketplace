<!-- Generated file — do not edit; regenerated with the SDK. -->

# QueueItems — operations

Accessor: `client.queueItems` · Source: `src/resources/queue-items.ts` · 2 operations · Request and error types: namespace `QueueItems`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addQueueItem

- **Signature**: `addQueueItem(request: QueueItems.AddQueueItemRequestParams, options?: RequestOptions): ApiPromise<QueueItem, QueueItems.AddQueueItemError>`
- **Wire**: `POST /odata/QueueItems`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QueueItem`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `QueueItems.AddQueueItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QueueItems.AddQueueItemRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |
| `body` | `body` | — | `AddQueueItemRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddQueueItemRequest` | `addQueueItemRequestSchema` | `src/models/add-queue-item-request.ts` |
| `QueueItem` | `queueItemSchema` | `src/models/queue-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listQueueItems

- **Signature**: `listQueueItems(request?: QueueItems.ListQueueItemsRequest, options?: RequestOptions): ApiPromise<ODataQueueItemCollection, QueueItems.ListQueueItemsError>`
- **Wire**: `GET /odata/QueueItems`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataQueueItemCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `QueueItems.ListQueueItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QueueItems.ListQueueItemsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataQueueItemCollection` | `oDataQueueItemCollectionSchema` | `src/models/odata-queue-item-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

