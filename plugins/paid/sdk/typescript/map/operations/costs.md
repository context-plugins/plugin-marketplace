<!-- Generated file — do not edit; regenerated with the SDK. -->

# Costs — operations

Accessor: `client.costs` · Source: `src/resources/costs.ts` · 1 operation · Request and error types: namespace `Costs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCosts

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCosts(request: Costs.CreateCostsRequest, options?: RequestOptions): ApiPromise<CostIngestResponse, Costs.CreateCostsError>`
- **Wire**: `POST /costs/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CostIngestResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Costs.CreateCostsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Costs.CreateCostsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CostIngestRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CostIngestRequest` | `costIngestRequestSchema` | `src/models/cost-ingest-request.ts` |
| `CostIngestResponse` | `costIngestResponseSchema` | `src/models/cost-ingest-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

