<!-- Generated file — do not edit; regenerated with the SDK. -->

# Playbooks — operations

Accessor: `client.Playbooks` · Source: `src/Deliverd/Api/Playbooks.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Playbooks

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Playbooks(GetApiV1PlaybooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `kind` ← `Kind`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1PlaybooksRequest` | `src/Deliverd/Requests/Playbooks/GetApiV1PlaybooksRequest.cs` |
| `KindDeliverdDevPlaybooksApi` | `src/Deliverd/Models/Enums/KindDeliverdDevPlaybooksApi.cs` |

### GetApiV1PlaybooksById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1PlaybooksById(GetApiV1PlaybooksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<GetApiV1PlaybooksByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1PlaybooksByIdRequest` | `src/Deliverd/Requests/Playbooks/GetApiV1PlaybooksByIdRequest.cs` |
| `GetApiV1PlaybooksByIdError` | `src/Deliverd/Errors/GetApiV1PlaybooksByIdError.cs` |

### PatchApiV1PlaybooksById

- **Auth**: `options.BearerAuth`
- **Signature**: `PatchApiV1PlaybooksById(PatchApiV1PlaybooksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PatchApiV1PlaybooksByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchApiV1PlaybooksByIdRequest` | `src/Deliverd/Requests/Playbooks/PatchApiV1PlaybooksByIdRequest.cs` |
| `ApiV1PlaybooksRequest` | `src/Deliverd/Models/ApiV1PlaybooksRequest.cs` |
| `PatchApiV1PlaybooksByIdError` | `src/Deliverd/Errors/PatchApiV1PlaybooksByIdError.cs` |

### PostApiV1Playbooks

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Playbooks(PostApiV1PlaybooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1PlaybooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1PlaybooksRequest` | `src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksRequest.cs` |
| `ApiV1PlaybooksRequest` | `src/Deliverd/Models/ApiV1PlaybooksRequest.cs` |
| `PostApiV1PlaybooksError` | `src/Deliverd/Errors/PostApiV1PlaybooksError.cs` |

### PostApiV1PlaybooksByIdApproval

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1PlaybooksByIdApproval(PostApiV1PlaybooksByIdApprovalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1PlaybooksByIdApprovalError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1PlaybooksByIdApprovalRequest` | `src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksByIdApprovalRequest.cs` |
| `ApiV1PlaybooksApprovalRequest` | `src/Deliverd/Models/ApiV1PlaybooksApprovalRequest.cs` |
| `PostApiV1PlaybooksByIdApprovalError` | `src/Deliverd/Errors/PostApiV1PlaybooksByIdApprovalError.cs` |

### PostApiV1PlaybooksByIdStart

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1PlaybooksByIdStart(PostApiV1PlaybooksByIdStartRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1PlaybooksByIdStartError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1PlaybooksByIdStartRequest` | `src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksByIdStartRequest.cs` |
| `ApiV1PlaybooksStartRequest` | `src/Deliverd/Models/ApiV1PlaybooksStartRequest.cs` |
| `PostApiV1PlaybooksByIdStartError` | `src/Deliverd/Errors/PostApiV1PlaybooksByIdStartError.cs` |

### PostApiV1PlaybooksByIdUse

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1PlaybooksByIdUse(PostApiV1PlaybooksByIdUseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1PlaybooksByIdUseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1PlaybooksByIdUseRequest` | `src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksByIdUseRequest.cs` |
| `ApiV1PlaybooksUseRequest` | `src/Deliverd/Models/ApiV1PlaybooksUseRequest.cs` |
| `PostApiV1PlaybooksByIdUseError` | `src/Deliverd/Errors/PostApiV1PlaybooksByIdUseError.cs` |

### PostApiV1PlaybooksByIdVersions

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1PlaybooksByIdVersions(PostApiV1PlaybooksByIdVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1PlaybooksByIdVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1PlaybooksByIdVersionsRequest` | `src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksByIdVersionsRequest.cs` |
| `ApiV1PlaybooksVersionsRequest` | `src/Deliverd/Models/ApiV1PlaybooksVersionsRequest.cs` |
| `PostApiV1PlaybooksByIdVersionsError` | `src/Deliverd/Errors/PostApiV1PlaybooksByIdVersionsError.cs` |

