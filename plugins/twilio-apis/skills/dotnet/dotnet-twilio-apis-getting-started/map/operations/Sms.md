# Sms — operations

Accessor: `client.Sms` · Source: `Api/Sms.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMessage
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Messages.json` (Default (accounts))
- **Notes**: Send a message
- **Signature**: `CreateMessage(string accountSid, ContentType contentType, string to, string? statusCallback, string? applicationSid, double? maxPrice, bool? provideFeedback, int? attempt, int? validityPeriod, bool? forceDelivery, MessageEnumContentRetention? contentRetention, MessageEnumAddressRetention? addressRetention, bool? smartEncoded, IReadOnlyList<string>? persistentAction, MessageEnumTrafficType? trafficType, bool? shortenUrls, MessageEnumScheduleType? scheduleType, DateTimeOffset? sendAt, bool? sendAsMms, string? contentVariables, VerificationEnumRiskCheck? riskCheck, string? from, string? messagingServiceSid, string? body, IReadOnlyList<string>? mediaUrl, string? contentSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 23 params (`statusCallback` … `contentSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `To` ← `to`, `StatusCallback` ← `statusCallback`, `ApplicationSid` ← `applicationSid`, `MaxPrice` ← `maxPrice`, `ProvideFeedback` ← `provideFeedback`, `Attempt` ← `attempt`, `ValidityPeriod` ← `validityPeriod`, `ForceDelivery` ← `forceDelivery`, `ContentRetention` ← `contentRetention`, `AddressRetention` ← `addressRetention`, `SmartEncoded` ← `smartEncoded`, `PersistentAction` ← `persistentAction`, `TrafficType` ← `trafficType`, `ShortenUrls` ← `shortenUrls`, `ScheduleType` ← `scheduleType`, `SendAt` ← `sendAt`, `SendAsMms` ← `sendAsMms`, `ContentVariables` ← `contentVariables`, `RiskCheck` ← `riskCheck`, `From` ← `from`, `MessagingServiceSid` ← `messagingServiceSid`, `Body` ← `body`, `MediaUrl` ← `mediaUrl`, `ContentSid` ← `contentSid`
- **Returns**: `ApiV2010AccountMessage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
