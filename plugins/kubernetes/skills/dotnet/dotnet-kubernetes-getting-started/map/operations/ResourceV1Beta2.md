# ResourceV1Beta2 — operations

Accessor: `client.ResourceV1Beta2` · Source: `Api/ResourceV1Beta2.cs` · 56 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateResourceV1Beta2DeviceClass
- **HTTP**: `POST /apis/resource.k8s.io/v1beta2/deviceclasses` (Default)
- **Signature**: `CreateResourceV1Beta2DeviceClass(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceClass`
- **Error**: `SdkException<CreateResourceV1Beta2DeviceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateResourceV1Beta2DeviceTaintRule
- **HTTP**: `POST /apis/resource.k8s.io/v1beta2/devicetaintrules` (Default)
- **Signature**: `CreateResourceV1Beta2DeviceTaintRule(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceTaintRule`
- **Error**: `SdkException<CreateResourceV1Beta2DeviceTaintRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateResourceV1Beta2NamespacedResourceClaim
- **HTTP**: `POST /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims` (Default)
- **Signature**: `CreateResourceV1Beta2NamespacedResourceClaim(string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaim`
- **Error**: `SdkException<CreateResourceV1Beta2NamespacedResourceClaimError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateResourceV1Beta2NamespacedResourceClaimTemplate
- **HTTP**: `POST /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaimtemplates` (Default)
- **Signature**: `CreateResourceV1Beta2NamespacedResourceClaimTemplate(string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaimTemplate`
- **Error**: `SdkException<CreateResourceV1Beta2NamespacedResourceClaimTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateResourceV1Beta2ResourceSlice
- **HTTP**: `POST /apis/resource.k8s.io/v1beta2/resourceslices` (Default)
- **Signature**: `CreateResourceV1Beta2ResourceSlice(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceSlice`
- **Error**: `SdkException<CreateResourceV1Beta2ResourceSliceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2CollectionDeviceClass
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/deviceclasses` (Default)
- **Signature**: `DeleteResourceV1Beta2CollectionDeviceClass(string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteResourceV1Beta2CollectionDeviceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2CollectionDeviceTaintRule
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/devicetaintrules` (Default)
- **Signature**: `DeleteResourceV1Beta2CollectionDeviceTaintRule(string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteResourceV1Beta2CollectionDeviceTaintRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2CollectionNamespacedResourceClaim
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims` (Default)
- **Signature**: `DeleteResourceV1Beta2CollectionNamespacedResourceClaim(string @namespace, string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteResourceV1Beta2CollectionNamespacedResourceClaimError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2CollectionNamespacedResourceClaimTemplate
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaimtemplates` (Default)
- **Signature**: `DeleteResourceV1Beta2CollectionNamespacedResourceClaimTemplate(string @namespace, string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteResourceV1Beta2CollectionNamespacedResourceClaimTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2CollectionResourceSlice
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/resourceslices` (Default)
- **Signature**: `DeleteResourceV1Beta2CollectionResourceSlice(string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteResourceV1Beta2CollectionResourceSliceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2DeviceClass
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/deviceclasses/{name}` (Default)
- **Signature**: `DeleteResourceV1Beta2DeviceClass(string name, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceClass`
- **Error**: `SdkException<DeleteResourceV1Beta2DeviceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2DeviceTaintRule
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/devicetaintrules/{name}` (Default)
- **Signature**: `DeleteResourceV1Beta2DeviceTaintRule(string name, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceTaintRule`
- **Error**: `SdkException<DeleteResourceV1Beta2DeviceTaintRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2NamespacedResourceClaim
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims/{name}` (Default)
- **Signature**: `DeleteResourceV1Beta2NamespacedResourceClaim(string name, string @namespace, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaim`
- **Error**: `SdkException<DeleteResourceV1Beta2NamespacedResourceClaimError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2NamespacedResourceClaimTemplate
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaimtemplates/{name}` (Default)
- **Signature**: `DeleteResourceV1Beta2NamespacedResourceClaimTemplate(string name, string @namespace, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaimTemplate`
- **Error**: `SdkException<DeleteResourceV1Beta2NamespacedResourceClaimTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteResourceV1Beta2ResourceSlice
- **HTTP**: `DELETE /apis/resource.k8s.io/v1beta2/resourceslices/{name}` (Default)
- **Signature**: `DeleteResourceV1Beta2ResourceSlice(string name, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceSlice`
- **Error**: `SdkException<DeleteResourceV1Beta2ResourceSliceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetResourceV1Beta2Apiresources
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/` (Default)
- **Signature**: `GetResourceV1Beta2Apiresources(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1ApiresourceList`
- **Error**: `SdkException<GetResourceV1Beta2ApiresourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListResourceV1Beta2DeviceClass
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/deviceclasses` (Default)
- **Signature**: `ListResourceV1Beta2DeviceClass(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceClassList`
- **Error**: `SdkException<ListResourceV1Beta2DeviceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListResourceV1Beta2DeviceTaintRule
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/devicetaintrules` (Default)
- **Signature**: `ListResourceV1Beta2DeviceTaintRule(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceTaintRuleList`
- **Error**: `SdkException<ListResourceV1Beta2DeviceTaintRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListResourceV1Beta2NamespacedResourceClaim
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims` (Default)
- **Signature**: `ListResourceV1Beta2NamespacedResourceClaim(string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaimList`
- **Error**: `SdkException<ListResourceV1Beta2NamespacedResourceClaimError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListResourceV1Beta2NamespacedResourceClaimTemplate
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaimtemplates` (Default)
- **Signature**: `ListResourceV1Beta2NamespacedResourceClaimTemplate(string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaimTemplateList`
- **Error**: `SdkException<ListResourceV1Beta2NamespacedResourceClaimTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListResourceV1Beta2ResourceClaimForAllNamespaces
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/resourceclaims` (Default)
- **Signature**: `ListResourceV1Beta2ResourceClaimForAllNamespaces(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaimList`
- **Error**: `SdkException<ListResourceV1Beta2ResourceClaimForAllNamespacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListResourceV1Beta2ResourceClaimTemplateForAllNamespaces
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/resourceclaimtemplates` (Default)
- **Signature**: `ListResourceV1Beta2ResourceClaimTemplateForAllNamespaces(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaimTemplateList`
- **Error**: `SdkException<ListResourceV1Beta2ResourceClaimTemplateForAllNamespacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListResourceV1Beta2ResourceSlice
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/resourceslices` (Default)
- **Signature**: `ListResourceV1Beta2ResourceSlice(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceSliceList`
- **Error**: `SdkException<ListResourceV1Beta2ResourceSliceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchResourceV1Beta2DeviceClass
- **HTTP**: `PATCH /apis/resource.k8s.io/v1beta2/deviceclasses/{name}` (Default)
- **Signature**: `PatchResourceV1Beta2DeviceClass(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceClass`
- **Error**: `SdkException<PatchResourceV1Beta2DeviceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchResourceV1Beta2DeviceTaintRule
- **HTTP**: `PATCH /apis/resource.k8s.io/v1beta2/devicetaintrules/{name}` (Default)
- **Signature**: `PatchResourceV1Beta2DeviceTaintRule(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceTaintRule`
- **Error**: `SdkException<PatchResourceV1Beta2DeviceTaintRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchResourceV1Beta2DeviceTaintRuleStatus
- **HTTP**: `PATCH /apis/resource.k8s.io/v1beta2/devicetaintrules/{name}/status` (Default)
- **Signature**: `PatchResourceV1Beta2DeviceTaintRuleStatus(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceTaintRule`
- **Error**: `SdkException<PatchResourceV1Beta2DeviceTaintRuleStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchResourceV1Beta2NamespacedResourceClaim
- **HTTP**: `PATCH /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims/{name}` (Default)
- **Signature**: `PatchResourceV1Beta2NamespacedResourceClaim(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaim`
- **Error**: `SdkException<PatchResourceV1Beta2NamespacedResourceClaimError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchResourceV1Beta2NamespacedResourceClaimStatus
- **HTTP**: `PATCH /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims/{name}/status` (Default)
- **Signature**: `PatchResourceV1Beta2NamespacedResourceClaimStatus(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaim`
- **Error**: `SdkException<PatchResourceV1Beta2NamespacedResourceClaimStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchResourceV1Beta2NamespacedResourceClaimTemplate
- **HTTP**: `PATCH /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaimtemplates/{name}` (Default)
- **Signature**: `PatchResourceV1Beta2NamespacedResourceClaimTemplate(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaimTemplate`
- **Error**: `SdkException<PatchResourceV1Beta2NamespacedResourceClaimTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchResourceV1Beta2ResourceSlice
- **HTTP**: `PATCH /apis/resource.k8s.io/v1beta2/resourceslices/{name}` (Default)
- **Signature**: `PatchResourceV1Beta2ResourceSlice(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceSlice`
- **Error**: `SdkException<PatchResourceV1Beta2ResourceSliceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadResourceV1Beta2DeviceClass
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/deviceclasses/{name}` (Default)
- **Signature**: `ReadResourceV1Beta2DeviceClass(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceClass`
- **Error**: `SdkException<ReadResourceV1Beta2DeviceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadResourceV1Beta2DeviceTaintRule
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/devicetaintrules/{name}` (Default)
- **Signature**: `ReadResourceV1Beta2DeviceTaintRule(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceTaintRule`
- **Error**: `SdkException<ReadResourceV1Beta2DeviceTaintRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadResourceV1Beta2DeviceTaintRuleStatus
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/devicetaintrules/{name}/status` (Default)
- **Signature**: `ReadResourceV1Beta2DeviceTaintRuleStatus(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceTaintRule`
- **Error**: `SdkException<ReadResourceV1Beta2DeviceTaintRuleStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadResourceV1Beta2NamespacedResourceClaim
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims/{name}` (Default)
- **Signature**: `ReadResourceV1Beta2NamespacedResourceClaim(string name, string @namespace, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaim`
- **Error**: `SdkException<ReadResourceV1Beta2NamespacedResourceClaimError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadResourceV1Beta2NamespacedResourceClaimStatus
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims/{name}/status` (Default)
- **Signature**: `ReadResourceV1Beta2NamespacedResourceClaimStatus(string name, string @namespace, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaim`
- **Error**: `SdkException<ReadResourceV1Beta2NamespacedResourceClaimStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadResourceV1Beta2NamespacedResourceClaimTemplate
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaimtemplates/{name}` (Default)
- **Signature**: `ReadResourceV1Beta2NamespacedResourceClaimTemplate(string name, string @namespace, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaimTemplate`
- **Error**: `SdkException<ReadResourceV1Beta2NamespacedResourceClaimTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadResourceV1Beta2ResourceSlice
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/resourceslices/{name}` (Default)
- **Signature**: `ReadResourceV1Beta2ResourceSlice(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceSlice`
- **Error**: `SdkException<ReadResourceV1Beta2ResourceSliceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceResourceV1Beta2DeviceClass
- **HTTP**: `PUT /apis/resource.k8s.io/v1beta2/deviceclasses/{name}` (Default)
- **Signature**: `ReplaceResourceV1Beta2DeviceClass(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceClass`
- **Error**: `SdkException<ReplaceResourceV1Beta2DeviceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceResourceV1Beta2DeviceTaintRule
- **HTTP**: `PUT /apis/resource.k8s.io/v1beta2/devicetaintrules/{name}` (Default)
- **Signature**: `ReplaceResourceV1Beta2DeviceTaintRule(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceTaintRule`
- **Error**: `SdkException<ReplaceResourceV1Beta2DeviceTaintRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceResourceV1Beta2DeviceTaintRuleStatus
- **HTTP**: `PUT /apis/resource.k8s.io/v1beta2/devicetaintrules/{name}/status` (Default)
- **Signature**: `ReplaceResourceV1Beta2DeviceTaintRuleStatus(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2DeviceTaintRule`
- **Error**: `SdkException<ReplaceResourceV1Beta2DeviceTaintRuleStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceResourceV1Beta2NamespacedResourceClaim
- **HTTP**: `PUT /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims/{name}` (Default)
- **Signature**: `ReplaceResourceV1Beta2NamespacedResourceClaim(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaim`
- **Error**: `SdkException<ReplaceResourceV1Beta2NamespacedResourceClaimError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceResourceV1Beta2NamespacedResourceClaimStatus
- **HTTP**: `PUT /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaims/{name}/status` (Default)
- **Signature**: `ReplaceResourceV1Beta2NamespacedResourceClaimStatus(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaim`
- **Error**: `SdkException<ReplaceResourceV1Beta2NamespacedResourceClaimStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceResourceV1Beta2NamespacedResourceClaimTemplate
- **HTTP**: `PUT /apis/resource.k8s.io/v1beta2/namespaces/{namespace}/resourceclaimtemplates/{name}` (Default)
- **Signature**: `ReplaceResourceV1Beta2NamespacedResourceClaimTemplate(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceClaimTemplate`
- **Error**: `SdkException<ReplaceResourceV1Beta2NamespacedResourceClaimTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceResourceV1Beta2ResourceSlice
- **HTTP**: `PUT /apis/resource.k8s.io/v1beta2/resourceslices/{name}` (Default)
- **Signature**: `ReplaceResourceV1Beta2ResourceSlice(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiResourceV1Beta2ResourceSlice`
- **Error**: `SdkException<ReplaceResourceV1Beta2ResourceSliceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2DeviceClass
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/deviceclasses/{name}` (Default)
- **Signature**: `WatchResourceV1Beta2DeviceClass(string name, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2DeviceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2DeviceClassList
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/deviceclasses` (Default)
- **Signature**: `WatchResourceV1Beta2DeviceClassList(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2DeviceClassListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2DeviceTaintRule
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/devicetaintrules/{name}` (Default)
- **Signature**: `WatchResourceV1Beta2DeviceTaintRule(string name, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2DeviceTaintRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2DeviceTaintRuleList
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/devicetaintrules` (Default)
- **Signature**: `WatchResourceV1Beta2DeviceTaintRuleList(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2DeviceTaintRuleListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2NamespacedResourceClaim
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/namespaces/{namespace}/resourceclaims/{name}` (Default)
- **Signature**: `WatchResourceV1Beta2NamespacedResourceClaim(string name, string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2NamespacedResourceClaimError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2NamespacedResourceClaimList
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/namespaces/{namespace}/resourceclaims` (Default)
- **Signature**: `WatchResourceV1Beta2NamespacedResourceClaimList(string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2NamespacedResourceClaimListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2NamespacedResourceClaimTemplate
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/namespaces/{namespace}/resourceclaimtemplates/{name}` (Default)
- **Signature**: `WatchResourceV1Beta2NamespacedResourceClaimTemplate(string name, string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2NamespacedResourceClaimTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2NamespacedResourceClaimTemplateList
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/namespaces/{namespace}/resourceclaimtemplates` (Default)
- **Signature**: `WatchResourceV1Beta2NamespacedResourceClaimTemplateList(string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2NamespacedResourceClaimTemplateListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2ResourceClaimListForAllNamespaces
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/resourceclaims` (Default)
- **Signature**: `WatchResourceV1Beta2ResourceClaimListForAllNamespaces(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2ResourceClaimListForAllNamespacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2ResourceClaimTemplateListForAllNamespaces
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/resourceclaimtemplates` (Default)
- **Signature**: `WatchResourceV1Beta2ResourceClaimTemplateListForAllNamespaces(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2ResourceClaimTemplateListForAllNamespacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2ResourceSlice
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/resourceslices/{name}` (Default)
- **Signature**: `WatchResourceV1Beta2ResourceSlice(string name, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2ResourceSliceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchResourceV1Beta2ResourceSliceList
- **HTTP**: `GET /apis/resource.k8s.io/v1beta2/watch/resourceslices` (Default)
- **Signature**: `WatchResourceV1Beta2ResourceSliceList(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchResourceV1Beta2ResourceSliceListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
