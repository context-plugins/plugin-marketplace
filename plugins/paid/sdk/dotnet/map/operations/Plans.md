<!-- Generated file — do not edit; regenerated with the SDK. -->

# Plans — operations

Accessor: `client.Plans` · Source: `src/Paid/Api/Plans.cs` · 15 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePlan

- **Signature**: `CreatePlan(CreatePlanOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Plan1`
- **Error**: `ApiException<CreatePlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePlanOperationRequest` | `src/Paid/Requests/Plans/CreatePlanOperationRequest.cs` |
| `CreatePlanRequest` | `src/Paid/Models/CreatePlanRequest.cs` |
| `Plan1` | `src/Paid/Models/Plan1.cs` |
| `CreatePlanError` | `src/Paid/Errors/CreatePlanError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetById

- **Signature**: `GetById(GetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlanId`, `Authorization`
- **Returns**: `Plan`
- **Error**: `ApiException<GetByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetByIdRequest` | `src/Paid/Requests/Plans/GetByIdRequest.cs` |
| `Plan` | `src/Paid/Models/Plan.cs` |
| `GetByIdError` | `src/Paid/Errors/GetByIdError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### GetCurrent

- **Signature**: `GetCurrent(GetCurrentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerExternalId`, `Authorization`
- **Query params (wire ← C#)**: `customerExternalId` ← `CustomerExternalId`
- **Returns**: `PlansGetCurrentResponse200`
- **Error**: `ApiException<GetCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCurrentRequest` | `src/Paid/Requests/Plans/GetCurrentRequest.cs` |
| `PlansGetCurrentResponse200` | `src/Paid/Models/PlansGetCurrentResponse200.cs` |
| `GetCurrentError` | `src/Paid/Errors/GetCurrentError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### GetGroupById

- **Signature**: `GetGroupById(GetGroupByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlanGroupId`, `Authorization`
- **Returns**: `PlanGroup`
- **Error**: `ApiException<GetGroupByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupByIdRequest` | `src/Paid/Requests/Plans/GetGroupByIdRequest.cs` |
| `PlanGroup` | `src/Paid/Models/PlanGroup.cs` |
| `GetGroupByIdError` | `src/Paid/Errors/GetGroupByIdError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### GetGroupPlans

- **Signature**: `GetGroupPlans(GetGroupPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlanGroupId`, `Authorization`
- **Returns**: `IReadOnlyList<PlanWithFeatures>`
- **Error**: `ApiException<GetGroupPlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupPlansRequest` | `src/Paid/Requests/Plans/GetGroupPlansRequest.cs` |
| `PlanWithFeatures` | `src/Paid/Models/PlanWithFeatures.cs` |
| `GetGroupPlansError` | `src/Paid/Errors/GetGroupPlansError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### GetPlanByExternalId

- **Signature**: `GetPlanByExternalId(GetPlanByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Plan1`
- **Error**: `ApiException<GetPlanByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlanByExternalIdRequest` | `src/Paid/Requests/Plans/GetPlanByExternalIdRequest.cs` |
| `Plan1` | `src/Paid/Models/Plan1.cs` |
| `GetPlanByExternalIdError` | `src/Paid/Errors/GetPlanByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetPlanById

- **Signature**: `GetPlanById(GetPlanByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Plan1`
- **Error**: `ApiException<GetPlanByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlanByIdRequest` | `src/Paid/Requests/Plans/GetPlanByIdRequest.cs` |
| `Plan1` | `src/Paid/Models/Plan1.cs` |
| `GetPlanByIdError` | `src/Paid/Errors/GetPlanByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetUsage

- **Signature**: `GetUsage(GetUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlanId`, `ExternalId`, `Authorization`
- **Query params (wire ← C#)**: `externalId` ← `ExternalId`, `limit` ← `Limit`, `offset` ← `Offset`, `startTime` ← `StartTime`, `endTime` ← `EndTime`
- **Returns**: `UsageSummariesResponse`
- **Error**: `ApiException<GetUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsageRequest` | `src/Paid/Requests/Plans/GetUsageRequest.cs` |
| `UsageSummariesResponse` | `src/Paid/Models/UsageSummariesResponse.cs` |
| `GetUsageError` | `src/Paid/Errors/GetUsageError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### ListPlans

- **Signature**: `ListPlans(ListPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `productId` ← `ProductId`, `externalProductId` ← `ExternalProductId`, `includeArchived` ← `IncludeArchived`
- **Returns**: `PlanListResponse`
- **Error**: `ApiException<ListPlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPlansRequest` | `src/Paid/Requests/Plans/ListPlansRequest.cs` |
| `PlanListResponse` | `src/Paid/Models/PlanListResponse.cs` |
| `ListPlansError` | `src/Paid/Errors/ListPlansError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### Subscribe

- **Signature**: `Subscribe(SubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlanId`, `CustomerExternalId`, `Currency`, `Authorization`
- **Query params (wire ← C#)**: `customerExternalId` ← `CustomerExternalId`, `currency` ← `Currency`
- **Returns**: `Order`
- **Error**: `ApiException<SubscribeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubscribeRequest` | `src/Paid/Requests/Plans/SubscribeRequest.cs` |
| `Order` | `src/Paid/Models/Order.cs` |
| `SubscribeError` | `src/Paid/Errors/SubscribeError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### Unsubscribe

- **Signature**: `Unsubscribe(UnsubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlanId`, `CustomerExternalId`, `Authorization`
- **Query params (wire ← C#)**: `customerExternalId` ← `CustomerExternalId`
- **Returns**: `CancelRenewalResponse`
- **Error**: `ApiException<UnsubscribeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnsubscribeRequest` | `src/Paid/Requests/Plans/UnsubscribeRequest.cs` |
| `CancelRenewalResponse` | `src/Paid/Models/CancelRenewalResponse.cs` |
| `UnsubscribeError` | `src/Paid/Errors/UnsubscribeError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### UpdatePlanByExternalId

- **Signature**: `UpdatePlanByExternalId(UpdatePlanByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Plan1`
- **Error**: `ApiException<UpdatePlanByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePlanByExternalIdRequest` | `src/Paid/Requests/Plans/UpdatePlanByExternalIdRequest.cs` |
| `UpdatePlanRequest` | `src/Paid/Models/UpdatePlanRequest.cs` |
| `Plan1` | `src/Paid/Models/Plan1.cs` |
| `UpdatePlanByExternalIdError` | `src/Paid/Errors/UpdatePlanByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdatePlanById

- **Signature**: `UpdatePlanById(UpdatePlanByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Plan1`
- **Error**: `ApiException<UpdatePlanByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePlanByIdRequest` | `src/Paid/Requests/Plans/UpdatePlanByIdRequest.cs` |
| `UpdatePlanRequest` | `src/Paid/Models/UpdatePlanRequest.cs` |
| `Plan1` | `src/Paid/Models/Plan1.cs` |
| `UpdatePlanByIdError` | `src/Paid/Errors/UpdatePlanByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdatePlanUpgradePath

- **Signature**: `UpdatePlanUpgradePath(UpdatePlanUpgradePathOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `PlanUpgradePathResponse`
- **Error**: `ApiException<UpdatePlanUpgradePathError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePlanUpgradePathOperationRequest` | `src/Paid/Requests/Plans/UpdatePlanUpgradePathOperationRequest.cs` |
| `UpdatePlanUpgradePathRequest` | `src/Paid/Models/UpdatePlanUpgradePathRequest.cs` |
| `PlanUpgradePathResponse` | `src/Paid/Models/PlanUpgradePathResponse.cs` |
| `UpdatePlanUpgradePathError` | `src/Paid/Errors/UpdatePlanUpgradePathError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### Upgrade

- **Signature**: `Upgrade(UpgradeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerExternalId`, `OldPlanId`, `NewPlanId`, `Authorization`
- **Query params (wire ← C#)**: `customerExternalId` ← `CustomerExternalId`, `oldPlanId` ← `OldPlanId`, `newPlanId` ← `NewPlanId`
- **Returns**: `ProrationUpgradeResponse`
- **Error**: `ApiException<UpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpgradeRequest` | `src/Paid/Requests/Plans/UpgradeRequest.cs` |
| `ProrationUpgradeResponse` | `src/Paid/Models/ProrationUpgradeResponse.cs` |
| `UpgradeError` | `src/Paid/Errors/UpgradeError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

