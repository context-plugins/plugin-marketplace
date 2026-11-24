<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytic — operations

Accessor: `client.analytic` · Source: `mr_scraper/apis/analytic.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.analytic.get_api_v1_analytic_statuses

- **Route**: `GET /api/v1/analytic/statuses`
- **Auth**: `api_key`
- **Server**: `default`
- **Signature**: `def get_api_v1_analytic_statuses(*, api_token_name: str | None = None, domain: str | None = None, end_date: str | None = None, start_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `api_token_name` — query `apiTokenName` · `domain` — query · `end_date` — query `endDate` · `start_date` — query `startDate`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

