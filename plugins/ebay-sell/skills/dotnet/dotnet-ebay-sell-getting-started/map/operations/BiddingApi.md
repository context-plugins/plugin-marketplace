# BiddingApi — operations

Accessor: `client.BiddingApi` · Source: `Api/BiddingApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetBidding
- **HTTP**: `GET /bidding/{item_id}` (Default (api))
- **Signature**: `GetBidding(string itemId, string xEbayCMarketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Bidding`
- **Error**: `SdkException<GetBiddingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlaceProxyBid
- **HTTP**: `POST /bidding/{item_id}/place_proxy_bid` (Default (api))
- **Signature**: `PlaceProxyBid(string itemId, string xEbayCMarketplaceId, PlaceProxyBidRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PlaceProxyBidResponse`
- **Error**: `SdkException<PlaceProxyBidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
