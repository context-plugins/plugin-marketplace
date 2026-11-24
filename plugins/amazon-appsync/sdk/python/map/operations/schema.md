<!-- Generated file — do not edit; regenerated with the SDK. -->

# Schema — operations

Accessor: `client.schema` · Source: `amazon_app_sync/apis/schema.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.schema.get_introspection_schema

- **Route**: `GET /v1/apis/{apiId}/schema`
- **Auth**: `sigv4`
- **Signature**: `def get_introspection_schema(api_id: str, format_: FormatOrStr, *, include_directives: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `format_`
- **Params**: `api_id` — path `apiId` · `format_` — query `format` · `include_directives` — query `includeDirectives`
- **Returns (parsed)**: `GetIntrospectionSchemaResponse`
- **Returns (raw)**: `ApiResult[GetIntrospectionSchemaResponse, GetIntrospectionSchemaErrorBody]`
- **Error**: `GetIntrospectionSchemaErrorBody` — **Case A (typed)**
- **Error arms**: `GraphQlSchemaException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `amazon_app_sync/models/enums/format.py` |
| `GetIntrospectionSchemaResponse` | `amazon_app_sync/models/get_introspection_schema_response.py` |
| `GetIntrospectionSchemaErrorBody` | `amazon_app_sync/errors/get_introspection_schema_error.py` |
| `GraphQlSchemaException` | `amazon_app_sync/models/graph_ql_schema_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.schema.get_schema_creation_status2

- **Route**: `GET /v1/apis/{apiId}/schemacreation`
- **Auth**: `sigv4`
- **Signature**: `def get_schema_creation_status2(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `GetSchemaCreationStatusResponse`
- **Returns (raw)**: `ApiResult[GetSchemaCreationStatusResponse, GetSchemaCreationStatus2ErrorBody]`
- **Error**: `GetSchemaCreationStatus2ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSchemaCreationStatusResponse` | `amazon_app_sync/models/get_schema_creation_status_response.py` |
| `GetSchemaCreationStatus2ErrorBody` | `amazon_app_sync/errors/get_schema_creation_status2_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.schema.start_schema_creation2

- **Route**: `POST /v1/apis/{apiId}/schemacreation`
- **Auth**: `sigv4`
- **Signature**: `def start_schema_creation2(api_id: str, *, body: V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `StartSchemaCreationResponse`
- **Returns (raw)**: `ApiResult[StartSchemaCreationResponse, StartSchemaCreation2ErrorBody]`
- **Error**: `StartSchemaCreation2ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisSchemacreationRequest` | `amazon_app_sync/models/v1_apis_schemacreation_request.py` |
| `V1ApisSchemacreationRequestDict` | `amazon_app_sync/models/v1_apis_schemacreation_request.py` |
| `StartSchemaCreationResponse` | `amazon_app_sync/models/start_schema_creation_response.py` |
| `StartSchemaCreation2ErrorBody` | `amazon_app_sync/errors/start_schema_creation2_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

