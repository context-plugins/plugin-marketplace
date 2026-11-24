<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntryVariants — operations

Accessor: `client.EntryVariants` · Source: `src/Contentstack/Api/EntryVariants.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAllEntryVariants

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetAllEntryVariants(GetAllEntryVariantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `EntryUid`, `ApiKey`, `AccessToken`
- **Returns**: `EntryVariantList`
- **Error**: `ApiException<GetAllEntryVariantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllEntryVariantsRequest` | `src/Contentstack/Requests/EntryVariants/GetAllEntryVariantsRequest.cs` |
| `EntryVariantList` | `src/Contentstack/Models/EntryVariantList.cs` |
| `GetAllEntryVariantsError` | `src/Contentstack/Errors/GetAllEntryVariantsError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### GetSingleEntryVariant

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetSingleEntryVariant(GetSingleEntryVariantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `EntryUid`, `VariantUid`, `ApiKey`, `AccessToken`
- **Returns**: `EntryVariant`
- **Error**: `ApiException<GetSingleEntryVariantError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSingleEntryVariantRequest` | `src/Contentstack/Requests/EntryVariants/GetSingleEntryVariantRequest.cs` |
| `EntryVariant` | `src/Contentstack/Models/EntryVariant.cs` |
| `GetSingleEntryVariantError` | `src/Contentstack/Errors/GetSingleEntryVariantError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

