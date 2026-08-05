# TopologyfilterTopologyFilter — operations

Accessor: `client.TopologyfilterTopologyFilter` · Source: `Api/TopologyfilterTopologyFilter.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyFilterAcceptedNodesGet
- **HTTP**: `GET /topology-filter/accepted-nodes` (Default)
- **Notes**: Returns the list of topology nodes that are accepted (not filtered out) by the active topology filters.
- **Signature**: `TopologyFilterAcceptedNodesGet(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<NodeStatus>`
- **Error**: `SdkException<TopologyFilterAcceptedNodesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDeleteUserResponse(out ApiV1OrgsDeleteUserResponse)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFilterAllNodesGet
- **HTTP**: `GET /topology-filter/all-nodes` (Default)
- **Notes**: Returns all known topology nodes along with their current filter status.
- **Signature**: `TopologyFilterAllNodesGet(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<NodeStatus>`
- **Error**: `SdkException<TopologyFilterAllNodesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDeleteUserResponse(out ApiV1OrgsDeleteUserResponse)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFilterFilteredNodesGet
- **HTTP**: `GET /topology-filter/filtered-nodes` (Default)
- **Notes**: Returns the list of topology nodes that are currently filtered out by the active topology filters.
- **Signature**: `TopologyFilterFilteredNodesGet(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<NodeStatus>`
- **Error**: `SdkException<TopologyFilterFilteredNodesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDeleteUserResponse(out ApiV1OrgsDeleteUserResponse)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFilterGet
- **HTTP**: `GET /topology-filter` (Default)
- **Notes**: Returns the list of configured topology filters.
- **Signature**: `TopologyFilterGet(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TopologyFilter>`
- **Error**: `SdkException<TopologyFilterGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDeleteUserResponse(out ApiV1OrgsDeleteUserResponse)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFilterPost
- **HTTP**: `POST /topology-filter` (Default)
- **Notes**: Replaces the current topology filter list with the provided list. An empty list clears all filters.
- **Signature**: `TopologyFilterPost(IReadOnlyList<TopologyFilter> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TopologyFilter>`
- **Error**: `SdkException<TopologyFilterPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDeleteUserResponse(out ApiV1OrgsDeleteUserResponse)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFilterSimulatePost
- **HTTP**: `POST /topology-filter/simulate` (Default)
- **Notes**: Simulates applying the proposed filter rules against all known nodes without persisting the changes. Returns the node status list that would result from applying the given filters.
- **Signature**: `TopologyFilterSimulatePost(IReadOnlyList<TopologyFilter> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<NodeStatus>`
- **Error**: `SdkException<TopologyFilterSimulatePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsDeleteUserResponse(out ApiV1OrgsDeleteUserResponse)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
