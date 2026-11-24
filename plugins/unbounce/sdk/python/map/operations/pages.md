<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pages — operations

Accessor: `client.pages` · Source: `unbounce/apis/pages.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.pages.get_page

- **Route**: `GET /pages/{page_id}`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def get_page(page_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`
- **Params**: `page_id` — path
- **Returns (parsed)**: `Page`
- **Returns (raw)**: `ApiResult[Page, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Page` | `unbounce/models/page.py` |

### client.pages.list_account_pages

- **Route**: `GET /accounts/{account_id}/pages`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_account_pages(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path
- **Returns (parsed)**: `PageCollection`
- **Returns (raw)**: `ApiResult[PageCollection, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PageCollection` | `unbounce/models/page_collection.py` |

### client.pages.list_form_fields

- **Route**: `GET /pages/{page_id}/form_fields`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_form_fields(page_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`
- **Params**: `page_id` — path
- **Returns (parsed)**: `PagesFormFieldsResponse`
- **Returns (raw)**: `ApiResult[PagesFormFieldsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PagesFormFieldsResponse` | `unbounce/models/pages_form_fields_response.py` |

### client.pages.list_pages

- **Route**: `GET /pages`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_pages(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PageCollection`
- **Returns (raw)**: `ApiResult[PageCollection, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PageCollection` | `unbounce/models/page_collection.py` |

### client.pages.list_pages_for_domain

- **Route**: `GET /domains/{domain_id}/pages`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_pages_for_domain(domain_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_id`
- **Params**: `domain_id` — path
- **Returns (parsed)**: `PageCollection`
- **Returns (raw)**: `ApiResult[PageCollection, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PageCollection` | `unbounce/models/page_collection.py` |

### client.pages.list_sub_account_pages

- **Route**: `GET /sub_accounts/{sub_account_id}/pages`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_sub_account_pages(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_account_id`
- **Params**: `sub_account_id` — path
- **Returns (parsed)**: `PageCollection`
- **Returns (raw)**: `ApiResult[PageCollection, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PageCollection` | `unbounce/models/page_collection.py` |

