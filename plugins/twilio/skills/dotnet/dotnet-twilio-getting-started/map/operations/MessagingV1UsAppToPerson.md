<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1UsAppToPerson — operations

Accessor: `client.MessagingV1UsAppToPerson` · Source: `Api/MessagingV1UsAppToPerson.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUsAppToPerson

- **Server group**: `Default1`
- **Signature**: `CreateUsAppToPerson(string messagingServiceSid, string? xTwilioApiVersion, string brandRegistrationSid, string description, string messageFlow, IReadOnlyList<string> messageSamples, string usAppToPersonUsecase, bool hasEmbeddedLinks, bool hasEmbeddedPhone, string? optInMessage, string? optOutMessage, string? helpMessage, IReadOnlyList<string>? optInKeywords, IReadOnlyList<string>? optOutKeywords, IReadOnlyList<string>? helpKeywords, bool? subscriberOptIn, bool? ageGated, bool? directLending, string? privacyPolicyUrl, string? termsAndConditionsUrl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioApiVersion` … `termsAndConditionsUrl`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `MessagingV1ServiceUsAppToPersonResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceUsAppToPersonResponse` | `Models/AnyOf/MessagingV1ServiceUsAppToPersonResponse.cs` |

### DeleteUsAppToPerson

- **Server group**: `Default1`
- **Signature**: `DeleteUsAppToPerson(string messagingServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchUsAppToPerson

- **Server group**: `Default1`
- **Signature**: `FetchUsAppToPerson(string messagingServiceSid, string sid, string? xTwilioApiVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioApiVersion` — nullable, no default → **must pass explicitly**
- **Returns**: `MessagingV1ServiceUsAppToPersonResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceUsAppToPersonResponse` | `Models/AnyOf/MessagingV1ServiceUsAppToPersonResponse.cs` |

### ListUsAppToPerson

- **Server group**: `Default1`
- **Signature**: `ListUsAppToPerson(string messagingServiceSid, long? pageSize, int? page, string? pageToken, string? xTwilioApiVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `xTwilioApiVersion`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUsAppToPersonResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListUsAppToPersonResponse` | `Models/ListUsAppToPersonResponse.cs` |

### UpdateUsAppToPerson

- **Server group**: `Default1`
- **Signature**: `UpdateUsAppToPerson(string messagingServiceSid, string sid, string? xTwilioApiVersion, bool hasEmbeddedLinks, bool hasEmbeddedPhone, IReadOnlyList<string> messageSamples, string messageFlow, string description, bool ageGated, bool directLending, string? privacyPolicyUrl, string? termsAndConditionsUrl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioApiVersion` — nullable, no default → **must pass explicitly**
  - `privacyPolicyUrl` — nullable, no default → **must pass explicitly**
  - `termsAndConditionsUrl` — nullable, no default → **must pass explicitly**
- **Returns**: `MessagingV1ServiceUsAppToPersonResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceUsAppToPersonResponse` | `Models/AnyOf/MessagingV1ServiceUsAppToPersonResponse.cs` |

