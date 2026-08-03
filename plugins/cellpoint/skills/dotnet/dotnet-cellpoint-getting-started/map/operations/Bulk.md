# Bulk — operations

Accessor: `client.Bulk` · Source: `Api/Bulk.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetBulkById
- **HTTP**: `GET /payments/v1/bulks/{bulkId}` (Default (payments))
- **Notes**: Get summary information about a bulk.
- **Signature**: `GetBulkById(string bulkId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Summary`
- **Error**: `SdkException<GetBulkByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TriggerBulk
- **HTTP**: `POST /payments/v1/bulks` (Default (payments))
- **Notes**: Trigger a bulk.
- **Signature**: `TriggerBulk(TriggerBulkRequest request, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `request` ← `request`
- **Returns**: `PaymentsV1BulksResponse`
- **Error**: `SdkException<TriggerBulkError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
