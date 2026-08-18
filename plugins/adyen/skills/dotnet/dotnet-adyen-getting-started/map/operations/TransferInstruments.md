<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferInstruments — operations

Accessor: `client.TransferInstruments` · Source: `Api/TransferInstruments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteTransferInstrumentsId
- **Server group**: `Default18`
- **Signature**: `DeleteTransferInstrumentsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTransferInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTransferInstrumentsIdError` | `Errors/DeleteTransferInstrumentsIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### GetTransferInstrumentsId
- **Server group**: `Default18`
- **Signature**: `GetTransferInstrumentsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransferInstrument`
- **Error**: `SdkException<GetTransferInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferInstrument` | `Models/TransferInstrument.cs` |
| `GetTransferInstrumentsIdError` | `Errors/GetTransferInstrumentsIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PatchTransferInstrumentsId
- **Server group**: `Default18`
- **Signature**: `PatchTransferInstrumentsId(string id, string? xRequestedVerificationCode, TransferInstrumentInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TransferInstrument`
- **Error**: `SdkException<PatchTransferInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferInstrumentInfo` | `Models/TransferInstrumentInfo.cs` |
| `TransferInstrument` | `Models/TransferInstrument.cs` |
| `PatchTransferInstrumentsIdError` | `Errors/PatchTransferInstrumentsIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostTransferInstruments
- **Server group**: `Default18`
- **Signature**: `PostTransferInstruments(string? xRequestedVerificationCode, TransferInstrumentInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TransferInstrument`
- **Error**: `SdkException<PostTransferInstrumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferInstrumentInfo` | `Models/TransferInstrumentInfo.cs` |
| `TransferInstrument` | `Models/TransferInstrument.cs` |
| `PostTransferInstrumentsError` | `Errors/PostTransferInstrumentsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

