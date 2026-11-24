<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignRequests — operations

Accessor: `client.SignRequests` · Source: `src/JuriSign/Api/SignRequests.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelSignRequest

- **Auth**: `options.BearerAuth`
- **Signature**: `CancelSignRequest(CancelSignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SignRequestsCancelResponse`
- **Error**: `ApiException<CancelSignRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value)` [401] · `TryGetNotFound1([NotNullWhen(true)] out NotFound1? value)` [404] · `TryGetError1([NotNullWhen(true)] out Error1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelSignRequest` | `src/JuriSign/Requests/SignRequests/CancelSignRequest.cs` |
| `SignRequestsCancelResponse` | `src/JuriSign/Models/SignRequestsCancelResponse.cs` |
| `CancelSignRequestError` | `src/JuriSign/Errors/CancelSignRequestError.cs` |
| `Unauthenticated1` | `src/JuriSign/Models/Unauthenticated1.cs` |
| `NotFound1` | `src/JuriSign/Models/NotFound1.cs` |
| `Error1` | `src/JuriSign/Models/Error1.cs` |

### CreateSignRequest

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateSignRequest(CreateSignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SignRequestsResponse1`
- **Error**: `ApiException<CreateSignRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value)` [401] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSignRequest` | `src/JuriSign/Requests/SignRequests/CreateSignRequest.cs` |
| `CreateSignRequestInput` | `src/JuriSign/Models/CreateSignRequestInput.cs` |
| `SignRequestsResponse1` | `src/JuriSign/Models/SignRequestsResponse1.cs` |
| `CreateSignRequestError` | `src/JuriSign/Errors/CreateSignRequestError.cs` |
| `Unauthenticated1` | `src/JuriSign/Models/Unauthenticated1.cs` |
| `ValidationError1` | `src/JuriSign/Models/ValidationError1.cs` |

### DownloadProof

- **Auth**: `options.BearerAuth`
- **Signature**: `DownloadProof(DownloadProofRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DownloadProofError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value)` [401] · `TryGetNotFound1([NotNullWhen(true)] out NotFound1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadProofRequest` | `src/JuriSign/Requests/SignRequests/DownloadProofRequest.cs` |
| `DownloadProofError` | `src/JuriSign/Errors/DownloadProofError.cs` |
| `Unauthenticated1` | `src/JuriSign/Models/Unauthenticated1.cs` |
| `NotFound1` | `src/JuriSign/Models/NotFound1.cs` |

### DownloadSignedPdf

- **Auth**: `options.BearerAuth`
- **Signature**: `DownloadSignedPdf(DownloadSignedPdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DownloadSignedPdfError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value)` [401] · `TryGetNotFound1([NotNullWhen(true)] out NotFound1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadSignedPdfRequest` | `src/JuriSign/Requests/SignRequests/DownloadSignedPdfRequest.cs` |
| `DownloadSignedPdfError` | `src/JuriSign/Errors/DownloadSignedPdfError.cs` |
| `Unauthenticated1` | `src/JuriSign/Models/Unauthenticated1.cs` |
| `NotFound1` | `src/JuriSign/Models/NotFound1.cs` |

### GetSignRequest

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSignRequest(GetSignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SignRequestsResponse2`
- **Error**: `ApiException<GetSignRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value)` [401] · `TryGetNotFound1([NotNullWhen(true)] out NotFound1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignRequest` | `src/JuriSign/Requests/SignRequests/GetSignRequest.cs` |
| `SignRequestsResponse2` | `src/JuriSign/Models/SignRequestsResponse2.cs` |
| `GetSignRequestError` | `src/JuriSign/Errors/GetSignRequestError.cs` |
| `Unauthenticated1` | `src/JuriSign/Models/Unauthenticated1.cs` |
| `NotFound1` | `src/JuriSign/Models/NotFound1.cs` |

### ListSignRequests

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSignRequests(ListSignRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `per_page` ← `PerPage`, `page` ← `Page`
- **Returns**: `SignRequestsResponse`
- **Error**: `ApiException<ListSignRequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSignRequestsRequest` | `src/JuriSign/Requests/SignRequests/ListSignRequestsRequest.cs` |
| `StatusJuriSignSignRequestsApi` | `src/JuriSign/Models/Enums/StatusJuriSignSignRequestsApi.cs` |
| `SignRequestsResponse` | `src/JuriSign/Models/SignRequestsResponse.cs` |
| `ListSignRequestsError` | `src/JuriSign/Errors/ListSignRequestsError.cs` |
| `Unauthenticated1` | `src/JuriSign/Models/Unauthenticated1.cs` |

### SendSignRequest

- **Auth**: `options.BearerAuth`
- **Signature**: `SendSignRequest(SendSignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SignRequestsSendResponse`
- **Error**: `ApiException<SendSignRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value)` [401] · `TryGetNotFound1([NotNullWhen(true)] out NotFound1? value)` [404] · `TryGetError1([NotNullWhen(true)] out Error1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendSignRequest` | `src/JuriSign/Requests/SignRequests/SendSignRequest.cs` |
| `SignRequestsSendResponse` | `src/JuriSign/Models/SignRequestsSendResponse.cs` |
| `SendSignRequestError` | `src/JuriSign/Errors/SendSignRequestError.cs` |
| `Unauthenticated1` | `src/JuriSign/Models/Unauthenticated1.cs` |
| `NotFound1` | `src/JuriSign/Models/NotFound1.cs` |
| `Error1` | `src/JuriSign/Models/Error1.cs` |

