<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceIntegrations — operations

Accessor: `client.service_integrations` · Source: `amazon_dev_ops_guru/apis/service_integrations.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.service_integrations.describe_service_integration

- **Route**: `GET /service-integrations`
- **Auth**: `sigv4`
- **Signature**: `def describe_service_integration(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DescribeServiceIntegrationResponse`
- **Returns (raw)**: `ApiResult[DescribeServiceIntegrationResponse, DescribeServiceIntegrationErrorBody]`
- **Error**: `DescribeServiceIntegrationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeServiceIntegrationResponse` | `amazon_dev_ops_guru/models/describe_service_integration_response.py` |
| `DescribeServiceIntegrationErrorBody` | `amazon_dev_ops_guru/errors/describe_service_integration_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.service_integrations.update_service_integration

- **Route**: `PUT /service-integrations`
- **Auth**: `sigv4`
- **Signature**: `def update_service_integration(*, body: ServiceIntegrationsRequest | ServiceIntegrationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UpdateServiceIntegrationErrorBody]`
- **Error**: `UpdateServiceIntegrationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ServiceIntegrationsRequest` | `amazon_dev_ops_guru/models/service_integrations_request.py` |
| `ServiceIntegrationsRequestDict` | `amazon_dev_ops_guru/models/service_integrations_request.py` |
| `UpdateServiceIntegrationErrorBody` | `amazon_dev_ops_guru/errors/update_service_integration_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ConflictException` | `amazon_dev_ops_guru/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

