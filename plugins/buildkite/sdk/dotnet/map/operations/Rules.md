<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rules — operations

Accessor: `client.Rules` · Source: `src/Buildkite/Api/Rules.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListRules

- **Auth**: `options.BearerAuth`
- **Signature**: `ListRules(ListRulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRulesRequest` | `src/Buildkite/Requests/Rules/ListRulesRequest.cs` |

