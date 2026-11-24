<!-- Generated file — do not edit; regenerated with the SDK. -->

# ValidationApi — operations

Accessor: `client.ValidationApi` · Source: `src/Skribble/Api/ValidationApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteValidation

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `DeleteValidation(DeleteValidationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteValidationError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteValidationRequest` | `src/Skribble/Requests/ValidationApi/DeleteValidationRequest.cs` |
| `DeleteValidationError` | `src/Skribble/Errors/DeleteValidationError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

### PostValidateDocument

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `PostValidateDocument(PostValidateDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Content`
- **Query params (wire ← C#)**: `quality` ← `Quality`, `longTermValidation` ← `LongTermValidation`, `legislation` ← `Legislation`, `infos` ← `Infos`, `rejectVisualDifferences` ← `RejectVisualDifferences`, `rejectUndefinedChanges` ← `RejectUndefinedChanges`
- **Returns**: `DocumentValidationResponse`
- **Error**: `ApiException<PostValidateDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 413, 415, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostValidateDocumentRequest` | `src/Skribble/Requests/ValidationApi/PostValidateDocumentRequest.cs` |
| `Quality` | `src/Skribble/Models/Enums/Quality.cs` |
| `Legislation` | `src/Skribble/Models/Enums/Legislation.cs` |
| `Info` | `src/Skribble/Models/Enums/Info.cs` |
| `DocumentValidationResponse` | `src/Skribble/Models/DocumentValidationResponse.cs` |
| `PostValidateDocumentError` | `src/Skribble/Errors/PostValidateDocumentError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

### PostValidateSignature

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `PostValidateSignature(PostValidateSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Content`
- **Query params (wire ← C#)**: `quality` ← `Quality`, `longTermValidation` ← `LongTermValidation`, `legislation` ← `Legislation`, `infos` ← `Infos`
- **Returns**: `SignatureValidationResponse`
- **Error**: `ApiException<PostValidateSignatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 415, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostValidateSignatureRequest` | `src/Skribble/Requests/ValidationApi/PostValidateSignatureRequest.cs` |
| `Quality` | `src/Skribble/Models/Enums/Quality.cs` |
| `Legislation` | `src/Skribble/Models/Enums/Legislation.cs` |
| `Info` | `src/Skribble/Models/Enums/Info.cs` |
| `SignatureValidationResponse` | `src/Skribble/Models/SignatureValidationResponse.cs` |
| `PostValidateSignatureError` | `src/Skribble/Errors/PostValidateSignatureError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

