<!-- Generated file — do not edit; regenerated with the SDK. -->

# Properties — operations

Accessor: `client.properties` · Source: `src/resources/properties.ts` · 57 operations · Request and error types: namespace `Properties`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-analytics`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### analyticsadminPropertiesAcknowledgeUserDataCollection

- **Signature**: `analyticsadminPropertiesAcknowledgeUserDataCollection(request: Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}:acknowledgeUserDataCollection`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest` | `googleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestSchema` | `src/models/google-analytics-admin-v1-beta-acknowledge-user-data-collection-request.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesConversionEventsCreate

- **Signature**: `analyticsadminPropertiesConversionEventsCreate(request: Properties.AnalyticsadminPropertiesConversionEventsCreateRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaConversionEvent, Properties.AnalyticsadminPropertiesConversionEventsCreateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /v1beta/properties/{propertiesId}/conversionEvents`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaConversionEvent`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesConversionEventsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesConversionEventsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaConversionEvent` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaConversionEvent` | `googleAnalyticsAdminV1BetaConversionEventSchema` | `src/models/google-analytics-admin-v1-beta-conversion-event.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesConversionEventsDelete

- **Signature**: `analyticsadminPropertiesConversionEventsDelete(request: Properties.AnalyticsadminPropertiesConversionEventsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesConversionEventsDeleteError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesConversionEventsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesConversionEventsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `conversionEventsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesConversionEventsGet

- **Signature**: `analyticsadminPropertiesConversionEventsGet(request: Properties.AnalyticsadminPropertiesConversionEventsGetRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaConversionEvent, Properties.AnalyticsadminPropertiesConversionEventsGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaConversionEvent`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesConversionEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesConversionEventsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `conversionEventsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaConversionEvent` | `googleAnalyticsAdminV1BetaConversionEventSchema` | `src/models/google-analytics-admin-v1-beta-conversion-event.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesConversionEventsList

- **Signature**: `analyticsadminPropertiesConversionEventsList(request: Properties.AnalyticsadminPropertiesConversionEventsListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListConversionEventsResponse, Properties.AnalyticsadminPropertiesConversionEventsListError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /v1beta/properties/{propertiesId}/conversionEvents`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListConversionEventsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesConversionEventsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesConversionEventsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListConversionEventsResponse` | `googleAnalyticsAdminV1BetaListConversionEventsResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-conversion-events-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesConversionEventsPatch

- **Signature**: `analyticsadminPropertiesConversionEventsPatch(request: Properties.AnalyticsadminPropertiesConversionEventsPatchRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaConversionEvent, Properties.AnalyticsadminPropertiesConversionEventsPatchError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PATCH /v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaConversionEvent`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesConversionEventsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesConversionEventsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `conversionEventsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaConversionEvent` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaConversionEvent` | `googleAnalyticsAdminV1BetaConversionEventSchema` | `src/models/google-analytics-admin-v1-beta-conversion-event.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCreate

- **Signature**: `analyticsadminPropertiesCreate(request: Properties.AnalyticsadminPropertiesCreateRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesCreateError>`
- **Wire**: `POST /v1beta/properties`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaProperty`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaProperty` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaProperty` | `googleAnalyticsAdminV1BetaPropertySchema` | `src/models/google-analytics-admin-v1-beta-property.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomDimensionsArchive

- **Signature**: `analyticsadminPropertiesCustomDimensionsArchive(request: Properties.AnalyticsadminPropertiesCustomDimensionsArchiveRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesCustomDimensionsArchiveError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}:archive`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomDimensionsArchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomDimensionsArchiveRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `customDimensionsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomDimensionsCreate

- **Signature**: `analyticsadminPropertiesCustomDimensionsCreate(request: Properties.AnalyticsadminPropertiesCustomDimensionsCreateRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaCustomDimension, Properties.AnalyticsadminPropertiesCustomDimensionsCreateError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/customDimensions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomDimension`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomDimensionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomDimensionsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaCustomDimension` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomDimension` | `googleAnalyticsAdminV1BetaCustomDimensionSchema` | `src/models/google-analytics-admin-v1-beta-custom-dimension.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomDimensionsGet

- **Signature**: `analyticsadminPropertiesCustomDimensionsGet(request: Properties.AnalyticsadminPropertiesCustomDimensionsGetRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaCustomDimension, Properties.AnalyticsadminPropertiesCustomDimensionsGetError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomDimension`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomDimensionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomDimensionsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `customDimensionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomDimension` | `googleAnalyticsAdminV1BetaCustomDimensionSchema` | `src/models/google-analytics-admin-v1-beta-custom-dimension.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomDimensionsList

- **Signature**: `analyticsadminPropertiesCustomDimensionsList(request: Properties.AnalyticsadminPropertiesCustomDimensionsListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse, Properties.AnalyticsadminPropertiesCustomDimensionsListError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/customDimensions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomDimensionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomDimensionsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse` | `googleAnalyticsAdminV1BetaListCustomDimensionsResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-custom-dimensions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomDimensionsPatch

- **Signature**: `analyticsadminPropertiesCustomDimensionsPatch(request: Properties.AnalyticsadminPropertiesCustomDimensionsPatchRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaCustomDimension, Properties.AnalyticsadminPropertiesCustomDimensionsPatchError>`
- **Wire**: `PATCH /v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomDimension`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomDimensionsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomDimensionsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `customDimensionsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaCustomDimension` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomDimension` | `googleAnalyticsAdminV1BetaCustomDimensionSchema` | `src/models/google-analytics-admin-v1-beta-custom-dimension.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomMetricsArchive

- **Signature**: `analyticsadminPropertiesCustomMetricsArchive(request: Properties.AnalyticsadminPropertiesCustomMetricsArchiveRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesCustomMetricsArchiveError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}:archive`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomMetricsArchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomMetricsArchiveRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `customMetricsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomMetricsCreate

- **Signature**: `analyticsadminPropertiesCustomMetricsCreate(request: Properties.AnalyticsadminPropertiesCustomMetricsCreateRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaCustomMetric, Properties.AnalyticsadminPropertiesCustomMetricsCreateError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/customMetrics`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomMetric`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomMetricsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomMetricsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaCustomMetric` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomMetric` | `googleAnalyticsAdminV1BetaCustomMetricSchema` | `src/models/google-analytics-admin-v1-beta-custom-metric.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomMetricsGet

- **Signature**: `analyticsadminPropertiesCustomMetricsGet(request: Properties.AnalyticsadminPropertiesCustomMetricsGetRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaCustomMetric, Properties.AnalyticsadminPropertiesCustomMetricsGetError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomMetric`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomMetricsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomMetricsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `customMetricsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomMetric` | `googleAnalyticsAdminV1BetaCustomMetricSchema` | `src/models/google-analytics-admin-v1-beta-custom-metric.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomMetricsList

- **Signature**: `analyticsadminPropertiesCustomMetricsList(request: Properties.AnalyticsadminPropertiesCustomMetricsListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListCustomMetricsResponse, Properties.AnalyticsadminPropertiesCustomMetricsListError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/customMetrics`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListCustomMetricsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomMetricsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomMetricsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListCustomMetricsResponse` | `googleAnalyticsAdminV1BetaListCustomMetricsResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-custom-metrics-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesCustomMetricsPatch

- **Signature**: `analyticsadminPropertiesCustomMetricsPatch(request: Properties.AnalyticsadminPropertiesCustomMetricsPatchRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaCustomMetric, Properties.AnalyticsadminPropertiesCustomMetricsPatchError>`
- **Wire**: `PATCH /v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaCustomMetric`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesCustomMetricsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesCustomMetricsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `customMetricsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaCustomMetric` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaCustomMetric` | `googleAnalyticsAdminV1BetaCustomMetricSchema` | `src/models/google-analytics-admin-v1-beta-custom-metric.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsCreate

- **Signature**: `analyticsadminPropertiesDataStreamsCreate(request: Properties.AnalyticsadminPropertiesDataStreamsCreateRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaDataStream, Properties.AnalyticsadminPropertiesDataStreamsCreateError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/dataStreams`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaDataStream`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaDataStream` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaDataStream` | `googleAnalyticsAdminV1BetaDataStreamSchema` | `src/models/google-analytics-admin-v1-beta-data-stream.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsDelete

- **Signature**: `analyticsadminPropertiesDataStreamsDelete(request: Properties.AnalyticsadminPropertiesDataStreamsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesDataStreamsDeleteError>`
- **Wire**: `DELETE /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `dataStreamsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsGet

- **Signature**: `analyticsadminPropertiesDataStreamsGet(request: Properties.AnalyticsadminPropertiesDataStreamsGetRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaDataStream, Properties.AnalyticsadminPropertiesDataStreamsGetError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaDataStream`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `dataStreamsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaDataStream` | `googleAnalyticsAdminV1BetaDataStreamSchema` | `src/models/google-analytics-admin-v1-beta-data-stream.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsList

- **Signature**: `analyticsadminPropertiesDataStreamsList(request: Properties.AnalyticsadminPropertiesDataStreamsListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListDataStreamsResponse, Properties.AnalyticsadminPropertiesDataStreamsListError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/dataStreams`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListDataStreamsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListDataStreamsResponse` | `googleAnalyticsAdminV1BetaListDataStreamsResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-data-streams-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate

- **Signature**: `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `dataStreamsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | `googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema` | `src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete

- **Signature**: `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError>`
- **Wire**: `DELETE /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `dataStreamsId` | `path` | `string` | yes |
| `measurementProtocolSecretsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet

- **Signature**: `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `dataStreamsId` | `path` | `string` | yes |
| `measurementProtocolSecretsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | `googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema` | `src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList

- **Signature**: `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `dataStreamsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse` | `googleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-measurement-protocol-secrets-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch

- **Signature**: `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret, Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError>`
- **Wire**: `PATCH /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `dataStreamsId` | `path` | `string` | yes |
| `measurementProtocolSecretsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret` | `googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema` | `src/models/google-analytics-admin-v1-beta-measurement-protocol-secret.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDataStreamsPatch

- **Signature**: `analyticsadminPropertiesDataStreamsPatch(request: Properties.AnalyticsadminPropertiesDataStreamsPatchRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaDataStream, Properties.AnalyticsadminPropertiesDataStreamsPatchError>`
- **Wire**: `PATCH /v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaDataStream`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDataStreamsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDataStreamsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `dataStreamsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaDataStream` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaDataStream` | `googleAnalyticsAdminV1BetaDataStreamSchema` | `src/models/google-analytics-admin-v1-beta-data-stream.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesDelete

- **Signature**: `analyticsadminPropertiesDelete(request: Properties.AnalyticsadminPropertiesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesDeleteError>`
- **Wire**: `DELETE /v1beta/properties/{propertiesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaProperty`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesDeleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaProperty` | `googleAnalyticsAdminV1BetaPropertySchema` | `src/models/google-analytics-admin-v1-beta-property.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesFirebaseLinksCreate

- **Signature**: `analyticsadminPropertiesFirebaseLinksCreate(request: Properties.AnalyticsadminPropertiesFirebaseLinksCreateRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaFirebaseLink, Properties.AnalyticsadminPropertiesFirebaseLinksCreateError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/firebaseLinks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaFirebaseLink`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesFirebaseLinksCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesFirebaseLinksCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaFirebaseLink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaFirebaseLink` | `googleAnalyticsAdminV1BetaFirebaseLinkSchema` | `src/models/google-analytics-admin-v1-beta-firebase-link.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesFirebaseLinksDelete

- **Signature**: `analyticsadminPropertiesFirebaseLinksDelete(request: Properties.AnalyticsadminPropertiesFirebaseLinksDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesFirebaseLinksDeleteError>`
- **Wire**: `DELETE /v1beta/properties/{propertiesId}/firebaseLinks/{firebaseLinksId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesFirebaseLinksDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesFirebaseLinksDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `firebaseLinksId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesFirebaseLinksList

- **Signature**: `analyticsadminPropertiesFirebaseLinksList(request: Properties.AnalyticsadminPropertiesFirebaseLinksListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse, Properties.AnalyticsadminPropertiesFirebaseLinksListError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/firebaseLinks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesFirebaseLinksListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesFirebaseLinksListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse` | `googleAnalyticsAdminV1BetaListFirebaseLinksResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-firebase-links-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesGet

- **Signature**: `analyticsadminPropertiesGet(request: Properties.AnalyticsadminPropertiesGetRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesGetError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaProperty`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaProperty` | `googleAnalyticsAdminV1BetaPropertySchema` | `src/models/google-analytics-admin-v1-beta-property.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesGetDataRetentionSettings

- **Signature**: `analyticsadminPropertiesGetDataRetentionSettings(request: Properties.AnalyticsadminPropertiesGetDataRetentionSettingsRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaDataRetentionSettings, Properties.AnalyticsadminPropertiesGetDataRetentionSettingsError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/dataRetentionSettings`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaDataRetentionSettings`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesGetDataRetentionSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesGetDataRetentionSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaDataRetentionSettings` | `googleAnalyticsAdminV1BetaDataRetentionSettingsSchema` | `src/models/google-analytics-admin-v1-beta-data-retention-settings.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesGoogleAdsLinksCreate

- **Signature**: `analyticsadminPropertiesGoogleAdsLinksCreate(request: Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaGoogleAdsLink, Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/googleAdsLinks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaGoogleAdsLink`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaGoogleAdsLink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaGoogleAdsLink` | `googleAnalyticsAdminV1BetaGoogleAdsLinkSchema` | `src/models/google-analytics-admin-v1-beta-google-ads-link.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesGoogleAdsLinksDelete

- **Signature**: `analyticsadminPropertiesGoogleAdsLinksDelete(request: Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteError>`
- **Wire**: `DELETE /v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `googleAdsLinksId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesGoogleAdsLinksList

- **Signature**: `analyticsadminPropertiesGoogleAdsLinksList(request: Properties.AnalyticsadminPropertiesGoogleAdsLinksListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse, Properties.AnalyticsadminPropertiesGoogleAdsLinksListError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/googleAdsLinks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesGoogleAdsLinksListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesGoogleAdsLinksListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse` | `googleAnalyticsAdminV1BetaListGoogleAdsLinksResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-google-ads-links-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesGoogleAdsLinksPatch

- **Signature**: `analyticsadminPropertiesGoogleAdsLinksPatch(request: Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaGoogleAdsLink, Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchError>`
- **Wire**: `PATCH /v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaGoogleAdsLink`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `googleAdsLinksId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaGoogleAdsLink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaGoogleAdsLink` | `googleAnalyticsAdminV1BetaGoogleAdsLinkSchema` | `src/models/google-analytics-admin-v1-beta-google-ads-link.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesKeyEventsCreate

- **Signature**: `analyticsadminPropertiesKeyEventsCreate(request: Properties.AnalyticsadminPropertiesKeyEventsCreateRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsCreateError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/keyEvents`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaKeyEvent`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesKeyEventsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesKeyEventsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaKeyEvent` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaKeyEvent` | `googleAnalyticsAdminV1BetaKeyEventSchema` | `src/models/google-analytics-admin-v1-beta-key-event.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesKeyEventsDelete

- **Signature**: `analyticsadminPropertiesKeyEventsDelete(request: Properties.AnalyticsadminPropertiesKeyEventsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesKeyEventsDeleteError>`
- **Wire**: `DELETE /v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesKeyEventsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesKeyEventsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `keyEventsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesKeyEventsGet

- **Signature**: `analyticsadminPropertiesKeyEventsGet(request: Properties.AnalyticsadminPropertiesKeyEventsGetRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsGetError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaKeyEvent`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesKeyEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesKeyEventsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `keyEventsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaKeyEvent` | `googleAnalyticsAdminV1BetaKeyEventSchema` | `src/models/google-analytics-admin-v1-beta-key-event.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesKeyEventsList

- **Signature**: `analyticsadminPropertiesKeyEventsList(request: Properties.AnalyticsadminPropertiesKeyEventsListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListKeyEventsResponse, Properties.AnalyticsadminPropertiesKeyEventsListError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/keyEvents`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListKeyEventsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesKeyEventsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesKeyEventsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListKeyEventsResponse` | `googleAnalyticsAdminV1BetaListKeyEventsResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-key-events-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesKeyEventsPatch

- **Signature**: `analyticsadminPropertiesKeyEventsPatch(request: Properties.AnalyticsadminPropertiesKeyEventsPatchRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsPatchError>`
- **Wire**: `PATCH /v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaKeyEvent`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesKeyEventsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesKeyEventsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `keyEventsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaKeyEvent` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaKeyEvent` | `googleAnalyticsAdminV1BetaKeyEventSchema` | `src/models/google-analytics-admin-v1-beta-key-event.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesList

- **Signature**: `analyticsadminPropertiesList(request?: Properties.AnalyticsadminPropertiesListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListPropertiesResponse, Properties.AnalyticsadminPropertiesListError>`
- **Wire**: `GET /v1beta/properties`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListPropertiesResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `showDeleted` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListPropertiesResponse` | `googleAnalyticsAdminV1BetaListPropertiesResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-properties-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesPatch

- **Signature**: `analyticsadminPropertiesPatch(request: Properties.AnalyticsadminPropertiesPatchRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesPatchError>`
- **Wire**: `PATCH /v1beta/properties/{propertiesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaProperty`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesPatchRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaProperty` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaProperty` | `googleAnalyticsAdminV1BetaPropertySchema` | `src/models/google-analytics-admin-v1-beta-property.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesRunAccessReport

- **Signature**: `analyticsadminPropertiesRunAccessReport(request: Properties.AnalyticsadminPropertiesRunAccessReportRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaRunAccessReportResponse, Properties.AnalyticsadminPropertiesRunAccessReportError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}:runAccessReport`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaRunAccessReportResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesRunAccessReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesRunAccessReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaRunAccessReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaRunAccessReportRequest` | `googleAnalyticsAdminV1BetaRunAccessReportRequestSchema` | `src/models/google-analytics-admin-v1-beta-run-access-report-request.ts` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportResponse` | `googleAnalyticsAdminV1BetaRunAccessReportResponseSchema` | `src/models/google-analytics-admin-v1-beta-run-access-report-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminPropertiesUpdateDataRetentionSettings

- **Signature**: `analyticsadminPropertiesUpdateDataRetentionSettings(request: Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaDataRetentionSettings, Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsError>`
- **Wire**: `PATCH /v1beta/properties/{propertiesId}/dataRetentionSettings`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaDataRetentionSettings`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaDataRetentionSettings` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaDataRetentionSettings` | `googleAnalyticsAdminV1BetaDataRetentionSettingsSchema` | `src/models/google-analytics-admin-v1-beta-data-retention-settings.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesAudienceExportsCreate

- **Signature**: `analyticsdataPropertiesAudienceExportsCreate(request: Properties.AnalyticsdataPropertiesAudienceExportsCreateRequest, options?: RequestOptions): ApiPromise<OperationGoogleAnalyticsPropertiesApi, Properties.AnalyticsdataPropertiesAudienceExportsCreateError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/audienceExports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OperationGoogleAnalyticsPropertiesApi`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesAudienceExportsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesAudienceExportsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `AudienceExport` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AudienceExport` | `audienceExportSchema` | `src/models/audience-export.ts` |
| `OperationGoogleAnalyticsPropertiesApi` | `operationGoogleAnalyticsPropertiesApiSchema` | `src/models/operation-google-analytics-properties-api.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesAudienceExportsGet

- **Signature**: `analyticsdataPropertiesAudienceExportsGet(request: Properties.AnalyticsdataPropertiesAudienceExportsGetRequest, options?: RequestOptions): ApiPromise<AudienceExport, Properties.AnalyticsdataPropertiesAudienceExportsGetError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AudienceExport`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesAudienceExportsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesAudienceExportsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `audienceExportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AudienceExport` | `audienceExportSchema` | `src/models/audience-export.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesAudienceExportsList

- **Signature**: `analyticsdataPropertiesAudienceExportsList(request: Properties.AnalyticsdataPropertiesAudienceExportsListRequest, options?: RequestOptions): ApiPromise<ListAudienceExportsResponse, Properties.AnalyticsdataPropertiesAudienceExportsListError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/audienceExports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAudienceExportsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesAudienceExportsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesAudienceExportsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAudienceExportsResponse` | `listAudienceExportsResponseSchema` | `src/models/list-audience-exports-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesAudienceExportsQuery

- **Signature**: `analyticsdataPropertiesAudienceExportsQuery(request: Properties.AnalyticsdataPropertiesAudienceExportsQueryRequest, options?: RequestOptions): ApiPromise<QueryAudienceExportResponse, Properties.AnalyticsdataPropertiesAudienceExportsQueryError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}:query`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QueryAudienceExportResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesAudienceExportsQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesAudienceExportsQueryRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `audienceExportsId` | `path` | `string` | yes |
| `body` | `body` | `QueryAudienceExportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryAudienceExportRequest` | `queryAudienceExportRequestSchema` | `src/models/query-audience-export-request.ts` |
| `QueryAudienceExportResponse` | `queryAudienceExportResponseSchema` | `src/models/query-audience-export-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesBatchRunPivotReports

- **Signature**: `analyticsdataPropertiesBatchRunPivotReports(request: Properties.AnalyticsdataPropertiesBatchRunPivotReportsRequest, options?: RequestOptions): ApiPromise<BatchRunPivotReportsResponse, Properties.AnalyticsdataPropertiesBatchRunPivotReportsError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}:batchRunPivotReports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchRunPivotReportsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesBatchRunPivotReportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesBatchRunPivotReportsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `BatchRunPivotReportsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRunPivotReportsRequest` | `batchRunPivotReportsRequestSchema` | `src/models/batch-run-pivot-reports-request.ts` |
| `BatchRunPivotReportsResponse` | `batchRunPivotReportsResponseSchema` | `src/models/batch-run-pivot-reports-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesBatchRunReports

- **Signature**: `analyticsdataPropertiesBatchRunReports(request: Properties.AnalyticsdataPropertiesBatchRunReportsRequest, options?: RequestOptions): ApiPromise<BatchRunReportsResponse, Properties.AnalyticsdataPropertiesBatchRunReportsError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}:batchRunReports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchRunReportsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesBatchRunReportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesBatchRunReportsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `BatchRunReportsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRunReportsRequest` | `batchRunReportsRequestSchema` | `src/models/batch-run-reports-request.ts` |
| `BatchRunReportsResponse` | `batchRunReportsResponseSchema` | `src/models/batch-run-reports-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesCheckCompatibility

- **Signature**: `analyticsdataPropertiesCheckCompatibility(request: Properties.AnalyticsdataPropertiesCheckCompatibilityRequest, options?: RequestOptions): ApiPromise<CheckCompatibilityResponse, Properties.AnalyticsdataPropertiesCheckCompatibilityError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}:checkCompatibility`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CheckCompatibilityResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesCheckCompatibilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesCheckCompatibilityRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `CheckCompatibilityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckCompatibilityRequest` | `checkCompatibilityRequestSchema` | `src/models/check-compatibility-request.ts` |
| `CheckCompatibilityResponse` | `checkCompatibilityResponseSchema` | `src/models/check-compatibility-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesGetMetadata

- **Signature**: `analyticsdataPropertiesGetMetadata(request: Properties.AnalyticsdataPropertiesGetMetadataRequest, options?: RequestOptions): ApiPromise<Metadata, Properties.AnalyticsdataPropertiesGetMetadataError>`
- **Wire**: `GET /v1beta/properties/{propertiesId}/metadata`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Metadata`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesGetMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesGetMetadataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Metadata` | `metadataSchema` | `src/models/metadata.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesRunPivotReport

- **Signature**: `analyticsdataPropertiesRunPivotReport(request: Properties.AnalyticsdataPropertiesRunPivotReportRequest, options?: RequestOptions): ApiPromise<RunPivotReportResponse, Properties.AnalyticsdataPropertiesRunPivotReportError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}:runPivotReport`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RunPivotReportResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesRunPivotReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesRunPivotReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `RunPivotReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunPivotReportRequest` | `runPivotReportRequestSchema` | `src/models/run-pivot-report-request.ts` |
| `RunPivotReportResponse` | `runPivotReportResponseSchema` | `src/models/run-pivot-report-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesRunRealtimeReport

- **Signature**: `analyticsdataPropertiesRunRealtimeReport(request: Properties.AnalyticsdataPropertiesRunRealtimeReportRequest, options?: RequestOptions): ApiPromise<RunRealtimeReportResponse, Properties.AnalyticsdataPropertiesRunRealtimeReportError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}:runRealtimeReport`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RunRealtimeReportResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesRunRealtimeReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesRunRealtimeReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `RunRealtimeReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunRealtimeReportRequest` | `runRealtimeReportRequestSchema` | `src/models/run-realtime-report-request.ts` |
| `RunRealtimeReportResponse` | `runRealtimeReportResponseSchema` | `src/models/run-realtime-report-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsdataPropertiesRunReport

- **Signature**: `analyticsdataPropertiesRunReport(request: Properties.AnalyticsdataPropertiesRunReportRequest, options?: RequestOptions): ApiPromise<RunReportResponse, Properties.AnalyticsdataPropertiesRunReportError>`
- **Wire**: `POST /v1beta/properties/{propertiesId}:runReport`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RunReportResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Properties.AnalyticsdataPropertiesRunReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.AnalyticsdataPropertiesRunReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `propertiesId` | `path` | `string` | yes |
| `body` | `body` | `RunReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunReportRequest` | `runReportRequestSchema` | `src/models/run-report-request.ts` |
| `RunReportResponse` | `runReportResponseSchema` | `src/models/run-report-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

