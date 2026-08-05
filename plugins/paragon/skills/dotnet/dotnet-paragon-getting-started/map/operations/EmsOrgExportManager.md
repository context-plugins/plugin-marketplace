# EmsOrgExportManager — operations

Accessor: `client.EmsOrgExportManager` · Source: `Api/EmsOrgExportManager.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkUpdateStreamingConfigsOrg
- **HTTP**: `PATCH /api/v1/orgs/{org_id}/data_publish/streaming_configs/bulk_action` (Default)
- **Notes**: Updates export status for multiple data publish streaming configurations for the specified organization. Requires authentication.
- **Signature**: `BulkUpdateStreamingConfigsOrg(Guid orgId, IReadOnlyList<ApiV1OrgsDataPublishStreamingConfigsBulkActionRequest> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpdateStreamingResponse`
- **Error**: `SdkException<BulkUpdateStreamingConfigsOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateStreamingConfigOrg
- **HTTP**: `POST /api/v1/orgs/{org_id}/data_publish/streaming_configs/{stream_type}` (Default)
- **Notes**: Create a new data publish streaming configuration for the specified stream type in the given organization. Requires authentication.
- **Signature**: `CreateStreamingConfigOrg(Guid orgId, string streamType, DataPublishStreamingRequestBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DataPublishStreamingResponse`
- **Error**: `SdkException<CreateStreamingConfigOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetNoContent(out RawError)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateStreamingDestinationsOrg
- **HTTP**: `POST /api/v1/orgs/{org_id}/data_publish/destinations` (Default)
- **Notes**: Create a data streaming destination (e.g., Kafka broker) for your organization. Currently, only one destination per organization is supported. After creating the destination, you can set up streaming configurations to export specific data types (syslog, device telemetry) to it. Note: You must configure a destination before creating any streaming configurations. Requires authentication.
- **Signature**: `CreateStreamingDestinationsOrg(Guid orgId, DataPublishDestinationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DataPublishDestinationResponse`
- **Error**: `SdkException<CreateStreamingDestinationsOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetNoContent(out RawError)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteStreamingConfigOrg
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/data_publish/streaming_configs/{stream_type}/{id}` (Default)
- **Notes**: Delete a data publish streaming configuration for the given organization, stream type, and configuration ID. Requires authentication.
- **Signature**: `DeleteStreamingConfigOrg(Guid orgId, string streamType, Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteStreamingConfigOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetNoContent(out RawError)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteStreamingDestinationsOrg
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/data_publish/destinations/{id}` (Default)
- **Notes**: Permanently deletes a data publish destination. ⚠️ Warning: This is a cascading operation - all streaming configurations associated with this destination will also be deleted. This action cannot be undone. Requires authentication.
- **Signature**: `DeleteStreamingDestinationsOrg(Guid orgId, Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteStreamingDestinationsOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetNoContent(out RawError)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAllStreamingConfigsByStreamTypeOrg
- **HTTP**: `GET /api/v1/orgs/{org_id}/data_publish/streaming_configs/{stream_type}` (Default)
- **Notes**: Retrieve a list of all data publish streaming configurations for the specified stream type in an organization. Requires authentication.
- **Signature**: `GetAllStreamingConfigsByStreamTypeOrg(Guid orgId, string streamType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DataPublishStreamingResponse>`
- **Error**: `SdkException<GetAllStreamingConfigsByStreamTypeOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetNoContent(out RawError)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAllStreamingConfigsOrg
- **HTTP**: `GET /api/v1/orgs/{org_id}/data_publish/streaming_configs` (Default)
- **Notes**: Retrieve a list of all data publish streaming configurations in an organization. Requires authentication.
- **Signature**: `GetAllStreamingConfigsOrg(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DataPublishStreamingResponse>`
- **Error**: `SdkException<GetAllStreamingConfigsOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAllStreamingDestinationsOrg
- **HTTP**: `GET /api/v1/orgs/{org_id}/data_publish/destinations` (Default)
- **Notes**: Retrieve all configured data streaming destinations for your organization. Destinations are external systems (such as Kafka clusters) where telemetry and event data will be published. Use this endpoint to view existing destinations before creating streaming configurations. Requires authentication.
- **Signature**: `GetAllStreamingDestinationsOrg(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DataPublishDestinationResponse>`
- **Error**: `SdkException<GetAllStreamingDestinationsOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetNoContent(out RawError)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStreamingConfigByIdOrg
- **HTTP**: `GET /api/v1/orgs/{org_id}/data_publish/streaming_configs/{stream_type}/{id}` (Default)
- **Notes**: Retrieve a specific data publish streaming configuration for the given organization, stream type, and configuration ID. Requires authentication.
- **Signature**: `GetStreamingConfigByIdOrg(Guid orgId, string streamType, Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DataPublishStreamingResponse`
- **Error**: `SdkException<GetStreamingConfigByIdOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetNoContent(out RawError)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStreamingDestinationByIdOrg
- **HTTP**: `GET /api/v1/orgs/{org_id}/data_publish/destinations/{id}` (Default)
- **Notes**: Retrieves the configuration for a specific data publish destination by its ID within the given organization. Requires authentication.
- **Signature**: `GetStreamingDestinationByIdOrg(Guid orgId, Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DataPublishDestinationResponse`
- **Error**: `SdkException<GetStreamingDestinationByIdOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetNoContent(out RawError)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateStreamingConfigByIdOrg
- **HTTP**: `PUT /api/v1/orgs/{org_id}/data_publish/streaming_configs/{stream_type}/{id}` (Default)
- **Notes**: Update an existing data publish streaming configuration. Requires authentication.
- **Signature**: `UpdateStreamingConfigByIdOrg(Guid orgId, string streamType, Guid id, DataPublishStreamingRequestBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DataPublishStreamingResponse`
- **Error**: `SdkException<UpdateStreamingConfigByIdOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetNoContent(out RawError)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateStreamingDestinationByIdOrg
- **HTTP**: `PUT /api/v1/orgs/{org_id}/data_publish/destinations/{id}` (Default)
- **Notes**: Updates the configuration for a specific data publish destination by its ID within the given organization. Requires authentication.
- **Signature**: `UpdateStreamingDestinationByIdOrg(Guid orgId, Guid id, DataPublishDestinationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DataPublishDestinationResponse`
- **Error**: `SdkException<UpdateStreamingDestinationByIdOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
