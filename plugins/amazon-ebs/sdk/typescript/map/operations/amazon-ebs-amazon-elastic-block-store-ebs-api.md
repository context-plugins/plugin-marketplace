<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonEbsAmazonElasticBlockStoreEbsApi — operations

Accessor: `client.amazonEbsAmazonElasticBlockStoreEbsApi` · Source: `src/resources/amazon-ebs-amazon-elastic-block-store-ebs-api.ts` · 3 operations · Request and error types: namespace `AmazonEbsAmazonElasticBlockStoreEbsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-ebs`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### completeSnapshot

- **Signature**: `completeSnapshot(request: AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotRequest, options?: RequestOptions): ApiPromise<CompleteSnapshotResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotError>`
- **Wire**: `POST /snapshots/completion/{SnapshotId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompleteSnapshotResponse`
- **Error**: `AmazonEbsError` with `kind: "api"`, an instance of `AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"requestThrottledException"` [400] `RequestThrottledException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `snapshotId` | `path` | `SnapshotId` | `string` | yes |
| `xAmzChangedBlocksCount` | `header` | `x-amz-ChangedBlocksCount` | `number` | yes |
| `xAmzChecksum` | `header` | `x-amz-Checksum` | `string` | no |
| `xAmzChecksumAlgorithm` | `header` | `x-amz-Checksum-Algorithm` | `XAmzChecksumAlgorithm` | no |
| `xAmzChecksumAggregationMethod` | `header` | `x-amz-Checksum-Aggregation-Method` | `XAmzChecksumAggregationMethod` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzChecksumAlgorithm` | `xAmzChecksumAlgorithmSchema` | `src/models/xamz-checksum-algorithm.ts` |
| `XAmzChecksumAggregationMethod` | `xAmzChecksumAggregationMethodSchema` | `src/models/xamz-checksum-aggregation-method.ts` |
| `CompleteSnapshotResponse` | `completeSnapshotResponseSchema` | `src/models/complete-snapshot-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `RequestThrottledException` | `requestThrottledExceptionSchema` | `src/models/request-throttled-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |

### listChangedBlocks

- **Signature**: `listChangedBlocks(request: AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksRequest, options?: RequestOptions): ApiPromise<ListChangedBlocksResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksError>`
- **Wire**: `GET /snapshots/{SecondSnapshotId}/changedblocks`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListChangedBlocksResponse`
- **Error**: `AmazonEbsError` with `kind: "api"`, an instance of `AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"requestThrottledException"` [400] `RequestThrottledException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `secondSnapshotId` | `path` | `SecondSnapshotId` | `string` | yes |
| `firstSnapshotId` | `query` | — | `string` | no |
| `pageToken` | `query` | — | `string` | no |
| `maxResults` | `query` | — | `number` | no |
| `startingBlockIndex` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListChangedBlocksResponse` | `listChangedBlocksResponseSchema` | `src/models/list-changed-blocks-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `RequestThrottledException` | `requestThrottledExceptionSchema` | `src/models/request-throttled-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |

### startSnapshot

- **Signature**: `startSnapshot(request?: AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotRequest, options?: RequestOptions): ApiPromise<StartSnapshotResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotError>`
- **Wire**: `POST /snapshots`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartSnapshotResponse`
- **Error**: `AmazonEbsError` with `kind: "api"`, an instance of `AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"concurrentLimitExceededException"` [400] `ConcurrentLimitExceededException` · `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SnapshotsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SnapshotsRequest` | `snapshotsRequestSchema` | `src/models/snapshots-request.ts` |
| `StartSnapshotResponse` | `startSnapshotResponseSchema` | `src/models/start-snapshot-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `ConcurrentLimitExceededException` | `concurrentLimitExceededExceptionSchema` | `src/models/concurrent-limit-exceeded-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |

