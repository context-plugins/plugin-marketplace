<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1ComplianceRegistrationInquiries — operations

Accessor: `client.TrusthubV1ComplianceRegistrationInquiries` · Source: `Api/TrusthubV1ComplianceRegistrationInquiries.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateComplianceRegistration

- **Server group**: `Default9`
- **Signature**: `CreateComplianceRegistration(CustomerType endUserType, ComplianceRegistrationEnumPhoneNumberType phoneNumberType, ComplianceRegistrationEnumBusinessIdentityType? businessIdentityType, ComplianceRegistrationEnumBusinessRegistrationAuthority? businessRegistrationAuthority, string? businessLegalName, string? notificationEmail, bool? acceptedNotificationReceipt, string? businessRegistrationNumber, string? businessWebsiteUrl, string? friendlyName, string? authorizedRepresentative1FirstName, string? authorizedRepresentative1LastName, string? authorizedRepresentative1Phone, string? authorizedRepresentative1Email, string? authorizedRepresentative1DateOfBirth, string? addressStreet, string? addressStreetSecondary, string? addressCity, string? addressSubdivision, string? addressPostalCode, string? addressCountryCode, string? emergencyAddressStreet, string? emergencyAddressStreetSecondary, string? emergencyAddressCity, string? emergencyAddressSubdivision, string? emergencyAddressPostalCode, string? emergencyAddressCountryCode, bool? useAddressAsEmergencyAddress, string? fileName, string? file, string? firstName, string? lastName, string? dateOfBirth, string? individualEmail, string? individualPhone, bool? isIsvEmbed, string? isvRegisteringForSelfOrTenant, string? statusCallbackUrl, string? themeSetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 37 params (`businessIdentityType` … `themeSetId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TrusthubV1ComplianceRegistration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CustomerType` | `Models/Enums/CustomerType.cs` |
| `ComplianceRegistrationEnumPhoneNumberType` | `Models/Enums/ComplianceRegistrationEnumPhoneNumberType.cs` |
| `ComplianceRegistrationEnumBusinessIdentityType` | `Models/Enums/ComplianceRegistrationEnumBusinessIdentityType.cs` |
| `ComplianceRegistrationEnumBusinessRegistrationAuthority` | `Models/Enums/ComplianceRegistrationEnumBusinessRegistrationAuthority.cs` |
| `TrusthubV1ComplianceRegistration` | `Models/TrusthubV1ComplianceRegistration.cs` |

### UpdateComplianceRegistration

- **Server group**: `Default9`
- **Signature**: `UpdateComplianceRegistration(string registrationId, bool? isIsvEmbed, string? themeSetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isIsvEmbed` — nullable, no default → **must pass explicitly**
  - `themeSetId` — nullable, no default → **must pass explicitly**
- **Returns**: `TrusthubV1ComplianceRegistration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1ComplianceRegistration` | `Models/TrusthubV1ComplianceRegistration.cs` |

