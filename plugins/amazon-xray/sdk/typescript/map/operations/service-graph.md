<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceGraph — operations

Accessor: `client.serviceGraph` · Source: `src/resources/service-graph.ts` · 1 operation · Request and error types: namespace `ServiceGraph`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getServiceGraph

- **Signature**: `getServiceGraph(request?: ServiceGraph.GetServiceGraphRequest, options?: RequestOptions): ApiPromise<GetServiceGraphResult, ServiceGraph.GetServiceGraphError>`
- **Wire**: `POST /ServiceGraph`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetServiceGraphResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `ServiceGraph.GetServiceGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceGraph.GetServiceGraphRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ServiceGraphRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceGraphRequest` | `serviceGraphRequestSchema` | `src/models/service-graph-request.ts` |
| `GetServiceGraphResult` | `getServiceGraphResultSchema` | `src/models/get-service-graph-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

