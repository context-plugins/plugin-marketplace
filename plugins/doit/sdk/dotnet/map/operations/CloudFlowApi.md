<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudFlowApi — operations

Accessor: `client.CloudFlowApi` · Source: `src/DoiT/Api/CloudFlowApi.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BuildCloudFlow

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `BuildCloudFlow(BuildCloudFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IAsyncEnumerable<string>`
- **Error**: `ApiException<BuildCloudFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 406, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BuildCloudFlowRequest` | `src/DoiT/Requests/CloudFlowApi/BuildCloudFlowRequest.cs` |
| `CloudFlowBuildRequest` | `src/DoiT/Models/CloudFlowBuildRequest.cs` |
| `BuildCloudFlowError` | `src/DoiT/Errors/BuildCloudFlowError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ExportCloudflowFlow

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ExportCloudflowFlow(ExportCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`
- **Query params (wire ← C#)**: `includeVariableValues` ← `IncludeVariableValues`
- **Returns**: `CloudflowFlowBundle`
- **Error**: `ApiException<ExportCloudflowFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExportCloudflowFlowRequest` | `src/DoiT/Requests/CloudFlowApi/ExportCloudflowFlowRequest.cs` |
| `CloudflowFlowBundle` | `src/DoiT/Models/CloudflowFlowBundle.cs` |
| `ExportCloudflowFlowError` | `src/DoiT/Errors/ExportCloudflowFlowError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetCloudflowFlowRun

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudflowFlowRun(GetCloudflowFlowRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`, `RunId`
- **Returns**: `CloudflowRun`
- **Error**: `ApiException<GetCloudflowFlowRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudflowFlowRunRequest` | `src/DoiT/Requests/CloudFlowApi/GetCloudflowFlowRunRequest.cs` |
| `CloudflowRun` | `src/DoiT/Models/CloudflowRun.cs` |
| `GetCloudflowFlowRunError` | `src/DoiT/Errors/GetCloudflowFlowRunError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetCloudflowTemplate

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudflowTemplate(GetCloudflowTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TemplateId`
- **Returns**: `CloudflowTemplate`
- **Error**: `ApiException<GetCloudflowTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudflowTemplateRequest` | `src/DoiT/Requests/CloudFlowApi/GetCloudflowTemplateRequest.cs` |
| `CloudflowTemplate` | `src/DoiT/Models/CloudflowTemplate.cs` |
| `GetCloudflowTemplateError` | `src/DoiT/Errors/GetCloudflowTemplateError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ImportCloudflowFlow

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ImportCloudflowFlow(ImportCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdempotencyKey`, `Body`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `CloudflowImportPlan`
- **Error**: `ApiException<ImportCloudflowFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImportCloudflowFlowRequest` | `src/DoiT/Requests/CloudFlowApi/ImportCloudflowFlowRequest.cs` |
| `CloudflowImportFlowsRequest` | `src/DoiT/Models/CloudflowImportFlowsRequest.cs` |
| `CloudflowImportPlan` | `src/DoiT/Models/CloudflowImportPlan.cs` |
| `ImportCloudflowFlowError` | `src/DoiT/Errors/ImportCloudflowFlowError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCloudflowFlowRuns

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCloudflowFlowRuns(ListCloudflowFlowRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `mode` ← `Mode`
- **Returns**: `CloudflowRunList`
- **Error**: `ApiException<ListCloudflowFlowRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCloudflowFlowRunsRequest` | `src/DoiT/Requests/CloudFlowApi/ListCloudflowFlowRunsRequest.cs` |
| `ModeDoiTCloudFlowApi` | `src/DoiT/Models/Enums/ModeDoiTCloudFlowApi.cs` |
| `CloudflowRunList` | `src/DoiT/Models/CloudflowRunList.cs` |
| `ListCloudflowFlowRunsError` | `src/DoiT/Errors/ListCloudflowFlowRunsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCloudflowTemplates

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCloudflowTemplates(ListCloudflowTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`
- **Returns**: `CloudflowTemplateListResponse`
- **Error**: `ApiException<ListCloudflowTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCloudflowTemplatesRequest` | `src/DoiT/Requests/CloudFlowApi/ListCloudflowTemplatesRequest.cs` |
| `CloudflowTemplateListResponse` | `src/DoiT/Models/CloudflowTemplateListResponse.cs` |
| `ListCloudflowTemplatesError` | `src/DoiT/Errors/ListCloudflowTemplatesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCloudflows

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCloudflows(ListCloudflowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`
- **Returns**: `CloudflowListResponse`
- **Error**: `ApiException<ListCloudflowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCloudflowsRequest` | `src/DoiT/Requests/CloudFlowApi/ListCloudflowsRequest.cs` |
| `CloudflowListResponse` | `src/DoiT/Models/CloudflowListResponse.cs` |
| `ListCloudflowsError` | `src/DoiT/Errors/ListCloudflowsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### RefineCloudFlow

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `RefineCloudFlow(RefineCloudFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`, `Body`
- **Returns**: `IAsyncEnumerable<string>`
- **Error**: `ApiException<RefineCloudFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 406, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefineCloudFlowRequest` | `src/DoiT/Requests/CloudFlowApi/RefineCloudFlowRequest.cs` |
| `CloudFlowRefineRequest` | `src/DoiT/Models/CloudFlowRefineRequest.cs` |
| `RefineCloudFlowError` | `src/DoiT/Errors/RefineCloudFlowError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### StopCloudflowFlow

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `StopCloudflowFlow(StopCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`
- **Returns**: `CloudflowRunSummary`
- **Error**: `ApiException<StopCloudflowFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopCloudflowFlowRequest` | `src/DoiT/Requests/CloudFlowApi/StopCloudflowFlowRequest.cs` |
| `CloudflowRunSummary` | `src/DoiT/Models/CloudflowRunSummary.cs` |
| `StopCloudflowFlowError` | `src/DoiT/Errors/StopCloudflowFlowError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### TestRunCloudflowFlow

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `TestRunCloudflowFlow(TestRunCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`, `IdempotencyKey`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `CloudflowRunSummary`
- **Error**: `ApiException<TestRunCloudflowFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 500] · `TryGetCloudflowTestRunValidation([NotNullWhen(true)] out CloudflowTestRunValidation? value)` [422] · `TryGetError([NotNullWhen(true)] out Error? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TestRunCloudflowFlowRequest` | `src/DoiT/Requests/CloudFlowApi/TestRunCloudflowFlowRequest.cs` |
| `CloudflowRunSummary` | `src/DoiT/Models/CloudflowRunSummary.cs` |
| `TestRunCloudflowFlowError` | `src/DoiT/Errors/TestRunCloudflowFlowError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `CloudflowTestRunValidation` | `src/DoiT/Models/CloudflowTestRunValidation.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### TriggerCloudflowFlow

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `TriggerCloudflowFlow(TriggerCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`
- **Returns**: `CloudflowRunSummary`
- **Error**: `ApiException<TriggerCloudflowFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 422, 500] · `TryGetCloudflowV1FlowsActionsTrigger409Error1([NotNullWhen(true)] out CloudflowV1FlowsActionsTrigger409Error1? value)` [409] · `TryGetError([NotNullWhen(true)] out Error? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerCloudflowFlowRequest` | `src/DoiT/Requests/CloudFlowApi/TriggerCloudflowFlowRequest.cs` |
| `CloudflowRunSummary` | `src/DoiT/Models/CloudflowRunSummary.cs` |
| `TriggerCloudflowFlowError` | `src/DoiT/Errors/TriggerCloudflowFlowError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `CloudflowV1FlowsActionsTrigger409Error1` | `src/DoiT/Models/CloudflowV1FlowsActionsTrigger409Error1.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### TriggerCloudflowWebhook

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `TriggerCloudflowWebhook(TriggerCloudflowWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`, `Body`
- **Returns**: `CloudflowV1TriggerResponse`
- **Error**: `ApiException<TriggerCloudflowWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerCloudflowWebhookRequest` | `src/DoiT/Requests/CloudFlowApi/TriggerCloudflowWebhookRequest.cs` |
| `CloudflowV1TriggerResponse` | `src/DoiT/Models/CloudflowV1TriggerResponse.cs` |
| `TriggerCloudflowWebhookError` | `src/DoiT/Errors/TriggerCloudflowWebhookError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

