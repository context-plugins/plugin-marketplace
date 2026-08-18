<!-- Generated file — do not edit; regenerated with the SDK. -->

# SplitConfigurationMerchantLevel — operations

Accessor: `client.SplitConfigurationMerchantLevel` · Source: `Api/SplitConfigurationMerchantLevel.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId
- **Server group**: `Default9`
- **Signature**: `DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(string merchantId, string splitConfigurationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SplitConfiguration` | `Models/SplitConfiguration.cs` |
| `DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError` | `Errors/DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId
- **Server group**: `Default9`
- **Signature**: `DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(string merchantId, string splitConfigurationId, string ruleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SplitConfiguration` | `Models/SplitConfiguration.cs` |
| `DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError` | `Errors/DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdSplitConfigurations
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdSplitConfigurations(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SplitConfigurationList`
- **Error**: `SdkException<GetMerchantsMerchantIdSplitConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SplitConfigurationList` | `Models/SplitConfigurationList.cs` |
| `GetMerchantsMerchantIdSplitConfigurationsError` | `Errors/GetMerchantsMerchantIdSplitConfigurationsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(string merchantId, string splitConfigurationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SplitConfiguration` | `Models/SplitConfiguration.cs` |
| `GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError` | `Errors/GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(string merchantId, string splitConfigurationId, UpdateSplitConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSplitConfigurationRequest` | `Models/UpdateSplitConfigurationRequest.cs` |
| `SplitConfiguration` | `Models/SplitConfiguration.cs` |
| `PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError` | `Errors/PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(string merchantId, string splitConfigurationId, string ruleId, UpdateSplitConfigurationRuleRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSplitConfigurationRuleRequest` | `Models/UpdateSplitConfigurationRuleRequest.cs` |
| `SplitConfiguration` | `Models/SplitConfiguration.cs` |
| `PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError` | `Errors/PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsSplitConfigurationsRulesSplitLogic
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsSplitConfigurationsRulesSplitLogic(string merchantId, string splitConfigurationId, string ruleId, string splitLogicId, UpdateSplitConfigurationLogicRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PatchMerchantsSplitConfigurationsRulesSplitLogicError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSplitConfigurationLogicRequest` | `Models/UpdateSplitConfigurationLogicRequest.cs` |
| `SplitConfiguration` | `Models/SplitConfiguration.cs` |
| `PatchMerchantsSplitConfigurationsRulesSplitLogicError` | `Errors/PatchMerchantsSplitConfigurationsRulesSplitLogicError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdSplitConfigurations
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdSplitConfigurations(string merchantId, SplitConfiguration? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PostMerchantsMerchantIdSplitConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SplitConfiguration` | `Models/SplitConfiguration.cs` |
| `PostMerchantsMerchantIdSplitConfigurationsError` | `Errors/PostMerchantsMerchantIdSplitConfigurationsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationId
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(string merchantId, string splitConfigurationId, SplitConfigurationRule? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SplitConfiguration`
- **Error**: `SdkException<PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SplitConfigurationRule` | `Models/SplitConfigurationRule.cs` |
| `SplitConfiguration` | `Models/SplitConfiguration.cs` |
| `PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError` | `Errors/PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

