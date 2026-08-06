# TrusthubV1ComplianceInquiries — operations

Accessor: `client.TrusthubV1ComplianceInquiries` · Source: `Api/TrusthubV1ComplianceInquiries.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateComplianceInquiry
- **HTTP**: `POST /v1/ComplianceInquiries/Customers/Initialize` (Default9 (trusthub))
- **Notes**: Create a new Compliance Inquiry for the authenticated account. This is necessary to start a new embedded session.
- **Signature**: `CreateComplianceInquiry(string? notificationEmail, string? themeSetId, string? primaryProfileSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `notificationEmail` — nullable, no default → **must pass explicitly**
  - `themeSetId` — nullable, no default → **must pass explicitly**
  - `primaryProfileSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `NotificationEmail` ← `notificationEmail`, `ThemeSetId` ← `themeSetId`, `PrimaryProfileSid` ← `primaryProfileSid`
- **Returns**: `TrusthubV1ComplianceInquiry`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateComplianceInquiry
- **HTTP**: `POST /v1/ComplianceInquiries/Customers/{CustomerId}/Initialize` (Default9 (trusthub))
- **Notes**: Resume a specific Compliance Inquiry that has expired, or re-open a rejected Compliance Inquiry for editing.
- **Signature**: `UpdateComplianceInquiry(string customerId, string primaryProfileSid, string? themeSetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `themeSetId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PrimaryProfileSid` ← `primaryProfileSid`, `ThemeSetId` ← `themeSetId`
- **Returns**: `TrusthubV1ComplianceInquiry`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
