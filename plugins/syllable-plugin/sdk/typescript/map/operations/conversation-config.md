<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationConfig — operations

Accessor: `client.conversationConfig` · Source: `src/resources/conversation-config.ts` · 2 operations · Request and error types: namespace `ConversationConfig`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBridgePhrasesConfig

- **Signature**: `getBridgePhrasesConfig(request: ConversationConfig.GetBridgePhrasesConfigRequest, options?: RequestOptions): ApiPromise<BridgePhrasesConfig, ConversationConfig.GetBridgePhrasesConfigError>`
- **Wire**: `GET /api/v1/conversation-config/bridges`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BridgePhrasesConfig`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ConversationConfig.GetBridgePhrasesConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationConfig.GetBridgePhrasesConfigRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `query` | `agent_id` | `AgentId3` | no |
| `toolName` | `query` | `tool_name` | `ToolName1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentId3` | `agentId3Schema` | `src/models/unions/agent-id3.ts` |
| `ToolName1` | `toolName1Schema` | `src/models/unions/tool-name1.ts` |
| `BridgePhrasesConfig` | `bridgePhrasesConfigSchema` | `src/models/bridge-phrases-config.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateBridgePhrasesConfig

- **Signature**: `updateBridgePhrasesConfig(request: ConversationConfig.UpdateBridgePhrasesConfigRequest, options?: RequestOptions): ApiPromise<BridgePhrasesConfig, ConversationConfig.UpdateBridgePhrasesConfigError>`
- **Wire**: `PUT /api/v1/conversation-config/bridges`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BridgePhrasesConfig`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ConversationConfig.UpdateBridgePhrasesConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationConfig.UpdateBridgePhrasesConfigRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `query` | `agent_id` | `AgentId4` | no |
| `toolName` | `query` | `tool_name` | `ToolName2` | no |
| `body` | `body` | — | `BridgePhrasesConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentId4` | `agentId4Schema` | `src/models/unions/agent-id4.ts` |
| `ToolName2` | `toolName2Schema` | `src/models/unions/tool-name2.ts` |
| `BridgePhrasesConfig` | `bridgePhrasesConfigSchema` | `src/models/bridge-phrases-config.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

