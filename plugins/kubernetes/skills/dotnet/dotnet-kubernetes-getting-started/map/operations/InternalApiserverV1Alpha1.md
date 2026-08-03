# InternalApiserverV1Alpha1 — operations

Accessor: `client.InternalApiserverV1Alpha1` · Source: `Api/InternalApiserverV1Alpha1.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInternalApiserverV1Alpha1StorageVersion
- **HTTP**: `POST /apis/internal.apiserver.k8s.io/v1alpha1/storageversions` (Default)
- **Signature**: `CreateInternalApiserverV1Alpha1StorageVersion(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiApiserverinternalV1Alpha1StorageVersion`
- **Error**: `SdkException<CreateInternalApiserverV1Alpha1StorageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInternalApiserverV1Alpha1CollectionStorageVersion
- **HTTP**: `DELETE /apis/internal.apiserver.k8s.io/v1alpha1/storageversions` (Default)
- **Signature**: `DeleteInternalApiserverV1Alpha1CollectionStorageVersion(string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteInternalApiserverV1Alpha1CollectionStorageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInternalApiserverV1Alpha1StorageVersion
- **HTTP**: `DELETE /apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}` (Default)
- **Signature**: `DeleteInternalApiserverV1Alpha1StorageVersion(string name, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteInternalApiserverV1Alpha1StorageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetInternalApiserverV1Alpha1Apiresources
- **HTTP**: `GET /apis/internal.apiserver.k8s.io/v1alpha1/` (Default)
- **Signature**: `GetInternalApiserverV1Alpha1Apiresources(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1ApiresourceList`
- **Error**: `SdkException<GetInternalApiserverV1Alpha1ApiresourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListInternalApiserverV1Alpha1StorageVersion
- **HTTP**: `GET /apis/internal.apiserver.k8s.io/v1alpha1/storageversions` (Default)
- **Signature**: `ListInternalApiserverV1Alpha1StorageVersion(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiApiserverinternalV1Alpha1StorageVersionList`
- **Error**: `SdkException<ListInternalApiserverV1Alpha1StorageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchInternalApiserverV1Alpha1StorageVersion
- **HTTP**: `PATCH /apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}` (Default)
- **Signature**: `PatchInternalApiserverV1Alpha1StorageVersion(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiApiserverinternalV1Alpha1StorageVersion`
- **Error**: `SdkException<PatchInternalApiserverV1Alpha1StorageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchInternalApiserverV1Alpha1StorageVersionStatus
- **HTTP**: `PATCH /apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}/status` (Default)
- **Signature**: `PatchInternalApiserverV1Alpha1StorageVersionStatus(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiApiserverinternalV1Alpha1StorageVersion`
- **Error**: `SdkException<PatchInternalApiserverV1Alpha1StorageVersionStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadInternalApiserverV1Alpha1StorageVersion
- **HTTP**: `GET /apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}` (Default)
- **Signature**: `ReadInternalApiserverV1Alpha1StorageVersion(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiApiserverinternalV1Alpha1StorageVersion`
- **Error**: `SdkException<ReadInternalApiserverV1Alpha1StorageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadInternalApiserverV1Alpha1StorageVersionStatus
- **HTTP**: `GET /apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}/status` (Default)
- **Signature**: `ReadInternalApiserverV1Alpha1StorageVersionStatus(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiApiserverinternalV1Alpha1StorageVersion`
- **Error**: `SdkException<ReadInternalApiserverV1Alpha1StorageVersionStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceInternalApiserverV1Alpha1StorageVersion
- **HTTP**: `PUT /apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}` (Default)
- **Signature**: `ReplaceInternalApiserverV1Alpha1StorageVersion(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiApiserverinternalV1Alpha1StorageVersion`
- **Error**: `SdkException<ReplaceInternalApiserverV1Alpha1StorageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceInternalApiserverV1Alpha1StorageVersionStatus
- **HTTP**: `PUT /apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}/status` (Default)
- **Signature**: `ReplaceInternalApiserverV1Alpha1StorageVersionStatus(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiApiserverinternalV1Alpha1StorageVersion`
- **Error**: `SdkException<ReplaceInternalApiserverV1Alpha1StorageVersionStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchInternalApiserverV1Alpha1StorageVersion
- **HTTP**: `GET /apis/internal.apiserver.k8s.io/v1alpha1/watch/storageversions/{name}` (Default)
- **Signature**: `WatchInternalApiserverV1Alpha1StorageVersion(string name, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchInternalApiserverV1Alpha1StorageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchInternalApiserverV1Alpha1StorageVersionList
- **HTTP**: `GET /apis/internal.apiserver.k8s.io/v1alpha1/watch/storageversions` (Default)
- **Signature**: `WatchInternalApiserverV1Alpha1StorageVersionList(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchInternalApiserverV1Alpha1StorageVersionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
