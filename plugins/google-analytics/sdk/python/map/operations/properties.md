<!-- Generated file — do not edit; regenerated with the SDK. -->

# Properties — operations

Accessor: `client.properties` · Source: `google_analytics/apis/properties.py` · 57 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.properties.analyticsadmin_properties_acknowledge_user_data_collection

- **Route**: `POST /v1beta/properties/{propertiesId}:acknowledgeUserDataCollection`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_acknowledge_user_data_collection(properties_id: str, body: GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest | GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody]`
- **Error**: `AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest` | `google_analytics/models/google_analytics_admin_v1_beta_acknowledge_user_data_collection_request.py` |
| `GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict` | `google_analytics/models/google_analytics_admin_v1_beta_acknowledge_user_data_collection_request.py` |
| `AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody` | `google_analytics/errors/analyticsadmin_properties_acknowledge_user_data_collection_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_conversion_events_create

- **Route**: `POST /v1beta/properties/{propertiesId}/conversionEvents`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_conversion_events_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaConversionEvent`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsCreateErrorBody]`
- **Error**: `AnalyticsadminPropertiesConversionEventsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaConversionEvent` | `google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py` |
| `GoogleAnalyticsAdminV1BetaConversionEventDict` | `google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py` |
| `AnalyticsadminPropertiesConversionEventsCreateErrorBody` | `google_analytics/errors/analyticsadmin_properties_conversion_events_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_conversion_events_delete

- **Route**: `DELETE /v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_conversion_events_delete(properties_id: str, conversion_events_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `conversion_events_id`
- **Params**: `properties_id` — path `propertiesId` · `conversion_events_id` — path `conversionEventsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminPropertiesConversionEventsDeleteErrorBody]`
- **Error**: `AnalyticsadminPropertiesConversionEventsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesConversionEventsDeleteErrorBody` | `google_analytics/errors/analyticsadmin_properties_conversion_events_delete_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_conversion_events_get

- **Route**: `GET /v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_conversion_events_get(properties_id: str, conversion_events_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `conversion_events_id`
- **Params**: `properties_id` — path `propertiesId` · `conversion_events_id` — path `conversionEventsId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaConversionEvent`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsGetErrorBody]`
- **Error**: `AnalyticsadminPropertiesConversionEventsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaConversionEvent` | `google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py` |
| `AnalyticsadminPropertiesConversionEventsGetErrorBody` | `google_analytics/errors/analyticsadmin_properties_conversion_events_get_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_conversion_events_list

- **Route**: `GET /v1beta/properties/{propertiesId}/conversionEvents`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_conversion_events_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListConversionEventsResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListConversionEventsResponse, AnalyticsadminPropertiesConversionEventsListErrorBody]`
- **Error**: `AnalyticsadminPropertiesConversionEventsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListConversionEventsResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_conversion_events_response.py` |
| `AnalyticsadminPropertiesConversionEventsListErrorBody` | `google_analytics/errors/analyticsadmin_properties_conversion_events_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_conversion_events_patch

- **Route**: `PATCH /v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_conversion_events_patch(properties_id: str, conversion_events_id: str, body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `conversion_events_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `conversion_events_id` — path `conversionEventsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaConversionEvent`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsPatchErrorBody]`
- **Error**: `AnalyticsadminPropertiesConversionEventsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaConversionEvent` | `google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py` |
| `GoogleAnalyticsAdminV1BetaConversionEventDict` | `google_analytics/models/google_analytics_admin_v1_beta_conversion_event.py` |
| `AnalyticsadminPropertiesConversionEventsPatchErrorBody` | `google_analytics/errors/analyticsadmin_properties_conversion_events_patch_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_create

