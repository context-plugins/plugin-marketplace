<!-- Generated file — do not edit; regenerated with the SDK. -->

# ItemCategories — operations

Accessor: `client.item_categories` · Source: `dynamics_365_business_central/apis/item_categories.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.item_categories.list_item_categories

- **Route**: `GET /companies({company_id})/itemCategories`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_item_categories(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiItemCategoriesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiItemCategoriesResponse, ListItemCategoriesErrorBody]`
- **Error**: `ListItemCategoriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiItemCategoriesResponse` | `dynamics_365_business_central/models/companies_api_item_categories_response.py` |
| `ListItemCategoriesErrorBody` | `dynamics_365_business_central/errors/list_item_categories_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

