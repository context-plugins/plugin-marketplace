<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitor — operations

Accessor: `client.monitor` · Source: `src/resources/monitor.ts` · 11 operations · Request and error types: namespace `Monitor`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloro`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGoogleProduct

- **Signature**: `getGoogleProduct(request: Monitor.GetGoogleProductRequest, options?: RequestOptions): ApiPromise<GoogleProductResponse, Monitor.GetGoogleProductError>`
- **Wire**: `POST /v1/monitor/google/product`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleProductResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.GetGoogleProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"notFoundError"` [404] `NotFoundError` · `"notFoundError2"` [410] `NotFoundError` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"externalServiceError"` [502] `ExternalServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.GetGoogleProductRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GoogleProductRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleProductRequest` | `googleProductRequestSchema` | `src/models/google-product-request.ts` |
| `GoogleProductResponse` | `googleProductResponseSchema` | `src/models/google-product-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `NotFoundError` | `notFoundErrorSchema` | `src/models/not-found-error.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |
| `ExternalServiceError` | `externalServiceErrorSchema` | `src/models/external-service-error.ts` |

### monitorAiMode

- **Signature**: `monitorAiMode(request: Monitor.MonitorAiModeRequest, options?: RequestOptions): ApiPromise<AiModeMonitorResponse, Monitor.MonitorAiModeError>`
- **Wire**: `POST /v1/monitor/aimode`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AiModeMonitorResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.MonitorAiModeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.MonitorAiModeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AiModeMonitorRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiModeMonitorRequest2` | `aiModeMonitorRequest2Schema` | `src/models/unions/ai-mode-monitor-request2.ts` |
| `AiModeMonitorResponse` | `aiModeMonitorResponseSchema` | `src/models/ai-mode-monitor-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### monitorBingAiMode

- **Signature**: `monitorBingAiMode(request: Monitor.MonitorBingAiModeRequest, options?: RequestOptions): ApiPromise<BingAiModeMonitorResponse, Monitor.MonitorBingAiModeError>`
- **Wire**: `POST /v1/monitor/bing/aimode`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BingAiModeMonitorResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.MonitorBingAiModeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.MonitorBingAiModeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BingAiModeMonitorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BingAiModeMonitorRequest` | `bingAiModeMonitorRequestSchema` | `src/models/bing-ai-mode-monitor-request.ts` |
| `BingAiModeMonitorResponse` | `bingAiModeMonitorResponseSchema` | `src/models/bing-ai-mode-monitor-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### monitorChatgpt

- **Signature**: `monitorChatgpt(request: Monitor.MonitorChatgptRequest, options?: RequestOptions): ApiPromise<ChatGptMonitorResponse, Monitor.MonitorChatgptError>`
- **Wire**: `POST /v1/monitor/chatgpt`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatGptMonitorResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.MonitorChatgptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.MonitorChatgptRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChatGptMonitorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChatGptMonitorRequest` | `chatGptMonitorRequestSchema` | `src/models/chat-gpt-monitor-request.ts` |
| `ChatGptMonitorResponse` | `chatGptMonitorResponseSchema` | `src/models/chat-gpt-monitor-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### monitorCopilot

- **Signature**: `monitorCopilot(request: Monitor.MonitorCopilotRequest, options?: RequestOptions): ApiPromise<CopilotMonitorResponse, Monitor.MonitorCopilotError>`
- **Wire**: `POST /v1/monitor/copilot`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CopilotMonitorResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.MonitorCopilotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.MonitorCopilotRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CopilotMonitorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CopilotMonitorRequest` | `copilotMonitorRequestSchema` | `src/models/copilot-monitor-request.ts` |
| `CopilotMonitorResponse` | `copilotMonitorResponseSchema` | `src/models/copilot-monitor-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### monitorGemini

- **Signature**: `monitorGemini(request: Monitor.MonitorGeminiRequest, options?: RequestOptions): ApiPromise<GeminiMonitorResponse, Monitor.MonitorGeminiError>`
- **Wire**: `POST /v1/monitor/gemini`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GeminiMonitorResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.MonitorGeminiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.MonitorGeminiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GeminiMonitorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeminiMonitorRequest` | `geminiMonitorRequestSchema` | `src/models/gemini-monitor-request.ts` |
| `GeminiMonitorResponse` | `geminiMonitorResponseSchema` | `src/models/gemini-monitor-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### monitorGoogle

- **Signature**: `monitorGoogle(request: Monitor.MonitorGoogleRequest, options?: RequestOptions): ApiPromise<GoogleMonitorResponse, Monitor.MonitorGoogleError>`
- **Wire**: `POST /v1/monitor/google`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleMonitorResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.MonitorGoogleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.MonitorGoogleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GoogleMonitorRequest3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleMonitorRequest3` | `googleMonitorRequest3Schema` | `src/models/unions/google-monitor-request3.ts` |
| `GoogleMonitorResponse` | `googleMonitorResponseSchema` | `src/models/google-monitor-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### monitorGoogleNews

- **Signature**: `monitorGoogleNews(request: Monitor.MonitorGoogleNewsRequest, options?: RequestOptions): ApiPromise<GoogleNewsMonitorResponse, Monitor.MonitorGoogleNewsError>`
- **Wire**: `POST /v1/monitor/google/news`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleNewsMonitorResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.MonitorGoogleNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.MonitorGoogleNewsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GoogleNewsMonitorRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleNewsMonitorRequest2` | `googleNewsMonitorRequest2Schema` | `src/models/unions/google-news-monitor-request2.ts` |
| `GoogleNewsMonitorResponse` | `googleNewsMonitorResponseSchema` | `src/models/google-news-monitor-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### monitorGrok

- **Signature**: `monitorGrok(request: Monitor.MonitorGrokRequest, options?: RequestOptions): ApiPromise<GrokMonitorResponse, Monitor.MonitorGrokError>`
- **Wire**: `POST /v1/monitor/grok`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GrokMonitorResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.MonitorGrokError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.MonitorGrokRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GrokMonitorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrokMonitorRequest` | `grokMonitorRequestSchema` | `src/models/grok-monitor-request.ts` |
| `GrokMonitorResponse` | `grokMonitorResponseSchema` | `src/models/grok-monitor-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### monitorPerplexity

- **Signature**: `monitorPerplexity(request: Monitor.MonitorPerplexityRequest, options?: RequestOptions): ApiPromise<PerplexityMonitorResponse, Monitor.MonitorPerplexityError>`
- **Wire**: `POST /v1/monitor/perplexity`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PerplexityMonitorResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.MonitorPerplexityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"forbiddenErrorCloroDevMonitorApi"` [403] `ForbiddenErrorCloroDevMonitorApi` · `"concurrentLimitError"` [429] `ConcurrentLimitError` · `"canceledError"` [499] `CanceledError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.MonitorPerplexityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PerplexityMonitorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PerplexityMonitorRequest` | `perplexityMonitorRequestSchema` | `src/models/perplexity-monitor-request.ts` |
| `PerplexityMonitorResponse` | `perplexityMonitorResponseSchema` | `src/models/perplexity-monitor-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `ForbiddenErrorCloroDevMonitorApi` | `forbiddenErrorCloroDevMonitorApiSchema` | `src/models/forbidden-error-cloro-dev-monitor-api.ts` |
| `ConcurrentLimitError` | `concurrentLimitErrorSchema` | `src/models/concurrent-limit-error.ts` |
| `CanceledError` | `canceledErrorSchema` | `src/models/canceled-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### resolveGoogleGoto

