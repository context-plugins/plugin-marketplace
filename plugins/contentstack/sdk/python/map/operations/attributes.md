<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attributes — operations

Accessor: `client.attributes` · Source: `contentstack/apis/attributes.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.attributes.create_attribute

- **Route**: `POST /attributes`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def create_attribute(x_project_uid: str, body: CreateAttributeRequest | CreateAttributeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`, `body`
- **Params**: `x_project_uid` — header `x-project-uid` · `body` — JSON body
- **Returns (parsed)**: `Attribute`
- **Returns (raw)**: `ApiResult[Attribute, CreateAttributeErrorBody]`
- **Error**: `CreateAttributeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateAttributeRequest` | `contentstack/models/create_attribute_request.py` |
| `CreateAttributeRequestDict` | `contentstack/models/create_attribute_request.py` |
| `Attribute` | `contentstack/models/attribute.py` |
| `CreateAttributeErrorBody` | `contentstack/errors/create_attribute_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.attributes.delete_attribute

- **Route**: `DELETE /attributes/{id}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def delete_attribute(id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_project_uid`
- **Params**: `id_` — path `id` · `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAttributeErrorBody]`
- **Error**: `DeleteAttributeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAttributeErrorBody` | `contentstack/errors/delete_attribute_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.attributes.get_all_attributes

- **Route**: `GET /attributes`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def get_all_attributes(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`
- **Params**: `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `AttributeList`
- **Returns (raw)**: `ApiResult[AttributeList, GetAllAttributesErrorBody]`
- **Error**: `GetAllAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AttributeList` | `contentstack/models/attribute_list.py` |
| `GetAllAttributesErrorBody` | `contentstack/errors/get_all_attributes_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.attributes.update_attribute

- **Route**: `PUT /attributes/{id}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def update_attribute(id_: str, x_project_uid: str, body: CreateAttributeRequest | CreateAttributeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_project_uid`, `body`
- **Params**: `id_` — path `id` · `x_project_uid` — header `x-project-uid` · `body` — JSON body
- **Returns (parsed)**: `Attribute`
- **Returns (raw)**: `ApiResult[Attribute, UpdateAttributeErrorBody]`
- **Error**: `UpdateAttributeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateAttributeRequest` | `contentstack/models/create_attribute_request.py` |
| `CreateAttributeRequestDict` | `contentstack/models/create_attribute_request.py` |
| `Attribute` | `contentstack/models/attribute.py` |
| `UpdateAttributeErrorBody` | `contentstack/errors/update_attribute_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

