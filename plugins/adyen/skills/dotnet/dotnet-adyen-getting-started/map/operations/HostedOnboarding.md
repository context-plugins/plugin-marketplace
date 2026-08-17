# HostedOnboarding — operations

Accessor: `client.HostedOnboarding` · Source: `Api/HostedOnboarding.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetThemes
- **HTTP**: `GET /themes` (Default18 (kyc-test))
- **Notes**: Returns a list of hosted onboarding page themes. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetThemes(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnboardingThemes`
- **Error**: `SdkException<GetThemesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetThemesId
- **HTTP**: `GET /themes/{id}` (Default18 (kyc-test))
- **Notes**: Returns the details of the theme identified in the path. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetThemesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnboardingTheme`
- **Error**: `SdkException<GetThemesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntitiesIdOnboardingLinks
- **HTTP**: `POST /legalEntities/{id}/onboardingLinks` (Default18 (kyc-test))
- **Notes**: Returns a link to an Adyen-hosted onboarding page where you need to redirect your user. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntitiesIdOnboardingLinks(string id, OnboardingLinkInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OnboardingLink`
- **Error**: `SdkException<PostLegalEntitiesIdOnboardingLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
