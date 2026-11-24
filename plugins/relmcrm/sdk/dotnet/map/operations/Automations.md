<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.Automations` · Source: `src/RelmCrm/Api/Automations.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AutomationsCapabilities

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `AutomationsCapabilities(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### CreateAutomation

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateAutomation(CreateAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateAutomationRequest` | `src/RelmCrm/Requests/Automations/CreateAutomationRequest.cs` |
| `AutomationInput` | `src/RelmCrm/Models/AutomationInput.cs` |

### DeleteAutomation

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteAutomation(DeleteAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteAutomationRequest` | `src/RelmCrm/Requests/Automations/DeleteAutomationRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### GetAutomation

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetAutomation(GetAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetAutomationRequest` | `src/RelmCrm/Requests/Automations/GetAutomationRequest.cs` |

### ListAutomations

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListAutomations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### SetAutomationEnabled

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `SetAutomationEnabled(SetAutomationEnabledRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SetAutomationEnabledRequest` | `src/RelmCrm/Requests/Automations/SetAutomationEnabledRequest.cs` |
| `AutomationsRequest` | `src/RelmCrm/Models/AutomationsRequest.cs` |

