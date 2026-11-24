<!-- Generated file — do not edit; regenerated with the SDK. -->

# DocumentReferenceApi — operations

Accessor: `client.DocumentReferenceApi` · Source: `src/HealthGorilla/Api/DocumentReferenceApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ReadDocumentReference

- **Auth**: `options.BearerAuth`
- **Signature**: `ReadDocumentReference(ReadDocumentReferenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `DocumentReference`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReadDocumentReferenceRequest` | `src/HealthGorilla/Requests/DocumentReferenceApi/ReadDocumentReferenceRequest.cs` |
| `DocumentReference` | `src/HealthGorilla/Models/DocumentReference.cs` |

### SearchDocumentReferences

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchDocumentReferences(SearchDocumentReferencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `patient` ← `Patient`, `type` ← `Type`, `_count` ← `Count`
- **Returns**: `Bundle`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchDocumentReferencesRequest` | `src/HealthGorilla/Requests/DocumentReferenceApi/SearchDocumentReferencesRequest.cs` |
| `Bundle` | `src/HealthGorilla/Models/Bundle.cs` |

