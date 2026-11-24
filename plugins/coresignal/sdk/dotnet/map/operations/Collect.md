<!-- Generated file — do not edit; regenerated with the SDK. -->

# Collect — operations

Accessor: `client.Collect` · Source: `src/Coresignal/Api/Collect.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkCollectCompanies

- **Auth**: `options.ApiKey`
- **Signature**: `BulkCollectCompanies(BulkCollectCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<Company>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BulkCollectCompaniesRequest` | `src/Coresignal/Requests/Collect/BulkCollectCompaniesRequest.cs` |
| `BulkCollectRequest` | `src/Coresignal/Models/BulkCollectRequest.cs` |
| `Company` | `src/Coresignal/Models/Company.cs` |

### CollectCompany

- **Auth**: `options.ApiKey`
- **Signature**: `CollectCompany(CollectCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Company`
- **Error**: `ApiException<CollectCompanyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CollectCompanyRequest` | `src/Coresignal/Requests/Collect/CollectCompanyRequest.cs` |
| `Company` | `src/Coresignal/Models/Company.cs` |
| `CollectCompanyError` | `src/Coresignal/Errors/CollectCompanyError.cs` |

