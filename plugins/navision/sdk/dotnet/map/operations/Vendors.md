<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.Vendors` · Source: `src/MicrosoftDynamicsNav/Api/Vendors.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateVendor

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateVendor(CreateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `Vendor`
- **Error**: `ApiException<CreateVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorRequest` | `src/MicrosoftDynamicsNav/Requests/Vendors/CreateVendorRequest.cs` |
| `VendorCreate` | `src/MicrosoftDynamicsNav/Models/VendorCreate.cs` |
| `Vendor` | `src/MicrosoftDynamicsNav/Models/Vendor.cs` |
| `CreateVendorError` | `src/MicrosoftDynamicsNav/Errors/CreateVendorError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### DeleteVendor

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeleteVendor(DeleteVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `VendorId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVendorRequest` | `src/MicrosoftDynamicsNav/Requests/Vendors/DeleteVendorRequest.cs` |
| `DeleteVendorError` | `src/MicrosoftDynamicsNav/Errors/DeleteVendorError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### GetVendor

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetVendor(GetVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `VendorId`
- **Query params (wire ← C#)**: `$select` ← `Select`
- **Returns**: `Vendor`
- **Error**: `ApiException<GetVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorRequest` | `src/MicrosoftDynamicsNav/Requests/Vendors/GetVendorRequest.cs` |
| `Vendor` | `src/MicrosoftDynamicsNav/Models/Vendor.cs` |
| `GetVendorError` | `src/MicrosoftDynamicsNav/Errors/GetVendorError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### ListVendors

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListVendors(ListVendorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$select` ← `Select`
- **Returns**: `CompaniesApiVendorsResponse`
- **Error**: `ApiException<ListVendorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVendorsRequest` | `src/MicrosoftDynamicsNav/Requests/Vendors/ListVendorsRequest.cs` |
| `CompaniesApiVendorsResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiVendorsResponse.cs` |
| `ListVendorsError` | `src/MicrosoftDynamicsNav/Errors/ListVendorsError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### UpdateVendor

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdateVendor(UpdateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `VendorId`, `IfMatch`, `Body`
- **Returns**: `Vendor`
- **Error**: `ApiException<UpdateVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVendorRequest` | `src/MicrosoftDynamicsNav/Requests/Vendors/UpdateVendorRequest.cs` |
| `VendorUpdate` | `src/MicrosoftDynamicsNav/Models/VendorUpdate.cs` |
| `Vendor` | `src/MicrosoftDynamicsNav/Models/Vendor.cs` |
| `UpdateVendorError` | `src/MicrosoftDynamicsNav/Errors/UpdateVendorError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

