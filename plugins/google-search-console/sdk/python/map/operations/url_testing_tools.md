<!-- Generated file — do not edit; regenerated with the SDK. -->

# UrlTestingTools — operations

Accessor: `client.url_testing_tools` · Source: `google_search_console/apis/url_testing_tools.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.url_testing_tools.searchconsole_url_testing_tools_mobile_friendly_test_run

- **Route**: `POST /v1/urlTestingTools/mobileFriendlyTest:run`
- **Auth**: `api_key`
- **Server**: `default`
- **Signature**: `def searchconsole_url_testing_tools_mobile_friendly_test_run(body: RunMobileFriendlyTestRequest | RunMobileFriendlyTestRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RunMobileFriendlyTestResponse`
- **Returns (raw)**: `ApiResult[RunMobileFriendlyTestResponse, SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody]`
- **Error**: `SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunMobileFriendlyTestRequest` | `google_search_console/models/run_mobile_friendly_test_request.py` |
| `RunMobileFriendlyTestRequestDict` | `google_search_console/models/run_mobile_friendly_test_request.py` |
| `RunMobileFriendlyTestResponse` | `google_search_console/models/run_mobile_friendly_test_response.py` |
| `SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody` | `google_search_console/errors/searchconsole_url_testing_tools_mobile_friendly_test_run_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

