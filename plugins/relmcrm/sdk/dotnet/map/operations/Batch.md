<!-- Generated file — do not edit; regenerated with the SDK. -->

# Batch — operations

Accessor: `client.Batch` · Source: `src/RelmCrm/Api/Batch.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchInvoke

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `BatchInvoke(BatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchOperationRequest` | `src/RelmCrm/Requests/Batch/BatchOperationRequest.cs` |
| `BatchRequest` | `src/RelmCrm/Models/BatchRequest.cs` |

