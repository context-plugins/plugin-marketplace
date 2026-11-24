<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudConnect — operations

Accessor: `client.CloudConnect` · Source: `src/DoiT/Api/CloudConnect.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAccountRole

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateAccountRole(CreateAccountRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AwsAccountResponse`
- **Error**: `ApiException<CreateAccountRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAccountRoleRequest` | `src/DoiT/Requests/CloudConnect/CreateAccountRoleRequest.cs` |
| `CoreV1CloudconnectAwsAccountsRequest` | `src/DoiT/Models/CoreV1CloudconnectAwsAccountsRequest.cs` |
| `AwsAccountResponse` | `src/DoiT/Models/AwsAccountResponse.cs` |
| `CreateAccountRoleError` | `src/DoiT/Errors/CreateAccountRoleError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteAccountRole

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteAccountRole(DeleteAccountRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAccountRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAccountRoleRequest` | `src/DoiT/Requests/CloudConnect/DeleteAccountRoleRequest.cs` |
| `DeleteAccountRoleError` | `src/DoiT/Errors/DeleteAccountRoleError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetAwsAccount

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAwsAccount(GetAwsAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `AwsAccountResponse`
- **Error**: `ApiException<GetAwsAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAwsAccountRequest` | `src/DoiT/Requests/CloudConnect/GetAwsAccountRequest.cs` |
| `AwsAccountResponse` | `src/DoiT/Models/AwsAccountResponse.cs` |
| `GetAwsAccountError` | `src/DoiT/Errors/GetAwsAccountError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetCloudConnectSupportedFeatures

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudConnectSupportedFeatures(GetCloudConnectSupportedFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `SupportedFeaturesResponse`
- **Error**: `ApiException<GetCloudConnectSupportedFeaturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudConnectSupportedFeaturesRequest` | `src/DoiT/Requests/CloudConnect/GetCloudConnectSupportedFeaturesRequest.cs` |
| `SupportedFeaturesResponse` | `src/DoiT/Models/SupportedFeaturesResponse.cs` |
| `GetCloudConnectSupportedFeaturesError` | `src/DoiT/Errors/GetCloudConnectSupportedFeaturesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateAwsFeature

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateAwsFeature(UpdateAwsFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `Body`
- **Returns**: `AwsAccountResponse`
- **Error**: `ApiException<UpdateAwsFeatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAwsFeatureRequest` | `src/DoiT/Requests/CloudConnect/UpdateAwsFeatureRequest.cs` |
| `CoreV1CloudconnectAwsAccountsRequest1` | `src/DoiT/Models/CoreV1CloudconnectAwsAccountsRequest1.cs` |
| `AwsAccountResponse` | `src/DoiT/Models/AwsAccountResponse.cs` |
| `UpdateAwsFeatureError` | `src/DoiT/Errors/UpdateAwsFeatureError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

