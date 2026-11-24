<!-- Generated file — do not edit; regenerated with the SDK. -->

# AttachmentRestController — operations

Accessor: `client.attachment_rest_controller` · Source: `atlassian_compass/apis/attachment_rest_controller.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.attachment_rest_controller.delete_api_spec

- **Route**: `DELETE /compass/v1/component/{componentId}/api_specs`
- **Auth**: `basic_auth`
- **Signature**: `def delete_api_spec(component_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `component_id`
- **Params**: `component_id` — path `componentId`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteApiSpecErrorBody]`
- **Error**: `DeleteApiSpecErrorBody` — **Case A (typed)**
- **Error arms**: `str` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiSpecErrorBody` | `atlassian_compass/errors/delete_api_spec_error.py` |

### client.attachment_rest_controller.delete_attachment

- **Route**: `DELETE /compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}`
- **Auth**: `basic_auth`
- **Signature**: `def delete_attachment(component_id: UUID, forge_app_id: str, key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `component_id`, `forge_app_id`, `key`
- **Params**: `component_id` — path `componentId` · `forge_app_id` — path `forgeAppId` · `key` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAttachmentErrorBody]`
- **Error**: `DeleteAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseDto` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAttachmentErrorBody` | `atlassian_compass/errors/delete_attachment_error.py` |
| `ErrorResponseDto` | `atlassian_compass/models/error_response_dto.py` |

### client.attachment_rest_controller.get_attachment

- **Route**: `GET /compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}`
- **Auth**: `basic_auth`
- **Signature**: `def get_attachment(component_id: UUID, forge_app_id: str, key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `component_id`, `forge_app_id`, `key`
- **Params**: `component_id` — path `componentId` · `forge_app_id` — path `forgeAppId` · `key` — path
- **Returns (parsed)**: `Attachment`
- **Returns (raw)**: `ApiResult[Attachment, GetAttachmentErrorBody]`
- **Error**: `GetAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseDto` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Attachment` | `atlassian_compass/models/attachment.py` |
| `GetAttachmentErrorBody` | `atlassian_compass/errors/get_attachment_error.py` |
| `ErrorResponseDto` | `atlassian_compass/models/error_response_dto.py` |

### client.attachment_rest_controller.upload_api_spec

- **Route**: `PUT /compass/v1/component/{componentId}/api_specs`
- **Auth**: `basic_auth`
- **Signature**: `def upload_api_spec(component_id: UUID, file: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `component_id`, `file`
- **Params**: `component_id` — path `componentId` · `file` — multipart file
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, UploadApiSpecErrorBody]`
- **Error**: `UploadApiSpecErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400, 403, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UploadApiSpecErrorBody` | `atlassian_compass/errors/upload_api_spec_error.py` |

### client.attachment_rest_controller.upload_attachment

- **Route**: `PUT /compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}`
- **Auth**: `basic_auth`
- **Signature**: `def upload_attachment(component_id: UUID, forge_app_id: str, key: str, file: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `component_id`, `forge_app_id`, `key`, `file`
- **Params**: `component_id` — path `componentId` · `forge_app_id` — path `forgeAppId` · `key` — path · `file` — multipart file
- **Returns (parsed)**: `Attachment`
- **Returns (raw)**: `ApiResult[Attachment, UploadAttachmentErrorBody]`
- **Error**: `UploadAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseDto` [400, 403, 404, 422, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Attachment` | `atlassian_compass/models/attachment.py` |
| `UploadAttachmentErrorBody` | `atlassian_compass/errors/upload_attachment_error.py` |
| `ErrorResponseDto` | `atlassian_compass/models/error_response_dto.py` |

