<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscribe — operations

Accessor: `client.Subscribe` · Source: `src/Celestia/Api/Subscribe.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SubscribeToWebsiteNewsletter

- **Server group**: `DefaultCelestiaWebsiteContactApi`
- **Signature**: `SubscribeToWebsiteNewsletter(SubscribeToWebsiteNewsletterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Success`
- **Error**: `ApiException<SubscribeToWebsiteNewsletterError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorCelestiaWebsiteContactApi([NotNullWhen(true)] out ErrorCelestiaWebsiteContactApi? value)` [400, 405, 408, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubscribeToWebsiteNewsletterRequest` | `src/Celestia/Requests/Subscribe/SubscribeToWebsiteNewsletterRequest.cs` |
| `SubscriptionInput` | `src/Celestia/Models/SubscriptionInput.cs` |
| `Success` | `src/Celestia/Models/Success.cs` |
| `SubscribeToWebsiteNewsletterError` | `src/Celestia/Errors/SubscribeToWebsiteNewsletterError.cs` |
| `ErrorCelestiaWebsiteContactApi` | `src/Celestia/Models/ErrorCelestiaWebsiteContactApi.cs` |

