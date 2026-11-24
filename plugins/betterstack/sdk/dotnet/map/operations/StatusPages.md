<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatusPages — operations

Accessor: `client.StatusPages` · Source: `src/BetterStack/Api/StatusPages.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStatusPage

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateStatusPage(CreateStatusPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateStatusPageRequest` | `src/BetterStack/Requests/StatusPages/CreateStatusPageRequest.cs` |
| `StatusPageCreate` | `src/BetterStack/Models/StatusPageCreate.cs` |

### DeleteStatusPage

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteStatusPage(DeleteStatusPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteStatusPageRequest` | `src/BetterStack/Requests/StatusPages/DeleteStatusPageRequest.cs` |

### GetStatusPage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetStatusPage(GetStatusPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetStatusPageRequest` | `src/BetterStack/Requests/StatusPages/GetStatusPageRequest.cs` |

### ListStatusPages

- **Auth**: `options.BearerAuth`
- **Signature**: `ListStatusPages(ListStatusPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `per_page` ← `PerPage`, `page` ← `Page`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListStatusPagesRequest` | `src/BetterStack/Requests/StatusPages/ListStatusPagesRequest.cs` |

### ListStatusPagesInGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `ListStatusPagesInGroup(ListStatusPagesInGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListStatusPagesInGroupRequest` | `src/BetterStack/Requests/StatusPages/ListStatusPagesInGroupRequest.cs` |

### UpdateStatusPage

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateStatusPage(UpdateStatusPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateStatusPageRequest` | `src/BetterStack/Requests/StatusPages/UpdateStatusPageRequest.cs` |
| `StatusPageCreate` | `src/BetterStack/Models/StatusPageCreate.cs` |

