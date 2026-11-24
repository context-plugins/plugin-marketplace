<!-- Generated file — do not edit; regenerated with the SDK. -->

# SshKey — operations

Accessor: `client.SshKey` · Source: `src/CircleCi/Api/SshKey.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddSshKey

- **Auth**: `options.ApiToken`
- **Signature**: `AddSshKey(AddSshKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AddSshKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddSshKeyRequest` | `src/CircleCi/Requests/SshKey/AddSshKeyRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `ProjectProjectSshKeyRequest` | `src/CircleCi/Models/ProjectProjectSshKeyRequest.cs` |
| `AddSshKeyError` | `src/CircleCi/Errors/AddSshKeyError.cs` |

### CreateCheckoutKey2

- **Auth**: `options.ApiToken`
- **Signature**: `CreateCheckoutKey2(CreateCheckoutKey2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `Body`
- **Returns**: `CheckoutKeyCircleCiRestApiV1SshKeyApi`
- **Error**: `ApiException<CreateCheckoutKey2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCheckoutKey2Request` | `src/CircleCi/Requests/SshKey/CreateCheckoutKey2Request.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `ProjectProjectCheckoutKeyRequest` | `src/CircleCi/Models/ProjectProjectCheckoutKeyRequest.cs` |
| `CheckoutKeyCircleCiRestApiV1SshKeyApi` | `src/CircleCi/Models/CheckoutKeyCircleCiRestApiV1SshKeyApi.cs` |
| `CreateCheckoutKey2Error` | `src/CircleCi/Errors/CreateCheckoutKey2Error.cs` |

### DeleteCheckoutKey2

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteCheckoutKey2(DeleteCheckoutKey2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `Fingerprint`
- **Returns**: `ProjectProjectCheckoutKeyFingerprintResponse`
- **Error**: `ApiException<DeleteCheckoutKey2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCheckoutKey2Request` | `src/CircleCi/Requests/SshKey/DeleteCheckoutKey2Request.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `ProjectProjectCheckoutKeyFingerprintResponse` | `src/CircleCi/Models/ProjectProjectCheckoutKeyFingerprintResponse.cs` |
| `DeleteCheckoutKey2Error` | `src/CircleCi/Errors/DeleteCheckoutKey2Error.cs` |

### GetCheckoutKey2

- **Auth**: `options.ApiToken`
- **Signature**: `GetCheckoutKey2(GetCheckoutKey2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `Fingerprint`
- **Returns**: `CheckoutKeyCircleCiRestApiV1SshKeyApi`
- **Error**: `ApiException<GetCheckoutKey2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCheckoutKey2Request` | `src/CircleCi/Requests/SshKey/GetCheckoutKey2Request.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `CheckoutKeyCircleCiRestApiV1SshKeyApi` | `src/CircleCi/Models/CheckoutKeyCircleCiRestApiV1SshKeyApi.cs` |
| `GetCheckoutKey2Error` | `src/CircleCi/Errors/GetCheckoutKey2Error.cs` |

### ListCheckoutKeys2

- **Auth**: `options.ApiToken`
- **Signature**: `ListCheckoutKeys2(ListCheckoutKeys2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`
- **Returns**: `IReadOnlyList<CheckoutKeyCircleCiRestApiV1SshKeyApi>`
- **Error**: `ApiException<ListCheckoutKeys2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCheckoutKeys2Request` | `src/CircleCi/Requests/SshKey/ListCheckoutKeys2Request.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `CheckoutKeyCircleCiRestApiV1SshKeyApi` | `src/CircleCi/Models/CheckoutKeyCircleCiRestApiV1SshKeyApi.cs` |
| `ListCheckoutKeys2Error` | `src/CircleCi/Errors/ListCheckoutKeys2Error.cs` |

