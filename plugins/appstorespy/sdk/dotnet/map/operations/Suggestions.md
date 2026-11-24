<!-- Generated file — do not edit; regenerated with the SDK. -->

# Suggestions — operations

Accessor: `client.Suggestions` · Source: `src/AppstoreSpy/Api/Suggestions.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSuggestsPlaySuggestionsGet2

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSuggestsPlaySuggestionsGet2(GetSuggestsPlaySuggestionsGet2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `country` ← `Country`, `lang` ← `Lang`, `freshness` ← `Freshness`
- **Returns**: `Suggest`
- **Error**: `ApiException<GetSuggestsPlaySuggestionsGet2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetPlaySuggestions401Error1([NotNullWhen(true)] out PlaySuggestions401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSuggestsPlaySuggestionsGet2Request` | `src/AppstoreSpy/Requests/Suggestions/GetSuggestsPlaySuggestionsGet2Request.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `AppLanguages` | `src/AppstoreSpy/Models/Enums/AppLanguages.cs` |
| `CacheTime` | `src/AppstoreSpy/Models/Enums/CacheTime.cs` |
| `Suggest` | `src/AppstoreSpy/Models/Suggest.cs` |
| `GetSuggestsPlaySuggestionsGet2Error` | `src/AppstoreSpy/Errors/GetSuggestsPlaySuggestionsGet2Error.cs` |
| `PlaySuggestions401Error1` | `src/AppstoreSpy/Models/PlaySuggestions401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

