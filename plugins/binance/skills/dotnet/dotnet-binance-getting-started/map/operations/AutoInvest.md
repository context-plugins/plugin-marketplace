# AutoInvest — operations

Accessor: `client.AutoInvest` · Source: `Api/AutoInvest.cs` · 17 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChangePlanStatus
- **HTTP**: `POST /sapi/v1/lending/auto-invest/plan/edit-status` (Default (api))
- **Notes**: Change Plan Status Weight(IP): 1
- **Signature**: `ChangePlanStatus(int planId, Status1 status, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `planId` ← `planId`, `status` ← `status`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestPlanEditStatusResponse`
- **Error**: `SdkException<ChangePlanStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetListOfPlans
- **HTTP**: `GET /sapi/v1/lending/auto-invest/plan/list` (Default (api))
- **Notes**: Query plan lists Weight(IP): 1
- **Signature**: `GetListOfPlans(string planType, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `planType` ← `planType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestPlanListResponse`
- **Error**: `SdkException<GetListOfPlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTargetAssetRoiDataUserData
- **HTTP**: `GET /sapi/v1/lending/auto-invest/target-asset/roi/list` (Default (api))
- **Notes**: ROI return list for target asset Weight(IP): 1
- **Signature**: `GetTargetAssetRoiDataUserData(string targetAsset, string hisRoiType, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `targetAsset` ← `targetAsset`, `hisRoiType` ← `hisRoiType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1LendingAutoInvestTargetAssetRoiListResponse>`
- **Error**: `SdkException<GetTargetAssetRoiDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTargetAssetListUserData
- **HTTP**: `GET /sapi/v1/lending/auto-invest/target-asset/list` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `GetTargetAssetListUserData(long timestamp, string signature, string? targetAsset, int? size, int? current, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`targetAsset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `targetAsset` ← `targetAsset`, `size` ← `size`, `current` ← `current`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestTargetAssetListResponse`
- **Error**: `SdkException<GetTargetAssetListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IndexLinkedPlanRebalanceDetailsUserData
- **HTTP**: `GET /sapi/v1/lending/auto-invest/rebalance/history` (Default (api))
- **Notes**: Get the history of Index Linked Plan Redemption transactions Max 30 day difference between startTime and endTime If no startTime and endTime, default to show past 30 day records Weight(IP): 1
- **Signature**: `IndexLinkedPlanRebalanceDetailsUserData(long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1LendingAutoInvestRebalanceHistoryResponse>`
- **Error**: `SdkException<IndexLinkedPlanRebalanceDetailsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IndexLinkedPlanRedemptionTrade
- **HTTP**: `POST /sapi/v1/lending/auto-invest/redeem` (Default (api))
- **Notes**: To redeem index-Linked plan holdings Weight(IP): 1
- **Signature**: `IndexLinkedPlanRedemptionTrade(long indexId, int redemptionPercentage, long timestamp, string signature, string? requestId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `requestId` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `indexId` ← `indexId`, `redemptionPercentage` ← `redemptionPercentage`, `timestamp` ← `timestamp`, `signature` ← `signature`, `requestId` ← `requestId`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestRedeemResponse`
- **Error**: `SdkException<IndexLinkedPlanRedemptionTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IndexLinkedPlanRedemptionHistoryUserData
- **HTTP**: `GET /sapi/v1/lending/auto-invest/redeem/history` (Default (api))
- **Notes**: Get the history of Index Linked Plan Redemption transactions Max 30 day difference between startTime and endTime If no startTime and endTime, default to show past 30 day records Weight(IP): 1
- **Signature**: `IndexLinkedPlanRedemptionHistoryUserData(long requestId, long timestamp, string signature, long? startTime, long? endTime, int? current, string? asset, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `requestId` ← `requestId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `asset` ← `asset`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1LendingAutoInvestRedeemHistoryResponse>`
- **Error**: `SdkException<IndexLinkedPlanRedemptionHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InvestmentPlanAdjustment
- **HTTP**: `POST /sapi/v1/lending/auto-invest/plan/edit` (Default (api))
- **Notes**: Query Source Asset to be used for investment Weight(IP): 1
- **Signature**: `InvestmentPlanAdjustment(int planId, double subscriptionAmount, SubscriptionCycle subscriptionCycle, int subscriptionStartTime, string sourceAsset, long timestamp, string signature, int? subscriptionStartDay, SubscriptionStartWeekday? subscriptionStartWeekday, bool? flexibleAllowedToUse, IReadOnlyList<Detail1>? details, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`subscriptionStartDay` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `planId` ← `planId`, `subscriptionAmount` ← `subscriptionAmount`, `subscriptionCycle` ← `subscriptionCycle`, `subscriptionStartTime` ← `subscriptionStartTime`, `sourceAsset` ← `sourceAsset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `subscriptionStartDay` ← `subscriptionStartDay`, `subscriptionStartWeekday` ← `subscriptionStartWeekday`, `flexibleAllowedToUse` ← `flexibleAllowedToUse`, `details` ← `details`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestPlanEditResponse`
- **Error**: `SdkException<InvestmentPlanAdjustmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InvestmentPlanCreationUserData
- **HTTP**: `POST /sapi/v1/lending/auto-invest/plan/add` (Default (api))
- **Notes**: Post an investment plan creation Weight(IP): 1
- **Signature**: `InvestmentPlanCreationUserData(SourceType sourceType, PlanType planType, double subscriptionAmount, SubscriptionCycle subscriptionCycle, int subscriptionStartTime, string sourceAsset, IReadOnlyList<Detail1> details, long timestamp, string signature, string? requestId, long? indexId, int? subscriptionStartDay, SubscriptionStartWeekday? subscriptionStartWeekday, bool? flexibleAllowedToUse, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`requestId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sourceType` ← `sourceType`, `planType` ← `planType`, `subscriptionAmount` ← `subscriptionAmount`, `subscriptionCycle` ← `subscriptionCycle`, `subscriptionStartTime` ← `subscriptionStartTime`, `sourceAsset` ← `sourceAsset`, `details` ← `details`, `timestamp` ← `timestamp`, `signature` ← `signature`, `requestId` ← `requestId`, `IndexId` ← `indexId`, `subscriptionStartDay` ← `subscriptionStartDay`, `subscriptionStartWeekday` ← `subscriptionStartWeekday`, `flexibleAllowedToUse` ← `flexibleAllowedToUse`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestPlanAddResponse`
- **Error**: `SdkException<InvestmentPlanCreationUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OneTimeTransactionTrade
- **HTTP**: `POST /sapi/v1/lending/auto-invest/one-off` (Default (api))
- **Notes**: One time transaction Weight(IP): 1
- **Signature**: `OneTimeTransactionTrade(string sourceType, double subscriptionAmount, string sourceAsset, long timestamp, string signature, string? requestId, bool? flexibleAllowedToUse, long? planId, long? indexId, IReadOnlyList<Detail5>? details, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`requestId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sourceType` ← `sourceType`, `subscriptionAmount` ← `subscriptionAmount`, `sourceAsset` ← `sourceAsset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `requestId` ← `requestId`, `flexibleAllowedToUse` ← `flexibleAllowedToUse`, `planId` ← `planId`, `indexId` ← `indexId`, `details` ← `details`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestOneOffResponse`
- **Error**: `SdkException<OneTimeTransactionTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryIndexDetailsUserData
- **HTTP**: `GET /sapi/v1/lending/auto-invest/index/info` (Default (api))
- **Notes**: Query index details Weight(IP): 1
- **Signature**: `QueryIndexDetailsUserData(long indexId, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `indexId` ← `indexId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestIndexInfoResponse`
- **Error**: `SdkException<QueryIndexDetailsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryIndexLinkedPlanPositionDetailsUserData
- **HTTP**: `GET /sapi/v1/lending/auto-invest/index/user-summary` (Default (api))
- **Notes**: Details on users Index-Linked plan position details Weight(IP): 1
- **Signature**: `QueryIndexLinkedPlanPositionDetailsUserData(long indexId, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `indexId` ← `indexId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestIndexUserSummaryResponse`
- **Error**: `SdkException<QueryIndexLinkedPlanPositionDetailsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryOneTimeTransactionStatusUserData
- **HTTP**: `GET /sapi/v1/lending/auto-invest/one-off/status` (Default (api))
- **Notes**: Transaction status for one-time transaction Weight(IP): 1
- **Signature**: `QueryOneTimeTransactionStatusUserData(long transactionId, long timestamp, string signature, string? requestId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `requestId` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `transactionId` ← `transactionId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `requestId` ← `requestId`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestOneOffStatusResponse`
- **Error**: `SdkException<QueryOneTimeTransactionStatusUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryAllSourceAssetAndTargetAssetUserData
- **HTTP**: `GET /sapi/v1/lending/auto-invest/all/asset` (Default (api))
- **Notes**: Query all source assets and target assets Weight(IP): 1
- **Signature**: `QueryAllSourceAssetAndTargetAssetUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestAllAssetResponse`
- **Error**: `SdkException<QueryAllSourceAssetAndTargetAssetUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryHoldingDetailsOfThePlan
- **HTTP**: `GET /sapi/v1/lending/auto-invest/plan/id` (Default (api))
- **Notes**: Query holding details of the plan Weight(IP): 1
- **Signature**: `QueryHoldingDetailsOfThePlan(long timestamp, string signature, long? planId, string? requestId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `planId` — nullable, no default → **must pass explicitly**
  - `requestId` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `planId` ← `planId`, `requestId` ← `requestId`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestPlanIdResponse`
- **Error**: `SdkException<QueryHoldingDetailsOfThePlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QuerySourceAssetListUserData
- **HTTP**: `GET /sapi/v1/lending/auto-invest/source-asset/list` (Default (api))
- **Notes**: Query Source Asset to be used for investment Weight(IP): 1
- **Signature**: `QuerySourceAssetListUserData(string usageType, long timestamp, string signature, string? targetAsset, long? indexId, bool? flexibleAllowedToUse, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`targetAsset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usageType` ← `usageType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `targetAsset` ← `targetAsset`, `indexId` ← `indexId`, `flexibleAllowedToUse` ← `flexibleAllowedToUse`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingAutoInvestSourceAssetListResponse`
- **Error**: `SdkException<QuerySourceAssetListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QuerySubscriptionTransactionHistory
- **HTTP**: `GET /sapi/v1/lending/auto-invest/history/list` (Default (api))
- **Notes**: Query subscription transaction history of a plan Weight(IP): 1
- **Signature**: `QuerySubscriptionTransactionHistory(long timestamp, string signature, long? planId, long? startTime, long? endTime, long? targetAsset, PlanType1? planType, int? size, int? current, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`planId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `planId` ← `planId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `targetAsset` ← `targetAsset`, `planType` ← `planType`, `size` ← `size`, `current` ← `current`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1LendingAutoInvestHistoryListResponse>`
- **Error**: `SdkException<QuerySubscriptionTransactionHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
