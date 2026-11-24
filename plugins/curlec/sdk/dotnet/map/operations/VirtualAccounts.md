<!-- Generated file — do not edit; regenerated with the SDK. -->

# VirtualAccounts — operations

Accessor: `client.VirtualAccounts` · Source: `src/Curlec/Api/VirtualAccounts.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddAllowedPayer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `AddAllowedPayer(AddAllowedPayerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VaId`, `Body`
- **Returns**: `VirtualAccount`
- **Error**: `ApiException<AddAllowedPayerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddAllowedPayerRequest` | `src/Curlec/Requests/VirtualAccounts/AddAllowedPayerRequest.cs` |
| `VirtualAccountsAllowedPayersRequest` | `src/Curlec/Models/VirtualAccountsAllowedPayersRequest.cs` |
| `VirtualAccount` | `src/Curlec/Models/VirtualAccount.cs` |
| `AddAllowedPayerError` | `src/Curlec/Errors/AddAllowedPayerError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### AddVpaReceiver

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `AddVpaReceiver(AddVpaReceiverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `VirtualAccount`
- **Error**: `ApiException<AddVpaReceiverError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddVpaReceiverRequest` | `src/Curlec/Requests/VirtualAccounts/AddVpaReceiverRequest.cs` |
| `VirtualAccountsReceiversRequest` | `src/Curlec/Models/VirtualAccountsReceiversRequest.cs` |
| `VirtualAccount` | `src/Curlec/Models/VirtualAccount.cs` |
| `AddVpaReceiverError` | `src/Curlec/Errors/AddVpaReceiverError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CloseVirtualAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CloseVirtualAccount(CloseVirtualAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `VirtualAccount`
- **Error**: `ApiException<CloseVirtualAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloseVirtualAccountRequest` | `src/Curlec/Requests/VirtualAccounts/CloseVirtualAccountRequest.cs` |
| `VirtualAccountsCloseRequest` | `src/Curlec/Models/VirtualAccountsCloseRequest.cs` |
| `VirtualAccount` | `src/Curlec/Models/VirtualAccount.cs` |
| `CloseVirtualAccountError` | `src/Curlec/Errors/CloseVirtualAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreateVirtualAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateVirtualAccount(CreateVirtualAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `VirtualAccount`
- **Error**: `ApiException<CreateVirtualAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVirtualAccountRequest` | `src/Curlec/Requests/VirtualAccounts/CreateVirtualAccountRequest.cs` |
| `VirtualAccountsRequest` | `src/Curlec/Models/VirtualAccountsRequest.cs` |
| `VirtualAccount` | `src/Curlec/Models/VirtualAccount.cs` |
| `CreateVirtualAccountError` | `src/Curlec/Errors/CreateVirtualAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### DeleteAllowedPayer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `DeleteAllowedPayer(DeleteAllowedPayerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VaId`, `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteAllowedPayerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAllowedPayerRequest` | `src/Curlec/Requests/VirtualAccounts/DeleteAllowedPayerRequest.cs` |
| `DeleteAllowedPayerError` | `src/Curlec/Errors/DeleteAllowedPayerError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchBankTransfer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchBankTransfer(FetchBankTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BankTransfer`
- **Error**: `ApiException<FetchBankTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchBankTransferRequest` | `src/Curlec/Requests/VirtualAccounts/FetchBankTransferRequest.cs` |
| `BankTransfer` | `src/Curlec/Models/BankTransfer.cs` |
| `FetchBankTransferError` | `src/Curlec/Errors/FetchBankTransferError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchVirtualAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchVirtualAccount(FetchVirtualAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `VirtualAccount`
- **Error**: `ApiException<FetchVirtualAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchVirtualAccountRequest` | `src/Curlec/Requests/VirtualAccounts/FetchVirtualAccountRequest.cs` |
| `VirtualAccount` | `src/Curlec/Models/VirtualAccount.cs` |
| `FetchVirtualAccountError` | `src/Curlec/Errors/FetchVirtualAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchVirtualAccountPayments

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchVirtualAccountPayments(FetchVirtualAccountPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `VirtualAccountsPaymentsResponse`
- **Error**: `ApiException<FetchVirtualAccountPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchVirtualAccountPaymentsRequest` | `src/Curlec/Requests/VirtualAccounts/FetchVirtualAccountPaymentsRequest.cs` |
| `VirtualAccountsPaymentsResponse` | `src/Curlec/Models/VirtualAccountsPaymentsResponse.cs` |
| `FetchVirtualAccountPaymentsError` | `src/Curlec/Errors/FetchVirtualAccountPaymentsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListVirtualAccounts

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListVirtualAccounts(ListVirtualAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `VirtualAccountsResponse`
- **Error**: `ApiException<ListVirtualAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVirtualAccountsRequest` | `src/Curlec/Requests/VirtualAccounts/ListVirtualAccountsRequest.cs` |
| `VirtualAccountsResponse` | `src/Curlec/Models/VirtualAccountsResponse.cs` |
| `ListVirtualAccountsError` | `src/Curlec/Errors/ListVirtualAccountsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateVirtualAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateVirtualAccount(UpdateVirtualAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `VirtualAccount`
- **Error**: `ApiException<UpdateVirtualAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVirtualAccountRequest` | `src/Curlec/Requests/VirtualAccounts/UpdateVirtualAccountRequest.cs` |
| `VirtualAccountsRequest1` | `src/Curlec/Models/VirtualAccountsRequest1.cs` |
| `VirtualAccount` | `src/Curlec/Models/VirtualAccount.cs` |
| `UpdateVirtualAccountError` | `src/Curlec/Errors/UpdateVirtualAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

