<!-- Generated file — do not edit; regenerated with the SDK. -->

# Qualify — operations

Accessor: `client.qualify` · Source: `src/resources/qualify.ts` · 3 operations · Request and error types: namespace `Qualify`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `jid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getResults

- **Signature**: `getResults(request: Qualify.GetResultsRequest, options?: RequestOptions): ApiPromise<V1ResultsResponse, Qualify.GetResultsError>`
- **Wire**: `GET /v1/results`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ResultsResponse`
- **Error**: `JidError` with `kind: "api"`, an instance of `Qualify.GetResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Qualify.GetResultsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ResultsResponse` | `v1ResultsResponseSchema` | `src/models/v1-results-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### qualifyCounterparty

- **Signature**: `qualifyCounterparty(request: Qualify.QualifyCounterpartyRequest, options?: RequestOptions): ApiPromise<Qualification, Qualify.QualifyCounterpartyError>`
- **Wire**: `POST /v1/qualify`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Qualification`
- **Error**: `JidError` with `kind: "api"`, an instance of `Qualify.QualifyCounterpartyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Qualify.QualifyCounterpartyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1QualifyRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1QualifyRequest2` | `v1QualifyRequest2Schema` | `src/models/unions/v1-qualify-request2.ts` |
| `Qualification` | `qualificationSchema` | `src/models/qualification.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### recordOutcome

- **Signature**: `recordOutcome(request: Qualify.RecordOutcomeRequest, options?: RequestOptions): ApiPromise<V1OutcomesResponse, Qualify.RecordOutcomeError>`
- **Wire**: `POST /v1/outcomes`
- **Auth**: `bearer` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1OutcomesResponse`
- **Error**: `JidError` with `kind: "api"`, an instance of `Qualify.RecordOutcomeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [410] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Qualify.RecordOutcomeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1OutcomesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OutcomesRequest` | `v1OutcomesRequestSchema` | `src/models/v1-outcomes-request.ts` |
| `V1OutcomesResponse` | `v1OutcomesResponseSchema` | `src/models/v1-outcomes-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

