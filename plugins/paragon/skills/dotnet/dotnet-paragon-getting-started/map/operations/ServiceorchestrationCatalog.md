# ServiceorchestrationCatalog — operations

Accessor: `client.ServiceorchestrationCatalog` · Source: `Api/ServiceorchestrationCatalog.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CatalogServiceDeleteOrgServiceDesign
- **HTTP**: `DELETE /service-orchestration/api/v1/orgs/{org_id}/catalog/service-designs/{design}/{version}` (Default)
- **Notes**: Delete the specified Service Design from an Organization. Deletion is only allowed if the Service Design is not referenced by any Service Instances in the Organization. If the delete is allowed, it triggers the workflow to delete the service design from organization. This call returns immediately after the workflow is triggered.
- **Signature**: `CatalogServiceDeleteOrgServiceDesign(string orgId, string design, string version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CatalogDeleteDesignResponse`
- **Error**: `SdkException<CatalogServiceDeleteOrgServiceDesignError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CatalogServiceGetServiceDesign
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/catalog/service-designs/{design}` (Default)
- **Notes**: Get the requested Service Design Catalog information for an Organization. This compares installed and new versions (if any) for the Service Design. It provides changes across versions(aka what's new and available for upgrade).
- **Signature**: `CatalogServiceGetServiceDesign(string orgId, string design, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<CatalogServiceGetServiceDesignError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CatalogServiceGetServiceDesigns
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/catalog/service-designs` (Default)
- **Notes**: Get all the available Service Design Catalog information for an Organization. This compares installed versions and new versions for all Service Design. It provides changes across versions(aka what's new and available for upgrade).
- **Signature**: `CatalogServiceGetServiceDesigns(string orgId, bool? updatePending, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updatePending` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_pending` ← `updatePending`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<CatalogServiceGetServiceDesignsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CatalogServiceGetServiceDesignsDependencies
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/catalog/service-designs/deps` (Default)
- **Notes**: Return a list representing all the dependencies between service designs. The list contains a root entry representing the root of the depency tree.
- **Signature**: `CatalogServiceGetServiceDesignsDependencies(string orgId, IReadOnlyList<CatalogServiceDesignVersionIdIsTheUniqueIdOfAServiceDesign> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CatalogServiceDesignVersionDependencyRepresentOneServiceDesignDepencyInformationAlone>`
- **Error**: `SdkException<CatalogServiceGetServiceDesignsDependenciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CatalogServiceGetUpdateList
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/catalog/service-designs/deps/upgrades` (Default)
- **Notes**: Provided a list of service designs (empty list is considered as "all service designs", return a representation of how the SD should be upgraded: - Installed SD is considered. - a list where each entry represent the SD that can be upgraded in parallel. The example below indicates that: 1. first the infrastructure, l2-addr and vpn-resources should be upgraded. They can be upgraded in parallel. 2. the elan-evpn-csm should be upgraded second. The list of service designs in input MAY have no version, in which case all the SD version are included.
- **Signature**: `CatalogServiceGetUpdateList(string orgId, IReadOnlyList<CatalogServiceDesignVersionIdIsTheUniqueIdOfAServiceDesign> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CatalogServiceDesignVersionIdlistContainsAListOfDesigns>`
- **Error**: `SdkException<CatalogServiceGetUpdateListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CatalogServiceSetOrgServiceDesignAttributes
- **HTTP**: `PUT /service-orchestration/api/v1/orgs/{org_id}/catalog/service-designs/{design}/attributes` (Default)
- **Notes**: Set the Service Design preferred default version for an Organization
- **Signature**: `CatalogServiceSetOrgServiceDesignAttributes(string orgId, string design, CatalogCatalogServiceDesignOrgSetRequestParam body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<CatalogServiceSetOrgServiceDesignAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CatalogServiceUpdateOrgServiceDesign
- **HTTP**: `PUT /service-orchestration/api/v1/orgs/{org_id}/catalog/service-designs/{design}` (Default)
- **Notes**: Install the specified Service Design and its subcomponents in an Organization. If the install is allowed, it triggers the workflow to install the service design in the Organization. This call returns immediately after the workflow is triggered.
- **Signature**: `CatalogServiceUpdateOrgServiceDesign(string orgId, string design, CatalogCatalogOrgUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CatalogUpdateDesignResponse`
- **Error**: `SdkException<CatalogServiceUpdateOrgServiceDesignError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CatalogServiceUpdateOrgServiceDesigns
- **HTTP**: `PUT /service-orchestration/api/v1/orgs/{org_id}/catalog/service-designs` (Default)
- **Notes**: Install the specified Service Designs to the latest version in an Organization. If no service design is given as input, all latest service design are considered. The depencies is taken into account to order the install. If the install is allowed, it triggers the workflow to install the service designs in the Organization. This call returns immediately after the workflow is triggered. It returns the list of upgraded service designs and the run id of the fh-install-designs workflow.
- **Signature**: `CatalogServiceUpdateOrgServiceDesigns(string orgId, IReadOnlyList<CatalogServiceDesignVersionIdIsTheUniqueIdOfAServiceDesign> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CatalogUpdateDesignsResponse`
- **Error**: `SdkException<CatalogServiceUpdateOrgServiceDesignsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
