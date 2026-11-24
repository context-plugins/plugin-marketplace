<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `src/resources/tags.ts` · 1 operation · Request and error types: namespace `Tags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ortto`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTags

- **Signature**: `getTags(request?: Tags.GetTagsRequest, options?: RequestOptions): ApiPromise<TagsGetResponse, Tags.GetTagsError>`
- **Wire**: `POST /tags/get`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TagsGetResponse`
- **Error**: `OrttoError` with `kind: "api"`, an instance of `Tags.GetTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.GetTagsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TagsGetRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsGetRequest` | `tagsGetRequestSchema` | `src/models/tags-get-request.ts` |
| `TagsGetResponse` | `tagsGetResponseSchema` | `src/models/tags-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

