<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Postscript/Api/WebhooksApi.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhookSubscription

- **Auth**: `options.Sec0`
- **Signature**: `CreateWebhookSubscription(CreateWebhookSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `JsonElement`
- **Error**: `ApiException<CreateWebhookSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWebhookSubscriptionRequest` | `src/Postscript/Requests/WebhooksApi/CreateWebhookSubscriptionRequest.cs` |
| `ApiV2WebhooksRequest` | `src/Postscript/Models/ApiV2WebhooksRequest.cs` |
| `CreateWebhookSubscriptionError` | `src/Postscript/Errors/CreateWebhookSubscriptionError.cs` |

### DeleteWebhookSubscription

- **Auth**: `options.Sec0`
- **Signature**: `DeleteWebhookSubscription(DeleteWebhookSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteWebhookSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookSubscriptionRequest` | `src/Postscript/Requests/WebhooksApi/DeleteWebhookSubscriptionRequest.cs` |
| `DeleteWebhookSubscriptionError` | `src/Postscript/Errors/DeleteWebhookSubscriptionError.cs` |

### ExampleEvent

- **Auth**: `options.Sec0`
- **Signature**: `ExampleEvent(ExampleEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `event` ← `Event`
- **Returns**: `ApiV2WebhooksExampleResponse`
- **Error**: `ApiException<ExampleEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExampleEventRequest` | `src/Postscript/Requests/WebhooksApi/ExampleEventRequest.cs` |
| `Event1` | `src/Postscript/Models/Enums/Event1.cs` |
| `ApiV2WebhooksExampleResponse` | `src/Postscript/Models/ApiV2WebhooksExampleResponse.cs` |
| `ExampleEventError` | `src/Postscript/Errors/ExampleEventError.cs` |

### GetWebhookSigningToken

- **Auth**: `options.Sec0`
- **Signature**: `GetWebhookSigningToken(GetWebhookSigningTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV2WebhooksTokenResponse`
- **Error**: `ApiException<GetWebhookSigningTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookSigningTokenRequest` | `src/Postscript/Requests/WebhooksApi/GetWebhookSigningTokenRequest.cs` |
| `ApiV2WebhooksTokenResponse` | `src/Postscript/Models/ApiV2WebhooksTokenResponse.cs` |
| `GetWebhookSigningTokenError` | `src/Postscript/Errors/GetWebhookSigningTokenError.cs` |

### GetWebhookSubscription

- **Auth**: `options.Sec0`
- **Signature**: `GetWebhookSubscription(GetWebhookSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `JsonElement`
- **Error**: `ApiException<GetWebhookSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookSubscriptionRequest` | `src/Postscript/Requests/WebhooksApi/GetWebhookSubscriptionRequest.cs` |
| `GetWebhookSubscriptionError` | `src/Postscript/Errors/GetWebhookSubscriptionError.cs` |

### ListWebhookSubscriptions

- **Auth**: `options.Sec0`
- **Signature**: `ListWebhookSubscriptions(ListWebhookSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `JsonElement`
- **Error**: `ApiException<ListWebhookSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWebhookSubscriptionsRequest` | `src/Postscript/Requests/WebhooksApi/ListWebhookSubscriptionsRequest.cs` |
| `ListWebhookSubscriptionsError` | `src/Postscript/Errors/ListWebhookSubscriptionsError.cs` |

### TestShopWebhook

- **Auth**: `options.Sec0`
- **Signature**: `TestShopWebhook(TestShopWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV2WebhooksTestResponse`
- **Error**: `ApiException<TestShopWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2WebhooksTest400Error1([NotNullWhen(true)] out ApiV2WebhooksTest400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TestShopWebhookRequest` | `src/Postscript/Requests/WebhooksApi/TestShopWebhookRequest.cs` |
| `ApiV2WebhooksTestRequest` | `src/Postscript/Models/ApiV2WebhooksTestRequest.cs` |
| `ApiV2WebhooksTestResponse` | `src/Postscript/Models/ApiV2WebhooksTestResponse.cs` |
| `TestShopWebhookError` | `src/Postscript/Errors/TestShopWebhookError.cs` |
| `ApiV2WebhooksTest400Error1` | `src/Postscript/Models/ApiV2WebhooksTest400Error1.cs` |

### UpdateWebhookSubscription

- **Auth**: `options.Sec0`
- **Signature**: `UpdateWebhookSubscription(UpdateWebhookSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `JsonElement`
- **Error**: `ApiException<UpdateWebhookSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookSubscriptionRequest` | `src/Postscript/Requests/WebhooksApi/UpdateWebhookSubscriptionRequest.cs` |
| `ApiV2WebhooksRequest1` | `src/Postscript/Models/ApiV2WebhooksRequest1.cs` |
| `UpdateWebhookSubscriptionError` | `src/Postscript/Errors/UpdateWebhookSubscriptionError.cs` |

