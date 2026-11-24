<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactional — operations

Accessor: `client.Transactional` · Source: `src/Ortto/Api/Transactional.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SendTransactionalEmail

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SendTransactionalEmail(SendTransactionalEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SendTransactionalEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendTransactionalEmailRequest` | `src/Ortto/Requests/Transactional/SendTransactionalEmailRequest.cs` |
| `TransactionalSendRequest` | `src/Ortto/Models/TransactionalSendRequest.cs` |
| `SendTransactionalEmailError` | `src/Ortto/Errors/SendTransactionalEmailError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

### SendTransactionalSms

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SendTransactionalSms(SendTransactionalSmsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SendTransactionalSmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendTransactionalSmsRequest` | `src/Ortto/Requests/Transactional/SendTransactionalSmsRequest.cs` |
| `TransactionalSendSmsRequest` | `src/Ortto/Models/TransactionalSendSmsRequest.cs` |
| `SendTransactionalSmsError` | `src/Ortto/Errors/SendTransactionalSmsError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

