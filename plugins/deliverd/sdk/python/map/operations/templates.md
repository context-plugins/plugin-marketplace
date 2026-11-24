<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.templates` · Source: `deliverd/apis/templates.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.templates.get_api_v1_templates

- **Route**: `GET /api/v1/templates`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_templates(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1TemplatesResponse`
- **Returns (raw)**: `ApiResult[ApiV1TemplatesResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1TemplatesResponse` | `deliverd/models/api_v1_templates_response.py` |

