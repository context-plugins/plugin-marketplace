# NotifyV1Service — operations

Accessor: `client.NotifyV1Service` · Source: `Api/NotifyV1Service.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdateService
- **HTTP**: `POST /v1/Services/{Sid}` (Default (accounts))
- **Signature**: `UpdateService(string sid, ContentType contentType, string? friendlyName, string? apnCredentialSid, string? gcmCredentialSid, string? messagingServiceSid, string? facebookMessengerPageId, string? defaultApnNotificationProtocolVersion, string? defaultGcmNotificationProtocolVersion, string? fcmCredentialSid, string? defaultFcmNotificationProtocolVersion, bool? logEnabled, string? alexaSkillId, string? defaultAlexaNotificationProtocolVersion, string? deliveryCallbackUrl, bool? deliveryCallbackEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`friendlyName` … `deliveryCallbackEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `ApnCredentialSid` ← `apnCredentialSid`, `GcmCredentialSid` ← `gcmCredentialSid`, `MessagingServiceSid` ← `messagingServiceSid`, `FacebookMessengerPageId` ← `facebookMessengerPageId`, `DefaultApnNotificationProtocolVersion` ← `defaultApnNotificationProtocolVersion`, `DefaultGcmNotificationProtocolVersion` ← `defaultGcmNotificationProtocolVersion`, `FcmCredentialSid` ← `fcmCredentialSid`, `DefaultFcmNotificationProtocolVersion` ← `defaultFcmNotificationProtocolVersion`, `LogEnabled` ← `logEnabled`, `AlexaSkillId` ← `alexaSkillId`, `DefaultAlexaNotificationProtocolVersion` ← `defaultAlexaNotificationProtocolVersion`, `DeliveryCallbackUrl` ← `deliveryCallbackUrl`, `DeliveryCallbackEnabled` ← `deliveryCallbackEnabled`
- **Returns**: `Service1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
