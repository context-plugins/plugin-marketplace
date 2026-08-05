# Billing — operations

Accessor: `client.Billing` · Source: `Api/Billing.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddAccount
- **HTTP**: `POST /managedaccounts/actions/add` (SubscriptionServer (thingspace))
- **Notes**: This endpoint allows user to add managed accounts to a primary account.
- **Signature**: `AddAccount(ManagedAccountsAddRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagedAccountsAddResponse`
- **Error**: `SdkException<AddAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelManagedAccountAction
- **HTTP**: `POST /managedaccounts/actions/cancel` (SubscriptionServer (thingspace))
- **Notes**: Deactivates a managed billing service relationship between a managed account and the primary account.
- **Signature**: `CancelManagedAccountAction(ManagedAccountCancelRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagedAccountCancelResponse`
- **Error**: `SdkException<CancelManagedAccountActionError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListManagedAccount
- **HTTP**: `GET /managedaccounts/{accountName}/service/{serviceName}` (SubscriptionServer (thingspace))
- **Notes**: This endpoint allows user to retrieve the list of all accounts managed by a primary account.
- **Signature**: `ListManagedAccount(string accountName, string serviceName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagedAccountsGetAllResponse`
- **Error**: `SdkException<ListManagedAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ManagedAccountAction
- **HTTP**: `POST /managedaccounts/actions/provision` (SubscriptionServer (thingspace))
- **Notes**: Activates a managed billing service relationship between a managed account and the primary account.
- **Signature**: `ManagedAccountAction(ManagedAccountsProvisionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagedAccountsProvisionResponse`
- **Error**: `SdkException<ManagedAccountActionError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
