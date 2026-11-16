<!-- Generated file — do not edit; regenerated with the SDK. -->

# DisbursementRules — operations

Accessor: `client.DisbursementRules` · Source: `src/FinixApiReference/Api/DisbursementRules.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListCurrentUsages

- **Auth**: `options.BasicAuth`
- **Signature**: `ListCurrentUsages(ListCurrentUsagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkedTo`
- **Query params (wire ← C#)**: `linked_to` ← `LinkedTo`, `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `limit` ← `Limit`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListCurrentUsages`
- **Error**: `ApiException<ListCurrentUsagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCurrentUsagesRequest` | `src/FinixApiReference/Requests/DisbursementRules/ListCurrentUsagesRequest.cs` |
| `ListCurrentUsages` | `src/FinixApiReference/Models/ListCurrentUsages.cs` |
| `ListCurrentUsagesError` | `src/FinixApiReference/Errors/ListCurrentUsagesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListDisbursementRules

- **Auth**: `options.BasicAuth`
- **Signature**: `ListDisbursementRules(ListDisbursementRulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkedTo`
- **Query params (wire ← C#)**: `linked_to` ← `LinkedTo`, `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListDisbursementRules`
- **Error**: `ApiException<ListDisbursementRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDisbursementRulesRequest` | `src/FinixApiReference/Requests/DisbursementRules/ListDisbursementRulesRequest.cs` |
| `ListDisbursementRules` | `src/FinixApiReference/Models/ListDisbursementRules.cs` |
| `ListDisbursementRulesError` | `src/FinixApiReference/Errors/ListDisbursementRulesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

