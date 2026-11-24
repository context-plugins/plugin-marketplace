<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.CustomFields` · Source: `src/Beehiiv/Api/CustomFields.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create4

- **Signature**: `Create4(Create4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `CustomFieldResponse`
- **Error**: `ApiException<Create4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create4Request` | `src/Beehiiv/Requests/CustomFields/Create4Request.cs` |
| `PublicationsCustomFieldsRequest` | `src/Beehiiv/Models/PublicationsCustomFieldsRequest.cs` |
| `CustomFieldResponse` | `src/Beehiiv/Models/CustomFieldResponse.cs` |
| `Create4Error` | `src/Beehiiv/Errors/Create4Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Delete

- **Signature**: `Delete(DeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Id`, `Authorization`
- **Returns**: `CustomFieldsDeleteResponse`
- **Error**: `ApiException<DeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRequest` | `src/Beehiiv/Requests/CustomFields/DeleteRequest.cs` |
| `CustomFieldsDeleteResponse` | `src/Beehiiv/Models/CustomFieldsDeleteResponse.cs` |
| `DeleteError` | `src/Beehiiv/Errors/DeleteError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index10

- **Signature**: `Index10(Index10Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `CustomFieldIndexResponse`
- **Error**: `ApiException<Index10Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index10Request` | `src/Beehiiv/Requests/CustomFields/Index10Request.cs` |
| `CustomFieldIndexResponse` | `src/Beehiiv/Models/CustomFieldIndexResponse.cs` |
| `Index10Error` | `src/Beehiiv/Errors/Index10Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Patch2

- **Signature**: `Patch2(Patch2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Id`, `Authorization`
- **Returns**: `CustomFieldsPatchResponse`
- **Error**: `ApiException<Patch2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Patch2Request` | `src/Beehiiv/Requests/CustomFields/Patch2Request.cs` |
| `PublicationsCustomFieldsRequest1` | `src/Beehiiv/Models/PublicationsCustomFieldsRequest1.cs` |
| `CustomFieldsPatchResponse` | `src/Beehiiv/Models/CustomFieldsPatchResponse.cs` |
| `Patch2Error` | `src/Beehiiv/Errors/Patch2Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Put2

- **Signature**: `Put2(Put2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Id`, `Authorization`
- **Returns**: `CustomFieldResponse`
- **Error**: `ApiException<Put2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Put2Request` | `src/Beehiiv/Requests/CustomFields/Put2Request.cs` |
| `PublicationsCustomFieldsRequest1` | `src/Beehiiv/Models/PublicationsCustomFieldsRequest1.cs` |
| `CustomFieldResponse` | `src/Beehiiv/Models/CustomFieldResponse.cs` |
| `Put2Error` | `src/Beehiiv/Errors/Put2Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show7

- **Signature**: `Show7(Show7Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Id`, `Authorization`
- **Returns**: `CustomFieldResponse`
- **Error**: `ApiException<Show7Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show7Request` | `src/Beehiiv/Requests/CustomFields/Show7Request.cs` |
| `CustomFieldResponse` | `src/Beehiiv/Models/CustomFieldResponse.cs` |
| `Show7Error` | `src/Beehiiv/Errors/Show7Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

