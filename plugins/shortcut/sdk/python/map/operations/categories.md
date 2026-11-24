<!-- Generated file — do not edit; regenerated with the SDK. -->

# Categories — operations

Accessor: `client.categories` · Source: `shortcut/apis/categories.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.categories.create_category

- **Route**: `POST /api/v3/categories`
- **Auth**: `api_token`
- **Signature**: `def create_category(body: CreateCategory | CreateCategoryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Category`
- **Returns (raw)**: `ApiResult[Category, CreateCategoryErrorBody]`
- **Error**: `CreateCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCategory` | `shortcut/models/create_category.py` |
| `CreateCategoryDict` | `shortcut/models/create_category.py` |
| `Category` | `shortcut/models/category.py` |
| `CreateCategoryErrorBody` | `shortcut/errors/create_category_error.py` |

### client.categories.delete_category

- **Route**: `DELETE /api/v3/categories/{category-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_category(category_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `category_public_id`
- **Params**: `category_public_id` — path `category-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCategoryErrorBody]`
- **Error**: `DeleteCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCategoryErrorBody` | `shortcut/errors/delete_category_error.py` |

### client.categories.get_category

- **Route**: `GET /api/v3/categories/{category-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_category(category_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `category_public_id`
- **Params**: `category_public_id` — path `category-public-id`
- **Returns (parsed)**: `Category`
- **Returns (raw)**: `ApiResult[Category, GetCategoryErrorBody]`
- **Error**: `GetCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Category` | `shortcut/models/category.py` |
| `GetCategoryErrorBody` | `shortcut/errors/get_category_error.py` |

### client.categories.list_categories

- **Route**: `GET /api/v3/categories`
- **Auth**: `api_token`
- **Signature**: `def list_categories(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Category]`
- **Returns (raw)**: `ApiResult[list[Category], ListCategoriesErrorBody]`
- **Error**: `ListCategoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Category` | `shortcut/models/category.py` |
| `ListCategoriesErrorBody` | `shortcut/errors/list_categories_error.py` |

### client.categories.list_category_milestones

- **Route**: `GET /api/v3/categories/{category-public-id}/milestones`
- **Auth**: `api_token`
- **Signature**: `def list_category_milestones(category_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `category_public_id`
- **Params**: `category_public_id` — path `category-public-id`
- **Returns (parsed)**: `list[Milestone]`
- **Returns (raw)**: `ApiResult[list[Milestone], ListCategoryMilestonesErrorBody]`
- **Error**: `ListCategoryMilestonesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Milestone` | `shortcut/models/milestone.py` |
| `ListCategoryMilestonesErrorBody` | `shortcut/errors/list_category_milestones_error.py` |

### client.categories.list_category_objectives

- **Route**: `GET /api/v3/categories/{category-public-id}/objectives`
- **Auth**: `api_token`
- **Signature**: `def list_category_objectives(category_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `category_public_id`
- **Params**: `category_public_id` — path `category-public-id`
- **Returns (parsed)**: `list[Milestone]`
- **Returns (raw)**: `ApiResult[list[Milestone], ListCategoryObjectivesErrorBody]`
- **Error**: `ListCategoryObjectivesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Milestone` | `shortcut/models/milestone.py` |
| `ListCategoryObjectivesErrorBody` | `shortcut/errors/list_category_objectives_error.py` |

### client.categories.update_category

- **Route**: `PUT /api/v3/categories/{category-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_category(category_public_id: int, body: UpdateCategory | UpdateCategoryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `category_public_id`, `body`
- **Params**: `category_public_id` — path `category-public-id` · `body` — JSON body
- **Returns (parsed)**: `Category`
- **Returns (raw)**: `ApiResult[Category, UpdateCategoryErrorBody]`
- **Error**: `UpdateCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCategory` | `shortcut/models/update_category.py` |
| `UpdateCategoryDict` | `shortcut/models/update_category.py` |
| `Category` | `shortcut/models/category.py` |
| `UpdateCategoryErrorBody` | `shortcut/errors/update_category_error.py` |

