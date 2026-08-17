<!-- Generated file — do not edit; regenerated with the SDK. -->

# LookupsV2PhoneNumber — operations

Accessor: `client.LookupsV2PhoneNumber` · Source: `Api/LookupsV2PhoneNumber.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchPhoneNumber3

- **Server group**: `Default4`
- **Signature**: `FetchPhoneNumber3(string phoneNumber, string? fields, string? countryCode, string? firstName, string? lastName, string? addressLine1, string? addressLine2, string? city, string? state, string? postalCode, string? addressCountryCode, string? nationalId, string? dateOfBirth, string? lastVerifiedDate, string? verificationSid, string? partnerSubId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`fields` … `partnerSubId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Fields` ← `fields`, `CountryCode` ← `countryCode`, `FirstName` ← `firstName`, `LastName` ← `lastName`, `AddressLine1` ← `addressLine1`, `AddressLine2` ← `addressLine2`, `City` ← `city`, `State` ← `state`, `PostalCode` ← `postalCode`, `AddressCountryCode` ← `addressCountryCode`, `NationalId` ← `nationalId`, `DateOfBirth` ← `dateOfBirth`, `LastVerifiedDate` ← `lastVerifiedDate`, `VerificationSid` ← `verificationSid`, `PartnerSubId` ← `partnerSubId`
- **Returns**: `LookupResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `LookupResponse` | `Models/LookupResponse.cs` |

