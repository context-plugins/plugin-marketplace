<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `ortto/apis/tags.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tags.get_tags

- **Route**: `POST /tags/get`
- **Auth**: `api_key_auth`
- **Signature**: `def get_tags(*, body: TagsGetRequest | TagsGetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TagsGetResponse`
- **Returns (raw)**: `ApiResult[TagsGetResponse, GetTagsErrorBody]`
- **Error**: `GetTagsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagsGetRequest` | `ortto/models/tags_get_request.py` |
| `TagsGetRequestDict` | `ortto/models/tags_get_request.py` |
| `TagsGetResponse` | `ortto/models/tags_get_response.py` |
| `GetTagsErrorBody` | `ortto/errors/get_tags_error.py` |
| `Error` | `ortto/models/error.py` |

