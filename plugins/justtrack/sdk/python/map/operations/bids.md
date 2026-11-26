<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bids — operations

Accessor: `client.bids` · Source: `justtrack/apis/bids.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bids.post_management_v1_bids

- **Route**: `POST /management/v1/bids`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def post_management_v1_bids(*, body: ListBidsRequest | ListBidsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListBidsResponse`
- **Returns (raw)**: `ApiResult[ListBidsResponse, PostManagementV1BidsErrorBody]`
- **Error**: `PostManagementV1BidsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBidsRequest` | `justtrack/models/list_bids_request.py` |
| `ListBidsRequestDict` | `justtrack/models/list_bids_request.py` |
| `ListBidsResponse` | `justtrack/models/list_bids_response.py` |
| `PostManagementV1BidsErrorBody` | `justtrack/errors/post_management_v1_bids_error.py` |
| `ErrorResponse` | `justtrack/models/error_response.py` |

### client.bids.post_management_v1_bids_upload

- **Route**: `POST /management/v1/bids/upload`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def post_management_v1_bids_upload(*, body: list[UploadBidInput | UploadBidInputDict] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, PostManagementV1BidsUploadErrorBody]`
- **Error**: `PostManagementV1BidsUploadErrorBody` — **Case A (typed)**
- **Error arms**: `UploadBidsInvalidBidResponse` [400] · `ErrorResponse` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UploadBidInput` | `justtrack/models/upload_bid_input.py` |
| `UploadBidInputDict` | `justtrack/models/upload_bid_input.py` |
| `PostManagementV1BidsUploadErrorBody` | `justtrack/errors/post_management_v1_bids_upload_error.py` |
| `UploadBidsInvalidBidResponse` | `justtrack/models/upload_bids_invalid_bid_response.py` |
| `ErrorResponse` | `justtrack/models/error_response.py` |

