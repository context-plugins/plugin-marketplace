<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `amazon_app_sync/apis/operations.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.associate_merged_graphql_api

- **Route**: `POST /v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations`
- **Auth**: `sigv4`
- **Signature**: `def associate_merged_graphql_api(source_api_identifier: str, *, body: V1SourceApisMergedApiAssociationsRequest | V1SourceApisMergedApiAssociationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_api_identifier`
- **Params**: `source_api_identifier` — path `sourceApiIdentifier` · `body` — JSON body
- **Returns (parsed)**: `AssociateMergedGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[AssociateMergedGraphqlApiResponse, AssociateMergedGraphqlApiErrorBody]`
- **Error**: `AssociateMergedGraphqlApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1SourceApisMergedApiAssociationsRequest` | `amazon_app_sync/models/v1_source_apis_merged_api_associations_request.py` |
| `V1SourceApisMergedApiAssociationsRequestDict` | `amazon_app_sync/models/v1_source_apis_merged_api_associations_request.py` |
| `AssociateMergedGraphqlApiResponse` | `amazon_app_sync/models/associate_merged_graphql_api_response.py` |
| `AssociateMergedGraphqlApiErrorBody` | `amazon_app_sync/errors/associate_merged_graphql_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `LimitExceededException` | `amazon_app_sync/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.operations.disassociate_merged_graphql_api

- **Route**: `DELETE /v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}`
- **Auth**: `sigv4`
- **Signature**: `def disassociate_merged_graphql_api(source_api_identifier: str, association_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_api_identifier`, `association_id`
- **Params**: `source_api_identifier` — path `sourceApiIdentifier` · `association_id` — path `associationId`
- **Returns (parsed)**: `DisassociateMergedGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[DisassociateMergedGraphqlApiResponse, DisassociateMergedGraphqlApiErrorBody]`
- **Error**: `DisassociateMergedGraphqlApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DisassociateMergedGraphqlApiResponse` | `amazon_app_sync/models/disassociate_merged_graphql_api_response.py` |
| `DisassociateMergedGraphqlApiErrorBody` | `amazon_app_sync/errors/disassociate_merged_graphql_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.operations.evaluate_code

- **Route**: `POST /v1/dataplane-evaluatecode`
- **Auth**: `sigv4`
- **Signature**: `def evaluate_code(*, body: V1DataplaneEvaluatecodeRequest | V1DataplaneEvaluatecodeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EvaluateCodeResponse`
- **Returns (raw)**: `ApiResult[EvaluateCodeResponse, EvaluateCodeErrorBody]`
- **Error**: `EvaluateCodeErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1DataplaneEvaluatecodeRequest` | `amazon_app_sync/models/v1_dataplane_evaluatecode_request.py` |
| `V1DataplaneEvaluatecodeRequestDict` | `amazon_app_sync/models/v1_dataplane_evaluatecode_request.py` |
| `EvaluateCodeResponse` | `amazon_app_sync/models/evaluate_code_response.py` |
| `EvaluateCodeErrorBody` | `amazon_app_sync/errors/evaluate_code_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.operations.flush_api_cache

- **Route**: `DELETE /v1/apis/{apiId}/FlushCache`
- **Auth**: `sigv4`
- **Signature**: `def flush_api_cache(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, FlushApiCacheErrorBody]`
- **Error**: `FlushApiCacheErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FlushApiCacheErrorBody` | `amazon_app_sync/errors/flush_api_cache_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.operations.get_graphql_api_environment_variables

- **Route**: `GET /v1/apis/{apiId}/environmentVariables`
- **Auth**: `sigv4`
- **Signature**: `def get_graphql_api_environment_variables(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `GetGraphqlApiEnvironmentVariablesResponse`
- **Returns (raw)**: `ApiResult[GetGraphqlApiEnvironmentVariablesResponse, GetGraphqlApiEnvironmentVariablesErrorBody]`
- **Error**: `GetGraphqlApiEnvironmentVariablesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetGraphqlApiEnvironmentVariablesResponse` | `amazon_app_sync/models/get_graphql_api_environment_variables_response.py` |
| `GetGraphqlApiEnvironmentVariablesErrorBody` | `amazon_app_sync/errors/get_graphql_api_environment_variables_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.operations.get_schema_creation_status

- **Route**: `GET /v1/apis/{apiId}/schemacreation`
- **Auth**: `sigv4`
- **Signature**: `def get_schema_creation_status(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `GetSchemaCreationStatusResponse`
- **Returns (raw)**: `ApiResult[GetSchemaCreationStatusResponse, GetSchemaCreationStatusErrorBody]`
- **Error**: `GetSchemaCreationStatusErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSchemaCreationStatusResponse` | `amazon_app_sync/models/get_schema_creation_status_response.py` |
| `GetSchemaCreationStatusErrorBody` | `amazon_app_sync/errors/get_schema_creation_status_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.operations.put_graphql_api_environment_variables

- **Route**: `PUT /v1/apis/{apiId}/environmentVariables`
- **Auth**: `sigv4`
- **Signature**: `def put_graphql_api_environment_variables(api_id: str, *, body: V1ApisEnvironmentVariablesRequest | V1ApisEnvironmentVariablesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `PutGraphqlApiEnvironmentVariablesResponse`
- **Returns (raw)**: `ApiResult[PutGraphqlApiEnvironmentVariablesResponse, PutGraphqlApiEnvironmentVariablesErrorBody]`
- **Error**: `PutGraphqlApiEnvironmentVariablesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisEnvironmentVariablesRequest` | `amazon_app_sync/models/v1_apis_environment_variables_request.py` |
| `V1ApisEnvironmentVariablesRequestDict` | `amazon_app_sync/models/v1_apis_environment_variables_request.py` |
| `PutGraphqlApiEnvironmentVariablesResponse` | `amazon_app_sync/models/put_graphql_api_environment_variables_response.py` |
| `PutGraphqlApiEnvironmentVariablesErrorBody` | `amazon_app_sync/errors/put_graphql_api_environment_variables_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.operations.start_schema_creation

- **Route**: `POST /v1/apis/{apiId}/schemacreation`
- **Auth**: `sigv4`
- **Signature**: `def start_schema_creation(api_id: str, *, body: V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `StartSchemaCreationResponse`
- **Returns (raw)**: `ApiResult[StartSchemaCreationResponse, StartSchemaCreationErrorBody]`
- **Error**: `StartSchemaCreationErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisSchemacreationRequest` | `amazon_app_sync/models/v1_apis_schemacreation_request.py` |
| `V1ApisSchemacreationRequestDict` | `amazon_app_sync/models/v1_apis_schemacreation_request.py` |
| `StartSchemaCreationResponse` | `amazon_app_sync/models/start_schema_creation_response.py` |
| `StartSchemaCreationErrorBody` | `amazon_app_sync/errors/start_schema_creation_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.operations.start_schema_merge

- **Route**: `POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge`
- **Auth**: `sigv4`
- **Signature**: `def start_schema_merge(association_id: str, merged_api_identifier: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `association_id`, `merged_api_identifier`
- **Params**: `association_id` — path `associationId` · `merged_api_identifier` — path `mergedApiIdentifier`
- **Returns (parsed)**: `StartSchemaMergeResponse`
- **Returns (raw)**: `ApiResult[StartSchemaMergeResponse, StartSchemaMergeErrorBody]`
- **Error**: `StartSchemaMergeErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartSchemaMergeResponse` | `amazon_app_sync/models/start_schema_merge_response.py` |
| `StartSchemaMergeErrorBody` | `amazon_app_sync/errors/start_schema_merge_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

