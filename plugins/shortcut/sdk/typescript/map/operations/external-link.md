<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExternalLink — operations

Accessor: `client.externalLink` · Source: `src/resources/external-link.ts` · 1 operation · Request and error types: namespace `ExternalLink`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getExternalLinkStories

- **Signature**: `getExternalLinkStories(request: ExternalLink.GetExternalLinkStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ExternalLink.GetExternalLinkStoriesError>`
- **Wire**: `GET /api/v3/external-link/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `ExternalLink.GetExternalLinkStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExternalLink.GetExternalLinkStoriesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalLink` | `query` | `external_link` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

