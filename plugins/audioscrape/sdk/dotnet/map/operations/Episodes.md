<!-- Generated file — do not edit; regenerated with the SDK. -->

# Episodes — operations

Accessor: `client.Episodes` · Source: `src/Audioscrape/Api/Episodes.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEpisodeTranscript

- **Auth**: `options.BearerAuth`
- **Signature**: `GetEpisodeTranscript(GetEpisodeTranscriptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpisodeId`
- **Returns**: `Transcript`
- **Error**: `ApiException<GetEpisodeTranscriptError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEpisodeTranscriptRequest` | `src/Audioscrape/Requests/Episodes/GetEpisodeTranscriptRequest.cs` |
| `Transcript` | `src/Audioscrape/Models/Transcript.cs` |
| `GetEpisodeTranscriptError` | `src/Audioscrape/Errors/GetEpisodeTranscriptError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### GetPublicEpisode

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPublicEpisode(GetPublicEpisodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpisodeId`
- **Query params (wire ← C#)**: `include` ← `Include`
- **Returns**: `EpisodeDetail`
- **Error**: `ApiException<GetPublicEpisodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPublicEpisodeRequest` | `src/Audioscrape/Requests/Episodes/GetPublicEpisodeRequest.cs` |
| `EpisodeDetail` | `src/Audioscrape/Models/EpisodeDetail.cs` |
| `GetPublicEpisodeError` | `src/Audioscrape/Errors/GetPublicEpisodeError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### ListRecentEpisodesV1

- **Auth**: `options.BearerAuth`
- **Signature**: `ListRecentEpisodesV1(ListRecentEpisodesV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `EpisodeList`
- **Error**: `ApiException<ListRecentEpisodesV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecentEpisodesV1Request` | `src/Audioscrape/Requests/Episodes/ListRecentEpisodesV1Request.cs` |
| `EpisodeList` | `src/Audioscrape/Models/EpisodeList.cs` |
| `ListRecentEpisodesV1Error` | `src/Audioscrape/Errors/ListRecentEpisodesV1Error.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

