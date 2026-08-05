# ConstantsDefinitions — operations

Accessor: `client.ConstantsDefinitions` · Source: `Api/ConstantsDefinitions.cs` · 16 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListApChannels
- **HTTP**: `GET /api/v1/const/ap_channels` (ApiHost (api))
- **Notes**: Get List of List of Available channels per country code
- **Signature**: `ListApChannels(string? countryCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `countryCode` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country_code` ← `countryCode`
- **Returns**: `ConstApChannel`
- **Error**: `SdkException<ListApChannelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListApLeslVersions
- **HTTP**: `GET /api/v1/const/ap_esl_versions` (ApiHost (api))
- **Notes**: Get Available AP ESL Versions
- **Signature**: `ListApLeslVersions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstApEslVersion>`
- **Error**: `SdkException<ListApLeslVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListApLedDefinition
- **HTTP**: `GET /api/v1/const/ap_led_status` (ApiHost (api))
- **Notes**: Get List of AP LED definition
- **Signature**: `ListApLedDefinition(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstApLed>`
- **Error**: `SdkException<ListApLedDefinitionError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAppCategoryDefinitions
- **HTTP**: `GET /api/v1/const/app_categories` (ApiHost (api))
- **Notes**: Get List of definitions of all the supported Application Categories. The example field contains an example payload as you would receive in the alarm webhook output.
- **Signature**: `ListAppCategoryDefinitions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstAppCategoryDefinition>`
- **Error**: `SdkException<ListAppCategoryDefinitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAppSubCategoryDefinitions
- **HTTP**: `GET /api/v1/const/app_subcategories` (ApiHost (api))
- **Notes**: Get List of definitions of all the supported Application sub-categories. The example field contains an example payload as you would receive in the alarm webhook output.
- **Signature**: `ListAppSubCategoryDefinitions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstAppSubcategoryDefinition>`
- **Error**: `SdkException<ListAppSubCategoryDefinitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListApplications
- **HTTP**: `GET /api/v1/const/applications` (ApiHost (api))
- **Notes**: Get List of a list of applications that Juniper-Mist APs recognize
- **Signature**: `ListApplications(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstApplicationDefinition>`
- **Error**: `SdkException<ListApplicationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListCountryCodes
- **HTTP**: `GET /api/v1/const/countries` (ApiHost (api))
- **Notes**: Get List of available Country Codes
- **Signature**: `ListCountryCodes(bool? extend = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `extend` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `extend` ← `extend`
- **Returns**: `IReadOnlyList<ConstCountry>`
- **Error**: `SdkException<ListCountryCodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListFingerprintTypes
- **HTTP**: `GET /api/v1/const/fingerprint_types` (ApiHost (api))
- **Notes**: Get List of supported fingerprint attribute values * family * model * mfg * os_type This information can be used in the Mist NAC Rules `matching` attribute.
- **Signature**: `ListFingerprintTypes(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConstFingerprintTypes`
- **Error**: `SdkException<ListFingerprintTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListGatewayApplications
- **HTTP**: `GET /api/v1/const/gateway_applications` (ApiHost (api))
- **Notes**: Get the full list of applications that we recognize
- **Signature**: `ListGatewayApplications(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstGatewayApplicationsDefinition>`
- **Error**: `SdkException<ListGatewayApplicationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListInsightMetrics
- **HTTP**: `GET /api/v1/const/insight_metrics` (ApiHost (api))
- **Notes**: List Insight Metrics
- **Signature**: `ListInsightMetrics(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyDictionary<string, ConstInsightMetricsProperty>`
- **Error**: `SdkException<ListInsightMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListLicenseTypes
- **HTTP**: `GET /api/v1/const/license_types` (ApiHost (api))
- **Notes**: Get License Types
- **Signature**: `ListLicenseTypes(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstLicenseType>`
- **Error**: `SdkException<ListLicenseTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMarvisClientVersions
- **HTTP**: `GET /api/v1/const/marvisclient_versions` (ApiHost (api))
- **Notes**: Get List of the available Marvis Client Versions.
- **Signature**: `ListMarvisClientVersions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstMarvisClientVersion>`
- **Error**: `SdkException<ListMarvisClientVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteLanguages
- **HTTP**: `GET /api/v1/const/languages` (ApiHost (api))
- **Notes**: Get List of Languages
- **Signature**: `ListSiteLanguages(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstLanguage>`
- **Error**: `SdkException<ListSiteLanguagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListStates
- **HTTP**: `GET /api/v1/const/states` (ApiHost (api))
- **Notes**: Get List of ISO States based on country code
- **Signature**: `ListStates(string countryCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country_code` ← `countryCode`
- **Returns**: `IReadOnlyList<ConstState>`
- **Error**: `SdkException<ListStatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListTrafficTypes
- **HTTP**: `GET /api/v1/const/traffic_types` (ApiHost (api))
- **Notes**: Get List of identified traffic
- **Signature**: `ListTrafficTypes(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstTrafficType>`
- **Error**: `SdkException<ListTrafficTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListWebhookTopics
- **HTTP**: `GET /api/v1/const/webhook_topics` (ApiHost (api))
- **Notes**: Get List of the available Webhook Topics.
- **Signature**: `ListWebhookTopics(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstWebhookTopic>`
- **Error**: `SdkException<ListWebhookTopicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
