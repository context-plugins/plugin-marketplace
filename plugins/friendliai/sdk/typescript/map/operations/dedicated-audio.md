<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedAudio — operations

Accessor: `client.dedicatedAudio` · Source: `src/resources/dedicated-audio.ts` · 2 operations · Request and error types: namespace `DedicatedAudio`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### dedicatedAudioTranscriptions

- **Signature**: `dedicatedAudioTranscriptions(request: DedicatedAudio.DedicatedAudioTranscriptionsRequest, options?: RequestOptions): ApiPromise<AudioTranscriptionResult, DedicatedAudio.DedicatedAudioTranscriptionsError>`
- **Wire**: `POST /dedicated/v1/audio/transcriptions`
- **Auth**: `token`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AudioTranscriptionResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedAudio.DedicatedAudioTranscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedAudio.DedicatedAudioTranscriptionsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `model` | `form` | — | `string` | yes |
| `file` | `form` | — | `FileInput` | yes |
| `chunkingStrategy` | `form` | `chunking_strategy` | `ChunkingStrategy1` | no |
| `language` | `form` | — | `Language` | no |
| `stream` | `form` | — | `Stream6` | no |
| `temperature` | `form` | — | `Temperature12` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ChunkingStrategy1` | `chunkingStrategy1Schema` | `src/models/unions/chunking-strategy1.ts` |
| `Language` | `languageSchema` | `src/models/unions/language.ts` |
| `Stream6` | `stream6Schema` | `src/models/unions/stream6.ts` |
| `Temperature12` | `temperature12Schema` | `src/models/unions/temperature12.ts` |
| `AudioTranscriptionResult` | `audioTranscriptionResultSchema` | `src/models/audio-transcription-result.ts` |

### dedicatedAudioTranscriptionsStream

- **Signature**: `dedicatedAudioTranscriptionsStream(request: DedicatedAudio.DedicatedAudioTranscriptionsStreamRequest, options?: RequestOptions): ApiPromise<EventStream<StreamedAudioTranscriptionResult>, DedicatedAudio.DedicatedAudioTranscriptionsStreamError>`
- **Wire**: `POST /dedicated/v1/audio/transcriptions#stream`
- **Auth**: `token`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<StreamedAudioTranscriptionResult>` — `text/event-stream`, resolved at the response headers and read one `StreamedAudioTranscriptionResult` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `StreamedAudioTranscriptionResult`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedAudio.DedicatedAudioTranscriptionsStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedAudio.DedicatedAudioTranscriptionsStreamRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no | — |
| `model` | `form` | — | `string` | yes | — |
| `file` | `form` | — | `FileInput` | yes | — |
| `chunkingStrategy` | `form` | `chunking_strategy` | `ChunkingStrategy1` | no | — |
| `language` | `form` | — | `Language` | no | — |
| `stream` | `form` | — | `boolean` | no | `true` |
| `temperature` | `form` | — | `Temperature12` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ChunkingStrategy1` | `chunkingStrategy1Schema` | `src/models/unions/chunking-strategy1.ts` |
| `Language` | `languageSchema` | `src/models/unions/language.ts` |
| `Temperature12` | `temperature12Schema` | `src/models/unions/temperature12.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `StreamedAudioTranscriptionResult` | `streamedAudioTranscriptionResultSchema` | `src/models/streamed-audio-transcription-result.ts` |

