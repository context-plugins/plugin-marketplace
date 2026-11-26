<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.Vendors` · Source: `src/Dynamics365BusinessCentral/Api/Vendors.cs` · 5 operations

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
| `CreateVendorRequest` | `src/Dynamics365BusinessCentral/Requests/Vendors/CreateVendorRequest.cs` |
| `VendorCreate` | `src/Dynamics365BusinessCentral/Models/VendorCreate.cs` |
| `Vendor` | `src/Dynamics365BusinessCentral/Models/Vendor.cs` |
| `CreateVendorError` | `src/Dynamics365BusinessCentral/Errors/CreateVendorError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### DeleteVendor

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeleteVendor(DeleteVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `VendorId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVendorRequest` | `src/Dynamics365BusinessCentral/Requests/Vendors/DeleteVendorRequest.cs` |
| `DeleteVendorError` | `src/Dynamics365BusinessCentral/Errors/DeleteVendorError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

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
| `GetVendorRequest` | `src/Dynamics365BusinessCentral/Requests/Vendors/GetVendorRequest.cs` |
| `Vendor` | `src/Dynamics365BusinessCentral/Models/Vendor.cs` |
| `GetVendorError` | `src/Dynamics365BusinessCentral/Errors/GetVendorError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

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
| `ListVendorsRequest` | `src/Dynamics365BusinessCentral/Requests/Vendors/ListVendorsRequest.cs` |
| `CompaniesApiVendorsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiVendorsResponse.cs` |
| `ListVendorsError` | `src/Dynamics365BusinessCentral/Errors/ListVendorsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UpdateVendor

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdateVendor(UpdateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `VendorId`, `IfMatch`, `Body`
- **Returns**: `Vendor`
- **Error**: `ApiException<UpdateVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVendorRequest` | `src/Dynamics365BusinessCentral/Requests/Vendors/UpdateVendorRequest.cs` |
| `VendorUpdate` | `src/Dynamics365BusinessCentral/Models/VendorUpdate.cs` |
| `Vendor` | `src/Dynamics365BusinessCentral/Models/Vendor.cs` |
| `UpdateVendorError` | `src/Dynamics365BusinessCentral/Errors/UpdateVendorError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

