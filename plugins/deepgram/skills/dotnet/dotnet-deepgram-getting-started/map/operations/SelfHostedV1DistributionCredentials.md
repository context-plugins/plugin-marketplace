# SelfHostedV1DistributionCredentials — operations

Accessor: `client.SelfHostedV1DistributionCredentials` · Source: `Api/SelfHostedV1DistributionCredentials.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Create5
- **HTTP**: `POST /v1/projects/{project_id}/self-hosted/distribution/credentials` (Default (agent))
- **Notes**: Creates a set of distribution credentials for the specified project
- **Signature**: `Create5(string projectId, IReadOnlyList<V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems>? scopes, V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider? provider, CreateProjectDistributionCredentialsV1Request? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `scopes` — nullable, no default → **must pass explicitly**
  - `provider` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `scopes` ← `scopes`, `provider` ← `provider`
- **Returns**: `CreateProjectDistributionCredentialsV1Response`
- **Error**: `SdkException<Create5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Delete7
- **HTTP**: `DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}` (Default (agent))
- **Notes**: Deletes a set of distribution credentials for the specified project
- **Signature**: `Delete7(string projectId, string distributionCredentialsId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetProjectDistributionCredentialsV1Response`
- **Error**: `SdkException<Delete7Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Get11
- **HTTP**: `GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}` (Default (agent))
- **Notes**: Returns a set of distribution credentials for the specified project
- **Signature**: `Get11(string projectId, string distributionCredentialsId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetProjectDistributionCredentialsV1Response`
- **Error**: `SdkException<Get11Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List17
- **HTTP**: `GET /v1/projects/{project_id}/self-hosted/distribution/credentials` (Default (agent))
- **Notes**: Lists sets of distribution credentials for the specified project
- **Signature**: `List17(string projectId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListProjectDistributionCredentialsV1Response`
- **Error**: `SdkException<List17Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
