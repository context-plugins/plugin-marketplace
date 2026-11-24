<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.Subscriptions` · Source: `src/Divvy/Api/Subscriptions.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateNewSecurityKey

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `CreateNewSecurityKey(CreateNewSecurityKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`, `XIdempotentKey`
- **Returns**: `SecurityKeyDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateNewSecurityKeyRequest` | `src/Divvy/Requests/Subscriptions/CreateNewSecurityKeyRequest.cs` |
| `SecurityKeyDto` | `src/Divvy/Models/SecurityKeyDto.cs` |

### CreateSubscription

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `CreateSubscription(CreateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XIdempotentKey`, `Body`
- **Returns**: `SubscriptionWithSecurityKeyResponseDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateSubscriptionRequest` | `src/Divvy/Requests/Subscriptions/CreateSubscriptionRequest.cs` |
| `SubscriptionRequestDto` | `src/Divvy/Models/SubscriptionRequestDto.cs` |
| `SubscriptionWithSecurityKeyResponseDto` | `src/Divvy/Models/SubscriptionWithSecurityKeyResponseDto.cs` |

### DeleteSubscription

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `DeleteSubscription(DeleteSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteSubscriptionRequest` | `src/Divvy/Requests/Subscriptions/DeleteSubscriptionRequest.cs` |

### GetAllSubscriptions

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `GetAllSubscriptions(GetAllSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `page` ← `Page`
- **Returns**: `PaginationDtoSubscriptionResponseDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetAllSubscriptionsRequest` | `src/Divvy/Requests/Subscriptions/GetAllSubscriptionsRequest.cs` |
| `PaginationDtoSubscriptionResponseDto` | `src/Divvy/Models/PaginationDtoSubscriptionResponseDto.cs` |

### GetSubscription

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `GetSubscription(GetSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`
- **Returns**: `SubscriptionResponseDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSubscriptionRequest` | `src/Divvy/Requests/Subscriptions/GetSubscriptionRequest.cs` |
| `SubscriptionResponseDto` | `src/Divvy/Models/SubscriptionResponseDto.cs` |

### ReplaceSubscription

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `ReplaceSubscription(ReplaceSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`, `Body`
- **Returns**: `SubscriptionResponseDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReplaceSubscriptionRequest` | `src/Divvy/Requests/Subscriptions/ReplaceSubscriptionRequest.cs` |
| `SubscriptionRequestDto` | `src/Divvy/Models/SubscriptionRequestDto.cs` |
| `SubscriptionResponseDto` | `src/Divvy/Models/SubscriptionResponseDto.cs` |

### SendTestEvent

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `SendTestEvent(SendTestEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`, `Body`
- **Returns**: `EventDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SendTestEventRequest` | `src/Divvy/Requests/Subscriptions/SendTestEventRequest.cs` |
| `SendTestEventRequestDto` | `src/Divvy/Models/SendTestEventRequestDto.cs` |
| `EventDto` | `src/Divvy/Models/EventDto.cs` |

### UpdateSubscription

- **Server group**: `DefaultConnectEventsApi`
- **Signature**: `UpdateSubscription(UpdateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`, `Body`
- **Returns**: `SubscriptionResponseDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateSubscriptionRequest` | `src/Divvy/Requests/Subscriptions/UpdateSubscriptionRequest.cs` |
| `SubscriptionUpdateRequestDto` | `src/Divvy/Models/SubscriptionUpdateRequestDto.cs` |
| `SubscriptionResponseDto` | `src/Divvy/Models/SubscriptionResponseDto.cs` |

