# EtxappConfiguration — operations

Accessor: `client.EtxappConfiguration` · Source: `Api/EtxappConfiguration.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConfiguration
- **HTTP**: `POST /api/v1/application/configurations/geofence` (ImpServer (imp))
- **Notes**: This endpoint creates a new configuration in the system. The data for the new configuration should be provided as JSON in the body of the POST request. The system will return with a unique ID for the configuration, which is needed for any further manipulation (update or delete) of the configuration. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `CreateConfiguration(string vendorId, GeoFenceConfigurationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GeoFenceConfigurationResponse`
- **Error**: `SdkException<CreateConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseError(out ResponseError)` [400, 403, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConfiguration
- **HTTP**: `DELETE /api/v1/application/configurations/geofence` (ImpServer (imp))
- **Notes**: This endpoint deletes a specific configuration from the system. It requires the configuration ID parameter, which was provided by the POST (create) operation. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `DeleteConfiguration(string id, string vendorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseError(out ResponseError)` [403, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetConfiguration
- **HTTP**: `GET /api/v1/application/configurations/geofence` (ImpServer (imp))
- **Notes**: This endpoint fetches and returns a specific configuration's details. The configuration ID parameter, which was provided when the configuration was created through the POST request, is need to retrieve the configuration details. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `GetConfiguration(string id, string vendorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`
- **Returns**: `GeoFenceConfigurationResponse`
- **Error**: `SdkException<GetConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseError(out ResponseError)` [403, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetConfigurationList
- **HTTP**: `GET /api/v1/application/configurations/geofence/ids` (ImpServer (imp))
- **Notes**: This endpoint fetches and returns the list of configurations defined by the Vendor. The list contains the configurations' identifier, name, description, and active flag. The vendor ID is provided when the configuration is created through the POST request. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `GetConfigurationList(string vendorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConfigurationListItem>`
- **Error**: `SdkException<GetConfigurationListError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseError(out ResponseError)` [403, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateConfiguration
- **HTTP**: `PUT /api/v1/application/configurations/geofence` (ImpServer (imp))
- **Notes**: This endpoint updates an existing configuration. Similar to POST, the updated data for the configuration should be provided as JSON in the body of the PUT request. The configuration ID parameter, which was provided by the POST (create) operation, is required to do any updates on the configuration. Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.
- **Signature**: `UpdateConfiguration(string id, string vendorId, GeoFenceConfigurationUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseError(out ResponseError)` [400, 403, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
