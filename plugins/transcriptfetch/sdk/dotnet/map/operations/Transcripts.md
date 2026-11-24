<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transcripts — operations

Accessor: `client.Transcripts` · Source: `src/TranscriptFetch/Api/Transcripts.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchChannelVideos

- **Auth**: `options.BearerAuth`
- **Signature**: `FetchChannelVideos(FetchChannelVideosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<FetchChannelVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 422, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchChannelVideosRequest` | `src/TranscriptFetch/Requests/Transcripts/FetchChannelVideosRequest.cs` |
| `ChannelRequest` | `src/TranscriptFetch/Models/ChannelRequest.cs` |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `FetchChannelVideosError` | `src/TranscriptFetch/Errors/FetchChannelVideosError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### FetchPlaylistVideos

- **Auth**: `options.BearerAuth`
- **Signature**: `FetchPlaylistVideos(FetchPlaylistVideosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<FetchPlaylistVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 422, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPlaylistVideosRequest` | `src/TranscriptFetch/Requests/Transcripts/FetchPlaylistVideosRequest.cs` |
| `PlaylistRequest` | `src/TranscriptFetch/Models/PlaylistRequest.cs` |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `FetchPlaylistVideosError` | `src/TranscriptFetch/Errors/FetchPlaylistVideosError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### FetchTranscriptsBatch

- **Auth**: `options.BearerAuth`
- **Signature**: `FetchTranscriptsBatch(FetchTranscriptsBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BatchEnvelope`
- **Error**: `ApiException<FetchTranscriptsBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchTranscriptsBatchRequest` | `src/TranscriptFetch/Requests/Transcripts/FetchTranscriptsBatchRequest.cs` |
| `BatchRequest` | `src/TranscriptFetch/Models/BatchRequest.cs` |
| `BatchEnvelope` | `src/TranscriptFetch/Models/BatchEnvelope.cs` |
| `FetchTranscriptsBatchError` | `src/TranscriptFetch/Errors/FetchTranscriptsBatchError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### FetchVideoTranscript

- **Auth**: `options.BearerAuth`
- **Signature**: `FetchVideoTranscript(FetchVideoTranscriptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<FetchVideoTranscriptError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 422, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchVideoTranscriptRequest` | `src/TranscriptFetch/Requests/Transcripts/FetchVideoTranscriptRequest.cs` |
| `VideoRequest` | `src/TranscriptFetch/Models/VideoRequest.cs` |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `FetchVideoTranscriptError` | `src/TranscriptFetch/Errors/FetchVideoTranscriptError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### GetApiV2TranscriptsJobsByJobId

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV2TranscriptsJobsByJobId(GetApiV2TranscriptsJobsByJobIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobStatusEnvelope2`
- **Error**: `ApiException<GetApiV2TranscriptsJobsByJobIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV2TranscriptsJobsByJobIdRequest` | `src/TranscriptFetch/Requests/Transcripts/GetApiV2TranscriptsJobsByJobIdRequest.cs` |
| `JobStatusEnvelope2` | `src/TranscriptFetch/Models/JobStatusEnvelope2.cs` |
| `GetApiV2TranscriptsJobsByJobIdError` | `src/TranscriptFetch/Errors/GetApiV2TranscriptsJobsByJobIdError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### GetTranscriptJob

- **Auth**: `options.BearerAuth`
- **Signature**: `GetTranscriptJob(GetTranscriptJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobStatusEnvelope`
- **Error**: `ApiException<GetTranscriptJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTranscriptJobRequest` | `src/TranscriptFetch/Requests/Transcripts/GetTranscriptJobRequest.cs` |
| `JobStatusEnvelope` | `src/TranscriptFetch/Models/JobStatusEnvelope.cs` |
| `GetTranscriptJobError` | `src/TranscriptFetch/Errors/GetTranscriptJobError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### PostApiV2TranscriptsBatch

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV2TranscriptsBatch(PostApiV2TranscriptsBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BatchEnvelope`
- **Error**: `ApiException<PostApiV2TranscriptsBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV2TranscriptsBatchRequest` | `src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsBatchRequest.cs` |
| `BatchRequest` | `src/TranscriptFetch/Models/BatchRequest.cs` |
| `BatchEnvelope` | `src/TranscriptFetch/Models/BatchEnvelope.cs` |
| `PostApiV2TranscriptsBatchError` | `src/TranscriptFetch/Errors/PostApiV2TranscriptsBatchError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### PostApiV2TranscriptsChannel

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV2TranscriptsChannel(PostApiV2TranscriptsChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<PostApiV2TranscriptsChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 422, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV2TranscriptsChannelRequest` | `src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsChannelRequest.cs` |
| `ChannelRequest2` | `src/TranscriptFetch/Models/ChannelRequest2.cs` |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `PostApiV2TranscriptsChannelError` | `src/TranscriptFetch/Errors/PostApiV2TranscriptsChannelError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### PostApiV2TranscriptsPlaylist

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV2TranscriptsPlaylist(PostApiV2TranscriptsPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<PostApiV2TranscriptsPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 422, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV2TranscriptsPlaylistRequest` | `src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsPlaylistRequest.cs` |
| `PlaylistRequest2` | `src/TranscriptFetch/Models/PlaylistRequest2.cs` |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `PostApiV2TranscriptsPlaylistError` | `src/TranscriptFetch/Errors/PostApiV2TranscriptsPlaylistError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### PostApiV2TranscriptsSearch

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV2TranscriptsSearch(PostApiV2TranscriptsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<PostApiV2TranscriptsSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 422, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV2TranscriptsSearchRequest` | `src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsSearchRequest.cs` |
| `SearchRequest2` | `src/TranscriptFetch/Models/SearchRequest2.cs` |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `PostApiV2TranscriptsSearchError` | `src/TranscriptFetch/Errors/PostApiV2TranscriptsSearchError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### PostApiV2TranscriptsVideo

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV2TranscriptsVideo(PostApiV2TranscriptsVideoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<PostApiV2TranscriptsVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 422, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV2TranscriptsVideoRequest` | `src/TranscriptFetch/Requests/Transcripts/PostApiV2TranscriptsVideoRequest.cs` |
| `VideoRequest` | `src/TranscriptFetch/Models/VideoRequest.cs` |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `PostApiV2TranscriptsVideoError` | `src/TranscriptFetch/Errors/PostApiV2TranscriptsVideoError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### SearchVideos

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchVideos(SearchVideosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<SearchVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 409, 422, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchVideosRequest` | `src/TranscriptFetch/Requests/Transcripts/SearchVideosRequest.cs` |
| `SearchRequest` | `src/TranscriptFetch/Models/SearchRequest.cs` |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `SearchVideosError` | `src/TranscriptFetch/Errors/SearchVideosError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

