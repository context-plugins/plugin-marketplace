<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1ComplianceInquiries — operations

Accessor: `client.TrusthubV1ComplianceInquiries` · Source: `Api/TrusthubV1ComplianceInquiries.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateComplianceInquiry

- **Server group**: `Default9`
- **Signature**: `CreateComplianceInquiry(string? notificationEmail, string? themeSetId, string? primaryProfileSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `notificationEmail` — nullable, no default → **must pass explicitly**
  - `themeSetId` — nullable, no default → **must pass explicitly**
  - `primaryProfileSid` — nullable, no default → **must pass explicitly**
- **Returns**: `TrusthubV1ComplianceInquiry`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1ComplianceInquiry` | `Models/TrusthubV1ComplianceInquiry.cs` |

### UpdateComplianceInquiry

- **Server group**: `Default9`
- **Signature**: `UpdateComplianceInquiry(string customerId, string primaryProfileSid, string? themeSetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `themeSetId` — nullable, no default → **must pass explicitly**
- **Returns**: `TrusthubV1ComplianceInquiry`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1ComplianceInquiry` | `Models/TrusthubV1ComplianceInquiry.cs` |

