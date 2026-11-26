<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.custom_fields` · Source: `bill/apis/custom_fields.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.custom_fields.create_custom_field

- **Route**: `POST /v3/spend/custom-fields`
- **Server**: `default`
- **Signature**: `def create_custom_field(body: CreateCustomFieldRequestDto | CreateCustomFieldRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `CustomFieldResponseDto`
- **Returns (raw)**: `ApiResult[CustomFieldResponseDto, CreateCustomFieldErrorBody]`
- **Error**: `CreateCustomFieldErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomFieldRequestDto` | `bill/models/create_custom_field_request_dto.py` |
| `CreateCustomFieldRequestDtoDict` | `bill/models/create_custom_field_request_dto.py` |
| `CustomFieldResponseDto` | `bill/models/custom_field_response_dto.py` |
| `CreateCustomFieldErrorBody` | `bill/errors/create_custom_field_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.custom_fields.create_custom_field_values

- **Route**: `POST /v3/spend/custom-fields/{customFieldId}/values`
- **Server**: `default`
- **Signature**: `def create_custom_field_values(custom_field_id: str, body: CreateCustomFieldValueRequestDto | CreateCustomFieldValueRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_id`, `body`
- **Params**: `custom_field_id` — path `customFieldId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `list[CustomFieldValueResponseDto]`
- **Returns (raw)**: `ApiResult[list[CustomFieldValueResponseDto], CreateCustomFieldValuesErrorBody]`
- **Error**: `CreateCustomFieldValuesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomFieldValueRequestDto` | `bill/models/create_custom_field_value_request_dto.py` |
| `CreateCustomFieldValueRequestDtoDict` | `bill/models/create_custom_field_value_request_dto.py` |
| `CustomFieldValueResponseDto` | `bill/models/custom_field_value_response_dto.py` |
| `CreateCustomFieldValuesErrorBody` | `bill/errors/create_custom_field_values_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.custom_fields.delete_custom_field

- **Route**: `DELETE /v3/spend/custom-fields/{customFieldId}`
- **Server**: `default`
- **Signature**: `def delete_custom_field(custom_field_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_id`
- **Params**: `custom_field_id` — path `customFieldId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCustomFieldErrorBody]`
- **Error**: `DeleteCustomFieldErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomFieldErrorBody` | `bill/errors/delete_custom_field_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.custom_fields.delete_custom_field_value

- **Route**: `DELETE /v3/spend/custom-fields/{customFieldId}/values`
- **Server**: `default`
- **Signature**: `def delete_custom_field_value(custom_field_id: str, body: DeleteCustomFieldValuesRequestDto | DeleteCustomFieldValuesRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_id`, `body`
- **Params**: `custom_field_id` — path `customFieldId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCustomFieldValueErrorBody]`
- **Error**: `DeleteCustomFieldValueErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomFieldValuesRequestDto` | `bill/models/delete_custom_field_values_request_dto.py` |
| `DeleteCustomFieldValuesRequestDtoDict` | `bill/models/delete_custom_field_values_request_dto.py` |
| `DeleteCustomFieldValueErrorBody` | `bill/errors/delete_custom_field_value_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.custom_fields.get_custom_field

- **Route**: `GET /v3/spend/custom-fields/{customFieldId}`
- **Server**: `default`
- **Signature**: `def get_custom_field(custom_field_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_id`
- **Params**: `custom_field_id` — path `customFieldId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `CustomFieldResponseDto`
- **Returns (raw)**: `ApiResult[CustomFieldResponseDto, GetCustomFieldErrorBody]`
- **Error**: `GetCustomFieldErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomFieldResponseDto` | `bill/models/custom_field_response_dto.py` |
| `GetCustomFieldErrorBody` | `bill/errors/get_custom_field_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.custom_fields.get_custom_field_values

- **Route**: `GET /v3/spend/custom-fields/{customFieldId}/values/{customFieldValueId}`
- **Server**: `default`
- **Signature**: `def get_custom_field_values(custom_field_id: str, custom_field_value_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_id`, `custom_field_value_id`
- **Params**: `custom_field_id` — path `customFieldId` · `custom_field_value_id` — path `customFieldValueId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `CustomFieldValueResponseDto`
- **Returns (raw)**: `ApiResult[CustomFieldValueResponseDto, GetCustomFieldValuesErrorBody]`
- **Error**: `GetCustomFieldValuesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomFieldValueResponseDto` | `bill/models/custom_field_value_response_dto.py` |
| `GetCustomFieldValuesErrorBody` | `bill/errors/get_custom_field_values_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.custom_fields.list_custom_field_values

- **Route**: `GET /v3/spend/custom-fields/{customFieldId}/values`
- **Server**: `default`
- **Signature**: `def list_custom_field_values(custom_field_id: str, *, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_id`
- **Params**: `custom_field_id` — path `customFieldId` · `max_` — query `max` · `next_page` — query `nextPage` · `prev_page` — query `prevPage` · `filters` — query · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationResponseDtoCustomFieldValueResponseDto`
- **Returns (raw)**: `ApiResult[PaginationResponseDtoCustomFieldValueResponseDto, ListCustomFieldValuesErrorBody]`
- **Error**: `ListCustomFieldValuesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginationResponseDtoCustomFieldValueResponseDto` | `bill/models/pagination_response_dto_custom_field_value_response_dto.py` |
| `ListCustomFieldValuesErrorBody` | `bill/errors/list_custom_field_values_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.custom_fields.list_custom_fields

- **Route**: `GET /v3/spend/custom-fields`
- **Server**: `default`
- **Signature**: `def list_custom_fields(*, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `next_page` — query `nextPage` · `prev_page` — query `prevPage` · `sort` — query · `filters` — query · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationResponseDtoCustomFieldResponseDto`
- **Returns (raw)**: `ApiResult[PaginationResponseDtoCustomFieldResponseDto, ListCustomFieldsErrorBody]`
- **Error**: `ListCustomFieldsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginationResponseDtoCustomFieldResponseDto` | `bill/models/pagination_response_dto_custom_field_response_dto.py` |
| `ListCustomFieldsErrorBody` | `bill/errors/list_custom_fields_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.custom_fields.update_custom_field

- **Route**: `PATCH /v3/spend/custom-fields/{customFieldId}`
- **Server**: `default`
- **Signature**: `def update_custom_field(custom_field_id: str, body: UpdateCustomFieldRequestDto | UpdateCustomFieldRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_field_id`, `body`
- **Params**: `custom_field_id` — path `customFieldId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `CustomFieldResponseDto`
- **Returns (raw)**: `ApiResult[CustomFieldResponseDto, UpdateCustomFieldErrorBody]`
- **Error**: `UpdateCustomFieldErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomFieldRequestDto` | `bill/models/update_custom_field_request_dto.py` |
| `UpdateCustomFieldRequestDtoDict` | `bill/models/update_custom_field_request_dto.py` |
| `CustomFieldResponseDto` | `bill/models/custom_field_response_dto.py` |
| `UpdateCustomFieldErrorBody` | `bill/errors/update_custom_field_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

