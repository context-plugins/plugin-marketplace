<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceIntegrations — operations

Accessor: `client.serviceIntegrations` · Source: `src/resources/service-integrations.ts` · 2 operations · Request and error types: namespace `ServiceIntegrations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeServiceIntegration

- **Signature**: `describeServiceIntegration(options?: RequestOptions): ApiPromise<DescribeServiceIntegrationResponse, ServiceIntegrations.DescribeServiceIntegrationError>`
- **Wire**: `GET /service-integrations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeServiceIntegrationResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `ServiceIntegrations.DescribeServiceIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeServiceIntegrationResponse` | `describeServiceIntegrationResponseSchema` | `src/models/describe-service-integration-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateServiceIntegration

- **Signature**: `updateServiceIntegration(request?: ServiceIntegrations.UpdateServiceIntegrationRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ServiceIntegrations.UpdateServiceIntegrationError>`
- **Wire**: `PUT /service-integrations`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `ServiceIntegrations.UpdateServiceIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceIntegrations.UpdateServiceIntegrationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ServiceIntegrationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceIntegrationsRequest` | `serviceIntegrationsRequestSchema` | `src/models/service-integrations-request.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

