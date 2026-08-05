# VideosTranscripts — operations

Accessor: `client.VideosTranscripts` · Source: `Api/VideosTranscripts.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTranscript
- **HTTP**: `GET /videos/{video_id}/transcripts/{texttrack_id}` (Default (api))
- **Notes**: This method returns the transcript segments of the specified text track.
- **Signature**: `GetTranscript(double texttrackId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SegmentConnection`
- **Error**: `SdkException<GetTranscriptError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTranscriptMetadata
- **HTTP**: `GET /videos/{container_uuid}/transcript/{texttrack_id}/metadata` (Default (api))
- **Notes**: This method returns the transcript metadata of the specified text track.
- **Signature**: `GetTranscriptMetadata(string containerUuid, double texttrackId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TranscriptMetadata`
- **Error**: `SdkException<GetTranscriptMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
