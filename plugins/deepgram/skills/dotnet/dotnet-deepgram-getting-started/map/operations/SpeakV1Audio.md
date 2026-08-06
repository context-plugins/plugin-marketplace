# SpeakV1Audio — operations

Accessor: `client.SpeakV1Audio` · Source: `Api/SpeakV1Audio.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Generate
- **HTTP**: `POST /v1/speak` (Default (agent))
- **Notes**: Convert text into natural-sounding speech using Deepgram's TTS REST API
- **Signature**: `Generate(string? callback, V1ListenPostParametersCallbackMethod? callbackMethod, V1SpeakPostParametersTag? tag, V1SpeakPostParametersBitRate? bitRate, V1SpeakPostParametersContainer? container, V1SpeakPostParametersEncoding? encoding, V1SpeakPostParametersModel? model, V1SpeakPostParametersSampleRate? sampleRate, SpeakV1Request? body, bool? mipOptOut = false, double? speed = 1d, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`callback` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `mipOptOut` = false, `speed` = 1d, `requestOptions` = null
- **Query params (wire ← C#)**: `callback` ← `callback`, `callback_method` ← `callbackMethod`, `mip_opt_out` ← `mipOptOut`, `tag` ← `tag`, `bit_rate` ← `bitRate`, `container` ← `container`, `encoding` ← `encoding`, `model` ← `model`, `sample_rate` ← `sampleRate`, `speed` ← `speed`
- **Returns**: `object`
- **Error**: `SdkException<GenerateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
