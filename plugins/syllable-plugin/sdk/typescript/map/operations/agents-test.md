<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentsTest — operations

Accessor: `client.agentsTest` · Source: `src/resources/agents-test.ts` · 1 operation · Request and error types: namespace `AgentsTest`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sendTestMessage

- **Signature**: `sendTestMessage(request: AgentsTest.SendTestMessageRequest, options?: RequestOptions): ApiPromise<TestMessageResponse, AgentsTest.SendTestMessageError>`
- **Wire**: `POST /api/v1/agents/test/messages`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestMessageResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `AgentsTest.SendTestMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentsTest.SendTestMessageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TestMessage` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestMessage` | `testMessageSchema` | `src/models/test-message.ts` |
| `TestMessageResponse` | `testMessageResponseSchema` | `src/models/test-message-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

