<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntegrationsDynatrace — operations

Accessor: `client.integrations_dynatrace` · Source: `dev_cycle/apis/integrations_dynatrace.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.integrations_dynatrace.dynatrace_integration_controller_create_integration

- **Route**: `POST /v1/integrations/dynatrace`
- **Server**: `default`
- **Signature**: `def dynatrace_integration_controller_create_integration(body: CreateDynatraceIntegrationDto | CreateDynatraceIntegrationDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DynatraceIntegrationControllerCreateIntegrationErrorBody]`
- **Error**: `DynatraceIntegrationControllerCreateIntegrationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateDynatraceIntegrationDto` | `dev_cycle/models/create_dynatrace_integration_dto.py` |
| `CreateDynatraceIntegrationDtoDict` | `dev_cycle/models/create_dynatrace_integration_dto.py` |
| `DynatraceIntegrationControllerCreateIntegrationErrorBody` | `dev_cycle/errors/dynatrace_integration_controller_create_integration_error.py` |

### client.integrations_dynatrace.dynatrace_integration_controller_delete_environment

- **Route**: `DELETE /v1/integrations/dynatrace/{dynatraceEnvironmentId}`
- **Server**: `default`
- **Signature**: `def dynatrace_integration_controller_delete_environment(dynatrace_environment_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dynatrace_environment_id`
- **Params**: `dynatrace_environment_id` — path `dynatraceEnvironmentId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DynatraceIntegrationControllerDeleteEnvironmentErrorBody]`
- **Error**: `DynatraceIntegrationControllerDeleteEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DynatraceIntegrationControllerDeleteEnvironmentErrorBody` | `dev_cycle/errors/dynatrace_integration_controller_delete_environment_error.py` |

### client.integrations_dynatrace.dynatrace_integration_controller_get_integrations

- **Route**: `GET /v1/integrations/dynatrace`
- **Server**: `default`
- **Signature**: `def dynatrace_integration_controller_get_integrations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DynatraceIntegration`
- **Returns (raw)**: `ApiResult[DynatraceIntegration, DynatraceIntegrationControllerGetIntegrationsErrorBody]`
- **Error**: `DynatraceIntegrationControllerGetIntegrationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `DynatraceIntegration` | `dev_cycle/models/dynatrace_integration.py` |
| `DynatraceIntegrationControllerGetIntegrationsErrorBody` | `dev_cycle/errors/dynatrace_integration_controller_get_integrations_error.py` |

