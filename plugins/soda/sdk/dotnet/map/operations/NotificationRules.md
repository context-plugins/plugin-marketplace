<!-- Generated file — do not edit; regenerated with the SDK. -->

# NotificationRules — operations

Accessor: `client.NotificationRules` · Source: `src/Soda/Api/NotificationRules.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1NotificationRulesNotificationRuleId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1NotificationRulesNotificationRuleId(DeleteApiV1NotificationRulesNotificationRuleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `NotificationRuleId`
- **Returns**: `PublicApiDeleteNotificationRuleResponse`
- **Error**: `ApiException<DeleteApiV1NotificationRulesNotificationRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1NotificationRulesNotificationRuleIdRequest` | `src/Soda/Requests/NotificationRules/DeleteApiV1NotificationRulesNotificationRuleIdRequest.cs` |
| `PublicApiDeleteNotificationRuleResponse` | `src/Soda/Models/PublicApiDeleteNotificationRuleResponse.cs` |
| `DeleteApiV1NotificationRulesNotificationRuleIdError` | `src/Soda/Errors/DeleteApiV1NotificationRulesNotificationRuleIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1NotificationRules

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1NotificationRules(GetApiV1NotificationRulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiListNotificationRulesResponse`
- **Error**: `ApiException<GetApiV1NotificationRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1NotificationRulesRequest` | `src/Soda/Requests/NotificationRules/GetApiV1NotificationRulesRequest.cs` |
| `PublicApiListNotificationRulesResponse` | `src/Soda/Models/PublicApiListNotificationRulesResponse.cs` |
| `GetApiV1NotificationRulesError` | `src/Soda/Errors/GetApiV1NotificationRulesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1NotificationRules

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1NotificationRules(PostApiV1NotificationRulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiNotificationRuleDto`
- **Error**: `ApiException<PostApiV1NotificationRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1NotificationRulesRequest` | `src/Soda/Requests/NotificationRules/PostApiV1NotificationRulesRequest.cs` |
| `PublicApiNotificationRuleRequestDto` | `src/Soda/Models/PublicApiNotificationRuleRequestDto.cs` |
| `PublicApiNotificationRuleDto` | `src/Soda/Models/PublicApiNotificationRuleDto.cs` |
| `PostApiV1NotificationRulesError` | `src/Soda/Errors/PostApiV1NotificationRulesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1NotificationRulesNotificationRuleId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1NotificationRulesNotificationRuleId(PostApiV1NotificationRulesNotificationRuleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `NotificationRuleId`, `Body`
- **Returns**: `PublicApiNotificationRuleDto`
- **Error**: `ApiException<PostApiV1NotificationRulesNotificationRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1NotificationRulesNotificationRuleIdRequest` | `src/Soda/Requests/NotificationRules/PostApiV1NotificationRulesNotificationRuleIdRequest.cs` |
| `PublicApiNotificationRuleRequestDto` | `src/Soda/Models/PublicApiNotificationRuleRequestDto.cs` |
| `PublicApiNotificationRuleDto` | `src/Soda/Models/PublicApiNotificationRuleDto.cs` |
| `PostApiV1NotificationRulesNotificationRuleIdError` | `src/Soda/Errors/PostApiV1NotificationRulesNotificationRuleIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

