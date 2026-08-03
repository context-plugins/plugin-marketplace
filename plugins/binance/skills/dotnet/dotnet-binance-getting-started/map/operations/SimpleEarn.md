# SimpleEarn — operations

Accessor: `client.SimpleEarn` · Source: `Api/SimpleEarn.cs` · 24 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCollateralRecordUserData
- **HTTP**: `GET /sapi/v1/simple-earn/flexible/history/collateralRecord` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetCollateralRecordUserData(long timestamp, string signature, string? productId, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`productId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `productId` ← `productId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse`
- **Error**: `SdkException<GetCollateralRecordUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFlexiblePersonalLeftQuotaUserData
- **HTTP**: `GET /sapi/v1/simple-earn/flexible/personalLeftQuota` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetFlexiblePersonalLeftQuotaUserData(string productId, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `productId` ← `productId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse`
- **Error**: `SdkException<GetFlexiblePersonalLeftQuotaUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFlexibleProductPositionUserData
- **HTTP**: `GET /sapi/v1/simple-earn/flexible/position` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetFlexibleProductPositionUserData(long timestamp, string signature, string? asset, string? productId, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `productId` ← `productId`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexiblePositionResponse`
- **Error**: `SdkException<GetFlexibleProductPositionUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFlexibleRedemptionRecordUserData
- **HTTP**: `GET /sapi/v1/simple-earn/flexible/history/redemptionRecord` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetFlexibleRedemptionRecordUserData(string? productId, string? redeemId, string? asset, long? startTime, long? endTime, int? current, int? size, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`productId` … `size`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `productId` ← `productId`, `redeemId` ← `redeemId`, `asset` ← `asset`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`
- **Returns**: `SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse`
- **Error**: `SdkException<GetFlexibleRedemptionRecordUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFlexibleRewardsHistoryUserData
- **HTTP**: `GET /sapi/v1/simple-earn/flexible/history/rewardsRecord` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetFlexibleRewardsHistoryUserData(string type, string? productId, string? asset, long? startTime, long? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`productId` … `endTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `productId` ← `productId`, `asset` ← `asset`, `startTime` ← `startTime`, `endTime` ← `endTime`
- **Returns**: `SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse`
- **Error**: `SdkException<GetFlexibleRewardsHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFlexibleSubscriptionPreviewUserData
- **HTTP**: `GET /sapi/v1/simple-earn/flexible/subscriptionPreview` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetFlexibleSubscriptionPreviewUserData(string productId, double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `productId` ← `productId`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse`
- **Error**: `SdkException<GetFlexibleSubscriptionPreviewUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFlexibleSubscriptionRecordUserData
- **HTTP**: `GET /sapi/v1/simple-earn/flexible/history/subscriptionRecord` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetFlexibleSubscriptionRecordUserData(long timestamp, string signature, string? productId, string? purchaseId, string? asset, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`productId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `productId` ← `productId`, `purchaseId` ← `purchaseId`, `asset` ← `asset`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse`
- **Error**: `SdkException<GetFlexibleSubscriptionRecordUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLockedPersonalLeftQuotaUserData
- **HTTP**: `GET /sapi/v1/simple-earn/locked/personalLeftQuota` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetLockedPersonalLeftQuotaUserData(string projectId, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `projectId` ← `projectId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedPersonalLeftQuotaResponse`
- **Error**: `SdkException<GetLockedPersonalLeftQuotaUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLockedProductPositionUserData
- **HTTP**: `GET /sapi/v1/simple-earn/locked/position` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetLockedProductPositionUserData(long timestamp, string signature, string? asset, string? positionId, string? projectId, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `positionId` ← `positionId`, `projectId` ← `projectId`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedPositionResponse`
- **Error**: `SdkException<GetLockedProductPositionUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLockedRedemptionRecordUserData
- **HTTP**: `GET /sapi/v1/simple-earn/locked/history/redemptionRecord` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetLockedRedemptionRecordUserData(long timestamp, string signature, string? positionId, string? redeemId, string? asset, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`positionId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `positionId` ← `positionId`, `redeemId` ← `redeemId`, `asset` ← `asset`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse`
- **Error**: `SdkException<GetLockedRedemptionRecordUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLockedRewardsHistoryUserData
- **HTTP**: `GET /sapi/v1/simple-earn/locked/history/rewardsRecord` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetLockedRewardsHistoryUserData(long timestamp, string signature, string? positionId, string? asset, long? startTime, long? endTime, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`positionId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `positionId` ← `positionId`, `asset` ← `asset`, `startTime` ← `startTime`, `endTime` ← `endTime`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedHistoryRewardsRecordResponse`
- **Error**: `SdkException<GetLockedRewardsHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLockedSubscriptionPreviewUserData
- **HTTP**: `GET /sapi/v1/simple-earn/locked/subscriptionPreview` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetLockedSubscriptionPreviewUserData(string projectId, double amount, long timestamp, string signature, bool? autoSubscribe, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `autoSubscribe` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `projectId` ← `projectId`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `autoSubscribe` ← `autoSubscribe`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1SimpleEarnLockedSubscriptionPreviewResponse>`
- **Error**: `SdkException<GetLockedSubscriptionPreviewUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLockedSubscriptionRecordUserData
- **HTTP**: `GET /sapi/v1/simple-earn/locked/history/subscriptionRecord` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetLockedSubscriptionRecordUserData(long timestamp, string signature, string? purchaseId, string? asset, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`purchaseId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `purchaseId` ← `purchaseId`, `asset` ← `asset`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse`
- **Error**: `SdkException<GetLockedSubscriptionRecordUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRateHistoryUserData
- **HTTP**: `GET /sapi/v1/simple-earn/flexible/history/rateHistory` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetRateHistoryUserData(string productId, long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `productId` ← `productId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse`
- **Error**: `SdkException<GetRateHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSimpleEarnFlexibleProductListUserData
- **HTTP**: `GET /sapi/v1/simple-earn/flexible/list` (Default (api))
- **Notes**: Get available Simple Earn flexible product list Weight(IP): 150
- **Signature**: `GetSimpleEarnFlexibleProductListUserData(long timestamp, string signature, string? asset, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexibleListResponse`
- **Error**: `SdkException<GetSimpleEarnFlexibleProductListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSimpleEarnLockedProductListUserData
- **HTTP**: `GET /sapi/v1/simple-earn/locked/list` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetSimpleEarnLockedProductListUserData(long timestamp, string signature, string? asset, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedListResponse`
- **Error**: `SdkException<GetSimpleEarnLockedProductListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RedeemFlexibleProductTrade
- **HTTP**: `POST /sapi/v1/simple-earn/flexible/redeem` (Default (api))
- **Notes**: Weight(IP): 1 Rate Limit: 1/3s per account
- **Signature**: `RedeemFlexibleProductTrade(string productId, long timestamp, string signature, bool? redeemAll, double? amount, string? destAccount, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`redeemAll` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `productId` ← `productId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `redeemAll` ← `redeemAll`, `amount` ← `amount`, `destAccount` ← `destAccount`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexibleRedeemResponse`
- **Error**: `SdkException<RedeemFlexibleProductTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RedeemLockedProductTrade
- **HTTP**: `POST /sapi/v1/simple-earn/locked/redeem` (Default (api))
- **Notes**: Weight(IP): 1 Rate Limit: 1/3s per account
- **Signature**: `RedeemLockedProductTrade(string positionId, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `positionId` ← `positionId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedRedeemResponse`
- **Error**: `SdkException<RedeemLockedProductTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetFlexibleAutoSubscribeUserData
- **HTTP**: `POST /sapi/v1/simple-earn/flexible/setAutoSubscribe` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `SetFlexibleAutoSubscribeUserData(string productId, bool autoSubscribe, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `productId` ← `productId`, `autoSubscribe` ← `autoSubscribe`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse`
- **Error**: `SdkException<SetFlexibleAutoSubscribeUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetLockedAutoSubscribeUserData
- **HTTP**: `POST /sapi/v1/simple-earn/locked/setAutoSubscribe` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `SetLockedAutoSubscribeUserData(string positionId, bool autoSubscribe, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `positionId` ← `positionId`, `autoSubscribe` ← `autoSubscribe`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedSetAutoSubscribeResponse`
- **Error**: `SdkException<SetLockedAutoSubscribeUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetLockedProductRedeemOptionUserData
- **HTTP**: `GET /sapi/v1/simple-earn/locked/setRedeemOption` (Default (api))
- **Notes**: Set redeem option for Locked product Weight(IP): 50
- **Signature**: `SetLockedProductRedeemOptionUserData(string positionId, long timestamp, string signature, RedeemTo? redeemTo, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `redeemTo` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `positionId` ← `positionId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `redeemTo` ← `redeemTo`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedSetRedeemOptionResponse`
- **Error**: `SdkException<SetLockedProductRedeemOptionUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SimpleAccountUserData
- **HTTP**: `GET /sapi/v1/simple-earn/account` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `SimpleAccountUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnAccountResponse`
- **Error**: `SdkException<SimpleAccountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubscribeFlexibleProductTrade
- **HTTP**: `POST /sapi/v1/simple-earn/flexible/subscribe` (Default (api))
- **Notes**: Weight(IP): 1 Rate Limit: 1/3s per account
- **Signature**: `SubscribeFlexibleProductTrade(string productId, double amount, long timestamp, string signature, bool? autoSubscribe, string? sourceAccount, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `autoSubscribe` — nullable, no default → **must pass explicitly**
  - `sourceAccount` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `productId` ← `productId`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `autoSubscribe` ← `autoSubscribe`, `sourceAccount` ← `sourceAccount`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnFlexibleSubscribeResponse`
- **Error**: `SdkException<SubscribeFlexibleProductTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubscribeLockedProductTrade
- **HTTP**: `POST /sapi/v1/simple-earn/locked/subscribe` (Default (api))
- **Notes**: Weight(IP): 1 Rate Limit: 1/3s per account
- **Signature**: `SubscribeLockedProductTrade(string projectId, double amount, long timestamp, string signature, bool? autoSubscribe, string? sourceAccount, RedeemTo? redeemTo, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`autoSubscribe` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `projectId` ← `projectId`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `autoSubscribe` ← `autoSubscribe`, `sourceAccount` ← `sourceAccount`, `redeemTo` ← `redeemTo`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SimpleEarnLockedSubscribeResponse`
- **Error**: `SdkException<SubscribeLockedProductTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
