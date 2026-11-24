<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitor — operations

Accessor: `client.monitor` · Source: `cloro/apis/monitor.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.monitor.get_google_product

- **Route**: `POST /v1/monitor/google/product`
- **Auth**: `bearer_auth`
- **Signature**: `def get_google_product(body: GoogleProductRequest | GoogleProductRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GoogleProductResponse`
- **Returns (raw)**: `ApiResult[GoogleProductResponse, GetGoogleProductErrorBody]`
- **Error**: `GetGoogleProductErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `NotFoundError` [404, 410] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `ExternalServiceError` [502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleProductRequest` | `cloro/models/google_product_request.py` |
| `GoogleProductRequestDict` | `cloro/models/google_product_request.py` |
| `GoogleProductResponse` | `cloro/models/google_product_response.py` |
| `GetGoogleProductErrorBody` | `cloro/errors/get_google_product_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `NotFoundError` | `cloro/models/not_found_error.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |
| `ExternalServiceError` | `cloro/models/external_service_error.py` |

### client.monitor.monitor_ai_mode

- **Route**: `POST /v1/monitor/aimode`
- **Auth**: `bearer_auth`
- **Signature**: `def monitor_ai_mode(body: AiModeMonitorRequest2 | AiModeMonitorRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AiModeMonitorResponse`
- **Returns (raw)**: `ApiResult[AiModeMonitorResponse, MonitorAiModeErrorBody]`
- **Error**: `MonitorAiModeErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AiModeMonitorRequest2` | `cloro/models/unions/ai_mode_monitor_request2.py` |
| `AiModeMonitorRequest2Dict` | `cloro/models/unions/ai_mode_monitor_request2.py` |
| `AiModeMonitorResponse` | `cloro/models/ai_mode_monitor_response.py` |
| `MonitorAiModeErrorBody` | `cloro/errors/monitor_ai_mode_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.monitor.monitor_bing_ai_mode

- **Route**: `POST /v1/monitor/bing/aimode`
- **Auth**: `bearer_auth`
- **Signature**: `def monitor_bing_ai_mode(body: BingAiModeMonitorRequest | BingAiModeMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BingAiModeMonitorResponse`
- **Returns (raw)**: `ApiResult[BingAiModeMonitorResponse, MonitorBingAiModeErrorBody]`
- **Error**: `MonitorBingAiModeErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BingAiModeMonitorRequest` | `cloro/models/bing_ai_mode_monitor_request.py` |
| `BingAiModeMonitorRequestDict` | `cloro/models/bing_ai_mode_monitor_request.py` |
| `BingAiModeMonitorResponse` | `cloro/models/bing_ai_mode_monitor_response.py` |
| `MonitorBingAiModeErrorBody` | `cloro/errors/monitor_bing_ai_mode_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.monitor.monitor_chatgpt

- **Route**: `POST /v1/monitor/chatgpt`
- **Auth**: `bearer_auth`
- **Signature**: `def monitor_chatgpt(body: ChatGptMonitorRequest | ChatGptMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ChatGptMonitorResponse`
- **Returns (raw)**: `ApiResult[ChatGptMonitorResponse, MonitorChatgptErrorBody]`
- **Error**: `MonitorChatgptErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChatGptMonitorRequest` | `cloro/models/chat_gpt_monitor_request.py` |
| `ChatGptMonitorRequestDict` | `cloro/models/chat_gpt_monitor_request.py` |
| `ChatGptMonitorResponse` | `cloro/models/chat_gpt_monitor_response.py` |
| `MonitorChatgptErrorBody` | `cloro/errors/monitor_chatgpt_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.monitor.monitor_copilot

- **Route**: `POST /v1/monitor/copilot`
- **Auth**: `bearer_auth`
- **Signature**: `def monitor_copilot(body: CopilotMonitorRequest | CopilotMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CopilotMonitorResponse`
- **Returns (raw)**: `ApiResult[CopilotMonitorResponse, MonitorCopilotErrorBody]`
- **Error**: `MonitorCopilotErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CopilotMonitorRequest` | `cloro/models/copilot_monitor_request.py` |
| `CopilotMonitorRequestDict` | `cloro/models/copilot_monitor_request.py` |
| `CopilotMonitorResponse` | `cloro/models/copilot_monitor_response.py` |
| `MonitorCopilotErrorBody` | `cloro/errors/monitor_copilot_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.monitor.monitor_gemini

- **Route**: `POST /v1/monitor/gemini`
- **Auth**: `bearer_auth`
- **Signature**: `def monitor_gemini(body: GeminiMonitorRequest | GeminiMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GeminiMonitorResponse`
- **Returns (raw)**: `ApiResult[GeminiMonitorResponse, MonitorGeminiErrorBody]`
- **Error**: `MonitorGeminiErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeminiMonitorRequest` | `cloro/models/gemini_monitor_request.py` |
| `GeminiMonitorRequestDict` | `cloro/models/gemini_monitor_request.py` |
| `GeminiMonitorResponse` | `cloro/models/gemini_monitor_response.py` |
| `MonitorGeminiErrorBody` | `cloro/errors/monitor_gemini_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.monitor.monitor_google

- **Route**: `POST /v1/monitor/google`
- **Auth**: `bearer_auth`
- **Signature**: `def monitor_google(body: GoogleMonitorRequest3 | GoogleMonitorRequest3Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GoogleMonitorResponse`
- **Returns (raw)**: `ApiResult[GoogleMonitorResponse, MonitorGoogleErrorBody]`
- **Error**: `MonitorGoogleErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleMonitorRequest3` | `cloro/models/unions/google_monitor_request3.py` |
| `GoogleMonitorRequest3Dict` | `cloro/models/unions/google_monitor_request3.py` |
| `GoogleMonitorResponse` | `cloro/models/google_monitor_response.py` |
| `MonitorGoogleErrorBody` | `cloro/errors/monitor_google_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.monitor.monitor_google_news

- **Route**: `POST /v1/monitor/google/news`
- **Auth**: `bearer_auth`
- **Signature**: `def monitor_google_news(body: GoogleNewsMonitorRequest2 | GoogleNewsMonitorRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GoogleNewsMonitorResponse`
- **Returns (raw)**: `ApiResult[GoogleNewsMonitorResponse, MonitorGoogleNewsErrorBody]`
- **Error**: `MonitorGoogleNewsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleNewsMonitorRequest2` | `cloro/models/unions/google_news_monitor_request2.py` |
| `GoogleNewsMonitorRequest2Dict` | `cloro/models/unions/google_news_monitor_request2.py` |
| `GoogleNewsMonitorResponse` | `cloro/models/google_news_monitor_response.py` |
| `MonitorGoogleNewsErrorBody` | `cloro/errors/monitor_google_news_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.monitor.monitor_grok

- **Route**: `POST /v1/monitor/grok`
- **Auth**: `bearer_auth`
- **Signature**: `def monitor_grok(body: GrokMonitorRequest | GrokMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GrokMonitorResponse`
- **Returns (raw)**: `ApiResult[GrokMonitorResponse, MonitorGrokErrorBody]`
- **Error**: `MonitorGrokErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GrokMonitorRequest` | `cloro/models/grok_monitor_request.py` |
| `GrokMonitorRequestDict` | `cloro/models/grok_monitor_request.py` |
| `GrokMonitorResponse` | `cloro/models/grok_monitor_response.py` |
| `MonitorGrokErrorBody` | `cloro/errors/monitor_grok_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.monitor.monitor_perplexity

- **Route**: `POST /v1/monitor/perplexity`
- **Auth**: `bearer_auth`
- **Signature**: `def monitor_perplexity(body: PerplexityMonitorRequest | PerplexityMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PerplexityMonitorResponse`
- **Returns (raw)**: `ApiResult[PerplexityMonitorResponse, MonitorPerplexityErrorBody]`
- **Error**: `MonitorPerplexityErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `ForbiddenErrorCloroDevMonitorApi` [403] · `ConcurrentLimitError` [429] · `CanceledError` [499] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PerplexityMonitorRequest` | `cloro/models/perplexity_monitor_request.py` |
| `PerplexityMonitorRequestDict` | `cloro/models/perplexity_monitor_request.py` |
| `PerplexityMonitorResponse` | `cloro/models/perplexity_monitor_response.py` |
| `MonitorPerplexityErrorBody` | `cloro/errors/monitor_perplexity_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `ForbiddenErrorCloroDevMonitorApi` | `cloro/models/forbidden_error_cloro_dev_monitor_api.py` |
| `ConcurrentLimitError` | `cloro/models/concurrent_limit_error.py` |
| `CanceledError` | `cloro/models/canceled_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.monitor.resolve_google_goto

- **Route**: `POST /v1/monitor/google/goto`
- **Auth**: `bearer_auth`
- **Signature**: `def resolve_google_goto(body: GoogleGotoRequest | GoogleGotoRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GoogleGotoResponse`
- **Returns (raw)**: `ApiResult[GoogleGotoResponse, ResolveGoogleGotoErrorBody]`
- **Error**: `ResolveGoogleGotoErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevMonitorApi` [400] · `AuthenticationErrorCloroDevMonitorApi` [401] · `RateLimitError` [429] · `InternalError` [500] · `ExternalServiceError` [502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleGotoRequest` | `cloro/models/google_goto_request.py` |
| `GoogleGotoRequestDict` | `cloro/models/google_goto_request.py` |
| `GoogleGotoResponse` | `cloro/models/google_goto_response.py` |
| `ResolveGoogleGotoErrorBody` | `cloro/errors/resolve_google_goto_error.py` |
| `ValidationErrorCloroDevMonitorApi` | `cloro/models/validation_error_cloro_dev_monitor_api.py` |
| `AuthenticationErrorCloroDevMonitorApi` | `cloro/models/authentication_error_cloro_dev_monitor_api.py` |
| `RateLimitError` | `cloro/models/rate_limit_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |
| `ExternalServiceError` | `cloro/models/external_service_error.py` |

