# AccountCompanyLevel — operations

Accessor: `client.AccountCompanyLevel` · Source: `Api/AccountCompanyLevel.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCompanies
- **HTTP**: `GET /companies` (Default9 (management-test))
- **Notes**: Returns the list of company accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. To make this request, your API credential must have the following roles : Management API—Account read
- **Signature**: `GetCompanies(int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListCompanyResponse`
- **Error**: `SdkException<GetCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyId
- **HTTP**: `GET /companies/{companyId}` (Default9 (management-test))
- **Notes**: Returns the company account specified in the path. Your API credential must have access to the company account. To make this request, your API credential must have the following roles : * Management API—Account read
- **Signature**: `GetCompaniesCompanyId(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Company2`
- **Error**: `SdkException<GetCompaniesCompanyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdMerchants
- **HTTP**: `GET /companies/{companyId}/merchants` (Default9 (management-test))
- **Notes**: Returns the list of merchant accounts under the company account specified in the path. The list only includes merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. To make this request, your API credential must have the following roles : * Management API—Account read
- **Signature**: `GetCompaniesCompanyIdMerchants(string companyId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListMerchantResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdMerchantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
