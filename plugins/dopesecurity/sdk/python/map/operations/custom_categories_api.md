<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomCategoriesApi — operations

Accessor: `client.custom_categories_api` · Source: `dope_security/apis/custom_categories_api.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.custom_categories_api.add_custom_category_urls

- **Route**: `POST /custom_categories/{custom_category_name}/urls`
- **Auth**: `bearer_auth`
- **Signature**: `def add_custom_category_urls(custom_category_name: str, body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_category_name`, `body`
- **Params**: `custom_category_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, AddCustomCategoryUrlsErrorBody]`
- **Error**: `AddCustomCategoryUrlsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomCategoriesUrlsRequest` | `dope_security/models/custom_categories_urls_request.py` |
| `CustomCategoriesUrlsRequestDict` | `dope_security/models/custom_categories_urls_request.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `AddCustomCategoryUrlsErrorBody` | `dope_security/errors/add_custom_category_urls_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.custom_categories_api.create_custom_category

- **Route**: `POST /custom_categories/{custom_category_name}`
- **Auth**: `bearer_auth`
- **Signature**: `def create_custom_category(custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_category_name`
- **Params**: `custom_category_name` — path
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, CreateCustomCategoryErrorBody]`
- **Error**: `CreateCustomCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `CreateCustomCategoryErrorBody` | `dope_security/errors/create_custom_category_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.custom_categories_api.delete_all_custom_category_urls

- **Route**: `DELETE /custom_categories/{custom_category_name}/urls`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_all_custom_category_urls(custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_category_name`
- **Params**: `custom_category_name` — path
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, DeleteAllCustomCategoryUrlsErrorBody]`
- **Error**: `DeleteAllCustomCategoryUrlsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `DeleteAllCustomCategoryUrlsErrorBody` | `dope_security/errors/delete_all_custom_category_urls_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.custom_categories_api.delete_custom_category

- **Route**: `DELETE /custom_categories/{custom_category_name}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_custom_category(custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_category_name`
- **Params**: `custom_category_name` — path
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, DeleteCustomCategoryErrorBody]`
- **Error**: `DeleteCustomCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `DeleteCustomCategoryErrorBody` | `dope_security/errors/delete_custom_category_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.custom_categories_api.delete_custom_category_url

- **Route**: `DELETE /custom_categories/{custom_category_name}/url/{encoded_url}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_custom_category_url(custom_category_name: str, encoded_url: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_category_name`, `encoded_url`
- **Params**: `custom_category_name` — path · `encoded_url` — path
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, DeleteCustomCategoryUrlErrorBody]`
- **Error**: `DeleteCustomCategoryUrlErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `DeleteCustomCategoryUrlErrorBody` | `dope_security/errors/delete_custom_category_url_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.custom_categories_api.list_custom_categories

- **Route**: `GET /custom_categories`
- **Auth**: `bearer_auth`
- **Signature**: `def list_custom_categories(*, first: int | None = 50, after: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `first` — query · `after` — query
- **Returns (parsed)**: `CustomCategoriesResponse`
- **Returns (raw)**: `ApiResult[CustomCategoriesResponse, ListCustomCategoriesErrorBody]`
- **Error**: `ListCustomCategoriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomCategoriesResponse` | `dope_security/models/custom_categories_response.py` |
| `ListCustomCategoriesErrorBody` | `dope_security/errors/list_custom_categories_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.custom_categories_api.list_custom_category_urls

- **Route**: `GET /custom_categories/{custom_category_name}/urls`
- **Auth**: `bearer_auth`
- **Signature**: `def list_custom_category_urls(custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_category_name`
- **Params**: `custom_category_name` — path
- **Returns (parsed)**: `CustomCategoriesUrlsResponse`
- **Returns (raw)**: `ApiResult[CustomCategoriesUrlsResponse, ListCustomCategoryUrlsErrorBody]`
- **Error**: `ListCustomCategoryUrlsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomCategoriesUrlsResponse` | `dope_security/models/custom_categories_urls_response.py` |
| `ListCustomCategoryUrlsErrorBody` | `dope_security/errors/list_custom_category_urls_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.custom_categories_api.overwrite_custom_category_urls

- **Route**: `PUT /custom_categories/{custom_category_name}/urls`
- **Auth**: `bearer_auth`
- **Signature**: `def overwrite_custom_category_urls(custom_category_name: str, body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_category_name`, `body`
- **Params**: `custom_category_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, OverwriteCustomCategoryUrlsErrorBody]`
- **Error**: `OverwriteCustomCategoryUrlsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomCategoriesUrlsRequest` | `dope_security/models/custom_categories_urls_request.py` |
| `CustomCategoriesUrlsRequestDict` | `dope_security/models/custom_categories_urls_request.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `OverwriteCustomCategoryUrlsErrorBody` | `dope_security/errors/overwrite_custom_category_urls_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

