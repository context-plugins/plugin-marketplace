<!-- Generated file — do not edit; regenerated with the SDK. -->

# MediaApi — operations

Accessor: `client.mediaApi` · Source: `src/resources/media-api.ts` · 4 operations · Request and error types: namespace `MediaApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cosmic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMedia

- **Signature**: `deleteMedia(request: MediaApi.DeleteMediaRequest, options?: RequestOptions): ApiPromise<MessageResponse, MediaApi.DeleteMediaError>`
- **Wire**: `DELETE /buckets/{slug}/media/{media_id}`
- **Auth**: `writeKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `MediaApi.DeleteMediaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MediaApi.DeleteMediaRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `mediaId` | `path` | `media_id` | `string` | yes | — |
| `triggerWebhook` | `query` | `trigger_webhook` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getMedia

- **Signature**: `getMedia(request: MediaApi.GetMediaRequest, options?: RequestOptions): ApiPromise<MediaResponse, MediaApi.GetMediaError>`
- **Wire**: `GET /buckets/{slug}/media/{media_id}`
- **Auth**: `readKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MediaResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `MediaApi.GetMediaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MediaApi.GetMediaRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `mediaId` | `path` | `media_id` | `string` | yes | — |
| `readKey` | `query` | `read_key` | `string` | no | — |
| `props` | `query` | — | `string` | no | — |
| `useCache` | `query` | — | `boolean` | no | `true` |
| `pretty` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `MediaResponse` | `mediaResponseSchema` | `src/models/media-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listMedia

- **Signature**: `listMedia(request: MediaApi.ListMediaRequest, options?: RequestOptions): ApiPromise<MediaListResponse, MediaApi.ListMediaError>`
- **Wire**: `GET /buckets/{slug}/media`
- **Auth**: `readKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MediaListResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `MediaApi.ListMediaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [413] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MediaApi.ListMediaRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `readKey` | `query` | `read_key` | `string` | no | — |
| `query` | `query` | — | `string` | no | — |
| `props` | `query` | — | `string` | no | — |
| `sort` | `query` | — | `Sort` | no | — |
| `limit` | `query` | — | `number` | no | `1000` |
| `skip` | `query` | — | `number` | no | `0` |
| `useCache` | `query` | — | `boolean` | no | `true` |
| `pretty` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `MediaListResponse` | `mediaListResponseSchema` | `src/models/media-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateMedia

- **Signature**: `updateMedia(request: MediaApi.UpdateMediaRequest, options?: RequestOptions): ApiPromise<MediaResponse, MediaApi.UpdateMediaError>`
- **Wire**: `PATCH /buckets/{slug}/media/{media_id}`
- **Auth**: `writeKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MediaResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `MediaApi.UpdateMediaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MediaApi.UpdateMediaRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes |
| `mediaId` | `path` | `media_id` | `string` | yes |
| `body` | `body` | — | `MediaUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MediaUpdate` | `mediaUpdateSchema` | `src/models/media-update.ts` |
| `MediaResponse` | `mediaResponseSchema` | `src/models/media-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

