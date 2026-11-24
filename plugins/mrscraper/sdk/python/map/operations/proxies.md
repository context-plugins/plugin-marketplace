<!-- Generated file — do not edit; regenerated with the SDK. -->

# Proxies — operations

Accessor: `client.proxies` · Source: `mr_scraper/apis/proxies.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.proxies.get_api_v1_proxies_user_requests_bandwidth

- **Route**: `GET /api/v1/proxies/user/requests-bandwidth`
- **Auth**: `api_key`
- **Server**: `default`
- **Signature**: `def get_api_v1_proxies_user_requests_bandwidth(*, end_date: str | None = None, start_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `end_date` — query `endDate` · `start_date` — query `startDate`
- **Returns (parsed)**: `GetApiV1ProxiesUserRequestsBandwidthResponse`
- **Returns (raw)**: `ApiResult[GetApiV1ProxiesUserRequestsBandwidthResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ProxiesUserRequestsBandwidthResponse` | `mr_scraper/models/get_api_v1_proxies_user_requests_bandwidth_response.py` |

