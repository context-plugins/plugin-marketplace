<!-- Generated file — do not edit; regenerated with the SDK. -->

# Incidents — operations

Accessor: `client.incidents` · Source: `src/resources/incidents.ts` · 6 operations · Request and error types: namespace `Incidents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### incidentCreate

- **Signature**: `incidentCreate(request: Incidents.IncidentCreateRequestParams, options?: RequestOptions): ApiPromise<IncidentResponse, Incidents.IncidentCreateError>`
- **Wire**: `POST /api/v1/incidents/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncidentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Incidents.IncidentCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.IncidentCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IncidentCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncidentCreateRequest` | `incidentCreateRequestSchema` | `src/models/incident-create-request.ts` |
| `IncidentResponse` | `incidentResponseSchema` | `src/models/incident-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### incidentDelete

- **Signature**: `incidentDelete(request: Incidents.IncidentDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Incidents.IncidentDeleteError>`
- **Wire**: `DELETE /api/v1/incidents/{incident_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Incidents.IncidentDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.IncidentDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `incidentId` | `path` | `incident_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### incidentGetById

- **Signature**: `incidentGetById(request: Incidents.IncidentGetByIdRequest, options?: RequestOptions): ApiPromise<IncidentResponse, Incidents.IncidentGetByIdError>`
- **Wire**: `GET /api/v1/incidents/{incident_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IncidentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Incidents.IncidentGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.IncidentGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `incidentId` | `path` | `incident_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncidentResponse` | `incidentResponseSchema` | `src/models/incident-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### incidentGetOrganizations

- **Signature**: `incidentGetOrganizations(options?: RequestOptions): ApiPromise<IncidentOrganizationResponse[], ApiError>`
- **Wire**: `GET /api/v1/incidents/organizations`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IncidentOrganizationResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `IncidentOrganizationResponse` | `incidentOrganizationResponseSchema` | `src/models/incident-organization-response.ts` |

### incidentList

- **Signature**: `incidentList(request: Incidents.IncidentListRequest, options?: RequestOptions): ApiPromise<ListResponseIncidentResponse, Incidents.IncidentListError>`
- **Wire**: `GET /api/v1/incidents/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseIncidentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Incidents.IncidentListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.IncidentListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `IncidentProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy7` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields7` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `IncidentProperties` | `incidentPropertiesSchema` | `src/models/incident-properties.ts` |
| `OrderBy7` | `orderBy7Schema` | `src/models/unions/order-by7.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields7` | `fields7Schema` | `src/models/unions/fields7.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseIncidentResponse` | `listResponseIncidentResponseSchema` | `src/models/list-response-incident-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### incidentUpdate

- **Signature**: `incidentUpdate(request: Incidents.IncidentUpdateRequestParams, options?: RequestOptions): ApiPromise<IncidentResponse, Incidents.IncidentUpdateError>`
- **Wire**: `PUT /api/v1/incidents/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncidentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Incidents.IncidentUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Incidents.IncidentUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IncidentUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncidentUpdateRequest` | `incidentUpdateRequestSchema` | `src/models/incident-update-request.ts` |
| `IncidentResponse` | `incidentResponseSchema` | `src/models/incident-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

