<!-- Generated file — do not edit; regenerated with the SDK. -->

# HostedOnboarding — operations

Accessor: `client.HostedOnboarding` · Source: `Api/HostedOnboarding.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetThemes
- **Server group**: `Default18`
- **Signature**: `GetThemes(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `OnboardingThemes`
- **Error**: `SdkException<GetThemesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `OnboardingThemes` | `Models/OnboardingThemes.cs` |
| `GetThemesError` | `Errors/GetThemesError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### GetThemesId
- **Server group**: `Default18`
- **Signature**: `GetThemesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `OnboardingTheme`
- **Error**: `SdkException<GetThemesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `OnboardingTheme` | `Models/OnboardingTheme.cs` |
| `GetThemesIdError` | `Errors/GetThemesIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntitiesIdOnboardingLinks
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdOnboardingLinks(string id, OnboardingLinkInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `OnboardingLink`
- **Error**: `SdkException<PostLegalEntitiesIdOnboardingLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `OnboardingLinkInfo` | `Models/OnboardingLinkInfo.cs` |
| `OnboardingLink` | `Models/OnboardingLink.cs` |
| `PostLegalEntitiesIdOnboardingLinksError` | `Errors/PostLegalEntitiesIdOnboardingLinksError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

