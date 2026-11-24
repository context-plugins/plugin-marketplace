<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.Discovery` · Source: `src/Leadspace/Api/Discovery.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DiscoverCompanyContacts

- **Auth**: `options.BearerAuth`
- **Signature**: `DiscoverCompanyContacts(DiscoverCompanyContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DiscoveryAccepted`
- **Error**: `ApiException<DiscoverCompanyContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 427, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DiscoverCompanyContactsRequest` | `src/Leadspace/Requests/Discovery/DiscoverCompanyContactsRequest.cs` |
| `DiscoveryRequest` | `src/Leadspace/Models/DiscoveryRequest.cs` |
| `DiscoveryAccepted` | `src/Leadspace/Models/DiscoveryAccepted.cs` |
| `DiscoverCompanyContactsError` | `src/Leadspace/Errors/DiscoverCompanyContactsError.cs` |
| `Error` | `src/Leadspace/Models/Error.cs` |

