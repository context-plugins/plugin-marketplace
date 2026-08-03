# ManageV1ProjectsUsage — operations

Accessor: `client.ManageV1ProjectsUsage` · Source: `Api/ManageV1ProjectsUsage.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Get8
- **HTTP**: `GET /v1/projects/{project_id}/usage` (Default (agent))
- **Notes**: Retrieves the usage for a specific project. Use Get Project Usage Breakdown for a more comprehensive usage summary.
- **Signature**: `Get8(string projectId, DateTimeOffset? start, DateTimeOffset? end, string? accessor, bool? alternatives, bool? callbackMethod, bool? callback, bool? channels, bool? customIntentMode, bool? customIntent, bool? customTopicMode, bool? customTopic, V1ProjectsProjectIdUsageGetParametersDeployment? deployment, bool? detectEntities, bool? detectLanguage, bool? diarize, bool? dictation, bool? encoding, V1ProjectsProjectIdUsageGetParametersEndpoint? endpoint, bool? extra, bool? fillerWords, bool? intents, bool? keyterm, bool? keywords, bool? language, bool? measurements, V1ProjectsProjectIdUsageGetParametersMethod? method, string? model, bool? multichannel, bool? numerals, bool? paragraphs, bool? profanityFilter, bool? punctuate, bool? redact, bool? replace, bool? sampleRate, bool? search, bool? sentiment, bool? smartFormat, bool? summarize, string? tag, bool? topics, bool? uttSplit, bool? utterances, bool? version, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 44 params (`start` … `version`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `accessor` ← `accessor`, `alternatives` ← `alternatives`, `callback_method` ← `callbackMethod`, `callback` ← `callback`, `channels` ← `channels`, `custom_intent_mode` ← `customIntentMode`, `custom_intent` ← `customIntent`, `custom_topic_mode` ← `customTopicMode`, `custom_topic` ← `customTopic`, `deployment` ← `deployment`, `detect_entities` ← `detectEntities`, `detect_language` ← `detectLanguage`, `diarize` ← `diarize`, `dictation` ← `dictation`, `encoding` ← `encoding`, `endpoint` ← `endpoint`, `extra` ← `extra`, `filler_words` ← `fillerWords`, `intents` ← `intents`, `keyterm` ← `keyterm`, `keywords` ← `keywords`, `language` ← `language`, `measurements` ← `measurements`, `method` ← `method`, `model` ← `model`, `multichannel` ← `multichannel`, `numerals` ← `numerals`, `paragraphs` ← `paragraphs`, `profanity_filter` ← `profanityFilter`, `punctuate` ← `punctuate`, `redact` ← `redact`, `replace` ← `replace`, `sample_rate` ← `sampleRate`, `search` ← `search`, `sentiment` ← `sentiment`, `smart_format` ← `smartFormat`, `summarize` ← `summarize`, `tag` ← `tag`, `topics` ← `topics`, `utt_split` ← `uttSplit`, `utterances` ← `utterances`, `version` ← `version`
- **Returns**: `UsageV1Response`
- **Error**: `SdkException<Get8Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
