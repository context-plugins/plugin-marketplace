<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.templates` · Source: `juri_sign/apis/templates.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.templates.create_sign_request_from_template

- **Route**: `POST /templates/{id}/sign-requests`
- **Auth**: `bearer_auth`
- **Signature**: `def create_sign_request_from_template(id_: UUID, *, body: TemplatesSignRequestsRequest | TemplatesSignRequestsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `TemplatesSignRequestsResponse`
- **Returns (raw)**: `ApiResult[TemplatesSignRequestsResponse, CreateSignRequestFromTemplateErrorBody]`
- **Error**: `CreateSignRequestFromTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `ValidationError1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TemplatesSignRequestsRequest` | `juri_sign/models/templates_sign_requests_request.py` |
| `TemplatesSignRequestsRequestDict` | `juri_sign/models/templates_sign_requests_request.py` |
| `TemplatesSignRequestsResponse` | `juri_sign/models/templates_sign_requests_response.py` |
| `CreateSignRequestFromTemplateErrorBody` | `juri_sign/errors/create_sign_request_from_template_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `ValidationError1` | `juri_sign/models/validation_error1.py` |

### client.templates.delete_template

- **Route**: `DELETE /templates/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_template(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteTemplateErrorBody]`
- **Error**: `DeleteTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `DeleteTemplateErrorBody` | `juri_sign/errors/delete_template_error.py` |

### client.templates.get_template

- **Route**: `GET /templates/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_template(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `TemplatesResponse1`
- **Returns (raw)**: `ApiResult[TemplatesResponse1, GetTemplateErrorBody]`
- **Error**: `GetTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TemplatesResponse1` | `juri_sign/models/templates_response1.py` |
| `GetTemplateErrorBody` | `juri_sign/errors/get_template_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.templates.list_templates

- **Route**: `GET /templates`
- **Auth**: `bearer_auth`
- **Signature**: `def list_templates(*, per_page: int | None = 20, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `per_page` — query · `page` — query
- **Returns (parsed)**: `TemplatesResponse`
- **Returns (raw)**: `ApiResult[TemplatesResponse, ListTemplatesErrorBody]`
- **Error**: `ListTemplatesErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TemplatesResponse` | `juri_sign/models/templates_response.py` |
| `ListTemplatesErrorBody` | `juri_sign/errors/list_templates_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

