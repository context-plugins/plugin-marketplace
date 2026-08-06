# SpeakV2Audio — operations

Accessor: `client.SpeakV2Audio` · Source: `Api/SpeakV2Audio.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Generate2
- **HTTP**: `POST /v2/speak` (Default (agent))
- **Notes**: Synthesize a complete block of text into a single audio response using Deepgram's Flux TTS batch (REST) API. Use this for pre-rendering fixed audio (IVR prompts, notifications, narration) where the whole text is known up front and you don't need incremental playback or interruption.
- **Signature**: `Generate2(string model, string? callback, V1ListenPostParametersCallbackMethod? callbackMethod, V2SpeakPostParametersTag? tag, V2SpeakPostParametersBitRate? bitRate, V2SpeakPostParametersContainer? container, V2SpeakPostParametersEncoding? encoding, V2SpeakPostParametersSampleRate? sampleRate, V2SpeakPostParametersPriority? priority, SpeakV2Request? body, bool? mipOptOut = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`callback` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `mipOptOut` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`, `callback` ← `callback`, `callback_method` ← `callbackMethod`, `mip_opt_out` ← `mipOptOut`, `tag` ← `tag`, `bit_rate` ← `bitRate`, `container` ← `container`, `encoding` ← `encoding`, `sample_rate` ← `sampleRate`, `priority` ← `priority`
- **Returns**: `SpeakV2AcceptedResponse`
- **Error**: `SdkException<Generate2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
