<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.Insights` · Source: `src/Fillo/Api/Insights.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFormInsights

- **Auth**: `options.BearerAuth`
- **Signature**: `GetFormInsights(GetFormInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Query params (wire ← C#)**: `range` ← `Range`, `q` ← `Q`, `source` ← `Source`, `respondent` ← `Respondent`, `where` ← `Where`, `by` ← `By`, `op` ← `Op`, `eq` ← `Eq`
- **Returns**: `FormInsights`
- **Error**: `ApiException<GetFormInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFormInsightsRequest` | `src/Fillo/Requests/Insights/GetFormInsightsRequest.cs` |
| `RangeEnum` | `src/Fillo/Models/Enums/RangeEnum.cs` |
| `Op` | `src/Fillo/Models/Enums/Op.cs` |
| `FormInsights` | `src/Fillo/Models/FormInsights.cs` |
| `GetFormInsightsError` | `src/Fillo/Errors/GetFormInsightsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

