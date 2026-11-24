<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calendar — operations

Accessor: `client.calendar` · Source: `src/resources/calendar.ts` · 5 operations · Request and error types: namespace `Calendar`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### agecalculator

- **Signature**: `agecalculator(request: Calendar.AgecalculatorRequest, options?: RequestOptions): ApiPromise<V1AgecalculatorResponse, Calendar.AgecalculatorError>`
- **Wire**: `GET /v1/agecalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AgecalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Calendar.AgecalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calendar.AgecalculatorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dob` | `query` | `string` | yes |
| `timezone` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AgecalculatorResponse` | `v1AgecalculatorResponseSchema` | `src/models/v1-agecalculator-response.ts` |

### datecalculator

- **Signature**: `datecalculator(request: Calendar.DatecalculatorRequest, options?: RequestOptions): ApiPromise<V1DatecalculatorResponse, Calendar.DatecalculatorError>`
- **Wire**: `GET /v1/datecalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DatecalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Calendar.DatecalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calendar.DatecalculatorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `start` | `query` | `string` | yes |
| `end` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DatecalculatorResponse` | `v1DatecalculatorResponseSchema` | `src/models/v1-datecalculator-response.ts` |

### liturgicalcalendar

- **Signature**: `liturgicalcalendar(request?: Calendar.LiturgicalcalendarRequest, options?: RequestOptions): ApiPromise<V1LiturgicalcalendarResponse, Calendar.LiturgicalcalendarError>`
- **Wire**: `GET /v1/liturgicalcalendar`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1LiturgicalcalendarResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Calendar.LiturgicalcalendarError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calendar.LiturgicalcalendarRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `month` | `query` | `number` | no |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LiturgicalcalendarResponse` | `v1LiturgicalcalendarResponseSchema` | `src/models/v1-liturgicalcalendar-response.ts` |

### workingdays

- **Signature**: `workingdays(request: Calendar.WorkingdaysRequest, options?: RequestOptions): ApiPromise<V1WorkingdaysResponse, Calendar.WorkingdaysError>`
- **Wire**: `GET /v1/workingdays`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WorkingdaysResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Calendar.WorkingdaysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calendar.WorkingdaysRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `month` | `query` | `number` | no |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WorkingdaysResponse` | `v1WorkingdaysResponseSchema` | `src/models/v1-workingdays-response.ts` |

### worldholidays

- **Signature**: `worldholidays(request: Calendar.WorldholidaysRequest, options?: RequestOptions): ApiPromise<V1WorldholidaysResponse, Calendar.WorldholidaysError>`
- **Wire**: `GET /v1/worldholidays`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WorldholidaysResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Calendar.WorldholidaysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calendar.WorldholidaysRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WorldholidaysResponse` | `v1WorldholidaysResponseSchema` | `src/models/v1-worldholidays-response.ts` |

