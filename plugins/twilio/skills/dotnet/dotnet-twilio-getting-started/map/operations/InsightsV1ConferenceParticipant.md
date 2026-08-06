# InsightsV1ConferenceParticipant — operations

Accessor: `client.InsightsV1ConferenceParticipant` · Source: `Api/InsightsV1ConferenceParticipant.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchConferenceParticipant
- **HTTP**: `GET /v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}` (Default14 (insights))
- **Notes**: Get a specific Conference Participant Summary for a Conference.
- **Signature**: `FetchConferenceParticipant(string conferenceSid, string participantSid, string? events, string? metrics, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `events` — nullable, no default → **must pass explicitly**
  - `metrics` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Events` ← `events`, `Metrics` ← `metrics`
- **Returns**: `InsightsV1ConferenceConferenceParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConferenceParticipant
- **HTTP**: `GET /v1/Conferences/{ConferenceSid}/Participants` (Default14 (insights))
- **Notes**: Get a list of Conference Participants Summaries for a Conference.
- **Signature**: `ListConferenceParticipant(string conferenceSid, string? participantSid, string? label, string? events, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`participantSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ParticipantSid` ← `participantSid`, `Label` ← `label`, `Events` ← `events`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConferenceParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
