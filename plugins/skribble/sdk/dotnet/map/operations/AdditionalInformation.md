<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdditionalInformation — operations

Accessor: `client.AdditionalInformation` · Source: `src/Skribble/Api/AdditionalInformation.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInfosFormat

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetInfosFormat(GetInfosFormatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `FormatInfosResponse`
- **Error**: `ApiException<GetInfosFormatError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInfosFormatRequest` | `src/Skribble/Requests/AdditionalInformation/GetInfosFormatRequest.cs` |
| `FormatInfosResponse` | `src/Skribble/Models/FormatInfosResponse.cs` |
| `GetInfosFormatError` | `src/Skribble/Errors/GetInfosFormatError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

### GetInfosSigners

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetInfosSigners(GetInfosSignersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyList<Signer>`
- **Error**: `ApiException<GetInfosSignersError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInfosSignersRequest` | `src/Skribble/Requests/AdditionalInformation/GetInfosSignersRequest.cs` |
| `Signer` | `src/Skribble/Models/Signer.cs` |
| `GetInfosSignersError` | `src/Skribble/Errors/GetInfosSignersError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

### GetInfosValidation

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetInfosValidation(GetInfosValidationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ValidationInfosResponse`
- **Error**: `ApiException<GetInfosValidationError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInfosValidationRequest` | `src/Skribble/Requests/AdditionalInformation/GetInfosValidationRequest.cs` |
| `ValidationInfosResponse` | `src/Skribble/Models/ValidationInfosResponse.cs` |
| `GetInfosValidationError` | `src/Skribble/Errors/GetInfosValidationError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

