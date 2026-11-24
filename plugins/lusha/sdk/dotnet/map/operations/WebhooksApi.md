<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Lusha/Api/WebhooksApi.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateOptOutSubscription

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateOptOutSubscription(CreateOptOutSubscriptionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OptOutSubscriptionResponse`
- **Error**: `ApiException<CreateOptOutSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOptOutSubscriptionOperationRequest` | `src/Lusha/Requests/WebhooksApi/CreateOptOutSubscriptionOperationRequest.cs` |
| `CreateOptOutSubscriptionRequest` | `src/Lusha/Models/CreateOptOutSubscriptionRequest.cs` |
| `OptOutSubscriptionResponse` | `src/Lusha/Models/OptOutSubscriptionResponse.cs` |
| `CreateOptOutSubscriptionError` | `src/Lusha/Errors/CreateOptOutSubscriptionError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### CreateSubscription

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateSubscription(CreateSubscriptionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreateSubscriptionResponse`
- **Error**: `ApiException<CreateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSubscriptionOperationRequest` | `src/Lusha/Requests/WebhooksApi/CreateSubscriptionOperationRequest.cs` |
| `CreateSubscriptionRequest` | `src/Lusha/Models/CreateSubscriptionRequest.cs` |
| `CreateSubscriptionResponse` | `src/Lusha/Models/CreateSubscriptionResponse.cs` |
| `CreateSubscriptionError` | `src/Lusha/Errors/CreateSubscriptionError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### DeleteSubscriptions

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeleteSubscriptions(DeleteSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DeleteSubscriptionResponse`
- **Error**: `ApiException<DeleteSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSubscriptionsRequest` | `src/Lusha/Requests/WebhooksApi/DeleteSubscriptionsRequest.cs` |
| `ApiSubscriptionsDeleteRequest` | `src/Lusha/Models/ApiSubscriptionsDeleteRequest.cs` |
| `DeleteSubscriptionResponse` | `src/Lusha/Models/DeleteSubscriptionResponse.cs` |
| `DeleteSubscriptionsError` | `src/Lusha/Errors/DeleteSubscriptionsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetAccountSecret

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetAccountSecret(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiAccountSecretResponse`
- **Error**: `ApiException<GetAccountSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiAccountSecretResponse` | `src/Lusha/Models/ApiAccountSecretResponse.cs` |
| `GetAccountSecretError` | `src/Lusha/Errors/GetAccountSecretError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetAuditLogStats

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetAuditLogStats(GetAuditLogStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `subscriptionId` ← `SubscriptionId`
- **Returns**: `AuditLogStatsResponse`
- **Error**: `ApiException<GetAuditLogStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAuditLogStatsRequest` | `src/Lusha/Requests/WebhooksApi/GetAuditLogStatsRequest.cs` |
| `AuditLogStatsResponse` | `src/Lusha/Models/AuditLogStatsResponse.cs` |
| `GetAuditLogStatsError` | `src/Lusha/Errors/GetAuditLogStatsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetAuditLogs

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetAuditLogs(GetAuditLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `subscriptionId` ← `SubscriptionId`, `status` ← `Status`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `AuditLogsResponse`
- **Error**: `ApiException<GetAuditLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAuditLogsRequest` | `src/Lusha/Requests/WebhooksApi/GetAuditLogsRequest.cs` |
| `StatusLushaWebhooksApi` | `src/Lusha/Models/Enums/StatusLushaWebhooksApi.cs` |
| `AuditLogsResponse` | `src/Lusha/Models/AuditLogsResponse.cs` |
| `GetAuditLogsError` | `src/Lusha/Errors/GetAuditLogsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetSubscriptionById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetSubscriptionById(GetSubscriptionByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SubscriptionWithoutSecret`
- **Error**: `ApiException<GetSubscriptionByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSubscriptionByIdRequest` | `src/Lusha/Requests/WebhooksApi/GetSubscriptionByIdRequest.cs` |
| `SubscriptionWithoutSecret` | `src/Lusha/Models/SubscriptionWithoutSecret.cs` |
| `GetSubscriptionByIdError` | `src/Lusha/Errors/GetSubscriptionByIdError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### ListSubscriptions

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListSubscriptions(ListSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `SubscriptionListResponse`
- **Error**: `ApiException<ListSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSubscriptionsRequest` | `src/Lusha/Requests/WebhooksApi/ListSubscriptionsRequest.cs` |
| `SubscriptionListResponse` | `src/Lusha/Models/SubscriptionListResponse.cs` |
| `ListSubscriptionsError` | `src/Lusha/Errors/ListSubscriptionsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### RegenerateAccountSecret

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RegenerateAccountSecret(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiAccountSecretRegenerateResponse`
- **Error**: `ApiException<RegenerateAccountSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiAccountSecretRegenerateResponse` | `src/Lusha/Models/ApiAccountSecretRegenerateResponse.cs` |
| `RegenerateAccountSecretError` | `src/Lusha/Errors/RegenerateAccountSecretError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### TestSubscription

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TestSubscription(TestSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `mode` ← `Mode`
- **Returns**: `TestSubscriptionResponse`
- **Error**: `ApiException<TestSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TestSubscriptionRequest` | `src/Lusha/Requests/WebhooksApi/TestSubscriptionRequest.cs` |
| `Mode` | `src/Lusha/Models/Enums/Mode.cs` |
| `TestSubscriptionResponse` | `src/Lusha/Models/TestSubscriptionResponse.cs` |
| `TestSubscriptionError` | `src/Lusha/Errors/TestSubscriptionError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### UpdateSubscription

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdateSubscription(UpdateSubscriptionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `SubscriptionResponse`
- **Error**: `ApiException<UpdateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSubscriptionOperationRequest` | `src/Lusha/Requests/WebhooksApi/UpdateSubscriptionOperationRequest.cs` |
| `UpdateSubscriptionRequest` | `src/Lusha/Models/UpdateSubscriptionRequest.cs` |
| `SubscriptionResponse` | `src/Lusha/Models/SubscriptionResponse.cs` |
| `UpdateSubscriptionError` | `src/Lusha/Errors/UpdateSubscriptionError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

