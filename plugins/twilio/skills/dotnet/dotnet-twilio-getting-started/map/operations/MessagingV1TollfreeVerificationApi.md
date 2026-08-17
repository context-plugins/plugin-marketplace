<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1TollfreeVerificationApi — operations

Accessor: `client.MessagingV1TollfreeVerificationApi` · Source: `Api/MessagingV1TollfreeVerificationApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTollfreeVerification

- **Server group**: `Default1`
- **Signature**: `CreateTollfreeVerification(string businessName, string businessWebsite, string notificationEmail, IReadOnlyList<TollfreeVerificationEnumUseCaseCategory?> useCaseCategories, string useCaseSummary, string productionMessageSample, IReadOnlyList<string> optInImageUrls, TollfreeVerificationEnumOptInType optInType, string messageVolume, string tollfreePhoneNumberSid, string? customerProfileSid, string? businessStreetAddress, string? businessStreetAddress2, string? businessCity, string? businessStateProvinceRegion, string? businessPostalCode, string? businessCountry, string? additionalInformation, string? businessContactFirstName, string? businessContactLastName, string? businessContactEmail, string? businessContactPhone, string? externalReferenceId, string? businessRegistrationNumber, TollfreeVerificationEnumBusinessRegistrationAuthority? businessRegistrationAuthority, string? businessRegistrationCountry, TollfreeVerificationEnumBusinessType? businessType, string? businessRegistrationPhoneNumber, string? doingBusinessAs, string? optInConfirmationMessage, string? helpMessageSample, string? privacyPolicyUrl, string? termsAndConditionsUrl, bool? ageGatedContent, IReadOnlyList<string>? optInKeywords, TollfreeVerificationEnumVettingProvider? vettingProvider, string? vettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 27 params (`customerProfileSid` … `vettingId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `MessagingV1TollfreeVerification`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TollfreeVerificationEnumUseCaseCategory` | `Models/Enums/TollfreeVerificationEnumUseCaseCategory.cs` |
| `TollfreeVerificationEnumOptInType` | `Models/Enums/TollfreeVerificationEnumOptInType.cs` |
| `TollfreeVerificationEnumBusinessRegistrationAuthority` | `Models/Enums/TollfreeVerificationEnumBusinessRegistrationAuthority.cs` |
| `TollfreeVerificationEnumBusinessType` | `Models/Enums/TollfreeVerificationEnumBusinessType.cs` |
| `TollfreeVerificationEnumVettingProvider` | `Models/Enums/TollfreeVerificationEnumVettingProvider.cs` |
| `MessagingV1TollfreeVerification` | `Models/MessagingV1TollfreeVerification.cs` |

### DeleteTollfreeVerification

- **Server group**: `Default1`
- **Signature**: `DeleteTollfreeVerification(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchTollfreeVerification

- **Server group**: `Default1`
- **Signature**: `FetchTollfreeVerification(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1TollfreeVerification`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1TollfreeVerification` | `Models/MessagingV1TollfreeVerification.cs` |

### ListTollfreeVerification

- **Server group**: `Default1`
- **Signature**: `ListTollfreeVerification(string? tollfreePhoneNumberSid, TollfreeVerificationEnumStatus? status, string? externalReferenceId, bool? includeSubAccounts, long? pageSize, int? page, string? pageToken, IReadOnlyList<string>? trustProductSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`tollfreePhoneNumberSid` … `trustProductSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `TollfreePhoneNumberSid` ← `tollfreePhoneNumberSid`, `Status` ← `status`, `ExternalReferenceId` ← `externalReferenceId`, `IncludeSubAccounts` ← `includeSubAccounts`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`, `TrustProductSid` ← `trustProductSid`
- **Returns**: `ListTollfreeVerificationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TollfreeVerificationEnumStatus` | `Models/Enums/TollfreeVerificationEnumStatus.cs` |
| `ListTollfreeVerificationResponse` | `Models/ListTollfreeVerificationResponse.cs` |

### UpdateTollfreeVerification

- **Server group**: `Default1`
- **Signature**: `UpdateTollfreeVerification(string sid, string? businessName, string? businessWebsite, string? notificationEmail, IReadOnlyList<TollfreeVerificationEnumUseCaseCategory?>? useCaseCategories, string? useCaseSummary, string? productionMessageSample, IReadOnlyList<string>? optInImageUrls, TollfreeVerificationEnumOptInType? optInType, string? messageVolume, string? businessStreetAddress, string? businessStreetAddress2, string? businessCity, string? businessStateProvinceRegion, string? businessPostalCode, string? businessCountry, string? additionalInformation, string? businessContactFirstName, string? businessContactLastName, string? businessContactEmail, string? businessContactPhone, string? editReason, string? businessRegistrationNumber, TollfreeVerificationEnumBusinessRegistrationAuthority? businessRegistrationAuthority, string? businessRegistrationCountry, TollfreeVerificationEnumBusinessType? businessType, string? businessRegistrationPhoneNumber, string? doingBusinessAs, string? optInConfirmationMessage, string? helpMessageSample, string? privacyPolicyUrl, string? termsAndConditionsUrl, bool? ageGatedContent, IReadOnlyList<string>? optInKeywords, TollfreeVerificationEnumVettingProvider? vettingProvider, string? vettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 35 params (`businessName` … `vettingId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `MessagingV1TollfreeVerification`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TollfreeVerificationEnumUseCaseCategory` | `Models/Enums/TollfreeVerificationEnumUseCaseCategory.cs` |
| `TollfreeVerificationEnumOptInType` | `Models/Enums/TollfreeVerificationEnumOptInType.cs` |
| `TollfreeVerificationEnumBusinessRegistrationAuthority` | `Models/Enums/TollfreeVerificationEnumBusinessRegistrationAuthority.cs` |
| `TollfreeVerificationEnumBusinessType` | `Models/Enums/TollfreeVerificationEnumBusinessType.cs` |
| `TollfreeVerificationEnumVettingProvider` | `Models/Enums/TollfreeVerificationEnumVettingProvider.cs` |
| `MessagingV1TollfreeVerification` | `Models/MessagingV1TollfreeVerification.cs` |

