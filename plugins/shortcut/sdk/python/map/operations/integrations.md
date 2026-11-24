<!-- Generated file — do not edit; regenerated with the SDK. -->

# Integrations — operations

Accessor: `client.integrations` · Source: `shortcut/apis/integrations.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.integrations.create_generic_integration

- **Route**: `POST /api/v3/integrations/webhook`
- **Auth**: `api_token`
- **Signature**: `def create_generic_integration(body: CreateGenericIntegration | CreateGenericIntegrationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateGenericIntegrationErrorBody]`
- **Error**: `CreateGenericIntegrationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateGenericIntegration` | `shortcut/models/create_generic_integration.py` |
| `CreateGenericIntegrationDict` | `shortcut/models/create_generic_integration.py` |
| `CreateGenericIntegrationErrorBody` | `shortcut/errors/create_generic_integration_error.py` |

### client.integrations.delete_generic_integration

- **Route**: `DELETE /api/v3/integrations/webhook/{integration-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_generic_integration(integration_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `integration_public_id`
- **Params**: `integration_public_id` — path `integration-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteGenericIntegrationErrorBody]`
- **Error**: `DeleteGenericIntegrationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteGenericIntegrationErrorBody` | `shortcut/errors/delete_generic_integration_error.py` |

### client.integrations.get_generic_integration

- **Route**: `GET /api/v3/integrations/webhook/{integration-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_generic_integration(integration_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `integration_public_id`
- **Params**: `integration_public_id` — path `integration-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetGenericIntegrationErrorBody]`
- **Error**: `GetGenericIntegrationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `GetGenericIntegrationErrorBody` | `shortcut/errors/get_generic_integration_error.py` |

