<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calls — operations

Accessor: `client.calls` · Source: `src/resources/calls.ts` · 4 operations · Request and error types: namespace `Calls`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### callPriceShow

- **Signature**: `callPriceShow(request: Calls.CallPriceShowRequest, options?: RequestOptions): ApiPromise<ApiV1CallPriceResponse, Calls.CallPriceShowError>`
- **Wire**: `GET /api/v1/call_price`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CallPriceResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Calls.CallPriceShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1CallPrice404Error1"` [404] `ApiV1CallPrice404Error1` · `"apiV1CallPrice422Error1"` [422] `ApiV1CallPrice422Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallPriceShowRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `aNumber` | `query` | `a_number` | `string` | yes |
| `bNumber` | `query` | `b_number` | `string` | yes |
| `sipaccount` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CallPriceResponse` | `apiV1CallPriceResponseSchema` | `src/models/api-v1-call-price-response.ts` |
| `ApiV1CallPrice404Error1` | `apiV1CallPrice404Error1Schema` | `src/models/api-v1-call-price404-error1.ts` |
| `ApiV1CallPrice422Error1` | `apiV1CallPrice422Error1Schema` | `src/models/api-v1-call-price422-error1.ts` |

### callsRecording

- **Signature**: `callsRecording(request: Calls.CallsRecordingRequest, options?: RequestOptions): ApiPromise<undefined, Calls.CallsRecordingError>`
- **Wire**: `GET /api/v1/calls/recording/{callid}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Calls.CallsRecordingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error302"` [302] `string` · `"apiV1CallsRecordingResponse1"` [403] `ApiV1CallsRecordingResponse1` · `"error"` [404] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallsRecordingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `callid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CallsRecordingResponse1` | `apiV1CallsRecordingResponse1Schema` | `src/models/unions/api-v1-calls-recording-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### callsShow

- **Signature**: `callsShow(request?: Calls.CallsShowRequest, options?: RequestOptions): ApiPromise<CdrListResponse, Calls.CallsShowError>`
- **Wire**: `GET /api/v1/calls`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CdrListResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Calls.CallsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Calls401Error1"` [401] `ApiV1Calls401Error1` · `"apiV1Calls403Error1"` [403] `ApiV1Calls403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallsShowRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `type` | `query` | — | `Type1` | no | — |
| `missed` | `query` | — | `Missed` | no | — |
| `fromSearch` | `query` | `from_search` | `string` | no | — |
| `toSearch` | `query` | `to_search` | `string` | no | — |
| `amdStatus` | `query` | `amd_status` | `string` | no | — |
| `hangupCause` | `query` | `hangup_cause` | `HangupCause1` | no | — |
| `filter` | `query` | — | `string` | no | — |
| `sipAccount` | `query` | `sip_account` | `string` | no | — |
| `from` | `query` | — | `string` (date) | no | — |
| `to` | `query` | — | `string` (date) | no | — |
| `all` | `query` | — | `boolean` | no | `false` |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `Missed` | `missedSchema` | `src/models/missed.ts` |
| `HangupCause1` | `hangupCause1Schema` | `src/models/hangup-cause1.ts` |
| `CdrListResponse` | `cdrListResponseSchema` | `src/models/cdr-list-response.ts` |
| `ApiV1Calls401Error1` | `apiV1Calls401Error1Schema` | `src/models/api-v1-calls401-error1.ts` |
| `ApiV1Calls403Error1` | `apiV1Calls403Error1Schema` | `src/models/api-v1-calls403-error1.ts` |

### callsStatistics

- **Signature**: `callsStatistics(request?: Calls.CallsStatisticsRequest, options?: RequestOptions): ApiPromise<ApiV1CallsStatisticsResponse, Calls.CallsStatisticsError>`
- **Wire**: `GET /api/v1/calls/statistics`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CallsStatisticsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Calls.CallsStatisticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1CallsStatistics403Error1"` [403] `ApiV1CallsStatistics403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallsStatisticsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `to` | `query` | — | `string` | no |
| `sipfriend` | `query` | — | `string` | no |
| `search` | `query` | — | `number` | no |
| `amdStatus` | `query` | `amd_status` | `string` | no |
| `hangupCause` | `query` | `hangup_cause` | `HangupCause1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HangupCause1` | `hangupCause1Schema` | `src/models/hangup-cause1.ts` |
| `ApiV1CallsStatisticsResponse` | `apiV1CallsStatisticsResponseSchema` | `src/models/api-v1-calls-statistics-response.ts` |
| `ApiV1CallsStatistics403Error1` | `apiV1CallsStatistics403Error1Schema` | `src/models/api-v1-calls-statistics403-error1.ts` |

