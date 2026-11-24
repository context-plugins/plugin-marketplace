<!-- Generated file — do not edit; regenerated with the SDK. -->

# BatchApi — operations

Accessor: `client.BatchApi` · Source: `src/Asana/Api/BatchApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBatchRequest

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateBatchRequest(CreateBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `BatchResponse1`
- **Error**: `ApiException<CreateBatchRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBatchRequest` | `src/Asana/Requests/BatchApi/CreateBatchRequest.cs` |
| `BatchRequest1` | `src/Asana/Models/BatchRequest1.cs` |
| `BatchResponse1` | `src/Asana/Models/BatchResponse1.cs` |
| `CreateBatchRequestError` | `src/Asana/Errors/CreateBatchRequestError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

