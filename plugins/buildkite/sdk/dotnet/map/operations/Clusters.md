<!-- Generated file — do not edit; regenerated with the SDK. -->

# Clusters — operations

Accessor: `client.Clusters` · Source: `src/Buildkite/Api/Clusters.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListClusters

- **Auth**: `options.BearerAuth`
- **Signature**: `ListClusters(ListClustersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListClustersRequest` | `src/Buildkite/Requests/Clusters/ListClustersRequest.cs` |

