# LookupsV2PhoneNumber — operations

Accessor: `client.LookupsV2PhoneNumber` · Source: `Api/LookupsV2PhoneNumber.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchPhoneNumber2
- **HTTP**: `GET /v2/PhoneNumbers/{PhoneNumber}` (Default5 (lookups))
- **Notes**: The Lookup API allows you to query information on a phone number so that you can make a trusted interaction with your user
- **Signature**: `FetchPhoneNumber2(string phoneNumber, string? fields, string? countryCode, string? firstName, string? lastName, string? addressLine1, string? addressLine2, string? city, string? state, string? postalCode, string? addressCountryCode, string? nationalId, string? dateOfBirth, string? lastVerifiedDate, string? verificationSid, string? partnerSubId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`fields` … `partnerSubId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Fields` ← `fields`, `CountryCode` ← `countryCode`, `FirstName` ← `firstName`, `LastName` ← `lastName`, `AddressLine1` ← `addressLine1`, `AddressLine2` ← `addressLine2`, `City` ← `city`, `State` ← `state`, `PostalCode` ← `postalCode`, `AddressCountryCode` ← `addressCountryCode`, `NationalId` ← `nationalId`, `DateOfBirth` ← `dateOfBirth`, `LastVerifiedDate` ← `lastVerifiedDate`, `VerificationSid` ← `verificationSid`, `PartnerSubId` ← `partnerSubId`
- **Returns**: `LookupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
