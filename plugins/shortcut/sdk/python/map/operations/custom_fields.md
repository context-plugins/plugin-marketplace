<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.custom_fields` · Source: `shortcut/apis/custom_fields.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.custom_fields.delete_custom_field

- **Route**: `DELETE /api/v3/custom-fields/{custom-field-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_custom_field(custom_field_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_public_id`
- **Params**: `custom_field_public_id` — path `custom-field-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCustomFieldErrorBody]`
- **Error**: `DeleteCustomFieldErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomFieldErrorBody` | `shortcut/errors/delete_custom_field_error.py` |

### client.custom_fields.get_custom_field

- **Route**: `GET /api/v3/custom-fields/{custom-field-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_custom_field(custom_field_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_public_id`
- **Params**: `custom_field_public_id` — path `custom-field-public-id`
- **Returns (parsed)**: `CustomField`
- **Returns (raw)**: `ApiResult[CustomField, GetCustomFieldErrorBody]`
- **Error**: `GetCustomFieldErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CustomField` | `shortcut/models/custom_field.py` |
| `GetCustomFieldErrorBody` | `shortcut/errors/get_custom_field_error.py` |

### client.custom_fields.list_custom_fields

- **Route**: `GET /api/v3/custom-fields`
- **Auth**: `api_token`
- **Signature**: `def list_custom_fields(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[CustomField]`
- **Returns (raw)**: `ApiResult[list[CustomField], ListCustomFieldsErrorBody]`
- **Error**: `ListCustomFieldsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CustomField` | `shortcut/models/custom_field.py` |
| `ListCustomFieldsErrorBody` | `shortcut/errors/list_custom_fields_error.py` |

### client.custom_fields.update_custom_field

- **Route**: `PUT /api/v3/custom-fields/{custom-field-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_custom_field(custom_field_public_id: UUID, body: UpdateCustomField | UpdateCustomFieldDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_public_id`, `body`
- **Params**: `custom_field_public_id` — path `custom-field-public-id` · `body` — JSON body
- **Returns (parsed)**: `CustomField`
- **Returns (raw)**: `ApiResult[CustomField, UpdateCustomFieldErrorBody]`
- **Error**: `UpdateCustomFieldErrorBody` — **Case A (typed)**
- **Error arms**: `DataConflictError` [409] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomField` | `shortcut/models/update_custom_field.py` |
| `UpdateCustomFieldDict` | `shortcut/models/update_custom_field.py` |
| `CustomField` | `shortcut/models/custom_field.py` |
| `UpdateCustomFieldErrorBody` | `shortcut/errors/update_custom_field_error.py` |
| `DataConflictError` | `shortcut/models/data_conflict_error.py` |

