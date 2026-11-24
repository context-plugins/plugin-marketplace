<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.Automations` · Source: `src/Contentstack/Api/Automations.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ActivateAutomation

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `ActivateAutomation(ActivateAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`, `AutomationUid`
- **Returns**: `Automation`
- **Error**: `ApiException<ActivateAutomationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateAutomationRequest` | `src/Contentstack/Requests/Automations/ActivateAutomationRequest.cs` |
| `Automation` | `src/Contentstack/Models/Automation.cs` |
| `ActivateAutomationError` | `src/Contentstack/Errors/ActivateAutomationError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### DeactivateAutomation

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `DeactivateAutomation(DeactivateAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`, `AutomationUid`
- **Returns**: `Automation`
- **Error**: `ApiException<DeactivateAutomationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeactivateAutomationRequest` | `src/Contentstack/Requests/Automations/DeactivateAutomationRequest.cs` |
| `Automation` | `src/Contentstack/Models/Automation.cs` |
| `DeactivateAutomationError` | `src/Contentstack/Errors/DeactivateAutomationError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetAllAutomations

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllAutomations(GetAllAutomationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`
- **Returns**: `AutomationList`
- **Error**: `ApiException<GetAllAutomationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllAutomationsRequest` | `src/Contentstack/Requests/Automations/GetAllAutomationsRequest.cs` |
| `AutomationList` | `src/Contentstack/Models/AutomationList.cs` |
| `GetAllAutomationsError` | `src/Contentstack/Errors/GetAllAutomationsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetAutomation

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAutomation(GetAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`, `AutomationUid`
- **Returns**: `Automation`
- **Error**: `ApiException<GetAutomationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAutomationRequest` | `src/Contentstack/Requests/Automations/GetAutomationRequest.cs` |
| `Automation` | `src/Contentstack/Models/Automation.cs` |
| `GetAutomationError` | `src/Contentstack/Errors/GetAutomationError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

