# BatchV1 — operations

Accessor: `client.BatchV1` · Source: `Api/BatchV1.cs` · 29 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBatchV1NamespacedCronJob
- **HTTP**: `POST /apis/batch/v1/namespaces/{namespace}/cronjobs` (Default)
- **Signature**: `CreateBatchV1NamespacedCronJob(string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1CronJob`
- **Error**: `SdkException<CreateBatchV1NamespacedCronJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBatchV1NamespacedJob
- **HTTP**: `POST /apis/batch/v1/namespaces/{namespace}/jobs` (Default)
- **Signature**: `CreateBatchV1NamespacedJob(string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1Job`
- **Error**: `SdkException<CreateBatchV1NamespacedJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBatchV1CollectionNamespacedCronJob
- **HTTP**: `DELETE /apis/batch/v1/namespaces/{namespace}/cronjobs` (Default)
- **Signature**: `DeleteBatchV1CollectionNamespacedCronJob(string @namespace, string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteBatchV1CollectionNamespacedCronJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBatchV1CollectionNamespacedJob
- **HTTP**: `DELETE /apis/batch/v1/namespaces/{namespace}/jobs` (Default)
- **Signature**: `DeleteBatchV1CollectionNamespacedJob(string @namespace, string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteBatchV1CollectionNamespacedJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBatchV1NamespacedCronJob
- **HTTP**: `DELETE /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}` (Default)
- **Signature**: `DeleteBatchV1NamespacedCronJob(string name, string @namespace, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteBatchV1NamespacedCronJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBatchV1NamespacedJob
- **HTTP**: `DELETE /apis/batch/v1/namespaces/{namespace}/jobs/{name}` (Default)
- **Signature**: `DeleteBatchV1NamespacedJob(string name, string @namespace, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteBatchV1NamespacedJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBatchV1Apiresources
- **HTTP**: `GET /apis/batch/v1/` (Default)
- **Signature**: `GetBatchV1Apiresources(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1ApiresourceList`
- **Error**: `SdkException<GetBatchV1ApiresourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListBatchV1CronJobForAllNamespaces
- **HTTP**: `GET /apis/batch/v1/cronjobs` (Default)
- **Signature**: `ListBatchV1CronJobForAllNamespaces(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApiBatchV1CronJobList`
- **Error**: `SdkException<ListBatchV1CronJobForAllNamespacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListBatchV1JobForAllNamespaces
- **HTTP**: `GET /apis/batch/v1/jobs` (Default)
- **Signature**: `ListBatchV1JobForAllNamespaces(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApiBatchV1JobList`
- **Error**: `SdkException<ListBatchV1JobForAllNamespacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListBatchV1NamespacedCronJob
- **HTTP**: `GET /apis/batch/v1/namespaces/{namespace}/cronjobs` (Default)
- **Signature**: `ListBatchV1NamespacedCronJob(string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1CronJobList`
- **Error**: `SdkException<ListBatchV1NamespacedCronJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListBatchV1NamespacedJob
- **HTTP**: `GET /apis/batch/v1/namespaces/{namespace}/jobs` (Default)
- **Signature**: `ListBatchV1NamespacedJob(string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1JobList`
- **Error**: `SdkException<ListBatchV1NamespacedJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBatchV1NamespacedCronJob
- **HTTP**: `PATCH /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}` (Default)
- **Signature**: `PatchBatchV1NamespacedCronJob(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1CronJob`
- **Error**: `SdkException<PatchBatchV1NamespacedCronJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBatchV1NamespacedCronJobStatus
- **HTTP**: `PATCH /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status` (Default)
- **Signature**: `PatchBatchV1NamespacedCronJobStatus(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1CronJob`
- **Error**: `SdkException<PatchBatchV1NamespacedCronJobStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBatchV1NamespacedJob
- **HTTP**: `PATCH /apis/batch/v1/namespaces/{namespace}/jobs/{name}` (Default)
- **Signature**: `PatchBatchV1NamespacedJob(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1Job`
- **Error**: `SdkException<PatchBatchV1NamespacedJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBatchV1NamespacedJobStatus
- **HTTP**: `PATCH /apis/batch/v1/namespaces/{namespace}/jobs/{name}/status` (Default)
- **Signature**: `PatchBatchV1NamespacedJobStatus(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1Job`
- **Error**: `SdkException<PatchBatchV1NamespacedJobStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadBatchV1NamespacedCronJob
- **HTTP**: `GET /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}` (Default)
- **Signature**: `ReadBatchV1NamespacedCronJob(string name, string @namespace, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1CronJob`
- **Error**: `SdkException<ReadBatchV1NamespacedCronJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadBatchV1NamespacedCronJobStatus
- **HTTP**: `GET /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status` (Default)
- **Signature**: `ReadBatchV1NamespacedCronJobStatus(string name, string @namespace, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1CronJob`
- **Error**: `SdkException<ReadBatchV1NamespacedCronJobStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadBatchV1NamespacedJob
- **HTTP**: `GET /apis/batch/v1/namespaces/{namespace}/jobs/{name}` (Default)
- **Signature**: `ReadBatchV1NamespacedJob(string name, string @namespace, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1Job`
- **Error**: `SdkException<ReadBatchV1NamespacedJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadBatchV1NamespacedJobStatus
- **HTTP**: `GET /apis/batch/v1/namespaces/{namespace}/jobs/{name}/status` (Default)
- **Signature**: `ReadBatchV1NamespacedJobStatus(string name, string @namespace, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1Job`
- **Error**: `SdkException<ReadBatchV1NamespacedJobStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceBatchV1NamespacedCronJob
- **HTTP**: `PUT /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}` (Default)
- **Signature**: `ReplaceBatchV1NamespacedCronJob(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1CronJob`
- **Error**: `SdkException<ReplaceBatchV1NamespacedCronJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceBatchV1NamespacedCronJobStatus
- **HTTP**: `PUT /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status` (Default)
- **Signature**: `ReplaceBatchV1NamespacedCronJobStatus(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1CronJob`
- **Error**: `SdkException<ReplaceBatchV1NamespacedCronJobStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceBatchV1NamespacedJob
- **HTTP**: `PUT /apis/batch/v1/namespaces/{namespace}/jobs/{name}` (Default)
- **Signature**: `ReplaceBatchV1NamespacedJob(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1Job`
- **Error**: `SdkException<ReplaceBatchV1NamespacedJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceBatchV1NamespacedJobStatus
- **HTTP**: `PUT /apis/batch/v1/namespaces/{namespace}/jobs/{name}/status` (Default)
- **Signature**: `ReplaceBatchV1NamespacedJobStatus(string name, string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiBatchV1Job`
- **Error**: `SdkException<ReplaceBatchV1NamespacedJobStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchBatchV1CronJobListForAllNamespaces
- **HTTP**: `GET /apis/batch/v1/watch/cronjobs` (Default)
- **Signature**: `WatchBatchV1CronJobListForAllNamespaces(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchBatchV1CronJobListForAllNamespacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchBatchV1JobListForAllNamespaces
- **HTTP**: `GET /apis/batch/v1/watch/jobs` (Default)
- **Signature**: `WatchBatchV1JobListForAllNamespaces(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchBatchV1JobListForAllNamespacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchBatchV1NamespacedCronJob
- **HTTP**: `GET /apis/batch/v1/watch/namespaces/{namespace}/cronjobs/{name}` (Default)
- **Signature**: `WatchBatchV1NamespacedCronJob(string name, string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchBatchV1NamespacedCronJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchBatchV1NamespacedCronJobList
- **HTTP**: `GET /apis/batch/v1/watch/namespaces/{namespace}/cronjobs` (Default)
- **Signature**: `WatchBatchV1NamespacedCronJobList(string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchBatchV1NamespacedCronJobListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchBatchV1NamespacedJob
- **HTTP**: `GET /apis/batch/v1/watch/namespaces/{namespace}/jobs/{name}` (Default)
- **Signature**: `WatchBatchV1NamespacedJob(string name, string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchBatchV1NamespacedJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchBatchV1NamespacedJobList
- **HTTP**: `GET /apis/batch/v1/watch/namespaces/{namespace}/jobs` (Default)
- **Signature**: `WatchBatchV1NamespacedJobList(string @namespace, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchBatchV1NamespacedJobListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
