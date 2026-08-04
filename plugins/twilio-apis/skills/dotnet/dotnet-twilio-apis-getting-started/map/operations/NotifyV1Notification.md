# NotifyV1Notification — operations

Accessor: `client.NotifyV1Notification` · Source: `Api/NotifyV1Notification.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateNotification
- **HTTP**: `POST /v1/Services/{ServiceSid}/Notifications` (Default (accounts))
- **Signature**: `CreateNotification(string serviceSid, ContentType contentType, string? body, NotifPriority? priority, int? ttl, string? title, string? sound, string? action, BinaryContent? data, BinaryContent? apn, BinaryContent? gcm, BinaryContent? sms, BinaryContent? facebookMessenger, BinaryContent? fcm, IReadOnlyList<string>? segment, BinaryContent? alexa, IReadOnlyList<string>? toBinding, string? deliveryCallbackUrl, IReadOnlyList<string>? identity, IReadOnlyList<string>? tag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 18 params (`body` … `tag`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Body` ← `body`, `Priority` ← `priority`, `Ttl` ← `ttl`, `Title` ← `title`, `Sound` ← `sound`, `Action` ← `action`, `Data` ← `data`, `Apn` ← `apn`, `Gcm` ← `gcm`, `Sms` ← `sms`, `FacebookMessenger` ← `facebookMessenger`, `Fcm` ← `fcm`, `Segment` ← `segment`, `Alexa` ← `alexa`, `ToBinding` ← `toBinding`, `DeliveryCallbackUrl` ← `deliveryCallbackUrl`, `Identity` ← `identity`, `Tag` ← `tag`
- **Returns**: `Notification`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
