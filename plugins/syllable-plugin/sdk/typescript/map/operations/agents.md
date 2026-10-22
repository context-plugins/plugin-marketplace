<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `src/resources/agents.ts` · 9 operations · Request and error types: namespace `Agents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### agentCreate

- **Signature**: `agentCreate(request: Agents.AgentCreateRequest, options?: RequestOptions): ApiPromise<AgentResponse, Agents.AgentCreateError>`
- **Wire**: `POST /api/v1/agents/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Agents.AgentCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.AgentCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AgentCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentCreate` | `agentCreateSchema` | `src/models/agent-create.ts` |
| `AgentResponse` | `agentResponseSchema` | `src/models/agent-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### agentDelete

- **Signature**: `agentDelete(request: Agents.AgentDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Agents.AgentDeleteError>`
- **Wire**: `DELETE /api/v1/agents/{agent_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Agents.AgentDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.AgentDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### agentGetAvailableSttProviders

- **Signature**: `agentGetAvailableSttProviders(request: Agents.AgentGetAvailableSttProvidersRequest, options?: RequestOptions): ApiPromise<SupportedSttProvider[], Agents.AgentGetAvailableSttProvidersError>`
- **Wire**: `GET /api/v1/agents/stt/available`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportedSttProvider[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Agents.AgentGetAvailableSttProvidersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.AgentGetAvailableSttProvidersRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `selectedProvider` | `query` | `selected_provider` | `SelectedProvider` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SelectedProvider` | `selectedProviderSchema` | `src/models/unions/selected-provider.ts` |
| `SupportedSttProvider` | `supportedSttProviderSchema` | `src/models/supported-stt-provider.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### agentGetAvailableVoices

- **Signature**: `agentGetAvailableVoices(request: Agents.AgentGetAvailableVoicesRequest, options?: RequestOptions): ApiPromise<AgentVoice[], Agents.AgentGetAvailableVoicesError>`
- **Wire**: `GET /api/v1/agents/voices/available`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentVoice[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Agents.AgentGetAvailableVoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.AgentGetAvailableVoicesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `selectedVoice` | `query` | `selected_voice` | `SelectedVoice` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SelectedVoice` | `selectedVoiceSchema` | `src/models/unions/selected-voice.ts` |
| `AgentVoice` | `agentVoiceSchema` | `src/models/agent-voice.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### agentGetById

- **Signature**: `agentGetById(request: Agents.AgentGetByIdRequest, options?: RequestOptions): ApiPromise<AgentResponse, Agents.AgentGetByIdError>`
- **Wire**: `GET /api/v1/agents/{agent_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Agents.AgentGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.AgentGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentResponse` | `agentResponseSchema` | `src/models/agent-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### agentList

- **Signature**: `agentList(request: Agents.AgentListRequest, options?: RequestOptions): ApiPromise<ListResponseAgentResponse, Agents.AgentListError>`
- **Wire**: `GET /api/v1/agents/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseAgentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Agents.AgentListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.AgentListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `AgentProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy3` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `AgentProperties` | `agentPropertiesSchema` | `src/models/agent-properties.ts` |
| `OrderBy3` | `orderBy3Schema` | `src/models/unions/order-by3.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseAgentResponse` | `listResponseAgentResponseSchema` | `src/models/list-response-agent-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### agentListActiveLabels

- **Signature**: `agentListActiveLabels(options?: RequestOptions): ApiPromise<string[], ApiError>`
- **Wire**: `GET /api/v1/agents/labels`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### agentUpdate

- **Signature**: `agentUpdate(request: Agents.AgentUpdateRequest, options?: RequestOptions): ApiPromise<AgentResponse, Agents.AgentUpdateError>`
- **Wire**: `PUT /api/v1/agents/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Agents.AgentUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.AgentUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AgentUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentUpdate` | `agentUpdateSchema` | `src/models/agent-update.ts` |
| `AgentResponse` | `agentResponseSchema` | `src/models/agent-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### postCardClickEvent

- **Signature**: `postCardClickEvent(request: Agents.PostCardClickEventRequest, options?: RequestOptions): ApiPromise<CardClickResponse, Agents.PostCardClickEventError>`
- **Wire**: `POST /api/v1/agents/test/{test_id}/card-click`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CardClickResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Agents.PostCardClickEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.PostCardClickEventRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `testId` | `path` | `test_id` | `string` | yes |
| `body` | `body` | — | `CardClickRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardClickRequest` | `cardClickRequestSchema` | `src/models/card-click-request.ts` |
| `CardClickResponse` | `cardClickResponseSchema` | `src/models/card-click-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

