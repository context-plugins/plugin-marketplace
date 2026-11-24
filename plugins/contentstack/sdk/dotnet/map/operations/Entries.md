<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entries — operations

Accessor: `client.Entries` · Source: `src/Contentstack/Api/Entries.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEntry

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `CreateEntry(CreateEntryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `ApiKey`, `Body`
- **Query params (wire ← C#)**: `locale` ← `Locale`
- **Returns**: `Entry2`
- **Error**: `ApiException<CreateEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400] · `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEntryOperationRequest` | `src/Contentstack/Requests/Entries/CreateEntryOperationRequest.cs` |
| `CreateEntryRequest` | `src/Contentstack/Models/CreateEntryRequest.cs` |
| `Entry2` | `src/Contentstack/Models/Entry2.cs` |
| `CreateEntryError` | `src/Contentstack/Errors/CreateEntryError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### DeleteEntry

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `DeleteEntry(DeleteEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `EntryUid`, `ApiKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEntryRequest` | `src/Contentstack/Requests/Entries/DeleteEntryRequest.cs` |
| `DeleteEntryError` | `src/Contentstack/Errors/DeleteEntryError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### GetAllEntries

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetAllEntries(GetAllEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `ApiKey`, `AccessToken`
- **Query params (wire ← C#)**: `locale` ← `Locale`, `skip` ← `Skip`, `limit` ← `Limit`, `query` ← `Query`, `include_count` ← `IncludeCount`, `include_content_type` ← `IncludeContentType`, `include_reference` ← `IncludeReference`, `only` ← `Only`, `except` ← `Except`, `asc` ← `Asc`, `desc` ← `Desc`
- **Returns**: `EntryList`
- **Error**: `ApiException<GetAllEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllEntriesRequest` | `src/Contentstack/Requests/Entries/GetAllEntriesRequest.cs` |
| `EntryList` | `src/Contentstack/Models/EntryList.cs` |
| `GetAllEntriesError` | `src/Contentstack/Errors/GetAllEntriesError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### GetSingleEntry

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetSingleEntry(GetSingleEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `EntryUid`, `ApiKey`, `AccessToken`
- **Query params (wire ← C#)**: `locale` ← `Locale`, `include_reference` ← `IncludeReference`, `version` ← `Version`
- **Returns**: `Entry`
- **Error**: `ApiException<GetSingleEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSingleEntryRequest` | `src/Contentstack/Requests/Entries/GetSingleEntryRequest.cs` |
| `Entry` | `src/Contentstack/Models/Entry.cs` |
| `GetSingleEntryError` | `src/Contentstack/Errors/GetSingleEntryError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### PublishEntry

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `PublishEntry(PublishEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `EntryUid`, `ApiKey`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PublishEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400] · `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishEntryRequest` | `src/Contentstack/Requests/Entries/PublishEntryRequest.cs` |
| `PublishRequest` | `src/Contentstack/Models/PublishRequest.cs` |
| `PublishEntryError` | `src/Contentstack/Errors/PublishEntryError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### UnpublishEntry

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `UnpublishEntry(UnpublishEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `EntryUid`, `ApiKey`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UnpublishEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400] · `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnpublishEntryRequest` | `src/Contentstack/Requests/Entries/UnpublishEntryRequest.cs` |
| `PublishRequest` | `src/Contentstack/Models/PublishRequest.cs` |
| `UnpublishEntryError` | `src/Contentstack/Errors/UnpublishEntryError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### UpdateEntry

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `UpdateEntry(UpdateEntryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContentTypeUid`, `EntryUid`, `ApiKey`, `Body`
- **Query params (wire ← C#)**: `locale` ← `Locale`
- **Returns**: `Entry2`
- **Error**: `ApiException<UpdateEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400] · `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEntryOperationRequest` | `src/Contentstack/Requests/Entries/UpdateEntryOperationRequest.cs` |
| `UpdateEntryRequest` | `src/Contentstack/Models/UpdateEntryRequest.cs` |
| `Entry2` | `src/Contentstack/Models/Entry2.cs` |
| `UpdateEntryError` | `src/Contentstack/Errors/UpdateEntryError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

