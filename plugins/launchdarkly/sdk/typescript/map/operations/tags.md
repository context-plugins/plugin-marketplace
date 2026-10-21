<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `src/resources/tags.ts` · 1 operation · Request and error types: namespace `Tags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTags

- **Signature**: `getTags(request: Tags.GetTagsRequest, options?: RequestOptions): ApiPromise<TagsCollection, Tags.GetTagsError>`
- **Wire**: `GET /api/v2/tags`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagsCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Tags.GetTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.GetTagsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `kind` | `query` | `string[]` | no |
| `pre` | `query` | `string` | no |
| `archived` | `query` | `boolean` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `asOf` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsCollection` | `tagsCollectionSchema` | `src/models/tags-collection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

