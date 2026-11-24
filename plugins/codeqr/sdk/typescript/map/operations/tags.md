<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `src/resources/tags.ts` · 4 operations · Request and error types: namespace `Tags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `code-qr`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTag

- **Signature**: `createTag(request?: Tags.CreateTagRequest, options?: RequestOptions): ApiPromise<Tag, Tags.CreateTagError>`
- **Wire**: `POST /tags`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Tag`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Tags.CreateTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.CreateTagRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TagsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsRequest` | `tagsRequestSchema` | `src/models/tags-request.ts` |
| `Tag` | `tagSchema` | `src/models/tag.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### deleteTag

- **Signature**: `deleteTag(request: Tags.DeleteTagRequest, options?: RequestOptions): ApiPromise<TagsResponse, Tags.DeleteTagError>`
- **Wire**: `DELETE /tags/{id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TagsResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Tags.DeleteTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.DeleteTagRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsResponse` | `tagsResponseSchema` | `src/models/tags-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### getTags

- **Signature**: `getTags(request?: Tags.GetTagsRequest, options?: RequestOptions): ApiPromise<Tag[], Tags.GetTagsError>`
- **Wire**: `GET /tags`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Tag[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Tags.GetTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.GetTagsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sortBy` | `query` | `SortByCodeqrIoTagsApi` | no | `SortByCodeqrIoTagsApi.Name` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Asc` |
| `search` | `query` | `string` | no | — |
| `ids` | `query` | `Ids` | no | — |
| `page` | `query` | `number` | no | `1` |
| `pageSize` | `query` | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortByCodeqrIoTagsApi` | `sortByCodeqrIoTagsApiSchema` | `src/models/sort-by-codeqr-io-tags-api.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Ids` | `idsSchema` | `src/models/unions/ids.ts` |
| `Tag` | `tagSchema` | `src/models/tag.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### updateTag

- **Signature**: `updateTag(request: Tags.UpdateTagRequest, options?: RequestOptions): ApiPromise<Tag, Tags.UpdateTagError>`
- **Wire**: `PUT /tags/{id}`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Tag`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Tags.UpdateTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.UpdateTagRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `TagsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsRequest1` | `tagsRequest1Schema` | `src/models/tags-request1.ts` |
| `Tag` | `tagSchema` | `src/models/tag.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

