<!-- Generated file — do not edit; regenerated with the SDK. -->

# Synchronization — operations

Accessor: `client.Synchronization` · Source: `src/Contentstack/Api/Synchronization.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SyncContent

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `SyncContent(SyncContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`, `AccessToken`
- **Query params (wire ← C#)**: `init` ← `Init`, `sync_token` ← `SyncToken`, `pagination_token` ← `PaginationToken`, `type` ← `Type`, `content_type_uid` ← `ContentTypeUid`, `locale` ← `Locale`
- **Returns**: `SyncResponse`
- **Error**: `ApiException<SyncContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SyncContentRequest` | `src/Contentstack/Requests/Synchronization/SyncContentRequest.cs` |
| `Type1ContentstackContentDeliverySynchronizationApi` | `src/Contentstack/Models/Enums/Type1ContentstackContentDeliverySynchronizationApi.cs` |
| `SyncResponse` | `src/Contentstack/Models/SyncResponse.cs` |
| `SyncContentError` | `src/Contentstack/Errors/SyncContentError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

