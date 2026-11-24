<!-- Generated file — do not edit; regenerated with the SDK. -->

# MonitorApi — operations

Accessor: `client.MonitorApi` · Source: `src/Cloro/Api/MonitorApi.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGoogleProduct

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGoogleProduct(GetGoogleProductRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GoogleProductResponse`
- **Error**: `ApiException<GetGoogleProductError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetNotFoundError([NotNullWhen(true)] out NotFoundError? value)` [404, 410] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetExternalServiceError([NotNullWhen(true)] out ExternalServiceError? value)` [502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGoogleProductRequest` | `src/Cloro/Requests/MonitorApi/GetGoogleProductRequest.cs` |
| `GoogleProductRequest` | `src/Cloro/Models/GoogleProductRequest.cs` |
| `GoogleProductResponse` | `src/Cloro/Models/GoogleProductResponse.cs` |
| `GetGoogleProductError` | `src/Cloro/Errors/GetGoogleProductError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `NotFoundError` | `src/Cloro/Models/NotFoundError.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |
| `ExternalServiceError` | `src/Cloro/Models/ExternalServiceError.cs` |

### MonitorAiMode

- **Auth**: `options.BearerAuth`
- **Signature**: `MonitorAiMode(MonitorAiModeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AiModeMonitorResponse`
- **Error**: `ApiException<MonitorAiModeError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorAiModeRequest` | `src/Cloro/Requests/MonitorApi/MonitorAiModeRequest.cs` |
| `AiModeMonitorRequest2` | `src/Cloro/Models/AnyOf/AiModeMonitorRequest2.cs` |
| `AiModeMonitorResponse` | `src/Cloro/Models/AiModeMonitorResponse.cs` |
| `MonitorAiModeError` | `src/Cloro/Errors/MonitorAiModeError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### MonitorBingAiMode

- **Auth**: `options.BearerAuth`
- **Signature**: `MonitorBingAiMode(MonitorBingAiModeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BingAiModeMonitorResponse`
- **Error**: `ApiException<MonitorBingAiModeError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorBingAiModeRequest` | `src/Cloro/Requests/MonitorApi/MonitorBingAiModeRequest.cs` |
| `BingAiModeMonitorRequest` | `src/Cloro/Models/BingAiModeMonitorRequest.cs` |
| `BingAiModeMonitorResponse` | `src/Cloro/Models/BingAiModeMonitorResponse.cs` |
| `MonitorBingAiModeError` | `src/Cloro/Errors/MonitorBingAiModeError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### MonitorChatgpt

- **Auth**: `options.BearerAuth`
- **Signature**: `MonitorChatgpt(MonitorChatgptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ChatGptMonitorResponse`
- **Error**: `ApiException<MonitorChatgptError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorChatgptRequest` | `src/Cloro/Requests/MonitorApi/MonitorChatgptRequest.cs` |
| `ChatGptMonitorRequest` | `src/Cloro/Models/ChatGptMonitorRequest.cs` |
| `ChatGptMonitorResponse` | `src/Cloro/Models/ChatGptMonitorResponse.cs` |
| `MonitorChatgptError` | `src/Cloro/Errors/MonitorChatgptError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### MonitorCopilot

- **Auth**: `options.BearerAuth`
- **Signature**: `MonitorCopilot(MonitorCopilotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CopilotMonitorResponse`
- **Error**: `ApiException<MonitorCopilotError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorCopilotRequest` | `src/Cloro/Requests/MonitorApi/MonitorCopilotRequest.cs` |
| `CopilotMonitorRequest` | `src/Cloro/Models/CopilotMonitorRequest.cs` |
| `CopilotMonitorResponse` | `src/Cloro/Models/CopilotMonitorResponse.cs` |
| `MonitorCopilotError` | `src/Cloro/Errors/MonitorCopilotError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### MonitorGemini

- **Auth**: `options.BearerAuth`
- **Signature**: `MonitorGemini(MonitorGeminiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GeminiMonitorResponse`
- **Error**: `ApiException<MonitorGeminiError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorGeminiRequest` | `src/Cloro/Requests/MonitorApi/MonitorGeminiRequest.cs` |
| `GeminiMonitorRequest` | `src/Cloro/Models/GeminiMonitorRequest.cs` |
| `GeminiMonitorResponse` | `src/Cloro/Models/GeminiMonitorResponse.cs` |
| `MonitorGeminiError` | `src/Cloro/Errors/MonitorGeminiError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### MonitorGoogle

- **Auth**: `options.BearerAuth`
- **Signature**: `MonitorGoogle(MonitorGoogleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GoogleMonitorResponse`
- **Error**: `ApiException<MonitorGoogleError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorGoogleRequest` | `src/Cloro/Requests/MonitorApi/MonitorGoogleRequest.cs` |
| `GoogleMonitorRequest3` | `src/Cloro/Models/AnyOf/GoogleMonitorRequest3.cs` |
| `GoogleMonitorResponse` | `src/Cloro/Models/GoogleMonitorResponse.cs` |
| `MonitorGoogleError` | `src/Cloro/Errors/MonitorGoogleError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### MonitorGoogleNews

- **Auth**: `options.BearerAuth`
- **Signature**: `MonitorGoogleNews(MonitorGoogleNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GoogleNewsMonitorResponse`
- **Error**: `ApiException<MonitorGoogleNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorGoogleNewsRequest` | `src/Cloro/Requests/MonitorApi/MonitorGoogleNewsRequest.cs` |
| `GoogleNewsMonitorRequest2` | `src/Cloro/Models/AnyOf/GoogleNewsMonitorRequest2.cs` |
| `GoogleNewsMonitorResponse` | `src/Cloro/Models/GoogleNewsMonitorResponse.cs` |
| `MonitorGoogleNewsError` | `src/Cloro/Errors/MonitorGoogleNewsError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### MonitorGrok

- **Auth**: `options.BearerAuth`
- **Signature**: `MonitorGrok(MonitorGrokRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GrokMonitorResponse`
- **Error**: `ApiException<MonitorGrokError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorGrokRequest` | `src/Cloro/Requests/MonitorApi/MonitorGrokRequest.cs` |
| `GrokMonitorRequest` | `src/Cloro/Models/GrokMonitorRequest.cs` |
| `GrokMonitorResponse` | `src/Cloro/Models/GrokMonitorResponse.cs` |
| `MonitorGrokError` | `src/Cloro/Errors/MonitorGrokError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### MonitorPerplexity

- **Auth**: `options.BearerAuth`
- **Signature**: `MonitorPerplexity(MonitorPerplexityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PerplexityMonitorResponse`
- **Error**: `ApiException<MonitorPerplexityError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetForbiddenErrorCloroDevMonitorApi([NotNullWhen(true)] out ForbiddenErrorCloroDevMonitorApi? value)` [403] · `TryGetConcurrentLimitError([NotNullWhen(true)] out ConcurrentLimitError? value)` [429] · `TryGetCanceledError([NotNullWhen(true)] out CanceledError? value)` [499] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorPerplexityRequest` | `src/Cloro/Requests/MonitorApi/MonitorPerplexityRequest.cs` |
| `PerplexityMonitorRequest` | `src/Cloro/Models/PerplexityMonitorRequest.cs` |
| `PerplexityMonitorResponse` | `src/Cloro/Models/PerplexityMonitorResponse.cs` |
| `MonitorPerplexityError` | `src/Cloro/Errors/MonitorPerplexityError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `ForbiddenErrorCloroDevMonitorApi` | `src/Cloro/Models/ForbiddenErrorCloroDevMonitorApi.cs` |
| `ConcurrentLimitError` | `src/Cloro/Models/ConcurrentLimitError.cs` |
| `CanceledError` | `src/Cloro/Models/CanceledError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### ResolveGoogleGoto

- **Auth**: `options.BearerAuth`
- **Signature**: `ResolveGoogleGoto(ResolveGoogleGotoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GoogleGotoResponse`
- **Error**: `ApiException<ResolveGoogleGotoError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevMonitorApi([NotNullWhen(true)] out ValidationErrorCloroDevMonitorApi? value)` [400] · `TryGetAuthenticationErrorCloroDevMonitorApi([NotNullWhen(true)] out AuthenticationErrorCloroDevMonitorApi? value)` [401] · `TryGetRateLimitError([NotNullWhen(true)] out RateLimitError? value)` [429] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetExternalServiceError([NotNullWhen(true)] out ExternalServiceError? value)` [502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResolveGoogleGotoRequest` | `src/Cloro/Requests/MonitorApi/ResolveGoogleGotoRequest.cs` |
| `GoogleGotoRequest` | `src/Cloro/Models/GoogleGotoRequest.cs` |
| `GoogleGotoResponse` | `src/Cloro/Models/GoogleGotoResponse.cs` |
| `ResolveGoogleGotoError` | `src/Cloro/Errors/ResolveGoogleGotoError.cs` |
| `ValidationErrorCloroDevMonitorApi` | `src/Cloro/Models/ValidationErrorCloroDevMonitorApi.cs` |
| `AuthenticationErrorCloroDevMonitorApi` | `src/Cloro/Models/AuthenticationErrorCloroDevMonitorApi.cs` |
| `RateLimitError` | `src/Cloro/Models/RateLimitError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |
| `ExternalServiceError` | `src/Cloro/Models/ExternalServiceError.cs` |