- **Route**: `POST /v1beta/properties`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_create(body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaProperty`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesCreateErrorBody]`
- **Error**: `AnalyticsadminPropertiesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaProperty` | `google_analytics/models/google_analytics_admin_v1_beta_property.py` |
| `GoogleAnalyticsAdminV1BetaPropertyDict` | `google_analytics/models/google_analytics_admin_v1_beta_property.py` |
| `AnalyticsadminPropertiesCreateErrorBody` | `google_analytics/errors/analyticsadmin_properties_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_dimensions_archive

- **Route**: `POST /v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}:archive`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_dimensions_archive(properties_id: str, custom_dimensions_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `custom_dimensions_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `custom_dimensions_id` — path `customDimensionsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_dimensions_archive_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_dimensions_create

- **Route**: `POST /v1beta/properties/{propertiesId}/customDimensions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_dimensions_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaCustomDimension`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsCreateErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomDimensionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomDimension` | `google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py` |
| `GoogleAnalyticsAdminV1BetaCustomDimensionDict` | `google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py` |
| `AnalyticsadminPropertiesCustomDimensionsCreateErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_dimensions_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_dimensions_get

- **Route**: `GET /v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_dimensions_get(properties_id: str, custom_dimensions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `custom_dimensions_id`
- **Params**: `properties_id` — path `propertiesId` · `custom_dimensions_id` — path `customDimensionsId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaCustomDimension`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsGetErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomDimensionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomDimension` | `google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py` |
| `AnalyticsadminPropertiesCustomDimensionsGetErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_dimensions_get_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_dimensions_list

- **Route**: `GET /v1beta/properties/{propertiesId}/customDimensions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_dimensions_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse, AnalyticsadminPropertiesCustomDimensionsListErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomDimensionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_custom_dimensions_response.py` |
| `AnalyticsadminPropertiesCustomDimensionsListErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_dimensions_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_dimensions_patch

- **Route**: `PATCH /v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_dimensions_patch(properties_id: str, custom_dimensions_id: str, body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `custom_dimensions_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `custom_dimensions_id` — path `customDimensionsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaCustomDimension`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsPatchErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomDimensionsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomDimension` | `google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py` |
| `GoogleAnalyticsAdminV1BetaCustomDimensionDict` | `google_analytics/models/google_analytics_admin_v1_beta_custom_dimension.py` |
| `AnalyticsadminPropertiesCustomDimensionsPatchErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_dimensions_patch_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_metrics_archive

- **Route**: `POST /v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}:archive`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_metrics_archive(properties_id: str, custom_metrics_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `custom_metrics_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `custom_metrics_id` — path `customMetricsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminPropertiesCustomMetricsArchiveErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomMetricsArchiveErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesCustomMetricsArchiveErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_metrics_archive_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_metrics_create

- **Route**: `POST /v1beta/properties/{propertiesId}/customMetrics`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_metrics_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaCustomMetric`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsCreateErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomMetricsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomMetric` | `google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py` |
| `GoogleAnalyticsAdminV1BetaCustomMetricDict` | `google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py` |
| `AnalyticsadminPropertiesCustomMetricsCreateErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_metrics_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_metrics_get

- **Route**: `GET /v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_metrics_get(properties_id: str, custom_metrics_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `custom_metrics_id`
- **Params**: `properties_id` — path `propertiesId` · `custom_metrics_id` — path `customMetricsId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaCustomMetric`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsGetErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomMetricsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomMetric` | `google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py` |
| `AnalyticsadminPropertiesCustomMetricsGetErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_metrics_get_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_metrics_list

- **Route**: `GET /v1beta/properties/{propertiesId}/customMetrics`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_metrics_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListCustomMetricsResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListCustomMetricsResponse, AnalyticsadminPropertiesCustomMetricsListErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomMetricsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListCustomMetricsResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_custom_metrics_response.py` |
| `AnalyticsadminPropertiesCustomMetricsListErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_metrics_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_custom_metrics_patch

- **Route**: `PATCH /v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_custom_metrics_patch(properties_id: str, custom_metrics_id: str, body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `custom_metrics_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `custom_metrics_id` — path `customMetricsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaCustomMetric`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsPatchErrorBody]`
- **Error**: `AnalyticsadminPropertiesCustomMetricsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomMetric` | `google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py` |
| `GoogleAnalyticsAdminV1BetaCustomMetricDict` | `google_analytics/models/google_analytics_admin_v1_beta_custom_metric.py` |
| `AnalyticsadminPropertiesCustomMetricsPatchErrorBody` | `google_analytics/errors/analyticsadmin_properties_custom_metrics_patch_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_create

- **Route**: `POST /v1beta/properties/{propertiesId}/dataStreams`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaDataStream`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsCreateErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaDataStream` | `google_analytics/models/google_analytics_admin_v1_beta_data_stream.py` |
| `GoogleAnalyticsAdminV1BetaDataStreamDict` | `google_analytics/models/google_analytics_admin_v1_beta_data_stream.py` |
| `AnalyticsadminPropertiesDataStreamsCreateErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_delete

- **Route**: `DELETE /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_delete(properties_id: str, data_streams_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `data_streams_id`
- **Params**: `properties_id` — path `propertiesId` · `data_streams_id` — path `dataStreamsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminPropertiesDataStreamsDeleteErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsDeleteErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_delete_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_get

- **Route**: `GET /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_get(properties_id: str, data_streams_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `data_streams_id`
- **Params**: `properties_id` — path `propertiesId` · `data_streams_id` — path `dataStreamsId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaDataStream`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsGetErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaDataStream` | `google_analytics/models/google_analytics_admin_v1_beta_data_stream.py` |
| `AnalyticsadminPropertiesDataStreamsGetErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_get_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_list

- **Route**: `GET /v1beta/properties/{propertiesId}/dataStreams`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListDataStreamsResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListDataStreamsResponse, AnalyticsadminPropertiesDataStreamsListErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListDataStreamsResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_data_streams_response.py` |
| `AnalyticsadminPropertiesDataStreamsListErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_measurement_protocol_secrets_create

- **Route**: `POST /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(properties_id: str, data_streams_id: str, body: GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `data_streams_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `data_streams_id` — path `dataStreamsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | `google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py` |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict` | `google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py` |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete

- **Route**: `DELETE /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(properties_id: str, data_streams_id: str, measurement_protocol_secrets_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `data_streams_id`, `measurement_protocol_secrets_id`
- **Params**: `properties_id` — path `propertiesId` · `data_streams_id` — path `dataStreamsId` · `measurement_protocol_secrets_id` — path `measurementProtocolSecretsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_measurement_protocol_secrets_get

- **Route**: `GET /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(properties_id: str, data_streams_id: str, measurement_protocol_secrets_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `data_streams_id`, `measurement_protocol_secrets_id`
- **Params**: `properties_id` — path `propertiesId` · `data_streams_id` — path `dataStreamsId` · `measurement_protocol_secrets_id` — path `measurementProtocolSecretsId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | `google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py` |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_get_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_measurement_protocol_secrets_list

- **Route**: `GET /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(properties_id: str, data_streams_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `data_streams_id`
- **Params**: `properties_id` — path `propertiesId` · `data_streams_id` — path `dataStreamsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_measurement_protocol_secrets_response.py` |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch

- **Route**: `PATCH /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(properties_id: str, data_streams_id: str, measurement_protocol_secrets_id: str, body: GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `data_streams_id`, `measurement_protocol_secrets_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `data_streams_id` — path `dataStreamsId` · `measurement_protocol_secrets_id` — path `measurementProtocolSecretsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | `google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py` |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict` | `google_analytics/models/google_analytics_admin_v1_beta_measurement_protocol_secret.py` |
| `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_data_streams_patch

- **Route**: `PATCH /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_data_streams_patch(properties_id: str, data_streams_id: str, body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `data_streams_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `data_streams_id` — path `dataStreamsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaDataStream`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsPatchErrorBody]`
- **Error**: `AnalyticsadminPropertiesDataStreamsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaDataStream` | `google_analytics/models/google_analytics_admin_v1_beta_data_stream.py` |
| `GoogleAnalyticsAdminV1BetaDataStreamDict` | `google_analytics/models/google_analytics_admin_v1_beta_data_stream.py` |
| `AnalyticsadminPropertiesDataStreamsPatchErrorBody` | `google_analytics/errors/analyticsadmin_properties_data_streams_patch_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_delete

- **Route**: `DELETE /v1beta/properties/{propertiesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_delete(properties_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaProperty`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesDeleteErrorBody]`
- **Error**: `AnalyticsadminPropertiesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaProperty` | `google_analytics/models/google_analytics_admin_v1_beta_property.py` |
| `AnalyticsadminPropertiesDeleteErrorBody` | `google_analytics/errors/analyticsadmin_properties_delete_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_firebase_links_create

- **Route**: `POST /v1beta/properties/{propertiesId}/firebaseLinks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_firebase_links_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaFirebaseLink | GoogleAnalyticsAdminV1BetaFirebaseLinkDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaFirebaseLink`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaFirebaseLink, AnalyticsadminPropertiesFirebaseLinksCreateErrorBody]`
- **Error**: `AnalyticsadminPropertiesFirebaseLinksCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaFirebaseLink` | `google_analytics/models/google_analytics_admin_v1_beta_firebase_link.py` |
| `GoogleAnalyticsAdminV1BetaFirebaseLinkDict` | `google_analytics/models/google_analytics_admin_v1_beta_firebase_link.py` |
| `AnalyticsadminPropertiesFirebaseLinksCreateErrorBody` | `google_analytics/errors/analyticsadmin_properties_firebase_links_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_firebase_links_delete

- **Route**: `DELETE /v1beta/properties/{propertiesId}/firebaseLinks/{firebaseLinksId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_firebase_links_delete(properties_id: str, firebase_links_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `firebase_links_id`
- **Params**: `properties_id` — path `propertiesId` · `firebase_links_id` — path `firebaseLinksId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody]`
- **Error**: `AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody` | `google_analytics/errors/analyticsadmin_properties_firebase_links_delete_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_firebase_links_list

- **Route**: `GET /v1beta/properties/{propertiesId}/firebaseLinks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_firebase_links_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse, AnalyticsadminPropertiesFirebaseLinksListErrorBody]`
- **Error**: `AnalyticsadminPropertiesFirebaseLinksListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_firebase_links_response.py` |
| `AnalyticsadminPropertiesFirebaseLinksListErrorBody` | `google_analytics/errors/analyticsadmin_properties_firebase_links_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_get

- **Route**: `GET /v1beta/properties/{propertiesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_get(properties_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaProperty`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesGetErrorBody]`
- **Error**: `AnalyticsadminPropertiesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaProperty` | `google_analytics/models/google_analytics_admin_v1_beta_property.py` |
| `AnalyticsadminPropertiesGetErrorBody` | `google_analytics/errors/analyticsadmin_properties_get_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_get_data_retention_settings

- **Route**: `GET /v1beta/properties/{propertiesId}/dataRetentionSettings`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_get_data_retention_settings(properties_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaDataRetentionSettings`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaDataRetentionSettings, AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody]`
- **Error**: `AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaDataRetentionSettings` | `google_analytics/models/google_analytics_admin_v1_beta_data_retention_settings.py` |
| `AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody` | `google_analytics/errors/analyticsadmin_properties_get_data_retention_settings_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_google_ads_links_create

- **Route**: `POST /v1beta/properties/{propertiesId}/googleAdsLinks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_google_ads_links_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaGoogleAdsLink`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaGoogleAdsLink, AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody]`
- **Error**: `AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaGoogleAdsLink` | `google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py` |
| `GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict` | `google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py` |
| `AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody` | `google_analytics/errors/analyticsadmin_properties_google_ads_links_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_google_ads_links_delete

- **Route**: `DELETE /v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_google_ads_links_delete(properties_id: str, google_ads_links_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `google_ads_links_id`
- **Params**: `properties_id` — path `propertiesId` · `google_ads_links_id` — path `googleAdsLinksId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody]`
- **Error**: `AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody` | `google_analytics/errors/analyticsadmin_properties_google_ads_links_delete_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_google_ads_links_list

- **Route**: `GET /v1beta/properties/{propertiesId}/googleAdsLinks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_google_ads_links_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse, AnalyticsadminPropertiesGoogleAdsLinksListErrorBody]`
- **Error**: `AnalyticsadminPropertiesGoogleAdsLinksListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_google_ads_links_response.py` |
| `AnalyticsadminPropertiesGoogleAdsLinksListErrorBody` | `google_analytics/errors/analyticsadmin_properties_google_ads_links_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_google_ads_links_patch

- **Route**: `PATCH /v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_google_ads_links_patch(properties_id: str, google_ads_links_id: str, body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `google_ads_links_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `google_ads_links_id` — path `googleAdsLinksId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaGoogleAdsLink`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaGoogleAdsLink, AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody]`
- **Error**: `AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaGoogleAdsLink` | `google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py` |
| `GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict` | `google_analytics/models/google_analytics_admin_v1_beta_google_ads_link.py` |
| `AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody` | `google_analytics/errors/analyticsadmin_properties_google_ads_links_patch_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_key_events_create

- **Route**: `POST /v1beta/properties/{propertiesId}/keyEvents`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_key_events_create(properties_id: str, body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaKeyEvent`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsCreateErrorBody]`
- **Error**: `AnalyticsadminPropertiesKeyEventsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaKeyEvent` | `google_analytics/models/google_analytics_admin_v1_beta_key_event.py` |
| `GoogleAnalyticsAdminV1BetaKeyEventDict` | `google_analytics/models/google_analytics_admin_v1_beta_key_event.py` |
| `AnalyticsadminPropertiesKeyEventsCreateErrorBody` | `google_analytics/errors/analyticsadmin_properties_key_events_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_key_events_delete

- **Route**: `DELETE /v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_key_events_delete(properties_id: str, key_events_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `key_events_id`
- **Params**: `properties_id` — path `propertiesId` · `key_events_id` — path `keyEventsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminPropertiesKeyEventsDeleteErrorBody]`
- **Error**: `AnalyticsadminPropertiesKeyEventsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsadminPropertiesKeyEventsDeleteErrorBody` | `google_analytics/errors/analyticsadmin_properties_key_events_delete_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_key_events_get

- **Route**: `GET /v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_key_events_get(properties_id: str, key_events_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `key_events_id`
- **Params**: `properties_id` — path `propertiesId` · `key_events_id` — path `keyEventsId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaKeyEvent`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsGetErrorBody]`
- **Error**: `AnalyticsadminPropertiesKeyEventsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaKeyEvent` | `google_analytics/models/google_analytics_admin_v1_beta_key_event.py` |
| `AnalyticsadminPropertiesKeyEventsGetErrorBody` | `google_analytics/errors/analyticsadmin_properties_key_events_get_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_key_events_list

- **Route**: `GET /v1beta/properties/{propertiesId}/keyEvents`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_key_events_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListKeyEventsResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListKeyEventsResponse, AnalyticsadminPropertiesKeyEventsListErrorBody]`
- **Error**: `AnalyticsadminPropertiesKeyEventsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListKeyEventsResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_key_events_response.py` |
| `AnalyticsadminPropertiesKeyEventsListErrorBody` | `google_analytics/errors/analyticsadmin_properties_key_events_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_key_events_patch

- **Route**: `PATCH /v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_key_events_patch(properties_id: str, key_events_id: str, body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `key_events_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `key_events_id` — path `keyEventsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaKeyEvent`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsPatchErrorBody]`
- **Error**: `AnalyticsadminPropertiesKeyEventsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaKeyEvent` | `google_analytics/models/google_analytics_admin_v1_beta_key_event.py` |
| `GoogleAnalyticsAdminV1BetaKeyEventDict` | `google_analytics/models/google_analytics_admin_v1_beta_key_event.py` |
| `AnalyticsadminPropertiesKeyEventsPatchErrorBody` | `google_analytics/errors/analyticsadmin_properties_key_events_patch_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_list

- **Route**: `GET /v1beta/properties`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_list(*, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, show_deleted: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `show_deleted` — query `showDeleted`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListPropertiesResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListPropertiesResponse, AnalyticsadminPropertiesListErrorBody]`
- **Error**: `AnalyticsadminPropertiesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListPropertiesResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_properties_response.py` |
| `AnalyticsadminPropertiesListErrorBody` | `google_analytics/errors/analyticsadmin_properties_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_patch

- **Route**: `PATCH /v1beta/properties/{propertiesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_patch(properties_id: str, body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaProperty`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesPatchErrorBody]`
- **Error**: `AnalyticsadminPropertiesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaProperty` | `google_analytics/models/google_analytics_admin_v1_beta_property.py` |
| `GoogleAnalyticsAdminV1BetaPropertyDict` | `google_analytics/models/google_analytics_admin_v1_beta_property.py` |
| `AnalyticsadminPropertiesPatchErrorBody` | `google_analytics/errors/analyticsadmin_properties_patch_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_run_access_report

- **Route**: `POST /v1beta/properties/{propertiesId}:runAccessReport`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_run_access_report(properties_id: str, body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaRunAccessReportResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaRunAccessReportResponse, AnalyticsadminPropertiesRunAccessReportErrorBody]`
- **Error**: `AnalyticsadminPropertiesRunAccessReportErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaRunAccessReportRequest` | `google_analytics/models/google_analytics_admin_v1_beta_run_access_report_request.py` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict` | `google_analytics/models/google_analytics_admin_v1_beta_run_access_report_request.py` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportResponse` | `google_analytics/models/google_analytics_admin_v1_beta_run_access_report_response.py` |
| `AnalyticsadminPropertiesRunAccessReportErrorBody` | `google_analytics/errors/analyticsadmin_properties_run_access_report_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsadmin_properties_update_data_retention_settings

- **Route**: `PATCH /v1beta/properties/{propertiesId}/dataRetentionSettings`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_properties_update_data_retention_settings(properties_id: str, body: GoogleAnalyticsAdminV1BetaDataRetentionSettings | GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaDataRetentionSettings`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaDataRetentionSettings, AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody]`
- **Error**: `AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaDataRetentionSettings` | `google_analytics/models/google_analytics_admin_v1_beta_data_retention_settings.py` |
| `GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict` | `google_analytics/models/google_analytics_admin_v1_beta_data_retention_settings.py` |
| `AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody` | `google_analytics/errors/analyticsadmin_properties_update_data_retention_settings_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_audience_exports_create

- **Route**: `POST /v1beta/properties/{propertiesId}/audienceExports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_audience_exports_create(properties_id: str, body: AudienceExport | AudienceExportDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `OperationGoogleAnalyticsPropertiesApi`
- **Returns (raw)**: `ApiResult[OperationGoogleAnalyticsPropertiesApi, AnalyticsdataPropertiesAudienceExportsCreateErrorBody]`
- **Error**: `AnalyticsdataPropertiesAudienceExportsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AudienceExport` | `google_analytics/models/audience_export.py` |
| `AudienceExportDict` | `google_analytics/models/audience_export.py` |
| `OperationGoogleAnalyticsPropertiesApi` | `google_analytics/models/operation_google_analytics_properties_api.py` |
| `AnalyticsdataPropertiesAudienceExportsCreateErrorBody` | `google_analytics/errors/analyticsdata_properties_audience_exports_create_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_audience_exports_get

- **Route**: `GET /v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_audience_exports_get(properties_id: str, audience_exports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `audience_exports_id`
- **Params**: `properties_id` — path `propertiesId` · `audience_exports_id` — path `audienceExportsId`
- **Returns (parsed)**: `AudienceExport`
- **Returns (raw)**: `ApiResult[AudienceExport, AnalyticsdataPropertiesAudienceExportsGetErrorBody]`
- **Error**: `AnalyticsdataPropertiesAudienceExportsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AudienceExport` | `google_analytics/models/audience_export.py` |
| `AnalyticsdataPropertiesAudienceExportsGetErrorBody` | `google_analytics/errors/analyticsdata_properties_audience_exports_get_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_audience_exports_list

- **Route**: `GET /v1beta/properties/{propertiesId}/audienceExports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_audience_exports_list(properties_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListAudienceExportsResponse`
- **Returns (raw)**: `ApiResult[ListAudienceExportsResponse, AnalyticsdataPropertiesAudienceExportsListErrorBody]`
- **Error**: `AnalyticsdataPropertiesAudienceExportsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAudienceExportsResponse` | `google_analytics/models/list_audience_exports_response.py` |
| `AnalyticsdataPropertiesAudienceExportsListErrorBody` | `google_analytics/errors/analyticsdata_properties_audience_exports_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_audience_exports_query

- **Route**: `POST /v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}:query`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_audience_exports_query(properties_id: str, audience_exports_id: str, body: QueryAudienceExportRequest | QueryAudienceExportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `audience_exports_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `audience_exports_id` — path `audienceExportsId` · `body` — JSON body
- **Returns (parsed)**: `QueryAudienceExportResponse`
- **Returns (raw)**: `ApiResult[QueryAudienceExportResponse, AnalyticsdataPropertiesAudienceExportsQueryErrorBody]`
- **Error**: `AnalyticsdataPropertiesAudienceExportsQueryErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QueryAudienceExportRequest` | `google_analytics/models/query_audience_export_request.py` |
| `QueryAudienceExportRequestDict` | `google_analytics/models/query_audience_export_request.py` |
| `QueryAudienceExportResponse` | `google_analytics/models/query_audience_export_response.py` |
| `AnalyticsdataPropertiesAudienceExportsQueryErrorBody` | `google_analytics/errors/analyticsdata_properties_audience_exports_query_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_batch_run_pivot_reports

- **Route**: `POST /v1beta/properties/{propertiesId}:batchRunPivotReports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_batch_run_pivot_reports(properties_id: str, body: BatchRunPivotReportsRequest | BatchRunPivotReportsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `BatchRunPivotReportsResponse`
- **Returns (raw)**: `ApiResult[BatchRunPivotReportsResponse, AnalyticsdataPropertiesBatchRunPivotReportsErrorBody]`
- **Error**: `AnalyticsdataPropertiesBatchRunPivotReportsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchRunPivotReportsRequest` | `google_analytics/models/batch_run_pivot_reports_request.py` |
| `BatchRunPivotReportsRequestDict` | `google_analytics/models/batch_run_pivot_reports_request.py` |
| `BatchRunPivotReportsResponse` | `google_analytics/models/batch_run_pivot_reports_response.py` |
| `AnalyticsdataPropertiesBatchRunPivotReportsErrorBody` | `google_analytics/errors/analyticsdata_properties_batch_run_pivot_reports_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_batch_run_reports

- **Route**: `POST /v1beta/properties/{propertiesId}:batchRunReports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_batch_run_reports(properties_id: str, body: BatchRunReportsRequest | BatchRunReportsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `BatchRunReportsResponse`
- **Returns (raw)**: `ApiResult[BatchRunReportsResponse, AnalyticsdataPropertiesBatchRunReportsErrorBody]`
- **Error**: `AnalyticsdataPropertiesBatchRunReportsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchRunReportsRequest` | `google_analytics/models/batch_run_reports_request.py` |
| `BatchRunReportsRequestDict` | `google_analytics/models/batch_run_reports_request.py` |
| `BatchRunReportsResponse` | `google_analytics/models/batch_run_reports_response.py` |
| `AnalyticsdataPropertiesBatchRunReportsErrorBody` | `google_analytics/errors/analyticsdata_properties_batch_run_reports_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_check_compatibility

- **Route**: `POST /v1beta/properties/{propertiesId}:checkCompatibility`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_check_compatibility(properties_id: str, body: CheckCompatibilityRequest | CheckCompatibilityRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `CheckCompatibilityResponse`
- **Returns (raw)**: `ApiResult[CheckCompatibilityResponse, AnalyticsdataPropertiesCheckCompatibilityErrorBody]`
- **Error**: `AnalyticsdataPropertiesCheckCompatibilityErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckCompatibilityRequest` | `google_analytics/models/check_compatibility_request.py` |
| `CheckCompatibilityRequestDict` | `google_analytics/models/check_compatibility_request.py` |
| `CheckCompatibilityResponse` | `google_analytics/models/check_compatibility_response.py` |
| `AnalyticsdataPropertiesCheckCompatibilityErrorBody` | `google_analytics/errors/analyticsdata_properties_check_compatibility_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_get_metadata

- **Route**: `GET /v1beta/properties/{propertiesId}/metadata`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_get_metadata(properties_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`
- **Params**: `properties_id` — path `propertiesId`
- **Returns (parsed)**: `Metadata`
- **Returns (raw)**: `ApiResult[Metadata, AnalyticsdataPropertiesGetMetadataErrorBody]`
- **Error**: `AnalyticsdataPropertiesGetMetadataErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Metadata` | `google_analytics/models/metadata.py` |
| `AnalyticsdataPropertiesGetMetadataErrorBody` | `google_analytics/errors/analyticsdata_properties_get_metadata_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_run_pivot_report

- **Route**: `POST /v1beta/properties/{propertiesId}:runPivotReport`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_run_pivot_report(properties_id: str, body: RunPivotReportRequest | RunPivotReportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `RunPivotReportResponse`
- **Returns (raw)**: `ApiResult[RunPivotReportResponse, AnalyticsdataPropertiesRunPivotReportErrorBody]`
- **Error**: `AnalyticsdataPropertiesRunPivotReportErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunPivotReportRequest` | `google_analytics/models/run_pivot_report_request.py` |
| `RunPivotReportRequestDict` | `google_analytics/models/run_pivot_report_request.py` |
| `RunPivotReportResponse` | `google_analytics/models/run_pivot_report_response.py` |
| `AnalyticsdataPropertiesRunPivotReportErrorBody` | `google_analytics/errors/analyticsdata_properties_run_pivot_report_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_run_realtime_report

- **Route**: `POST /v1beta/properties/{propertiesId}:runRealtimeReport`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_run_realtime_report(properties_id: str, body: RunRealtimeReportRequest | RunRealtimeReportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `RunRealtimeReportResponse`
- **Returns (raw)**: `ApiResult[RunRealtimeReportResponse, AnalyticsdataPropertiesRunRealtimeReportErrorBody]`
- **Error**: `AnalyticsdataPropertiesRunRealtimeReportErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunRealtimeReportRequest` | `google_analytics/models/run_realtime_report_request.py` |
| `RunRealtimeReportRequestDict` | `google_analytics/models/run_realtime_report_request.py` |
| `RunRealtimeReportResponse` | `google_analytics/models/run_realtime_report_response.py` |
| `AnalyticsdataPropertiesRunRealtimeReportErrorBody` | `google_analytics/errors/analyticsdata_properties_run_realtime_report_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.properties.analyticsdata_properties_run_report

- **Route**: `POST /v1beta/properties/{propertiesId}:runReport`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsdata_properties_run_report(properties_id: str, body: RunReportRequest | RunReportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `properties_id`, `body`
- **Params**: `properties_id` — path `propertiesId` · `body` — JSON body
- **Returns (parsed)**: `RunReportResponse`
- **Returns (raw)**: `ApiResult[RunReportResponse, AnalyticsdataPropertiesRunReportErrorBody]`
- **Error**: `AnalyticsdataPropertiesRunReportErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunReportRequest` | `google_analytics/models/run_report_request.py` |
| `RunReportRequestDict` | `google_analytics/models/run_report_request.py` |
| `RunReportResponse` | `google_analytics/models/run_report_response.py` |
| `AnalyticsdataPropertiesRunReportErrorBody` | `google_analytics/errors/analyticsdata_properties_run_report_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

