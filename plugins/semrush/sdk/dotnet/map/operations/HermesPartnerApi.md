<!-- Generated file — do not edit; regenerated with the SDK. -->

# HermesPartnerApi — operations

Accessor: `client.HermesPartnerApi` · Source: `src/Semrush/Api/HermesPartnerApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApisV4HermesV0EventById

- **Auth**: `options.JwtIssuerToken`
- **Signature**: `GetApisV4HermesV0EventById(GetApisV4HermesV0EventByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `EventResponse`
- **Error**: `ApiException<GetApisV4HermesV0EventByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApisV4HermesV0EventByIdRequest` | `src/Semrush/Requests/HermesPartnerApi/GetApisV4HermesV0EventByIdRequest.cs` |
| `EventResponse` | `src/Semrush/Models/EventResponse.cs` |
| `GetApisV4HermesV0EventByIdError` | `src/Semrush/Errors/GetApisV4HermesV0EventByIdError.cs` |

### GetApisV4HermesV0Subscriptions

- **Auth**: `options.JwtIssuerToken`
- **Signature**: `GetApisV4HermesV0Subscriptions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AppSubscriptionsResponse`
- **Error**: `ApiException<GetApisV4HermesV0SubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AppSubscriptionsResponse` | `src/Semrush/Models/AppSubscriptionsResponse.cs` |
| `GetApisV4HermesV0SubscriptionsError` | `src/Semrush/Errors/GetApisV4HermesV0SubscriptionsError.cs` |

### GetApisV4HermesV0UserByUserIdSubscriptionById

- **Auth**: `options.JwtIssuerToken`
- **Signature**: `GetApisV4HermesV0UserByUserIdSubscriptionById(GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Id`
- **Returns**: `AppUserSubscriptionStatusResponse`
- **Error**: `ApiException<GetApisV4HermesV0UserByUserIdSubscriptionByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest` | `src/Semrush/Requests/HermesPartnerApi/GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest.cs` |
| `AppUserSubscriptionStatusResponse` | `src/Semrush/Models/AppUserSubscriptionStatusResponse.cs` |
| `GetApisV4HermesV0UserByUserIdSubscriptionByIdError` | `src/Semrush/Errors/GetApisV4HermesV0UserByUserIdSubscriptionByIdError.cs` |

### PostApisV4HermesV0Event

- **Auth**: `options.JwtIssuerToken`
- **Signature**: `PostApisV4HermesV0Event(PostApisV4HermesV0EventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApisV4HermesV0EventError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApisV4HermesV0EventRequest` | `src/Semrush/Requests/HermesPartnerApi/PostApisV4HermesV0EventRequest.cs` |
| `CreateEventRequest` | `src/Semrush/Models/CreateEventRequest.cs` |
| `PostApisV4HermesV0EventError` | `src/Semrush/Errors/PostApisV4HermesV0EventError.cs` |

