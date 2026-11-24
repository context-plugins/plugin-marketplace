<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnrichApi — operations

Accessor: `client.EnrichApi` · Source: `src/Basiq/Api/EnrichApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Enrich

- **Auth**: `options.ServicesToken`
- **Signature**: `Enrich(EnrichRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`, `Institution`, `Country`
- **Query params (wire ← C#)**: `q` ← `Q`, `institution` ← `Institution`, `country` ← `Country`, `mcc` ← `Mcc`, `accountType` ← `AccountType`, `amount` ← `Amount`
- **Returns**: `EnrichResponse`
- **Error**: `ApiException<EnrichError>` — **Case A (typed)**
- **Error accessors**: `TryGetEnrich400Error1([NotNullWhen(true)] out Enrich400Error1? value)` [400] · `TryGetEnrich403Error1([NotNullWhen(true)] out Enrich403Error1? value)` [403] · `TryGetEnrich500Error1([NotNullWhen(true)] out Enrich500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnrichRequest` | `src/Basiq/Requests/EnrichApi/EnrichRequest.cs` |
| `EnrichResponse` | `src/Basiq/Models/EnrichResponse.cs` |
| `EnrichError` | `src/Basiq/Errors/EnrichError.cs` |
| `Enrich400Error1` | `src/Basiq/Models/Enrich400Error1.cs` |
| `Enrich403Error1` | `src/Basiq/Models/Enrich403Error1.cs` |
| `Enrich500Error1` | `src/Basiq/Models/Enrich500Error1.cs` |

### GetMerchantById

- **Auth**: `options.ServicesToken`
- **Signature**: `GetMerchantById(GetMerchantByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MerchantId`
- **Returns**: `SingleMerchantResponse`
- **Error**: `ApiException<GetMerchantByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetMerchantNotFoundError([NotNullWhen(true)] out MerchantNotFoundError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMerchantByIdRequest` | `src/Basiq/Requests/EnrichApi/GetMerchantByIdRequest.cs` |
| `SingleMerchantResponse` | `src/Basiq/Models/SingleMerchantResponse.cs` |
| `GetMerchantByIdError` | `src/Basiq/Errors/GetMerchantByIdError.cs` |
| `MerchantNotFoundError` | `src/Basiq/Models/MerchantNotFoundError.cs` |

### MerchantSearch

- **Auth**: `options.ServicesToken`
- **Signature**: `MerchantSearch(MerchantSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `abn` ← `Abn`, `merchantName` ← `MerchantName`, `suburb` ← `Suburb`, `entityType` ← `EntityType`
- **Returns**: `MerchantsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MerchantSearchRequest` | `src/Basiq/Requests/EnrichApi/MerchantSearchRequest.cs` |
| `MerchantsResponse` | `src/Basiq/Models/MerchantsResponse.cs` |

