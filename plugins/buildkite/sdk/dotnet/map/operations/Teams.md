<!-- Generated file — do not edit; regenerated with the SDK. -->

# Teams — operations

Accessor: `client.Teams` · Source: `src/Buildkite/Api/Teams.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListTeams

- **Auth**: `options.BearerAuth`
- **Signature**: `ListTeams(ListTeamsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListTeamsRequest` | `src/Buildkite/Requests/Teams/ListTeamsRequest.cs` |

