<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bot — operations

Accessor: `client.Bot` · Source: `src/SalesforceServiceCloud/Api/Bot.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ContinueSession

- **Auth**: `options.ChatbotAuthAuthorizationCode` OR `options.ChatbotAuthImplicit` OR `options.JwtBearer`
- **Signature**: `ContinueSession(ContinueSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `XOrgId`, `Body`
- **Returns**: `ChatMessageResponseEnvelope`
- **Error**: `ApiException<ContinueSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 422, 423, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContinueSessionRequest` | `src/SalesforceServiceCloud/Requests/Bot/ContinueSessionRequest.cs` |
| `ChatMessageEnvelope` | `src/SalesforceServiceCloud/Models/ChatMessageEnvelope.cs` |
| `ChatMessageResponseEnvelope` | `src/SalesforceServiceCloud/Models/ChatMessageResponseEnvelope.cs` |
| `ContinueSessionError` | `src/SalesforceServiceCloud/Errors/ContinueSessionError.cs` |
| `Error` | `src/SalesforceServiceCloud/Models/Error.cs` |

### EndSession

- **Auth**: `options.ChatbotAuthAuthorizationCode` OR `options.ChatbotAuthImplicit` OR `options.JwtBearer`
- **Signature**: `EndSession(EndSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `XOrgId`, `XSessionEndReason`
- **Returns**: `ChatMessageResponseEnvelope`
- **Error**: `ApiException<EndSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 422, 423, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EndSessionRequest` | `src/SalesforceServiceCloud/Requests/Bot/EndSessionRequest.cs` |
| `EndSessionReason` | `src/SalesforceServiceCloud/Models/Enums/EndSessionReason.cs` |
| `ChatMessageResponseEnvelope` | `src/SalesforceServiceCloud/Models/ChatMessageResponseEnvelope.cs` |
| `EndSessionError` | `src/SalesforceServiceCloud/Errors/EndSessionError.cs` |
| `Error` | `src/SalesforceServiceCloud/Models/Error.cs` |

### StartSession

- **Auth**: `options.ChatbotAuthAuthorizationCode` OR `options.ChatbotAuthImplicit` OR `options.JwtBearer`
- **Signature**: `StartSession(StartSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `XOrgId`, `Body`
- **Returns**: `ResponseEnvelope`
- **Error**: `ApiException<StartSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 422, 423, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSessionRequest` | `src/SalesforceServiceCloud/Requests/Bot/StartSessionRequest.cs` |
| `InitMessageEnvelope` | `src/SalesforceServiceCloud/Models/InitMessageEnvelope.cs` |
| `ResponseEnvelope` | `src/SalesforceServiceCloud/Models/ResponseEnvelope.cs` |
| `StartSessionError` | `src/SalesforceServiceCloud/Errors/StartSessionError.cs` |
| `Error` | `src/SalesforceServiceCloud/Models/Error.cs` |

