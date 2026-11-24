<!-- Generated file — do not edit; regenerated with the SDK. -->

# MediaApi — operations

Accessor: `client.mediaApi` · Source: `src/resources/media-api.ts` · 6 operations · Request types: namespace `MediaApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instagram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMedia

- **Signature**: `deleteMedia(request: MediaApi.DeleteMediaRequest, options?: RequestOptions): ApiPromise<Response, ApiError>`
- **Wire**: `DELETE /{media_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Response`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MediaApi.DeleteMediaRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `mediaId` | `path` | `media_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Response` | `responseSchema` | `src/models/response.ts` |

### getMedia

- **Signature**: `getMedia(request: MediaApi.GetMediaRequest, options?: RequestOptions): ApiPromise<Media, ApiError>`
- **Wire**: `GET /{media_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Media`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MediaApi.GetMediaRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `mediaId` | `path` | `media_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Media` | `mediaSchema` | `src/models/media.ts` |

### getMediaChildren

- **Signature**: `getMediaChildren(request: MediaApi.GetMediaChildrenRequest, options?: RequestOptions): ApiPromise<MediaList, ApiError>`
- **Wire**: `GET /{media_id}/children`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MediaList`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MediaApi.GetMediaChildrenRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `mediaId` | `path` | `media_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MediaList` | `mediaListSchema` | `src/models/media-list.ts` |

### getUserMedia

- **Signature**: `getUserMedia(request: MediaApi.GetUserMediaRequest, options?: RequestOptions): ApiPromise<MediaList, ApiError>`
- **Wire**: `GET /{user_id}/media`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MediaList`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MediaApi.GetUserMediaRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `after` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MediaList` | `mediaListSchema` | `src/models/media-list.ts` |

### getUserStories

- **Signature**: `getUserStories(request: MediaApi.GetUserStoriesRequest, options?: RequestOptions): ApiPromise<MediaList, ApiError>`
- **Wire**: `GET /{user_id}/stories`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MediaList`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MediaApi.GetUserStoriesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MediaList` | `mediaListSchema` | `src/models/media-list.ts` |

### updateMedia

- **Signature**: `updateMedia(request: MediaApi.UpdateMediaRequest, options?: RequestOptions): ApiPromise<SuccessResponse, ApiError>`
- **Wire**: `POST /{media_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MediaApi.UpdateMediaRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `mediaId` | `path` | `media_id` | `string` | yes |
| `body` | `body` | — | `RequestInstagramGraphMediaApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestInstagramGraphMediaApi` | `requestInstagramGraphMediaApiSchema` | `src/models/request-instagram-graph-media-api.ts` |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |

