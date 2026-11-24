<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bot — operations

Accessor: `client.bot` · Source: `src/resources/bot.ts` · 3 operations · Request and error types: namespace `Bot`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `salesforce-service-cloud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### continueSession

- **Signature**: `continueSession(request: Bot.ContinueSessionRequest, options?: RequestOptions): ApiPromise<ChatMessageResponseEnvelope, Bot.ContinueSessionError>`
- **Wire**: `POST /v5.3.0/sessions/{session-id}/messages`
- **Auth**: any of `chatbotAuthAuthorizationCode`, `chatbotAuthImplicit`, `jwtBearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatMessageResponseEnvelope`
- **Error**: `SalesforceServiceCloudError` with `kind: "api"`, an instance of `Bot.ContinueSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"error6"` [423] `Error` · `"error7"` [429] `Error` · `"error8"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bot.ContinueSessionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session-id` | `string` | yes |
| `xOrgId` | `header` | `X-Org-Id` | `string` | yes |
| `xRequestId` | `header` | `X-Request-ID` | `string` | no |
| `xRuntimeCrc` | `header` | `X-Runtime-CRC` | `string` | no |
| `body` | `body` | — | `ChatMessageEnvelope` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChatMessageEnvelope` | `chatMessageEnvelopeSchema` | `src/models/chat-message-envelope.ts` |
| `ChatMessageResponseEnvelope` | `chatMessageResponseEnvelopeSchema` | `src/models/chat-message-response-envelope.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### endSession

- **Signature**: `endSession(request: Bot.EndSessionRequest, options?: RequestOptions): ApiPromise<ChatMessageResponseEnvelope, Bot.EndSessionError>`
- **Wire**: `DELETE /v5.3.0/sessions/{session-id}`
- **Auth**: any of `chatbotAuthAuthorizationCode`, `chatbotAuthImplicit`, `jwtBearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatMessageResponseEnvelope`
- **Error**: `SalesforceServiceCloudError` with `kind: "api"`, an instance of `Bot.EndSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"error6"` [423] `Error` · `"error7"` [429] `Error` · `"error8"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bot.EndSessionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session-id` | `string` | yes |
| `xOrgId` | `header` | `X-Org-Id` | `string` | yes |
| `xSessionEndReason` | `header` | `X-Session-End-Reason` | `EndSessionReason` | yes |
| `xRequestId` | `header` | `X-Request-ID` | `string` | no |
| `xRuntimeCrc` | `header` | `X-Runtime-CRC` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EndSessionReason` | `endSessionReasonSchema` | `src/models/end-session-reason.ts` |
| `ChatMessageResponseEnvelope` | `chatMessageResponseEnvelopeSchema` | `src/models/chat-message-response-envelope.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### startSession

- **Signature**: `startSession(request: Bot.StartSessionRequest, options?: RequestOptions): ApiPromise<ResponseEnvelope, Bot.StartSessionError>`
- **Wire**: `POST /v5.3.0/bots/{bot-id}/sessions`
- **Auth**: any of `chatbotAuthAuthorizationCode`, `chatbotAuthImplicit`, `jwtBearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResponseEnvelope`
- **Error**: `SalesforceServiceCloudError` with `kind: "api"`, an instance of `Bot.StartSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"error6"` [423] `Error` · `"error7"` [429] `Error` · `"error8"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bot.StartSessionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `botId` | `path` | `bot-id` | `string` | yes |
| `xOrgId` | `header` | `X-Org-Id` | `string` | yes |
| `xRequestId` | `header` | `X-Request-ID` | `string` | no |
| `body` | `body` | — | `InitMessageEnvelope` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InitMessageEnvelope` | `initMessageEnvelopeSchema` | `src/models/init-message-envelope.ts` |
| `ResponseEnvelope` | `responseEnvelopeSchema` | `src/models/response-envelope.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

