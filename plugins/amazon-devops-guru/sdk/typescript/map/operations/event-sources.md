<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventSources — operations

Accessor: `client.eventSources` · Source: `src/resources/event-sources.ts` · 2 operations · Request and error types: namespace `EventSources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeEventSourcesConfig

- **Signature**: `describeEventSourcesConfig(options?: RequestOptions): ApiPromise<DescribeEventSourcesConfigResponse, EventSources.DescribeEventSourcesConfigError>`
- **Wire**: `POST /event-sources`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DescribeEventSourcesConfigResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `EventSources.DescribeEventSourcesConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeEventSourcesConfigResponse` | `describeEventSourcesConfigResponseSchema` | `src/models/describe-event-sources-config-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateEventSourcesConfig

- **Signature**: `updateEventSourcesConfig(request?: EventSources.UpdateEventSourcesConfigRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, EventSources.UpdateEventSourcesConfigError>`
- **Wire**: `PUT /event-sources`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `EventSources.UpdateEventSourcesConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EventSources.UpdateEventSourcesConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DescribeEventSourcesConfigResponse` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeEventSourcesConfigResponse` | `describeEventSourcesConfigResponseSchema` | `src/models/describe-event-sources-config-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

