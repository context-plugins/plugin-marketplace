<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.Organizations` · Source: `src/Contentstack/Api/Organizations.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAllOrganizations

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `GetAllOrganizations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `OrganizationList`
- **Error**: `ApiException<GetAllOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OrganizationList` | `src/Contentstack/Models/OrganizationList.cs` |
| `GetAllOrganizationsError` | `src/Contentstack/Errors/GetAllOrganizationsError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### GetOrganization

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `GetOrganization(GetOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`
- **Returns**: `Organization`
- **Error**: `ApiException<GetOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationRequest` | `src/Contentstack/Requests/Organizations/GetOrganizationRequest.cs` |
| `Organization` | `src/Contentstack/Models/Organization.cs` |
| `GetOrganizationError` | `src/Contentstack/Errors/GetOrganizationError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### GetOrganizationStacks

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `GetOrganizationStacks(GetOrganizationStacksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`
- **Returns**: `StackList`
- **Error**: `ApiException<GetOrganizationStacksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationStacksRequest` | `src/Contentstack/Requests/Organizations/GetOrganizationStacksRequest.cs` |
| `StackList` | `src/Contentstack/Models/StackList.cs` |
| `GetOrganizationStacksError` | `src/Contentstack/Errors/GetOrganizationStacksError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

