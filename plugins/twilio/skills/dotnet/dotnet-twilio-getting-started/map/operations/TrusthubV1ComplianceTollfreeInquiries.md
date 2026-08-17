<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1ComplianceTollfreeInquiries — operations

Accessor: `client.TrusthubV1ComplianceTollfreeInquiries` · Source: `Api/TrusthubV1ComplianceTollfreeInquiries.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateComplianceTollfreeInquiry

- **Server group**: `Default9`
- **Signature**: `CreateComplianceTollfreeInquiry(string tollfreePhoneNumber, string notificationEmail, string? customerProfileSid, string? businessName, string? businessWebsite, IReadOnlyList<string>? useCaseCategories, string? useCaseSummary, string? productionMessageSample, IReadOnlyList<string>? optInImageUrls, ComplianceTollfreeInquiryEnumOptInType? optInType, string? messageVolume, string? businessStreetAddress, string? businessStreetAddress2, string? businessCity, string? businessStateProvinceRegion, string? businessPostalCode, string? businessCountry, string? additionalInformation, string? businessContactFirstName, string? businessContactLastName, string? businessContactEmail, string? businessContactPhone, string? themeSetId, bool? skipMessagingUseCase, string? businessRegistrationNumber, string? businessRegistrationAuthority, string? businessRegistrationCountry, TollfreeVerificationEnumBusinessType? businessType, string? doingBusinessAs, string? optInConfirmationMessage, string? helpMessageSample, string? privacyPolicyUrl, string? termsAndConditionsUrl, bool? ageGatedContent, string? externalReferenceId, IReadOnlyList<string>? optInKeywords, string? vettingId, string? vettingProvider, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 36 params (`customerProfileSid` … `vettingProvider`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TrusthubV1ComplianceTollfreeInquiry`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ComplianceTollfreeInquiryEnumOptInType` | `Models/Enums/ComplianceTollfreeInquiryEnumOptInType.cs` |
| `TollfreeVerificationEnumBusinessType` | `Models/Enums/TollfreeVerificationEnumBusinessType.cs` |
| `TrusthubV1ComplianceTollfreeInquiry` | `Models/TrusthubV1ComplianceTollfreeInquiry.cs` |

