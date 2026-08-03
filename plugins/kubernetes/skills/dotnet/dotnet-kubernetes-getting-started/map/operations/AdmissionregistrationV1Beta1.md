# AdmissionregistrationV1Beta1 — operations

Accessor: `client.AdmissionregistrationV1Beta1` · Source: `Api/AdmissionregistrationV1Beta1.cs` · 19 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAdmissionregistrationV1Beta1MutatingAdmissionPolicy
- **HTTP**: `POST /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicies` (Default)
- **Signature**: `CreateAdmissionregistrationV1Beta1MutatingAdmissionPolicy(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicy`
- **Error**: `SdkException<CreateAdmissionregistrationV1Beta1MutatingAdmissionPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding
- **HTTP**: `POST /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicybindings` (Default)
- **Signature**: `CreateAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding`
- **Error**: `SdkException<CreateAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAdmissionregistrationV1Beta1CollectionMutatingAdmissionPolicy
- **HTTP**: `DELETE /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicies` (Default)
- **Signature**: `DeleteAdmissionregistrationV1Beta1CollectionMutatingAdmissionPolicy(string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteAdmissionregistrationV1Beta1CollectionMutatingAdmissionPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAdmissionregistrationV1Beta1CollectionMutatingAdmissionPolicyBinding
- **HTTP**: `DELETE /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicybindings` (Default)
- **Signature**: `DeleteAdmissionregistrationV1Beta1CollectionMutatingAdmissionPolicyBinding(string? @continue, string? dryRun, string? fieldSelector, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, string? labelSelector, int? limit, bool? orphanDependents, string? propagationPolicy, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`@continue` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldSelector` ← `fieldSelector`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteAdmissionregistrationV1Beta1CollectionMutatingAdmissionPolicyBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAdmissionregistrationV1Beta1MutatingAdmissionPolicy
- **HTTP**: `DELETE /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicies/{name}` (Default)
- **Signature**: `DeleteAdmissionregistrationV1Beta1MutatingAdmissionPolicy(string name, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteAdmissionregistrationV1Beta1MutatingAdmissionPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding
- **HTTP**: `DELETE /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicybindings/{name}` (Default)
- **Signature**: `DeleteAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding(string name, string? dryRun, int? gracePeriodSeconds, bool? ignoreStoreReadErrorWithClusterBreakingPotential, bool? orphanDependents, string? propagationPolicy, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `gracePeriodSeconds` ← `gracePeriodSeconds`, `ignoreStoreReadErrorWithClusterBreakingPotential` ← `ignoreStoreReadErrorWithClusterBreakingPotential`, `orphanDependents` ← `orphanDependents`, `propagationPolicy` ← `propagationPolicy`, `pretty` ← `pretty`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Status`
- **Error**: `SdkException<DeleteAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAdmissionregistrationV1Beta1Apiresources
- **HTTP**: `GET /apis/admissionregistration.k8s.io/v1beta1/` (Default)
- **Signature**: `GetAdmissionregistrationV1Beta1Apiresources(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1ApiresourceList`
- **Error**: `SdkException<GetAdmissionregistrationV1Beta1ApiresourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAdmissionregistrationV1Beta1MutatingAdmissionPolicy
- **HTTP**: `GET /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicies` (Default)
- **Signature**: `ListAdmissionregistrationV1Beta1MutatingAdmissionPolicy(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicyList`
- **Error**: `SdkException<ListAdmissionregistrationV1Beta1MutatingAdmissionPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding
- **HTTP**: `GET /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicybindings` (Default)
- **Signature**: `ListAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingList`
- **Error**: `SdkException<ListAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchAdmissionregistrationV1Beta1MutatingAdmissionPolicy
- **HTTP**: `PATCH /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicies/{name}` (Default)
- **Signature**: `PatchAdmissionregistrationV1Beta1MutatingAdmissionPolicy(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicy`
- **Error**: `SdkException<PatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding
- **HTTP**: `PATCH /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicybindings/{name}` (Default)
- **Signature**: `PatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding(string name, string? dryRun, string? fieldManager, string? fieldValidation, bool? force, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `force` ← `force`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding`
- **Error**: `SdkException<PatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadAdmissionregistrationV1Beta1MutatingAdmissionPolicy
- **HTTP**: `GET /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicies/{name}` (Default)
- **Signature**: `ReadAdmissionregistrationV1Beta1MutatingAdmissionPolicy(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicy`
- **Error**: `SdkException<ReadAdmissionregistrationV1Beta1MutatingAdmissionPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding
- **HTTP**: `GET /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicybindings/{name}` (Default)
- **Signature**: `ReadAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding(string name, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pretty` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding`
- **Error**: `SdkException<ReadAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceAdmissionregistrationV1Beta1MutatingAdmissionPolicy
- **HTTP**: `PUT /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicies/{name}` (Default)
- **Signature**: `ReplaceAdmissionregistrationV1Beta1MutatingAdmissionPolicy(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicy`
- **Error**: `SdkException<ReplaceAdmissionregistrationV1Beta1MutatingAdmissionPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding
- **HTTP**: `PUT /apis/admissionregistration.k8s.io/v1beta1/mutatingadmissionpolicybindings/{name}` (Default)
- **Signature**: `ReplaceAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding(string name, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding`
- **Error**: `SdkException<ReplaceAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicy
- **HTTP**: `GET /apis/admissionregistration.k8s.io/v1beta1/watch/mutatingadmissionpolicies/{name}` (Default)
- **Signature**: `WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicy(string name, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding
- **HTTP**: `GET /apis/admissionregistration.k8s.io/v1beta1/watch/mutatingadmissionpolicybindings/{name}` (Default)
- **Signature**: `WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyBinding(string name, bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingList
- **HTTP**: `GET /apis/admissionregistration.k8s.io/v1beta1/watch/mutatingadmissionpolicybindings` (Default)
- **Signature**: `WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingList(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyBindingListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyList
- **HTTP**: `GET /apis/admissionregistration.k8s.io/v1beta1/watch/mutatingadmissionpolicies` (Default)
- **Signature**: `WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyList(bool? allowWatchBookmarks, string? @continue, string? fieldSelector, string? labelSelector, int? limit, string? pretty, string? resourceVersion, string? resourceVersionMatch, bool? sendInitialEvents, string? shardSelector, int? timeoutSeconds, bool? watch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`allowWatchBookmarks` … `watch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `allowWatchBookmarks` ← `allowWatchBookmarks`, `fieldSelector` ← `fieldSelector`, `labelSelector` ← `labelSelector`, `limit` ← `limit`, `pretty` ← `pretty`, `resourceVersion` ← `resourceVersion`, `resourceVersionMatch` ← `resourceVersionMatch`, `sendInitialEvents` ← `sendInitialEvents`, `shardSelector` ← `shardSelector`, `timeoutSeconds` ← `timeoutSeconds`, `watch` ← `watch`
- **Returns**: `IoK8SApimachineryPkgApisMetaV1WatchEvent`
- **Error**: `SdkException<WatchAdmissionregistrationV1Beta1MutatingAdmissionPolicyListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
