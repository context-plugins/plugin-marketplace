<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stories — operations

Accessor: `client.stories` · Source: `src/resources/stories.ts` · 4 operations · Request and error types: namespace `Stories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `alph-ai`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiStories

- **Signature**: `getApiStories(request?: Stories.GetApiStoriesRequest, options?: RequestOptions): ApiPromise<StoriesPage, Stories.GetApiStoriesError>`
- **Wire**: `GET /api/stories/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoriesPage`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Stories.GetApiStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error404"` [404] no body · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.GetApiStoriesRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no | — |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoriesPage` | `storiesPageSchema` | `src/models/stories-page.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiStoriesByStoryId

- **Signature**: `getApiStoriesByStoryId(request: Stories.GetApiStoriesByStoryIdRequest, options?: RequestOptions): ApiPromise<StoryLookup, Stories.GetApiStoriesByStoryIdError>`
- **Wire**: `GET /api/stories/{story_id}/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoryLookup`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Stories.GetApiStoriesByStoryIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error404"` [404] no body · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.GetApiStoriesByStoryIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyId` | `path` | `story_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryLookup` | `storyLookupSchema` | `src/models/story-lookup.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiStoriesByStoryIdMaterials

- **Signature**: `getApiStoriesByStoryIdMaterials(request: Stories.GetApiStoriesByStoryIdMaterialsRequest, options?: RequestOptions): ApiPromise<StoryMaterials, Stories.GetApiStoriesByStoryIdMaterialsError>`
- **Wire**: `GET /api/stories/{story_id}/materials/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoryMaterials`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Stories.GetApiStoriesByStoryIdMaterialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.GetApiStoriesByStoryIdMaterialsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `storyId` | `path` | `story_id` | `string` | yes | — |
| `cursor` | `query` | — | `string` | no | — |
| `pageSize` | `query` | `page_size` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryMaterials` | `storyMaterialsSchema` | `src/models/story-materials.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiStoriesTop

- **Signature**: `getApiStoriesTop(options?: RequestOptions): ApiPromise<TopStories, Stories.GetApiStoriesTopError>`
- **Wire**: `GET /api/stories/top/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TopStories`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Stories.GetApiStoriesTopError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TopStories` | `topStoriesSchema` | `src/models/top-stories.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

