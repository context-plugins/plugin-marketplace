<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mentions — operations

Accessor: `client.mentions` · Source: `src/resources/mentions.ts` · 1 operation · Request types: namespace `Mentions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instagram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUserTags

- **Signature**: `getUserTags(request: Mentions.GetUserTagsRequest, options?: RequestOptions): ApiPromise<MediaList, ApiError>`
- **Wire**: `GET /{user_id}/tags`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MediaList`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Mentions.GetUserTagsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MediaList` | `mediaListSchema` | `src/models/media-list.ts` |

