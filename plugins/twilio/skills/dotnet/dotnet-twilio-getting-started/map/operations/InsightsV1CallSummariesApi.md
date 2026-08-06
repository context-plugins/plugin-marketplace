# InsightsV1CallSummariesApi — operations

Accessor: `client.InsightsV1CallSummariesApi` · Source: `Api/InsightsV1CallSummariesApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListCallSummaries
- **HTTP**: `GET /v1/Voice/Summaries` (Default14 (insights))
- **Notes**: Get a list of Call Summaries.
- **Signature**: `ListCallSummaries(string? from, string? to, string? fromCarrier, string? toCarrier, string? fromCountryCode, string? toCountryCode, bool? verifiedCaller, bool? hasTag, string? startTime, string? endTime, string? callType, string? callState, string? direction, CallSummariesEnumProcessingStateRequest? processingState, CallSummariesEnumSortBy? sortBy, string? subaccount, bool? abnormalSession, CallSummariesEnumAnsweredBy? answeredBy, string? answeredByAnnotation, string? connectivityIssueAnnotation, string? qualityIssueAnnotation, bool? spamAnnotation, string? callScoreAnnotation, bool? brandedEnabled, bool? voiceIntegrityEnabled, string? brandedBundleSid, bool? brandedLogo, string? brandedType, string? brandedUseCase, string? brandedCallReason, string? voiceIntegrityBundleSid, string? voiceIntegrityUseCase, string? businessProfileIdentity, string? businessProfileIndustry, string? businessProfileBundleSid, string? businessProfileType, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 39 params (`from` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `From` ← `from`, `To` ← `to`, `FromCarrier` ← `fromCarrier`, `ToCarrier` ← `toCarrier`, `FromCountryCode` ← `fromCountryCode`, `ToCountryCode` ← `toCountryCode`, `VerifiedCaller` ← `verifiedCaller`, `HasTag` ← `hasTag`, `StartTime` ← `startTime`, `EndTime` ← `endTime`, `CallType` ← `callType`, `CallState` ← `callState`, `Direction` ← `direction`, `ProcessingState` ← `processingState`, `SortBy` ← `sortBy`, `Subaccount` ← `subaccount`, `AbnormalSession` ← `abnormalSession`, `AnsweredBy` ← `answeredBy`, `AnsweredByAnnotation` ← `answeredByAnnotation`, `ConnectivityIssueAnnotation` ← `connectivityIssueAnnotation`, `QualityIssueAnnotation` ← `qualityIssueAnnotation`, `SpamAnnotation` ← `spamAnnotation`, `CallScoreAnnotation` ← `callScoreAnnotation`, `BrandedEnabled` ← `brandedEnabled`, `VoiceIntegrityEnabled` ← `voiceIntegrityEnabled`, `BrandedBundleSid` ← `brandedBundleSid`, `BrandedLogo` ← `brandedLogo`, `BrandedType` ← `brandedType`, `BrandedUseCase` ← `brandedUseCase`, `BrandedCallReason` ← `brandedCallReason`, `VoiceIntegrityBundleSid` ← `voiceIntegrityBundleSid`, `VoiceIntegrityUseCase` ← `voiceIntegrityUseCase`, `BusinessProfileIdentity` ← `businessProfileIdentity`, `BusinessProfileIndustry` ← `businessProfileIndustry`, `BusinessProfileBundleSid` ← `businessProfileBundleSid`, `BusinessProfileType` ← `businessProfileType`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCallSummariesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
