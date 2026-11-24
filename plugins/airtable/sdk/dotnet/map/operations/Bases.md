<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bases — operations

Accessor: `client.Bases` · Source: `src/Airtable/Api/Bases.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBase

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateBase(CreateBaseOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BaseSchema`
- **Error**: `ApiException<CreateBaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBaseOperationRequest` | `src/Airtable/Requests/Bases/CreateBaseOperationRequest.cs` |
| `CreateBaseRequest` | `src/Airtable/Models/CreateBaseRequest.cs` |
| `BaseSchema` | `src/Airtable/Models/BaseSchema.cs` |
| `CreateBaseError` | `src/Airtable/Errors/CreateBaseError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### GetBaseSchema

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBaseSchema(GetBaseSchemaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`
- **Query params (wire ← C#)**: `include` ← `Include`
- **Returns**: `MetaBasesTablesResponse`
- **Error**: `ApiException<GetBaseSchemaError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBaseSchemaRequest` | `src/Airtable/Requests/Bases/GetBaseSchemaRequest.cs` |
| `Include` | `src/Airtable/Models/Enums/Include.cs` |
| `MetaBasesTablesResponse` | `src/Airtable/Models/MetaBasesTablesResponse.cs` |
| `GetBaseSchemaError` | `src/Airtable/Errors/GetBaseSchemaError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### ListBases

- **Auth**: `options.BearerAuth`
- **Signature**: `ListBases(ListBasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `offset` ← `Offset`
- **Returns**: `BaseList`
- **Error**: `ApiException<ListBasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBasesRequest` | `src/Airtable/Requests/Bases/ListBasesRequest.cs` |
| `BaseList` | `src/Airtable/Models/BaseList.cs` |
| `ListBasesError` | `src/Airtable/Errors/ListBasesError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### Whoami

- **Auth**: `options.BearerAuth`
- **Signature**: `Whoami(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `MetaWhoamiResponse`
- **Error**: `ApiException<WhoamiError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetaWhoamiResponse` | `src/Airtable/Models/MetaWhoamiResponse.cs` |
| `WhoamiError` | `src/Airtable/Errors/WhoamiError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

