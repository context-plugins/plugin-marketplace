<!-- Generated file — do not edit; regenerated with the SDK. -->

# ActionItems — operations

Accessor: `client.ActionItems` · Source: `src/Fellow/Api/ActionItems.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AppsDeveloperApiApiArchiveActionItem

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiArchiveActionItem(AppsDeveloperApiApiArchiveActionItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ActionItemId`
- **Returns**: `ActionItemResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiArchiveActionItemRequest` | `src/Fellow/Requests/ActionItems/AppsDeveloperApiApiArchiveActionItemRequest.cs` |
| `ActionItemResponse` | `src/Fellow/Models/ActionItemResponse.cs` |

### AppsDeveloperApiApiGetActionItemById

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiGetActionItemById(AppsDeveloperApiApiGetActionItemByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ActionItemId`
- **Returns**: `ActionItemResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiGetActionItemByIdRequest` | `src/Fellow/Requests/ActionItems/AppsDeveloperApiApiGetActionItemByIdRequest.cs` |
| `ActionItemResponse` | `src/Fellow/Models/ActionItemResponse.cs` |

### AppsDeveloperApiApiGetActionItems

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiGetActionItems(AppsDeveloperApiApiGetActionItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ActionItemsListResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiGetActionItemsRequest` | `src/Fellow/Requests/ActionItems/AppsDeveloperApiApiGetActionItemsRequest.cs` |
| `GetActionItemsRequest` | `src/Fellow/Models/GetActionItemsRequest.cs` |
| `ActionItemsListResponse` | `src/Fellow/Models/ActionItemsListResponse.cs` |

### AppsDeveloperApiApiMarkActionItemComplete

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiMarkActionItemComplete(AppsDeveloperApiApiMarkActionItemCompleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ActionItemId`, `Body`
- **Returns**: `ActionItemResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiMarkActionItemCompleteRequest` | `src/Fellow/Requests/ActionItems/AppsDeveloperApiApiMarkActionItemCompleteRequest.cs` |
| `MarkActionItemCompleteRequest` | `src/Fellow/Models/MarkActionItemCompleteRequest.cs` |
| `ActionItemResponse` | `src/Fellow/Models/ActionItemResponse.cs` |

