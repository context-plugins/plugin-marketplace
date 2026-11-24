<!-- Generated file — do not edit; regenerated with the SDK. -->

# Emojis — operations

Accessor: `client.Emojis` · Source: `src/Buildkite/Api/Emojis.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListEmojis

- **Auth**: `options.BearerAuth`
- **Signature**: `ListEmojis(ListEmojisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEmojisRequest` | `src/Buildkite/Requests/Emojis/ListEmojisRequest.cs` |

