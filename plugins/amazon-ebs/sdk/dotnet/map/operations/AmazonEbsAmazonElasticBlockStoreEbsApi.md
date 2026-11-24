<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonEbsAmazonElasticBlockStoreEbsApi — operations

Accessor: `client.AmazonEbsAmazonElasticBlockStoreEbsApi` · Source: `src/AmazonEbs/Api/AmazonEbsAmazonElasticBlockStoreEbsApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CompleteSnapshot

- **Auth**: `options.Sigv4`
- **Signature**: `CompleteSnapshot(CompleteSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SnapshotId`, `XAmzChangedBlocksCount`
- **Returns**: `CompleteSnapshotResponse`
- **Error**: `ApiException<CompleteSnapshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetRequestThrottledException([NotNullWhen(true)] out RequestThrottledException? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CompleteSnapshotRequest` | `src/AmazonEbs/Requests/AmazonEbsAmazonElasticBlockStoreEbsApi/CompleteSnapshotRequest.cs` |
| `XAmzChecksumAlgorithm` | `src/AmazonEbs/Models/Enums/XAmzChecksumAlgorithm.cs` |
| `XAmzChecksumAggregationMethod` | `src/AmazonEbs/Models/Enums/XAmzChecksumAggregationMethod.cs` |
| `CompleteSnapshotResponse` | `src/AmazonEbs/Models/CompleteSnapshotResponse.cs` |
| `CompleteSnapshotError` | `src/AmazonEbs/Errors/CompleteSnapshotError.cs` |
| `RequestThrottledException` | `src/AmazonEbs/Models/RequestThrottledException.cs` |
| `ServiceQuotaExceededException` | `src/AmazonEbs/Models/ServiceQuotaExceededException.cs` |
| `AccessDeniedException` | `src/AmazonEbs/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonEbs/Models/ResourceNotFoundException.cs` |
| `InternalServerException` | `src/AmazonEbs/Models/InternalServerException.cs` |

### ListChangedBlocks

- **Auth**: `options.Sigv4`
- **Signature**: `ListChangedBlocks(ListChangedBlocksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SecondSnapshotId`
- **Query params (wire ← C#)**: `firstSnapshotId` ← `FirstSnapshotId`, `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`, `startingBlockIndex` ← `StartingBlockIndex`
- **Returns**: `ListChangedBlocksResponse`
- **Error**: `ApiException<ListChangedBlocksError>` — **Case A (typed)**
- **Error accessors**: `TryGetRequestThrottledException([NotNullWhen(true)] out RequestThrottledException? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListChangedBlocksRequest` | `src/AmazonEbs/Requests/AmazonEbsAmazonElasticBlockStoreEbsApi/ListChangedBlocksRequest.cs` |
| `ListChangedBlocksResponse` | `src/AmazonEbs/Models/ListChangedBlocksResponse.cs` |
| `ListChangedBlocksError` | `src/AmazonEbs/Errors/ListChangedBlocksError.cs` |
| `RequestThrottledException` | `src/AmazonEbs/Models/RequestThrottledException.cs` |
| `ServiceQuotaExceededException` | `src/AmazonEbs/Models/ServiceQuotaExceededException.cs` |
| `AccessDeniedException` | `src/AmazonEbs/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonEbs/Models/ResourceNotFoundException.cs` |
| `InternalServerException` | `src/AmazonEbs/Models/InternalServerException.cs` |

### StartSnapshot

- **Auth**: `options.Sigv4`
- **Signature**: `StartSnapshot(StartSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StartSnapshotResponse`
- **Error**: `ApiException<StartSnapshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetConcurrentLimitExceededException([NotNullWhen(true)] out ConcurrentLimitExceededException? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSnapshotRequest` | `src/AmazonEbs/Requests/AmazonEbsAmazonElasticBlockStoreEbsApi/StartSnapshotRequest.cs` |
| `SnapshotsRequest` | `src/AmazonEbs/Models/SnapshotsRequest.cs` |
| `StartSnapshotResponse` | `src/AmazonEbs/Models/StartSnapshotResponse.cs` |
| `StartSnapshotError` | `src/AmazonEbs/Errors/StartSnapshotError.cs` |
| `ConcurrentLimitExceededException` | `src/AmazonEbs/Models/ConcurrentLimitExceededException.cs` |
| `ServiceQuotaExceededException` | `src/AmazonEbs/Models/ServiceQuotaExceededException.cs` |
| `AccessDeniedException` | `src/AmazonEbs/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonEbs/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonEbs/Models/ConflictException.cs` |
| `InternalServerException` | `src/AmazonEbs/Models/InternalServerException.cs` |

