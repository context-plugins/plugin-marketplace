<!-- Generated file — do not edit; regenerated with the SDK. -->

# Hashtags — operations

Accessor: `client.hashtags` · Source: `src/resources/hashtags.ts` · 3 operations · Request types: namespace `Hashtags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instagram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getHashtagRecentMedia

- **Signature**: `getHashtagRecentMedia(request: Hashtags.GetHashtagRecentMediaRequest, options?: RequestOptions): ApiPromise<MediaList, ApiError>`
- **Wire**: `GET /{hashtag_id}/recent_media`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MediaList`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Hashtags.GetHashtagRecentMediaRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `hashtagId` | `path` | `hashtag_id` | `string` | yes |
| `userId` | `query` | `user_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MediaList` | `mediaListSchema` | `src/models/media-list.ts` |

### getHashtagTopMedia

- **Signature**: `getHashtagTopMedia(request: Hashtags.GetHashtagTopMediaRequest, options?: RequestOptions): ApiPromise<MediaList, ApiError>`
- **Wire**: `GET /{hashtag_id}/top_media`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MediaList`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Hashtags.GetHashtagTopMediaRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `hashtagId` | `path` | `hashtag_id` | `string` | yes |
| `userId` | `query` | `user_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MediaList` | `mediaListSchema` | `src/models/media-list.ts` |

### searchHashtag

- **Signature**: `searchHashtag(request: Hashtags.SearchHashtagRequest, options?: RequestOptions): ApiPromise<IgHashtagSearchResponse, ApiError>`
- **Wire**: `GET /ig_hashtag_search`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IgHashtagSearchResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Hashtags.SearchHashtagRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | yes |
| `userId` | `query` | `user_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IgHashtagSearchResponse` | `igHashtagSearchResponseSchema` | `src/models/ig-hashtag-search-response.ts` |

