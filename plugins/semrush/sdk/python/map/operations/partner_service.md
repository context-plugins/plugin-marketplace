<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerService — operations

Accessor: `client.partner_service` · Source: `semrush/apis/partner_service.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.partner_service.post_apis_v4_app_center_v2_partner_viewer_status

- **Route**: `POST /apis/v4/app-center/v2/partner/viewer-status`
- **Auth**: `jwt_issuer_token`
- **Signature**: `def post_apis_v4_app_center_v2_partner_viewer_status(*, body: ViewerStatusRequest | ViewerStatusRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ViewerStatusResponse`
- **Returns (raw)**: `ApiResult[ViewerStatusResponse, PostApisV4AppCenterV2PartnerViewerStatusErrorBody]`
- **Error**: `PostApisV4AppCenterV2PartnerViewerStatusErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ViewerStatusRequest` | `semrush/models/viewer_status_request.py` |
| `ViewerStatusRequestDict` | `semrush/models/viewer_status_request.py` |
| `ViewerStatusResponse` | `semrush/models/viewer_status_response.py` |
| `PostApisV4AppCenterV2PartnerViewerStatusErrorBody` | `semrush/errors/post_apis_v4_app_center_v2_partner_viewer_status_error.py` |

