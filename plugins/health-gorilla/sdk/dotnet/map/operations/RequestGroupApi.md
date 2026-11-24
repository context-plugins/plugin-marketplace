<!-- Generated file — do not edit; regenerated with the SDK. -->

# RequestGroupApi — operations

Accessor: `client.RequestGroupApi` · Source: `src/HealthGorilla/Api/RequestGroupApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRequestGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateRequestGroup(CreateRequestGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RequestGroup`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateRequestGroupRequest` | `src/HealthGorilla/Requests/RequestGroupApi/CreateRequestGroupRequest.cs` |
| `RequestGroup` | `src/HealthGorilla/Models/RequestGroup.cs` |

### ReadRequestGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `ReadRequestGroup(ReadRequestGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `RequestGroup`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReadRequestGroupRequest` | `src/HealthGorilla/Requests/RequestGroupApi/ReadRequestGroupRequest.cs` |
| `RequestGroup` | `src/HealthGorilla/Models/RequestGroup.cs` |

### SearchRequestGroups

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchRequestGroups(SearchRequestGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `patient` ← `Patient`, `_count` ← `Count`
- **Returns**: `Bundle`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchRequestGroupsRequest` | `src/HealthGorilla/Requests/RequestGroupApi/SearchRequestGroupsRequest.cs` |
| `Bundle` | `src/HealthGorilla/Models/Bundle.cs` |

