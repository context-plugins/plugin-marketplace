# StoragemigrationV1Beta1 — operations

Accessor: `client.StoragemigrationV1Beta1` · Source: `Api/StoragemigrationV1Beta1.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateStoragemigrationV1Beta1StorageVersionMigration
- **HTTP**: `POST /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations` (Default)
- **Signature**: `CreateStoragemigrationV1Beta1StorageVersionMigration(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiStoragemigrationV1Beta1StorageVersionMigration`
- **Error**: `SdkException<CreateStoragemigrationV1Beta1StorageVersionMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteStoragemigrationV1Beta1CollectionStorageVersionMigration
- **HTTP**: `DELETE /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations` (Default)
- **Signature**: `DeleteStoragemigrationV1Beta1CollectionStorageVersionMigration(string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteStoragemigrationV1Beta1CollectionStorageVersionMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteStoragemigrationV1Beta1StorageVersionMigration
- **HTTP**: `DELETE /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations/{name}` (Default)
- **Signature**: `DeleteStoragemigrationV1Beta1StorageVersionMigration(string name, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteStoragemigrationV1Beta1StorageVersionMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStoragemigrationV1Beta1Apiresources
- **HTTP**: `GET /apis/storagemigration.k8s.io/v1beta1/` (Default)
- **Signature**: `GetStoragemigrationV1Beta1Apiresources(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1ApiresourceList`
- **Error**: `SdkException<GetStoragemigrationV1Beta1ApiresourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListStoragemigrationV1Beta1StorageVersionMigration
- **HTTP**: `GET /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations` (Default)
- **Signature**: `ListStoragemigrationV1Beta1StorageVersionMigration(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiStoragemigrationV1Beta1StorageVersionMigrationList`
- **Error**: `SdkException<ListStoragemigrationV1Beta1StorageVersionMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchStoragemigrationV1Beta1StorageVersionMigration
- **HTTP**: `PATCH /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations/{name}` (Default)
- **Signature**: `PatchStoragemigrationV1Beta1StorageVersionMigration(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiStoragemigrationV1Beta1StorageVersionMigration`
- **Error**: `SdkException<PatchStoragemigrationV1Beta1StorageVersionMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchStoragemigrationV1Beta1StorageVersionMigrationStatus
- **HTTP**: `PATCH /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations/{name}/status` (Default)
- **Signature**: `PatchStoragemigrationV1Beta1StorageVersionMigrationStatus(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiStoragemigrationV1Beta1StorageVersionMigration`
- **Error**: `SdkException<PatchStoragemigrationV1Beta1StorageVersionMigrationStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadStoragemigrationV1Beta1StorageVersionMigration
- **HTTP**: `GET /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations/{name}` (Default)
- **Signature**: `ReadStoragemigrationV1Beta1StorageVersionMigration(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiStoragemigrationV1Beta1StorageVersionMigration`
- **Error**: `SdkException<ReadStoragemigrationV1Beta1StorageVersionMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadStoragemigrationV1Beta1StorageVersionMigrationStatus
- **HTTP**: `GET /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations/{name}/status` (Default)
- **Signature**: `ReadStoragemigrationV1Beta1StorageVersionMigrationStatus(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiStoragemigrationV1Beta1StorageVersionMigration`
- **Error**: `SdkException<ReadStoragemigrationV1Beta1StorageVersionMigrationStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceStoragemigrationV1Beta1StorageVersionMigration
- **HTTP**: `PUT /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations/{name}` (Default)
- **Signature**: `ReplaceStoragemigrationV1Beta1StorageVersionMigration(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiStoragemigrationV1Beta1StorageVersionMigration`
- **Error**: `SdkException<ReplaceStoragemigrationV1Beta1StorageVersionMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceStoragemigrationV1Beta1StorageVersionMigrationStatus
- **HTTP**: `PUT /apis/storagemigration.k8s.io/v1beta1/storageversionmigrations/{name}/status` (Default)
- **Signature**: `ReplaceStoragemigrationV1Beta1StorageVersionMigrationStatus(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiStoragemigrationV1Beta1StorageVersionMigration`
- **Error**: `SdkException<ReplaceStoragemigrationV1Beta1StorageVersionMigrationStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchStoragemigrationV1Beta1StorageVersionMigration
- **HTTP**: `GET /apis/storagemigration.k8s.io/v1beta1/watch/storageversionmigrations/{name}` (Default)
- **Signature**: `WatchStoragemigrationV1Beta1StorageVersionMigration(string name, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchStoragemigrationV1Beta1StorageVersionMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchStoragemigrationV1Beta1StorageVersionMigrationList
- **HTTP**: `GET /apis/storagemigration.k8s.io/v1beta1/watch/storageversionmigrations` (Default)
- **Signature**: `WatchStoragemigrationV1Beta1StorageVersionMigrationList(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchStoragemigrationV1Beta1StorageVersionMigrationListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
