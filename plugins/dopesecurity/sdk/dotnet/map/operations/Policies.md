<!-- Generated file — do not edit; regenerated with the SDK. -->

# Policies — operations

Accessor: `client.Policies` · Source: `src/DopeSecurity/Api/Policies.cs` · 16 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePolicy

- **Auth**: `options.BearerAuth`
- **Signature**: `CreatePolicy(CreatePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<CreatePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePolicyRequest` | `src/DopeSecurity/Requests/Policies/CreatePolicyRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `CreatePolicyError` | `src/DopeSecurity/Errors/CreatePolicyError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### DeleteCustomApplicationBypass

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteCustomApplicationBypass(DeleteCustomApplicationBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<DeleteCustomApplicationBypassError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomApplicationBypassRequest` | `src/DopeSecurity/Requests/Policies/DeleteCustomApplicationBypassRequest.cs` |
| `PoliciesBypassApplicationsRequest1` | `src/DopeSecurity/Models/PoliciesBypassApplicationsRequest1.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `DeleteCustomApplicationBypassError` | `src/DopeSecurity/Errors/DeleteCustomApplicationBypassError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### DeleteCustomUrlBypass

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteCustomUrlBypass(DeleteCustomUrlBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<DeleteCustomUrlBypassError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomUrlBypassRequest` | `src/DopeSecurity/Requests/Policies/DeleteCustomUrlBypassRequest.cs` |
| `PoliciesBypassUrlsRequest1` | `src/DopeSecurity/Models/PoliciesBypassUrlsRequest1.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `DeleteCustomUrlBypassError` | `src/DopeSecurity/Errors/DeleteCustomUrlBypassError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### DeletePolicy

- **Auth**: `options.BearerAuth`
- **Signature**: `DeletePolicy(DeletePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<DeletePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePolicyRequest` | `src/DopeSecurity/Requests/Policies/DeletePolicyRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `DeletePolicyError` | `src/DopeSecurity/Errors/DeletePolicyError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### GetApplicationBypass

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApplicationBypass(GetApplicationBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`
- **Returns**: `PoliciesBypassApplicationsResponse`
- **Error**: `ApiException<GetApplicationBypassError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApplicationBypassRequest` | `src/DopeSecurity/Requests/Policies/GetApplicationBypassRequest.cs` |
| `PoliciesBypassApplicationsResponse` | `src/DopeSecurity/Models/PoliciesBypassApplicationsResponse.cs` |
| `GetApplicationBypassError` | `src/DopeSecurity/Errors/GetApplicationBypassError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### GetPolicyAssignments

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPolicyAssignments(GetPolicyAssignmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`
- **Returns**: `PoliciesAssignmentsResponse`
- **Error**: `ApiException<GetPolicyAssignmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPolicyAssignmentsRequest` | `src/DopeSecurity/Requests/Policies/GetPolicyAssignmentsRequest.cs` |
| `PoliciesAssignmentsResponse` | `src/DopeSecurity/Models/PoliciesAssignmentsResponse.cs` |
| `GetPolicyAssignmentsError` | `src/DopeSecurity/Errors/GetPolicyAssignmentsError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### GetPolicyContent

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPolicyContent(GetPolicyContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`
- **Returns**: `PolicyContentResponse`
- **Error**: `ApiException<GetPolicyContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPolicyContentRequest` | `src/DopeSecurity/Requests/Policies/GetPolicyContentRequest.cs` |
| `PolicyContentResponse` | `src/DopeSecurity/Models/PolicyContentResponse.cs` |
| `GetPolicyContentError` | `src/DopeSecurity/Errors/GetPolicyContentError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### GetSslInspection

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSslInspection(GetSslInspectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`
- **Returns**: `PoliciesSslInspectionResponse`
- **Error**: `ApiException<GetSslInspectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSslInspectionRequest` | `src/DopeSecurity/Requests/Policies/GetSslInspectionRequest.cs` |
| `PoliciesSslInspectionResponse` | `src/DopeSecurity/Models/PoliciesSslInspectionResponse.cs` |
| `GetSslInspectionError` | `src/DopeSecurity/Errors/GetSslInspectionError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### GetUrlBypass

- **Auth**: `options.BearerAuth`
- **Signature**: `GetUrlBypass(GetUrlBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`
- **Returns**: `PoliciesBypassUrlsResponse`
- **Error**: `ApiException<GetUrlBypassError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUrlBypassRequest` | `src/DopeSecurity/Requests/Policies/GetUrlBypassRequest.cs` |
| `PoliciesBypassUrlsResponse` | `src/DopeSecurity/Models/PoliciesBypassUrlsResponse.cs` |
| `GetUrlBypassError` | `src/DopeSecurity/Errors/GetUrlBypassError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### ListPolicies

- **Auth**: `options.BearerAuth`
- **Signature**: `ListPolicies(ListPoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `first` ← `First`, `after` ← `After`, `order` ← `Order`
- **Returns**: `PoliciesResponse`
- **Error**: `ApiException<ListPoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPoliciesRequest` | `src/DopeSecurity/Requests/Policies/ListPoliciesRequest.cs` |
| `Order` | `src/DopeSecurity/Models/Enums/Order.cs` |
| `PoliciesResponse` | `src/DopeSecurity/Models/PoliciesResponse.cs` |
| `ListPoliciesError` | `src/DopeSecurity/Errors/ListPoliciesError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### UpdatePolicyAssignments

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdatePolicyAssignments(UpdatePolicyAssignmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<UpdatePolicyAssignmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePolicyAssignmentsRequest` | `src/DopeSecurity/Requests/Policies/UpdatePolicyAssignmentsRequest.cs` |
| `PoliciesAssignmentsRequest` | `src/DopeSecurity/Models/PoliciesAssignmentsRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `UpdatePolicyAssignmentsError` | `src/DopeSecurity/Errors/UpdatePolicyAssignmentsError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### UpdatePolicyExceptions

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdatePolicyExceptions(UpdatePolicyExceptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<UpdatePolicyExceptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePolicyExceptionsRequest` | `src/DopeSecurity/Requests/Policies/UpdatePolicyExceptionsRequest.cs` |
| `PolicyContentExceptionsRequest` | `src/DopeSecurity/Models/PolicyContentExceptionsRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `UpdatePolicyExceptionsError` | `src/DopeSecurity/Errors/UpdatePolicyExceptionsError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### UpdatePolicyRestrictions

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdatePolicyRestrictions(UpdatePolicyRestrictionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<UpdatePolicyRestrictionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePolicyRestrictionsRequest` | `src/DopeSecurity/Requests/Policies/UpdatePolicyRestrictionsRequest.cs` |
| `PolicyContentRestrictionsRequest` | `src/DopeSecurity/Models/PolicyContentRestrictionsRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `UpdatePolicyRestrictionsError` | `src/DopeSecurity/Errors/UpdatePolicyRestrictionsError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### UpdateSslInspection

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateSslInspection(UpdateSslInspectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<UpdateSslInspectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSslInspectionRequest` | `src/DopeSecurity/Requests/Policies/UpdateSslInspectionRequest.cs` |
| `PoliciesSslInspectionRequest` | `src/DopeSecurity/Models/PoliciesSslInspectionRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `UpdateSslInspectionError` | `src/DopeSecurity/Errors/UpdateSslInspectionError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### UpsertApplicationBypass

- **Auth**: `options.BearerAuth`
- **Signature**: `UpsertApplicationBypass(UpsertApplicationBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<UpsertApplicationBypassError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpsertApplicationBypassRequest` | `src/DopeSecurity/Requests/Policies/UpsertApplicationBypassRequest.cs` |
| `PoliciesBypassApplicationsRequest` | `src/DopeSecurity/Models/PoliciesBypassApplicationsRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `UpsertApplicationBypassError` | `src/DopeSecurity/Errors/UpsertApplicationBypassError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

### UpsertUrlBypass

- **Auth**: `options.BearerAuth`
- **Signature**: `UpsertUrlBypass(UpsertUrlBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyName`, `Body`
- **Returns**: `SuccessMessage`
- **Error**: `ApiException<UpsertUrlBypassError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpsertUrlBypassRequest` | `src/DopeSecurity/Requests/Policies/UpsertUrlBypassRequest.cs` |
| `PoliciesBypassUrlsRequest` | `src/DopeSecurity/Models/PoliciesBypassUrlsRequest.cs` |
| `SuccessMessage` | `src/DopeSecurity/Models/SuccessMessage.cs` |
| `UpsertUrlBypassError` | `src/DopeSecurity/Errors/UpsertUrlBypassError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

