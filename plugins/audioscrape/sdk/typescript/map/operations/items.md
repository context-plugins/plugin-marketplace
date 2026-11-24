<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.items` · Source: `src/resources/items.ts` · 4 operations · Request and error types: namespace `Items`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getItem

- **Signature**: `getItem(request: Items.GetItemRequest, options?: RequestOptions): ApiPromise<EpisodeDetail, Items.GetItemError>`
- **Wire**: `GET /api/items/{item_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpisodeDetail`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Items.GetItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.GetItemRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `itemId` | `path` | `item_id` | `string` | yes |
| `include` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpisodeDetail` | `episodeDetailSchema` | `src/models/episode-detail.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### getItemTranscript

- **Signature**: `getItemTranscript(request: Items.GetItemTranscriptRequest, options?: RequestOptions): ApiPromise<Transcript, Items.GetItemTranscriptError>`
- **Wire**: `GET /api/items/{item_id}/transcript`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Transcript`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Items.GetItemTranscriptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.GetItemTranscriptRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `itemId` | `path` | `item_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Transcript` | `transcriptSchema` | `src/models/transcript.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### listItems

- **Signature**: `listItems(request?: Items.ListItemsRequest, options?: RequestOptions): ApiPromise<ItemList, Items.ListItemsError>`
- **Wire**: `GET /api/items`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ItemList`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Items.ListItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.ListItemsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sourceType` | `query` | `source_type` | `string` | no |
| `datasetId` | `query` | `dataset_id` | `number` | no |
| `library` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemList` | `itemListSchema` | `src/models/item-list.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### uploadItemExternal

- **Signature**: `uploadItemExternal(request: Items.UploadItemExternalRequest, options?: RequestOptions): ApiPromise<UploadResponse, Items.UploadItemExternalError>`
- **Wire**: `POST /api/datasets/{id}/items`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadResponse`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Items.UploadItemExternalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [400] `ApiErrorBody` · `"apiErrorBody2"` [401] `ApiErrorBody` · `"apiErrorBody3"` [404] `ApiErrorBody` · `"apiErrorBody4"` [409] `ApiErrorBody` · `"apiErrorBody5"` [413] `ApiErrorBody` · `"apiErrorBody6"` [415] `ApiErrorBody` · `"apiErrorBody7"` [422] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.UploadItemExternalRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `UploadFromUrl` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadFromUrl` | `uploadFromUrlSchema` | `src/models/upload-from-url.ts` |
| `UploadResponse` | `uploadResponseSchema` | `src/models/upload-response.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

