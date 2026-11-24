<!-- Generated file — do not edit; regenerated with the SDK. -->

# Plans — operations

Accessor: `client.Plans` · Source: `src/Curlec/Api/Plans.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePlan

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreatePlan(CreatePlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Plan`
- **Error**: `ApiException<CreatePlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePlanRequest` | `src/Curlec/Requests/Plans/CreatePlanRequest.cs` |
| `PlansRequest` | `src/Curlec/Models/PlansRequest.cs` |
| `Plan` | `src/Curlec/Models/Plan.cs` |
| `CreatePlanError` | `src/Curlec/Errors/CreatePlanError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchPlan

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchPlan(FetchPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Plan`
- **Error**: `ApiException<FetchPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPlanRequest` | `src/Curlec/Requests/Plans/FetchPlanRequest.cs` |
| `Plan` | `src/Curlec/Models/Plan.cs` |
| `FetchPlanError` | `src/Curlec/Errors/FetchPlanError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListPlans

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListPlans(ListPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `PlansResponse`
- **Error**: `ApiException<ListPlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPlansRequest` | `src/Curlec/Requests/Plans/ListPlansRequest.cs` |
| `PlansResponse` | `src/Curlec/Models/PlansResponse.cs` |
| `ListPlansError` | `src/Curlec/Errors/ListPlansError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

