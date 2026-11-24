<!-- Generated file — do not edit; regenerated with the SDK. -->

# DisputesApi — operations

Accessor: `client.DisputesApi` · Source: `src/Tabby/Api/DisputesApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetDispute

- **Auth**: `options.BearerAuth`
- **Signature**: `GetDispute(GetDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`, `DisputeIdTemplate`
- **Returns**: `Dispute1`
- **Error**: `ApiException<GetDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError404DisputeNotFound([NotNullWhen(true)] out Error404DisputeNotFound? value)` [400, 404] · `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDisputeRequest` | `src/Tabby/Requests/DisputesApi/GetDisputeRequest.cs` |
| `Dispute1` | `src/Tabby/Models/Dispute1.cs` |
| `GetDisputeError` | `src/Tabby/Errors/GetDisputeError.cs` |
| `Error404DisputeNotFound` | `src/Tabby/Models/Error404DisputeNotFound.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |

### GetDisputes

- **Auth**: `options.BearerAuth`
- **Signature**: `GetDisputes(GetDisputesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `statuses` ← `Statuses`, `created_at_gte` ← `CreatedAtGte`, `created_at_lte` ← `CreatedAtLte`, `page_token` ← `PageToken`
- **Returns**: `Disputes`
- **Error**: `ApiException<GetDisputesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError404DisputeNotFound([NotNullWhen(true)] out Error404DisputeNotFound? value)` [400] · `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDisputesRequest` | `src/Tabby/Requests/DisputesApi/GetDisputesRequest.cs` |
| `Statuses` | `src/Tabby/Models/Enums/Statuses.cs` |
| `Disputes` | `src/Tabby/Models/Disputes.cs` |
| `GetDisputesError` | `src/Tabby/Errors/GetDisputesError.cs` |
| `Error404DisputeNotFound` | `src/Tabby/Models/Error404DisputeNotFound.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |

### PostDisputeProvideEvidence

- **Auth**: `options.BearerAuth`
- **Signature**: `PostDisputeProvideEvidence(PostDisputeProvideEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`, `DisputeIdTemplate`, `Body`
- **Returns**: `Evidence`
- **Error**: `ApiException<PostDisputeProvideEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError404DisputeNotFound([NotNullWhen(true)] out Error404DisputeNotFound? value)` [400, 404] · `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [401] · `TryGetError400([NotNullWhen(true)] out Error400? value)` [409] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostDisputeProvideEvidenceRequest` | `src/Tabby/Requests/DisputesApi/PostDisputeProvideEvidenceRequest.cs` |
| `ApiV1DisputesProvideEvidenceRequest` | `src/Tabby/Models/ApiV1DisputesProvideEvidenceRequest.cs` |
| `Evidence` | `src/Tabby/Models/Evidence.cs` |
| `PostDisputeProvideEvidenceError` | `src/Tabby/Errors/PostDisputeProvideEvidenceError.cs` |
| `Error404DisputeNotFound` | `src/Tabby/Models/Error404DisputeNotFound.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |
| `Error400` | `src/Tabby/Models/Error400.cs` |

### PostDisputesApprove

- **Auth**: `options.BearerAuth`
- **Signature**: `PostDisputesApprove(PostDisputesApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DisputesApprove`
- **Error**: `ApiException<PostDisputesApproveError>` — **Case A (typed)**
- **Error accessors**: `TryGetError404DisputeNotFound([NotNullWhen(true)] out Error404DisputeNotFound? value)` [400] · `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostDisputesApproveRequest` | `src/Tabby/Requests/DisputesApi/PostDisputesApproveRequest.cs` |
| `ApiV1DisputesApproveRequest` | `src/Tabby/Models/ApiV1DisputesApproveRequest.cs` |
| `DisputesApprove` | `src/Tabby/Models/DisputesApprove.cs` |
| `PostDisputesApproveError` | `src/Tabby/Errors/PostDisputesApproveError.cs` |
| `Error404DisputeNotFound` | `src/Tabby/Models/Error404DisputeNotFound.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |

### PostDisputesChallenge

- **Auth**: `options.BearerAuth`
- **Signature**: `PostDisputesChallenge(PostDisputesChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DisputesChallenge`
- **Error**: `ApiException<PostDisputesChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError404DisputeNotFound([NotNullWhen(true)] out Error404DisputeNotFound? value)` [400] · `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostDisputesChallengeRequest` | `src/Tabby/Requests/DisputesApi/PostDisputesChallengeRequest.cs` |
| `ApiV1DisputesChallengeRequest` | `src/Tabby/Models/ApiV1DisputesChallengeRequest.cs` |
| `DisputesChallenge` | `src/Tabby/Models/DisputesChallenge.cs` |
| `PostDisputesChallengeError` | `src/Tabby/Errors/PostDisputesChallengeError.cs` |
| `Error404DisputeNotFound` | `src/Tabby/Models/Error404DisputeNotFound.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |

### PostUploadAttachment

- **Auth**: `options.BearerAuth`
- **Signature**: `PostUploadAttachment(PostUploadAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Attachment`
- **Returns**: `DisputeAttachmentUpload`
- **Error**: `ApiException<PostUploadAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError404DisputeNotFound([NotNullWhen(true)] out Error404DisputeNotFound? value)` [400] · `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostUploadAttachmentRequest` | `src/Tabby/Requests/DisputesApi/PostUploadAttachmentRequest.cs` |
| `DisputeAttachmentUpload` | `src/Tabby/Models/DisputeAttachmentUpload.cs` |
| `PostUploadAttachmentError` | `src/Tabby/Errors/PostUploadAttachmentError.cs` |
| `Error404DisputeNotFound` | `src/Tabby/Models/Error404DisputeNotFound.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |

