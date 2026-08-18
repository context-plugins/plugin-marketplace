<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountCompanyLevel — operations

Accessor: `client.AccountCompanyLevel` · Source: `Api/AccountCompanyLevel.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompanies
- **Server group**: `Default9`
- **Signature**: `GetCompanies(int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListCompanyResponse`
- **Error**: `SdkException<GetCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListCompanyResponse` | `Models/ListCompanyResponse.cs` |
| `GetCompaniesError` | `Errors/GetCompaniesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyId
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyId(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Company2`
- **Error**: `SdkException<GetCompaniesCompanyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Company2` | `Models/Company2.cs` |
| `GetCompaniesCompanyIdError` | `Errors/GetCompaniesCompanyIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdMerchants
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdMerchants(string companyId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListMerchantResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdMerchantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListMerchantResponse` | `Models/ListMerchantResponse.cs` |
| `GetCompaniesCompanyIdMerchantsError` | `Errors/GetCompaniesCompanyIdMerchantsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

