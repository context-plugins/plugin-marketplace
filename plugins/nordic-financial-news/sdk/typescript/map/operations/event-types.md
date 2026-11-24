<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventTypes — operations

Accessor: `client.eventTypes` · Source: `src/resources/event-types.ts` · 1 operation · Request and error types: namespace `EventTypes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1EventTypes

- **Signature**: `getApiV1EventTypes(request?: EventTypes.GetApiV1EventTypesRequest, options?: RequestOptions): ApiPromise<ApiV1EventTypesResponse, EventTypes.GetApiV1EventTypesError>`
- **Wire**: `GET /api/v1/event_types`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1EventTypesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `EventTypes.GetApiV1EventTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [401] `ProblemDetails` · `"problemDetails2"` [403] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EventTypes.GetApiV1EventTypesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fields` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1EventTypesResponse` | `apiV1EventTypesResponseSchema` | `src/models/api-v1-event-types-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

