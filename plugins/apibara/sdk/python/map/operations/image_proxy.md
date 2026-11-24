<!-- Generated file — do not edit; regenerated with the SDK. -->

# ImageProxy — operations

Accessor: `client.image_proxy` · Source: `apibara/apis/image_proxy.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.image_proxy.proxy_auction_image

- **Route**: `GET /image-proxy`
- **Auth**: `api_key_auth`
- **Signature**: `def proxy_auction_image(url: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `url`
- **Params**: `url` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, ProxyAuctionImageErrorBody]`
- **Error**: `ProxyAuctionImageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `ProxyAuctionImageErrorBody` | `apibara/errors/proxy_auction_image_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

