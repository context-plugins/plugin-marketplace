# PayoutSettingsMerchantLevel — operations

Accessor: `client.PayoutSettingsMerchantLevel` · Source: `Api/PayoutSettingsMerchantLevel.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId
- **HTTP**: `DELETE /merchants/{merchantId}/payoutSettings/{payoutSettingsId}` (Default9 (management-test))
- **Notes**: Deletes the payout setting identified in the path. Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access. To make this request, your API credential must have the following roles : Management API—Payout account settings read and write
- **Signature**: `DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId(string merchantId, string payoutSettingsId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdPayoutSettings
- **HTTP**: `GET /merchants/{merchantId}/payoutSettings` (Default9 (management-test))
- **Notes**: Returns the list of payout settings for the merchant account identified in the path. Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access. To make this request, your API credential must have the following roles : * Management API—Payout account settings read
- **Signature**: `GetMerchantsMerchantIdPayoutSettings(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayoutSettingsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdPayoutSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdPayoutSettingsPayoutSettingsId
- **HTTP**: `GET /merchants/{merchantId}/payoutSettings/{payoutSettingsId}` (Default9 (management-test))
- **Notes**: Returns the payout setting identified in the path. Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access. To make this request, your API credential must have the following roles : * Management API—Payout account settings read
- **Signature**: `GetMerchantsMerchantIdPayoutSettingsPayoutSettingsId(string merchantId, string payoutSettingsId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayoutSettings`
- **Error**: `SdkException<GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsId
- **HTTP**: `PATCH /merchants/{merchantId}/payoutSettings/{payoutSettingsId}` (Default9 (management-test))
- **Notes**: Updates the payout setting identified in the path. You can enable or disable the payout setting. Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access. To make this request, your API credential must have the following roles : Management API—Payout account settings read and write
- **Signature**: `PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsId(string merchantId, string payoutSettingsId, UpdatePayoutSettingsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayoutSettings`
- **Error**: `SdkException<PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdPayoutSettings
- **HTTP**: `POST /merchants/{merchantId}/payoutSettings` (Default9 (management-test))
- **Notes**: Sends a request to add a payout setting for the merchant account specified in the path. A payout setting links the merchant account to the transfer instrument that contains the details of the payout bank account. Adyen verifies the bank account before allowing and enabling the payout setting. If you're accepting payments in multiple currencies, you may add multiple payout settings for the merchant account. Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access. To make this request, your API credential must have the following roles : Management API—Payout account settings read and write
- **Signature**: `PostMerchantsMerchantIdPayoutSettings(string merchantId, PayoutSettingsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayoutSettings`
- **Error**: `SdkException<PostMerchantsMerchantIdPayoutSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
