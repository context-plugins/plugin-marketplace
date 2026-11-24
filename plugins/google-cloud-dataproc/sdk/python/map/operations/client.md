<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `google_cloud_dataproc/client.py` · 180 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.dataproc_projects_locations_autoscaling_policies_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_autoscaling_policies_create(projects_id: str, locations_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `AutoscalingPolicy`
- **Returns (raw)**: `ApiResult[AutoscalingPolicy, DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody]`
- **Error**: `DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutoscalingPolicy` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `AutoscalingPolicyDict` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_autoscaling_policies_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_autoscaling_policies_delete(projects_id: str, locations_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `autoscaling_policies_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody]`
- **Error**: `DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_autoscaling_policies_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_autoscaling_policies_get(projects_id: str, locations_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `autoscaling_policies_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId`
- **Returns (parsed)**: `AutoscalingPolicy`
- **Returns (raw)**: `ApiResult[AutoscalingPolicy, DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody]`
- **Error**: `DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutoscalingPolicy` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_autoscaling_policies_get_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_autoscaling_policies_get_iam_policy(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `autoscaling_policies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIamPolicyRequest` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `GetIamPolicyRequestDict` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_autoscaling_policies_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_autoscaling_policies_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListAutoscalingPoliciesResponse`
- **Returns (raw)**: `ApiResult[ListAutoscalingPoliciesResponse, DataprocProjectsLocationsAutoscalingPoliciesListErrorBody]`
- **Error**: `DataprocProjectsLocationsAutoscalingPoliciesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAutoscalingPoliciesResponse` | `google_cloud_dataproc/models/list_autoscaling_policies_response.py` |
| `DataprocProjectsLocationsAutoscalingPoliciesListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_autoscaling_policies_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_autoscaling_policies_set_iam_policy(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `autoscaling_policies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_autoscaling_policies_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_autoscaling_policies_test_iam_permissions(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `autoscaling_policies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody]`
- **Error**: `DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_dataproc/models/test_iam_permissions_response.py` |
| `DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_autoscaling_policies_update

- **Route**: `PUT /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_autoscaling_policies_update(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `autoscaling_policies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId` · `body` — JSON body
- **Returns (parsed)**: `AutoscalingPolicy`
- **Returns (raw)**: `ApiResult[AutoscalingPolicy, DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody]`
- **Error**: `DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutoscalingPolicy` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `AutoscalingPolicyDict` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_update_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_analyze

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}:analyze`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_analyze(projects_id: str, locations_id: str, batches_id: str, body: AnalyzeBatchRequest | AnalyzeBatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsLocationsBatchesAnalyzeErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesAnalyzeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyzeBatchRequest` | `google_cloud_dataproc/models/analyze_batch_request.py` |
| `AnalyzeBatchRequestDict` | `google_cloud_dataproc/models/analyze_batch_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsLocationsBatchesAnalyzeErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_analyze_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/batches`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_create(projects_id: str, locations_id: str, body: Batch | BatchDict, *, batch_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batch_id` — query `batchId` · `request_id` — query `requestId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsLocationsBatchesCreateErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Batch` | `google_cloud_dataproc/models/batch.py` |
| `BatchDict` | `google_cloud_dataproc/models/batch.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsLocationsBatchesCreateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_delete(projects_id: str, locations_id: str, batches_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsLocationsBatchesDeleteErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_get(projects_id: str, locations_id: str, batches_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId`
- **Returns (parsed)**: `Batch`
- **Returns (raw)**: `ApiResult[Batch, DataprocProjectsLocationsBatchesGetErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Batch` | `google_cloud_dataproc/models/batch.py` |
| `DataprocProjectsLocationsBatchesGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListBatchesResponse`
- **Returns (raw)**: `ApiResult[ListBatchesResponse, DataprocProjectsLocationsBatchesListErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBatchesResponse` | `google_cloud_dataproc/models/list_batches_response.py` |
| `DataprocProjectsLocationsBatchesListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_access

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:access`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_access(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `AccessSparkApplicationResponse`
- **Returns (raw)**: `ApiResult[AccessSparkApplicationResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSparkApplicationResponse` | `google_cloud_dataproc/models/access_spark_application_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_access_environment_info

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessEnvironmentInfo`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_access_environment_info(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `AccessSparkApplicationEnvironmentInfoResponse`
- **Returns (raw)**: `ApiResult[AccessSparkApplicationEnvironmentInfoResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSparkApplicationEnvironmentInfoResponse` | `google_cloud_dataproc/models/access_spark_application_environment_info_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_environment_info_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_access_job

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessJob`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_access_job(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, job_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `job_id` — query `jobId` · `parent` — query
- **Returns (parsed)**: `AccessSparkApplicationJobResponse`
- **Returns (raw)**: `ApiResult[AccessSparkApplicationJobResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSparkApplicationJobResponse` | `google_cloud_dataproc/models/access_spark_application_job_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_job_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_access_native_build_info

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessNativeBuildInfo`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_access_native_build_info(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `AccessSparkApplicationNativeBuildInfoResponse`
- **Returns (raw)**: `ApiResult[AccessSparkApplicationNativeBuildInfoResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSparkApplicationNativeBuildInfoResponse` | `google_cloud_dataproc/models/access_spark_application_native_build_info_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_native_build_info_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_access_native_sql_query

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessNativeSqlQuery`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_access_native_sql_query(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `execution_id` — query `executionId` · `parent` — query
- **Returns (parsed)**: `AccessSparkApplicationNativeSqlQueryResponse`
- **Returns (raw)**: `ApiResult[AccessSparkApplicationNativeSqlQueryResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSparkApplicationNativeSqlQueryResponse` | `google_cloud_dataproc/models/access_spark_application_native_sql_query_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_native_sql_query_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_access_sql_plan

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessSqlPlan`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_access_sql_plan(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `execution_id` — query `executionId` · `parent` — query
- **Returns (parsed)**: `AccessSparkApplicationSqlSparkPlanGraphResponse`
- **Returns (raw)**: `ApiResult[AccessSparkApplicationSqlSparkPlanGraphResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSparkApplicationSqlSparkPlanGraphResponse` | `google_cloud_dataproc/models/access_spark_application_sql_spark_plan_graph_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_sql_plan_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_access_sql_query

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessSqlQuery`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_access_sql_query(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, details: bool | None = None, execution_id: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `details` — query · `execution_id` — query `executionId` · `parent` — query · `plan_description` — query `planDescription`
- **Returns (parsed)**: `AccessSparkApplicationSqlQueryResponse`
- **Returns (raw)**: `ApiResult[AccessSparkApplicationSqlQueryResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSparkApplicationSqlQueryResponse` | `google_cloud_dataproc/models/access_spark_application_sql_query_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_sql_query_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_access_stage_attempt

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessStageAttempt`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_access_stage_attempt(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query · `stage_attempt_id` — query `stageAttemptId` · `stage_id` — query `stageId` · `summary_metrics_mask` — query `summaryMetricsMask`
- **Returns (parsed)**: `AccessSparkApplicationStageAttemptResponse`
- **Returns (raw)**: `ApiResult[AccessSparkApplicationStageAttemptResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSparkApplicationStageAttemptResponse` | `google_cloud_dataproc/models/access_spark_application_stage_attempt_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_stage_attempt_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessStageRddGraph`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query · `stage_id` — query `stageId`
- **Returns (parsed)**: `AccessSparkApplicationStageRddOperationGraphResponse`
- **Returns (raw)**: `ApiResult[AccessSparkApplicationStageRddOperationGraphResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSparkApplicationStageRddOperationGraphResponse` | `google_cloud_dataproc/models/access_spark_application_stage_rdd_operation_graph_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_compute_tuning_config

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:computeTuningConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_compute_tuning_config(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, semantic_query_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `execution_id` — query `executionId` · `parent` — query · `semantic_query_id` — query `semanticQueryId`
- **Returns (parsed)**: `ComputeTuningConfigResponse`
- **Returns (raw)**: `ApiResult[ComputeTuningConfigResponse, DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ComputeTuningConfigResponse` | `google_cloud_dataproc/models/compute_tuning_config_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_compute_tuning_config_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_search

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications:search`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_search(projects_id: str, locations_id: str, batches_id: str, *, application_status: ApplicationStatusOrStr | None = None, max_end_time: str | None = None, max_time: str | None = None, min_end_time: str | None = None, min_time: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `application_status` — query `applicationStatus` · `max_end_time` — query `maxEndTime` · `max_time` — query `maxTime` · `min_end_time` — query `minEndTime` · `min_time` — query `minTime` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `SearchSparkApplicationsResponse`
- **Returns (raw)**: `ApiResult[SearchSparkApplicationsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationStatusOrStr` | `google_cloud_dataproc/models/enums/application_status.py` |
| `SearchSparkApplicationsResponse` | `google_cloud_dataproc/models/search_spark_applications_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchExecutorStageSummary`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `stage_attempt_id` — query `stageAttemptId` · `stage_id` — query `stageId`
- **Returns (parsed)**: `SearchSparkApplicationExecutorStageSummaryResponse`
- **Returns (raw)**: `ApiResult[SearchSparkApplicationExecutorStageSummaryResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchSparkApplicationExecutorStageSummaryResponse` | `google_cloud_dataproc/models/search_spark_application_executor_stage_summary_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_search_executors

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchExecutors`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_search_executors(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, executor_status: ExecutorStatusOrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `executor_status` — query `executorStatus` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query
- **Returns (parsed)**: `SearchSparkApplicationExecutorsResponse`
- **Returns (raw)**: `ApiResult[SearchSparkApplicationExecutorsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExecutorStatusOrStr` | `google_cloud_dataproc/models/enums/executor_status.py` |
| `SearchSparkApplicationExecutorsResponse` | `google_cloud_dataproc/models/search_spark_application_executors_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_executors_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_search_jobs

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchJobs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_search_jobs(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, job_status: JobStatus2OrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `job_status` — query `jobStatus` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query
- **Returns (parsed)**: `SearchSparkApplicationJobsResponse`
- **Returns (raw)**: `ApiResult[SearchSparkApplicationJobsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobStatus2OrStr` | `google_cloud_dataproc/models/enums/job_status2.py` |
| `SearchSparkApplicationJobsResponse` | `google_cloud_dataproc/models/search_spark_application_jobs_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_jobs_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_search_native_sql_queries

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchNativeSqlQueries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_search_native_sql_queries(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query
- **Returns (parsed)**: `SearchSparkApplicationNativeSqlQueriesResponse`
- **Returns (raw)**: `ApiResult[SearchSparkApplicationNativeSqlQueriesResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchSparkApplicationNativeSqlQueriesResponse` | `google_cloud_dataproc/models/search_spark_application_native_sql_queries_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_native_sql_queries_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_search_sql_queries

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchSqlQueries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_search_sql_queries(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, details: bool | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `details` — query · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `plan_description` — query `planDescription`
- **Returns (parsed)**: `SearchSparkApplicationSqlQueriesResponse`
- **Returns (raw)**: `ApiResult[SearchSparkApplicationSqlQueriesResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchSparkApplicationSqlQueriesResponse` | `google_cloud_dataproc/models/search_spark_application_sql_queries_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_sql_queries_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStageAttemptTasks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, sort_runtime: bool | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, task_status: TaskStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `sort_runtime` — query `sortRuntime` · `stage_attempt_id` — query `stageAttemptId` · `stage_id` — query `stageId` · `task_status` — query `taskStatus`
- **Returns (parsed)**: `SearchSparkApplicationStageAttemptTasksResponse`
- **Returns (raw)**: `ApiResult[SearchSparkApplicationStageAttemptTasksResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskStatusOrStr` | `google_cloud_dataproc/models/enums/task_status.py` |
| `SearchSparkApplicationStageAttemptTasksResponse` | `google_cloud_dataproc/models/search_spark_application_stage_attempt_tasks_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_search_stage_attempts

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStageAttempts`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_search_stage_attempts(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `stage_id` — query `stageId` · `summary_metrics_mask` — query `summaryMetricsMask`
- **Returns (parsed)**: `SearchSparkApplicationStageAttemptsResponse`
- **Returns (raw)**: `ApiResult[SearchSparkApplicationStageAttemptsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchSparkApplicationStageAttemptsResponse` | `google_cloud_dataproc/models/search_spark_application_stage_attempts_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stage_attempts_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_search_stages

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStages`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_search_stages(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_status: StageStatusOrStr | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `stage_status` — query `stageStatus` · `summary_metrics_mask` — query `summaryMetricsMask`
- **Returns (parsed)**: `SearchSparkApplicationStagesResponse`
- **Returns (raw)**: `ApiResult[SearchSparkApplicationStagesResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StageStatusOrStr` | `google_cloud_dataproc/models/enums/stage_status.py` |
| `SearchSparkApplicationStagesResponse` | `google_cloud_dataproc/models/search_spark_application_stages_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stages_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_summarize_executors

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeExecutors`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_summarize_executors(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `SummarizeSparkApplicationExecutorsResponse`
- **Returns (raw)**: `ApiResult[SummarizeSparkApplicationExecutorsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SummarizeSparkApplicationExecutorsResponse` | `google_cloud_dataproc/models/summarize_spark_application_executors_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_executors_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_summarize_jobs

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeJobs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_summarize_jobs(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `SummarizeSparkApplicationJobsResponse`
- **Returns (raw)**: `ApiResult[SummarizeSparkApplicationJobsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SummarizeSparkApplicationJobsResponse` | `google_cloud_dataproc/models/summarize_spark_application_jobs_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_jobs_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeStageAttemptTasks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query · `stage_attempt_id` — query `stageAttemptId` · `stage_id` — query `stageId`
- **Returns (parsed)**: `SummarizeSparkApplicationStageAttemptTasksResponse`
- **Returns (raw)**: `ApiResult[SummarizeSparkApplicationStageAttemptTasksResponse, DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SummarizeSparkApplicationStageAttemptTasksResponse` | `google_cloud_dataproc/models/summarize_spark_application_stage_attempt_tasks_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_summarize_stages

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeStages`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_summarize_stages(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `SummarizeSparkApplicationStagesResponse`
- **Returns (raw)**: `ApiResult[SummarizeSparkApplicationStagesResponse, DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SummarizeSparkApplicationStagesResponse` | `google_cloud_dataproc/models/summarize_spark_application_stages_response.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_stages_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_batches_spark_applications_write

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:write`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_batches_spark_applications_write(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, body: WriteSparkApplicationContextRequest | WriteSparkApplicationContextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `batches_id`, `spark_applications_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `batches_id` — path `batchesId` · `spark_applications_id` — path `sparkApplicationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody]`
- **Error**: `DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WriteSparkApplicationContextRequest` | `google_cloud_dataproc/models/write_spark_application_context_request.py` |
| `WriteSparkApplicationContextRequestDict` | `google_cloud_dataproc/models/write_spark_application_context_request.py` |
| `DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_write_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_operations_cancel

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsLocationsOperationsCancelErrorBody]`
- **Error**: `DataprocProjectsLocationsOperationsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsOperationsCancelErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_operations_cancel_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_operations_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsLocationsOperationsDeleteErrorBody]`
- **Error**: `DataprocProjectsLocationsOperationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsOperationsDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_operations_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_operations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsLocationsOperationsGetErrorBody]`
- **Error**: `DataprocProjectsLocationsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsLocationsOperationsGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_operations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `ListOperationsResponse`
- **Returns (raw)**: `ApiResult[ListOperationsResponse, DataprocProjectsLocationsOperationsListErrorBody]`
- **Error**: `DataprocProjectsLocationsOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListOperationsResponse` | `google_cloud_dataproc/models/list_operations_response.py` |
| `DataprocProjectsLocationsOperationsListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_operations_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_session_templates_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_session_templates_create(projects_id: str, locations_id: str, body: SessionTemplate | SessionTemplateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `SessionTemplate`
- **Returns (raw)**: `ApiResult[SessionTemplate, DataprocProjectsLocationsSessionTemplatesCreateErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionTemplatesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SessionTemplate` | `google_cloud_dataproc/models/session_template.py` |
| `SessionTemplateDict` | `google_cloud_dataproc/models/session_template.py` |
| `DataprocProjectsLocationsSessionTemplatesCreateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_session_templates_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_session_templates_delete(projects_id: str, locations_id: str, session_templates_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `session_templates_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `session_templates_id` — path `sessionTemplatesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsLocationsSessionTemplatesDeleteErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionTemplatesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionTemplatesDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_session_templates_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_session_templates_get(projects_id: str, locations_id: str, session_templates_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `session_templates_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `session_templates_id` — path `sessionTemplatesId`
- **Returns (parsed)**: `SessionTemplate`
- **Returns (raw)**: `ApiResult[SessionTemplate, DataprocProjectsLocationsSessionTemplatesGetErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionTemplatesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SessionTemplate` | `google_cloud_dataproc/models/session_template.py` |
| `DataprocProjectsLocationsSessionTemplatesGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_session_templates_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_session_templates_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListSessionTemplatesResponse`
- **Returns (raw)**: `ApiResult[ListSessionTemplatesResponse, DataprocProjectsLocationsSessionTemplatesListErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionTemplatesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListSessionTemplatesResponse` | `google_cloud_dataproc/models/list_session_templates_response.py` |
| `DataprocProjectsLocationsSessionTemplatesListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_session_templates_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_session_templates_patch(projects_id: str, locations_id: str, session_templates_id: str, body: SessionTemplate | SessionTemplateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `session_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `session_templates_id` — path `sessionTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `SessionTemplate`
- **Returns (raw)**: `ApiResult[SessionTemplate, DataprocProjectsLocationsSessionTemplatesPatchErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionTemplatesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SessionTemplate` | `google_cloud_dataproc/models/session_template.py` |
| `SessionTemplateDict` | `google_cloud_dataproc/models/session_template.py` |
| `DataprocProjectsLocationsSessionTemplatesPatchErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_patch_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/sessions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_create(projects_id: str, locations_id: str, body: Session | SessionDict, *, request_id: str | None = None, session_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `request_id` — query `requestId` · `session_id` — query `sessionId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsLocationsSessionsCreateErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Session` | `google_cloud_dataproc/models/session.py` |
| `SessionDict` | `google_cloud_dataproc/models/session.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsLocationsSessionsCreateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_delete(projects_id: str, locations_id: str, sessions_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsLocationsSessionsDeleteErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsLocationsSessionsDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_get(projects_id: str, locations_id: str, sessions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId`
- **Returns (parsed)**: `Session`
- **Returns (raw)**: `ApiResult[Session, DataprocProjectsLocationsSessionsGetErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Session` | `google_cloud_dataproc/models/session.py` |
| `DataprocProjectsLocationsSessionsGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListSessionsResponse`
- **Returns (raw)**: `ApiResult[ListSessionsResponse, DataprocProjectsLocationsSessionsListErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListSessionsResponse` | `google_cloud_dataproc/models/list_sessions_response.py` |
| `DataprocProjectsLocationsSessionsListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_access

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:access`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_access(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `AccessSessionSparkApplicationResponse`
- **Returns (raw)**: `ApiResult[AccessSessionSparkApplicationResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSessionSparkApplicationResponse` | `google_cloud_dataproc/models/access_session_spark_application_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_access_environment_info

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessEnvironmentInfo`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_access_environment_info(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `AccessSessionSparkApplicationEnvironmentInfoResponse`
- **Returns (raw)**: `ApiResult[AccessSessionSparkApplicationEnvironmentInfoResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSessionSparkApplicationEnvironmentInfoResponse` | `google_cloud_dataproc/models/access_session_spark_application_environment_info_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_environment_info_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_access_job

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessJob`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_access_job(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, job_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `job_id` — query `jobId` · `parent` — query
- **Returns (parsed)**: `AccessSessionSparkApplicationJobResponse`
- **Returns (raw)**: `ApiResult[AccessSessionSparkApplicationJobResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSessionSparkApplicationJobResponse` | `google_cloud_dataproc/models/access_session_spark_application_job_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_job_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_access_native_build_info

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessNativeBuildInfo`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_access_native_build_info(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `AccessSessionSparkApplicationNativeBuildInfoResponse`
- **Returns (raw)**: `ApiResult[AccessSessionSparkApplicationNativeBuildInfoResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSessionSparkApplicationNativeBuildInfoResponse` | `google_cloud_dataproc/models/access_session_spark_application_native_build_info_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_native_build_info_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_access_native_sql_query

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessNativeSqlQuery`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_access_native_sql_query(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `execution_id` — query `executionId` · `parent` — query
- **Returns (parsed)**: `AccessSessionSparkApplicationNativeSqlQueryResponse`
- **Returns (raw)**: `ApiResult[AccessSessionSparkApplicationNativeSqlQueryResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSessionSparkApplicationNativeSqlQueryResponse` | `google_cloud_dataproc/models/access_session_spark_application_native_sql_query_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_native_sql_query_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_access_sql_plan

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessSqlPlan`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_access_sql_plan(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `execution_id` — query `executionId` · `parent` — query
- **Returns (parsed)**: `AccessSessionSparkApplicationSqlSparkPlanGraphResponse`
- **Returns (raw)**: `ApiResult[AccessSessionSparkApplicationSqlSparkPlanGraphResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSessionSparkApplicationSqlSparkPlanGraphResponse` | `google_cloud_dataproc/models/access_session_spark_application_sql_spark_plan_graph_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_sql_plan_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_access_sql_query

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessSqlQuery`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_access_sql_query(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, details: bool | None = None, execution_id: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `details` — query · `execution_id` — query `executionId` · `parent` — query · `plan_description` — query `planDescription`
- **Returns (parsed)**: `AccessSessionSparkApplicationSqlQueryResponse`
- **Returns (raw)**: `ApiResult[AccessSessionSparkApplicationSqlQueryResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSessionSparkApplicationSqlQueryResponse` | `google_cloud_dataproc/models/access_session_spark_application_sql_query_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_sql_query_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_access_stage_attempt

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessStageAttempt`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_access_stage_attempt(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query · `stage_attempt_id` — query `stageAttemptId` · `stage_id` — query `stageId` · `summary_metrics_mask` — query `summaryMetricsMask`
- **Returns (parsed)**: `AccessSessionSparkApplicationStageAttemptResponse`
- **Returns (raw)**: `ApiResult[AccessSessionSparkApplicationStageAttemptResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSessionSparkApplicationStageAttemptResponse` | `google_cloud_dataproc/models/access_session_spark_application_stage_attempt_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_stage_attempt_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessStageRddGraph`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query · `stage_id` — query `stageId`
- **Returns (parsed)**: `AccessSessionSparkApplicationStageRddOperationGraphResponse`
- **Returns (raw)**: `ApiResult[AccessSessionSparkApplicationStageRddOperationGraphResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessSessionSparkApplicationStageRddOperationGraphResponse` | `google_cloud_dataproc/models/access_session_spark_application_stage_rdd_operation_graph_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_search

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications:search`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_search(projects_id: str, locations_id: str, sessions_id: str, *, application_status: ApplicationStatusOrStr | None = None, max_end_time: str | None = None, max_time: str | None = None, min_end_time: str | None = None, min_time: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `application_status` — query `applicationStatus` · `max_end_time` — query `maxEndTime` · `max_time` — query `maxTime` · `min_end_time` — query `minEndTime` · `min_time` — query `minTime` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `SearchSessionSparkApplicationsResponse`
- **Returns (raw)**: `ApiResult[SearchSessionSparkApplicationsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationStatusOrStr` | `google_cloud_dataproc/models/enums/application_status.py` |
| `SearchSessionSparkApplicationsResponse` | `google_cloud_dataproc/models/search_session_spark_applications_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchExecutorStageSummary`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `stage_attempt_id` — query `stageAttemptId` · `stage_id` — query `stageId`
- **Returns (parsed)**: `SearchSessionSparkApplicationExecutorStageSummaryResponse`
- **Returns (raw)**: `ApiResult[SearchSessionSparkApplicationExecutorStageSummaryResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchSessionSparkApplicationExecutorStageSummaryResponse` | `google_cloud_dataproc/models/search_session_spark_application_executor_stage_summary_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_search_executors

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchExecutors`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_search_executors(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, executor_status: ExecutorStatusOrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `executor_status` — query `executorStatus` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query
- **Returns (parsed)**: `SearchSessionSparkApplicationExecutorsResponse`
- **Returns (raw)**: `ApiResult[SearchSessionSparkApplicationExecutorsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExecutorStatusOrStr` | `google_cloud_dataproc/models/enums/executor_status.py` |
| `SearchSessionSparkApplicationExecutorsResponse` | `google_cloud_dataproc/models/search_session_spark_application_executors_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_executors_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_search_jobs

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchJobs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_search_jobs(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, job_ids: list[str] | None = None, job_status: JobStatus2OrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `job_ids` — query `jobIds` · `job_status` — query `jobStatus` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query
- **Returns (parsed)**: `SearchSessionSparkApplicationJobsResponse`
- **Returns (raw)**: `ApiResult[SearchSessionSparkApplicationJobsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobStatus2OrStr` | `google_cloud_dataproc/models/enums/job_status2.py` |
| `SearchSessionSparkApplicationJobsResponse` | `google_cloud_dataproc/models/search_session_spark_application_jobs_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_jobs_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchNativeSqlQueries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query
- **Returns (parsed)**: `SearchSessionSparkApplicationNativeSqlQueriesResponse`
- **Returns (raw)**: `ApiResult[SearchSessionSparkApplicationNativeSqlQueriesResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchSessionSparkApplicationNativeSqlQueriesResponse` | `google_cloud_dataproc/models/search_session_spark_application_native_sql_queries_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_search_sql_queries

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchSqlQueries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_search_sql_queries(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, details: bool | None = None, operation_ids: list[str] | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `details` — query · `operation_ids` — query `operationIds` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `plan_description` — query `planDescription`
- **Returns (parsed)**: `SearchSessionSparkApplicationSqlQueriesResponse`
- **Returns (raw)**: `ApiResult[SearchSessionSparkApplicationSqlQueriesResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchSessionSparkApplicationSqlQueriesResponse` | `google_cloud_dataproc/models/search_session_spark_application_sql_queries_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_sql_queries_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStageAttemptTasks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, sort_runtime: bool | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, task_status: TaskStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `sort_runtime` — query `sortRuntime` · `stage_attempt_id` — query `stageAttemptId` · `stage_id` — query `stageId` · `task_status` — query `taskStatus`
- **Returns (parsed)**: `SearchSessionSparkApplicationStageAttemptTasksResponse`
- **Returns (raw)**: `ApiResult[SearchSessionSparkApplicationStageAttemptTasksResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskStatusOrStr` | `google_cloud_dataproc/models/enums/task_status.py` |
| `SearchSessionSparkApplicationStageAttemptTasksResponse` | `google_cloud_dataproc/models/search_session_spark_application_stage_attempt_tasks_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_search_stage_attempts

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStageAttempts`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_search_stage_attempts(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `stage_id` — query `stageId` · `summary_metrics_mask` — query `summaryMetricsMask`
- **Returns (parsed)**: `SearchSessionSparkApplicationStageAttemptsResponse`
- **Returns (raw)**: `ApiResult[SearchSessionSparkApplicationStageAttemptsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchSessionSparkApplicationStageAttemptsResponse` | `google_cloud_dataproc/models/search_session_spark_application_stage_attempts_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stage_attempts_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_search_stages

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStages`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_search_stages(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_ids: list[str] | None = None, stage_status: StageStatusOrStr | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `parent` — query · `stage_ids` — query `stageIds` · `stage_status` — query `stageStatus` · `summary_metrics_mask` — query `summaryMetricsMask`
- **Returns (parsed)**: `SearchSessionSparkApplicationStagesResponse`
- **Returns (raw)**: `ApiResult[SearchSessionSparkApplicationStagesResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StageStatusOrStr` | `google_cloud_dataproc/models/enums/stage_status.py` |
| `SearchSessionSparkApplicationStagesResponse` | `google_cloud_dataproc/models/search_session_spark_application_stages_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stages_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_summarize_executors

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeExecutors`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_summarize_executors(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query
- **Returns (parsed)**: `SummarizeSessionSparkApplicationExecutorsResponse`
- **Returns (raw)**: `ApiResult[SummarizeSessionSparkApplicationExecutorsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SummarizeSessionSparkApplicationExecutorsResponse` | `google_cloud_dataproc/models/summarize_session_spark_application_executors_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_executors_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_summarize_jobs

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeJobs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_summarize_jobs(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, job_ids: list[str] | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `job_ids` — query `jobIds` · `parent` — query
- **Returns (parsed)**: `SummarizeSessionSparkApplicationJobsResponse`
- **Returns (raw)**: `ApiResult[SummarizeSessionSparkApplicationJobsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SummarizeSessionSparkApplicationJobsResponse` | `google_cloud_dataproc/models/summarize_session_spark_application_jobs_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_jobs_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeStageAttemptTasks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query · `stage_attempt_id` — query `stageAttemptId` · `stage_id` — query `stageId`
- **Returns (parsed)**: `SummarizeSessionSparkApplicationStageAttemptTasksResponse`
- **Returns (raw)**: `ApiResult[SummarizeSessionSparkApplicationStageAttemptTasksResponse, DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SummarizeSessionSparkApplicationStageAttemptTasksResponse` | `google_cloud_dataproc/models/summarize_session_spark_application_stage_attempt_tasks_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_summarize_stages

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeStages`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_summarize_stages(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_ids: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `parent` — query · `stage_ids` — query `stageIds`
- **Returns (parsed)**: `SummarizeSessionSparkApplicationStagesResponse`
- **Returns (raw)**: `ApiResult[SummarizeSessionSparkApplicationStagesResponse, DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SummarizeSessionSparkApplicationStagesResponse` | `google_cloud_dataproc/models/summarize_session_spark_application_stages_response.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_stages_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_spark_applications_write

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:write`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_spark_applications_write(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, body: WriteSessionSparkApplicationContextRequest | WriteSessionSparkApplicationContextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `spark_applications_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `spark_applications_id` — path `sparkApplicationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WriteSessionSparkApplicationContextRequest` | `google_cloud_dataproc/models/write_session_spark_application_context_request.py` |
| `WriteSessionSparkApplicationContextRequestDict` | `google_cloud_dataproc/models/write_session_spark_application_context_request.py` |
| `DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_write_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_sessions_terminate

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}:terminate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_sessions_terminate(projects_id: str, locations_id: str, sessions_id: str, body: TerminateSessionRequest | TerminateSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `sessions_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `sessions_id` — path `sessionsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsLocationsSessionsTerminateErrorBody]`
- **Error**: `DataprocProjectsLocationsSessionsTerminateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TerminateSessionRequest` | `google_cloud_dataproc/models/terminate_session_request.py` |
| `TerminateSessionRequestDict` | `google_cloud_dataproc/models/terminate_session_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsLocationsSessionsTerminateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_sessions_terminate_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_create(projects_id: str, locations_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `WorkflowTemplate`
- **Returns (raw)**: `ApiResult[WorkflowTemplate, DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowTemplate` | `google_cloud_dataproc/models/workflow_template.py` |
| `WorkflowTemplateDict` | `google_cloud_dataproc/models/workflow_template.py` |
| `DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_delete(projects_id: str, locations_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `workflow_templates_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `workflow_templates_id` — path `workflowTemplatesId` · `version` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_get(projects_id: str, locations_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `workflow_templates_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `workflow_templates_id` — path `workflowTemplatesId` · `version` — query
- **Returns (parsed)**: `WorkflowTemplate`
- **Returns (raw)**: `ApiResult[WorkflowTemplate, DataprocProjectsLocationsWorkflowTemplatesGetErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowTemplate` | `google_cloud_dataproc/models/workflow_template.py` |
| `DataprocProjectsLocationsWorkflowTemplatesGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_get_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_get_iam_policy(projects_id: str, locations_id: str, workflow_templates_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIamPolicyRequest` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `GetIamPolicyRequestDict` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_instantiate

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:instantiate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_instantiate(projects_id: str, locations_id: str, workflow_templates_id: str, body: InstantiateWorkflowTemplateRequest | InstantiateWorkflowTemplateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InstantiateWorkflowTemplateRequest` | `google_cloud_dataproc/models/instantiate_workflow_template_request.py` |
| `InstantiateWorkflowTemplateRequestDict` | `google_cloud_dataproc/models/instantiate_workflow_template_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_instantiate_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_instantiate_inline

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates:instantiateInline`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_instantiate_inline(projects_id: str, locations_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `request_id` — query `requestId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowTemplate` | `google_cloud_dataproc/models/workflow_template.py` |
| `WorkflowTemplateDict` | `google_cloud_dataproc/models/workflow_template.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_instantiate_inline_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListWorkflowTemplatesResponse`
- **Returns (raw)**: `ApiResult[ListWorkflowTemplatesResponse, DataprocProjectsLocationsWorkflowTemplatesListErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListWorkflowTemplatesResponse` | `google_cloud_dataproc/models/list_workflow_templates_response.py` |
| `DataprocProjectsLocationsWorkflowTemplatesListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_set_iam_policy(projects_id: str, locations_id: str, workflow_templates_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_test_iam_permissions(projects_id: str, locations_id: str, workflow_templates_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_dataproc/models/test_iam_permissions_response.py` |
| `DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_locations_workflow_templates_update

- **Route**: `PUT /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_locations_workflow_templates_update(projects_id: str, locations_id: str, workflow_templates_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `WorkflowTemplate`
- **Returns (raw)**: `ApiResult[WorkflowTemplate, DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody]`
- **Error**: `DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowTemplate` | `google_cloud_dataproc/models/workflow_template.py` |
| `WorkflowTemplateDict` | `google_cloud_dataproc/models/workflow_template.py` |
| `DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_update_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_autoscaling_policies_create

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_autoscaling_policies_create(projects_id: str, regions_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `body` — JSON body
- **Returns (parsed)**: `AutoscalingPolicy`
- **Returns (raw)**: `ApiResult[AutoscalingPolicy, DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody]`
- **Error**: `DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutoscalingPolicy` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `AutoscalingPolicyDict` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_autoscaling_policies_delete

- **Route**: `DELETE /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_autoscaling_policies_delete(projects_id: str, regions_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `autoscaling_policies_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody]`
- **Error**: `DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_autoscaling_policies_get

- **Route**: `GET /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_autoscaling_policies_get(projects_id: str, regions_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `autoscaling_policies_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId`
- **Returns (parsed)**: `AutoscalingPolicy`
- **Returns (raw)**: `ApiResult[AutoscalingPolicy, DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody]`
- **Error**: `DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutoscalingPolicy` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_autoscaling_policies_get_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_autoscaling_policies_get_iam_policy(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `autoscaling_policies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIamPolicyRequest` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `GetIamPolicyRequestDict` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_autoscaling_policies_list

- **Route**: `GET /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_autoscaling_policies_list(projects_id: str, regions_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListAutoscalingPoliciesResponse`
- **Returns (raw)**: `ApiResult[ListAutoscalingPoliciesResponse, DataprocProjectsRegionsAutoscalingPoliciesListErrorBody]`
- **Error**: `DataprocProjectsRegionsAutoscalingPoliciesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAutoscalingPoliciesResponse` | `google_cloud_dataproc/models/list_autoscaling_policies_response.py` |
| `DataprocProjectsRegionsAutoscalingPoliciesListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_autoscaling_policies_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_autoscaling_policies_set_iam_policy(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `autoscaling_policies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_autoscaling_policies_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_autoscaling_policies_test_iam_permissions(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `autoscaling_policies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody]`
- **Error**: `DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_dataproc/models/test_iam_permissions_response.py` |
| `DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_autoscaling_policies_update

- **Route**: `PUT /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_autoscaling_policies_update(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `autoscaling_policies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `autoscaling_policies_id` — path `autoscalingPoliciesId` · `body` — JSON body
- **Returns (parsed)**: `AutoscalingPolicy`
- **Returns (raw)**: `ApiResult[AutoscalingPolicy, DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody]`
- **Error**: `DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutoscalingPolicy` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `AutoscalingPolicyDict` | `google_cloud_dataproc/models/autoscaling_policy.py` |
| `DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_update_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_create

- **Route**: `POST /v1/projects/{projectId}/regions/{region}/clusters`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_create(project_id: str, region: str, body: Cluster | ClusterDict, *, action_on_failed_primary_workers: ActionOnFailedPrimaryWorkersOrStr | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `action_on_failed_primary_workers` — query `actionOnFailedPrimaryWorkers` · `request_id` — query `requestId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersCreateErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Cluster` | `google_cloud_dataproc/models/cluster.py` |
| `ClusterDict` | `google_cloud_dataproc/models/cluster.py` |
| `ActionOnFailedPrimaryWorkersOrStr` | `google_cloud_dataproc/models/enums/action_on_failed_primary_workers.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersCreateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_delete

- **Route**: `DELETE /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_delete(project_id: str, region: str, cluster_name: str, *, cluster_uuid: str | None = None, graceful_termination_timeout: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `cluster_name`
- **Params**: `project_id` — path `projectId` · `region` — path · `cluster_name` — path `clusterName` · `cluster_uuid` — query `clusterUuid` · `graceful_termination_timeout` — query `gracefulTerminationTimeout` · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersDeleteErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_diagnose

- **Route**: `POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_diagnose(project_id: str, region: str, cluster_name: str, body: DiagnoseClusterRequest | DiagnoseClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `cluster_name`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `cluster_name` — path `clusterName` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersDiagnoseErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersDiagnoseErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DiagnoseClusterRequest` | `google_cloud_dataproc/models/diagnose_cluster_request.py` |
| `DiagnoseClusterRequestDict` | `google_cloud_dataproc/models/diagnose_cluster_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersDiagnoseErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_diagnose_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_get

- **Route**: `GET /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_get(project_id: str, region: str, cluster_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `cluster_name`
- **Params**: `project_id` — path `projectId` · `region` — path · `cluster_name` — path `clusterName`
- **Returns (parsed)**: `Cluster`
- **Returns (raw)**: `ApiResult[Cluster, DataprocProjectsRegionsClustersGetErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Cluster` | `google_cloud_dataproc/models/cluster.py` |
| `DataprocProjectsRegionsClustersGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_get_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_get_iam_policy(projects_id: str, regions_id: str, clusters_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `clusters_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `clusters_id` — path `clustersId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsClustersGetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIamPolicyRequest` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `GetIamPolicyRequestDict` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsClustersGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_inject_credentials

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:injectCredentials`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_inject_credentials(projects_id: str, regions_id: str, clusters_id: str, body: InjectCredentialsRequest | InjectCredentialsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `clusters_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `clusters_id` — path `clustersId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersInjectCredentialsErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersInjectCredentialsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InjectCredentialsRequest` | `google_cloud_dataproc/models/inject_credentials_request.py` |
| `InjectCredentialsRequestDict` | `google_cloud_dataproc/models/inject_credentials_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersInjectCredentialsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_inject_credentials_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_list

- **Route**: `GET /v1/projects/{projectId}/regions/{region}/clusters`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_list(project_id: str, region: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`
- **Params**: `project_id` — path `projectId` · `region` — path · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListClustersResponse`
- **Returns (raw)**: `ApiResult[ListClustersResponse, DataprocProjectsRegionsClustersListErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListClustersResponse` | `google_cloud_dataproc/models/list_clusters_response.py` |
| `DataprocProjectsRegionsClustersListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_node_groups_create

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_node_groups_create(projects_id: str, regions_id: str, clusters_id: str, body: NodeGroup | NodeGroupDict, *, node_group_id: str | None = None, parent_operation_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `clusters_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `clusters_id` — path `clustersId` · `node_group_id` — query `nodeGroupId` · `parent_operation_id` — query `parentOperationId` · `request_id` — query `requestId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `NodeGroup` | `google_cloud_dataproc/models/node_group.py` |
| `NodeGroupDict` | `google_cloud_dataproc/models/node_group.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_node_groups_get

- **Route**: `GET /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_node_groups_get(projects_id: str, regions_id: str, clusters_id: str, node_groups_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `clusters_id`, `node_groups_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `clusters_id` — path `clustersId` · `node_groups_id` — path `nodeGroupsId`
- **Returns (parsed)**: `NodeGroup`
- **Returns (raw)**: `ApiResult[NodeGroup, DataprocProjectsRegionsClustersNodeGroupsGetErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersNodeGroupsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `NodeGroup` | `google_cloud_dataproc/models/node_group.py` |
| `DataprocProjectsRegionsClustersNodeGroupsGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_node_groups_repair

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}:repair`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_node_groups_repair(projects_id: str, regions_id: str, clusters_id: str, node_groups_id: str, body: RepairNodeGroupRequest | RepairNodeGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `clusters_id`, `node_groups_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `clusters_id` — path `clustersId` · `node_groups_id` — path `nodeGroupsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepairNodeGroupRequest` | `google_cloud_dataproc/models/repair_node_group_request.py` |
| `RepairNodeGroupRequestDict` | `google_cloud_dataproc/models/repair_node_group_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_repair_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_node_groups_resize

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}:resize`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_node_groups_resize(projects_id: str, regions_id: str, clusters_id: str, node_groups_id: str, body: ResizeNodeGroupRequest | ResizeNodeGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `clusters_id`, `node_groups_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `clusters_id` — path `clustersId` · `node_groups_id` — path `nodeGroupsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResizeNodeGroupRequest` | `google_cloud_dataproc/models/resize_node_group_request.py` |
| `ResizeNodeGroupRequestDict` | `google_cloud_dataproc/models/resize_node_group_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_resize_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_patch

- **Route**: `PATCH /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_patch(project_id: str, region: str, cluster_name: str, body: Cluster | ClusterDict, *, graceful_decommission_timeout: str | None = None, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `cluster_name`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `cluster_name` — path `clusterName` · `graceful_decommission_timeout` — query `gracefulDecommissionTimeout` · `request_id` — query `requestId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersPatchErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Cluster` | `google_cloud_dataproc/models/cluster.py` |
| `ClusterDict` | `google_cloud_dataproc/models/cluster.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersPatchErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_patch_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_repair

- **Route**: `POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_repair(project_id: str, region: str, cluster_name: str, body: RepairClusterRequest | RepairClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `cluster_name`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `cluster_name` — path `clusterName` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersRepairErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersRepairErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepairClusterRequest` | `google_cloud_dataproc/models/repair_cluster_request.py` |
| `RepairClusterRequestDict` | `google_cloud_dataproc/models/repair_cluster_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersRepairErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_repair_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_set_iam_policy(projects_id: str, regions_id: str, clusters_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `clusters_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `clusters_id` — path `clustersId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsClustersSetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsClustersSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_start

- **Route**: `POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_start(project_id: str, region: str, cluster_name: str, body: StartClusterRequest | StartClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `cluster_name`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `cluster_name` — path `clusterName` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersStartErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersStartErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartClusterRequest` | `google_cloud_dataproc/models/start_cluster_request.py` |
| `StartClusterRequestDict` | `google_cloud_dataproc/models/start_cluster_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersStartErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_start_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_stop

- **Route**: `POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_stop(project_id: str, region: str, cluster_name: str, body: StopClusterRequest | StopClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `cluster_name`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `cluster_name` — path `clusterName` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsClustersStopErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersStopErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StopClusterRequest` | `google_cloud_dataproc/models/stop_cluster_request.py` |
| `StopClusterRequestDict` | `google_cloud_dataproc/models/stop_cluster_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsClustersStopErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_stop_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_clusters_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_clusters_test_iam_permissions(projects_id: str, regions_id: str, clusters_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `clusters_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `clusters_id` — path `clustersId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsClustersTestIamPermissionsErrorBody]`
- **Error**: `DataprocProjectsRegionsClustersTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_dataproc/models/test_iam_permissions_response.py` |
| `DataprocProjectsRegionsClustersTestIamPermissionsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_clusters_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_cancel

- **Route**: `POST /v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_cancel(project_id: str, region: str, job_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `job_id`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `job_id` — path `jobId` · `body` — JSON body
- **Returns (parsed)**: `Job`
- **Returns (raw)**: `ApiResult[Job, DataprocProjectsRegionsJobsCancelErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Job` | `google_cloud_dataproc/models/job.py` |
| `DataprocProjectsRegionsJobsCancelErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_cancel_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_delete

- **Route**: `DELETE /v1/projects/{projectId}/regions/{region}/jobs/{jobId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_delete(project_id: str, region: str, job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `job_id`
- **Params**: `project_id` — path `projectId` · `region` — path · `job_id` — path `jobId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsRegionsJobsDeleteErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_get

- **Route**: `GET /v1/projects/{projectId}/regions/{region}/jobs/{jobId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_get(project_id: str, region: str, job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `job_id`
- **Params**: `project_id` — path `projectId` · `region` — path · `job_id` — path `jobId`
- **Returns (parsed)**: `Job`
- **Returns (raw)**: `ApiResult[Job, DataprocProjectsRegionsJobsGetErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Job` | `google_cloud_dataproc/models/job.py` |
| `DataprocProjectsRegionsJobsGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_get_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_get_iam_policy(projects_id: str, regions_id: str, jobs_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `jobs_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `jobs_id` — path `jobsId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsJobsGetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIamPolicyRequest` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `GetIamPolicyRequestDict` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsJobsGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_list

- **Route**: `GET /v1/projects/{projectId}/regions/{region}/jobs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_list(project_id: str, region: str, *, cluster_name: str | None = None, filter_: str | None = None, job_state_matcher: JobStateMatcherOrStr | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`
- **Params**: `project_id` — path `projectId` · `region` — path · `cluster_name` — query `clusterName` · `filter_` — query `filter` · `job_state_matcher` — query `jobStateMatcher` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListJobsResponse`
- **Returns (raw)**: `ApiResult[ListJobsResponse, DataprocProjectsRegionsJobsListErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobStateMatcherOrStr` | `google_cloud_dataproc/models/enums/job_state_matcher.py` |
| `ListJobsResponse` | `google_cloud_dataproc/models/list_jobs_response.py` |
| `DataprocProjectsRegionsJobsListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_patch

- **Route**: `PATCH /v1/projects/{projectId}/regions/{region}/jobs/{jobId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_patch(project_id: str, region: str, job_id: str, body: Job | JobDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `job_id`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `job_id` — path `jobId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Job`
- **Returns (raw)**: `ApiResult[Job, DataprocProjectsRegionsJobsPatchErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Job` | `google_cloud_dataproc/models/job.py` |
| `JobDict` | `google_cloud_dataproc/models/job.py` |
| `DataprocProjectsRegionsJobsPatchErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_patch_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_set_iam_policy(projects_id: str, regions_id: str, jobs_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `jobs_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `jobs_id` — path `jobsId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsJobsSetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsJobsSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_submit

- **Route**: `POST /v1/projects/{projectId}/regions/{region}/jobs:submit`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_submit(project_id: str, region: str, body: SubmitJobRequest | SubmitJobRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `body` — JSON body
- **Returns (parsed)**: `Job`
- **Returns (raw)**: `ApiResult[Job, DataprocProjectsRegionsJobsSubmitErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsSubmitErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubmitJobRequest` | `google_cloud_dataproc/models/submit_job_request.py` |
| `SubmitJobRequestDict` | `google_cloud_dataproc/models/submit_job_request.py` |
| `Job` | `google_cloud_dataproc/models/job.py` |
| `DataprocProjectsRegionsJobsSubmitErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_submit_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_submit_as_operation

- **Route**: `POST /v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_submit_as_operation(project_id: str, region: str, body: SubmitJobRequest | SubmitJobRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `region`, `body`
- **Params**: `project_id` — path `projectId` · `region` — path · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsJobsSubmitAsOperationErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsSubmitAsOperationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubmitJobRequest` | `google_cloud_dataproc/models/submit_job_request.py` |
| `SubmitJobRequestDict` | `google_cloud_dataproc/models/submit_job_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsJobsSubmitAsOperationErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_submit_as_operation_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_jobs_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_jobs_test_iam_permissions(projects_id: str, regions_id: str, jobs_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `jobs_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `jobs_id` — path `jobsId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsJobsTestIamPermissionsErrorBody]`
- **Error**: `DataprocProjectsRegionsJobsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_dataproc/models/test_iam_permissions_response.py` |
| `DataprocProjectsRegionsJobsTestIamPermissionsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_jobs_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_operations_cancel

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_operations_cancel(projects_id: str, regions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsRegionsOperationsCancelErrorBody]`
- **Error**: `DataprocProjectsRegionsOperationsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsOperationsCancelErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_operations_cancel_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_operations_delete

- **Route**: `DELETE /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_operations_delete(projects_id: str, regions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsRegionsOperationsDeleteErrorBody]`
- **Error**: `DataprocProjectsRegionsOperationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsOperationsDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_operations_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_operations_get

- **Route**: `GET /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_operations_get(projects_id: str, regions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsOperationsGetErrorBody]`
- **Error**: `DataprocProjectsRegionsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsOperationsGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_operations_get_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_operations_get_iam_policy(projects_id: str, regions_id: str, operations_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsOperationsGetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsOperationsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIamPolicyRequest` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `GetIamPolicyRequestDict` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsOperationsGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_operations_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_operations_list

- **Route**: `GET /v1/projects/{projectsId}/regions/{regionsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_operations_list(projects_id: str, regions_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `ListOperationsResponse`
- **Returns (raw)**: `ApiResult[ListOperationsResponse, DataprocProjectsRegionsOperationsListErrorBody]`
- **Error**: `DataprocProjectsRegionsOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListOperationsResponse` | `google_cloud_dataproc/models/list_operations_response.py` |
| `DataprocProjectsRegionsOperationsListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_operations_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_operations_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_operations_set_iam_policy(projects_id: str, regions_id: str, operations_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsOperationsSetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsOperationsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsOperationsSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_operations_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_operations_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_operations_test_iam_permissions(projects_id: str, regions_id: str, operations_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody]`
- **Error**: `DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_dataproc/models/test_iam_permissions_response.py` |
| `DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_operations_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_create

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_create(projects_id: str, regions_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `body` — JSON body
- **Returns (parsed)**: `WorkflowTemplate`
- **Returns (raw)**: `ApiResult[WorkflowTemplate, DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowTemplate` | `google_cloud_dataproc/models/workflow_template.py` |
| `WorkflowTemplateDict` | `google_cloud_dataproc/models/workflow_template.py` |
| `DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_delete

- **Route**: `DELETE /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_delete(projects_id: str, regions_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `workflow_templates_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `workflow_templates_id` — path `workflowTemplatesId` · `version` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_get

- **Route**: `GET /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_get(projects_id: str, regions_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `workflow_templates_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `workflow_templates_id` — path `workflowTemplatesId` · `version` — query
- **Returns (parsed)**: `WorkflowTemplate`
- **Returns (raw)**: `ApiResult[WorkflowTemplate, DataprocProjectsRegionsWorkflowTemplatesGetErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowTemplate` | `google_cloud_dataproc/models/workflow_template.py` |
| `DataprocProjectsRegionsWorkflowTemplatesGetErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_get_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_get_iam_policy(projects_id: str, regions_id: str, workflow_templates_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIamPolicyRequest` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `GetIamPolicyRequestDict` | `google_cloud_dataproc/models/get_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_instantiate

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:instantiate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_instantiate(projects_id: str, regions_id: str, workflow_templates_id: str, body: InstantiateWorkflowTemplateRequest | InstantiateWorkflowTemplateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InstantiateWorkflowTemplateRequest` | `google_cloud_dataproc/models/instantiate_workflow_template_request.py` |
| `InstantiateWorkflowTemplateRequestDict` | `google_cloud_dataproc/models/instantiate_workflow_template_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_instantiate_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_instantiate_inline

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates:instantiateInline`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_instantiate_inline(projects_id: str, regions_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `request_id` — query `requestId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowTemplate` | `google_cloud_dataproc/models/workflow_template.py` |
| `WorkflowTemplateDict` | `google_cloud_dataproc/models/workflow_template.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_instantiate_inline_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_list

- **Route**: `GET /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_list(projects_id: str, regions_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListWorkflowTemplatesResponse`
- **Returns (raw)**: `ApiResult[ListWorkflowTemplatesResponse, DataprocProjectsRegionsWorkflowTemplatesListErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListWorkflowTemplatesResponse` | `google_cloud_dataproc/models/list_workflow_templates_response.py` |
| `DataprocProjectsRegionsWorkflowTemplatesListErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_set_iam_policy(projects_id: str, regions_id: str, workflow_templates_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_dataproc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_dataproc/models/policy.py` |
| `DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_test_iam_permissions(projects_id: str, regions_id: str, workflow_templates_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_dataproc/models/test_iam_permissions_response.py` |
| `DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.dataproc_projects_regions_workflow_templates_update

- **Route**: `PUT /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def dataproc_projects_regions_workflow_templates_update(projects_id: str, regions_id: str, workflow_templates_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `regions_id`, `workflow_templates_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `regions_id` — path `regionsId` · `workflow_templates_id` — path `workflowTemplatesId` · `body` — JSON body
- **Returns (parsed)**: `WorkflowTemplate`
- **Returns (raw)**: `ApiResult[WorkflowTemplate, DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody]`
- **Error**: `DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowTemplate` | `google_cloud_dataproc/models/workflow_template.py` |
| `WorkflowTemplateDict` | `google_cloud_dataproc/models/workflow_template.py` |
| `DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody` | `google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_update_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_federations_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/federations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_federations_create(projects_id: str, locations_id: str, body: Federation | FederationDict, *, federation_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `federation_id` — query `federationId` · `request_id` — query `requestId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsFederationsCreateErrorBody]`
- **Error**: `MetastoreProjectsLocationsFederationsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Federation` | `google_cloud_dataproc/models/federation.py` |
| `FederationDict` | `google_cloud_dataproc/models/federation.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsFederationsCreateErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_federations_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_federations_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_federations_delete(projects_id: str, locations_id: str, federations_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `federations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `federations_id` — path `federationsId` · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsFederationsDeleteErrorBody]`
- **Error**: `MetastoreProjectsLocationsFederationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsFederationsDeleteErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_federations_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_federations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_federations_get(projects_id: str, locations_id: str, federations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `federations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `federations_id` — path `federationsId`
- **Returns (parsed)**: `Federation`
- **Returns (raw)**: `ApiResult[Federation, MetastoreProjectsLocationsFederationsGetErrorBody]`
- **Error**: `MetastoreProjectsLocationsFederationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Federation` | `google_cloud_dataproc/models/federation.py` |
| `MetastoreProjectsLocationsFederationsGetErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_federations_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_federations_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_federations_get_iam_policy(projects_id: str, locations_id: str, federations_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `federations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `federations_id` — path `federationsId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_federations_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_federations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/federations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_federations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListFederationsResponse`
- **Returns (raw)**: `ApiResult[ListFederationsResponse, MetastoreProjectsLocationsFederationsListErrorBody]`
- **Error**: `MetastoreProjectsLocationsFederationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListFederationsResponse` | `google_cloud_dataproc/models/list_federations_response.py` |
| `MetastoreProjectsLocationsFederationsListErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_federations_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_federations_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_federations_patch(projects_id: str, locations_id: str, federations_id: str, body: Federation | FederationDict, *, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `federations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `federations_id` — path `federationsId` · `request_id` — query `requestId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsFederationsPatchErrorBody]`
- **Error**: `MetastoreProjectsLocationsFederationsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Federation` | `google_cloud_dataproc/models/federation.py` |
| `FederationDict` | `google_cloud_dataproc/models/federation.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsFederationsPatchErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_federations_patch_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_federations_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_federations_set_iam_policy(projects_id: str, locations_id: str, federations_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `federations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `federations_id` — path `federationsId` · `body` — JSON body
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest2` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `SetIamPolicyRequest2Dict` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_federations_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_federations_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_federations_test_iam_permissions(projects_id: str, locations_id: str, federations_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `federations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `federations_id` — path `federationsId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody]`
- **Error**: `MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_dataproc/models/test_iam_permissions_response.py` |
| `MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_federations_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `Location`
- **Returns (raw)**: `ApiResult[Location, MetastoreProjectsLocationsGetErrorBody]`
- **Error**: `MetastoreProjectsLocationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Location` | `google_cloud_dataproc/models/location.py` |
| `MetastoreProjectsLocationsGetErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_list

- **Route**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `extra_location_types` — query `extraLocationTypes` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListLocationsResponse`
- **Returns (raw)**: `ApiResult[ListLocationsResponse, MetastoreProjectsLocationsListErrorBody]`
- **Error**: `MetastoreProjectsLocationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListLocationsResponse` | `google_cloud_dataproc/models/list_locations_response.py` |
| `MetastoreProjectsLocationsListErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_alter_location

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:alterLocation`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_alter_location(projects_id: str, locations_id: str, services_id: str, body: AlterMetadataResourceLocationRequest | AlterMetadataResourceLocationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesAlterLocationErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesAlterLocationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AlterMetadataResourceLocationRequest` | `google_cloud_dataproc/models/alter_metadata_resource_location_request.py` |
| `AlterMetadataResourceLocationRequestDict` | `google_cloud_dataproc/models/alter_metadata_resource_location_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesAlterLocationErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_alter_location_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_alter_table_properties

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:alterTableProperties`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_alter_table_properties(projects_id: str, locations_id: str, services_id: str, body: AlterTablePropertiesRequest | AlterTablePropertiesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AlterTablePropertiesRequest` | `google_cloud_dataproc/models/alter_table_properties_request.py` |
| `AlterTablePropertiesRequestDict` | `google_cloud_dataproc/models/alter_table_properties_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_alter_table_properties_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_backups_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_backups_create(projects_id: str, locations_id: str, services_id: str, body: Backup | BackupDict, *, backup_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `backup_id` — query `backupId` · `request_id` — query `requestId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesBackupsCreateErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesBackupsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Backup` | `google_cloud_dataproc/models/backup.py` |
| `BackupDict` | `google_cloud_dataproc/models/backup.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesBackupsCreateErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_backups_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_backups_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_backups_delete(projects_id: str, locations_id: str, services_id: str, backups_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `backups_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `backups_id` — path `backupsId` · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesBackupsDeleteErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesBackupsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesBackupsDeleteErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_backups_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_backups_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_backups_get(projects_id: str, locations_id: str, services_id: str, backups_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `backups_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `backups_id` — path `backupsId`
- **Returns (parsed)**: `Backup`
- **Returns (raw)**: `ApiResult[Backup, MetastoreProjectsLocationsServicesBackupsGetErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesBackupsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Backup` | `google_cloud_dataproc/models/backup.py` |
| `MetastoreProjectsLocationsServicesBackupsGetErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_backups_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_backups_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_backups_get_iam_policy(projects_id: str, locations_id: str, services_id: str, backups_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `backups_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `backups_id` — path `backupsId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_backups_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_backups_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_backups_list(projects_id: str, locations_id: str, services_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListBackupsResponse`
- **Returns (raw)**: `ApiResult[ListBackupsResponse, MetastoreProjectsLocationsServicesBackupsListErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesBackupsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBackupsResponse` | `google_cloud_dataproc/models/list_backups_response.py` |
| `MetastoreProjectsLocationsServicesBackupsListErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_backups_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_backups_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_backups_set_iam_policy(projects_id: str, locations_id: str, services_id: str, backups_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `backups_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `backups_id` — path `backupsId` · `body` — JSON body
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest2` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `SetIamPolicyRequest2Dict` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_backups_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_cancel_migration

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:cancelMigration`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_cancel_migration(projects_id: str, locations_id: str, services_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesCancelMigrationErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesCancelMigrationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesCancelMigrationErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_cancel_migration_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_complete_migration

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:completeMigration`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_complete_migration(projects_id: str, locations_id: str, services_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesCompleteMigrationErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesCompleteMigrationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesCompleteMigrationErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_complete_migration_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_create(projects_id: str, locations_id: str, body: Service | ServiceDict, *, request_id: str | None = None, service_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `request_id` — query `requestId` · `service_id` — query `serviceId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesCreateErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Service` | `google_cloud_dataproc/models/service.py` |
| `ServiceDict` | `google_cloud_dataproc/models/service.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesCreateErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_databases_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_databases_get_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `databases_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `databases_id` — path `databasesId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_databases_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_databases_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_databases_set_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `databases_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `databases_id` — path `databasesId` · `body` — JSON body
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest2` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `SetIamPolicyRequest2Dict` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_databases_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_databases_tables_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}/tables/{tablesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_databases_tables_get_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, tables_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `databases_id`, `tables_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `databases_id` — path `databasesId` · `tables_id` — path `tablesId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_databases_tables_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_databases_tables_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}/tables/{tablesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_databases_tables_set_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, tables_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `databases_id`, `tables_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `databases_id` — path `databasesId` · `tables_id` — path `tablesId` · `body` — JSON body
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest2` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `SetIamPolicyRequest2Dict` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_databases_tables_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_delete(projects_id: str, locations_id: str, services_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesDeleteErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesDeleteErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_export_metadata

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:exportMetadata`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_export_metadata(projects_id: str, locations_id: str, services_id: str, body: ExportMetadataRequest | ExportMetadataRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesExportMetadataErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesExportMetadataErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExportMetadataRequest` | `google_cloud_dataproc/models/export_metadata_request.py` |
| `ExportMetadataRequestDict` | `google_cloud_dataproc/models/export_metadata_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesExportMetadataErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_export_metadata_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_get(projects_id: str, locations_id: str, services_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId`
- **Returns (parsed)**: `Service`
- **Returns (raw)**: `ApiResult[Service, MetastoreProjectsLocationsServicesGetErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Service` | `google_cloud_dataproc/models/service.py` |
| `MetastoreProjectsLocationsServicesGetErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_get_iam_policy(projects_id: str, locations_id: str, services_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsServicesGetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsServicesGetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListServicesResponse`
- **Returns (raw)**: `ApiResult[ListServicesResponse, MetastoreProjectsLocationsServicesListErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListServicesResponse` | `google_cloud_dataproc/models/list_services_response.py` |
| `MetastoreProjectsLocationsServicesListErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_metadata_imports_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_metadata_imports_create(projects_id: str, locations_id: str, services_id: str, body: MetadataImport | MetadataImportDict, *, metadata_import_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `metadata_import_id` — query `metadataImportId` · `request_id` — query `requestId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MetadataImport` | `google_cloud_dataproc/models/metadata_import.py` |
| `MetadataImportDict` | `google_cloud_dataproc/models/metadata_import.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_create_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_metadata_imports_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports/{metadataImportsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_metadata_imports_get(projects_id: str, locations_id: str, services_id: str, metadata_imports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `metadata_imports_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `metadata_imports_id` — path `metadataImportsId`
- **Returns (parsed)**: `MetadataImport`
- **Returns (raw)**: `ApiResult[MetadataImport, MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MetadataImport` | `google_cloud_dataproc/models/metadata_import.py` |
| `MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_metadata_imports_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_metadata_imports_list(projects_id: str, locations_id: str, services_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListMetadataImportsResponse`
- **Returns (raw)**: `ApiResult[ListMetadataImportsResponse, MetastoreProjectsLocationsServicesMetadataImportsListErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesMetadataImportsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListMetadataImportsResponse` | `google_cloud_dataproc/models/list_metadata_imports_response.py` |
| `MetastoreProjectsLocationsServicesMetadataImportsListErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_metadata_imports_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports/{metadataImportsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_metadata_imports_patch(projects_id: str, locations_id: str, services_id: str, metadata_imports_id: str, body: MetadataImport | MetadataImportDict, *, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `metadata_imports_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `metadata_imports_id` — path `metadataImportsId` · `request_id` — query `requestId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MetadataImport` | `google_cloud_dataproc/models/metadata_import.py` |
| `MetadataImportDict` | `google_cloud_dataproc/models/metadata_import.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_patch_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_migration_executions_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions/{migrationExecutionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_migration_executions_delete(projects_id: str, locations_id: str, services_id: str, migration_executions_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `migration_executions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `migration_executions_id` — path `migrationExecutionsId` · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_delete_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_migration_executions_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions/{migrationExecutionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_migration_executions_get(projects_id: str, locations_id: str, services_id: str, migration_executions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `migration_executions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `migration_executions_id` — path `migrationExecutionsId`
- **Returns (parsed)**: `MigrationExecution`
- **Returns (raw)**: `ApiResult[MigrationExecution, MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MigrationExecution` | `google_cloud_dataproc/models/migration_execution.py` |
| `MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_get_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_migration_executions_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_migration_executions_list(projects_id: str, locations_id: str, services_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListMigrationExecutionsResponse`
- **Returns (raw)**: `ApiResult[ListMigrationExecutionsResponse, MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListMigrationExecutionsResponse` | `google_cloud_dataproc/models/list_migration_executions_response.py` |
| `MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_list_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_move_table_to_database

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:moveTableToDatabase`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_move_table_to_database(projects_id: str, locations_id: str, services_id: str, body: MoveTableToDatabaseRequest | MoveTableToDatabaseRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MoveTableToDatabaseRequest` | `google_cloud_dataproc/models/move_table_to_database_request.py` |
| `MoveTableToDatabaseRequestDict` | `google_cloud_dataproc/models/move_table_to_database_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_move_table_to_database_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_patch(projects_id: str, locations_id: str, services_id: str, body: Service | ServiceDict, *, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `request_id` — query `requestId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesPatchErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Service` | `google_cloud_dataproc/models/service.py` |
| `ServiceDict` | `google_cloud_dataproc/models/service.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesPatchErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_patch_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_query_metadata

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:queryMetadata`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_query_metadata(projects_id: str, locations_id: str, services_id: str, body: QueryMetadataRequest | QueryMetadataRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesQueryMetadataErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesQueryMetadataErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QueryMetadataRequest` | `google_cloud_dataproc/models/query_metadata_request.py` |
| `QueryMetadataRequestDict` | `google_cloud_dataproc/models/query_metadata_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesQueryMetadataErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_query_metadata_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_restore

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:restore`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_restore(projects_id: str, locations_id: str, services_id: str, body: RestoreServiceRequest | RestoreServiceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesRestoreErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesRestoreErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RestoreServiceRequest` | `google_cloud_dataproc/models/restore_service_request.py` |
| `RestoreServiceRequestDict` | `google_cloud_dataproc/models/restore_service_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesRestoreErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_restore_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_set_iam_policy(projects_id: str, locations_id: str, services_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Policy2`
- **Returns (raw)**: `ApiResult[Policy2, MetastoreProjectsLocationsServicesSetIamPolicyErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest2` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `SetIamPolicyRequest2Dict` | `google_cloud_dataproc/models/set_iam_policy_request2.py` |
| `Policy2` | `google_cloud_dataproc/models/policy2.py` |
| `MetastoreProjectsLocationsServicesSetIamPolicyErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_start_migration

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:startMigration`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_start_migration(projects_id: str, locations_id: str, services_id: str, body: StartMigrationRequest | StartMigrationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, MetastoreProjectsLocationsServicesStartMigrationErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesStartMigrationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartMigrationRequest` | `google_cloud_dataproc/models/start_migration_request.py` |
| `StartMigrationRequestDict` | `google_cloud_dataproc/models/start_migration_request.py` |
| `Operation` | `google_cloud_dataproc/models/operation.py` |
| `MetastoreProjectsLocationsServicesStartMigrationErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_start_migration_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

### client.metastore_projects_locations_services_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def metastore_projects_locations_services_test_iam_permissions(projects_id: str, locations_id: str, services_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `services_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `services_id` — path `servicesId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody]`
- **Error**: `MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_dataproc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_dataproc/models/test_iam_permissions_response.py` |
| `MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody` | `google_cloud_dataproc/errors/metastore_projects_locations_services_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_dataproc/models/google_rpc_error.py` |

