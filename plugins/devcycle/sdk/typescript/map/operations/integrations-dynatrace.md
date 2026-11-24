<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntegrationsDynatrace — operations

Accessor: `client.integrationsDynatrace` · Source: `src/resources/integrations-dynatrace.ts` · 3 operations · Request and error types: namespace `IntegrationsDynatrace`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dynatraceIntegrationControllerCreateIntegration

- **Signature**: `dynatraceIntegrationControllerCreateIntegration(request: IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationRequest, options?: RequestOptions): ApiPromise<undefined, IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationError>`
- **Wire**: `POST /v1/integrations/dynatrace`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateDynatraceIntegrationDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateDynatraceIntegrationDto` | `createDynatraceIntegrationDtoSchema` | `src/models/create-dynatrace-integration-dto.ts` |

### dynatraceIntegrationControllerDeleteEnvironment

- **Signature**: `dynatraceIntegrationControllerDeleteEnvironment(request: IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentRequest, options?: RequestOptions): ApiPromise<undefined, IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentError>`
- **Wire**: `DELETE /v1/integrations/dynatrace/{dynatraceEnvironmentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dynatraceEnvironmentId` | `path` | `string` | yes |

### dynatraceIntegrationControllerGetIntegrations

- **Signature**: `dynatraceIntegrationControllerGetIntegrations(options?: RequestOptions): ApiPromise<DynatraceIntegration, IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrationsError>`
- **Wire**: `GET /v1/integrations/dynatrace`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DynatraceIntegration`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DynatraceIntegration` | `dynatraceIntegrationSchema` | `src/models/dynatrace-integration.ts` |

