<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `ortto/apis/accounts.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.accounts.merge_accounts

- **Route**: `POST /accounts/merge`
- **Auth**: `api_key_auth`
- **Signature**: `def merge_accounts(body: AccountsMergeRequest | AccountsMergeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, MergeAccountsErrorBody]`
- **Error**: `MergeAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountsMergeRequest` | `ortto/models/accounts_merge_request.py` |
| `AccountsMergeRequestDict` | `ortto/models/accounts_merge_request.py` |
| `MergeAccountsErrorBody` | `ortto/errors/merge_accounts_error.py` |
| `Error` | `ortto/models/error.py` |

