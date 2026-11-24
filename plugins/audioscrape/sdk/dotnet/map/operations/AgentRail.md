<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentRail — operations

Accessor: `client.AgentRail` · Source: `src/Audioscrape/Api/AgentRail.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BuyCredit

- **Signature**: `BuyCredit(BuyCreditOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BuyCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 409, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BuyCreditOperationRequest` | `src/Audioscrape/Requests/AgentRail/BuyCreditOperationRequest.cs` |
| `BuyCreditRequest` | `src/Audioscrape/Models/BuyCreditRequest.cs` |
| `BuyCreditError` | `src/Audioscrape/Errors/BuyCreditError.cs` |

### CreditBalance

- **Auth**: `options.BearerAuth`
- **Signature**: `CreditBalance(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreditBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreditBalanceError` | `src/Audioscrape/Errors/CreditBalanceError.cs` |

### Excerpt

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `Excerpt(ExcerptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpisodeId`, `T`
- **Query params (wire ← C#)**: `episode_id` ← `EpisodeId`, `t` ← `T`, `seconds` ← `Seconds`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ExcerptError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExcerptRequest` | `src/Audioscrape/Requests/AgentRail/ExcerptRequest.cs` |
| `ExcerptError` | `src/Audioscrape/Errors/ExcerptError.cs` |

### Manifest

- **Signature**: `Manifest(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### Overview

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `Overview(OverviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpisodeId`
- **Query params (wire ← C#)**: `episode_id` ← `EpisodeId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<OverviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OverviewRequest` | `src/Audioscrape/Requests/AgentRail/OverviewRequest.cs` |
| `OverviewError` | `src/Audioscrape/Errors/OverviewError.cs` |

### Search

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `Search(SearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `scope` ← `Scope`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchOperationRequest` | `src/Audioscrape/Requests/AgentRail/SearchOperationRequest.cs` |
| `AgentSearchRequest` | `src/Audioscrape/Models/AgentSearchRequest.cs` |
| `SearchError` | `src/Audioscrape/Errors/SearchError.cs` |

### Transcribe

- **Auth**: `options.BearerAuth`
- **Signature**: `Transcribe(TranscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TranscribeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranscribeRequest` | `src/Audioscrape/Requests/AgentRail/TranscribeRequest.cs` |
| `AgentTranscribeRequest` | `src/Audioscrape/Models/AgentTranscribeRequest.cs` |
| `TranscribeError` | `src/Audioscrape/Errors/TranscribeError.cs` |

### TranscriptionStatus

- **Auth**: `options.BearerAuth`
- **Signature**: `TranscriptionStatus(TranscriptionStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TranscriptionStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranscriptionStatusRequest` | `src/Audioscrape/Requests/AgentRail/TranscriptionStatusRequest.cs` |
| `TranscriptionStatusError` | `src/Audioscrape/Errors/TranscriptionStatusError.cs` |

