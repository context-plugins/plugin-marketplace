<!-- Generated file — do not edit; regenerated with the SDK. -->

# Verify — operations

Accessor: `client.Verify` · Source: `src/Jid/Api/Verify.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBusinessFile

- **Signature**: `GetBusinessFile(GetBusinessFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<GetBusinessFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBusinessFileRequest` | `src/Jid/Requests/Verify/GetBusinessFileRequest.cs` |
| `GetBusinessFileError` | `src/Jid/Errors/GetBusinessFileError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

### GetReceipt

- **Signature**: `GetReceipt(GetReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReceiptId`
- **Returns**: `Receipt`
- **Error**: `ApiException<GetReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReceiptRequest` | `src/Jid/Requests/Verify/GetReceiptRequest.cs` |
| `Receipt` | `src/Jid/Models/Receipt.cs` |
| `GetReceiptError` | `src/Jid/Errors/GetReceiptError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

### ListActivities

- **Signature**: `ListActivities(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### VerifyBusiness

- **Signature**: `VerifyBusiness(VerifyBusinessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `activity` ← `Activity`, `jurisdiction` ← `Jurisdiction`, `amount` ← `Amount`, `currency` ← `Currency`
- **Returns**: `VerifyResponse`
- **Error**: `ApiException<VerifyBusinessError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VerifyBusinessRequest` | `src/Jid/Requests/Verify/VerifyBusinessRequest.cs` |
| `Activity` | `src/Jid/Models/Enums/Activity.cs` |
| `VerifyResponse` | `src/Jid/Models/VerifyResponse.cs` |
| `VerifyBusinessError` | `src/Jid/Errors/VerifyBusinessError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

