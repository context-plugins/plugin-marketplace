<!-- Generated file — do not edit; regenerated with the SDK. -->

# Results — operations

Accessor: `client.results` · Source: `mr_scraper/apis/results.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.results.get_api_v1_results_result_id

- **Route**: `GET /api/v1/results/{resultId}`
- **Auth**: `api_key`
- **Server**: `default`
- **Signature**: `def get_api_v1_results_result_id(result_id: str, *, include_html: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `result_id`
- **Params**: `result_id` — path `resultId` · `include_html` — query
- **Returns (parsed)**: `GetApiV1ResultsResultidResponse`
- **Returns (raw)**: `ApiResult[GetApiV1ResultsResultidResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ResultsResultidResponse` | `mr_scraper/models/get_api_v1_results_resultid_response.py` |

