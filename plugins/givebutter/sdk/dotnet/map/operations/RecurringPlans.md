<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringPlans — operations

Accessor: `client.RecurringPlans` · Source: `src/Givebutter/Api/RecurringPlans.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PlansIndex

- **Auth**: `options.Http`
- **Signature**: `PlansIndex(PlansIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `contacts` ← `Contacts`
- **Returns**: `V1PlansResponse`
- **Error**: `ApiException<PlansIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlansIndexRequest` | `src/Givebutter/Requests/RecurringPlans/PlansIndexRequest.cs` |
| `V1PlansResponse` | `src/Givebutter/Models/V1PlansResponse.cs` |
| `PlansIndexError` | `src/Givebutter/Errors/PlansIndexError.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### PlansShow

- **Auth**: `options.Http`
- **Signature**: `PlansShow(PlansShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Plan`
- **Query params (wire ← C#)**: `first_name` ← `FirstName`, `last_name` ← `LastName`, `email` ← `Email`, `amount` ← `Amount`
- **Returns**: `RecurringPlanResource`
- **Error**: `ApiException<PlansShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlansShowRequest` | `src/Givebutter/Requests/RecurringPlans/PlansShowRequest.cs` |
| `RecurringPlanResource` | `src/Givebutter/Models/RecurringPlanResource.cs` |
| `PlansShowError` | `src/Givebutter/Errors/PlansShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

