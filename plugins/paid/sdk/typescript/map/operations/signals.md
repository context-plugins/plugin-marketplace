<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signals — operations

Accessor: `client.signals` · Source: `src/resources/signals.ts` · 1 operation · Request and error types: namespace `Signals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSignals

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSignals(request: Signals.CreateSignalsRequest, options?: RequestOptions): ApiPromise<BulkSignalsResponse, Signals.CreateSignalsError>`
- **Wire**: `POST /signals/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkSignalsResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Signals.CreateSignalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signals.CreateSignalsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `BulkSignalsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkSignalsRequest` | `bulkSignalsRequestSchema` | `src/models/bulk-signals-request.ts` |
| `BulkSignalsResponse` | `bulkSignalsResponseSchema` | `src/models/bulk-signals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

