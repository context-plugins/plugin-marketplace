<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleServiceAccounts — operations

Accessor: `client.GoogleServiceAccounts` · Source: `src/GoogleCloudStorageTransferService/Api/GoogleServiceAccounts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### StoragetransferGoogleServiceAccountsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferGoogleServiceAccountsGet(StoragetransferGoogleServiceAccountsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Returns**: `GoogleServiceAccount`
- **Error**: `ApiException<StoragetransferGoogleServiceAccountsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferGoogleServiceAccountsGetRequest` | `src/GoogleCloudStorageTransferService/Requests/GoogleServiceAccounts/StoragetransferGoogleServiceAccountsGetRequest.cs` |
| `GoogleServiceAccount` | `src/GoogleCloudStorageTransferService/Models/GoogleServiceAccount.cs` |
| `StoragetransferGoogleServiceAccountsGetError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferGoogleServiceAccountsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

