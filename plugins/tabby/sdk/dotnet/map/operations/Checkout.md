<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checkout — operations

Accessor: `client.Checkout` · Source: `src/Tabby/Api/Checkout.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCheckoutSession

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCheckoutSession(GetCheckoutSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `CheckoutSession`
- **Error**: `ApiException<GetCheckoutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400([NotNullWhen(true)] out Error400? value)` [400] · `TryGetError401KeyDoesntExist([NotNullWhen(true)] out Error401KeyDoesntExist? value)` [401] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [403] · `TryGetString([NotNullWhen(true)] out string? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCheckoutSessionRequest` | `src/Tabby/Requests/Checkout/GetCheckoutSessionRequest.cs` |
| `CheckoutSession` | `src/Tabby/Models/CheckoutSession.cs` |
| `GetCheckoutSessionError` | `src/Tabby/Errors/GetCheckoutSessionError.cs` |
| `Error400` | `src/Tabby/Models/Error400.cs` |
| `Error401KeyDoesntExist` | `src/Tabby/Models/Error401KeyDoesntExist.cs` |
| `Error403` | `src/Tabby/Models/Error403.cs` |

### PostCheckoutSession

- **Auth**: `options.BearerAuth`
- **Signature**: `PostCheckoutSession(PostCheckoutSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CheckoutSession`
- **Error**: `ApiException<PostCheckoutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400CheckoutPost([NotNullWhen(true)] out Error400CheckoutPost? value)` [400] · `TryGetError401MerchantNull([NotNullWhen(true)] out Error401MerchantNull? value)` [401] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [403] · `TryGetString([NotNullWhen(true)] out string? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostCheckoutSessionRequest` | `src/Tabby/Requests/Checkout/PostCheckoutSessionRequest.cs` |
| `ApiV2CheckoutRequest` | `src/Tabby/Models/ApiV2CheckoutRequest.cs` |
| `CheckoutSession` | `src/Tabby/Models/CheckoutSession.cs` |
| `PostCheckoutSessionError` | `src/Tabby/Errors/PostCheckoutSessionError.cs` |
| `Error400CheckoutPost` | `src/Tabby/Models/Error400CheckoutPost.cs` |
| `Error401MerchantNull` | `src/Tabby/Models/Error401MerchantNull.cs` |
| `Error403` | `src/Tabby/Models/Error403.cs` |

