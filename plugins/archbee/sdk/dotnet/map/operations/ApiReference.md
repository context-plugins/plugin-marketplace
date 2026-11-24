<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiReference — operations

Accessor: `client.ApiReference` · Source: `src/Archbee/Api/ApiReference.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### InfoOpenApiDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `InfoOpenApiDocument(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `InfoApiReferenceResponse`
- **Error**: `ApiException<InfoOpenApiDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetInfoApiReference400Error1([NotNullWhen(true)] out InfoApiReference400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InfoApiReferenceResponse` | `src/Archbee/Models/InfoApiReferenceResponse.cs` |
| `InfoOpenApiDocumentError` | `src/Archbee/Errors/InfoOpenApiDocumentError.cs` |
| `InfoApiReference400Error1` | `src/Archbee/Models/InfoApiReference400Error1.cs` |

### SyncOpenApiDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `SyncOpenApiDocument(SyncOpenApiDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Returns**: `SyncApiReferenceResponse`
- **Error**: `ApiException<SyncOpenApiDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetSyncApiReference400Error1([NotNullWhen(true)] out SyncApiReference400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SyncOpenApiDocumentRequest` | `src/Archbee/Requests/ApiReference/SyncOpenApiDocumentRequest.cs` |
| `TypeEnum` | `src/Archbee/Models/Enums/TypeEnum.cs` |
| `OpenApiTryIt` | `src/Archbee/Models/Enums/OpenApiTryIt.cs` |
| `OpenApiUseOwnBackend` | `src/Archbee/Models/Enums/OpenApiUseOwnBackend.cs` |
| `ShowDownloadOpenApiFile` | `src/Archbee/Models/Enums/ShowDownloadOpenApiFile.cs` |
| `ShouldCreateSchemaCategory` | `src/Archbee/Models/Enums/ShouldCreateSchemaCategory.cs` |
| `ShouldCreateIntro` | `src/Archbee/Models/Enums/ShouldCreateIntro.cs` |
| `SyncApiReferenceResponse` | `src/Archbee/Models/SyncApiReferenceResponse.cs` |
| `SyncOpenApiDocumentError` | `src/Archbee/Errors/SyncOpenApiDocumentError.cs` |
| `SyncApiReference400Error1` | `src/Archbee/Models/SyncApiReference400Error1.cs` |

