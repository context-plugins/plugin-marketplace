<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `zillapi/apis/search.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.search

- **Route**: `POST /v1/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search(body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchResultsOk`
- **Returns (raw)**: `ApiResult[SearchResultsOk, SearchErrorBody]`
- **Error**: `SearchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchRequest2` | `zillapi/models/unions/search_request2.py` |
| `SearchRequest2Dict` | `zillapi/models/unions/search_request2.py` |
| `SearchResultsOk` | `zillapi/models/search_results_ok.py` |
| `SearchErrorBody` | `zillapi/errors/search_error.py` |
| `ApiErrorModel` | `zillapi/models/api_error_model.py` |

### client.search.search_with_details

- **Route**: `POST /v1/search/with-details`
- **Auth**: `bearer_auth`
- **Signature**: `def search_with_details(body: SearchWithDetailsRequest | SearchWithDetailsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `JobAcceptedZillapiZillowPropertyDataListingsApi`
- **Returns (raw)**: `ApiResult[JobAcceptedZillapiZillowPropertyDataListingsApi, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SearchWithDetailsRequest` | `zillapi/models/search_with_details_request.py` |
| `SearchWithDetailsRequestDict` | `zillapi/models/search_with_details_request.py` |
| `JobAcceptedZillapiZillowPropertyDataListingsApi` | `zillapi/models/job_accepted_zillapi_zillow_property_data_listings_api.py` |

