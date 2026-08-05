# FlexV1InsightsSettingsAnswerSetsApi — operations

Accessor: `client.FlexV1InsightsSettingsAnswerSetsApi` · Source: `Api/FlexV1InsightsSettingsAnswerSetsApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchInsightsSettingsAnswersets
- **HTTP**: `GET /v1/Insights/QualityManagement/Settings/AnswerSets` (Default3 (flex-api))
- **Notes**: To get the Answer Set Settings for an Account
- **Signature**: `FetchInsightsSettingsAnswersets(string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1InsightsSettingsAnswersets`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
