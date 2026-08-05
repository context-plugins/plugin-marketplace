# ServiceorchestrationPlacement — operations

Accessor: `client.ServiceorchestrationPlacement` · Source: `Api/ServiceorchestrationPlacement.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PlacerServiceGetNetworkElements
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{orgId}/placement/network-elements` (Default)
- **Notes**: Get Network resources and their status within an Organization. Network resources are used during the service placement and created/managed through resource-producing Service Designs, like the l3-addr Service Design. Network resources are organized into a tree, branching on type and name of resource, the leaves being a pool of resource. Querying the endpoint using stringRefs=true provides a more compact tree representation (branches are in the "type:name" form)
- **Signature**: `PlacerServiceGetNetworkElements(string orgId, string? filter, bool? stringRefs, string? poolfilter, string? dbFilterParameters, string? perPage, string? currentOffset, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `currentOffset`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `stringRefs` ← `stringRefs`, `poolfilter` ← `poolfilter`
- **Returns**: `object`
- **Error**: `SdkException<PlacerServiceGetNetworkElementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlacerServiceGetServiceDesign
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{orgId}/placement/service-designs/{desId}/{version}` (Default)
- **Notes**: Get a specific version of the Service Design ( SD ) within an Organization. The specified version must be installed in the Organization.
- **Signature**: `PlacerServiceGetServiceDesign(string orgId, string desId, string version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OutputServiceDesignIncludingDesignId`
- **Error**: `SdkException<PlacerServiceGetServiceDesignError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlacerServiceGetServiceDesignLatest
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{orgId}/placement/service-designs/{desId}` (Default)
- **Notes**: Get the default version of the Service Design ( SD ) within an Organization.
- **Signature**: `PlacerServiceGetServiceDesignLatest(string orgId, string desId, string? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `OutputServiceDesignIncludingDesignId`
- **Error**: `SdkException<PlacerServiceGetServiceDesignLatestError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlacerServiceGetServiceDesignModels
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{orgId}/placement/service-design-models/{desId}/{version}` (Default)
- **Notes**: Get a specific version of the Service Design Models for an Organization. The specified version must be installed in the Organization.
- **Signature**: `PlacerServiceGetServiceDesignModels(string orgId, string desId, string version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<PlacerServiceGetServiceDesignModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlacerServiceGetServiceDesignModelsLatest
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{orgId}/placement/service-design-models/{desId}` (Default)
- **Notes**: Get the default version of the Service Design ( SD ) Models within an Organization.
- **Signature**: `PlacerServiceGetServiceDesignModelsLatest(string orgId, string desId, string? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `object`
- **Error**: `SdkException<PlacerServiceGetServiceDesignModelsLatestError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlacerServiceGetServiceDesigns
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{orgId}/placement/service-designs` (Default)
- **Notes**: Get the list of installed Service Designs for an Organization.
- **Signature**: `PlacerServiceGetServiceDesigns(string orgId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<PlacerServiceGetServiceDesignsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
