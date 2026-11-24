<!-- Generated file — do not edit; regenerated with the SDK. -->

# Goals — operations

Accessor: `client.Goals` · Source: `src/Asana/Api/Goals.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddFollowers

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddFollowers(AddFollowersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsAddFollowersResponse`
- **Error**: `ApiException<AddFollowersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddFollowersOperationRequest` | `src/Asana/Requests/Goals/AddFollowersOperationRequest.cs` |
| `GoalsAddFollowersRequest` | `src/Asana/Models/GoalsAddFollowersRequest.cs` |
| `GoalsAddFollowersResponse` | `src/Asana/Models/GoalsAddFollowersResponse.cs` |
| `AddFollowersError` | `src/Asana/Errors/AddFollowersError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateGoal

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateGoal(CreateGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `GoalsResponse`
- **Error**: `ApiException<CreateGoalError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGoalRequest` | `src/Asana/Requests/Goals/CreateGoalRequest.cs` |
| `GoalsRequest` | `src/Asana/Models/GoalsRequest.cs` |
| `GoalsResponse` | `src/Asana/Models/GoalsResponse.cs` |
| `CreateGoalError` | `src/Asana/Errors/CreateGoalError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateGoalMetric

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateGoalMetric(CreateGoalMetricRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsSetMetricResponse`
- **Error**: `ApiException<CreateGoalMetricError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGoalMetricRequest` | `src/Asana/Requests/Goals/CreateGoalMetricRequest.cs` |
| `GoalsSetMetricRequest` | `src/Asana/Models/GoalsSetMetricRequest.cs` |
| `GoalsSetMetricResponse` | `src/Asana/Models/GoalsSetMetricResponse.cs` |
| `CreateGoalMetricError` | `src/Asana/Errors/CreateGoalMetricError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteGoal

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteGoal(DeleteGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsResponse2`
- **Error**: `ApiException<DeleteGoalError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteGoalRequest` | `src/Asana/Requests/Goals/DeleteGoalRequest.cs` |
| `GoalsResponse2` | `src/Asana/Models/GoalsResponse2.cs` |
| `DeleteGoalError` | `src/Asana/Errors/DeleteGoalError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetGoal

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetGoal(GetGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsResponse`
- **Error**: `ApiException<GetGoalError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGoalRequest` | `src/Asana/Requests/Goals/GetGoalRequest.cs` |
| `GoalsResponse` | `src/Asana/Models/GoalsResponse.cs` |
| `GetGoalError` | `src/Asana/Errors/GetGoalError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetGoals

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetGoals(GetGoalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`, `portfolio` ← `Portfolio`, `project` ← `Project`, `is_workspace_level` ← `IsWorkspaceLevel`, `team` ← `Team`, `workspace` ← `Workspace`, `time_periods` ← `TimePeriods`
- **Returns**: `GoalsResponse3`
- **Error**: `ApiException<GetGoalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGoalsRequest` | `src/Asana/Requests/Goals/GetGoalsRequest.cs` |
| `GoalsResponse3` | `src/Asana/Models/GoalsResponse3.cs` |
| `GetGoalsError` | `src/Asana/Errors/GetGoalsError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetParentGoalsForGoal

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetParentGoalsForGoal(GetParentGoalsForGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsParentGoalsResponse`
- **Error**: `ApiException<GetParentGoalsForGoalError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetParentGoalsForGoalRequest` | `src/Asana/Requests/Goals/GetParentGoalsForGoalRequest.cs` |
| `GoalsParentGoalsResponse` | `src/Asana/Models/GoalsParentGoalsResponse.cs` |
| `GetParentGoalsForGoalError` | `src/Asana/Errors/GetParentGoalsForGoalError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveFollowers

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveFollowers(RemoveFollowersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsRemoveFollowersResponse`
- **Error**: `ApiException<RemoveFollowersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveFollowersOperationRequest` | `src/Asana/Requests/Goals/RemoveFollowersOperationRequest.cs` |
| `GoalsRemoveFollowersRequest` | `src/Asana/Models/GoalsRemoveFollowersRequest.cs` |
| `GoalsRemoveFollowersResponse` | `src/Asana/Models/GoalsRemoveFollowersResponse.cs` |
| `RemoveFollowersError` | `src/Asana/Errors/RemoveFollowersError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateGoal

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateGoal(UpdateGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsResponse`
- **Error**: `ApiException<UpdateGoalError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGoalRequest` | `src/Asana/Requests/Goals/UpdateGoalRequest.cs` |
| `GoalsRequest` | `src/Asana/Models/GoalsRequest.cs` |
| `GoalsResponse` | `src/Asana/Models/GoalsResponse.cs` |
| `UpdateGoalError` | `src/Asana/Errors/UpdateGoalError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateGoalMetric

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateGoalMetric(UpdateGoalMetricRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsSetMetricCurrentValueResponse`
- **Error**: `ApiException<UpdateGoalMetricError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGoalMetricRequest` | `src/Asana/Requests/Goals/UpdateGoalMetricRequest.cs` |
| `GoalsSetMetricCurrentValueRequest` | `src/Asana/Models/GoalsSetMetricCurrentValueRequest.cs` |
| `GoalsSetMetricCurrentValueResponse` | `src/Asana/Models/GoalsSetMetricCurrentValueResponse.cs` |
| `UpdateGoalMetricError` | `src/Asana/Errors/UpdateGoalMetricError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

