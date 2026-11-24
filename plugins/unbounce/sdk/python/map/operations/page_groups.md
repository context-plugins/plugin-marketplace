<!-- Generated file — do not edit; regenerated with the SDK. -->

# PageGroups — operations

Accessor: `client.page_groups` · Source: `unbounce/apis/page_groups.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.page_groups.list_page_groups_for_sub_account

- **Route**: `GET /sub_accounts/{sub_account_id}/page_groups`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_page_groups_for_sub_account(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_account_id`
- **Params**: `sub_account_id` — path
- **Returns (parsed)**: `SubAccountsPageGroupsResponse`
- **Returns (raw)**: `ApiResult[SubAccountsPageGroupsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SubAccountsPageGroupsResponse` | `unbounce/models/sub_accounts_page_groups_response.py` |

### client.page_groups.list_pages_for_page_group

- **Route**: `GET /page_groups/{page_group_id}/pages`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_pages_for_page_group(page_group_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_group_id`
- **Params**: `page_group_id` — path
- **Returns (parsed)**: `PageCollection`
- **Returns (raw)**: `ApiResult[PageCollection, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PageCollection` | `unbounce/models/page_collection.py` |

