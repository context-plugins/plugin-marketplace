<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchFilterV2 — operations

Accessor: `client.search_filter_v2` · Source: `appstore_spy/apis/search_filter_v2.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search_filter_v2.get_filter_search_ios_apps_query_post2

- **Route**: `POST /ios/apps/query`
- **Auth**: `api_key_header`
- **Signature**: `def get_filter_search_ios_apps_query_post2(*, body: IosAppSearchBody | IosAppSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IosAppListResponse`
- **Returns (raw)**: `ApiResult[IosAppListResponse, GetFilterSearchIosAppsQueryPost2ErrorBody]`
- **Error**: `GetFilterSearchIosAppsQueryPost2ErrorBody` — **Case A (typed)**
- **Error arms**: `IosAppsQuery401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IosAppSearchBody` | `appstore_spy/models/ios_app_search_body.py` |
| `IosAppSearchBodyDict` | `appstore_spy/models/ios_app_search_body.py` |
| `IosAppListResponse` | `appstore_spy/models/ios_app_list_response.py` |
| `GetFilterSearchIosAppsQueryPost2ErrorBody` | `appstore_spy/errors/get_filter_search_ios_apps_query_post2_error.py` |
| `IosAppsQuery401Error1` | `appstore_spy/models/ios_apps_query401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

