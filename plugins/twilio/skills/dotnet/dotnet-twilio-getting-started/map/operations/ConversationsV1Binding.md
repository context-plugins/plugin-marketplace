<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Binding — operations

Accessor: `client.ConversationsV1Binding` · Source: `Api/ConversationsV1Binding.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteServiceBinding

- **Server group**: `Default7`
- **Signature**: `DeleteServiceBinding(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchServiceBinding

- **Server group**: `Default7`
- **Signature**: `FetchServiceBinding(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceBinding`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceBinding` | `Models/ConversationsV1ServiceServiceBinding.cs` |

### ListServiceBinding

- **Server group**: `Default7`
- **Signature**: `ListServiceBinding(string chatServiceSid, IReadOnlyList<ServiceBindingEnumBindingType>? bindingType, IReadOnlyList<string>? identity, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`bindingType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `BindingType` ← `bindingType`, `Identity` ← `identity`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceBindingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceBindingEnumBindingType` | `Models/Enums/ServiceBindingEnumBindingType.cs` |
| `ListServiceBindingResponse` | `Models/ListServiceBindingResponse.cs` |

