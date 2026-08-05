# Workflows — operations

Accessor: `client.Workflows` · Source: `Api/Workflows.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### WorkflowsStepCompleted
- **HTTP**: `GET /workflows.stepCompleted` (Default (slack))
- **Notes**: Indicate that an app's step in a workflow completed execution.
- **Signature**: `WorkflowsStepCompleted(string workflowStepExecuteId, string? outputs, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `outputs` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `workflow_step_execute_id` ← `workflowStepExecuteId`, `outputs` ← `outputs`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### WorkflowsStepCompleted1
- **HTTP**: `GET /workflows.stepCompleted` (Default (slack))
- **Notes**: Indicate that an app's step in a workflow completed execution.
- **Signature**: `WorkflowsStepCompleted1(string workflowStepExecuteId, string? outputs, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `outputs` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `workflow_step_execute_id` ← `workflowStepExecuteId`, `outputs` ← `outputs`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### WorkflowsStepFailed
- **HTTP**: `GET /workflows.stepFailed` (Default (slack))
- **Notes**: Indicate that an app's step in a workflow failed to execute.
- **Signature**: `WorkflowsStepFailed(string workflowStepExecuteId, string error, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `workflow_step_execute_id` ← `workflowStepExecuteId`, `error` ← `error`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### WorkflowsStepFailed1
- **HTTP**: `GET /workflows.stepFailed` (Default (slack))
- **Notes**: Indicate that an app's step in a workflow failed to execute.
- **Signature**: `WorkflowsStepFailed1(string workflowStepExecuteId, string error, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `workflow_step_execute_id` ← `workflowStepExecuteId`, `error` ← `error`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### WorkflowsUpdateStep
- **HTTP**: `GET /workflows.updateStep` (Default (slack))
- **Notes**: Update the configuration for a workflow extension step.
- **Signature**: `WorkflowsUpdateStep(string workflowStepEditId, string? inputs, string? outputs, string? stepName, string? stepImageUrl, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`inputs` … `stepImageUrl`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `workflow_step_edit_id` ← `workflowStepEditId`, `inputs` ← `inputs`, `outputs` ← `outputs`, `step_name` ← `stepName`, `step_image_url` ← `stepImageUrl`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### WorkflowsUpdateStep1
- **HTTP**: `GET /workflows.updateStep` (Default (slack))
- **Notes**: Update the configuration for a workflow extension step.
- **Signature**: `WorkflowsUpdateStep1(string workflowStepEditId, string? inputs, string? outputs, string? stepName, string? stepImageUrl, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`inputs` … `stepImageUrl`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `workflow_step_edit_id` ← `workflowStepEditId`, `inputs` ← `inputs`, `outputs` ← `outputs`, `step_name` ← `stepName`, `step_image_url` ← `stepImageUrl`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
