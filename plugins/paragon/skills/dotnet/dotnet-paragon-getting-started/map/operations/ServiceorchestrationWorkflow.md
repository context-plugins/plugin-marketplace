# ServiceorchestrationWorkflow — operations

Accessor: `client.ServiceorchestrationWorkflow` · Source: `Api/ServiceorchestrationWorkflow.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### WorkflowServiceDeleteQueueItem
- **HTTP**: `DELETE /service-orchestration/api/v1/orgs/{org_id}/order/customers/{customer_id}/instances/{instance_id}/queue` (Default)
- **Notes**: Delete a queue entry from the workflow queue given the run_id . If no run_id is provided, all the queued workflows for the specified SI will be deleted.
- **Signature**: `WorkflowServiceDeleteQueueItem(string orgId, string customerId, string instanceId, string? runId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `runId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `run_id` ← `runId`
- **Returns**: `object`
- **Error**: `SdkException<WorkflowServiceDeleteQueueItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### WorkflowServiceListQueue
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers/{customer_id}/instances/{instance_id}/queue` (Default)
- **Notes**: List all the queued workflows that are waiting to be executed for an SI . Workflows are queued if other workflows are in progress against the same SI.
- **Signature**: `WorkflowServiceListQueue(string orgId, string customerId, string instanceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<WorkflowServiceListQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
