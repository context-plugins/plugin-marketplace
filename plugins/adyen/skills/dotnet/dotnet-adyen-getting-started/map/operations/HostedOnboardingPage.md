# HostedOnboardingPage — operations

Accessor: `client.HostedOnboardingPage` · Source: `Api/HostedOnboardingPage.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostGetOnboardingUrl
- **HTTP**: `POST /getOnboardingUrl` (Default19 (cal-test))
- **Notes**: Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to Hosted onboarding .
- **Signature**: `PostGetOnboardingUrl(GetOnboardingUrlRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetOnboardingUrlResponse`
- **Error**: `SdkException<PostGetOnboardingUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
