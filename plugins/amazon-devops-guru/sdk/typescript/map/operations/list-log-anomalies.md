<!-- Generated file — do not edit; regenerated with the SDK. -->

# ListLogAnomalies — operations

Accessor: `client.listLogAnomalies` · Source: `src/resources/list-log-anomalies.ts` · 1 operation · Request and error types: namespace `ListLogAnomalies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAnomalousLogGroups

- **Signature**: `listAnomalousLogGroups(request?: ListLogAnomalies.ListAnomalousLogGroupsRequest, options?: RequestOptions): ApiPromise<ListAnomalousLogGroupsResponse, ListLogAnomalies.ListAnomalousLogGroupsError>`
- **Wire**: `POST /list-log-anomalies`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListAnomalousLogGroupsResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `ListLogAnomalies.ListAnomalousLogGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ListLogAnomalies.ListAnomalousLogGroupsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListLogAnomaliesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListLogAnomaliesRequest` | `listLogAnomaliesRequestSchema` | `src/models/list-log-anomalies-request.ts` |
| `ListAnomalousLogGroupsResponse` | `listAnomalousLogGroupsResponseSchema` | `src/models/list-anomalous-log-groups-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

