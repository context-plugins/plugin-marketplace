<!-- Generated file — do not edit; regenerated with the SDK. -->

# Annotations — operations

Accessor: `client.Annotations` · Source: `src/Buildkite/Api/Annotations.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListAnnotations

- **Auth**: `options.BearerAuth`
- **Signature**: `ListAnnotations(ListAnnotationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`, `Number`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListAnnotationsRequest` | `src/Buildkite/Requests/Annotations/ListAnnotationsRequest.cs` |

