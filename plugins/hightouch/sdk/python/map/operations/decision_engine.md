<!-- Generated file — do not edit; regenerated with the SDK. -->

# DecisionEngine — operations

Accessor: `client.decision_engine` · Source: `hightouch/apis/decision_engine.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.decision_engine.clone_message

- **Route**: `POST /decision-engine/flow/{flowId}/messages/{messageId}/clone`
- **Auth**: `bearer_auth`
- **Signature**: `def clone_message(flow_id: str, message_id: str, *, body: DecisionEngineMessageClone | DecisionEngineMessageCloneDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`, `message_id`
- **Params**: `flow_id` — path `flowId` · `message_id` — path `messageId` · `body` — JSON body
- **Returns (parsed)**: `DecisionEngineFlowMessagesCloneResponse`
- **Returns (raw)**: `ApiResult[DecisionEngineFlowMessagesCloneResponse, CloneMessageErrorBody]`
- **Error**: `CloneMessageErrorBody` — **Case A (typed)**
- **Error arms**: `DecisionEngineErrorResponse` [404] · `ValidateErrorJson` [422] · `DecisionEngineFlowMessagesCloneResponse1` [500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `DecisionEngineMessageClone` | `hightouch/models/decision_engine_message_clone.py` |
| `DecisionEngineMessageCloneDict` | `hightouch/models/decision_engine_message_clone.py` |
| `DecisionEngineFlowMessagesCloneResponse` | `hightouch/models/unions/decision_engine_flow_messages_clone_response.py` |
| `CloneMessageErrorBody` | `hightouch/errors/clone_message_error.py` |
| `DecisionEngineErrorResponse` | `hightouch/models/decision_engine_error_response.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `DecisionEngineFlowMessagesCloneResponse1` | `hightouch/models/unions/decision_engine_flow_messages_clone_response1.py` |

### client.decision_engine.create_message

- **Route**: `POST /decision-engine/flow/{flowId}/messages`
- **Auth**: `bearer_auth`
- **Signature**: `def create_message(flow_id: str, body: DecisionEngineMessageCreate | DecisionEngineMessageCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`, `body`
- **Params**: `flow_id` — path `flowId` · `body` — JSON body
- **Returns (parsed)**: `DecisionEngineFlowMessagesResponse11`
- **Returns (raw)**: `ApiResult[DecisionEngineFlowMessagesResponse11, CreateMessageErrorBody]`
- **Error**: `CreateMessageErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DecisionEngineMessageCreate` | `hightouch/models/decision_engine_message_create.py` |
| `DecisionEngineMessageCreateDict` | `hightouch/models/decision_engine_message_create.py` |
| `DecisionEngineFlowMessagesResponse11` | `hightouch/models/unions/decision_engine_flow_messages_response11.py` |
| `CreateMessageErrorBody` | `hightouch/errors/create_message_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.decision_engine.delete_message

- **Route**: `DELETE /decision-engine/flow/{flowId}/messages/{messageId}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_message(flow_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`, `message_id`
- **Params**: `flow_id` — path `flowId` · `message_id` — path `messageId`
- **Returns (parsed)**: `DecisionEngineFlowMessagesResponse13`
- **Returns (raw)**: `ApiResult[DecisionEngineFlowMessagesResponse13, DeleteMessageErrorBody]`
- **Error**: `DeleteMessageErrorBody` — **Case A (typed)**
- **Error arms**: `DecisionEngineErrorResponse` [404] · `DecisionEngineFlowMessagesResponse14` [500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `DecisionEngineFlowMessagesResponse13` | `hightouch/models/unions/decision_engine_flow_messages_response13.py` |
| `DeleteMessageErrorBody` | `hightouch/errors/delete_message_error.py` |
| `DecisionEngineErrorResponse` | `hightouch/models/decision_engine_error_response.py` |
| `DecisionEngineFlowMessagesResponse14` | `hightouch/models/unions/decision_engine_flow_messages_response14.py` |

### client.decision_engine.get_flow

- **Route**: `GET /decision-engine/flow/{flowId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_flow(flow_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`
- **Params**: `flow_id` — path `flowId`
- **Returns (parsed)**: `DecisionEngineFlowResponse`
- **Returns (raw)**: `ApiResult[DecisionEngineFlowResponse, GetFlowErrorBody]`
- **Error**: `GetFlowErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DecisionEngineFlowResponse` | `hightouch/models/unions/decision_engine_flow_response.py` |
| `GetFlowErrorBody` | `hightouch/errors/get_flow_error.py` |

### client.decision_engine.get_message

- **Route**: `GET /decision-engine/flow/{flowId}/messages/{messageId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_message(flow_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`, `message_id`
- **Params**: `flow_id` — path `flowId` · `message_id` — path `messageId`
- **Returns (parsed)**: `DecisionEngineFlowMessagesResponse11`
- **Returns (raw)**: `ApiResult[DecisionEngineFlowMessagesResponse11, GetMessageErrorBody]`
- **Error**: `GetMessageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DecisionEngineFlowMessagesResponse11` | `hightouch/models/unions/decision_engine_flow_messages_response11.py` |
| `GetMessageErrorBody` | `hightouch/errors/get_message_error.py` |

### client.decision_engine.list_flows

- **Route**: `GET /decision-engine/flows`
- **Auth**: `bearer_auth`
- **Signature**: `def list_flows(*, name: str | None = None, limit: float | None = 100.0, offset: float | None = 0.0, order_by: OrderByOrStr | None = OrderBy.ID, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `limit` — query · `offset` — query · `order_by` — query `orderBy`
- **Returns (parsed)**: `DecisionEngineFlowsResponse1`
- **Returns (raw)**: `ApiResult[DecisionEngineFlowsResponse1, ListFlowsErrorBody]`
- **Error**: `ListFlowsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderByOrStr` | `hightouch/models/enums/order_by.py` |
| `DecisionEngineFlowsResponse1` | `hightouch/models/unions/decision_engine_flows_response1.py` |
| `ListFlowsErrorBody` | `hightouch/errors/list_flows_error.py` |

### client.decision_engine.list_messages

- **Route**: `GET /decision-engine/flow/{flowId}/messages`
- **Auth**: `bearer_auth`
- **Signature**: `def list_messages(flow_id: str, *, limit: float | None = 100.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`
- **Params**: `flow_id` — path `flowId` · `limit` — query · `offset` — query
- **Returns (parsed)**: `DecisionEngineFlowMessagesResponse1`
- **Returns (raw)**: `ApiResult[DecisionEngineFlowMessagesResponse1, ListMessagesErrorBody]`
- **Error**: `ListMessagesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DecisionEngineFlowMessagesResponse1` | `hightouch/models/unions/decision_engine_flow_messages_response1.py` |
| `ListMessagesErrorBody` | `hightouch/errors/list_messages_error.py` |

### client.decision_engine.run_flow

- **Route**: `POST /decision-engine/flow/{flowId}/run`
- **Auth**: `bearer_auth`
- **Signature**: `def run_flow(flow_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`
- **Params**: `flow_id` — path `flowId`
- **Returns (parsed)**: `DecisionEngineFlowRunResponse`
- **Returns (raw)**: `ApiResult[DecisionEngineFlowRunResponse, RunFlowErrorBody]`
- **Error**: `RunFlowErrorBody` — **Case A (typed)**
- **Error arms**: `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DecisionEngineFlowRunResponse` | `hightouch/models/unions/decision_engine_flow_run_response.py` |
| `RunFlowErrorBody` | `hightouch/errors/run_flow_error.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.decision_engine.update_message

- **Route**: `PATCH /decision-engine/flow/{flowId}/messages/{messageId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_message(flow_id: str, message_id: str, body: DecisionEngineMessageUpdate | DecisionEngineMessageUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `flow_id`, `message_id`, `body`
- **Params**: `flow_id` — path `flowId` · `message_id` — path `messageId` · `body` — JSON body
- **Returns (parsed)**: `DecisionEngineFlowMessagesResponse11`
- **Returns (raw)**: `ApiResult[DecisionEngineFlowMessagesResponse11, UpdateMessageErrorBody]`
- **Error**: `UpdateMessageErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DecisionEngineMessageUpdate` | `hightouch/models/decision_engine_message_update.py` |
| `DecisionEngineMessageUpdateDict` | `hightouch/models/decision_engine_message_update.py` |
| `DecisionEngineFlowMessagesResponse11` | `hightouch/models/unions/decision_engine_flow_messages_response11.py` |
| `UpdateMessageErrorBody` | `hightouch/errors/update_message_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

