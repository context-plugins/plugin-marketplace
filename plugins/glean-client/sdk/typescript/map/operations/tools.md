<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tools — operations

Accessor: `client.tools` · Source: `src/resources/tools.ts` · 7 operations · Request and error types: namespace `Tools`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### executeTheSpecifiedTool

- **Signature**: `executeTheSpecifiedTool(request: Tools.ExecuteTheSpecifiedToolRequest, options?: RequestOptions): ApiPromise<ToolsCallResponse, Tools.ExecuteTheSpecifiedToolError>`
- **Wire**: `POST /rest/api/v1/tools/call`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ToolsCallResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Tools.ExecuteTheSpecifiedToolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tools.ExecuteTheSpecifiedToolRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ToolsCallRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ToolsCallRequest` | `toolsCallRequestSchema` | `src/models/tools-call-request.ts` |
| `ToolsCallResponse` | `toolsCallResponseSchema` | `src/models/tools-call-response.ts` |

### listAvailableTools

- **Signature**: `listAvailableTools(request: Tools.ListAvailableToolsRequest, options?: RequestOptions): ApiPromise<ToolsListResponse, Tools.ListAvailableToolsError>`
- **Wire**: `GET /rest/api/v1/tools/list`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ToolsListResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Tools.ListAvailableToolsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tools.ListAvailableToolsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `toolNames` | `query` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ToolsListResponse` | `toolsListResponseSchema` | `src/models/tools-list-response.ts` |

### authorizeActionPack

- **Signature**: `authorizeActionPack(request: Tools.AuthorizeActionPackRequestParams, options?: RequestOptions): ApiPromise<AuthorizeActionPackResponse, Tools.AuthorizeActionPackError>`
- **Wire**: `POST /rest/api/v1/actions/actionpack/{actionPackId}/auth`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizeActionPackResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Tools.AuthorizeActionPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tools.AuthorizeActionPackRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `actionPackId` | `path` | `string` | yes |
| `body` | `body` | `AuthorizeActionPackRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizeActionPackRequest` | `authorizeActionPackRequestSchema` | `src/models/authorize-action-pack-request.ts` |
| `AuthorizeActionPackResponse` | `authorizeActionPackResponseSchema` | `src/models/authorize-action-pack-response.ts` |

### authorizeToolServer

- **Signature**: `authorizeToolServer(request: Tools.AuthorizeToolServerRequestParams, options?: RequestOptions): ApiPromise<AuthorizeToolServerResponse, Tools.AuthorizeToolServerError>`
- **Wire**: `POST /rest/api/v1/tool-servers/{serverId}/auth`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizeToolServerResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Tools.AuthorizeToolServerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tools.AuthorizeToolServerRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serverId` | `path` | `string` | yes |
| `body` | `body` | `AuthorizeToolServerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizeToolServerRequest` | `authorizeToolServerRequestSchema` | `src/models/authorize-tool-server-request.ts` |
| `AuthorizeToolServerResponse` | `authorizeToolServerResponseSchema` | `src/models/authorize-tool-server-response.ts` |

### getActionPackAuthStatus

- **Signature**: `getActionPackAuthStatus(request: Tools.GetActionPackAuthStatusRequest, options?: RequestOptions): ApiPromise<ActionPackAuthStatusResponse, Tools.GetActionPackAuthStatusError>`
- **Wire**: `GET /rest/api/v1/actions/actionpack/{actionPackId}/auth`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ActionPackAuthStatusResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Tools.GetActionPackAuthStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tools.GetActionPackAuthStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `actionPackId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActionPackAuthStatusResponse` | `actionPackAuthStatusResponseSchema` | `src/models/action-pack-auth-status-response.ts` |

### getToolServerAuthStatus

- **Signature**: `getToolServerAuthStatus(request: Tools.GetToolServerAuthStatusRequest, options?: RequestOptions): ApiPromise<ToolServerAuthStatusResponse, Tools.GetToolServerAuthStatusError>`
- **Wire**: `GET /rest/api/v1/tool-servers/{serverId}/auth`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ToolServerAuthStatusResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Tools.GetToolServerAuthStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tools.GetToolServerAuthStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serverId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ToolServerAuthStatusResponse` | `toolServerAuthStatusResponseSchema` | `src/models/tool-server-auth-status-response.ts` |

### getToolServerTools

- **Signature**: `getToolServerTools(request: Tools.GetToolServerToolsRequest, options?: RequestOptions): ApiPromise<ToolDefinitionsResponse, Tools.GetToolServerToolsError>`
- **Wire**: `GET /rest/api/v1/tool-servers/{serverId}/tools`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ToolDefinitionsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Tools.GetToolServerToolsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tools.GetToolServerToolsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serverId` | `path` | `string` | yes |
| `toolNames` | `query` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ToolDefinitionsResponse` | `toolDefinitionsResponseSchema` | `src/models/tool-definitions-response.ts` |

