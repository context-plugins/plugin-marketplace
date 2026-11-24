<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profile — operations

Accessor: `client.Profile` · Source: `src/FinancialModelingPrep/Api/Profile.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompanyProfile

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `GetCompanyProfile(GetCompanyProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Symbol`
- **Returns**: `IReadOnlyList<CompanyProfile>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetCompanyProfileRequest` | `src/FinancialModelingPrep/Requests/Profile/GetCompanyProfileRequest.cs` |
| `CompanyProfile` | `src/FinancialModelingPrep/Models/CompanyProfile.cs` |

