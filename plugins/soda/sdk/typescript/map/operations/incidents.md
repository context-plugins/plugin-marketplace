<!-- Generated file — do not edit; regenerated with the SDK. -->

# Incidents — operations

Accessor: `client.incidents` · Source: `src/resources/incidents.ts` · 5 operations · Request and error types: namespace `Incidents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Incidents

- **Signature**: `getApiV1Incidents(request?: Incidents.GetApiV1IncidentsRequest, options?: RequestOptions): ApiPromise<PublicApiIncidentsResponse, Incidents.GetApiV1IncidentsError>`
- **Wire**: `GET /api/v1/incidents`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiIncidentsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Incidents.GetApiV1IncidentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.GetApiV1IncidentsRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `query` | `string` | no |
| `from` | `query` | `Date` (date-time) | no |
| `incidentIds` | `query` | `string` | no |
| `leadId` | `query` | `string` | no |
| `page` | `query` | `number` | no |
| `severity` | `query` | `string` | no |
| `size` | `query` | `number` | no |
| `status` | `query` | `string` | no |
| `to` | `query` | `Date` (date-time) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiIncidentsResponse` | `publicApiIncidentsResponseSchema` | `src/models/public-api-incidents-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1IncidentsIncidentIdRcaReport

- **Signature**: `getApiV1IncidentsIncidentIdRcaReport(request: Incidents.GetApiV1IncidentsIncidentIdRcaReportRequest, options?: RequestOptions): ApiPromise<PublicApiRcaReportContentDto, Incidents.GetApiV1IncidentsIncidentIdRcaReportError>`
- **Wire**: `GET /api/v1/incidents/{incidentId}/rcaReport`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiRcaReportContentDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Incidents.GetApiV1IncidentsIncidentIdRcaReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.GetApiV1IncidentsIncidentIdRcaReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `incidentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiRcaReportContentDto` | `publicApiRcaReportContentDtoSchema` | `src/models/public-api-rca-report-content-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1Incidents

- **Signature**: `postApiV1Incidents(request: Incidents.PostApiV1IncidentsRequest, options?: RequestOptions): ApiPromise<IncidentContentDto, Incidents.PostApiV1IncidentsError>`
- **Wire**: `POST /api/v1/incidents`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncidentContentDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Incidents.PostApiV1IncidentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.PostApiV1IncidentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiCreateIncidentDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateIncidentDto` | `publicApiCreateIncidentDtoSchema` | `src/models/public-api-create-incident-dto.ts` |
| `IncidentContentDto` | `incidentContentDtoSchema` | `src/models/incident-content-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1IncidentsIncidentId

- **Signature**: `postApiV1IncidentsIncidentId(request: Incidents.PostApiV1IncidentsIncidentIdRequest, options?: RequestOptions): ApiPromise<IncidentContentDto, Incidents.PostApiV1IncidentsIncidentIdError>`
- **Wire**: `POST /api/v1/incidents/{incidentId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncidentContentDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Incidents.PostApiV1IncidentsIncidentIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.PostApiV1IncidentsIncidentIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `incidentId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateIncidentDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateIncidentDto` | `publicApiUpdateIncidentDtoSchema` | `src/models/public-api-update-incident-dto.ts` |
| `IncidentContentDto` | `incidentContentDtoSchema` | `src/models/incident-content-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1IncidentsIncidentIdRcaReport

- **Signature**: `postApiV1IncidentsIncidentIdRcaReport(request: Incidents.PostApiV1IncidentsIncidentIdRcaReportRequest, options?: RequestOptions): ApiPromise<PublicApiRcaReportContentDto, Incidents.PostApiV1IncidentsIncidentIdRcaReportError>`
- **Wire**: `POST /api/v1/incidents/{incidentId}/rcaReport`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiRcaReportContentDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Incidents.PostApiV1IncidentsIncidentIdRcaReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.PostApiV1IncidentsIncidentIdRcaReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `incidentId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiRcaReportDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiRcaReportDto` | `publicApiRcaReportDtoSchema` | `src/models/public-api-rca-report-dto.ts` |
| `PublicApiRcaReportContentDto` | `publicApiRcaReportContentDtoSchema` | `src/models/public-api-rca-report-content-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

