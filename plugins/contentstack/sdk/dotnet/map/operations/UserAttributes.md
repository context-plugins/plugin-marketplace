<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserAttributes — operations

Accessor: `client.UserAttributes` · Source: `src/Contentstack/Api/UserAttributes.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MergeUserAttributes

- **Server group**: `DefaultContentstackEventsApi`
- **Signature**: `MergeUserAttributes(MergeUserAttributesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<MergeUserAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MergeUserAttributesOperationRequest` | `src/Contentstack/Requests/UserAttributes/MergeUserAttributesOperationRequest.cs` |
| `MergeUserAttributesRequest` | `src/Contentstack/Models/MergeUserAttributesRequest.cs` |
| `MergeUserAttributesError` | `src/Contentstack/Errors/MergeUserAttributesError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### SetUserAttributes

- **Server group**: `DefaultContentstackEventsApi`
- **Signature**: `SetUserAttributes(SetUserAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SetUserAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetUserAttributesRequest` | `src/Contentstack/Requests/UserAttributes/SetUserAttributesRequest.cs` |
| `SetUserAttributesError` | `src/Contentstack/Errors/SetUserAttributesError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

