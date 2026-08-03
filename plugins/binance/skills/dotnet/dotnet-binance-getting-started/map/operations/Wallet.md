# Wallet — operations

Accessor: `client.Wallet` · Source: `Api/Wallet.cs` · 34 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AccountApiTradingStatusUserData
- **HTTP**: `GET /sapi/v1/account/apiTradingStatus` (Default (api))
- **Notes**: Fetch account API trading status with details. Weight(IP): 1
- **Signature**: `AccountApiTradingStatusUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AccountApiTradingStatusResponse`
- **Error**: `SdkException<AccountApiTradingStatusUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AccountStatusUserData
- **HTTP**: `GET /sapi/v1/account/status` (Default (api))
- **Notes**: Fetch account status detail. Weight(IP): 1
- **Signature**: `AccountStatusUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AccountStatusResponse`
- **Error**: `SdkException<AccountStatusUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AccountInfoUserData
- **HTTP**: `GET /sapi/v1/account/info` (Default (api))
- **Notes**: Fetch account info detail. Weight(IP): 1
- **Signature**: `AccountInfoUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AccountInfoResponse`
- **Error**: `SdkException<AccountInfoUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AllCoinsInformationUserData
- **HTTP**: `GET /sapi/v1/capital/config/getall` (Default (api))
- **Notes**: Get information of coins (available for deposit and withdraw) for user. Weight(IP): 10
- **Signature**: `AllCoinsInformationUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1CapitalConfigGetallResponse>`
- **Error**: `SdkException<AllCoinsInformationUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AssetDetailUserData
- **HTTP**: `GET /sapi/v1/asset/assetDetail` (Default (api))
- **Notes**: Fetch details of assets supported on Binance. Please get network and other deposit or withdraw details from `GET /sapi/v1/capital/config/getall`. Weight(IP): 1
- **Signature**: `AssetDetailUserData(long timestamp, string signature, string? asset, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `asset` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetAssetDetailResponse`
- **Error**: `SdkException<AssetDetailUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AssetDividendRecordUserData
- **HTTP**: `GET /sapi/v1/asset/assetDividend` (Default (api))
- **Notes**: Query asset Dividend Record Weight(IP): 10
- **Signature**: `AssetDividendRecordUserData(long timestamp, string signature, string? asset, long? startTime, long? endTime, long? recvWindow, int? limit = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetAssetDividendResponse`
- **Error**: `SdkException<AssetDividendRecordUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ConvertTransferUserData
- **HTTP**: `POST /sapi/v1/asset/convert-transfer` (Default (api))
- **Notes**: Convert transfer, convert between BUSD and stablecoins. If the clientId has been used before, will not do the convert transfer, the original transfer will be returned. Weight(UID): 5
- **Signature**: `ConvertTransferUserData(string clientTranId, string asset, double amount, string targetAsset, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `clientTranId` ← `clientTranId`, `asset` ← `asset`, `amount` ← `amount`, `targetAsset` ← `targetAsset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetConvertTransferResponse`
- **Error**: `SdkException<ConvertTransferUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DailyAccountSnapshotUserData
- **HTTP**: `GET /sapi/v1/accountSnapshot` (Default (api))
- **Notes**: The query time period must be less than 30 days Support query within the last one month only If startTimeand endTime not sent, return records of the last 7 days by default Weight(IP): 2400
- **Signature**: `DailyAccountSnapshotUserData(Type6 type, long timestamp, string signature, long? startTime, long? endTime, long? recvWindow, int? limit = 7, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startTime` — nullable, no default → **must pass explicitly**
  - `endTime` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 7, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AccountSnapshotResponse`
- **Error**: `SdkException<DailyAccountSnapshotUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DepositAddressSupportingNetworkUserData
- **HTTP**: `GET /sapi/v1/capital/deposit/address` (Default (api))
- **Notes**: Fetch deposit address with network. If network is not send, return with default network of the coin. You can get network and isDefault in networkList in the response of Get /sapi/v1/capital/config/getall (HMAC SHA256). Weight(IP): 10
- **Signature**: `DepositAddressSupportingNetworkUserData(string coin, long timestamp, string signature, string? network, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `network` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `coin` ← `coin`, `timestamp` ← `timestamp`, `signature` ← `signature`, `network` ← `network`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1CapitalDepositAddressResponse`
- **Error**: `SdkException<DepositAddressSupportingNetworkUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DepositHistorySupportingNetworkUserData
- **HTTP**: `GET /sapi/v1/capital/deposit/hisrec` (Default (api))
- **Notes**: Fetch deposit history. Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days. If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days. Weight(IP): 1
- **Signature**: `DepositHistorySupportingNetworkUserData(long timestamp, string signature, string? coin, int? status, long? startTime, long? endTime, int? offset, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`coin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `coin` ← `coin`, `status` ← `status`, `startTime` ← `startTime`, `endTime` ← `endTime`, `offset` ← `offset`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1CapitalDepositHisrecResponse>`
- **Error**: `SdkException<DepositHistorySupportingNetworkUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DisableFastWithdrawSwitchUserData
- **HTTP**: `POST /sapi/v1/account/disableFastWithdrawSwitch` (Default (api))
- **Notes**: This request will disable fastwithdraw switch under your account. You need to enable "trade" option for the api key which requests this endpoint. Weight(IP): 1
- **Signature**: `DisableFastWithdrawSwitchUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `object`
- **Error**: `SdkException<DisableFastWithdrawSwitchUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DustTransferUserData
- **HTTP**: `POST /sapi/v1/asset/dust` (Default (api))
- **Notes**: Convert dust assets to BNB. Weight(UID): 10
- **Signature**: `DustTransferUserData(IReadOnlyList<string> asset, long timestamp, string signature, AccountType? accountType, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `accountType` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `accountType` ← `accountType`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetDustResponse`
- **Error**: `SdkException<DustTransferUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DustLogUserData
- **HTTP**: `GET /sapi/v1/asset/dribblet` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `DustLogUserData(long timestamp, string signature, AccountType? accountType, long? startTime, long? endTime, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`accountType` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `accountType` ← `accountType`, `startTime` ← `startTime`, `endTime` ← `endTime`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetDribbletResponse`
- **Error**: `SdkException<DustLogUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableFastWithdrawSwitchUserData
- **HTTP**: `POST /sapi/v1/account/enableFastWithdrawSwitch` (Default (api))
- **Notes**: This request will enable fastwithdraw switch under your account. You need to enable "trade" option for the api key which requests this endpoint. When Fast Withdraw Switch is on, transferring funds to a Binance account will be done instantly. There is no on-chain transaction, no transaction ID and no withdrawal fee. Weight(IP): 1
- **Signature**: `EnableFastWithdrawSwitchUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `object`
- **Error**: `SdkException<EnableFastWithdrawSwitchUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchDepositAddressListWithNetworkUserData
- **HTTP**: `GET /sapi/v1/capital/deposit/address/list` (Default (api))
- **Notes**: Fetch deposit address list with network. Weight(IP): 10
- **Signature**: `FetchDepositAddressListWithNetworkUserData(string coin, long timestamp, string signature, string? network, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `network` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `coin` ← `coin`, `timestamp` ← `timestamp`, `signature` ← `signature`, `network` ← `network`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1CapitalDepositAddressListResponse>`
- **Error**: `SdkException<FetchDepositAddressListWithNetworkUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchWithdrawAddressListUserData
- **HTTP**: `GET /sapi/v1/capital/withdraw/address/list` (Default (api))
- **Notes**: Fetch withdraw address list Weight(IP): 10
- **Signature**: `FetchWithdrawAddressListUserData(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SapiV1CapitalWithdrawAddressListResponse>`
- **Error**: `SdkException<FetchWithdrawAddressListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FundingWalletUserData
- **HTTP**: `POST /sapi/v1/asset/get-funding-asset` (Default (api))
- **Notes**: Currently supports querying the following business assets：Binance Pay, Binance Card, Binance Gift Card, Stock Token Weight(IP): 1
- **Signature**: `FundingWalletUserData(long timestamp, string signature, string? asset, NeedBtcValuation? needBtcValuation, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `asset` — nullable, no default → **must pass explicitly**
  - `needBtcValuation` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `needBtcValuation` ← `needBtcValuation`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1AssetGetFundingAssetResponse>`
- **Error**: `SdkException<FundingWalletUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetApiKeyPermissionUserData
- **HTTP**: `GET /sapi/v1/account/apiRestrictions` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `GetApiKeyPermissionUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AccountApiRestrictionsResponse`
- **Error**: `SdkException<GetApiKeyPermissionUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAssetsThatCanBeConvertedIntoBnbUserData
- **HTTP**: `POST /sapi/v1/asset/dust-btc` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `GetAssetsThatCanBeConvertedIntoBnbUserData(long timestamp, string signature, AccountType? accountType, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `accountType` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `accountType` ← `accountType`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetDustBtcResponse`
- **Error**: `SdkException<GetAssetsThatCanBeConvertedIntoBnbUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCloudMiningPaymentAndRefundHistoryUserData
- **HTTP**: `GET /sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage` (Default (api))
- **Notes**: The query of Cloud-Mining payment and refund history Weight(UID): 600
- **Signature**: `GetCloudMiningPaymentAndRefundHistoryUserData(long startTime, long endTime, long timestamp, string signature, long? tranId, string? clientTranId, string? asset, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`tranId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startTime` ← `startTime`, `endTime` ← `endTime`, `timestamp` ← `timestamp`, `signature` ← `signature`, `tranId` ← `tranId`, `clientTranId` ← `clientTranId`, `asset` ← `asset`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse`
- **Error**: `SdkException<GetCloudMiningPaymentAndRefundHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSymbolsDelistScheduleForSpotMarketData
- **HTTP**: `GET /sapi/v1/spot/delist-schedule` (Default (api))
- **Notes**: Get symbols delist schedule for spot Weight(IP): 100
- **Signature**: `GetSymbolsDelistScheduleForSpotMarketData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1SpotDelistScheduleResponse>`
- **Error**: `SdkException<GetSymbolsDelistScheduleForSpotMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OneClickArrivalDepositApplyUserData
- **HTTP**: `POST /sapi/v1/capital/deposit/credit-apply` (Default (api))
- **Notes**: Apply deposit credit for expired address (One click arrival) Weight(IP): 1
- **Signature**: `OneClickArrivalDepositApplyUserData(long timestamp, string signature, long? depositId, string? txId, long? subAccountId, long? subUserId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`depositId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `depositId` ← `depositId`, `txId` ← `txId`, `subAccountId` ← `subAccountId`, `subUserId` ← `subUserId`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1CapitalDepositCreditApplyResponse`
- **Error**: `SdkException<OneClickArrivalDepositApplyUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryConvertTransferUserData
- **HTTP**: `GET /sapi/v1/asset/convert-transfer/queryByPage` (Default (api))
- **Notes**: Weight(UID): 5
- **Signature**: `QueryConvertTransferUserData(long startTime, long endTime, long timestamp, string signature, long? tranId, string? asset, AccountType3? accountType, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`tranId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startTime` ← `startTime`, `endTime` ← `endTime`, `timestamp` ← `timestamp`, `signature` ← `signature`, `tranId` ← `tranId`, `asset` ← `asset`, `accountType` ← `accountType`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetConvertTransferQueryByPageResponse`
- **Error**: `SdkException<QueryConvertTransferUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryUserDelegationHistoryForMasterAccountUserData
- **HTTP**: `GET /sapi/v1/asset/custody/transfer-history` (Default (api))
- **Notes**: Query User Delegation History Weight(IP): 60
- **Signature**: `QueryUserDelegationHistoryForMasterAccountUserData(string email, long startTime, long endTime, string asset, long timestamp, string signature, string? type, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`type` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `startTime` ← `startTime`, `endTime` ← `endTime`, `asset` ← `asset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `type` ← `type`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetCustodyTransferHistoryResponse`
- **Error**: `SdkException<QueryUserDelegationHistoryForMasterAccountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryUserUniversalTransferHistoryUserData
- **HTTP**: `GET /sapi/v1/asset/transfer` (Default (api))
- **Notes**: `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN Support query within the last 6 months only If `startTime` and `endTime` not sent, return records of the last 7 days by default Weight(IP): 1
- **Signature**: `QueryUserUniversalTransferHistoryUserData(Type7 type, long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, string? fromSymbol, string? toSymbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `fromSymbol` ← `fromSymbol`, `toSymbol` ← `toSymbol`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetTransferResponse`
- **Error**: `SdkException<QueryUserUniversalTransferHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryUserWalletBalanceUserData
- **HTTP**: `GET /sapi/v1/asset/wallet/balance` (Default (api))
- **Notes**: Query User Wallet Balance Weight(IP): 60
- **Signature**: `QueryUserWalletBalanceUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1AssetWalletBalanceResponse>`
- **Error**: `SdkException<QueryUserWalletBalanceUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryAutoConvertingStableCoinsUserData
- **HTTP**: `GET /sapi/v1/capital/contract/convertible-coins` (Default (api))
- **Notes**: Get a user's auto-conversion settings in deposit/withdrawal Weight(UID): 600'
- **Signature**: `QueryAutoConvertingStableCoinsUserData(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SapiV1CapitalContractConvertibleCoinsResponse`
- **Error**: `SdkException<QueryAutoConvertingStableCoinsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SwitchOnOffBusdAndStableCoinsConversionUserDataUserData
- **HTTP**: `POST /sapi/v1/capital/contract/convertible-coins` (Default (api))
- **Notes**: User can use it to turn on or turn off the BUSD auto-conversion from/to a specific stable coin. Weight(UID): 600'
- **Signature**: `SwitchOnOffBusdAndStableCoinsConversionUserDataUserData(string coin, bool enable, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `coin` ← `coin`, `enable` ← `enable`
- **Returns**: `object`
- **Error**: `SdkException<SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SystemStatusSystem
- **HTTP**: `GET /sapi/v1/system/status` (Default (api))
- **Notes**: Fetch system status. Weight(IP): 1
- **Signature**: `SystemStatusSystem(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SapiV1SystemStatusResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TradeFeeUserData
- **HTTP**: `GET /sapi/v1/asset/tradeFee` (Default (api))
- **Notes**: Fetch trade fee Weight(IP): 1
- **Signature**: `TradeFeeUserData(long timestamp, string signature, string? symbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `symbol` ← `symbol`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1AssetTradeFeeResponse>`
- **Error**: `SdkException<TradeFeeUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserAssetUserData
- **HTTP**: `POST /sapi/v3/asset/getUserAsset` (Default (api))
- **Notes**: Get user assets, just for positive data. Weight(IP): 5
- **Signature**: `UserAssetUserData(long timestamp, string signature, string? asset, NeedBtcValuation? needBtcValuation, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `asset` — nullable, no default → **must pass explicitly**
  - `needBtcValuation` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `needBtcValuation` ← `needBtcValuation`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV3AssetGetUserAssetResponse>`
- **Error**: `SdkException<UserAssetUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserUniversalTransferUserData
- **HTTP**: `POST /sapi/v1/asset/transfer` (Default (api))
- **Notes**: You need to enable `Permits Universal Transfer` option for the api key which requests this endpoint. `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN ENUM of transfer types: - MAIN_UMFUTURE Spot account transfer to USDⓈ-M Futures account - MAIN_CMFUTURE Spot account transfer to COIN-M Futures account - MAIN_MARGIN Spot account transfer to Margin(cross)account - UMFUTURE_MAIN USDⓈ-M Futures account transfer to Spot account - UMFUTURE_MARGIN USDⓈ-M Futures account transfer to Margin(cross)account - CMFUTURE_MAIN COIN-M Futures account transfer to Spot account - CMFUTURE_MARGIN COIN-M Futures account transfer to Margin(cross) account - MARGIN_MAIN Margin(cross)account transfer to Spot account - MARGIN_UMFUTURE Margin(cross)account transfer to USDⓈ-M Futures - MARGIN_CMFUTURE Margin(cross)account transfer to COIN-M Futures - ISOLATEDMARGIN_MARGIN Isolated margin account transfer to Margin(cross) account - MARGIN_ISOLATEDMARGIN Margin(cross) account transfer to Isolated margin account - ISOLATEDMARGIN_ISOLATEDMARGIN Isolated margin account transfer to Isolated margin account - MAIN_FUNDING Spot account transfer to Funding account - FUNDING_MAIN Funding account transfer to Spot account - FUNDING_UMFUTURE Funding account transfer to UMFUTURE account - UMFUTURE_FUNDING UMFUTURE account transfer to Funding account - MARGIN_FUNDING MARGIN account transfer to Funding account - FUNDING_MARGIN Funding account transfer to Margin account - FUNDING_CMFUTURE Funding account transfer to CMFUTURE account - CMFUTURE_FUNDING CMFUTURE account transfer to Funding account - MAIN_OPTION Spot account transfer to Options account - OPTION_MAIN Options account transfer to Spot account - UMFUTURE_OPTION USDⓈ-M Futures account transfer to Options account - OPTION_UMFUTURE Options account transfer to USDⓈ-M Futures account - MARGIN_OPTION Margin(cross)account transfer to Options account - OPTION_MARGIN Options account transfer to Margin(cross)account - FUNDING_OPTION Funding account transfer to Options account - OPTION_FUNDING Options account transfer to Funding account - MAIN_PORTFOLIO_MARGIN Spot account transfer to Portfolio Margin account - PORTFOLIO_MARGIN_MAIN Portfolio Margin account transfer to Spot account - MAIN_ISOLATED_MARGIN Spot account transfer to Isolated margin account - ISOLATED_MARGIN_MAIN Isolated margin account transfer to Spot account Weight(IP): 1
- **Signature**: `UserUniversalTransferUserData(Type7 type, string asset, double amount, long timestamp, string signature, string? fromSymbol, string? toSymbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fromSymbol` — nullable, no default → **must pass explicitly**
  - `toSymbol` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `asset` ← `asset`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `fromSymbol` ← `fromSymbol`, `toSymbol` ← `toSymbol`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AssetTransferResponse1`
- **Error**: `SdkException<UserUniversalTransferUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WithdrawUserData
- **HTTP**: `POST /sapi/v1/capital/withdraw/apply` (Default (api))
- **Notes**: Submit a withdraw request. If `network` not send, return with default network of the coin. You can get `network` and `isDefault` in `networkList` of a coin in the response of `Get /sapi/v1/capital/config/getall (HMAC SHA256)`. Weight(IP): 1
- **Signature**: `WithdrawUserData(string coin, string address, double amount, long timestamp, string signature, string? withdrawOrderId, string? network, string? addressTag, string? name, int? walletType, long? recvWindow, bool? transactionFeeFlag = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`withdrawOrderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `transactionFeeFlag` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `coin` ← `coin`, `address` ← `address`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `withdrawOrderId` ← `withdrawOrderId`, `network` ← `network`, `addressTag` ← `addressTag`, `transactionFeeFlag` ← `transactionFeeFlag`, `name` ← `name`, `walletType` ← `walletType`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1CapitalWithdrawApplyResponse`
- **Error**: `SdkException<WithdrawUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WithdrawHistorySupportingNetworkUserData
- **HTTP**: `GET /sapi/v1/capital/withdraw/history` (Default (api))
- **Notes**: Fetch withdraw history. This endpoint specifically uses per second UID rate limit, user's total second level IP rate limit is 180000/second. Response from the endpoint contains header key X-SAPI-USED-UID-WEIGHT-1S, which defines weight used by the current IP. `network` may not be in the response for old withdraw. Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days. If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days If withdrawOrderId is sent, time between startTime and endTime must be less than 7 days. If withdrawOrderId is sent, startTime and endTime are not sent, will return last 7 days records by default. Weight(UID): 18000 Request Limit: 10 requests per second
- **Signature**: `WithdrawHistorySupportingNetworkUserData(long timestamp, string signature, string? coin, string? withdrawOrderId, int? status, long? startTime, long? endTime, int? offset, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`coin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `coin` ← `coin`, `withdrawOrderId` ← `withdrawOrderId`, `status` ← `status`, `startTime` ← `startTime`, `endTime` ← `endTime`, `offset` ← `offset`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1CapitalWithdrawHistoryResponse>`
- **Error**: `SdkException<WithdrawHistorySupportingNetworkUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
