<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.Storage` · Source: `src/MrScraper/Api/Storage.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetStorageByKey

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `GetStorageByKey(GetStorageByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetStorageByKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetStorage400Error1([NotNullWhen(true)] out Storage400Error1? value)` [400] · `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [401] · `TryGetStorage403Error1([NotNullWhen(true)] out Storage403Error1? value)` [403] · `TryGetStorage404Error1([NotNullWhen(true)] out Storage404Error1? value)` [404] · `TryGetStorage503Error1([NotNullWhen(true)] out Storage503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStorageByKeyRequest` | `src/MrScraper/Requests/Storage/GetStorageByKeyRequest.cs` |
| `GetStorageByKeyError` | `src/MrScraper/Errors/GetStorageByKeyError.cs` |
| `Storage400Error1` | `src/MrScraper/Models/Storage400Error1.cs` |
| `Storage403Error1` | `src/MrScraper/Models/Storage403Error1.cs` |
| `Storage404Error1` | `src/MrScraper/Models/Storage404Error1.cs` |
| `Storage503Error1` | `src/MrScraper/Models/Storage503Error1.cs` |

