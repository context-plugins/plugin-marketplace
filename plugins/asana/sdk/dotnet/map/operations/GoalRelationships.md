<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoalRelationships — operations

Accessor: `client.GoalRelationships` · Source: `src/Asana/Api/GoalRelationships.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddSupportingRelationship

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddSupportingRelationship(AddSupportingRelationshipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsAddSupportingRelationshipResponse`
- **Error**: `ApiException<AddSupportingRelationshipError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddSupportingRelationshipRequest` | `src/Asana/Requests/GoalRelationships/AddSupportingRelationshipRequest.cs` |
| `GoalsAddSupportingRelationshipRequest` | `src/Asana/Models/GoalsAddSupportingRelationshipRequest.cs` |
| `GoalsAddSupportingRelationshipResponse` | `src/Asana/Models/GoalsAddSupportingRelationshipResponse.cs` |
| `AddSupportingRelationshipError` | `src/Asana/Errors/AddSupportingRelationshipError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetGoalRelationship

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetGoalRelationship(GetGoalRelationshipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalRelationshipGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalRelationshipsResponse`
- **Error**: `ApiException<GetGoalRelationshipError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGoalRelationshipRequest` | `src/Asana/Requests/GoalRelationships/GetGoalRelationshipRequest.cs` |
| `GoalRelationshipsResponse` | `src/Asana/Models/GoalRelationshipsResponse.cs` |
| `GetGoalRelationshipError` | `src/Asana/Errors/GetGoalRelationshipError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetGoalRelationships

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetGoalRelationships(GetGoalRelationshipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SupportedGoal`
- **Query params (wire ← C#)**: `supported_goal` ← `SupportedGoal`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `resource_subtype` ← `ResourceSubtype`
- **Returns**: `GoalRelationshipsResponse2`
- **Error**: `ApiException<GetGoalRelationshipsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGoalRelationshipsRequest` | `src/Asana/Requests/GoalRelationships/GetGoalRelationshipsRequest.cs` |
| `GoalRelationshipsResponse2` | `src/Asana/Models/GoalRelationshipsResponse2.cs` |
| `GetGoalRelationshipsError` | `src/Asana/Errors/GetGoalRelationshipsError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveSupportingRelationship

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveSupportingRelationship(RemoveSupportingRelationshipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalsRemoveSupportingRelationshipResponse`
- **Error**: `ApiException<RemoveSupportingRelationshipError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveSupportingRelationshipRequest` | `src/Asana/Requests/GoalRelationships/RemoveSupportingRelationshipRequest.cs` |
| `GoalsRemoveSupportingRelationshipRequest` | `src/Asana/Models/GoalsRemoveSupportingRelationshipRequest.cs` |
| `GoalsRemoveSupportingRelationshipResponse` | `src/Asana/Models/GoalsRemoveSupportingRelationshipResponse.cs` |
| `RemoveSupportingRelationshipError` | `src/Asana/Errors/RemoveSupportingRelationshipError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateGoalRelationship

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateGoalRelationship(UpdateGoalRelationshipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GoalRelationshipGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `GoalRelationshipsResponse`
- **Error**: `ApiException<UpdateGoalRelationshipError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGoalRelationshipRequest` | `src/Asana/Requests/GoalRelationships/UpdateGoalRelationshipRequest.cs` |
| `GoalRelationshipsRequest` | `src/Asana/Models/GoalRelationshipsRequest.cs` |
| `GoalRelationshipsResponse` | `src/Asana/Models/GoalRelationshipsResponse.cs` |
| `UpdateGoalRelationshipError` | `src/Asana/Errors/UpdateGoalRelationshipError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

