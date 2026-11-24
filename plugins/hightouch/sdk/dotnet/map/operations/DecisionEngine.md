<!-- Generated file — do not edit; regenerated with the SDK. -->

# DecisionEngine — operations

Accessor: `client.DecisionEngine` · Source: `src/Hightouch/Api/DecisionEngine.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CloneMessage

- **Auth**: `options.BearerAuth`
- **Signature**: `CloneMessage(CloneMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`, `MessageId`
- **Returns**: `DecisionEngineFlowMessagesCloneResponse`
- **Error**: `ApiException<CloneMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetDecisionEngineErrorResponse([NotNullWhen(true)] out DecisionEngineErrorResponse? value)` [404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetDecisionEngineFlowMessagesCloneResponse1([NotNullWhen(true)] out DecisionEngineFlowMessagesCloneResponse1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloneMessageRequest` | `src/Hightouch/Requests/DecisionEngine/CloneMessageRequest.cs` |
| `DecisionEngineMessageClone` | `src/Hightouch/Models/DecisionEngineMessageClone.cs` |
| `DecisionEngineFlowMessagesCloneResponse` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesCloneResponse.cs` |
| `CloneMessageError` | `src/Hightouch/Errors/CloneMessageError.cs` |
| `DecisionEngineErrorResponse` | `src/Hightouch/Models/DecisionEngineErrorResponse.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `DecisionEngineFlowMessagesCloneResponse1` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesCloneResponse1.cs` |

### CreateMessage

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateMessage(CreateMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`, `Body`
- **Returns**: `DecisionEngineFlowMessagesResponse11`
- **Error**: `ApiException<CreateMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMessageRequest` | `src/Hightouch/Requests/DecisionEngine/CreateMessageRequest.cs` |
| `DecisionEngineMessageCreate` | `src/Hightouch/Models/DecisionEngineMessageCreate.cs` |
| `DecisionEngineFlowMessagesResponse11` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse11.cs` |
| `CreateMessageError` | `src/Hightouch/Errors/CreateMessageError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### DeleteMessage

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteMessage(DeleteMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`, `MessageId`
- **Returns**: `DecisionEngineFlowMessagesResponse13`
- **Error**: `ApiException<DeleteMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetDecisionEngineErrorResponse([NotNullWhen(true)] out DecisionEngineErrorResponse? value)` [404] · `TryGetDecisionEngineFlowMessagesResponse14([NotNullWhen(true)] out DecisionEngineFlowMessagesResponse14? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMessageRequest` | `src/Hightouch/Requests/DecisionEngine/DeleteMessageRequest.cs` |
| `DecisionEngineFlowMessagesResponse13` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse13.cs` |
| `DeleteMessageError` | `src/Hightouch/Errors/DeleteMessageError.cs` |
| `DecisionEngineErrorResponse` | `src/Hightouch/Models/DecisionEngineErrorResponse.cs` |
| `DecisionEngineFlowMessagesResponse14` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse14.cs` |

### GetFlow

- **Auth**: `options.BearerAuth`
- **Signature**: `GetFlow(GetFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`
- **Returns**: `DecisionEngineFlowResponse`
- **Error**: `ApiException<GetFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFlowRequest` | `src/Hightouch/Requests/DecisionEngine/GetFlowRequest.cs` |
| `DecisionEngineFlowResponse` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowResponse.cs` |
| `GetFlowError` | `src/Hightouch/Errors/GetFlowError.cs` |

### GetMessage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMessage(GetMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`, `MessageId`
- **Returns**: `DecisionEngineFlowMessagesResponse11`
- **Error**: `ApiException<GetMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMessageRequest` | `src/Hightouch/Requests/DecisionEngine/GetMessageRequest.cs` |
| `DecisionEngineFlowMessagesResponse11` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse11.cs` |
| `GetMessageError` | `src/Hightouch/Errors/GetMessageError.cs` |

### ListFlows

- **Auth**: `options.BearerAuth`
- **Signature**: `ListFlows(ListFlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `limit` ← `Limit`, `offset` ← `Offset`, `orderBy` ← `OrderBy`
- **Returns**: `DecisionEngineFlowsResponse1`
- **Error**: `ApiException<ListFlowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFlowsRequest` | `src/Hightouch/Requests/DecisionEngine/ListFlowsRequest.cs` |
| `OrderBy` | `src/Hightouch/Models/Enums/OrderBy.cs` |
| `DecisionEngineFlowsResponse1` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowsResponse1.cs` |
| `ListFlowsError` | `src/Hightouch/Errors/ListFlowsError.cs` |

### ListMessages

- **Auth**: `options.BearerAuth`
- **Signature**: `ListMessages(ListMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `DecisionEngineFlowMessagesResponse1`
- **Error**: `ApiException<ListMessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMessagesRequest` | `src/Hightouch/Requests/DecisionEngine/ListMessagesRequest.cs` |
| `DecisionEngineFlowMessagesResponse1` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse1.cs` |
| `ListMessagesError` | `src/Hightouch/Errors/ListMessagesError.cs` |

### RunFlow

- **Auth**: `options.BearerAuth`
- **Signature**: `RunFlow(RunFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`
- **Returns**: `DecisionEngineFlowRunResponse`
- **Error**: `ApiException<RunFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunFlowRequest` | `src/Hightouch/Requests/DecisionEngine/RunFlowRequest.cs` |
| `DecisionEngineFlowRunResponse` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowRunResponse.cs` |
| `RunFlowError` | `src/Hightouch/Errors/RunFlowError.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### UpdateMessage

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateMessage(UpdateMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FlowId`, `MessageId`, `Body`
- **Returns**: `DecisionEngineFlowMessagesResponse11`
- **Error**: `ApiException<UpdateMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMessageRequest` | `src/Hightouch/Requests/DecisionEngine/UpdateMessageRequest.cs` |
| `DecisionEngineMessageUpdate` | `src/Hightouch/Models/DecisionEngineMessageUpdate.cs` |
| `DecisionEngineFlowMessagesResponse11` | `src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse11.cs` |
| `UpdateMessageError` | `src/Hightouch/Errors/UpdateMessageError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

