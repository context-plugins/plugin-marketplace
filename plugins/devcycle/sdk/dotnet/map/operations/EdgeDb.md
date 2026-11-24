<!-- Generated file — do not edit; regenerated with the SDK. -->

# EdgeDb — operations

Accessor: `client.EdgeDb` · Source: `src/DevCycle/Api/EdgeDb.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PatchV1EdgedbByUserId

- **Server group**: `DefaultDevCycleBucketingBucketingApi`
- **Signature**: `PatchV1EdgedbByUserId(PatchV1EdgedbByUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Query params (wire ← C#)**: `sdkKey` ← `SdkKey`
- **Returns**: `EdgeDbApiResponse`
- **Error**: `ApiException<PatchV1EdgedbByUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchV1EdgedbByUserIdRequest` | `src/DevCycle/Requests/EdgeDb/PatchV1EdgedbByUserIdRequest.cs` |
| `UserDataEdgeDb` | `src/DevCycle/Models/UserDataEdgeDb.cs` |
| `EdgeDbApiResponse` | `src/DevCycle/Models/EdgeDbApiResponse.cs` |
| `PatchV1EdgedbByUserIdError` | `src/DevCycle/Errors/PatchV1EdgedbByUserIdError.cs` |
| `ErrorResponseModel` | `src/DevCycle/Models/ErrorResponseModel.cs` |

