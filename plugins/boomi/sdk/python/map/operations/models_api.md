<!-- Generated file — do not edit; regenerated with the SDK. -->

# ModelsApi — operations

Accessor: `client.models_api` · Source: `boomi/apis/models_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.models_api.create_model

- **Route**: `POST /repositories/{repositoryId}/models`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def create_model(repository_id: str, body: ModelInput | ModelInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`, `body`
- **Params**: `repository_id` — path `repositoryId` · `body` — JSON body
- **Returns (parsed)**: `Model`
- **Returns (raw)**: `ApiResult[Model, CreateModelErrorBody]`
- **Error**: `CreateModelErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelInput` | `boomi/models/model_input.py` |
| `ModelInputDict` | `boomi/models/model_input.py` |
| `Model` | `boomi/models/model.py` |
| `CreateModelErrorBody` | `boomi/errors/create_model_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

### client.models_api.delete_model

- **Route**: `DELETE /repositories/{repositoryId}/models/{modelId}`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def delete_model(repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`, `model_id`
- **Params**: `repository_id` — path `repositoryId` · `model_id` — path `modelId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteModelErrorBody]`
- **Error**: `DeleteModelErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteModelErrorBody` | `boomi/errors/delete_model_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

### client.models_api.get_model

- **Route**: `GET /repositories/{repositoryId}/models/{modelId}`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def get_model(repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`, `model_id`
- **Params**: `repository_id` — path `repositoryId` · `model_id` — path `modelId`
- **Returns (parsed)**: `Model`
- **Returns (raw)**: `ApiResult[Model, GetModelErrorBody]`
- **Error**: `GetModelErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Model` | `boomi/models/model.py` |
| `GetModelErrorBody` | `boomi/errors/get_model_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

### client.models_api.list_models

- **Route**: `GET /repositories/{repositoryId}/models`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def list_models(repository_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`
- **Params**: `repository_id` — path `repositoryId`
- **Returns (parsed)**: `RepositoriesModelsResponse`
- **Returns (raw)**: `ApiResult[RepositoriesModelsResponse, ListModelsErrorBody]`
- **Error**: `ListModelsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoriesModelsResponse` | `boomi/models/repositories_models_response.py` |
| `ListModelsErrorBody` | `boomi/errors/list_models_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

### client.models_api.publish_model

- **Route**: `POST /repositories/{repositoryId}/models/{modelId}/publish`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def publish_model(repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`, `model_id`
- **Params**: `repository_id` — path `repositoryId` · `model_id` — path `modelId`
- **Returns (parsed)**: `Model`
- **Returns (raw)**: `ApiResult[Model, PublishModelErrorBody]`
- **Error**: `PublishModelErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Model` | `boomi/models/model.py` |
| `PublishModelErrorBody` | `boomi/errors/publish_model_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

