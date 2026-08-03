# FeedTypeApi — operations

Accessor: `client.FeedTypeApi` · Source: `Api/FeedTypeApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetFeedType
- **HTTP**: `GET /feed_type/{feed_type_id}` (Default (api))
- **Signature**: `GetFeedType(string feedTypeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FeedType`
- **Error**: `SdkException<GetFeedTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFeedTypes
- **HTTP**: `GET /feed_type` (Default (api))
- **Signature**: `GetFeedTypes(string? continuationToken, string? feedScope, string? limit, string? marketplaceIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`continuationToken` … `marketplaceIds`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `continuation_token` ← `continuationToken`, `feed_scope` ← `feedScope`, `limit` ← `limit`, `marketplace_ids` ← `marketplaceIds`
- **Returns**: `FeedTypeSearchResponse`
- **Error**: `SdkException<GetFeedTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
