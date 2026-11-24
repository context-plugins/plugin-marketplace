<!-- Generated file — do not edit; regenerated with the SDK. -->

# Email — operations

Accessor: `client.Email` · Source: `src/CallNode/Api/Email.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEmailDomain

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `CreateEmailDomain(CreateEmailDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EmailDomain`
- **Error**: `ApiException<CreateEmailDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEmailDomainRequest` | `src/CallNode/Requests/Email/CreateEmailDomainRequest.cs` |
| `ApiV1EmailDomainsRequest` | `src/CallNode/Models/ApiV1EmailDomainsRequest.cs` |
| `EmailDomain` | `src/CallNode/Models/EmailDomain.cs` |
| `CreateEmailDomainError` | `src/CallNode/Errors/CreateEmailDomainError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### DeleteEmailDomain

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `DeleteEmailDomain(DeleteEmailDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEmailDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEmailDomainRequest` | `src/CallNode/Requests/Email/DeleteEmailDomainRequest.cs` |
| `DeleteEmailDomainError` | `src/CallNode/Errors/DeleteEmailDomainError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### GetEmailDomain

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `GetEmailDomain(GetEmailDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `refresh` ← `Refresh`
- **Returns**: `EmailDomain`
- **Error**: `ApiException<GetEmailDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEmailDomainRequest` | `src/CallNode/Requests/Email/GetEmailDomainRequest.cs` |
| `EmailDomain` | `src/CallNode/Models/EmailDomain.cs` |
| `GetEmailDomainError` | `src/CallNode/Errors/GetEmailDomainError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### GetEmailMessage

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `GetEmailMessage(GetEmailMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `EmailMessage`
- **Error**: `ApiException<GetEmailMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEmailMessageRequest` | `src/CallNode/Requests/Email/GetEmailMessageRequest.cs` |
| `EmailMessage` | `src/CallNode/Models/EmailMessage.cs` |
| `GetEmailMessageError` | `src/CallNode/Errors/GetEmailMessageError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ListEmailDomains

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListEmailDomains(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1EmailDomainsResponse`
- **Error**: `ApiException<ListEmailDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1EmailDomainsResponse` | `src/CallNode/Models/ApiV1EmailDomainsResponse.cs` |
| `ListEmailDomainsError` | `src/CallNode/Errors/ListEmailDomainsError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ListEmailMessages

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListEmailMessages(ListEmailMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1EmailMessagesResponse`
- **Error**: `ApiException<ListEmailMessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEmailMessagesRequest` | `src/CallNode/Requests/Email/ListEmailMessagesRequest.cs` |
| `Status3` | `src/CallNode/Models/Enums/Status3.cs` |
| `ApiV1EmailMessagesResponse` | `src/CallNode/Models/ApiV1EmailMessagesResponse.cs` |
| `ListEmailMessagesError` | `src/CallNode/Errors/ListEmailMessagesError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### SendEmail

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `SendEmail(SendEmailOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EmailMessage`
- **Error**: `ApiException<SendEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 403, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendEmailOperationRequest` | `src/CallNode/Requests/Email/SendEmailOperationRequest.cs` |
| `SendEmailRequest` | `src/CallNode/Models/SendEmailRequest.cs` |
| `EmailMessage` | `src/CallNode/Models/EmailMessage.cs` |
| `SendEmailError` | `src/CallNode/Errors/SendEmailError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### VerifyEmailDomain

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `VerifyEmailDomain(VerifyEmailDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `EmailDomain`
- **Error**: `ApiException<VerifyEmailDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VerifyEmailDomainRequest` | `src/CallNode/Requests/Email/VerifyEmailDomainRequest.cs` |
| `EmailDomain` | `src/CallNode/Models/EmailDomain.cs` |
| `VerifyEmailDomainError` | `src/CallNode/Errors/VerifyEmailDomainError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

