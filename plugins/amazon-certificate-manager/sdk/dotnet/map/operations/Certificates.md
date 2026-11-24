<!-- Generated file — do not edit; regenerated with the SDK. -->

# Certificates — operations

Accessor: `client.Certificates` · Source: `src/AwsCertificateManager/Api/Certificates.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteCertificate(DeleteCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCertificateOperationRequest` | `src/AwsCertificateManager/Requests/Certificates/DeleteCertificateOperationRequest.cs` |
| `XAmzTargetAwsCertificateManagerCertificatesApi` | `src/AwsCertificateManager/Models/Enums/XAmzTargetAwsCertificateManagerCertificatesApi.cs` |
| `DeleteCertificateError` | `src/AwsCertificateManager/Errors/DeleteCertificateError.cs` |

### DescribeCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeCertificate(DescribeCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeCertificateOperationRequest` | `src/AwsCertificateManager/Requests/Certificates/DescribeCertificateOperationRequest.cs` |
| `XAmzTarget1AwsCertificateManagerCertificatesApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget1AwsCertificateManagerCertificatesApi.cs` |
| `DescribeCertificateError` | `src/AwsCertificateManager/Errors/DescribeCertificateError.cs` |

### ExportCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `ExportCertificate(ExportCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ExportCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExportCertificateOperationRequest` | `src/AwsCertificateManager/Requests/Certificates/ExportCertificateOperationRequest.cs` |
| `XAmzTarget2AwsCertificateManagerCertificatesApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget2AwsCertificateManagerCertificatesApi.cs` |
| `ExportCertificateError` | `src/AwsCertificateManager/Errors/ExportCertificateError.cs` |

### GetCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `GetCertificate(GetCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCertificateOperationRequest` | `src/AwsCertificateManager/Requests/Certificates/GetCertificateOperationRequest.cs` |
| `XAmzTarget3AwsCertificateManagerCertificatesApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget3AwsCertificateManagerCertificatesApi.cs` |
| `GetCertificateError` | `src/AwsCertificateManager/Errors/GetCertificateError.cs` |

### ImportCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `ImportCertificate(ImportCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ImportCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImportCertificateOperationRequest` | `src/AwsCertificateManager/Requests/Certificates/ImportCertificateOperationRequest.cs` |
| `XAmzTarget4AwsCertificateManagerCertificatesApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget4AwsCertificateManagerCertificatesApi.cs` |
| `ImportCertificateError` | `src/AwsCertificateManager/Errors/ImportCertificateError.cs` |

### ListCertificates

- **Auth**: `options.Sigv4`
- **Signature**: `ListCertificates(ListCertificatesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCertificatesOperationRequest` | `src/AwsCertificateManager/Requests/Certificates/ListCertificatesOperationRequest.cs` |
| `XAmzTarget5` | `src/AwsCertificateManager/Models/Enums/XAmzTarget5.cs` |
| `ListCertificatesError` | `src/AwsCertificateManager/Errors/ListCertificatesError.cs` |

### RequestCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `RequestCertificate(RequestCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RequestCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RequestCertificateOperationRequest` | `src/AwsCertificateManager/Requests/Certificates/RequestCertificateOperationRequest.cs` |
| `XAmzTarget8` | `src/AwsCertificateManager/Models/Enums/XAmzTarget8.cs` |
| `RequestCertificateError` | `src/AwsCertificateManager/Errors/RequestCertificateError.cs` |

### RevokeCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `RevokeCertificate(RevokeCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RevokeCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevokeCertificateOperationRequest` | `src/AwsCertificateManager/Requests/Certificates/RevokeCertificateOperationRequest.cs` |
| `XAmzTarget6` | `src/AwsCertificateManager/Models/Enums/XAmzTarget6.cs` |
| `RevokeCertificateError` | `src/AwsCertificateManager/Errors/RevokeCertificateError.cs` |

### SearchCertificates

- **Auth**: `options.Sigv4`
- **Signature**: `SearchCertificates(SearchCertificatesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SearchCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCertificatesOperationRequest` | `src/AwsCertificateManager/Requests/Certificates/SearchCertificatesOperationRequest.cs` |
| `XAmzTarget7` | `src/AwsCertificateManager/Models/Enums/XAmzTarget7.cs` |
| `SearchCertificatesError` | `src/AwsCertificateManager/Errors/SearchCertificatesError.cs` |

