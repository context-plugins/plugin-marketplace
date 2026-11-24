<!-- Generated file — do not edit; regenerated with the SDK. -->

# Suggestions — operations

Accessor: `client.suggestions` · Source: `appstore_spy/apis/suggestions.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.suggestions.get_suggests_play_suggestions_get2

- **Route**: `GET /play/suggestions`
- **Auth**: `api_key_header`
- **Signature**: `def get_suggests_play_suggestions_get2(q: str, *, country: AppCountriesOrStr | None = AppCountries.US, lang: AppLanguagesOrStr | None = AppLanguages.EN_US, freshness: CacheTimeOrStr | None = CacheTime._7D, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `country` — query · `lang` — query · `freshness` — query
- **Returns (parsed)**: `Suggest`
- **Returns (raw)**: `ApiResult[Suggest, GetSuggestsPlaySuggestionsGet2ErrorBody]`
- **Error**: `GetSuggestsPlaySuggestionsGet2ErrorBody` — **Case A (typed)**
- **Error arms**: `PlaySuggestions401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `AppLanguagesOrStr` | `appstore_spy/models/enums/app_languages.py` |
| `CacheTimeOrStr` | `appstore_spy/models/enums/cache_time.py` |
| `Suggest` | `appstore_spy/models/suggest.py` |
| `GetSuggestsPlaySuggestionsGet2ErrorBody` | `appstore_spy/errors/get_suggests_play_suggestions_get2_error.py` |
| `PlaySuggestions401Error1` | `appstore_spy/models/play_suggestions401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

