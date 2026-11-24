<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sql — operations

Accessor: `client.Sql` · Source: `src/PlinthUsGrantsData/Api/Sql.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostApiV1Sql

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostApiV1Sql(PostApiV1SqlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SqlResponse`
- **Error**: `ApiException<PostApiV1SqlError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1SqlRequest` | `src/PlinthUsGrantsData/Requests/Sql/PostApiV1SqlRequest.cs` |
| `ApiV1SqlRequest` | `src/PlinthUsGrantsData/Models/ApiV1SqlRequest.cs` |
| `SqlResponse` | `src/PlinthUsGrantsData/Models/SqlResponse.cs` |
| `PostApiV1SqlError` | `src/PlinthUsGrantsData/Errors/PostApiV1SqlError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |

### RunSql

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RunSql(RunSqlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<RunSqlError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunSqlRequest` | `src/PlinthUsGrantsData/Requests/Sql/RunSqlRequest.cs` |
| `ApiSqlRequest` | `src/PlinthUsGrantsData/Models/ApiSqlRequest.cs` |
| `RunSqlError` | `src/PlinthUsGrantsData/Errors/RunSqlError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |

