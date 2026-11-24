<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.Companies` · Source: `src/RelmCrm/Api/Companies.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCompany

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateCompany(CreateCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Company`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateCompanyRequest` | `src/RelmCrm/Requests/Companies/CreateCompanyRequest.cs` |
| `CompanyInput` | `src/RelmCrm/Models/CompanyInput.cs` |
| `Company` | `src/RelmCrm/Models/Company.cs` |

### DeleteCompany

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteCompany(DeleteCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteCompanyRequest` | `src/RelmCrm/Requests/Companies/DeleteCompanyRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### GetCompany

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetCompany(GetCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Company`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetCompanyRequest` | `src/RelmCrm/Requests/Companies/GetCompanyRequest.cs` |
| `Company` | `src/RelmCrm/Models/Company.cs` |

### ListCompanies

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListCompanies(ListCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `include_deleted` ← `IncludeDeleted`, `q` ← `Q`, `domain` ← `Domain`
- **Returns**: `CompanyList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListCompaniesRequest` | `src/RelmCrm/Requests/Companies/ListCompaniesRequest.cs` |
| `CompanyList` | `src/RelmCrm/Models/CompanyList.cs` |

### RestoreCompany

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `RestoreCompany(RestoreCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Company`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RestoreCompanyRequest` | `src/RelmCrm/Requests/Companies/RestoreCompanyRequest.cs` |
| `Company` | `src/RelmCrm/Models/Company.cs` |

### UpdateCompany

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `UpdateCompany(UpdateCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Company`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateCompanyRequest` | `src/RelmCrm/Requests/Companies/UpdateCompanyRequest.cs` |
| `CompanyInput` | `src/RelmCrm/Models/CompanyInput.cs` |
| `Company` | `src/RelmCrm/Models/Company.cs` |

