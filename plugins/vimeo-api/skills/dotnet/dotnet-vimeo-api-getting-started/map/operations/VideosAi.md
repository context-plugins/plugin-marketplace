# VideosAi — operations

Accessor: `client.VideosAi` · Source: `Api/VideosAi.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AskAiQuestion
- **HTTP**: `POST /videos/{video_id}/ai/ask` (Default (api))
- **Notes**: This method asks a question about a video and returns an AI-generated answer with relevant quotes and timecodes. Answering questions requires generating artifacts from the video, so the first request for a new video may return a `202` response — simply retry until a `200` is returned with the answer.
- **Signature**: `AskAiQuestion(double videoId, VideosAiAskRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AskAiQuestionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 503] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditAiTexttrack
- **HTTP**: `PATCH /videos/{video_id}/ai/texttracks/{texttrack_id}` (Default (api))
- **Notes**: This method edits transcript segments on the specified text track and automatically triggers the appropriate downstream actions based on the track type: - Source transcript : saves edits, then re-translates all subtitle children for the edited text segments. Timestamp and speaker changes are synced to children directly (no re-translation for speaker-only edits). - Dubbed track : saves edits and triggers audio re-synthesis for the edited segments. Re-synthesis fires on text edits and on speaker reassignment (the dub is regenerated under the new speaker's voice). - Subtitle child : saves text edits to this track only. Timestamp and speaker changes are synced to the parent track and all sibling subtitle tracks. To retrieve the `texttrack_id`, use the GET endpoints for transcription , subtitle translation , or dubbing . To retrieve segment UUIDs and their current text and timecodes, use `GET /videos/{video_id}/transcripts/{texttrack_id}`.
- **Signature**: `EditAiTexttrack(double texttrackId, double videoId, VideosAiTexttracksRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditAiTexttrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 503] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAiLanguages
- **HTTP**: `GET /videos/ai/languages` (Default (api))
- **Notes**: This method returns the list of supported languages for AI features. Use the `type` query parameter to filter by feature: `transcription` for speech-to-text languages, `subtitling` for subtitle translation languages, or `dubbing` for audio dubbing languages (includes available accents per language).
- **Signature**: `GetAiLanguages(Type48? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAiLanguagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAiMetadata
- **HTTP**: `GET /videos/{video_id}/ai/metadata` (Default (api))
- **Notes**: This method returns AI-generated metadata for the specified video, including a suggested title, description, and tags based on the video's content. The first request for a new video may return a `202` response while the video is being processed — retry until ready.
- **Signature**: `GetAiMetadata(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAiMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 503] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAiQuestions
- **HTTP**: `GET /videos/{video_id}/ai/ask` (Default (api))
- **Notes**: This method returns pre-generated questions and answers about a video. These are automatically created when the video is processed and provide a starting point for exploring the video's content. The first request for a new video may return a `202` response while artifacts are being generated — retry until ready. Questions are available in `en`, `fr`, `es`, `de`, `it`, `pt`, `ja`, and `ko`. English is returned by default.
- **Signature**: `GetAiQuestions(double videoId, string? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAiQuestionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 503] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAiTranscribeStatus
- **HTTP**: `GET /videos/{video_id}/ai/transcribe` (Default (api))
- **Notes**: This method returns the current transcription status for a video. The response includes the `video_id`, `status`, and `language`. When the status is `completed`, the response also includes the `texttrack_id` which can be used to read the transcript via `GET /videos/{video_id}/transcripts/{texttrack_id}`. Possible status values: `none` (no transcription requested), `not_started` (queued, awaiting processing), `in_progress`, `completed`, `failed`, `language_not_supported`, `no_speech`, `exceeds_maximum_duration`, `blocked`, `unknown`.
- **Signature**: `GetAiTranscribeStatus(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAiTranscribeStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAiTranslateDubbingStatus
- **HTTP**: `GET /videos/{video_id}/ai/translate/dubbing` (Default (api))
- **Notes**: This method returns the audio dubbing jobs for a video. Each entry includes the language, current status, and — when completed — the `texttrack_id` of the dubbed subtitles and the `audiotrack_uri` of the dubbed audio. Only completed jobs whose text track still exists are included; deleted tracks are omitted. Possible status values: `processing`, `completed`, `completed_with_deleted_texttrack`, `completed_with_deleted_audiotrack`, `failed`, `invalid_input` (the source content was not suitable for dubbing), `not_found`, `unknown`. Jobs where both the text track and audio track have been deleted are omitted entirely.
- **Signature**: `GetAiTranslateDubbingStatus(double videoId, string? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAiTranslateDubbingStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 503] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAiTranslateSubtitlesStatus
- **HTTP**: `GET /videos/{video_id}/ai/translate/subtitles` (Default (api))
- **Notes**: This method returns the subtitle translation jobs for a video. Each entry includes the language, current status, and — when completed — the `texttrack_id` of the resulting text track. Only completed translations whose text track still exists are included; deleted tracks are omitted. Possible status values: `processing`, `completed`, `failed`, `invalid_input` (the source content was not suitable for translation), `not_found`, `unknown`.
- **Signature**: `GetAiTranslateSubtitlesStatus(double videoId, string? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAiTranslateSubtitlesStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 503] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartAiTranscribe
- **HTTP**: `POST /videos/{video_id}/ai/transcribe` (Default (api))
- **Notes**: This method generates a transcript from the video's audio using AI speech-to-text. The video must not already have a transcript — delete the existing one first if you need to regenerate. Transcription is asynchronous; use `GET /videos/{video_id}/ai/transcribe` to poll for completion. Once complete, read the transcript via `GET /videos/{video_id}/transcripts/{texttrack_id}`. When no language is provided, the system attempts to auto-detect the spoken language from the video's audio. If detection fails or confidence is too low, it falls back to the video's locale, then the user's locale preference, then English (`en`).
- **Signature**: `StartAiTranscribe(double videoId, VideosAiTranscribeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StartAiTranscribeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartAiTranslateDubbing
- **HTTP**: `POST /videos/{video_id}/ai/translate/dubbing` (Default (api))
- **Notes**: This method starts an audio dubbing job for a video. By calling this endpoint, you confirm that you, and your end users, have met all legal requirements to use the voices of the people in the source video to create synthetic audio. This may include obtaining written consent. The video must have finished transcoding, have a completed transcript, and be under 150 minutes in duration. Dubbing is asynchronous; use `GET /videos/{video_id}/ai/translate/dubbing` to poll for completion. Once complete, the dubbed audio appears as an alternate audio track and translated subtitles appear as a new text track. AI credits are deducted from the enterprise account's balance. Dubbing costs more credits than subtitling.
- **Signature**: `StartAiTranslateDubbing(double videoId, VideosAiTranslateDubbingRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StartAiTranslateDubbingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 503] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartAiTranslateSubtitles
- **HTTP**: `POST /videos/{video_id}/ai/translate/subtitles` (Default (api))
- **Notes**: This method starts a subtitle translation job for a video. The video must have finished transcoding and have a completed transcript. Translation is asynchronous; use `GET /videos/{video_id}/ai/translate/subtitles` to poll for completion. Once complete, the translated subtitles appear as a new text track accessible via `GET /videos/{video_id}/texttracks`. AI credits are deducted from the enterprise account's balance.
- **Signature**: `StartAiTranslateSubtitles(double videoId, VideosAiTranslateSubtitlesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StartAiTranslateSubtitlesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 503] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
