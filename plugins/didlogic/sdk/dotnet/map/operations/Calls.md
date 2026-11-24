<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calls — operations

Accessor: `client.Calls` · Source: `src/DidLogic/Api/Calls.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CallPriceShow

- **Auth**: `options.BearerAuth`
- **Signature**: `CallPriceShow(CallPriceShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ANumber`, `BNumber`, `Sipaccount`
- **Query params (wire ← C#)**: `a_number` ← `ANumber`, `b_number` ← `BNumber`, `sipaccount` ← `Sipaccount`
- **Returns**: `ApiV1CallPriceResponse`
- **Error**: `ApiException<CallPriceShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CallPrice404Error1([NotNullWhen(true)] out ApiV1CallPrice404Error1? value)` [404] · `TryGetApiV1CallPrice422Error1([NotNullWhen(true)] out ApiV1CallPrice422Error1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CallPriceShowRequest` | `src/DidLogic/Requests/Calls/CallPriceShowRequest.cs` |
| `ApiV1CallPriceResponse` | `src/DidLogic/Models/ApiV1CallPriceResponse.cs` |
| `CallPriceShowError` | `src/DidLogic/Errors/CallPriceShowError.cs` |
| `ApiV1CallPrice404Error1` | `src/DidLogic/Models/ApiV1CallPrice404Error1.cs` |
| `ApiV1CallPrice422Error1` | `src/DidLogic/Models/ApiV1CallPrice422Error1.cs` |

### CallsRecording

- **Auth**: `options.BearerAuth`
- **Signature**: `CallsRecording(CallsRecordingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Callid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CallsRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CallsRecordingResponse1([NotNullWhen(true)] out ApiV1CallsRecordingResponse1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CallsRecordingRequest` | `src/DidLogic/Requests/Calls/CallsRecordingRequest.cs` |
| `CallsRecordingError` | `src/DidLogic/Errors/CallsRecordingError.cs` |
| `ApiV1CallsRecordingResponse1` | `src/DidLogic/Models/AnyOf/ApiV1CallsRecordingResponse1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### CallsShow

- **Auth**: `options.BearerAuth`
- **Signature**: `CallsShow(CallsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `missed` ← `Missed`, `from_search` ← `FromSearch`, `to_search` ← `ToSearch`, `amd_status` ← `AmdStatus`, `hangup_cause` ← `HangupCause`, `filter` ← `Filter`, `sip_account` ← `SipAccount`, `from` ← `From`, `to` ← `To`, `all` ← `All`, `page` ← `Page`, `per_page` ← `PerPage`
- **Returns**: `CdrListResponse`
- **Error**: `ApiException<CallsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Calls401Error1([NotNullWhen(true)] out ApiV1Calls401Error1? value)` [401] · `TryGetApiV1Calls403Error1([NotNullWhen(true)] out ApiV1Calls403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CallsShowRequest` | `src/DidLogic/Requests/Calls/CallsShowRequest.cs` |
| `Type1` | `src/DidLogic/Models/Enums/Type1.cs` |
| `Missed` | `src/DidLogic/Models/Enums/Missed.cs` |
| `HangupCause1` | `src/DidLogic/Models/Enums/HangupCause1.cs` |
| `CdrListResponse` | `src/DidLogic/Models/CdrListResponse.cs` |
| `CallsShowError` | `src/DidLogic/Errors/CallsShowError.cs` |
| `ApiV1Calls401Error1` | `src/DidLogic/Models/ApiV1Calls401Error1.cs` |
| `ApiV1Calls403Error1` | `src/DidLogic/Models/ApiV1Calls403Error1.cs` |

### CallsStatistics

- **Auth**: `options.BearerAuth`
- **Signature**: `CallsStatistics(CallsStatisticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `sipfriend` ← `Sipfriend`, `search` ← `Search`, `amd_status` ← `AmdStatus`, `hangup_cause` ← `HangupCause`
- **Returns**: `ApiV1CallsStatisticsResponse`
- **Error**: `ApiException<CallsStatisticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CallsStatistics403Error1([NotNullWhen(true)] out ApiV1CallsStatistics403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CallsStatisticsRequest` | `src/DidLogic/Requests/Calls/CallsStatisticsRequest.cs` |
| `HangupCause1` | `src/DidLogic/Models/Enums/HangupCause1.cs` |
| `ApiV1CallsStatisticsResponse` | `src/DidLogic/Models/ApiV1CallsStatisticsResponse.cs` |
| `CallsStatisticsError` | `src/DidLogic/Errors/CallsStatisticsError.cs` |
| `ApiV1CallsStatistics403Error1` | `src/DidLogic/Models/ApiV1CallsStatistics403Error1.cs` |

