<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bills — operations

Accessor: `client.Bills` · Source: `src/Curlec/Api/Bills.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBill

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateBill(CreateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Bill`
- **Error**: `ApiException<CreateBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBillRequest` | `src/Curlec/Requests/Bills/CreateBillRequest.cs` |
| `BillsRequest` | `src/Curlec/Models/BillsRequest.cs` |
| `Bill` | `src/Curlec/Models/Bill.cs` |
| `CreateBillError` | `src/Curlec/Errors/CreateBillError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### DeleteBill

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteBill(DeleteBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBillRequest` | `src/Curlec/Requests/Bills/DeleteBillRequest.cs` |
| `DeleteBillError` | `src/Curlec/Errors/DeleteBillError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateBill

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateBill(UpdateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`, `Body`
- **Returns**: `Bill`
- **Error**: `ApiException<UpdateBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBillRequest` | `src/Curlec/Requests/Bills/UpdateBillRequest.cs` |
| `Bill` | `src/Curlec/Models/Bill.cs` |
| `UpdateBillError` | `src/Curlec/Errors/UpdateBillError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

