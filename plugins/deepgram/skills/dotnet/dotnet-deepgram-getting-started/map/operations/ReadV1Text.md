# ReadV1Text — operations

Accessor: `client.ReadV1Text` · Source: `Api/ReadV1Text.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Analyze
- **HTTP**: `POST /v1/read` (Default (agent))
- **Notes**: Analyze text content using Deepgrams text analysis API
- **Signature**: `Analyze(string? callback, V1ListenPostParametersCallbackMethod? callbackMethod, V1ReadPostParametersSummarize? summarize, V1ReadPostParametersTag? tag, V1ReadPostParametersCustomTopic? customTopic, V1ListenPostParametersCustomTopicMode? customTopicMode, V1ReadPostParametersCustomIntent? customIntent, V1ListenPostParametersCustomTopicMode? customIntentMode, ReadV1Request? body, bool? sentiment = false, bool? topics = false, bool? intents = false, string? language = "en", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`callback` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `sentiment` = false, `topics` = false, `intents` = false, `language` = "en", `requestOptions` = null
- **Query params (wire ← C#)**: `callback` ← `callback`, `callback_method` ← `callbackMethod`, `sentiment` ← `sentiment`, `summarize` ← `summarize`, `tag` ← `tag`, `topics` ← `topics`, `custom_topic` ← `customTopic`, `custom_topic_mode` ← `customTopicMode`, `intents` ← `intents`, `custom_intent` ← `customIntent`, `custom_intent_mode` ← `customIntentMode`, `language` ← `language`
- **Returns**: `ReadV1Response`
- **Error**: `SdkException<AnalyzeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
