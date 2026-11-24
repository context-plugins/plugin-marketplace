<!-- Generated file — do not edit; regenerated with the SDK. -->

# Properties — operations

Accessor: `client.Properties` · Source: `src/Zillapi/Api/Properties.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBatchPropertyJob

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateBatchPropertyJob(CreateBatchPropertyJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `JobAccepted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateBatchPropertyJobRequest` | `src/Zillapi/Requests/Properties/CreateBatchPropertyJobRequest.cs` |
| `BatchPropertyRequest` | `src/Zillapi/Models/BatchPropertyRequest.cs` |
| `JobAccepted` | `src/Zillapi/Models/JobAccepted.cs` |

### GetPropertyAgent

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyAgent(GetPropertyAgentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Returns**: `AgentOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyAgentRequest` | `src/Zillapi/Requests/Properties/GetPropertyAgentRequest.cs` |
| `AgentOk` | `src/Zillapi/Models/AgentOk.cs` |

### GetPropertyByAddress

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyByAddress(GetPropertyByAddressRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Address`
- **Query params (wire ← C#)**: `address` ← `Address`, `status` ← `Status`, `fields` ← `Fields`
- **Returns**: `PropertyOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyByAddressRequest` | `src/Zillapi/Requests/Properties/GetPropertyByAddressRequest.cs` |
| `StatusZillapiZillowPropertyDataPropertiesApi` | `src/Zillapi/Models/Enums/StatusZillapiZillowPropertyDataPropertiesApi.cs` |
| `PropertyOk` | `src/Zillapi/Models/PropertyOk.cs` |

### GetPropertyByUrl

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyByUrl(GetPropertyByUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Url`
- **Query params (wire ← C#)**: `url` ← `Url`, `status` ← `Status`, `extract_units` ← `ExtractUnits`, `fields` ← `Fields`
- **Returns**: `PropertyOk`
- **Error**: `ApiException<GetPropertyByUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 404, 429, 502, 504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPropertyByUrlRequest` | `src/Zillapi/Requests/Properties/GetPropertyByUrlRequest.cs` |
| `StatusZillapiZillowPropertyDataPropertiesApi` | `src/Zillapi/Models/Enums/StatusZillapiZillowPropertyDataPropertiesApi.cs` |
| `ExtractUnits` | `src/Zillapi/Models/Enums/ExtractUnits.cs` |
| `PropertyOk` | `src/Zillapi/Models/PropertyOk.cs` |
| `GetPropertyByUrlError` | `src/Zillapi/Errors/GetPropertyByUrlError.cs` |
| `ApiErrorModel` | `src/Zillapi/Models/ApiErrorModel.cs` |

### GetPropertyByZpid

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyByZpid(GetPropertyByZpidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `PropertyCachedOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyByZpidRequest` | `src/Zillapi/Requests/Properties/GetPropertyByZpidRequest.cs` |
| `PropertyCachedOk` | `src/Zillapi/Models/PropertyCachedOk.cs` |

### GetPropertyFacts

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyFacts(GetPropertyFactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Returns**: `FactsOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyFactsRequest` | `src/Zillapi/Requests/Properties/GetPropertyFactsRequest.cs` |
| `FactsOk` | `src/Zillapi/Models/FactsOk.cs` |

### GetPropertyNearby

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyNearby(GetPropertyNearbyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Returns**: `NearbyOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyNearbyRequest` | `src/Zillapi/Requests/Properties/GetPropertyNearbyRequest.cs` |
| `NearbyOk` | `src/Zillapi/Models/NearbyOk.cs` |

### GetPropertyOpenHouses

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyOpenHouses(GetPropertyOpenHousesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Returns**: `OpenHousesOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyOpenHousesRequest` | `src/Zillapi/Requests/Properties/GetPropertyOpenHousesRequest.cs` |
| `OpenHousesOk` | `src/Zillapi/Models/OpenHousesOk.cs` |

### GetPropertyPhotos

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyPhotos(GetPropertyPhotosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Returns**: `PhotosOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyPhotosRequest` | `src/Zillapi/Requests/Properties/GetPropertyPhotosRequest.cs` |
| `PhotosOk` | `src/Zillapi/Models/PhotosOk.cs` |

### GetPropertyPriceHistory

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyPriceHistory(GetPropertyPriceHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Returns**: `PriceHistoryOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyPriceHistoryRequest` | `src/Zillapi/Requests/Properties/GetPropertyPriceHistoryRequest.cs` |
| `PriceHistoryOk` | `src/Zillapi/Models/PriceHistoryOk.cs` |

### GetPropertySchools

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertySchools(GetPropertySchoolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Returns**: `SchoolsOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertySchoolsRequest` | `src/Zillapi/Requests/Properties/GetPropertySchoolsRequest.cs` |
| `SchoolsOk` | `src/Zillapi/Models/SchoolsOk.cs` |

### GetPropertyTaxHistory

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyTaxHistory(GetPropertyTaxHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Returns**: `TaxHistoryOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyTaxHistoryRequest` | `src/Zillapi/Requests/Properties/GetPropertyTaxHistoryRequest.cs` |
| `TaxHistoryOk` | `src/Zillapi/Models/TaxHistoryOk.cs` |

### GetPropertyZestimate

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPropertyZestimate(GetPropertyZestimateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zpid`
- **Returns**: `ZestimateOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPropertyZestimateRequest` | `src/Zillapi/Requests/Properties/GetPropertyZestimateRequest.cs` |
| `ZestimateOk` | `src/Zillapi/Models/ZestimateOk.cs` |

