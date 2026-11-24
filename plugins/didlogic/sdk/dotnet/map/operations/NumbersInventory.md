<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersInventory — operations

Accessor: `client.NumbersInventory` · Source: `src/DidLogic/Api/NumbersInventory.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### NumbersCountriesCitiesDidsIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersCountriesCitiesDidsIndex(NumbersCountriesCitiesDidsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CountryId`, `CityId`
- **Returns**: `ApiV2NumbersCountriesCitiesDidsResponse`
- **Error**: `ApiException<NumbersCountriesCitiesDidsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersCountriesCitiesDids401Error1([NotNullWhen(true)] out ApiV2NumbersCountriesCitiesDids401Error1? value)` [401] · `TryGetApiV2NumbersCountriesCitiesDids403Error1([NotNullWhen(true)] out ApiV2NumbersCountriesCitiesDids403Error1? value)` [403] · `TryGetApiV2NumbersCountriesCitiesDids404Error1([NotNullWhen(true)] out ApiV2NumbersCountriesCitiesDids404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersCountriesCitiesDidsIndexRequest` | `src/DidLogic/Requests/NumbersInventory/NumbersCountriesCitiesDidsIndexRequest.cs` |
| `ApiV2NumbersCountriesCitiesDidsResponse` | `src/DidLogic/Models/ApiV2NumbersCountriesCitiesDidsResponse.cs` |
| `NumbersCountriesCitiesDidsIndexError` | `src/DidLogic/Errors/NumbersCountriesCitiesDidsIndexError.cs` |
| `ApiV2NumbersCountriesCitiesDids401Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesCitiesDids401Error1.cs` |
| `ApiV2NumbersCountriesCitiesDids403Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesCitiesDids403Error1.cs` |
| `ApiV2NumbersCountriesCitiesDids404Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesCitiesDids404Error1.cs` |

### NumbersCountriesCitiesIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersCountriesCitiesIndex(NumbersCountriesCitiesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CountryId`
- **Returns**: `ApiV2NumbersCountriesCitiesResponse`
- **Error**: `ApiException<NumbersCountriesCitiesIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersCountriesCities401Error1([NotNullWhen(true)] out ApiV2NumbersCountriesCities401Error1? value)` [401] · `TryGetApiV2NumbersCountriesCities403Error1([NotNullWhen(true)] out ApiV2NumbersCountriesCities403Error1? value)` [403] · `TryGetApiV2NumbersCountriesCities404Error1([NotNullWhen(true)] out ApiV2NumbersCountriesCities404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersCountriesCitiesIndexRequest` | `src/DidLogic/Requests/NumbersInventory/NumbersCountriesCitiesIndexRequest.cs` |
| `ApiV2NumbersCountriesCitiesResponse` | `src/DidLogic/Models/ApiV2NumbersCountriesCitiesResponse.cs` |
| `NumbersCountriesCitiesIndexError` | `src/DidLogic/Errors/NumbersCountriesCitiesIndexError.cs` |
| `ApiV2NumbersCountriesCities401Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesCities401Error1.cs` |
| `ApiV2NumbersCountriesCities403Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesCities403Error1.cs` |
| `ApiV2NumbersCountriesCities404Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesCities404Error1.cs` |

### NumbersCountriesIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersCountriesIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV2NumbersCountriesResponse`
- **Error**: `ApiException<NumbersCountriesIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersCountries401Error1([NotNullWhen(true)] out ApiV2NumbersCountries401Error1? value)` [401] · `TryGetApiV2NumbersCountries403Error1([NotNullWhen(true)] out ApiV2NumbersCountries403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV2NumbersCountriesResponse` | `src/DidLogic/Models/ApiV2NumbersCountriesResponse.cs` |
| `NumbersCountriesIndexError` | `src/DidLogic/Errors/NumbersCountriesIndexError.cs` |
| `ApiV2NumbersCountries401Error1` | `src/DidLogic/Models/ApiV2NumbersCountries401Error1.cs` |
| `ApiV2NumbersCountries403Error1` | `src/DidLogic/Models/ApiV2NumbersCountries403Error1.cs` |

### NumbersCountriesLocationsIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersCountriesLocationsIndex(NumbersCountriesLocationsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CountryId`, `Prefix`
- **Query params (wire ← C#)**: `prefix` ← `Prefix`, `sms_enabled` ← `SmsEnabled`
- **Returns**: `ApiV2NumbersCountriesLocationsResponse`
- **Error**: `ApiException<NumbersCountriesLocationsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersCountriesLocations401Error1([NotNullWhen(true)] out ApiV2NumbersCountriesLocations401Error1? value)` [401] · `TryGetApiV2NumbersCountriesLocations403Error1([NotNullWhen(true)] out ApiV2NumbersCountriesLocations403Error1? value)` [403] · `TryGetApiV2NumbersCountriesLocations404Error1([NotNullWhen(true)] out ApiV2NumbersCountriesLocations404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersCountriesLocationsIndexRequest` | `src/DidLogic/Requests/NumbersInventory/NumbersCountriesLocationsIndexRequest.cs` |
| `ApiV2NumbersCountriesLocationsResponse` | `src/DidLogic/Models/ApiV2NumbersCountriesLocationsResponse.cs` |
| `NumbersCountriesLocationsIndexError` | `src/DidLogic/Errors/NumbersCountriesLocationsIndexError.cs` |
| `ApiV2NumbersCountriesLocations401Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesLocations401Error1.cs` |
| `ApiV2NumbersCountriesLocations403Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesLocations403Error1.cs` |
| `ApiV2NumbersCountriesLocations404Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesLocations404Error1.cs` |

### NumbersCountriesRegionsIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersCountriesRegionsIndex(NumbersCountriesRegionsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CountryId`
- **Returns**: `ApiV2NumbersCountriesRegionsResponse`
- **Error**: `ApiException<NumbersCountriesRegionsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersCountriesRegions401Error1([NotNullWhen(true)] out ApiV2NumbersCountriesRegions401Error1? value)` [401] · `TryGetApiV2NumbersCountriesRegions403Error1([NotNullWhen(true)] out ApiV2NumbersCountriesRegions403Error1? value)` [403] · `TryGetApiV2NumbersCountriesRegions404Error1([NotNullWhen(true)] out ApiV2NumbersCountriesRegions404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersCountriesRegionsIndexRequest` | `src/DidLogic/Requests/NumbersInventory/NumbersCountriesRegionsIndexRequest.cs` |
| `ApiV2NumbersCountriesRegionsResponse` | `src/DidLogic/Models/ApiV2NumbersCountriesRegionsResponse.cs` |
| `NumbersCountriesRegionsIndexError` | `src/DidLogic/Errors/NumbersCountriesRegionsIndexError.cs` |
| `ApiV2NumbersCountriesRegions401Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesRegions401Error1.cs` |
| `ApiV2NumbersCountriesRegions403Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesRegions403Error1.cs` |
| `ApiV2NumbersCountriesRegions404Error1` | `src/DidLogic/Models/ApiV2NumbersCountriesRegions404Error1.cs` |

### NumbersIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersIndex(NumbersIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `show_all` ← `ShowAll`
- **Returns**: `ApiV2NumbersResponse`
- **Error**: `ApiException<NumbersIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Numbers401Error1([NotNullWhen(true)] out ApiV2Numbers401Error1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersIndexRequest` | `src/DidLogic/Requests/NumbersInventory/NumbersIndexRequest.cs` |
| `ApiV2NumbersResponse` | `src/DidLogic/Models/ApiV2NumbersResponse.cs` |
| `NumbersIndexError` | `src/DidLogic/Errors/NumbersIndexError.cs` |
| `ApiV2Numbers401Error1` | `src/DidLogic/Models/ApiV2Numbers401Error1.cs` |

### NumbersPurchaseCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersPurchaseCreate(NumbersPurchaseCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV2NumbersPurchaseResponse`
- **Error**: `ApiException<NumbersPurchaseCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersPurchase400Error1([NotNullWhen(true)] out ApiV2NumbersPurchase400Error1? value)` [400] · `TryGetApiV2NumbersPurchase401Error1([NotNullWhen(true)] out ApiV2NumbersPurchase401Error1? value)` [401] · `TryGetApiV2NumbersPurchaseResponse11([NotNullWhen(true)] out ApiV2NumbersPurchaseResponse11? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersPurchaseCreateRequest` | `src/DidLogic/Requests/NumbersInventory/NumbersPurchaseCreateRequest.cs` |
| `ApiV2NumbersPurchaseRequest` | `src/DidLogic/Models/ApiV2NumbersPurchaseRequest.cs` |
| `ApiV2NumbersPurchaseResponse` | `src/DidLogic/Models/ApiV2NumbersPurchaseResponse.cs` |
| `NumbersPurchaseCreateError` | `src/DidLogic/Errors/NumbersPurchaseCreateError.cs` |
| `ApiV2NumbersPurchase400Error1` | `src/DidLogic/Models/ApiV2NumbersPurchase400Error1.cs` |
| `ApiV2NumbersPurchase401Error1` | `src/DidLogic/Models/ApiV2NumbersPurchase401Error1.cs` |
| `ApiV2NumbersPurchaseResponse11` | `src/DidLogic/Models/AnyOf/ApiV2NumbersPurchaseResponse11.cs` |

### NumbersPurchaseDestroy

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersPurchaseDestroy(NumbersPurchaseDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `id_in[]` ← `IdIn`, `did_numbers[]` ← `DidNumbers`
- **Returns**: `ApiV2NumbersPurchaseResponse3`
- **Error**: `ApiException<NumbersPurchaseDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersPurchase401Error1([NotNullWhen(true)] out ApiV2NumbersPurchase401Error1? value)` [401] · `TryGetApiV2NumbersPurchase403Error1([NotNullWhen(true)] out ApiV2NumbersPurchase403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersPurchaseDestroyRequest` | `src/DidLogic/Requests/NumbersInventory/NumbersPurchaseDestroyRequest.cs` |
| `ApiV2NumbersPurchaseResponse3` | `src/DidLogic/Models/ApiV2NumbersPurchaseResponse3.cs` |
| `NumbersPurchaseDestroyError` | `src/DidLogic/Errors/NumbersPurchaseDestroyError.cs` |
| `ApiV2NumbersPurchase401Error1` | `src/DidLogic/Models/ApiV2NumbersPurchase401Error1.cs` |
| `ApiV2NumbersPurchase403Error1` | `src/DidLogic/Models/ApiV2NumbersPurchase403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### NumbersPurchaseUpdate

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersPurchaseUpdate(NumbersPurchaseUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV2NumbersPurchaseResponse2`
- **Error**: `ApiException<NumbersPurchaseUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersPurchase401Error1([NotNullWhen(true)] out ApiV2NumbersPurchase401Error1? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [422, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersPurchaseUpdateRequest` | `src/DidLogic/Requests/NumbersInventory/NumbersPurchaseUpdateRequest.cs` |
| `ApiV2NumbersPurchaseRequest1` | `src/DidLogic/Models/ApiV2NumbersPurchaseRequest1.cs` |
| `ApiV2NumbersPurchaseResponse2` | `src/DidLogic/Models/ApiV2NumbersPurchaseResponse2.cs` |
| `NumbersPurchaseUpdateError` | `src/DidLogic/Errors/NumbersPurchaseUpdateError.cs` |
| `ApiV2NumbersPurchase401Error1` | `src/DidLogic/Models/ApiV2NumbersPurchase401Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### NumbersSearchShow

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersSearchShow(NumbersSearchShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `id_in` ← `IdIn`, `number_in` ← `NumberIn`, `number_contains` ← `NumberContains`, `begins_with` ← `BeginsWith`, `ends_with` ← `EndsWith`, `city_name_contains` ← `CityNameContains`, `country_name_contains` ← `CountryNameContains`, `state_name_contains` ← `StateNameContains`, `sms_enabled` ← `SmsEnabled`, `no_local_cli` ← `NoLocalCli`, `vendor_id` ← `VendorId`, `city_id` ← `CityId`, `region_id` ← `RegionId`, `require_docs` ← `RequireDocs`, `commitment_months` ← `CommitmentMonths`, `cheap_sorting` ← `CheapSorting`, `page` ← `Page`, `per_page` ← `PerPage`
- **Returns**: `ApiV2NumbersSearchResponse`
- **Error**: `ApiException<NumbersSearchShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersSearch401Error1([NotNullWhen(true)] out ApiV2NumbersSearch401Error1? value)` [401] · `TryGetApiV2NumbersSearch403Error1([NotNullWhen(true)] out ApiV2NumbersSearch403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersSearchShowRequest` | `src/DidLogic/Requests/NumbersInventory/NumbersSearchShowRequest.cs` |
| `ApiV2NumbersSearchResponse` | `src/DidLogic/Models/ApiV2NumbersSearchResponse.cs` |
| `NumbersSearchShowError` | `src/DidLogic/Errors/NumbersSearchShowError.cs` |
| `ApiV2NumbersSearch401Error1` | `src/DidLogic/Models/ApiV2NumbersSearch401Error1.cs` |
| `ApiV2NumbersSearch403Error1` | `src/DidLogic/Models/ApiV2NumbersSearch403Error1.cs` |

