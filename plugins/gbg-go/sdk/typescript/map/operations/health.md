<!-- Generated file — do not edit; regenerated with the SDK. -->

# Health — operations

Accessor: `client.health` · Source: `src/resources/health.ts` · 1 operation · Request and error types: namespace `Health`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gbg-go-next-gen-flow-captain-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### health

- **Signature**: `health(options?: RequestOptions): ApiPromise<JourneyHealthResponse, Health.HealthError>`
- **Wire**: `GET /journey/health`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JourneyHealthResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `Health.HealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyHealthResponse` | `journeyHealthResponseSchema` | `src/models/journey-health-response.ts` |

