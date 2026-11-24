<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareConfigurations — operations

Accessor: `client.software_configurations` · Source: `amazon_free_rtos/apis/software_configurations.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.software_configurations.create_software_configuration

- **Route**: `POST /software-configuration-records`
- **Auth**: `aws_sig_v4`
- **Signature**: `def create_software_configuration(body: CreateSoftwareConfigurationRequest | CreateSoftwareConfigurationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SoftwareConfiguration`
- **Returns (raw)**: `ApiResult[SoftwareConfiguration, CreateSoftwareConfigurationErrorBody]`
- **Error**: `CreateSoftwareConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSoftwareConfigurationRequest` | `amazon_free_rtos/models/create_software_configuration_request.py` |
| `CreateSoftwareConfigurationRequestDict` | `amazon_free_rtos/models/create_software_configuration_request.py` |
| `SoftwareConfiguration` | `amazon_free_rtos/models/software_configuration.py` |
| `CreateSoftwareConfigurationErrorBody` | `amazon_free_rtos/errors/create_software_configuration_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

### client.software_configurations.delete_software_configuration

- **Route**: `DELETE /software-configuration-records/{configId}`
- **Auth**: `aws_sig_v4`
- **Signature**: `def delete_software_configuration(config_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `config_id`
- **Params**: `config_id` — path `configId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSoftwareConfigurationErrorBody]`
- **Error**: `DeleteSoftwareConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSoftwareConfigurationErrorBody` | `amazon_free_rtos/errors/delete_software_configuration_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

### client.software_configurations.describe_software_configuration

- **Route**: `GET /software-configuration-records/{configId}`
- **Auth**: `aws_sig_v4`
- **Signature**: `def describe_software_configuration(config_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `config_id`
- **Params**: `config_id` — path `configId`
- **Returns (parsed)**: `SoftwareConfiguration`
- **Returns (raw)**: `ApiResult[SoftwareConfiguration, DescribeSoftwareConfigurationErrorBody]`
- **Error**: `DescribeSoftwareConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SoftwareConfiguration` | `amazon_free_rtos/models/software_configuration.py` |
| `DescribeSoftwareConfigurationErrorBody` | `amazon_free_rtos/errors/describe_software_configuration_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

### client.software_configurations.list_software_configurations

- **Route**: `GET /software-configuration-records`
- **Auth**: `aws_sig_v4`
- **Signature**: `def list_software_configurations(*, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `next_token` — query `nextToken`
- **Returns (parsed)**: `SoftwareConfigurationRecordsResponse`
- **Returns (raw)**: `ApiResult[SoftwareConfigurationRecordsResponse, ListSoftwareConfigurationsErrorBody]`
- **Error**: `ListSoftwareConfigurationsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SoftwareConfigurationRecordsResponse` | `amazon_free_rtos/models/software_configuration_records_response.py` |
| `ListSoftwareConfigurationsErrorBody` | `amazon_free_rtos/errors/list_software_configurations_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

### client.software_configurations.update_software_configuration

- **Route**: `PUT /software-configuration-records/{configId}`
- **Auth**: `aws_sig_v4`
- **Signature**: `def update_software_configuration(config_id: str, body: UpdateSoftwareConfigurationRequest | UpdateSoftwareConfigurationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `config_id`, `body`
- **Params**: `config_id` — path `configId` · `body` — JSON body
- **Returns (parsed)**: `SoftwareConfiguration`
- **Returns (raw)**: `ApiResult[SoftwareConfiguration, UpdateSoftwareConfigurationErrorBody]`
- **Error**: `UpdateSoftwareConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateSoftwareConfigurationRequest` | `amazon_free_rtos/models/update_software_configuration_request.py` |
| `UpdateSoftwareConfigurationRequestDict` | `amazon_free_rtos/models/update_software_configuration_request.py` |
| `SoftwareConfiguration` | `amazon_free_rtos/models/software_configuration.py` |
| `UpdateSoftwareConfigurationErrorBody` | `amazon_free_rtos/errors/update_software_configuration_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

