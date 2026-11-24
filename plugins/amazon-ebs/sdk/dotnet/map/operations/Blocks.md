<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blocks — operations

Accessor: `client.Blocks` · Source: `src/AmazonEbs/Api/Blocks.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSnapshotBlock

- **Auth**: `options.Sigv4`
- **Signature**: `GetSnapshotBlock(GetSnapshotBlockRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SnapshotId`, `BlockIndex`, `BlockToken`
- **Query params (wire ← C#)**: `blockToken` ← `BlockToken`
- **Returns**: `GetSnapshotBlockResponse`
- **Error**: `ApiException<GetSnapshotBlockError>` — **Case A (typed)**
- **Error accessors**: `TryGetRequestThrottledException([NotNullWhen(true)] out RequestThrottledException? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnapshotBlockRequest` | `src/AmazonEbs/Requests/Blocks/GetSnapshotBlockRequest.cs` |
| `GetSnapshotBlockResponse` | `src/AmazonEbs/Models/GetSnapshotBlockResponse.cs` |
| `GetSnapshotBlockError` | `src/AmazonEbs/Errors/GetSnapshotBlockError.cs` |
| `RequestThrottledException` | `src/AmazonEbs/Models/RequestThrottledException.cs` |
| `ServiceQuotaExceededException` | `src/AmazonEbs/Models/ServiceQuotaExceededException.cs` |
| `AccessDeniedException` | `src/AmazonEbs/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonEbs/Models/ResourceNotFoundException.cs` |
| `InternalServerException` | `src/AmazonEbs/Models/InternalServerException.cs` |

### ListSnapshotBlocks

- **Auth**: `options.Sigv4`
- **Signature**: `ListSnapshotBlocks(ListSnapshotBlocksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SnapshotId`
- **Query params (wire ← C#)**: `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`, `startingBlockIndex` ← `StartingBlockIndex`
- **Returns**: `ListSnapshotBlocksResponse`
- **Error**: `ApiException<ListSnapshotBlocksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRequestThrottledException([NotNullWhen(true)] out RequestThrottledException? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSnapshotBlocksRequest` | `src/AmazonEbs/Requests/Blocks/ListSnapshotBlocksRequest.cs` |
| `ListSnapshotBlocksResponse` | `src/AmazonEbs/Models/ListSnapshotBlocksResponse.cs` |
| `ListSnapshotBlocksError` | `src/AmazonEbs/Errors/ListSnapshotBlocksError.cs` |
| `RequestThrottledException` | `src/AmazonEbs/Models/RequestThrottledException.cs` |
| `ServiceQuotaExceededException` | `src/AmazonEbs/Models/ServiceQuotaExceededException.cs` |
| `AccessDeniedException` | `src/AmazonEbs/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonEbs/Models/ResourceNotFoundException.cs` |
| `InternalServerException` | `src/AmazonEbs/Models/InternalServerException.cs` |

### PutSnapshotBlock

- **Auth**: `options.Sigv4`
- **Signature**: `PutSnapshotBlock(PutSnapshotBlockRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SnapshotId`, `BlockIndex`, `XAmzDataLength`, `XAmzChecksum`, `XAmzChecksumAlgorithm`
- **Returns**: `PutSnapshotBlockResponse`
- **Error**: `ApiException<PutSnapshotBlockError>` — **Case A (typed)**
- **Error accessors**: `TryGetRequestThrottledException([NotNullWhen(true)] out RequestThrottledException? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutSnapshotBlockRequest` | `src/AmazonEbs/Requests/Blocks/PutSnapshotBlockRequest.cs` |
| `XAmzChecksumAlgorithm` | `src/AmazonEbs/Models/Enums/XAmzChecksumAlgorithm.cs` |
| `PutSnapshotBlockResponse` | `src/AmazonEbs/Models/PutSnapshotBlockResponse.cs` |
| `PutSnapshotBlockError` | `src/AmazonEbs/Errors/PutSnapshotBlockError.cs` |
| `RequestThrottledException` | `src/AmazonEbs/Models/RequestThrottledException.cs` |
| `ServiceQuotaExceededException` | `src/AmazonEbs/Models/ServiceQuotaExceededException.cs` |
| `AccessDeniedException` | `src/AmazonEbs/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonEbs/Models/ResourceNotFoundException.cs` |
| `InternalServerException` | `src/AmazonEbs/Models/InternalServerException.cs` |

