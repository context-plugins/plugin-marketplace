<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `src/resources/agents.ts` · 8 operations · Request and error types: namespace `Agents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### createAgent

- **Signature**: `createAgent(request: Agents.CreateAgentRequest, options?: RequestOptions): ApiPromise<WorkflowResult, Agents.CreateAgentError>`
- **Wire**: `POST /rest/api/v1/agents`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkflowResult`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Agents.CreateAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.CreateAgentRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `CreateWorkflowRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateWorkflowRequest` | `createWorkflowRequestSchema` | `src/models/create-workflow-request.ts` |
| `WorkflowResult` | `workflowResultSchema` | `src/models/workflow-result.ts` |

### createAndStreamRun

- **Signature**: `createAndStreamRun(request: Agents.CreateAndStreamRunRequest, options?: RequestOptions): ApiPromise<EventStream<string>, Agents.CreateAndStreamRunError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /rest/api/v1/agents/runs/stream`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<string>` — `text/event-stream`, resolved at the response headers and read one `string` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` is its plain text, whatever the event is named. The stream ends when the server closes it
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Agents.CreateAndStreamRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] `string` · `"error409"` [409] `string` · `"unauthorizedAgentToolsError"` [422] `UnauthorizedAgentToolsError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.CreateAndStreamRunRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AgentRunCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentRunCreate` | `agentRunCreateSchema` | `src/models/agent-run-create.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `UnauthorizedAgentToolsError` | `unauthorizedAgentToolsErrorSchema` | `src/models/unauthorized-agent-tools-error.ts` |

### createAndWaitRun

- **Signature**: `createAndWaitRun(request: Agents.CreateAndWaitRunRequest, options?: RequestOptions): ApiPromise<AgentRunWaitResponse, Agents.CreateAndWaitRunError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /rest/api/v1/agents/runs/wait`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentRunWaitResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Agents.CreateAndWaitRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"unauthorizedAgentToolsError"` [422] `UnauthorizedAgentToolsError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.CreateAndWaitRunRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AgentRunCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentRunCreate` | `agentRunCreateSchema` | `src/models/agent-run-create.ts` |
| `AgentRunWaitResponse` | `agentRunWaitResponseSchema` | `src/models/agent-run-wait-response.ts` |
| `UnauthorizedAgentToolsError` | `unauthorizedAgentToolsErrorSchema` | `src/models/unauthorized-agent-tools-error.ts` |

### editAgent

- **Signature**: `editAgent(request: Agents.EditAgentRequest, options?: RequestOptions): ApiPromise<undefined, Agents.EditAgentError>`
- **Wire**: `POST /rest/api/v1/agents/{agent_id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Agents.EditAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] `string` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.EditAgentRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `EditWorkflowRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EditWorkflowRequest` | `editWorkflowRequestSchema` | `src/models/edit-workflow-request.ts` |

### getAgent

- **Signature**: `getAgent(request: Agents.GetAgentRequest, options?: RequestOptions): ApiPromise<Agent, Agents.GetAgentError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /rest/api/v1/agents/{agent_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Agent`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Agents.GetAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] `string` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.GetAgentRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Agent` | `agentSchema` | `src/models/agent.ts` |

### getAgentSchemas

- **Signature**: `getAgentSchemas(request: Agents.GetAgentSchemasRequest, options?: RequestOptions): ApiPromise<AgentSchemas, Agents.GetAgentSchemasError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /rest/api/v1/agents/{agent_id}/schemas`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentSchemas`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Agents.GetAgentSchemasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] `string` · `"error422"` [422] `string` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.GetAgentSchemasRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentSchemas` | `agentSchemasSchema` | `src/models/agent-schemas.ts` |

### importAgent

- **Signature**: `importAgent(request: Agents.ImportAgentRequestParams, options?: RequestOptions): ApiPromise<ImportAgentResponse, Agents.ImportAgentError>`
- **Wire**: `POST /rest/api/v1/agents/{agent_id}/import`
- **Auth**: `apiToken`
- **Request body**: `multipart/form-data` — every field marked `form`. `bundle` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImportAgentResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Agents.ImportAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] `string` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.ImportAgentRequestParams` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes | — |
| `locale` | `query` | — | `string` | no | — |
| `timezoneOffset` | `query` | — | `number` | no | — |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no | — |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no | — |
| `bundle` | `form` | — | `FileInput` | yes | — |
| `gitCommitSha` | `form` | — | `string` | no | — |
| `gitAuthorId` | `form` | — | `string` | no | — |
| `commitMessage` | `form` | — | `string` | no | — |
| `syncMode` | `form` | — | `ImportAgentSyncMode` | no | — |
| `versionSource` | `form` | — | `VersionSource` | no | `VersionSource.User` |
| `publishedBaselineHash` | `form` | — | `string` | no | — |
| `isDraft` | `form` | — | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImportAgentSyncMode` | `importAgentSyncModeSchema` | `src/models/import-agent-sync-mode.ts` |
| `VersionSource` | `versionSourceSchema` | `src/models/version-source.ts` |
| `ImportAgentResponse` | `importAgentResponseSchema` | `src/models/import-agent-response.ts` |

### searchAgents

- **Signature**: `searchAgents(request: Agents.SearchAgentsRequestParams, options?: RequestOptions): ApiPromise<ResponseSearchAgents, Agents.SearchAgentsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /rest/api/v1/agents/search`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResponseSearchAgents`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Agents.SearchAgentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] `string` · `"error422"` [422] `string` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.SearchAgentsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchAgentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchAgentsRequest` | `searchAgentsRequestSchema` | `src/models/search-agents-request.ts` |
| `ResponseSearchAgents` | `responseSearchAgentsSchema` | `src/models/response-search-agents.ts` |

