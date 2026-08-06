# MessagingV1UsAppToPerson — operations

Accessor: `client.MessagingV1UsAppToPerson` · Source: `Api/MessagingV1UsAppToPerson.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateUsAppToPerson
- **HTTP**: `POST /v1/Services/{MessagingServiceSid}/Compliance/Usa2p` (Default1 (messaging))
- **Signature**: `CreateUsAppToPerson(string messagingServiceSid, string? xTwilioApiVersion, string brandRegistrationSid, string description, string messageFlow, IReadOnlyList<string> messageSamples, string usAppToPersonUsecase, bool hasEmbeddedLinks, bool hasEmbeddedPhone, string? optInMessage, string? optOutMessage, string? helpMessage, IReadOnlyList<string>? optInKeywords, IReadOnlyList<string>? optOutKeywords, IReadOnlyList<string>? helpKeywords, bool? subscriberOptIn, bool? ageGated, bool? directLending, string? privacyPolicyUrl, string? termsAndConditionsUrl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`xTwilioApiVersion` … `termsAndConditionsUrl`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `BrandRegistrationSid` ← `brandRegistrationSid`, `Description` ← `description`, `MessageFlow` ← `messageFlow`, `MessageSamples` ← `messageSamples`, `UsAppToPersonUsecase` ← `usAppToPersonUsecase`, `HasEmbeddedLinks` ← `hasEmbeddedLinks`, `HasEmbeddedPhone` ← `hasEmbeddedPhone`, `OptInMessage` ← `optInMessage`, `OptOutMessage` ← `optOutMessage`, `HelpMessage` ← `helpMessage`, `OptInKeywords` ← `optInKeywords`, `OptOutKeywords` ← `optOutKeywords`, `HelpKeywords` ← `helpKeywords`, `SubscriberOptIn` ← `subscriberOptIn`, `AgeGated` ← `ageGated`, `DirectLending` ← `directLending`, `PrivacyPolicyUrl` ← `privacyPolicyUrl`, `TermsAndConditionsUrl` ← `termsAndConditionsUrl`
- **Returns**: `MessagingV1ServiceUsAppToPersonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUsAppToPerson
- **HTTP**: `DELETE /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}` (Default1 (messaging))
- **Signature**: `DeleteUsAppToPerson(string messagingServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchUsAppToPerson
- **HTTP**: `GET /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}` (Default1 (messaging))
- **Signature**: `FetchUsAppToPerson(string messagingServiceSid, string sid, string? xTwilioApiVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioApiVersion` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1ServiceUsAppToPersonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListUsAppToPerson
- **HTTP**: `GET /v1/Services/{MessagingServiceSid}/Compliance/Usa2p` (Default1 (messaging))
- **Signature**: `ListUsAppToPerson(string messagingServiceSid, long? pageSize, int? page, string? pageToken, string? xTwilioApiVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `xTwilioApiVersion`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUsAppToPersonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateUsAppToPerson
- **HTTP**: `POST /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}` (Default1 (messaging))
- **Signature**: `UpdateUsAppToPerson(string messagingServiceSid, string sid, string? xTwilioApiVersion, bool hasEmbeddedLinks, bool hasEmbeddedPhone, IReadOnlyList<string> messageSamples, string messageFlow, string description, bool ageGated, bool directLending, string? privacyPolicyUrl, string? termsAndConditionsUrl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioApiVersion` — nullable, no default → **must pass explicitly**
  - `privacyPolicyUrl` — nullable, no default → **must pass explicitly**
  - `termsAndConditionsUrl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `HasEmbeddedLinks` ← `hasEmbeddedLinks`, `HasEmbeddedPhone` ← `hasEmbeddedPhone`, `MessageSamples` ← `messageSamples`, `MessageFlow` ← `messageFlow`, `Description` ← `description`, `AgeGated` ← `ageGated`, `DirectLending` ← `directLending`, `PrivacyPolicyUrl` ← `privacyPolicyUrl`, `TermsAndConditionsUrl` ← `termsAndConditionsUrl`
- **Returns**: `MessagingV1ServiceUsAppToPersonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
