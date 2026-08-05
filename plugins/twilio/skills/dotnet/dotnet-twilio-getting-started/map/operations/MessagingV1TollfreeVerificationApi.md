# MessagingV1TollfreeVerificationApi — operations

Accessor: `client.MessagingV1TollfreeVerificationApi` · Source: `Api/MessagingV1TollfreeVerificationApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTollfreeVerification
- **HTTP**: `POST /v1/Tollfree/Verifications` (Default6 (messaging))
- **Notes**: Create a tollfree verification
- **Signature**: `CreateTollfreeVerification(string businessName, string businessWebsite, string notificationEmail, IReadOnlyList<TollfreeVerificationEnumUseCaseCategory?> useCaseCategories, string useCaseSummary, string productionMessageSample, IReadOnlyList<string> optInImageUrls, TollfreeVerificationEnumOptInType optInType, string messageVolume, string tollfreePhoneNumberSid, string? customerProfileSid, string? businessStreetAddress, string? businessStreetAddress2, string? businessCity, string? businessStateProvinceRegion, string? businessPostalCode, string? businessCountry, string? additionalInformation, string? businessContactFirstName, string? businessContactLastName, string? businessContactEmail, string? businessContactPhone, string? externalReferenceId, string? businessRegistrationNumber, TollfreeVerificationEnumBusinessRegistrationAuthority? businessRegistrationAuthority, string? businessRegistrationCountry, TollfreeVerificationEnumBusinessType? businessType, string? businessRegistrationPhoneNumber, string? doingBusinessAs, string? optInConfirmationMessage, string? helpMessageSample, string? privacyPolicyUrl, string? termsAndConditionsUrl, bool? ageGatedContent, IReadOnlyList<string>? optInKeywords, TollfreeVerificationEnumVettingProvider? vettingProvider, string? vettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 27 params (`customerProfileSid` … `vettingId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `BusinessName` ← `businessName`, `BusinessWebsite` ← `businessWebsite`, `NotificationEmail` ← `notificationEmail`, `UseCaseCategories` ← `useCaseCategories`, `UseCaseSummary` ← `useCaseSummary`, `ProductionMessageSample` ← `productionMessageSample`, `OptInImageUrls` ← `optInImageUrls`, `OptInType` ← `optInType`, `MessageVolume` ← `messageVolume`, `TollfreePhoneNumberSid` ← `tollfreePhoneNumberSid`, `CustomerProfileSid` ← `customerProfileSid`, `BusinessStreetAddress` ← `businessStreetAddress`, `BusinessStreetAddress2` ← `businessStreetAddress2`, `BusinessCity` ← `businessCity`, `BusinessStateProvinceRegion` ← `businessStateProvinceRegion`, `BusinessPostalCode` ← `businessPostalCode`, `BusinessCountry` ← `businessCountry`, `AdditionalInformation` ← `additionalInformation`, `BusinessContactFirstName` ← `businessContactFirstName`, `BusinessContactLastName` ← `businessContactLastName`, `BusinessContactEmail` ← `businessContactEmail`, `BusinessContactPhone` ← `businessContactPhone`, `ExternalReferenceId` ← `externalReferenceId`, `BusinessRegistrationNumber` ← `businessRegistrationNumber`, `BusinessRegistrationAuthority` ← `businessRegistrationAuthority`, `BusinessRegistrationCountry` ← `businessRegistrationCountry`, `BusinessType` ← `businessType`, `BusinessRegistrationPhoneNumber` ← `businessRegistrationPhoneNumber`, `DoingBusinessAs` ← `doingBusinessAs`, `OptInConfirmationMessage` ← `optInConfirmationMessage`, `HelpMessageSample` ← `helpMessageSample`, `PrivacyPolicyUrl` ← `privacyPolicyUrl`, `TermsAndConditionsUrl` ← `termsAndConditionsUrl`, `AgeGatedContent` ← `ageGatedContent`, `OptInKeywords` ← `optInKeywords`, `VettingProvider` ← `vettingProvider`, `VettingId` ← `vettingId`
- **Returns**: `MessagingV1TollfreeVerification`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTollfreeVerification
- **HTTP**: `DELETE /v1/Tollfree/Verifications/{Sid}` (Default6 (messaging))
- **Notes**: Delete a tollfree verification
- **Signature**: `DeleteTollfreeVerification(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchTollfreeVerification
- **HTTP**: `GET /v1/Tollfree/Verifications/{Sid}` (Default6 (messaging))
- **Notes**: Retrieve a tollfree verification
- **Signature**: `FetchTollfreeVerification(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1TollfreeVerification`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTollfreeVerification
- **HTTP**: `GET /v1/Tollfree/Verifications` (Default6 (messaging))
- **Notes**: List tollfree verifications
- **Signature**: `ListTollfreeVerification(string? tollfreePhoneNumberSid, TollfreeVerificationEnumStatus? status, string? externalReferenceId, bool? includeSubAccounts, long? pageSize, int? page, string? pageToken, IReadOnlyList<string>? trustProductSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`tollfreePhoneNumberSid` … `trustProductSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `TollfreePhoneNumberSid` ← `tollfreePhoneNumberSid`, `Status` ← `status`, `ExternalReferenceId` ← `externalReferenceId`, `IncludeSubAccounts` ← `includeSubAccounts`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`, `TrustProductSid` ← `trustProductSid`
- **Returns**: `ListTollfreeVerificationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateTollfreeVerification
- **HTTP**: `POST /v1/Tollfree/Verifications/{Sid}` (Default6 (messaging))
- **Notes**: Edit a tollfree verification
- **Signature**: `UpdateTollfreeVerification(string sid, string? businessName, string? businessWebsite, string? notificationEmail, IReadOnlyList<TollfreeVerificationEnumUseCaseCategory?>? useCaseCategories, string? useCaseSummary, string? productionMessageSample, IReadOnlyList<string>? optInImageUrls, TollfreeVerificationEnumOptInType? optInType, string? messageVolume, string? businessStreetAddress, string? businessStreetAddress2, string? businessCity, string? businessStateProvinceRegion, string? businessPostalCode, string? businessCountry, string? additionalInformation, string? businessContactFirstName, string? businessContactLastName, string? businessContactEmail, string? businessContactPhone, string? editReason, string? businessRegistrationNumber, TollfreeVerificationEnumBusinessRegistrationAuthority? businessRegistrationAuthority, string? businessRegistrationCountry, TollfreeVerificationEnumBusinessType? businessType, string? businessRegistrationPhoneNumber, string? doingBusinessAs, string? optInConfirmationMessage, string? helpMessageSample, string? privacyPolicyUrl, string? termsAndConditionsUrl, bool? ageGatedContent, IReadOnlyList<string>? optInKeywords, TollfreeVerificationEnumVettingProvider? vettingProvider, string? vettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 35 params (`businessName` … `vettingId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `BusinessName` ← `businessName`, `BusinessWebsite` ← `businessWebsite`, `NotificationEmail` ← `notificationEmail`, `UseCaseCategories` ← `useCaseCategories`, `UseCaseSummary` ← `useCaseSummary`, `ProductionMessageSample` ← `productionMessageSample`, `OptInImageUrls` ← `optInImageUrls`, `OptInType` ← `optInType`, `MessageVolume` ← `messageVolume`, `BusinessStreetAddress` ← `businessStreetAddress`, `BusinessStreetAddress2` ← `businessStreetAddress2`, `BusinessCity` ← `businessCity`, `BusinessStateProvinceRegion` ← `businessStateProvinceRegion`, `BusinessPostalCode` ← `businessPostalCode`, `BusinessCountry` ← `businessCountry`, `AdditionalInformation` ← `additionalInformation`, `BusinessContactFirstName` ← `businessContactFirstName`, `BusinessContactLastName` ← `businessContactLastName`, `BusinessContactEmail` ← `businessContactEmail`, `BusinessContactPhone` ← `businessContactPhone`, `EditReason` ← `editReason`, `BusinessRegistrationNumber` ← `businessRegistrationNumber`, `BusinessRegistrationAuthority` ← `businessRegistrationAuthority`, `BusinessRegistrationCountry` ← `businessRegistrationCountry`, `BusinessType` ← `businessType`, `BusinessRegistrationPhoneNumber` ← `businessRegistrationPhoneNumber`, `DoingBusinessAs` ← `doingBusinessAs`, `OptInConfirmationMessage` ← `optInConfirmationMessage`, `HelpMessageSample` ← `helpMessageSample`, `PrivacyPolicyUrl` ← `privacyPolicyUrl`, `TermsAndConditionsUrl` ← `termsAndConditionsUrl`, `AgeGatedContent` ← `ageGatedContent`, `OptInKeywords` ← `optInKeywords`, `VettingProvider` ← `vettingProvider`, `VettingId` ← `vettingId`
- **Returns**: `MessagingV1TollfreeVerification`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
