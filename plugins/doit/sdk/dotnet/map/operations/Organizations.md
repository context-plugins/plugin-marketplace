<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.Organizations` · Source: `src/DoiT/Api/Organizations.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListOrganizations

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListOrganizations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IamV1OrganizationsResponse`
- **Error**: `ApiException<ListOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IamV1OrganizationsResponse` | `src/DoiT/Models/IamV1OrganizationsResponse.cs` |
| `ListOrganizationsError` | `src/DoiT/Errors/ListOrganizationsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

