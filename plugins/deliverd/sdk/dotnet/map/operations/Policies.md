<!-- Generated file — do not edit; regenerated with the SDK. -->

# Policies — operations

Accessor: `client.Policies` · Source: `src/Deliverd/Api/Policies.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Policies

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Policies(GetApiV1PoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1PoliciesResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1PoliciesRequest` | `src/Deliverd/Requests/Policies/GetApiV1PoliciesRequest.cs` |
| `ApiV1PoliciesResponse1` | `src/Deliverd/Models/ApiV1PoliciesResponse1.cs` |

### PostApiV1Policies

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Policies(PostApiV1PoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1PoliciesResponse`
- **Error**: `ApiException<PostApiV1PoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Policies400Error1([NotNullWhen(true)] out ApiV1Policies400Error1? value)` [400] · `TryGetApiV1Policies403Error1([NotNullWhen(true)] out ApiV1Policies403Error1? value)` [403] · `TryGetApiV1Policies409Error1([NotNullWhen(true)] out ApiV1Policies409Error1? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1PoliciesRequest` | `src/Deliverd/Requests/Policies/PostApiV1PoliciesRequest.cs` |
| `ApiV1PoliciesRequest` | `src/Deliverd/Models/ApiV1PoliciesRequest.cs` |
| `ApiV1PoliciesResponse` | `src/Deliverd/Models/ApiV1PoliciesResponse.cs` |
| `PostApiV1PoliciesError` | `src/Deliverd/Errors/PostApiV1PoliciesError.cs` |
| `ApiV1Policies400Error1` | `src/Deliverd/Models/ApiV1Policies400Error1.cs` |
| `ApiV1Policies403Error1` | `src/Deliverd/Models/ApiV1Policies403Error1.cs` |
| `ApiV1Policies409Error1` | `src/Deliverd/Models/ApiV1Policies409Error1.cs` |

### PostApiV1PoliciesByIdActivate

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1PoliciesByIdActivate(PostApiV1PoliciesByIdActivateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1PoliciesActivateResponse`
- **Error**: `ApiException<PostApiV1PoliciesByIdActivateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PoliciesActivate403Error1([NotNullWhen(true)] out ApiV1PoliciesActivate403Error1? value)` [403] · `TryGetApiV1PoliciesActivate404Error1([NotNullWhen(true)] out ApiV1PoliciesActivate404Error1? value)` [404] · `TryGetApiV1PoliciesActivate409Error1([NotNullWhen(true)] out ApiV1PoliciesActivate409Error1? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1PoliciesByIdActivateRequest` | `src/Deliverd/Requests/Policies/PostApiV1PoliciesByIdActivateRequest.cs` |
| `ApiV1PoliciesActivateRequest` | `src/Deliverd/Models/ApiV1PoliciesActivateRequest.cs` |
| `ApiV1PoliciesActivateResponse` | `src/Deliverd/Models/ApiV1PoliciesActivateResponse.cs` |
| `PostApiV1PoliciesByIdActivateError` | `src/Deliverd/Errors/PostApiV1PoliciesByIdActivateError.cs` |
| `ApiV1PoliciesActivate403Error1` | `src/Deliverd/Models/ApiV1PoliciesActivate403Error1.cs` |
| `ApiV1PoliciesActivate404Error1` | `src/Deliverd/Models/ApiV1PoliciesActivate404Error1.cs` |
| `ApiV1PoliciesActivate409Error1` | `src/Deliverd/Models/ApiV1PoliciesActivate409Error1.cs` |

### PostApiV1PoliciesByIdVersions

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1PoliciesByIdVersions(PostApiV1PoliciesByIdVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1PoliciesVersionsResponse`
- **Error**: `ApiException<PostApiV1PoliciesByIdVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PoliciesVersions400Error1([NotNullWhen(true)] out ApiV1PoliciesVersions400Error1? value)` [400] · `TryGetApiV1PoliciesVersions403Error1([NotNullWhen(true)] out ApiV1PoliciesVersions403Error1? value)` [403] · `TryGetApiV1PoliciesVersions404Error1([NotNullWhen(true)] out ApiV1PoliciesVersions404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1PoliciesByIdVersionsRequest` | `src/Deliverd/Requests/Policies/PostApiV1PoliciesByIdVersionsRequest.cs` |
| `ApiV1PoliciesVersionsRequest` | `src/Deliverd/Models/ApiV1PoliciesVersionsRequest.cs` |
| `ApiV1PoliciesVersionsResponse` | `src/Deliverd/Models/ApiV1PoliciesVersionsResponse.cs` |
| `PostApiV1PoliciesByIdVersionsError` | `src/Deliverd/Errors/PostApiV1PoliciesByIdVersionsError.cs` |
| `ApiV1PoliciesVersions400Error1` | `src/Deliverd/Models/ApiV1PoliciesVersions400Error1.cs` |
| `ApiV1PoliciesVersions403Error1` | `src/Deliverd/Models/ApiV1PoliciesVersions403Error1.cs` |
| `ApiV1PoliciesVersions404Error1` | `src/Deliverd/Models/ApiV1PoliciesVersions404Error1.cs` |

### PostApiV1PoliciesReplay

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1PoliciesReplay(PostApiV1PoliciesReplayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1PoliciesReplayResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1PoliciesReplayRequest` | `src/Deliverd/Requests/Policies/PostApiV1PoliciesReplayRequest.cs` |
| `ApiV1PoliciesReplayRequest` | `src/Deliverd/Models/ApiV1PoliciesReplayRequest.cs` |
| `ApiV1PoliciesReplayResponse` | `src/Deliverd/Models/ApiV1PoliciesReplayResponse.cs` |

### PostApiV1PoliciesSimulate

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1PoliciesSimulate(PostApiV1PoliciesSimulateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1PoliciesSimulateResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1PoliciesSimulateRequest` | `src/Deliverd/Requests/Policies/PostApiV1PoliciesSimulateRequest.cs` |
| `ApiV1PoliciesSimulateRequest` | `src/Deliverd/Models/ApiV1PoliciesSimulateRequest.cs` |
| `ApiV1PoliciesSimulateResponse` | `src/Deliverd/Models/ApiV1PoliciesSimulateResponse.cs` |

### PostApiV1PoliciesTest

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1PoliciesTest(PostApiV1PoliciesTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1PoliciesTestResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1PoliciesTestRequest` | `src/Deliverd/Requests/Policies/PostApiV1PoliciesTestRequest.cs` |
| `ApiV1PoliciesTestRequest` | `src/Deliverd/Models/ApiV1PoliciesTestRequest.cs` |
| `ApiV1PoliciesTestResponse` | `src/Deliverd/Models/ApiV1PoliciesTestResponse.cs` |

