<!-- Generated file — do not edit; regenerated with the SDK. -->

# Check — operations

Accessor: `client.Check` · Source: `src/Mailboxlayer/Api/Check.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CheckEmail

- **Auth**: `options.AccessKeyQuery`
- **Signature**: `CheckEmail(CheckEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccessKey`, `Email`
- **Query params (wire ← C#)**: `access_key` ← `AccessKey`, `email` ← `Email`, `smtp` ← `Smtp`, `catch_all` ← `CatchAll`, `format` ← `Format`, `callback` ← `Callback`
- **Returns**: `CheckResponse`
- **Error**: `ApiException<CheckEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 403, 404, 429, 500, 503] · `TryGetRequestValidationError([NotNullWhen(true)] out RequestValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CheckEmailRequest` | `src/Mailboxlayer/Requests/Check/CheckEmailRequest.cs` |
| `Smtp` | `src/Mailboxlayer/Models/Enums/Smtp.cs` |
| `CatchAll` | `src/Mailboxlayer/Models/Enums/CatchAll.cs` |
| `Format` | `src/Mailboxlayer/Models/Enums/Format.cs` |
| `CheckResponse` | `src/Mailboxlayer/Models/AnyOf/CheckResponse.cs` |
| `CheckEmailError` | `src/Mailboxlayer/Errors/CheckEmailError.cs` |
| `ApiErrorModel` | `src/Mailboxlayer/Models/ApiErrorModel.cs` |
| `RequestValidationError` | `src/Mailboxlayer/Models/RequestValidationError.cs` |

