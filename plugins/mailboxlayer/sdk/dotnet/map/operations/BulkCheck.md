<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkCheck — operations

Accessor: `client.BulkCheck` · Source: `src/Mailboxlayer/Api/BulkCheck.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkCheckEmails

- **Auth**: `options.AccessKeyQuery`
- **Signature**: `BulkCheckEmails(BulkCheckEmailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccessKey`, `Emails`
- **Query params (wire ← C#)**: `access_key` ← `AccessKey`, `emails` ← `Emails`, `smtp` ← `Smtp`, `catch_all` ← `CatchAll`, `format` ← `Format`, `callback` ← `Callback`
- **Returns**: `BulkCheckResponse`
- **Error**: `ApiException<BulkCheckEmailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 403, 404, 429, 500, 503] · `TryGetRequestValidationError([NotNullWhen(true)] out RequestValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCheckEmailsRequest` | `src/Mailboxlayer/Requests/BulkCheck/BulkCheckEmailsRequest.cs` |
| `Smtp` | `src/Mailboxlayer/Models/Enums/Smtp.cs` |
| `CatchAll` | `src/Mailboxlayer/Models/Enums/CatchAll.cs` |
| `Format` | `src/Mailboxlayer/Models/Enums/Format.cs` |
| `BulkCheckResponse` | `src/Mailboxlayer/Models/AnyOf/BulkCheckResponse.cs` |
| `BulkCheckEmailsError` | `src/Mailboxlayer/Errors/BulkCheckEmailsError.cs` |
| `ApiErrorModel` | `src/Mailboxlayer/Models/ApiErrorModel.cs` |
| `RequestValidationError` | `src/Mailboxlayer/Models/RequestValidationError.cs` |

