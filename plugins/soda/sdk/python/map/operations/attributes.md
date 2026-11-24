<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attributes — operations

Accessor: `client.attributes` · Source: `soda/apis/attributes.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.attributes.delete_api_v1_attributes_attribute_id

- **Route**: `DELETE /api/v1/attributes/{attributeId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_attributes_attribute_id(attribute_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `attribute_id`
- **Params**: `attribute_id` — path `attributeId`
- **Returns (parsed)**: `PublicApiDeleteAttributeResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteAttributeResponse, DeleteApiV1AttributesAttributeIdErrorBody]`
- **Error**: `DeleteApiV1AttributesAttributeIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteAttributeResponse` | `soda/models/public_api_delete_attribute_response.py` |
| `DeleteApiV1AttributesAttributeIdErrorBody` | `soda/errors/delete_api_v1_attributes_attribute_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.attributes.get_api_v1_attributes

- **Route**: `GET /api/v1/attributes`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_attributes(*, page: int | None = None, resource_type: AttributeResourceTypeDtoOrStr | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `resource_type` — query `resourceType` · `size` — query
- **Returns (parsed)**: `PublicApiListAttributesResponse`
- **Returns (raw)**: `ApiResult[PublicApiListAttributesResponse, GetApiV1AttributesErrorBody]`
- **Error**: `GetApiV1AttributesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AttributeResourceTypeDtoOrStr` | `soda/models/enums/attribute_resource_type_dto.py` |
| `PublicApiListAttributesResponse` | `soda/models/public_api_list_attributes_response.py` |
| `GetApiV1AttributesErrorBody` | `soda/errors/get_api_v1_attributes_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.attributes.post_api_v1_attributes

- **Route**: `POST /api/v1/attributes`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_attributes(body: PublicApiCreateAttributeRequestDto | PublicApiCreateAttributeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiCreateAttributeResponse`
- **Returns (raw)**: `ApiResult[PublicApiCreateAttributeResponse, PostApiV1AttributesErrorBody]`
- **Error**: `PostApiV1AttributesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateAttributeRequestDto` | `soda/models/public_api_create_attribute_request_dto.py` |
| `PublicApiCreateAttributeRequestDtoDict` | `soda/models/public_api_create_attribute_request_dto.py` |
| `PublicApiCreateAttributeResponse` | `soda/models/public_api_create_attribute_response.py` |
| `PostApiV1AttributesErrorBody` | `soda/errors/post_api_v1_attributes_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.attributes.post_api_v1_attributes_attribute_id

- **Route**: `POST /api/v1/attributes/{attributeId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_attributes_attribute_id(attribute_id: str, body: PublicApiUpdateAttributeRequestDto | PublicApiUpdateAttributeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `attribute_id`, `body`
- **Params**: `attribute_id` — path `attributeId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateAttributeResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateAttributeResponse, PostApiV1AttributesAttributeIdErrorBody]`
- **Error**: `PostApiV1AttributesAttributeIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateAttributeRequestDto` | `soda/models/public_api_update_attribute_request_dto.py` |
| `PublicApiUpdateAttributeRequestDtoDict` | `soda/models/public_api_update_attribute_request_dto.py` |
| `PublicApiUpdateAttributeResponse` | `soda/models/public_api_update_attribute_response.py` |
| `PostApiV1AttributesAttributeIdErrorBody` | `soda/errors/post_api_v1_attributes_attribute_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

