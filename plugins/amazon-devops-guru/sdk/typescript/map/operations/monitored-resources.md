<!-- Generated file — do not edit; regenerated with the SDK. -->

# MonitoredResources — operations

Accessor: `client.monitoredResources` · Source: `src/resources/monitored-resources.ts` · 1 operation · Request and error types: namespace `MonitoredResources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listMonitoredResources

- **Signature**: `listMonitoredResources(request?: MonitoredResources.ListMonitoredResourcesRequest, options?: RequestOptions): ApiPromise<ListMonitoredResourcesResponse, MonitoredResources.ListMonitoredResourcesError>`
- **Wire**: `POST /monitoredResources`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListMonitoredResourcesResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `MonitoredResources.ListMonitoredResourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MonitoredResources.ListMonitoredResourcesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MonitoredResourcesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitoredResourcesRequest` | `monitoredResourcesRequestSchema` | `src/models/monitored-resources-request.ts` |
| `ListMonitoredResourcesResponse` | `listMonitoredResourcesResponseSchema` | `src/models/list-monitored-resources-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

