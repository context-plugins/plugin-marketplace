<!-- Generated file — do not edit; regenerated with the SDK. -->

# Intent — operations

Accessor: `client.intent` · Source: `src/resources/intent.ts` · 1 operation · Request and error types: namespace `Intent`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `leadspace`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### scoreCompanyIntent

- **Signature**: `scoreCompanyIntent(request: Intent.ScoreCompanyIntentRequest, options?: RequestOptions): ApiPromise<IntentAccepted, Intent.ScoreCompanyIntentError>`
- **Wire**: `POST /v1/intent/score/`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntentAccepted`
- **Error**: `LeadspaceError` with `kind: "api"`, an instance of `Intent.ScoreCompanyIntentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error401"` [401] no body · `"error2"` [427] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Intent.ScoreCompanyIntentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IntentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntentRequest` | `intentRequestSchema` | `src/models/intent-request.ts` |
| `IntentAccepted` | `intentAcceptedSchema` | `src/models/intent-accepted.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

