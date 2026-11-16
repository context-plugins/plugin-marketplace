<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubscriptionPlans — operations

Accessor: `client.SubscriptionPlans` · Source: `src/FinixApiReference/Api/SubscriptionPlans.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSubscriptionPlan

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateSubscriptionPlan(CreateSubscriptionPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SubscriptionPlan`
- **Error**: `ApiException<CreateSubscriptionPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSubscriptionPlanRequest` | `src/FinixApiReference/Requests/SubscriptionPlans/CreateSubscriptionPlanRequest.cs` |
| `SubscriptionPlansRequest` | `src/FinixApiReference/Models/AnyOf/SubscriptionPlansRequest.cs` |
| `SubscriptionPlan` | `src/FinixApiReference/Models/SubscriptionPlan.cs` |
| `CreateSubscriptionPlanError` | `src/FinixApiReference/Errors/CreateSubscriptionPlanError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetSubscriptionPlan

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSubscriptionPlan(GetSubscriptionPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionPlanId`
- **Returns**: `SubscriptionPlan`
- **Error**: `ApiException<GetSubscriptionPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSubscriptionPlanRequest` | `src/FinixApiReference/Requests/SubscriptionPlans/GetSubscriptionPlanRequest.cs` |
| `SubscriptionPlan` | `src/FinixApiReference/Models/SubscriptionPlan.cs` |
| `GetSubscriptionPlanError` | `src/FinixApiReference/Errors/GetSubscriptionPlanError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSubscriptionPlans

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSubscriptionPlans(ListSubscriptionPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `amount.gt` ← `AmountGt`, `amount.gte` ← `AmountGte`, `amount.lt` ← `AmountLt`, `amount.lte` ← `AmountLte`, `amount` ← `Amount`, `linked_to` ← `LinkedTo`, `plan_name` ← `PlanName`, `plan_name.like` ← `PlanNameLike`, `state` ← `State`, `application_id` ← `ApplicationId`, `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSubscriptionPlans`
- **Error**: `ApiException<ListSubscriptionPlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSubscriptionPlansRequest` | `src/FinixApiReference/Requests/SubscriptionPlans/ListSubscriptionPlansRequest.cs` |
| `ListSubscriptionPlans` | `src/FinixApiReference/Models/ListSubscriptionPlans.cs` |
| `ListSubscriptionPlansError` | `src/FinixApiReference/Errors/ListSubscriptionPlansError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateSubscriptionPlan

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateSubscriptionPlan(UpdateSubscriptionPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionPlanId`, `Body`
- **Returns**: `SubscriptionPlan`
- **Error**: `ApiException<UpdateSubscriptionPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSubscriptionPlanRequest` | `src/FinixApiReference/Requests/SubscriptionPlans/UpdateSubscriptionPlanRequest.cs` |
| `SubscriptionPlansRequest1` | `src/FinixApiReference/Models/AnyOf/SubscriptionPlansRequest1.cs` |
| `SubscriptionPlan` | `src/FinixApiReference/Models/SubscriptionPlan.cs` |
| `UpdateSubscriptionPlanError` | `src/FinixApiReference/Errors/UpdateSubscriptionPlanError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

