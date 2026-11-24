<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insightevents — operations

Accessor: `client.insightevents` · Source: `src/resources/insightevents.ts` · 1 operation · Request and error types: namespace `Insightevents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInsightEvents

- **Signature**: `getInsightEvents(request?: Insightevents.GetInsightEventsRequest, options?: RequestOptions): ApiPromise<GetInsightEventsResult, Insightevents.GetInsightEventsError>`
- **Wire**: `POST /InsightEvents`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetInsightEventsResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Insightevents.GetInsightEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insightevents.GetInsightEventsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightEventsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightEventsRequest` | `insightEventsRequestSchema` | `src/models/insight-events-request.ts` |
| `GetInsightEventsResult` | `getInsightEventsResultSchema` | `src/models/get-insight-events-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

