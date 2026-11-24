<!-- Generated file — do not edit; regenerated with the SDK. -->

# MetricAssociations — operations

Accessor: `client.metricAssociations` · Source: `src/resources/metric-associations.ts` · 3 operations · Request and error types: namespace `MetricAssociations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### metricAssociationsControllerCreate

- **Signature**: `metricAssociationsControllerCreate(request: MetricAssociations.MetricAssociationsControllerCreateRequest, options?: RequestOptions): ApiPromise<MetricAssociation, MetricAssociations.MetricAssociationsControllerCreateError>`
- **Wire**: `POST /v1/projects/{project}/metric-associations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MetricAssociation`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `MetricAssociations.MetricAssociationsControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricAssociations.MetricAssociationsControllerCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateMetricAssociationDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMetricAssociationDto` | `createMetricAssociationDtoSchema` | `src/models/create-metric-association-dto.ts` |
| `MetricAssociation` | `metricAssociationSchema` | `src/models/metric-association.ts` |

### metricAssociationsControllerFindAll

- **Signature**: `metricAssociationsControllerFindAll(request: MetricAssociations.MetricAssociationsControllerFindAllRequest, options?: RequestOptions): ApiPromise<MetricAssociation[], MetricAssociations.MetricAssociationsControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/metric-associations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricAssociation[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `MetricAssociations.MetricAssociationsControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricAssociations.MetricAssociationsControllerFindAllRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `metric` | `query` | `string` | no |
| `feature` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricAssociation` | `metricAssociationSchema` | `src/models/metric-association.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

### metricAssociationsControllerRemove

- **Signature**: `metricAssociationsControllerRemove(request: MetricAssociations.MetricAssociationsControllerRemoveRequest, options?: RequestOptions): ApiPromise<undefined, MetricAssociations.MetricAssociationsControllerRemoveError>`
- **Wire**: `DELETE /v1/projects/{project}/metric-associations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `MetricAssociations.MetricAssociationsControllerRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricAssociations.MetricAssociationsControllerRemoveRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `metric` | `query` | `string` | yes |
| `feature` | `query` | `string` | yes |

