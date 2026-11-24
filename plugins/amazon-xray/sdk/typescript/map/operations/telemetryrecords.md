<!-- Generated file — do not edit; regenerated with the SDK. -->

# Telemetryrecords — operations

Accessor: `client.telemetryrecords` · Source: `src/resources/telemetryrecords.ts` · 1 operation · Request and error types: namespace `Telemetryrecords`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### putTelemetryRecords

- **Signature**: `putTelemetryRecords(request?: Telemetryrecords.PutTelemetryRecordsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Telemetryrecords.PutTelemetryRecordsError>`
- **Wire**: `POST /TelemetryRecords`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Telemetryrecords.PutTelemetryRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Telemetryrecords.PutTelemetryRecordsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TelemetryRecordsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TelemetryRecordsRequest` | `telemetryRecordsRequestSchema` | `src/models/telemetry-records-request.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

