<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeesApi — operations

Accessor: `client.FeesApi` · Source: `src/FinixApiReference/Api/FeesApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Createfee

- **Auth**: `options.BasicAuth`
- **Signature**: `Createfee(CreatefeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Fee`
- **Error**: `ApiException<CreatefeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatefeeRequest` | `src/FinixApiReference/Requests/FeesApi/CreatefeeRequest.cs` |
| `CreateCustomFee` | `src/FinixApiReference/Models/CreateCustomFee.cs` |
| `Fee` | `src/FinixApiReference/Models/Fee.cs` |
| `CreatefeeError` | `src/FinixApiReference/Errors/CreatefeeError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetFee

- **Auth**: `options.BasicAuth`
- **Signature**: `GetFee(GetFeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FeeId`
- **Returns**: `Fee`
- **Error**: `ApiException<GetFeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFeeRequest` | `src/FinixApiReference/Requests/FeesApi/GetFeeRequest.cs` |
| `Fee` | `src/FinixApiReference/Models/Fee.cs` |
| `GetFeeError` | `src/FinixApiReference/Errors/GetFeeError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListFees

- **Auth**: `options.BasicAuth`
- **Signature**: `ListFees(ListFeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `linked_to` ← `LinkedTo`, `merchant_id` ← `MerchantId`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListFees`
- **Error**: `ApiException<ListFeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFeesRequest` | `src/FinixApiReference/Requests/FeesApi/ListFeesRequest.cs` |
| `ListFees` | `src/FinixApiReference/Models/ListFees.cs` |
| `ListFeesError` | `src/FinixApiReference/Errors/ListFeesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateFee

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateFee(UpdateFeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FeeId`, `Body`
- **Returns**: `Fee`
- **Error**: `ApiException<UpdateFeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFeeRequest` | `src/FinixApiReference/Requests/FeesApi/UpdateFeeRequest.cs` |
| `UpdateFee` | `src/FinixApiReference/Models/UpdateFee.cs` |
| `Fee` | `src/FinixApiReference/Models/Fee.cs` |
| `UpdateFeeError` | `src/FinixApiReference/Errors/UpdateFeeError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

