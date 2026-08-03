# SubAccountApi — operations

Accessor: `client.SubAccountApi` · Source: `Api/SubAccountApi.cs` · 45 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAVirtualSubAccountForMasterAccount
- **HTTP**: `POST /sapi/v1/sub-account/virtualSubAccount` (Default (api))
- **Notes**: This request will generate a virtual sub account under your master account. You need to enable "trade" option for the api key which requests this endpoint. Weight(IP): 1
- **Signature**: `CreateAVirtualSubAccountForMasterAccount(string subAccountString, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `subAccountString` ← `subAccountString`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountVirtualSubAccountResponse`
- **Error**: `SdkException<CreateAVirtualSubAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteIpListForASubAccountApiKeyForMasterAccount
- **HTTP**: `DELETE /sapi/v1/sub-account/subAccountApi/ipRestriction/ipList` (Default (api))
- **Notes**: Weight(UID): 3000
- **Signature**: `DeleteIpListForASubAccountApiKeyForMasterAccount(string email, string subAccountApiKey, long timestamp, string signature, string? ipAddress, string? thirdPartyName, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ipAddress` — nullable, no default → **must pass explicitly**
  - `thirdPartyName` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `subAccountApiKey` ← `subAccountApiKey`, `timestamp` ← `timestamp`, `signature` ← `signature`, `ipAddress` ← `ipAddress`, `thirdPartyName` ← `thirdPartyName`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse`
- **Error**: `SdkException<DeleteIpListForASubAccountApiKeyForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccount
- **HTTP**: `POST /sapi/v1/managed-subaccount/deposit` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccount(string toEmail, string asset, double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `toEmail` ← `toEmail`, `asset` ← `asset`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountDepositResponse`
- **Error**: `SdkException<DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DetailOnSubAccountSFuturesAccountForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/futures/account` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `DetailOnSubAccountSFuturesAccountForMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountFuturesAccountResponse`
- **Error**: `SdkException<DetailOnSubAccountSFuturesAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DetailOnSubAccountSFuturesAccountV2ForMasterAccount
- **HTTP**: `GET /sapi/v2/sub-account/futures/account` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `DetailOnSubAccountSFuturesAccountV2ForMasterAccount(string email, int futuresType, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `futuresType` ← `futuresType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2SubAccountFuturesAccountResponse`
- **Error**: `SdkException<DetailOnSubAccountSFuturesAccountV2ForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DetailOnSubAccountSMarginAccountForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/margin/account` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `DetailOnSubAccountSMarginAccountForMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountMarginAccountResponse`
- **Error**: `SdkException<DetailOnSubAccountSMarginAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableFuturesForSubAccountForMasterAccount
- **HTTP**: `POST /sapi/v1/sub-account/futures/enable` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `EnableFuturesForSubAccountForMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountFuturesEnableResponse`
- **Error**: `SdkException<EnableFuturesForSubAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableLeverageTokenForSubAccountForMasterAccount
- **HTTP**: `POST /sapi/v1/sub-account/blvt/enable` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `EnableLeverageTokenForSubAccountForMasterAccount(string email, bool enableBlvt, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `enableBlvt` ← `enableBlvt`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountBlvtEnableResponse`
- **Error**: `SdkException<EnableLeverageTokenForSubAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableMarginForSubAccountForMasterAccount
- **HTTP**: `POST /sapi/v1/sub-account/margin/enable` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `EnableMarginForSubAccountForMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountMarginEnableResponse`
- **Error**: `SdkException<EnableMarginForSubAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableOptionsForSubAccountForMasterAccountUserData
- **HTTP**: `POST /sapi/v1/sub-account/eoptions/enable` (Default (api))
- **Notes**: Enable Options for Sub-account (For Master Account). Weight(IP): 1
- **Signature**: `EnableOptionsForSubAccountForMasterAccountUserData(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountEoptionsEnableResponse`
- **Error**: `SdkException<EnableOptionsForSubAccountForMasterAccountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FuturesPositionRiskOfSubAccountForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/futures/positionRisk` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `FuturesPositionRiskOfSubAccountForMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1SubAccountFuturesPositionRiskResponse>`
- **Error**: `SdkException<FuturesPositionRiskOfSubAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FuturesPositionRiskOfSubAccountV2ForMasterAccount
- **HTTP**: `GET /sapi/v2/sub-account/futures/positionRisk` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `FuturesPositionRiskOfSubAccountV2ForMasterAccount(string email, int futuresType, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `futuresType` ← `futuresType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2SubAccountFuturesPositionRiskResponse`
- **Error**: `SdkException<FuturesPositionRiskOfSubAccountV2ForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetIpRestrictionForASubAccountApiKeyForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/subAccountApi/ipRestriction` (Default (api))
- **Notes**: Weight(UID): 3000
- **Signature**: `GetIpRestrictionForASubAccountApiKeyForMasterAccount(string email, string subAccountApiKey, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `subAccountApiKey` ← `subAccountApiKey`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountSubAccountApiIpRestrictionResponse`
- **Error**: `SdkException<GetIpRestrictionForASubAccountApiKeyForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetManagedSubAccountDepositAddressForInvestorMasterAccount
- **HTTP**: `GET /sapi/v1/managed-subaccount/deposit/address` (Default (api))
- **Notes**: Get investor's managed sub-account deposit address Weight(UID): 1
- **Signature**: `GetManagedSubAccountDepositAddressForInvestorMasterAccount(string email, string coin, long timestamp, string signature, string? network, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `network` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `coin` ← `coin`, `timestamp` ← `timestamp`, `signature` ← `signature`, `network` ← `network`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountDepositAddressResponse`
- **Error**: `SdkException<GetManagedSubAccountDepositAddressForInvestorMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ManagedSubAccountAssetDetailsForInvestorMasterAccount
- **HTTP**: `GET /sapi/v1/managed-subaccount/asset` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `ManagedSubAccountAssetDetailsForInvestorMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1ManagedSubaccountAssetResponse>`
- **Error**: `SdkException<ManagedSubAccountAssetDetailsForInvestorMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ManagedSubAccountSnapshotForInvestorMasterAccount
- **HTTP**: `GET /sapi/v1/managed-subaccount/accountSnapshot` (Default (api))
- **Notes**: The query time period must be less then 30 days Support query within the last one month only If `startTime` and `endTime` not sent, return records of the last 7 days by default Weight(IP): 2400
- **Signature**: `ManagedSubAccountSnapshotForInvestorMasterAccount(string email, string type, long timestamp, string signature, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountAccountSnapshotResponse`
- **Error**: `SdkException<ManagedSubAccountSnapshotForInvestorMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginTransferForSubAccountForMasterAccount
- **HTTP**: `POST /sapi/v1/sub-account/margin/transfer` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `MarginTransferForSubAccountForMasterAccount(string email, string asset, double amount, int type, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `asset` ← `asset`, `amount` ← `amount`, `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountMarginTransferResponse`
- **Error**: `SdkException<MarginTransferForSubAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryManagedSubAccountTransferLogForInvestorMasterAccount
- **HTTP**: `GET /sapi/v1/managed-subaccount/queryTransLogForInvestor` (Default (api))
- **Notes**: Investor can use this api to query managed sub account transfer log. This endpoint is available for investor of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team. Weight(IP): 1
- **Signature**: `QueryManagedSubAccountTransferLogForInvestorMasterAccount(string email, long timestamp, string signature, long? startTime, long? endTime, int? page, int? limit, string? transfers, string? transferFunctionAccountType, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `page` ← `page`, `limit` ← `limit`, `transfers` ← `transfers`, `transferFunctionAccountType` ← `transferFunctionAccountType`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountQueryTransLogForInvestorResponse`
- **Error**: `SdkException<QueryManagedSubAccountTransferLogForInvestorMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### QueryManagedSubAccountTransferLogForTradingTeamMasterAccount
- **HTTP**: `GET /sapi/v1/managed-subaccount/queryTransLogForTradeParent` (Default (api))
- **Notes**: Trading team can use this api to query managed sub account transfer log. This endpoint is available for trading team of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team Weight(IP): 60
- **Signature**: `QueryManagedSubAccountTransferLogForTradingTeamMasterAccount(string email, long timestamp, string signature, long? startTime, long? endTime, int? page, int? limit, string? transfers, string? transferFunctionAccountType, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `page` ← `page`, `limit` ← `limit`, `transfers` ← `transfers`, `transferFunctionAccountType` ← `transferFunctionAccountType`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse`
- **Error**: `SdkException<QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserData
- **HTTP**: `GET /sapi/v1/managed-subaccount/query-trans-log` (Default (api))
- **Notes**: Query Managed Sub Account Transfer Log (For Trading Team Sub Account) Weight(UID): 60
- **Signature**: `QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserData(Transfers transfers, TransferFunctionAccountType transferFunctionAccountType, long timestamp, string signature, long? startTime, long? endTime, int? page, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `transfers` ← `transfers`, `transferFunctionAccountType` ← `transferFunctionAccountType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `page` ← `page`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountQueryTransLogResponse`
- **Error**: `SdkException<QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccount
- **HTTP**: `GET /sapi/v1/managed-subaccount/fetch-future-asset` (Default (api))
- **Notes**: Investor can use this api to query managed sub account futures asset details
- **Signature**: `QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountFetchFutureAssetResponse`
- **Error**: `SdkException<QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryManagedSubAccountListForInvestor
- **HTTP**: `GET /sapi/v1/managed-subaccount/info` (Default (api))
- **Notes**: Get investor's managed sub-account list. Weight(UID): 60
- **Signature**: `QueryManagedSubAccountListForInvestor(string email, long timestamp, string signature, int? page, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `page` ← `page`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountInfoResponse`
- **Error**: `SdkException<QueryManagedSubAccountListForInvestorError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccount
- **HTTP**: `GET /sapi/v1/managed-subaccount/marginAsset` (Default (api))
- **Notes**: Investor can use this api to query managed sub account margin asset details
- **Signature**: `QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountMarginAssetResponse`
- **Error**: `SdkException<QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QuerySubAccountAssetsForMasterAccount
- **HTTP**: `GET /sapi/v4/sub-account/assets` (Default (api))
- **Notes**: Fetch sub-account assets Weight(UID): 60
- **Signature**: `QuerySubAccountAssetsForMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV4SubAccountAssetsResponse`
- **Error**: `SdkException<QuerySubAccountAssetsForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QuerySubAccountListForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/list` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `QuerySubAccountListForMasterAccount(long timestamp, string signature, string? email, IsFreeze? isFreeze, int? page, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`email` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `email` ← `email`, `isFreeze` ← `isFreeze`, `page` ← `page`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountListResponse`
- **Error**: `SdkException<QuerySubAccountListForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### QuerySubAccountTransactionStatisticsForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/transaction-statistics` (Default (api))
- **Notes**: Query Sub-account Transaction statistics (For Master Account). Weight(UID): 60
- **Signature**: `QuerySubAccountTransactionStatisticsForMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountTransactionStatisticsResponse`
- **Error**: `SdkException<QuerySubAccountTransactionStatisticsForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubAccountAssetsForMasterAccount
- **HTTP**: `GET /sapi/v3/sub-account/assets` (Default (api))
- **Notes**: Fetch sub-account assets Weight(IP): 1
- **Signature**: `SubAccountAssetsForMasterAccount(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV3SubAccountAssetsResponse`
- **Error**: `SdkException<SubAccountAssetsForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubAccountDepositHistoryForMasterAccount
- **HTTP**: `GET /sapi/v1/capital/deposit/subHisrec` (Default (api))
- **Notes**: Fetch sub-account deposit history Weight(IP): 1
- **Signature**: `SubAccountDepositHistoryForMasterAccount(string email, long timestamp, string signature, string? coin, int? status, long? startTime, long? endTime, long? limit, int? offset, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`coin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `coin` ← `coin`, `status` ← `status`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `offset` ← `offset`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1CapitalDepositSubHisrecResponse>`
- **Error**: `SdkException<SubAccountDepositHistoryForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubAccountFuturesAssetTransferForMasterAccount
- **HTTP**: `POST /sapi/v1/sub-account/futures/internalTransfer` (Default (api))
- **Notes**: Master account can transfer max 2000 times a minute Weight(IP): 1
- **Signature**: `SubAccountFuturesAssetTransferForMasterAccount(string fromEmail, string toEmail, int futuresType, string asset, double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fromEmail` ← `fromEmail`, `toEmail` ← `toEmail`, `futuresType` ← `futuresType`, `asset` ← `asset`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountFuturesInternalTransferResponse1`
- **Error**: `SdkException<SubAccountFuturesAssetTransferForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubAccountFuturesAssetTransferHistoryForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/futures/internalTransfer` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `SubAccountFuturesAssetTransferHistoryForMasterAccount(string email, int futuresType, long timestamp, string signature, long? startTime, long? endTime, int? page, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `futuresType` ← `futuresType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `page` ← `page`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountFuturesInternalTransferResponse`
- **Error**: `SdkException<SubAccountFuturesAssetTransferHistoryForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SubAccountSpotAssetTransferHistoryForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/sub/transfer/history` (Default (api))
- **Notes**: fromEmail and toEmail cannot be sent at the same time. Return fromEmail equal master account email by default. Weight(IP): 1
- **Signature**: `SubAccountSpotAssetTransferHistoryForMasterAccount(long timestamp, string signature, string? fromEmail, string? toEmail, long? startTime, long? endTime, int? page, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`fromEmail` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `fromEmail` ← `fromEmail`, `toEmail` ← `toEmail`, `startTime` ← `startTime`, `endTime` ← `endTime`, `page` ← `page`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1SubAccountSubTransferHistoryResponse>`
- **Error**: `SdkException<SubAccountSpotAssetTransferHistoryForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SubAccountSpotAssetsSummaryForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/spotSummary` (Default (api))
- **Notes**: Get BTC valued asset summary of subaccounts. Weight(IP): 1
- **Signature**: `SubAccountSpotAssetsSummaryForMasterAccount(long timestamp, string signature, string? email, int? page, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`email` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `email` ← `email`, `page` ← `page`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountSpotSummaryResponse`
- **Error**: `SdkException<SubAccountSpotAssetsSummaryForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SubAccountSpotAssetsSummaryForMasterAccount2
- **HTTP**: `GET /sapi/v1/capital/deposit/subAddress` (Default (api))
- **Notes**: Fetch sub-account deposit address Weight(IP): 1
- **Signature**: `SubAccountSpotAssetsSummaryForMasterAccount2(string email, string coin, long timestamp, string signature, string? network, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `network` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `coin` ← `coin`, `timestamp` ← `timestamp`, `signature` ← `signature`, `network` ← `network`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1CapitalDepositSubAddressResponse`
- **Error**: `SdkException<SubAccountSpotAssetsSummaryForMasterAccount2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubAccountTransferHistoryForSubAccount
- **HTTP**: `GET /sapi/v1/sub-account/transfer/subUserHistory` (Default (api))
- **Notes**: If `type` is not sent, the records of type 2: transfer out will be returned by default. If `startTime` and `endTime` are not sent, the recent 30-day data will be returned. Weight(IP): 1
- **Signature**: `SubAccountTransferHistoryForSubAccount(long timestamp, string signature, string? asset, int? type, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `type` ← `type`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1SubAccountTransferSubUserHistoryResponse>`
- **Error**: `SdkException<SubAccountTransferHistoryForSubAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubAccountSStatusOnMarginFuturesForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/status` (Default (api))
- **Notes**: If no `email` sent, all sub-accounts' information will be returned. Weight(IP): 10
- **Signature**: `SubAccountSStatusOnMarginFuturesForMasterAccount(long timestamp, string signature, string? email, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `email` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `email` ← `email`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1SubAccountStatusResponse>`
- **Error**: `SdkException<SubAccountSStatusOnMarginFuturesForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SummaryOfSubAccountSFuturesAccountForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/futures/accountSummary` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `SummaryOfSubAccountSFuturesAccountForMasterAccount(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountFuturesAccountSummaryResponse`
- **Error**: `SdkException<SummaryOfSubAccountSFuturesAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SummaryOfSubAccountSFuturesAccountV2ForMasterAccount
- **HTTP**: `GET /sapi/v2/sub-account/futures/accountSummary` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `SummaryOfSubAccountSFuturesAccountV2ForMasterAccount(int futuresType, long timestamp, string signature, int? page, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `futuresType` ← `futuresType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `page` ← `page`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2SubAccountFuturesAccountSummaryResponse`
- **Error**: `SdkException<SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SummaryOfSubAccountSMarginAccountForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/margin/accountSummary` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `SummaryOfSubAccountSMarginAccountForMasterAccount(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountMarginAccountSummaryResponse`
- **Error**: `SdkException<SummaryOfSubAccountSMarginAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransferForSubAccountForMasterAccount
- **HTTP**: `POST /sapi/v1/sub-account/futures/transfer` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `TransferForSubAccountForMasterAccount(string email, string asset, double amount, int type, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `asset` ← `asset`, `amount` ← `amount`, `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountFuturesTransferResponse`
- **Error**: `SdkException<TransferForSubAccountForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransferToMasterForSubAccount
- **HTTP**: `POST /sapi/v1/sub-account/transfer/subToMaster` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `TransferToMasterForSubAccount(string asset, double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountTransferSubToMasterResponse`
- **Error**: `SdkException<TransferToMasterForSubAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransferToSubAccountOfSameMasterForSubAccount
- **HTTP**: `POST /sapi/v1/sub-account/transfer/subToSub` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `TransferToSubAccountOfSameMasterForSubAccount(string toEmail, string asset, double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `toEmail` ← `toEmail`, `asset` ← `asset`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountTransferSubToSubResponse`
- **Error**: `SdkException<TransferToSubAccountOfSameMasterForSubAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UniversalTransferForMasterAccount
- **HTTP**: `POST /sapi/v1/sub-account/universalTransfer` (Default (api))
- **Notes**: You need to enable "internal transfer" option for the api key which requests this endpoint. Transfer from master account by default if fromEmail is not sent. Transfer to master account by default if toEmail is not sent. Supported transfer scenarios: Master account SPOT transfer to sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN Sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN transfer to master account SPOT Transfer between two sub-account SPOT accounts Weight(IP): 1
- **Signature**: `UniversalTransferForMasterAccount(FromAccountType fromAccountType, ToAccountType toAccountType, string asset, double amount, long timestamp, string signature, string? fromEmail, string? toEmail, string? clientTranId, string? symbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`fromEmail` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fromAccountType` ← `fromAccountType`, `toAccountType` ← `toAccountType`, `asset` ← `asset`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `fromEmail` ← `fromEmail`, `toEmail` ← `toEmail`, `clientTranId` ← `clientTranId`, `symbol` ← `symbol`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1SubAccountUniversalTransferResponse1`
- **Error**: `SdkException<UniversalTransferForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UniversalTransferHistoryForMasterAccount
- **HTTP**: `GET /sapi/v1/sub-account/universalTransfer` (Default (api))
- **Notes**: `fromEmail` and `toEmail` cannot be sent at the same time. Return `fromEmail` equal master account email by default. The query time period must be less then 30 days. If startTime and endTime not sent, return records of the last 30 days by default. Weight(IP): 1
- **Signature**: `UniversalTransferHistoryForMasterAccount(long timestamp, string signature, string? fromEmail, string? toEmail, string? clientTranId, long? startTime, long? endTime, int? page, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`fromEmail` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `fromEmail` ← `fromEmail`, `toEmail` ← `toEmail`, `clientTranId` ← `clientTranId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `page` ← `page`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1SubAccountUniversalTransferResponse>`
- **Error**: `SdkException<UniversalTransferHistoryForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateIpRestrictionForSubAccountApiKeyForMasterAccount
- **HTTP**: `POST /sapi/v2/sub-account/subAccountApi/ipRestriction` (Default (api))
- **Notes**: Update IP Restriction for Sub-Account API key Weight(UID): 3000
- **Signature**: `UpdateIpRestrictionForSubAccountApiKeyForMasterAccount(string email, string subAccountApiKey, string status, long timestamp, string signature, string? thirdPartyName, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `thirdPartyName` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `subAccountApiKey` ← `subAccountApiKey`, `status` ← `status`, `timestamp` ← `timestamp`, `signature` ← `signature`, `thirdPartyName` ← `thirdPartyName`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2SubAccountSubAccountApiIpRestrictionResponse`
- **Error**: `SdkException<UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccount
- **HTTP**: `POST /sapi/v1/managed-subaccount/withdraw` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccount(string fromEmail, string asset, double amount, long timestamp, string signature, long? transferDate, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `transferDate` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fromEmail` ← `fromEmail`, `asset` ← `asset`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `transferDate` ← `transferDate`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ManagedSubaccountWithdrawResponse`
- **Error**: `SdkException<WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
