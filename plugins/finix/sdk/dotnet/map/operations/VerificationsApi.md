<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerificationsApi — operations

Accessor: `client.VerificationsApi` · Source: `src/FinixApiReference/Api/VerificationsApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVerification

- **Auth**: `options.BasicAuth`
- **Signature**: `GetVerification(GetVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VerificationId`
- **Returns**: `VerificationsResponse`
- **Error**: `ApiException<GetVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVerificationRequest` | `src/FinixApiReference/Requests/VerificationsApi/GetVerificationRequest.cs` |
| `VerificationsResponse` | `src/FinixApiReference/Models/AnyOf/VerificationsResponse.cs` |
| `GetVerificationError` | `src/FinixApiReference/Errors/GetVerificationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListMerchantVerifications

- **Auth**: `options.BasicAuth`
- **Signature**: `ListMerchantVerifications(ListMerchantVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MerchantId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `limit` ← `Limit`
- **Returns**: `ListMerchantVerifications`
- **Error**: `ApiException<ListMerchantVerificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMerchantVerificationsRequest` | `src/FinixApiReference/Requests/VerificationsApi/ListMerchantVerificationsRequest.cs` |
| `ListMerchantVerifications` | `src/FinixApiReference/Models/ListMerchantVerifications.cs` |
| `ListMerchantVerificationsError` | `src/FinixApiReference/Errors/ListMerchantVerificationsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListVerifications

- **Auth**: `options.BasicAuth`
- **Signature**: `ListVerifications(ListVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListVerifications`
- **Error**: `ApiException<ListVerificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVerificationsRequest` | `src/FinixApiReference/Requests/VerificationsApi/ListVerificationsRequest.cs` |
| `ListVerifications` | `src/FinixApiReference/Models/ListVerifications.cs` |
| `ListVerificationsError` | `src/FinixApiReference/Errors/ListVerificationsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

