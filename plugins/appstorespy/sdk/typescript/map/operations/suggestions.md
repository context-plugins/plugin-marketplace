<!-- Generated file — do not edit; regenerated with the SDK. -->

# Suggestions — operations

Accessor: `client.suggestions` · Source: `src/resources/suggestions.ts` · 1 operation · Request and error types: namespace `Suggestions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `appstore-spy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSuggestsPlaySuggestionsGet2

- **Signature**: `getSuggestsPlaySuggestionsGet2(request: Suggestions.GetSuggestsPlaySuggestionsGet2Request, options?: RequestOptions): ApiPromise<Suggest, Suggestions.GetSuggestsPlaySuggestionsGet2Error>`
- **Wire**: `GET /play/suggestions`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Suggest`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `Suggestions.GetSuggestsPlaySuggestionsGet2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playSuggestions401Error1"` [401] `PlaySuggestions401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Suggestions.GetSuggestsPlaySuggestionsGet2Request` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | yes | — |
| `country` | `query` | `AppCountries` | no | `AppCountries.Us` |
| `lang` | `query` | `AppLanguages` | no | `AppLanguages.EnUs` |
| `freshness` | `query` | `CacheTime` | no | `CacheTime._7D` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `AppLanguages` | `appLanguagesSchema` | `src/models/app-languages.ts` |
| `CacheTime` | `cacheTimeSchema` | `src/models/cache-time.ts` |
| `Suggest` | `suggestSchema` | `src/models/suggest.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlaySuggestions401Error1` | `playSuggestions401Error1Schema` | `src/models/play-suggestions401-error1.ts` |

