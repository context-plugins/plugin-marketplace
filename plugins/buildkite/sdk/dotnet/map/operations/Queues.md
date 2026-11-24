<!-- Generated file — do not edit; regenerated with the SDK. -->

# Queues — operations

Accessor: `client.Queues` · Source: `src/Buildkite/Api/Queues.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListQueues

- **Auth**: `options.BearerAuth`
- **Signature**: `ListQueues(ListQueuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Cluster`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListQueuesRequest` | `src/Buildkite/Requests/Queues/ListQueuesRequest.cs` |

