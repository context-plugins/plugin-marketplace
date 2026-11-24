<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonEbsAmazonElasticBlockStoreEbsApi — operations

Accessor: `client.amazon_ebs_amazon_elastic_block_store_ebs_api` · Source: `amazon_ebs/apis/amazon_ebs_amazon_elastic_block_store_ebs_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.amazon_ebs_amazon_elastic_block_store_ebs_api.complete_snapshot

- **Route**: `POST /snapshots/completion/{SnapshotId}`
- **Auth**: `sigv4`
- **Signature**: `def complete_snapshot(snapshot_id: str, x_amz_changed_blocks_count: int, *, x_amz_checksum: str | None = None, x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr | None = None, x_amz_checksum_aggregation_method: XAmzChecksumAggregationMethodOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `snapshot_id`, `x_amz_changed_blocks_count`
- **Params**: `snapshot_id` — path `SnapshotId` · `x_amz_changed_blocks_count` — header `x-amz-ChangedBlocksCount` · `x_amz_checksum` — header `x-amz-Checksum` · `x_amz_checksum_algorithm` — header `x-amz-Checksum-Algorithm` · `x_amz_checksum_aggregation_method` — header `x-amz-Checksum-Aggregation-Method`
- **Returns (parsed)**: `CompleteSnapshotResponse`
- **Returns (raw)**: `ApiResult[CompleteSnapshotResponse, CompleteSnapshotErrorBody]`
- **Error**: `CompleteSnapshotErrorBody` — **Case A (typed)**
- **Error arms**: `RequestThrottledException` [400] · `ServiceQuotaExceededException` [402] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzChecksumAlgorithmOrStr` | `amazon_ebs/models/enums/x_amz_checksum_algorithm.py` |
| `XAmzChecksumAggregationMethodOrStr` | `amazon_ebs/models/enums/x_amz_checksum_aggregation_method.py` |
| `CompleteSnapshotResponse` | `amazon_ebs/models/complete_snapshot_response.py` |
| `CompleteSnapshotErrorBody` | `amazon_ebs/errors/complete_snapshot_error.py` |
| `RequestThrottledException` | `amazon_ebs/models/request_throttled_exception.py` |
| `ServiceQuotaExceededException` | `amazon_ebs/models/service_quota_exceeded_exception.py` |
| `AccessDeniedException` | `amazon_ebs/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_ebs/models/resource_not_found_exception.py` |
| `InternalServerException` | `amazon_ebs/models/internal_server_exception.py` |

### client.amazon_ebs_amazon_elastic_block_store_ebs_api.list_changed_blocks

- **Route**: `GET /snapshots/{SecondSnapshotId}/changedblocks`
- **Auth**: `sigv4`
- **Signature**: `def list_changed_blocks(second_snapshot_id: str, *, first_snapshot_id: str | None = None, page_token: str | None = None, max_results: int | None = None, starting_block_index: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `second_snapshot_id`
- **Params**: `second_snapshot_id` — path `SecondSnapshotId` · `first_snapshot_id` — query `firstSnapshotId` · `page_token` — query `pageToken` · `max_results` — query `maxResults` · `starting_block_index` — query `startingBlockIndex`
- **Returns (parsed)**: `ListChangedBlocksResponse`
- **Returns (raw)**: `ApiResult[ListChangedBlocksResponse, ListChangedBlocksErrorBody]`
- **Error**: `ListChangedBlocksErrorBody` — **Case A (typed)**
- **Error arms**: `RequestThrottledException` [400] · `ServiceQuotaExceededException` [402] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListChangedBlocksResponse` | `amazon_ebs/models/list_changed_blocks_response.py` |
| `ListChangedBlocksErrorBody` | `amazon_ebs/errors/list_changed_blocks_error.py` |
| `RequestThrottledException` | `amazon_ebs/models/request_throttled_exception.py` |
| `ServiceQuotaExceededException` | `amazon_ebs/models/service_quota_exceeded_exception.py` |
| `AccessDeniedException` | `amazon_ebs/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_ebs/models/resource_not_found_exception.py` |
| `InternalServerException` | `amazon_ebs/models/internal_server_exception.py` |

### client.amazon_ebs_amazon_elastic_block_store_ebs_api.start_snapshot

- **Route**: `POST /snapshots`
- **Auth**: `sigv4`
- **Signature**: `def start_snapshot(*, body: SnapshotsRequest | SnapshotsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StartSnapshotResponse`
- **Returns (raw)**: `ApiResult[StartSnapshotResponse, StartSnapshotErrorBody]`
- **Error**: `StartSnapshotErrorBody` — **Case A (typed)**
- **Error arms**: `ConcurrentLimitExceededException` [400] · `ServiceQuotaExceededException` [402] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SnapshotsRequest` | `amazon_ebs/models/snapshots_request.py` |
| `SnapshotsRequestDict` | `amazon_ebs/models/snapshots_request.py` |
| `StartSnapshotResponse` | `amazon_ebs/models/start_snapshot_response.py` |
| `StartSnapshotErrorBody` | `amazon_ebs/errors/start_snapshot_error.py` |
| `ConcurrentLimitExceededException` | `amazon_ebs/models/concurrent_limit_exceeded_exception.py` |
| `ServiceQuotaExceededException` | `amazon_ebs/models/service_quota_exceeded_exception.py` |
| `AccessDeniedException` | `amazon_ebs/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_ebs/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_ebs/models/conflict_exception.py` |
| `InternalServerException` | `amazon_ebs/models/internal_server_exception.py` |

