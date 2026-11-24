<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManifestApi — operations

Accessor: `client.ManifestApi` · Source: `src/Contentstack/Api/ManifestApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetManifest

- **Server group**: `DefaultContentstackEventsApi`
- **Signature**: `GetManifest(GetManifestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`
- **Returns**: `Manifest`
- **Error**: `ApiException<GetManifestError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetManifestRequest` | `src/Contentstack/Requests/ManifestApi/GetManifestRequest.cs` |
| `Manifest` | `src/Contentstack/Models/Manifest.cs` |
| `GetManifestError` | `src/Contentstack/Errors/GetManifestError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

