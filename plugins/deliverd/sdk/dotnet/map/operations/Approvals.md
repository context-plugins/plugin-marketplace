<!-- Generated file — do not edit; regenerated with the SDK. -->

# Approvals — operations

Accessor: `client.Approvals` · Source: `src/Deliverd/Api/Approvals.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Approvals

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Approvals(GetApiV1ApprovalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `status` ← `Status`, `externalId` ← `ExternalId`, `approver` ← `Approver`
- **Returns**: `ApiV1ApprovalsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ApprovalsRequest` | `src/Deliverd/Requests/Approvals/GetApiV1ApprovalsRequest.cs` |
| `Status1` | `src/Deliverd/Models/Enums/Status1.cs` |
| `ApiV1ApprovalsResponse1` | `src/Deliverd/Models/ApiV1ApprovalsResponse1.cs` |

### GetApiV1ApprovalsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ApprovalsById(GetApiV1ApprovalsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ApprovalsResponse`
- **Error**: `ApiException<GetApiV1ApprovalsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ApprovalsByIdRequest` | `src/Deliverd/Requests/Approvals/GetApiV1ApprovalsByIdRequest.cs` |
| `ApiV1ApprovalsResponse` | `src/Deliverd/Models/ApiV1ApprovalsResponse.cs` |
| `GetApiV1ApprovalsByIdError` | `src/Deliverd/Errors/GetApiV1ApprovalsByIdError.cs` |

### PostApiV1Approvals

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Approvals(PostApiV1ApprovalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ApprovalsResponse`
- **Error**: `ApiException<PostApiV1ApprovalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ApprovalsRequest` | `src/Deliverd/Requests/Approvals/PostApiV1ApprovalsRequest.cs` |
| `ApiV1ApprovalsRequest` | `src/Deliverd/Models/ApiV1ApprovalsRequest.cs` |
| `ApiV1ApprovalsResponse` | `src/Deliverd/Models/ApiV1ApprovalsResponse.cs` |
| `PostApiV1ApprovalsError` | `src/Deliverd/Errors/PostApiV1ApprovalsError.cs` |

### PostApiV1ApprovalsByIdAnswers

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ApprovalsByIdAnswers(PostApiV1ApprovalsByIdAnswersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ApprovalsAnswersResponse`
- **Error**: `ApiException<PostApiV1ApprovalsByIdAnswersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ApprovalsByIdAnswersRequest` | `src/Deliverd/Requests/Approvals/PostApiV1ApprovalsByIdAnswersRequest.cs` |
| `ApiV1ApprovalsAnswersRequest` | `src/Deliverd/Models/ApiV1ApprovalsAnswersRequest.cs` |
| `ApiV1ApprovalsAnswersResponse` | `src/Deliverd/Models/ApiV1ApprovalsAnswersResponse.cs` |
| `PostApiV1ApprovalsByIdAnswersError` | `src/Deliverd/Errors/PostApiV1ApprovalsByIdAnswersError.cs` |

### PostApiV1ApprovalsByIdCancel

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ApprovalsByIdCancel(PostApiV1ApprovalsByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ApprovalsCancelResponse`
- **Error**: `ApiException<PostApiV1ApprovalsByIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ApprovalsByIdCancelRequest` | `src/Deliverd/Requests/Approvals/PostApiV1ApprovalsByIdCancelRequest.cs` |
| `ApiV1ApprovalsCancelResponse` | `src/Deliverd/Models/ApiV1ApprovalsCancelResponse.cs` |
| `PostApiV1ApprovalsByIdCancelError` | `src/Deliverd/Errors/PostApiV1ApprovalsByIdCancelError.cs` |

### PostApiV1ApprovalsByIdSessions

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ApprovalsByIdSessions(PostApiV1ApprovalsByIdSessionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ApprovalsSessionsResponse`
- **Error**: `ApiException<PostApiV1ApprovalsByIdSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ApprovalsByIdSessionsRequest` | `src/Deliverd/Requests/Approvals/PostApiV1ApprovalsByIdSessionsRequest.cs` |
| `ApiV1ApprovalsSessionsRequest` | `src/Deliverd/Models/ApiV1ApprovalsSessionsRequest.cs` |
| `ApiV1ApprovalsSessionsResponse` | `src/Deliverd/Models/ApiV1ApprovalsSessionsResponse.cs` |
| `PostApiV1ApprovalsByIdSessionsError` | `src/Deliverd/Errors/PostApiV1ApprovalsByIdSessionsError.cs` |

