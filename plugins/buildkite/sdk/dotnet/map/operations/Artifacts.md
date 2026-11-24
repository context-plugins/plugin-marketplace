<!-- Generated file — do not edit; regenerated with the SDK. -->

# Artifacts — operations

Accessor: `client.Artifacts` · Source: `src/Buildkite/Api/Artifacts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListArtifactsForBuild

- **Auth**: `options.BearerAuth`
- **Signature**: `ListArtifactsForBuild(ListArtifactsForBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`, `Number`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListArtifactsForBuildRequest` | `src/Buildkite/Requests/Artifacts/ListArtifactsForBuildRequest.cs` |

