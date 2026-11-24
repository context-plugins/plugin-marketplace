<!-- Generated file — do not edit; regenerated with the SDK. -->

# LinkedAccounts — operations

Accessor: `client.LinkedAccounts` · Source: `src/Curlec/Api/LinkedAccounts.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateLinkedAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateLinkedAccount(CreateLinkedAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `LinkedAccount`
- **Error**: `ApiException<CreateLinkedAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateLinkedAccountRequest` | `src/Curlec/Requests/LinkedAccounts/CreateLinkedAccountRequest.cs` |
| `V2AccountsRequest` | `src/Curlec/Models/V2AccountsRequest.cs` |
| `LinkedAccount` | `src/Curlec/Models/LinkedAccount.cs` |
| `CreateLinkedAccountError` | `src/Curlec/Errors/CreateLinkedAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreateStakeholder

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateStakeholder(CreateStakeholderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `Body`
- **Returns**: `Stakeholder`
- **Error**: `ApiException<CreateStakeholderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStakeholderRequest` | `src/Curlec/Requests/LinkedAccounts/CreateStakeholderRequest.cs` |
| `V2AccountsStakeholdersRequest` | `src/Curlec/Models/V2AccountsStakeholdersRequest.cs` |
| `Stakeholder` | `src/Curlec/Models/Stakeholder.cs` |
| `CreateStakeholderError` | `src/Curlec/Errors/CreateStakeholderError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchLinkedAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchLinkedAccount(FetchLinkedAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `LinkedAccount`
- **Error**: `ApiException<FetchLinkedAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchLinkedAccountRequest` | `src/Curlec/Requests/LinkedAccounts/FetchLinkedAccountRequest.cs` |
| `LinkedAccount` | `src/Curlec/Models/LinkedAccount.cs` |
| `FetchLinkedAccountError` | `src/Curlec/Errors/FetchLinkedAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchProductConfig

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchProductConfig(FetchProductConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `ProductId`
- **Returns**: `ProductConfiguration`
- **Error**: `ApiException<FetchProductConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchProductConfigRequest` | `src/Curlec/Requests/LinkedAccounts/FetchProductConfigRequest.cs` |
| `ProductConfiguration` | `src/Curlec/Models/ProductConfiguration.cs` |
| `FetchProductConfigError` | `src/Curlec/Errors/FetchProductConfigError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### RequestProductConfig

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `RequestProductConfig(RequestProductConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `Body`
- **Returns**: `ProductConfiguration`
- **Error**: `ApiException<RequestProductConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RequestProductConfigRequest` | `src/Curlec/Requests/LinkedAccounts/RequestProductConfigRequest.cs` |
| `V2AccountsProductsRequest` | `src/Curlec/Models/V2AccountsProductsRequest.cs` |
| `ProductConfiguration` | `src/Curlec/Models/ProductConfiguration.cs` |
| `RequestProductConfigError` | `src/Curlec/Errors/RequestProductConfigError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateLinkedAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateLinkedAccount(UpdateLinkedAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `Body`
- **Returns**: `LinkedAccount`
- **Error**: `ApiException<UpdateLinkedAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateLinkedAccountRequest` | `src/Curlec/Requests/LinkedAccounts/UpdateLinkedAccountRequest.cs` |
| `V2AccountsRequest1` | `src/Curlec/Models/V2AccountsRequest1.cs` |
| `LinkedAccount` | `src/Curlec/Models/LinkedAccount.cs` |
| `UpdateLinkedAccountError` | `src/Curlec/Errors/UpdateLinkedAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateProductConfig

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateProductConfig(UpdateProductConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `ProductId`, `Body`
- **Returns**: `ProductConfiguration`
- **Error**: `ApiException<UpdateProductConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProductConfigRequest` | `src/Curlec/Requests/LinkedAccounts/UpdateProductConfigRequest.cs` |
| `V2AccountsProductsRequest1` | `src/Curlec/Models/V2AccountsProductsRequest1.cs` |
| `ProductConfiguration` | `src/Curlec/Models/ProductConfiguration.cs` |
| `UpdateProductConfigError` | `src/Curlec/Errors/UpdateProductConfigError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateStakeholder

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateStakeholder(UpdateStakeholderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `StakeholderId`, `Body`
- **Returns**: `Stakeholder`
- **Error**: `ApiException<UpdateStakeholderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStakeholderRequest` | `src/Curlec/Requests/LinkedAccounts/UpdateStakeholderRequest.cs` |
| `V2AccountsStakeholdersRequest1` | `src/Curlec/Models/V2AccountsStakeholdersRequest1.cs` |
| `Stakeholder` | `src/Curlec/Models/Stakeholder.cs` |
| `UpdateStakeholderError` | `src/Curlec/Errors/UpdateStakeholderError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

