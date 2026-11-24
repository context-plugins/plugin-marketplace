<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommandExecutionApi — operations

Accessor: `client.commandExecutionApi` · Source: `src/resources/command-execution-api.ts` · 3 operations · Request and error types: namespace `CommandExecutionApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchGetCommandExecutions

- **Signature**: `batchGetCommandExecutions(request: CommandExecutionApi.BatchGetCommandExecutionsRequest, options?: RequestOptions): ApiPromise<undefined, CommandExecutionApi.BatchGetCommandExecutionsError>`
- **Wire**: `POST /#BatchGetCommandExecutions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `CommandExecutionApi.BatchGetCommandExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommandExecutionApi.BatchGetCommandExecutionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildCommandExecutionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildCommandExecutionApi` | `xAmzTargetAwsCodeBuildCommandExecutionApiSchema` | `src/models/xamz-target-aws-code-build-command-execution-api.ts` |

### listCommandExecutionsForSandbox

- **Signature**: `listCommandExecutionsForSandbox(request: CommandExecutionApi.ListCommandExecutionsForSandboxRequest, options?: RequestOptions): ApiPromise<undefined, CommandExecutionApi.ListCommandExecutionsForSandboxError>`
- **Wire**: `POST /#ListCommandExecutionsForSandbox`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `CommandExecutionApi.ListCommandExecutionsForSandboxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommandExecutionApi.ListCommandExecutionsForSandboxRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCodeBuildCommandExecutionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCodeBuildCommandExecutionApi` | `xAmzTarget1AwsCodeBuildCommandExecutionApiSchema` | `src/models/xamz-target1-aws-code-build-command-execution-api.ts` |

### startCommandExecution

- **Signature**: `startCommandExecution(request: CommandExecutionApi.StartCommandExecutionRequest, options?: RequestOptions): ApiPromise<undefined, CommandExecutionApi.StartCommandExecutionError>`
- **Wire**: `POST /#StartCommandExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `CommandExecutionApi.StartCommandExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommandExecutionApi.StartCommandExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCodeBuildCommandExecutionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCodeBuildCommandExecutionApi` | `xAmzTarget2AwsCodeBuildCommandExecutionApiSchema` | `src/models/xamz-target2-aws-code-build-command-execution-api.ts` |

