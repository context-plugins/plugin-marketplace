# Databases — operations

Accessor: `client.Databases` · Source: `Api/Databases.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDatabase
- **HTTP**: `POST /databases` (Default (api))
- **Notes**: Creates a database as a subpage of the specified parent page, with the specified properties schema. A database can be created with a title, properties defining the schema, and an optional description. The parent must be a page that the integration has access to.
- **Signature**: `CreateDatabase(DatabasesRequest body, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `Database`
- **Error**: `SdkException<CreateDatabaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryDatabase
- **HTTP**: `POST /databases/{database_id}/query` (Default (api))
- **Notes**: Gets a list of Pages and/or Databases contained in the database, filtered and ordered according to the filter and sort conditions specified in the request body. Responses are paginated and limited to 100 results per request.
- **Signature**: `QueryDatabase(Guid databaseId, IReadOnlyList<string>? filterProperties, DatabasesQueryRequest? body, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filterProperties` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Query params (wire ← C#)**: `filter_properties` ← `filterProperties`
- **Returns**: `PaginatedList`
- **Error**: `SdkException<QueryDatabaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveDatabase
- **HTTP**: `GET /databases/{database_id}` (Default (api))
- **Notes**: Retrieves a Database object using the ID specified in the path. Returns the database properties schema and metadata.
- **Signature**: `RetrieveDatabase(Guid databaseId, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `Database`
- **Error**: `SdkException<RetrieveDatabaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDatabase
- **HTTP**: `PATCH /databases/{database_id}` (Default (api))
- **Notes**: Updates an existing database's title, description, or properties schema. Only the fields specified in the request body will be updated. To remove a property from the schema, set its value to null.
- **Signature**: `UpdateDatabase(Guid databaseId, DatabasesRequest1 body, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `Database`
- **Error**: `SdkException<UpdateDatabaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