- **Signature**: `resolveGoogleGoto(request: Monitor.ResolveGoogleGotoRequest, options?: RequestOptions): ApiPromise<GoogleGotoResponse, Monitor.ResolveGoogleGotoError>`
- **Wire**: `POST /v1/monitor/google/goto`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleGotoResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Monitor.ResolveGoogleGotoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevMonitorApi"` [400] `ValidationErrorCloroDevMonitorApi` · `"authenticationErrorCloroDevMonitorApi"` [401] `AuthenticationErrorCloroDevMonitorApi` · `"rateLimitError"` [429] `RateLimitError` · `"internalError"` [500] `InternalError` · `"externalServiceError"` [502] `ExternalServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.ResolveGoogleGotoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GoogleGotoRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleGotoRequest` | `googleGotoRequestSchema` | `src/models/google-goto-request.ts` |
| `GoogleGotoResponse` | `googleGotoResponseSchema` | `src/models/google-goto-response.ts` |
| `ValidationErrorCloroDevMonitorApi` | `validationErrorCloroDevMonitorApiSchema` | `src/models/validation-error-cloro-dev-monitor-api.ts` |
| `AuthenticationErrorCloroDevMonitorApi` | `authenticationErrorCloroDevMonitorApiSchema` | `src/models/authentication-error-cloro-dev-monitor-api.ts` |
| `RateLimitError` | `rateLimitErrorSchema` | `src/models/rate-limit-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |
| `ExternalServiceError` | `externalServiceErrorSchema` | `src/models/external-service-error.ts` |

