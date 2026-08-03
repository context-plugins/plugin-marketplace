# SplitConfigurationMerchantLevel — operations

Accessor: `client.SplitConfigurationMerchantLevel` · Source: `Api/SplitConfigurationMerchantLevel.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId
- **HTTP**: `DELETE /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}` (Default (balanceplatform-api-test))
- **Notes**: Deletes the split configuration profile specified in the path. To make this request, your API credential must have the following role : * Management API - SplitConfiguration read and write
- **Signature**: `DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(string merchantId, string splitConfigurationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId
- **HTTP**: `DELETE /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}` (Default (balanceplatform-api-test))
- **Notes**: Deletes the rule specified in the path. To make this request, your API credential must have the following role : * Management API - SplitConfiguration read and write
- **Signature**: `DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(string merchantId, string splitConfigurationId, string ruleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdSplitConfigurations
- **HTTP**: `GET /merchants/{merchantId}/splitConfigurations` (Default (balanceplatform-api-test))
- **Notes**: Returns the list of split configuration profiles for the merchant account. To make this request, your API credential must have the following role : * Management API - SplitConfiguration read and write
- **Signature**: `GetMerchantsMerchantIdSplitConfigurations(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SplitConfigurationList`
- **Error**: `SdkException<GetMerchantsMerchantIdSplitConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationId
- **HTTP**: `GET /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of the split configuration profile specified in the path. To make this request, your API credential must have the following role : * Management API - SplitConfiguration read and write
- **Signature**: `GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(string merchantId, string splitConfigurationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId
- **HTTP**: `PATCH /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}` (Default (balanceplatform-api-test))
- **Notes**: Changes the description of the split configuration profile specified in the path. To make this request, your API credential must have the following role : * Management API - SplitConfiguration read and write
- **Signature**: `PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(string merchantId, string splitConfigurationId, UpdateSplitConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId
- **HTTP**: `PATCH /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}` (Default (balanceplatform-api-test))
- **Notes**: Changes the split conditions of the rule specified in the path. To make this request, your API credential must have the following role : * Management API - SplitConfiguration read and write
- **Signature**: `PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(string merchantId, string splitConfigurationId, string ruleId, UpdateSplitConfigurationRuleRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsSplitConfigurationsRulesSplitLogic
- **HTTP**: `PATCH /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}/splitLogic/{splitLogicId}` (Default (balanceplatform-api-test))
- **Notes**: Changes the split logic specified in the path. To make this request, your API credential must have the following role : * Management API - SplitConfiguration read and write
- **Signature**: `PatchMerchantsSplitConfigurationsRulesSplitLogic(string merchantId, string splitConfigurationId, string ruleId, string splitLogicId, SplitConfigurationLogic? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PatchMerchantsSplitConfigurationsRulesSplitLogicError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdSplitConfigurations
- **HTTP**: `POST /merchants/{merchantId}/splitConfigurations` (Default (balanceplatform-api-test))
- **Notes**: Creates a split configuration profile to split payments automatically . After you associate it with a store /stores/(storeId)request-splitConfiguration) in your merchant account, it splits the funds of all transactions processed through that store between your liable balance account and your user's balance account /stores/(storeId)request-splitConfiguration-balanceAccountId). To make this request, your API credential must have the following role : * Management API - SplitConfiguration read and write
- **Signature**: `PostMerchantsMerchantIdSplitConfigurations(string merchantId, SplitConfiguration? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PostMerchantsMerchantIdSplitConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationId
- **HTTP**: `POST /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}` (Default (balanceplatform-api-test))
- **Notes**: Creates a rule in the split configuration profile specified in the path. To make this request, your API credential must have the following role : * Management API - SplitConfiguration read and write
- **Signature**: `PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(string merchantId, string splitConfigurationId, SplitConfigurationRule? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
