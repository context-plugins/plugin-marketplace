# Staking — operations

Accessor: `client.Staking` · Source: `Api/Staking.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EthStakingAccountV2UserData
- **HTTP**: `GET /sapi/v2/eth-staking/account` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `EthStakingAccountV2UserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2EthStakingAccountResponse`
- **Error**: `SdkException<EthStakingAccountV2UserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBethRewardsDistributionHistoryUserData
- **HTTP**: `GET /sapi/v1/eth-staking/eth/history/rewardsHistory` (Default (api))
- **Notes**: The time between startTime and endTime cannot be longer than 3 months. If startTime and endTime are both not sent, then the last 30 days' data will be returned. If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned. If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned. Weight(IP): 150
- **Signature**: `GetBethRewardsDistributionHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingEthHistoryRewardsHistoryResponse`
- **Error**: `SdkException<GetBethRewardsDistributionHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEthRedemptionHistoryUserData
- **HTTP**: `GET /sapi/v1/eth-staking/eth/history/redemptionHistory` (Default (api))
- **Notes**: The time between startTime and endTime cannot be longer than 3 months. If startTime and endTime are both not sent, then the last 30 days' data will be returned. If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned. If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned. Weight(IP): 150
- **Signature**: `GetEthRedemptionHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingEthHistoryRedemptionHistoryResponse`
- **Error**: `SdkException<GetEthRedemptionHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEthStakingHistoryUserData
- **HTTP**: `GET /sapi/v1/eth-staking/eth/history/stakingHistory` (Default (api))
- **Notes**: The time between startTime and endTime cannot be longer than 3 months. If startTime and endTime are both not sent, then the last 30 days' data will be returned. If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned. If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned. Weight(IP): 150
- **Signature**: `GetEthStakingHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingEthHistoryStakingHistoryResponse`
- **Error**: `SdkException<GetEthStakingHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWbethRateHistoryUserData
- **HTTP**: `GET /sapi/v1/eth-staking/eth/history/rateHistory` (Default (api))
- **Notes**: The time between startTime and endTime cannot be longer than 3 months. If startTime and endTime are both not sent, then the last 30 days' data will be returned. If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned. If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned. Weight(IP): 150
- **Signature**: `GetWbethRateHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingEthHistoryRateHistoryResponse`
- **Error**: `SdkException<GetWbethRateHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWbethRewardsHistoryUserData
- **HTTP**: `GET /sapi/v1/eth-staking/eth/history/wbethRewardsHistory` (Default (api))
- **Notes**: The time between startTime and endTime cannot be longer than 3 months. If startTime and endTime are both not sent, then the last 30 days' data will be returned. If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned. If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned. Weight(IP): 150
- **Signature**: `GetWbethRewardsHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse`
- **Error**: `SdkException<GetWbethRewardsHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWbethUnwrapHistoryUserData
- **HTTP**: `GET /sapi/v1/eth-staking/wbeth/history/unwrapHistory` (Default (api))
- **Notes**: The time between startTime and endTime cannot be longer than 3 months. If startTime and endTime are both not sent, then the last 30 days' data will be returned. If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned. If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned. Weight(IP): 150
- **Signature**: `GetWbethUnwrapHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingWbethHistoryUnwrapHistoryResponse`
- **Error**: `SdkException<GetWbethUnwrapHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWbethWrapHistoryUserData
- **HTTP**: `GET /sapi/v1/eth-staking/wbeth/history/wrapHistory` (Default (api))
- **Notes**: The time between startTime and endTime cannot be longer than 3 months. If startTime and endTime are both not sent, then the last 30 days' data will be returned. If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned. If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned. Weight(IP): 150
- **Signature**: `GetWbethWrapHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingWbethHistoryWrapHistoryResponse`
- **Error**: `SdkException<GetWbethWrapHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCurrentEthStakingQuotaUserData
- **HTTP**: `GET /sapi/v1/eth-staking/eth/quota` (Default (api))
- **Notes**: Weight(IP): 150
- **Signature**: `GetCurrentEthStakingQuotaUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingEthQuotaResponse`
- **Error**: `SdkException<GetCurrentEthStakingQuotaUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RedeemEthTrade
- **HTTP**: `POST /sapi/v1/eth-staking/eth/redeem` (Default (api))
- **Notes**: Redeem WBETH or BETH and get ETH You need to open Enable Spot &amp; Margin Trading permission for the API Key which requests this endpoint. Weight(IP): 150
- **Signature**: `RedeemEthTrade(double amount, long timestamp, string signature, string? asset, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `asset` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingEthRedeemResponse`
- **Error**: `SdkException<RedeemEthTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubscribeEthStakingV2Trade
- **HTTP**: `POST /sapi/v2/eth-staking/eth/stake` (Default (api))
- **Notes**: Stake ETH to get WBETH You need to open Enable Spot &amp; Margin Trading permission for the API Key which requests this endpoint. Weight(IP): 150
- **Signature**: `SubscribeEthStakingV2Trade(double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2EthStakingEthStakeResponse`
- **Error**: `SdkException<SubscribeEthStakingV2TradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WrapBethTrade
- **HTTP**: `POST /sapi/v1/eth-staking/wbeth/wrap` (Default (api))
- **Notes**: You need to open Enable Spot &amp; Margin Trading permission for the API Key which requests this endpoint. Weight(IP): 150
- **Signature**: `WrapBethTrade(double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1EthStakingWbethWrapResponse`
- **Error**: `SdkException<WrapBethTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
