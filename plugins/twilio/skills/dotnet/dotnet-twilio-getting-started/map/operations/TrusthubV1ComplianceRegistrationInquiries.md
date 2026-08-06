# TrusthubV1ComplianceRegistrationInquiries — operations

Accessor: `client.TrusthubV1ComplianceRegistrationInquiries` · Source: `Api/TrusthubV1ComplianceRegistrationInquiries.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateComplianceRegistration
- **HTTP**: `POST /v1/ComplianceInquiries/Registration/RegulatoryCompliance/GB/Initialize` (Default9 (trusthub))
- **Notes**: Create a new Compliance Registration Inquiry for the authenticated account. This is necessary to start a new embedded session.
- **Signature**: `CreateComplianceRegistration(CustomerType endUserType, ComplianceRegistrationEnumPhoneNumberType phoneNumberType, ComplianceRegistrationEnumBusinessIdentityType? businessIdentityType, ComplianceRegistrationEnumBusinessRegistrationAuthority? businessRegistrationAuthority, string? businessLegalName, string? notificationEmail, bool? acceptedNotificationReceipt, string? businessRegistrationNumber, string? businessWebsiteUrl, string? friendlyName, string? authorizedRepresentative1FirstName, string? authorizedRepresentative1LastName, string? authorizedRepresentative1Phone, string? authorizedRepresentative1Email, string? authorizedRepresentative1DateOfBirth, string? addressStreet, string? addressStreetSecondary, string? addressCity, string? addressSubdivision, string? addressPostalCode, string? addressCountryCode, string? emergencyAddressStreet, string? emergencyAddressStreetSecondary, string? emergencyAddressCity, string? emergencyAddressSubdivision, string? emergencyAddressPostalCode, string? emergencyAddressCountryCode, bool? useAddressAsEmergencyAddress, string? fileName, string? file, string? firstName, string? lastName, string? dateOfBirth, string? individualEmail, string? individualPhone, bool? isIsvEmbed, string? isvRegisteringForSelfOrTenant, string? statusCallbackUrl, string? themeSetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 37 params (`businessIdentityType` … `themeSetId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `EndUserType` ← `endUserType`, `PhoneNumberType` ← `phoneNumberType`, `BusinessIdentityType` ← `businessIdentityType`, `BusinessRegistrationAuthority` ← `businessRegistrationAuthority`, `BusinessLegalName` ← `businessLegalName`, `NotificationEmail` ← `notificationEmail`, `AcceptedNotificationReceipt` ← `acceptedNotificationReceipt`, `BusinessRegistrationNumber` ← `businessRegistrationNumber`, `BusinessWebsiteUrl` ← `businessWebsiteUrl`, `FriendlyName` ← `friendlyName`, `AuthorizedRepresentative1FirstName` ← `authorizedRepresentative1FirstName`, `AuthorizedRepresentative1LastName` ← `authorizedRepresentative1LastName`, `AuthorizedRepresentative1Phone` ← `authorizedRepresentative1Phone`, `AuthorizedRepresentative1Email` ← `authorizedRepresentative1Email`, `AuthorizedRepresentative1DateOfBirth` ← `authorizedRepresentative1DateOfBirth`, `AddressStreet` ← `addressStreet`, `AddressStreetSecondary` ← `addressStreetSecondary`, `AddressCity` ← `addressCity`, `AddressSubdivision` ← `addressSubdivision`, `AddressPostalCode` ← `addressPostalCode`, `AddressCountryCode` ← `addressCountryCode`, `EmergencyAddressStreet` ← `emergencyAddressStreet`, `EmergencyAddressStreetSecondary` ← `emergencyAddressStreetSecondary`, `EmergencyAddressCity` ← `emergencyAddressCity`, `EmergencyAddressSubdivision` ← `emergencyAddressSubdivision`, `EmergencyAddressPostalCode` ← `emergencyAddressPostalCode`, `EmergencyAddressCountryCode` ← `emergencyAddressCountryCode`, `UseAddressAsEmergencyAddress` ← `useAddressAsEmergencyAddress`, `FileName` ← `fileName`, `File` ← `file`, `FirstName` ← `firstName`, `LastName` ← `lastName`, `DateOfBirth` ← `dateOfBirth`, `IndividualEmail` ← `individualEmail`, `IndividualPhone` ← `individualPhone`, `IsIsvEmbed` ← `isIsvEmbed`, `IsvRegisteringForSelfOrTenant` ← `isvRegisteringForSelfOrTenant`, `StatusCallbackUrl` ← `statusCallbackUrl`, `ThemeSetId` ← `themeSetId`
- **Returns**: `TrusthubV1ComplianceRegistration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateComplianceRegistration
- **HTTP**: `POST /v1/ComplianceInquiries/Registration/{RegistrationId}/RegulatoryCompliance/GB/Initialize` (Default9 (trusthub))
- **Notes**: Resume a specific Regulatory Compliance Inquiry that has expired, or re-open a rejected Compliance Inquiry for editing.
- **Signature**: `UpdateComplianceRegistration(string registrationId, bool? isIsvEmbed, string? themeSetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isIsvEmbed` — nullable, no default → **must pass explicitly**
  - `themeSetId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IsIsvEmbed` ← `isIsvEmbed`, `ThemeSetId` ← `themeSetId`
- **Returns**: `TrusthubV1ComplianceRegistration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
