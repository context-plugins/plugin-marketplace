<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `src/resources/tags.ts` · 2 operations · Request and error types: namespace `Tags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-free-rtos`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listTagsForResource

- **Signature**: `listTagsForResource(request: Tags.ListTagsForResourceRequest, options?: RequestOptions): ApiPromise<TagsResponse, Tags.ListTagsForResourceError>`
- **Wire**: `GET /tags/{resourceArn}`
- **Auth**: `awsSigV4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagsResponse`
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `Tags.ListTagsForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.ListTagsForResourceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsResponse` | `tagsResponseSchema` | `src/models/tags-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### tagResource

- **Signature**: `tagResource(request: Tags.TagResourceRequest, options?: RequestOptions): ApiPromise<undefined, Tags.TagResourceError>`
- **Wire**: `POST /tags/{resourceArn}`
- **Auth**: `awsSigV4`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonFreeRtosError` with `kind: "api"`, an instance of `Tags.TagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.TagResourceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |
| `body` | `body` | `TagsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsRequest` | `tagsRequestSchema` | `src/models/tags-request.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

