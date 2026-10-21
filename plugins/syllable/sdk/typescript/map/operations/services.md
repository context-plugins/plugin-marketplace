<!-- Generated file — do not edit; regenerated with the SDK. -->

# Services — operations

Accessor: `client.services` · Source: `src/resources/services.ts` · 5 operations · Request and error types: namespace `Services`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### serviceCreate

- **Signature**: `serviceCreate(request: Services.ServiceCreateRequestParams, options?: RequestOptions): ApiPromise<ServiceResponse, Services.ServiceCreateError>`
- **Wire**: `POST /api/v1/services/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Services.ServiceCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Services.ServiceCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ServiceCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceCreateRequest` | `serviceCreateRequestSchema` | `src/models/service-create-request.ts` |
| `ServiceResponse` | `serviceResponseSchema` | `src/models/service-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### serviceDelete

- **Signature**: `serviceDelete(request: Services.ServiceDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Services.ServiceDeleteError>`
- **Wire**: `DELETE /api/v1/services/{service_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Services.ServiceDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Services.ServiceDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceId` | `path` | `service_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### serviceList

- **Signature**: `serviceList(request: Services.ServiceListRequest, options?: RequestOptions): ApiPromise<ListResponseServiceResponse, Services.ServiceListError>`
- **Wire**: `GET /api/v1/services/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseServiceResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Services.ServiceListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Services.ServiceListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `ServiceProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy35` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields17` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `ServiceProperties` | `servicePropertiesSchema` | `src/models/service-properties.ts` |
| `OrderBy35` | `orderBy35Schema` | `src/models/unions/order-by35.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields17` | `fields17Schema` | `src/models/unions/fields17.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseServiceResponse` | `listResponseServiceResponseSchema` | `src/models/list-response-service-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### serviceUpdate

- **Signature**: `serviceUpdate(request: Services.ServiceUpdateRequestParams, options?: RequestOptions): ApiPromise<ServiceResponse, Services.ServiceUpdateError>`
- **Wire**: `PUT /api/v1/services/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Services.ServiceUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Services.ServiceUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ServiceUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceUpdateRequest` | `serviceUpdateRequestSchema` | `src/models/service-update-request.ts` |
| `ServiceResponse` | `serviceResponseSchema` | `src/models/service-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### servicesGetById

- **Signature**: `servicesGetById(request: Services.ServicesGetByIdRequest, options?: RequestOptions): ApiPromise<ServiceResponse, Services.ServicesGetByIdError>`
- **Wire**: `GET /api/v1/services/{service_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Services.ServicesGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Services.ServicesGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceId` | `path` | `service_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceResponse` | `serviceResponseSchema` | `src/models/service-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

