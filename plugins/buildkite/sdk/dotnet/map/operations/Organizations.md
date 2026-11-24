<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.Organizations` · Source: `src/Buildkite/Api/Organizations.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetOrganization

- **Auth**: `options.BearerAuth`
- **Signature**: `GetOrganization(GetOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetOrganizationRequest` | `src/Buildkite/Requests/Organizations/GetOrganizationRequest.cs` |

### ListOrganizations

- **Auth**: `options.BearerAuth`
- **Signature**: `ListOrganizations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

