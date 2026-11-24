<!-- Generated file — do not edit; regenerated with the SDK. -->

# Properties — operations

Accessor: `client.Properties` · Source: `src/GoogleAnalytics/Api/Properties.cs` · 57 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AnalyticsadminPropertiesAcknowledgeUserDataCollection

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesAcknowledgeUserDataCollection(AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminPropertiesAcknowledgeUserDataCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest.cs` |
| `GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest.cs` |
| `AnalyticsadminPropertiesAcknowledgeUserDataCollectionError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesAcknowledgeUserDataCollectionError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesConversionEventsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesConversionEventsCreate(AnalyticsadminPropertiesConversionEventsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaConversionEvent`
- **Error**: `ApiException<AnalyticsadminPropertiesConversionEventsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesConversionEventsCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsCreateRequest.cs` |
| `GoogleAnalyticsAdminV1BetaConversionEvent` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaConversionEvent.cs` |
| `AnalyticsadminPropertiesConversionEventsCreateError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesConversionEventsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesConversionEventsDelete(AnalyticsadminPropertiesConversionEventsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `ConversionEventsId`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminPropertiesConversionEventsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesConversionEventsDeleteRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsDeleteRequest.cs` |
| `AnalyticsadminPropertiesConversionEventsDeleteError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesConversionEventsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesConversionEventsGet(AnalyticsadminPropertiesConversionEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `ConversionEventsId`
- **Returns**: `GoogleAnalyticsAdminV1BetaConversionEvent`
- **Error**: `ApiException<AnalyticsadminPropertiesConversionEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesConversionEventsGetRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsGetRequest.cs` |
| `GoogleAnalyticsAdminV1BetaConversionEvent` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaConversionEvent.cs` |
| `AnalyticsadminPropertiesConversionEventsGetError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsGetError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesConversionEventsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesConversionEventsList(AnalyticsadminPropertiesConversionEventsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleAnalyticsAdminV1BetaListConversionEventsResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesConversionEventsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesConversionEventsListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListConversionEventsResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListConversionEventsResponse.cs` |
| `AnalyticsadminPropertiesConversionEventsListError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesConversionEventsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesConversionEventsPatch(AnalyticsadminPropertiesConversionEventsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `ConversionEventsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaConversionEvent`
- **Error**: `ApiException<AnalyticsadminPropertiesConversionEventsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesConversionEventsPatchRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesConversionEventsPatchRequest.cs` |
| `GoogleAnalyticsAdminV1BetaConversionEvent` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaConversionEvent.cs` |
| `AnalyticsadminPropertiesConversionEventsPatchError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesConversionEventsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCreate(AnalyticsadminPropertiesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaProperty`
- **Error**: `ApiException<AnalyticsadminPropertiesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCreateRequest.cs` |
| `GoogleAnalyticsAdminV1BetaProperty` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProperty.cs` |
| `AnalyticsadminPropertiesCreateError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomDimensionsArchive

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomDimensionsArchive(AnalyticsadminPropertiesCustomDimensionsArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `CustomDimensionsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomDimensionsArchiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomDimensionsArchiveRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsArchiveRequest.cs` |
| `AnalyticsadminPropertiesCustomDimensionsArchiveError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsArchiveError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomDimensionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomDimensionsCreate(AnalyticsadminPropertiesCustomDimensionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomDimension`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomDimensionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomDimensionsCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsCreateRequest.cs` |
| `GoogleAnalyticsAdminV1BetaCustomDimension` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomDimension.cs` |
| `AnalyticsadminPropertiesCustomDimensionsCreateError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomDimensionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomDimensionsGet(AnalyticsadminPropertiesCustomDimensionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `CustomDimensionsId`
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomDimension`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomDimensionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomDimensionsGetRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsGetRequest.cs` |
| `GoogleAnalyticsAdminV1BetaCustomDimension` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomDimension.cs` |
| `AnalyticsadminPropertiesCustomDimensionsGetError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsGetError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomDimensionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomDimensionsList(AnalyticsadminPropertiesCustomDimensionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomDimensionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomDimensionsListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse.cs` |
| `AnalyticsadminPropertiesCustomDimensionsListError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomDimensionsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomDimensionsPatch(AnalyticsadminPropertiesCustomDimensionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `CustomDimensionsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomDimension`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomDimensionsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomDimensionsPatchRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomDimensionsPatchRequest.cs` |
| `GoogleAnalyticsAdminV1BetaCustomDimension` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomDimension.cs` |
| `AnalyticsadminPropertiesCustomDimensionsPatchError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomDimensionsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomMetricsArchive

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomMetricsArchive(AnalyticsadminPropertiesCustomMetricsArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `CustomMetricsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomMetricsArchiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomMetricsArchiveRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsArchiveRequest.cs` |
| `AnalyticsadminPropertiesCustomMetricsArchiveError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsArchiveError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomMetricsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomMetricsCreate(AnalyticsadminPropertiesCustomMetricsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomMetric`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomMetricsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomMetricsCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsCreateRequest.cs` |
| `GoogleAnalyticsAdminV1BetaCustomMetric` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomMetric.cs` |
| `AnalyticsadminPropertiesCustomMetricsCreateError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomMetricsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomMetricsGet(AnalyticsadminPropertiesCustomMetricsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `CustomMetricsId`
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomMetric`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomMetricsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomMetricsGetRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsGetRequest.cs` |
| `GoogleAnalyticsAdminV1BetaCustomMetric` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomMetric.cs` |
| `AnalyticsadminPropertiesCustomMetricsGetError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsGetError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomMetricsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomMetricsList(AnalyticsadminPropertiesCustomMetricsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleAnalyticsAdminV1BetaListCustomMetricsResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomMetricsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomMetricsListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListCustomMetricsResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListCustomMetricsResponse.cs` |
| `AnalyticsadminPropertiesCustomMetricsListError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesCustomMetricsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesCustomMetricsPatch(AnalyticsadminPropertiesCustomMetricsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `CustomMetricsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomMetric`
- **Error**: `ApiException<AnalyticsadminPropertiesCustomMetricsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomMetricsPatchRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesCustomMetricsPatchRequest.cs` |
| `GoogleAnalyticsAdminV1BetaCustomMetric` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaCustomMetric.cs` |
| `AnalyticsadminPropertiesCustomMetricsPatchError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesCustomMetricsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsCreate(AnalyticsadminPropertiesDataStreamsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaDataStream`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsCreateRequest.cs` |
| `GoogleAnalyticsAdminV1BetaDataStream` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataStream.cs` |
| `AnalyticsadminPropertiesDataStreamsCreateError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsDelete(AnalyticsadminPropertiesDataStreamsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `DataStreamsId`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsDeleteRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsDeleteRequest.cs` |
| `AnalyticsadminPropertiesDataStreamsDeleteError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsGet(AnalyticsadminPropertiesDataStreamsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `DataStreamsId`
- **Returns**: `GoogleAnalyticsAdminV1BetaDataStream`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsGetRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsGetRequest.cs` |
| `GoogleAnalyticsAdminV1BetaDataStream` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataStream.cs` |
| `AnalyticsadminPropertiesDataStreamsGetError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsGetError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsList(AnalyticsadminPropertiesDataStreamsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleAnalyticsAdminV1BetaListDataStreamsResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListDataStreamsResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListDataStreamsResponse.cs` |
| `AnalyticsadminPropertiesDataStreamsListError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `DataStreamsId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest.cs` |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret.cs` |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `DataStreamsId`, `MeasurementProtocolSecretsId`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest.cs` |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `DataStreamsId`, `MeasurementProtocolSecretsId`
- **Returns**: `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest.cs` |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret.cs` |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `DataStreamsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse.cs` |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `DataStreamsId`, `MeasurementProtocolSecretsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest.cs` |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret.cs` |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDataStreamsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDataStreamsPatch(AnalyticsadminPropertiesDataStreamsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `DataStreamsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaDataStream`
- **Error**: `ApiException<AnalyticsadminPropertiesDataStreamsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsPatchRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDataStreamsPatchRequest.cs` |
| `GoogleAnalyticsAdminV1BetaDataStream` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataStream.cs` |
| `AnalyticsadminPropertiesDataStreamsPatchError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDataStreamsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesDelete(AnalyticsadminPropertiesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Returns**: `GoogleAnalyticsAdminV1BetaProperty`
- **Error**: `ApiException<AnalyticsadminPropertiesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDeleteRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesDeleteRequest.cs` |
| `GoogleAnalyticsAdminV1BetaProperty` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProperty.cs` |
| `AnalyticsadminPropertiesDeleteError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesFirebaseLinksCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesFirebaseLinksCreate(AnalyticsadminPropertiesFirebaseLinksCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaFirebaseLink`
- **Error**: `ApiException<AnalyticsadminPropertiesFirebaseLinksCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesFirebaseLinksCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesFirebaseLinksCreateRequest.cs` |
| `GoogleAnalyticsAdminV1BetaFirebaseLink` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaFirebaseLink.cs` |
| `AnalyticsadminPropertiesFirebaseLinksCreateError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesFirebaseLinksCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesFirebaseLinksDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesFirebaseLinksDelete(AnalyticsadminPropertiesFirebaseLinksDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `FirebaseLinksId`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminPropertiesFirebaseLinksDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesFirebaseLinksDeleteRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesFirebaseLinksDeleteRequest.cs` |
| `AnalyticsadminPropertiesFirebaseLinksDeleteError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesFirebaseLinksDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesFirebaseLinksList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesFirebaseLinksList(AnalyticsadminPropertiesFirebaseLinksListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesFirebaseLinksListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesFirebaseLinksListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesFirebaseLinksListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse.cs` |
| `AnalyticsadminPropertiesFirebaseLinksListError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesFirebaseLinksListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesGet(AnalyticsadminPropertiesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Returns**: `GoogleAnalyticsAdminV1BetaProperty`
- **Error**: `ApiException<AnalyticsadminPropertiesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesGetRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGetRequest.cs` |
| `GoogleAnalyticsAdminV1BetaProperty` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProperty.cs` |
| `AnalyticsadminPropertiesGetError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGetError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesGetDataRetentionSettings

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesGetDataRetentionSettings(AnalyticsadminPropertiesGetDataRetentionSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Returns**: `GoogleAnalyticsAdminV1BetaDataRetentionSettings`
- **Error**: `ApiException<AnalyticsadminPropertiesGetDataRetentionSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesGetDataRetentionSettingsRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGetDataRetentionSettingsRequest.cs` |
| `GoogleAnalyticsAdminV1BetaDataRetentionSettings` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataRetentionSettings.cs` |
| `AnalyticsadminPropertiesGetDataRetentionSettingsError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGetDataRetentionSettingsError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesGoogleAdsLinksCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesGoogleAdsLinksCreate(AnalyticsadminPropertiesGoogleAdsLinksCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaGoogleAdsLink`
- **Error**: `ApiException<AnalyticsadminPropertiesGoogleAdsLinksCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesGoogleAdsLinksCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGoogleAdsLinksCreateRequest.cs` |
| `GoogleAnalyticsAdminV1BetaGoogleAdsLink` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaGoogleAdsLink.cs` |
| `AnalyticsadminPropertiesGoogleAdsLinksCreateError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGoogleAdsLinksCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesGoogleAdsLinksDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesGoogleAdsLinksDelete(AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `GoogleAdsLinksId`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminPropertiesGoogleAdsLinksDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest.cs` |
| `AnalyticsadminPropertiesGoogleAdsLinksDeleteError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGoogleAdsLinksDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesGoogleAdsLinksList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesGoogleAdsLinksList(AnalyticsadminPropertiesGoogleAdsLinksListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesGoogleAdsLinksListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesGoogleAdsLinksListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGoogleAdsLinksListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse.cs` |
| `AnalyticsadminPropertiesGoogleAdsLinksListError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGoogleAdsLinksListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesGoogleAdsLinksPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesGoogleAdsLinksPatch(AnalyticsadminPropertiesGoogleAdsLinksPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `GoogleAdsLinksId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaGoogleAdsLink`
- **Error**: `ApiException<AnalyticsadminPropertiesGoogleAdsLinksPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesGoogleAdsLinksPatchRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesGoogleAdsLinksPatchRequest.cs` |
| `GoogleAnalyticsAdminV1BetaGoogleAdsLink` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaGoogleAdsLink.cs` |
| `AnalyticsadminPropertiesGoogleAdsLinksPatchError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesGoogleAdsLinksPatchError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesKeyEventsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesKeyEventsCreate(AnalyticsadminPropertiesKeyEventsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaKeyEvent`
- **Error**: `ApiException<AnalyticsadminPropertiesKeyEventsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesKeyEventsCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsCreateRequest.cs` |
| `GoogleAnalyticsAdminV1BetaKeyEvent` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaKeyEvent.cs` |
| `AnalyticsadminPropertiesKeyEventsCreateError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesKeyEventsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesKeyEventsDelete(AnalyticsadminPropertiesKeyEventsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `KeyEventsId`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminPropertiesKeyEventsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesKeyEventsDeleteRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsDeleteRequest.cs` |
| `AnalyticsadminPropertiesKeyEventsDeleteError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesKeyEventsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesKeyEventsGet(AnalyticsadminPropertiesKeyEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `KeyEventsId`
- **Returns**: `GoogleAnalyticsAdminV1BetaKeyEvent`
- **Error**: `ApiException<AnalyticsadminPropertiesKeyEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesKeyEventsGetRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsGetRequest.cs` |
| `GoogleAnalyticsAdminV1BetaKeyEvent` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaKeyEvent.cs` |
| `AnalyticsadminPropertiesKeyEventsGetError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsGetError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesKeyEventsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesKeyEventsList(AnalyticsadminPropertiesKeyEventsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleAnalyticsAdminV1BetaListKeyEventsResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesKeyEventsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesKeyEventsListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListKeyEventsResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListKeyEventsResponse.cs` |
| `AnalyticsadminPropertiesKeyEventsListError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesKeyEventsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesKeyEventsPatch(AnalyticsadminPropertiesKeyEventsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `KeyEventsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaKeyEvent`
- **Error**: `ApiException<AnalyticsadminPropertiesKeyEventsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesKeyEventsPatchRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesKeyEventsPatchRequest.cs` |
| `GoogleAnalyticsAdminV1BetaKeyEvent` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaKeyEvent.cs` |
| `AnalyticsadminPropertiesKeyEventsPatchError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesKeyEventsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesList(AnalyticsadminPropertiesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `showDeleted` ← `ShowDeleted`
- **Returns**: `GoogleAnalyticsAdminV1BetaListPropertiesResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListPropertiesResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListPropertiesResponse.cs` |
| `AnalyticsadminPropertiesListError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesPatch(AnalyticsadminPropertiesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaProperty`
- **Error**: `ApiException<AnalyticsadminPropertiesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesPatchRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesPatchRequest.cs` |
| `GoogleAnalyticsAdminV1BetaProperty` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProperty.cs` |
| `AnalyticsadminPropertiesPatchError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesRunAccessReport

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesRunAccessReport(AnalyticsadminPropertiesRunAccessReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaRunAccessReportResponse`
- **Error**: `ApiException<AnalyticsadminPropertiesRunAccessReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesRunAccessReportRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesRunAccessReportRequest.cs` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportRequest` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaRunAccessReportRequest.cs` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaRunAccessReportResponse.cs` |
| `AnalyticsadminPropertiesRunAccessReportError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesRunAccessReportError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminPropertiesUpdateDataRetentionSettings

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminPropertiesUpdateDataRetentionSettings(AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaDataRetentionSettings`
- **Error**: `ApiException<AnalyticsadminPropertiesUpdateDataRetentionSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest.cs` |
| `GoogleAnalyticsAdminV1BetaDataRetentionSettings` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataRetentionSettings.cs` |
| `AnalyticsadminPropertiesUpdateDataRetentionSettingsError` | `src/GoogleAnalytics/Errors/AnalyticsadminPropertiesUpdateDataRetentionSettingsError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesAudienceExportsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesAudienceExportsCreate(AnalyticsdataPropertiesAudienceExportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `OperationGoogleAnalyticsPropertiesApi`
- **Error**: `ApiException<AnalyticsdataPropertiesAudienceExportsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesAudienceExportsCreateRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesAudienceExportsCreateRequest.cs` |
| `AudienceExport` | `src/GoogleAnalytics/Models/AudienceExport.cs` |
| `OperationGoogleAnalyticsPropertiesApi` | `src/GoogleAnalytics/Models/OperationGoogleAnalyticsPropertiesApi.cs` |
| `AnalyticsdataPropertiesAudienceExportsCreateError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesAudienceExportsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesAudienceExportsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesAudienceExportsGet(AnalyticsdataPropertiesAudienceExportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `AudienceExportsId`
- **Returns**: `AudienceExport`
- **Error**: `ApiException<AnalyticsdataPropertiesAudienceExportsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesAudienceExportsGetRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesAudienceExportsGetRequest.cs` |
| `AudienceExport` | `src/GoogleAnalytics/Models/AudienceExport.cs` |
| `AnalyticsdataPropertiesAudienceExportsGetError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesAudienceExportsGetError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesAudienceExportsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesAudienceExportsList(AnalyticsdataPropertiesAudienceExportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListAudienceExportsResponse`
- **Error**: `ApiException<AnalyticsdataPropertiesAudienceExportsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesAudienceExportsListRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesAudienceExportsListRequest.cs` |
| `ListAudienceExportsResponse` | `src/GoogleAnalytics/Models/ListAudienceExportsResponse.cs` |
| `AnalyticsdataPropertiesAudienceExportsListError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesAudienceExportsListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesAudienceExportsQuery

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesAudienceExportsQuery(AnalyticsdataPropertiesAudienceExportsQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `AudienceExportsId`, `Body`
- **Returns**: `QueryAudienceExportResponse`
- **Error**: `ApiException<AnalyticsdataPropertiesAudienceExportsQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesAudienceExportsQueryRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesAudienceExportsQueryRequest.cs` |
| `QueryAudienceExportRequest` | `src/GoogleAnalytics/Models/QueryAudienceExportRequest.cs` |
| `QueryAudienceExportResponse` | `src/GoogleAnalytics/Models/QueryAudienceExportResponse.cs` |
| `AnalyticsdataPropertiesAudienceExportsQueryError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesAudienceExportsQueryError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesBatchRunPivotReports

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesBatchRunPivotReports(AnalyticsdataPropertiesBatchRunPivotReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `BatchRunPivotReportsResponse`
- **Error**: `ApiException<AnalyticsdataPropertiesBatchRunPivotReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesBatchRunPivotReportsRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesBatchRunPivotReportsRequest.cs` |
| `BatchRunPivotReportsRequest` | `src/GoogleAnalytics/Models/BatchRunPivotReportsRequest.cs` |
| `BatchRunPivotReportsResponse` | `src/GoogleAnalytics/Models/BatchRunPivotReportsResponse.cs` |
| `AnalyticsdataPropertiesBatchRunPivotReportsError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesBatchRunPivotReportsError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesBatchRunReports

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesBatchRunReports(AnalyticsdataPropertiesBatchRunReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `BatchRunReportsResponse`
- **Error**: `ApiException<AnalyticsdataPropertiesBatchRunReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesBatchRunReportsRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesBatchRunReportsRequest.cs` |
| `BatchRunReportsRequest` | `src/GoogleAnalytics/Models/BatchRunReportsRequest.cs` |
| `BatchRunReportsResponse` | `src/GoogleAnalytics/Models/BatchRunReportsResponse.cs` |
| `AnalyticsdataPropertiesBatchRunReportsError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesBatchRunReportsError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesCheckCompatibility

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesCheckCompatibility(AnalyticsdataPropertiesCheckCompatibilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `CheckCompatibilityResponse`
- **Error**: `ApiException<AnalyticsdataPropertiesCheckCompatibilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesCheckCompatibilityRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesCheckCompatibilityRequest.cs` |
| `CheckCompatibilityRequest` | `src/GoogleAnalytics/Models/CheckCompatibilityRequest.cs` |
| `CheckCompatibilityResponse` | `src/GoogleAnalytics/Models/CheckCompatibilityResponse.cs` |
| `AnalyticsdataPropertiesCheckCompatibilityError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesCheckCompatibilityError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesGetMetadata

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesGetMetadata(AnalyticsdataPropertiesGetMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`
- **Returns**: `Metadata`
- **Error**: `ApiException<AnalyticsdataPropertiesGetMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesGetMetadataRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesGetMetadataRequest.cs` |
| `Metadata` | `src/GoogleAnalytics/Models/Metadata.cs` |
| `AnalyticsdataPropertiesGetMetadataError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesGetMetadataError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesRunPivotReport

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesRunPivotReport(AnalyticsdataPropertiesRunPivotReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `RunPivotReportResponse`
- **Error**: `ApiException<AnalyticsdataPropertiesRunPivotReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesRunPivotReportRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesRunPivotReportRequest.cs` |
| `RunPivotReportRequest` | `src/GoogleAnalytics/Models/RunPivotReportRequest.cs` |
| `RunPivotReportResponse` | `src/GoogleAnalytics/Models/RunPivotReportResponse.cs` |
| `AnalyticsdataPropertiesRunPivotReportError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesRunPivotReportError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesRunRealtimeReport

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesRunRealtimeReport(AnalyticsdataPropertiesRunRealtimeReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `RunRealtimeReportResponse`
- **Error**: `ApiException<AnalyticsdataPropertiesRunRealtimeReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesRunRealtimeReportRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesRunRealtimeReportRequest.cs` |
| `RunRealtimeReportRequest` | `src/GoogleAnalytics/Models/RunRealtimeReportRequest.cs` |
| `RunRealtimeReportResponse` | `src/GoogleAnalytics/Models/RunRealtimeReportResponse.cs` |
| `AnalyticsdataPropertiesRunRealtimeReportError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesRunRealtimeReportError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsdataPropertiesRunReport

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsdataPropertiesRunReport(AnalyticsdataPropertiesRunReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PropertiesId`, `Body`
- **Returns**: `RunReportResponse`
- **Error**: `ApiException<AnalyticsdataPropertiesRunReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsdataPropertiesRunReportRequest` | `src/GoogleAnalytics/Requests/Properties/AnalyticsdataPropertiesRunReportRequest.cs` |
| `RunReportRequest` | `src/GoogleAnalytics/Models/RunReportRequest.cs` |
| `RunReportResponse` | `src/GoogleAnalytics/Models/RunReportResponse.cs` |
| `AnalyticsdataPropertiesRunReportError` | `src/GoogleAnalytics/Errors/AnalyticsdataPropertiesRunReportError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

