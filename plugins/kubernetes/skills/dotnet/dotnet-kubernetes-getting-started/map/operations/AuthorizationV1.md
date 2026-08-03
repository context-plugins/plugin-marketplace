# AuthorizationV1 — operations

Accessor: `client.AuthorizationV1` · Source: `Api/AuthorizationV1.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAuthorizationV1NamespacedLocalSubjectAccessReview
- **HTTP**: `POST /apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews` (Default)
- **Signature**: `CreateAuthorizationV1NamespacedLocalSubjectAccessReview(string @namespace, string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAuthorizationV1LocalSubjectAccessReview`
- **Error**: `SdkException<CreateAuthorizationV1NamespacedLocalSubjectAccessReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateAuthorizationV1SelfSubjectAccessReview
- **HTTP**: `POST /apis/authorization.k8s.io/v1/selfsubjectaccessreviews` (Default)
- **Signature**: `CreateAuthorizationV1SelfSubjectAccessReview(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAuthorizationV1SelfSubjectAccessReview`
- **Error**: `SdkException<CreateAuthorizationV1SelfSubjectAccessReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateAuthorizationV1SelfSubjectRulesReview
- **HTTP**: `POST /apis/authorization.k8s.io/v1/selfsubjectrulesreviews` (Default)
- **Signature**: `CreateAuthorizationV1SelfSubjectRulesReview(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAuthorizationV1SelfSubjectRulesReview`
- **Error**: `SdkException<CreateAuthorizationV1SelfSubjectRulesReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateAuthorizationV1SubjectAccessReview
- **HTTP**: `POST /apis/authorization.k8s.io/v1/subjectaccessreviews` (Default)
- **Signature**: `CreateAuthorizationV1SubjectAccessReview(string? dryRun, string? fieldManager, string? fieldValidation, string? pretty, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`dryRun` … `pretty`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dryRun` ← `dryRun`, `fieldManager` ← `fieldManager`, `fieldValidation` ← `fieldValidation`, `pretty` ← `pretty`
- **Returns**: `IoK8SApiAuthorizationV1SubjectAccessReview`
- **Error**: `SdkException<CreateAuthorizationV1SubjectAccessReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAuthorizationV1Apiresources
- **HTTP**: `GET /apis/authorization.k8s.io/v1/` (Default)
- **Signature**: `GetAuthorizationV1Apiresources(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1ApiresourceList`
- **Error**: `SdkException<GetAuthorizationV1ApiresourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
