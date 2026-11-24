<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudFlowApi — operations

Accessor: `client.cloud_flow_api` · Source: `doi_t/apis/cloud_flow_api.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cloud_flow_api.build_cloud_flow

- **Route**: `POST /cloudflow/v1/flows/actions/build`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def build_cloud_flow(body: CloudFlowBuildRequest | CloudFlowBuildRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EventStream[str]`
- **Returns (raw)**: `ApiResult[EventStream[str], BuildCloudFlowErrorBody]`
- **Error**: `BuildCloudFlowErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 406, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudFlowBuildRequest` | `doi_t/models/cloud_flow_build_request.py` |
| `CloudFlowBuildRequestDict` | `doi_t/models/cloud_flow_build_request.py` |
| `BuildCloudFlowErrorBody` | `doi_t/errors/build_cloud_flow_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.export_cloudflow_flow

- **Route**: `GET /cloudflow/v1/flows/{flowId}/export`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def export_cloudflow_flow(flow_id: str, *, include_variable_values: bool | None = True, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`
- **Params**: `flow_id` — path `flowId` · `include_variable_values` — query `includeVariableValues`
- **Returns (parsed)**: `CloudflowFlowBundle`
- **Returns (raw)**: `ApiResult[CloudflowFlowBundle, ExportCloudflowFlowErrorBody]`
- **Error**: `ExportCloudflowFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500] · `Error` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowFlowBundle` | `doi_t/models/cloudflow_flow_bundle.py` |
| `ExportCloudflowFlowErrorBody` | `doi_t/errors/export_cloudflow_flow_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.get_cloudflow_flow_run

- **Route**: `GET /cloudflow/v1/flows/{flowId}/runs/{runId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloudflow_flow_run(flow_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`, `run_id`
- **Params**: `flow_id` — path `flowId` · `run_id` — path `runId`
- **Returns (parsed)**: `CloudflowRun`
- **Returns (raw)**: `ApiResult[CloudflowRun, GetCloudflowFlowRunErrorBody]`
- **Error**: `GetCloudflowFlowRunErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500] · `Error` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowRun` | `doi_t/models/cloudflow_run.py` |
| `GetCloudflowFlowRunErrorBody` | `doi_t/errors/get_cloudflow_flow_run_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.get_cloudflow_template

- **Route**: `GET /cloudflow/v1/templates/{templateId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloudflow_template(template_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `template_id`
- **Params**: `template_id` — path `templateId`
- **Returns (parsed)**: `CloudflowTemplate`
- **Returns (raw)**: `ApiResult[CloudflowTemplate, GetCloudflowTemplateErrorBody]`
- **Error**: `GetCloudflowTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowTemplate` | `doi_t/models/cloudflow_template.py` |
| `GetCloudflowTemplateErrorBody` | `doi_t/errors/get_cloudflow_template_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.import_cloudflow_flow

- **Route**: `POST /cloudflow/v1/flows/actions/import`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def import_cloudflow_flow(idempotency_key: str, body: CloudflowImportFlowsRequest | CloudflowImportFlowsRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `idempotency_key`, `body`
- **Params**: `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `CloudflowImportPlan`
- **Returns (raw)**: `ApiResult[CloudflowImportPlan, ImportCloudflowFlowErrorBody]`
- **Error**: `ImportCloudflowFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 500] · `Error` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowImportFlowsRequest` | `doi_t/models/cloudflow_import_flows_request.py` |
| `CloudflowImportFlowsRequestDict` | `doi_t/models/cloudflow_import_flows_request.py` |
| `CloudflowImportPlan` | `doi_t/models/cloudflow_import_plan.py` |
| `ImportCloudflowFlowErrorBody` | `doi_t/errors/import_cloudflow_flow_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.list_cloudflow_flow_runs

- **Route**: `GET /cloudflow/v1/flows/{flowId}/runs`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_cloudflow_flow_runs(flow_id: str, *, max_results: int | None = 50, page_token: str | None = None, mode: ModeDoiTCloudFlowApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`
- **Params**: `flow_id` — path `flowId` · `max_results` — query `maxResults` · `page_token` — query `pageToken` · `mode` — query
- **Returns (parsed)**: `CloudflowRunList`
- **Returns (raw)**: `ApiResult[CloudflowRunList, ListCloudflowFlowRunsErrorBody]`
- **Error**: `ListCloudflowFlowRunsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500] · `Error` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModeDoiTCloudFlowApiOrStr` | `doi_t/models/enums/mode_doi_t_cloud_flow_api.py` |
| `CloudflowRunList` | `doi_t/models/cloudflow_run_list.py` |
| `ListCloudflowFlowRunsErrorBody` | `doi_t/errors/list_cloudflow_flow_runs_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.list_cloudflow_templates

- **Route**: `GET /cloudflow/v1/templates`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_cloudflow_templates(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken`
- **Returns (parsed)**: `CloudflowTemplateListResponse`
- **Returns (raw)**: `ApiResult[CloudflowTemplateListResponse, ListCloudflowTemplatesErrorBody]`
- **Error**: `ListCloudflowTemplatesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowTemplateListResponse` | `doi_t/models/cloudflow_template_list_response.py` |
| `ListCloudflowTemplatesErrorBody` | `doi_t/errors/list_cloudflow_templates_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.list_cloudflows

- **Route**: `GET /cloudflow/v1/flows`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_cloudflows(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken`
- **Returns (parsed)**: `CloudflowListResponse`
- **Returns (raw)**: `ApiResult[CloudflowListResponse, ListCloudflowsErrorBody]`
- **Error**: `ListCloudflowsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowListResponse` | `doi_t/models/cloudflow_list_response.py` |
| `ListCloudflowsErrorBody` | `doi_t/errors/list_cloudflows_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.refine_cloud_flow

- **Route**: `POST /cloudflow/v1/flows/{flowId}/actions/refine`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def refine_cloud_flow(flow_id: str, body: CloudFlowRefineRequest | CloudFlowRefineRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`, `body`
- **Params**: `flow_id` — path `flowId` · `body` — JSON body
- **Returns (parsed)**: `EventStream[str]`
- **Returns (raw)**: `ApiResult[EventStream[str], RefineCloudFlowErrorBody]`
- **Error**: `RefineCloudFlowErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 406, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudFlowRefineRequest` | `doi_t/models/cloud_flow_refine_request.py` |
| `CloudFlowRefineRequestDict` | `doi_t/models/cloud_flow_refine_request.py` |
| `RefineCloudFlowErrorBody` | `doi_t/errors/refine_cloud_flow_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.stop_cloudflow_flow

- **Route**: `POST /cloudflow/v1/flows/{flowId}/actions/stop`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def stop_cloudflow_flow(flow_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`
- **Params**: `flow_id` — path `flowId`
- **Returns (parsed)**: `CloudflowRunSummary`
- **Returns (raw)**: `ApiResult[CloudflowRunSummary, StopCloudflowFlowErrorBody]`
- **Error**: `StopCloudflowFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 500] · `Error` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowRunSummary` | `doi_t/models/cloudflow_run_summary.py` |
| `StopCloudflowFlowErrorBody` | `doi_t/errors/stop_cloudflow_flow_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.test_run_cloudflow_flow

- **Route**: `POST /cloudflow/v1/flows/{flowId}/actions/test-run`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def test_run_cloudflow_flow(flow_id: str, idempotency_key: str, *, dry_run: bool | None = None, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`, `idempotency_key`
- **Params**: `flow_id` — path `flowId` · `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `CloudflowRunSummary`
- **Returns (raw)**: `ApiResult[CloudflowRunSummary, TestRunCloudflowFlowErrorBody]`
- **Error**: `TestRunCloudflowFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 500] · `CloudflowTestRunValidation` [422] · `Error` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowRunSummary` | `doi_t/models/cloudflow_run_summary.py` |
| `TestRunCloudflowFlowErrorBody` | `doi_t/errors/test_run_cloudflow_flow_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `CloudflowTestRunValidation` | `doi_t/models/cloudflow_test_run_validation.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.trigger_cloudflow_flow

- **Route**: `POST /cloudflow/v1/flows/{flowId}/actions/trigger`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def trigger_cloudflow_flow(flow_id: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`
- **Params**: `flow_id` — path `flowId` · `body` — JSON body
- **Returns (parsed)**: `CloudflowRunSummary`
- **Returns (raw)**: `ApiResult[CloudflowRunSummary, TriggerCloudflowFlowErrorBody]`
- **Error**: `TriggerCloudflowFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 422, 500] · `CloudflowV1FlowsActionsTrigger409Error1` [409] · `Error` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowRunSummary` | `doi_t/models/cloudflow_run_summary.py` |
| `TriggerCloudflowFlowErrorBody` | `doi_t/errors/trigger_cloudflow_flow_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `CloudflowV1FlowsActionsTrigger409Error1` | `doi_t/models/cloudflow_v1_flows_actions_trigger409_error1.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_flow_api.trigger_cloudflow_webhook

- **Route**: `POST /cloudflow/v1/trigger/{flowId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def trigger_cloudflow_webhook(flow_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`, `body`
- **Params**: `flow_id` — path `flowId` · `body` — JSON body
- **Returns (parsed)**: `CloudflowV1TriggerResponse`
- **Returns (raw)**: `ApiResult[CloudflowV1TriggerResponse, TriggerCloudflowWebhookErrorBody]`
- **Error**: `TriggerCloudflowWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowV1TriggerResponse` | `doi_t/models/cloudflow_v1_trigger_response.py` |
| `TriggerCloudflowWebhookErrorBody` | `doi_t/errors/trigger_cloudflow_webhook_error.py` |
| `Error` | `doi_t/models/error.py` |

