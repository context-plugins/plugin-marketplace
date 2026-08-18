<!-- Generated file — do not edit; regenerated with the SDK. -->

# HostedOnboardingPage — operations

Accessor: `client.HostedOnboardingPage` · Source: `Api/HostedOnboardingPage.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostGetOnboardingUrl
- **Server group**: `Default19`
- **Signature**: `PostGetOnboardingUrl(GetOnboardingUrlRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetOnboardingUrlResponse`
- **Error**: `SdkException<PostGetOnboardingUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetOnboardingUrlRequest` | `Models/GetOnboardingUrlRequest.cs` |
| `GetOnboardingUrlResponse` | `Models/GetOnboardingUrlResponse.cs` |
| `PostGetOnboardingUrlError` | `Errors/PostGetOnboardingUrlError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

