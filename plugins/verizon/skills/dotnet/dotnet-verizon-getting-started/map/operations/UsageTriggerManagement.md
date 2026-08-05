# UsageTriggerManagement — operations

Accessor: `client.UsageTriggerManagement` · Source: `Api/UsageTriggerManagement.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateNewTrigger
- **HTTP**: `POST /usage/triggers` (SubscriptionServer (thingspace))
- **Notes**: Create a new usage trigger, which will send an alert when the number of device location service transactions reaches a specified percentage of the monthly subscription amount.
- **Signature**: `CreateNewTrigger(UsageTriggerAddRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UsageTriggerResponse`
- **Error**: `SdkException<CreateNewTriggerError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTrigger
- **HTTP**: `DELETE /usage/accounts/{accountName}/triggers/{triggerId}` (SubscriptionServer (thingspace))
- **Notes**: eletes the specified usage trigger from the given account
- **Signature**: `DeleteTrigger(string accountName, string triggerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceLocationSuccessResult`
- **Error**: `SdkException<DeleteTriggerError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTrigger
- **HTTP**: `POST /usage/triggers/{triggerId}` (SubscriptionServer (thingspace))
- **Notes**: Update an existing usage trigger
- **Signature**: `UpdateTrigger(string triggerId, UsageTriggerUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UsageTriggerResponse`
- **Error**: `SdkException<UpdateTriggerError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
