<!-- Generated file — do not edit; regenerated with the SDK. -->

# Flows — operations

Accessor: `client.Flows` · Source: `src/Deliverd/Api/Flows.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Flows

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Flows(GetApiV1FlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `status` ← `Status`, `externalId` ← `ExternalId`
- **Returns**: `ApiV1FlowsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1FlowsRequest` | `src/Deliverd/Requests/Flows/GetApiV1FlowsRequest.cs` |
| `StatusDeliverdDevFlowsApi` | `src/Deliverd/Models/Enums/StatusDeliverdDevFlowsApi.cs` |
| `ApiV1FlowsResponse1` | `src/Deliverd/Models/ApiV1FlowsResponse1.cs` |

### GetApiV1FlowsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1FlowsById(GetApiV1FlowsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1FlowsResponse`
- **Error**: `ApiException<GetApiV1FlowsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1FlowsByIdRequest` | `src/Deliverd/Requests/Flows/GetApiV1FlowsByIdRequest.cs` |
| `ApiV1FlowsResponse` | `src/Deliverd/Models/ApiV1FlowsResponse.cs` |
| `GetApiV1FlowsByIdError` | `src/Deliverd/Errors/GetApiV1FlowsByIdError.cs` |

### GetApiV1FlowsByIdEvidence

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1FlowsByIdEvidence(GetApiV1FlowsByIdEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<GetApiV1FlowsByIdEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1FlowsByIdEvidenceRequest` | `src/Deliverd/Requests/Flows/GetApiV1FlowsByIdEvidenceRequest.cs` |
| `Format` | `src/Deliverd/Models/Enums/Format.cs` |
| `GetApiV1FlowsByIdEvidenceError` | `src/Deliverd/Errors/GetApiV1FlowsByIdEvidenceError.cs` |

### PostApiV1Flows

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Flows(PostApiV1FlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1FlowsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1FlowsRequest` | `src/Deliverd/Requests/Flows/PostApiV1FlowsRequest.cs` |
| `ApiV1FlowsRequest` | `src/Deliverd/Models/ApiV1FlowsRequest.cs` |
| `ApiV1FlowsResponse` | `src/Deliverd/Models/ApiV1FlowsResponse.cs` |

### PostApiV1FlowsByIdCancel

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1FlowsByIdCancel(PostApiV1FlowsByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1FlowsCancelResponse`
- **Error**: `ApiException<PostApiV1FlowsByIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1FlowsByIdCancelRequest` | `src/Deliverd/Requests/Flows/PostApiV1FlowsByIdCancelRequest.cs` |
| `ApiV1FlowsCancelResponse` | `src/Deliverd/Models/ApiV1FlowsCancelResponse.cs` |
| `PostApiV1FlowsByIdCancelError` | `src/Deliverd/Errors/PostApiV1FlowsByIdCancelError.cs` |

### PostApiV1FlowsByIdComplete

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1FlowsByIdComplete(PostApiV1FlowsByIdCompleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1FlowsCompleteResponse`
- **Error**: `ApiException<PostApiV1FlowsByIdCompleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1FlowsByIdCompleteRequest` | `src/Deliverd/Requests/Flows/PostApiV1FlowsByIdCompleteRequest.cs` |
| `ApiV1FlowsCompleteResponse` | `src/Deliverd/Models/ApiV1FlowsCompleteResponse.cs` |
| `PostApiV1FlowsByIdCompleteError` | `src/Deliverd/Errors/PostApiV1FlowsByIdCompleteError.cs` |

