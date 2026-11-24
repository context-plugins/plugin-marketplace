<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompanyCurrency — operations

Accessor: `client.company_currency` · Source: `flow_account/apis/company_currency.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.company_currency.company_currency_get_company_currencies

- **Route**: `GET /{culture}/company-currency/currency`
- **Auth**: `bearer`
- **Signature**: `def company_currency_get_company_currencies(culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.company_currency.company_currency_get_list

- **Route**: `GET /{culture}/company-currency`
- **Auth**: `bearer`
- **Signature**: `def company_currency_get_list(culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

