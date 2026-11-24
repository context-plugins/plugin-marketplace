<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscribers — operations

Accessor: `client.Subscribers` · Source: `src/Postscript/Api/Subscribers.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSubscriber

- **Auth**: `options.Sec0`
- **Signature**: `GetSubscriber(GetSubscriberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `JsonElement`
- **Error**: `ApiException<GetSubscriberError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSubscriberRequest` | `src/Postscript/Requests/Subscribers/GetSubscriberRequest.cs` |
| `GetSubscriberError` | `src/Postscript/Errors/GetSubscriberError.cs` |

### GetSubscribers

- **Auth**: `options.Sec0`
- **Signature**: `GetSubscribers(GetSubscribersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `created_at__eq` ← `CreatedAtEq`, `created_at__gt` ← `CreatedAtGt`, `created_at__gte` ← `CreatedAtGte`, `created_at__lt` ← `CreatedAtLt`, `created_at__lte` ← `CreatedAtLte`, `email__contains` ← `EmailContains`, `email__eq` ← `EmailEq`, `email__in` ← `EmailIn`, `page` ← `Page`, `phone_number__contains` ← `PhoneNumberContains`, `phone_number__eq` ← `PhoneNumberEq`, `phone_number__in` ← `PhoneNumberIn`, `shopify_customer_id__contains` ← `ShopifyCustomerIdContains`, `shopify_customer_id__eq` ← `ShopifyCustomerIdEq`, `shopify_customer_id__in` ← `ShopifyCustomerIdIn`, `sort` ← `Sort`, `updated_at__eq` ← `UpdatedAtEq`, `updated_at__gt` ← `UpdatedAtGt`, `updated_at__gte` ← `UpdatedAtGte`, `updated_at__lt` ← `UpdatedAtLt`, `updated_at__lte` ← `UpdatedAtLte`, `ps_id__eq` ← `PsIdEq`
- **Returns**: `JsonElement`
- **Error**: `ApiException<GetSubscribersError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSubscribersRequest` | `src/Postscript/Requests/Subscribers/GetSubscribersRequest.cs` |
| `GetSubscribersError` | `src/Postscript/Errors/GetSubscribersError.cs` |

### UpdateSubscriberById

- **Auth**: `options.Sec0`
- **Signature**: `UpdateSubscriberById(UpdateSubscriberByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `JsonElement`
- **Error**: `ApiException<UpdateSubscriberByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSubscriberByIdRequest` | `src/Postscript/Requests/Subscribers/UpdateSubscriberByIdRequest.cs` |
| `ApiV2SubscribersRequest` | `src/Postscript/Models/ApiV2SubscribersRequest.cs` |
| `UpdateSubscriberByIdError` | `src/Postscript/Errors/UpdateSubscriberByIdError.cs` |

