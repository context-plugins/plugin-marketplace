# SubscriptionRenewals — operations

Accessor: `client.SubscriptionRenewals` · Source: `Api/SubscriptionRenewals.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelScheduledRenewalConfiguration
- **HTTP**: `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/cancel.json` (Production)
- **Notes**: Cancels a scheduled renewal configuration.
- **Signature**: `CancelScheduledRenewalConfiguration(int subscriptionId, int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScheduledRenewalConfigurationResponse`
- **Error**: `SdkException<CancelScheduledRenewalConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateScheduledRenewalConfiguration
- **HTTP**: `POST /subscriptions/{subscription_id}/scheduled_renewals.json` (Production)
- **Notes**: Creates a scheduled renewal configuration for a subscription. The scheduled renewal is based on the subscription’s current product and component setup.
- **Signature**: `CreateScheduledRenewalConfiguration(int subscriptionId, ScheduledRenewalConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ScheduledRenewalConfigurationResponse`
- **Error**: `SdkException<CreateScheduledRenewalConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateScheduledRenewalConfigurationItem
- **HTTP**: `POST /subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json` (Production)
- **Notes**: Adds product and component line items to the scheduled renewal. If your site has list vs sales pricing enabled, accepts renewal_configuration_item.custom_price.list_price_point_id, validates and persists it; omitted value follows existing/default behavior; with list vs sales pricing disabled, parameter is ignored (no validation/behavioral impact). This functionality is supported in the API, but is not currently supported in SDKs.
- **Signature**: `CreateScheduledRenewalConfigurationItem(int subscriptionId, int scheduledRenewalsConfigurationId, ScheduledRenewalConfigurationItemRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ScheduledRenewalConfigurationItemResponse`
- **Error**: `SdkException<CreateScheduledRenewalConfigurationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteScheduledRenewalConfigurationItem
- **HTTP**: `DELETE /subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json` (Production)
- **Notes**: Removes an item from the pending renewal configuration.
- **Signature**: `DeleteScheduledRenewalConfigurationItem(int subscriptionId, int scheduledRenewalsConfigurationId, int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteScheduledRenewalConfigurationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListScheduledRenewalConfigurations
- **HTTP**: `GET /subscriptions/{subscription_id}/scheduled_renewals.json` (Production)
- **Notes**: Lists scheduled renewal configurations for the subscription and permits an optional status query filter.
- **Signature**: `ListScheduledRenewalConfigurations(int subscriptionId, Status? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`
- **Returns**: `ScheduledRenewalConfigurationsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LockInScheduledRenewalImmediately
- **HTTP**: `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/immediate_lock_in.json` (Production)
- **Notes**: Locks in the renewal immediately.
- **Signature**: `LockInScheduledRenewalImmediately(int subscriptionId, int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScheduledRenewalConfigurationResponse`
- **Error**: `SdkException<LockInScheduledRenewalImmediatelyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadScheduledRenewalConfiguration
- **HTTP**: `GET /subscriptions/{subscription_id}/scheduled_renewals/{id}.json` (Production)
- **Notes**: Retrieves the configuration settings for the scheduled renewal.
- **Signature**: `ReadScheduledRenewalConfiguration(int subscriptionId, int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScheduledRenewalConfigurationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScheduleScheduledRenewalLockIn
- **HTTP**: `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/schedule_lock_in.json` (Production)
- **Notes**: Schedules a future lock-in date for the renewal.
- **Signature**: `ScheduleScheduledRenewalLockIn(int subscriptionId, int id, ScheduledRenewalLockInRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ScheduledRenewalConfigurationResponse`
- **Error**: `SdkException<ScheduleScheduledRenewalLockInError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnpublishScheduledRenewalConfiguration
- **HTTP**: `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/unpublish.json` (Production)
- **Notes**: Restores a scheduled renewal configuration to an editable state.
- **Signature**: `UnpublishScheduledRenewalConfiguration(int subscriptionId, int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScheduledRenewalConfigurationResponse`
- **Error**: `SdkException<UnpublishScheduledRenewalConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateScheduledRenewalConfiguration
- **HTTP**: `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}.json` (Production)
- **Notes**: Updates an existing configuration.
- **Signature**: `UpdateScheduledRenewalConfiguration(int subscriptionId, int id, ScheduledRenewalConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ScheduledRenewalConfigurationResponse`
- **Error**: `SdkException<UpdateScheduledRenewalConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateScheduledRenewalConfigurationItem
- **HTTP**: `PUT /subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json` (Production)
- **Notes**: Updates an existing configuration item’s pricing and quantity. If you site has list vs sales pricing enabled, accepts renewal_configuration_item.custom_price.list_price_point_id, validates and persists it; omitted value follows existing/default behavior; with list vs sales pricing disabled, parameter is ignored (no validation/behavioral impact). This functionality is supported in the API, but is not currently supported in SDKs.
- **Signature**: `UpdateScheduledRenewalConfigurationItem(int subscriptionId, int scheduledRenewalsConfigurationId, int id, ScheduledRenewalUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ScheduledRenewalConfigurationItemResponse`
- **Error**: `SdkException<UpdateScheduledRenewalConfigurationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
