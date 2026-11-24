<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoryLinks — operations

Accessor: `client.storyLinks` · Source: `src/resources/story-links.ts` · 4 operations · Request and error types: namespace `StoryLinks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStoryLink

- **Signature**: `createStoryLink(request: StoryLinks.CreateStoryLinkRequest, options?: RequestOptions): ApiPromise<StoryLink, StoryLinks.CreateStoryLinkError>`
- **Wire**: `POST /api/v3/story-links`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryLink`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `StoryLinks.CreateStoryLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoryLinks.CreateStoryLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateStoryLink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStoryLink` | `createStoryLinkSchema` | `src/models/create-story-link.ts` |
| `StoryLink` | `storyLinkSchema` | `src/models/story-link.ts` |

### deleteStoryLink

- **Signature**: `deleteStoryLink(request: StoryLinks.DeleteStoryLinkRequest, options?: RequestOptions): ApiPromise<undefined, StoryLinks.DeleteStoryLinkError>`
- **Wire**: `DELETE /api/v3/story-links/{story-link-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `StoryLinks.DeleteStoryLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoryLinks.DeleteStoryLinkRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyLinkPublicId` | `path` | `story-link-public-id` | `number` | yes |

### getStoryLink

- **Signature**: `getStoryLink(request: StoryLinks.GetStoryLinkRequest, options?: RequestOptions): ApiPromise<StoryLink, StoryLinks.GetStoryLinkError>`
- **Wire**: `GET /api/v3/story-links/{story-link-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoryLink`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `StoryLinks.GetStoryLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoryLinks.GetStoryLinkRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyLinkPublicId` | `path` | `story-link-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryLink` | `storyLinkSchema` | `src/models/story-link.ts` |

### updateStoryLink

- **Signature**: `updateStoryLink(request: StoryLinks.UpdateStoryLinkRequest, options?: RequestOptions): ApiPromise<StoryLink, StoryLinks.UpdateStoryLinkError>`
- **Wire**: `PUT /api/v3/story-links/{story-link-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryLink`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `StoryLinks.UpdateStoryLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoryLinks.UpdateStoryLinkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyLinkPublicId` | `path` | `story-link-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateStoryLink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStoryLink` | `updateStoryLinkSchema` | `src/models/update-story-link.ts` |
| `StoryLink` | `storyLinkSchema` | `src/models/story-link.ts` |

