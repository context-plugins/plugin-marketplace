<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blocks — operations

Accessor: `client.blocks` · Source: `amazon_ebs/apis/blocks.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.blocks.get_snapshot_block

- **Route**: `GET /snapshots/{SnapshotId}/blocks/{BlockIndex}`
- **Auth**: `sigv4`
- **Signature**: `def get_snapshot_block(snapshot_id: str, block_index: int, block_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `snapshot_id`, `block_index`, `block_token`
- **Params**: `snapshot_id` — path `SnapshotId` · `block_index` — path `BlockIndex` · `block_token` — query `blockToken`
- **Returns (parsed)**: `GetSnapshotBlockResponse`
- **Returns (raw)**: `ApiResult[GetSnapshotBlockResponse, GetSnapshotBlockErrorBody]`
- **Error**: `GetSnapshotBlockErrorBody` — **Case A (typed)**
- **Error arms**: `RequestThrottledException` [400] · `ServiceQuotaExceededException` [402] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSnapshotBlockResponse` | `amazon_ebs/models/get_snapshot_block_response.py` |
| `GetSnapshotBlockErrorBody` | `amazon_ebs/errors/get_snapshot_block_error.py` |
| `RequestThrottledException` | `amazon_ebs/models/request_throttled_exception.py` |
| `ServiceQuotaExceededException` | `amazon_ebs/models/service_quota_exceeded_exception.py` |
| `AccessDeniedException` | `amazon_ebs/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_ebs/models/resource_not_found_exception.py` |
| `InternalServerException` | `amazon_ebs/models/internal_server_exception.py` |

### client.blocks.list_snapshot_blocks

- **Route**: `GET /snapshots/{SnapshotId}/blocks`
- **Auth**: `sigv4`
- **Signature**: `def list_snapshot_blocks(snapshot_id: str, *, page_token: str | None = None, max_results: int | None = None, starting_block_index: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `snapshot_id`
- **Params**: `snapshot_id` — path `SnapshotId` · `page_token` — query `pageToken` · `max_results` — query `maxResults` · `starting_block_index` — query `startingBlockIndex`
- **Returns (parsed)**: `ListSnapshotBlocksResponse`
- **Returns (raw)**: `ApiResult[ListSnapshotBlocksResponse, ListSnapshotBlocksErrorBody]`
- **Error**: `ListSnapshotBlocksErrorBody` — **Case A (typed)**
- **Error arms**: `RequestThrottledException` [400] · `ServiceQuotaExceededException` [402] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListSnapshotBlocksResponse` | `amazon_ebs/models/list_snapshot_blocks_response.py` |
| `ListSnapshotBlocksErrorBody` | `amazon_ebs/errors/list_snapshot_blocks_error.py` |
| `RequestThrottledException` | `amazon_ebs/models/request_throttled_exception.py` |
| `ServiceQuotaExceededException` | `amazon_ebs/models/service_quota_exceeded_exception.py` |
| `AccessDeniedException` | `amazon_ebs/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_ebs/models/resource_not_found_exception.py` |
| `InternalServerException` | `amazon_ebs/models/internal_server_exception.py` |

### client.blocks.put_snapshot_block

- **Route**: `PUT /snapshots/{SnapshotId}/blocks/{BlockIndex}`
- **Auth**: `sigv4`
- **Signature**: `def put_snapshot_block(snapshot_id: str, block_index: int, x_amz_data_length: int, x_amz_checksum: str, x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr, *, x_amz_progress: int | None = None, body: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `snapshot_id`, `block_index`, `x_amz_data_length`, `x_amz_checksum`, `x_amz_checksum_algorithm`
- **Params**: `snapshot_id` — path `SnapshotId` · `block_index` — path `BlockIndex` · `x_amz_data_length` — header `x-amz-Data-Length` · `x_amz_checksum` — header `x-amz-Checksum` · `x_amz_checksum_algorithm` — header `x-amz-Checksum-Algorithm` · `x_amz_progress` — header `x-amz-Progress` · `body` — JSON body
- **Returns (parsed)**: `PutSnapshotBlockResponse`
- **Returns (raw)**: `ApiResult[PutSnapshotBlockResponse, PutSnapshotBlockErrorBody]`
- **Error**: `PutSnapshotBlockErrorBody` — **Case A (typed)**
- **Error arms**: `RequestThrottledException` [400] · `ServiceQuotaExceededException` [402] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzChecksumAlgorithmOrStr` | `amazon_ebs/models/enums/x_amz_checksum_algorithm.py` |
| `PutSnapshotBlockResponse` | `amazon_ebs/models/put_snapshot_block_response.py` |
| `PutSnapshotBlockErrorBody` | `amazon_ebs/errors/put_snapshot_block_error.py` |
| `RequestThrottledException` | `amazon_ebs/models/request_throttled_exception.py` |
| `ServiceQuotaExceededException` | `amazon_ebs/models/service_quota_exceeded_exception.py` |
| `AccessDeniedException` | `amazon_ebs/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_ebs/models/resource_not_found_exception.py` |
| `InternalServerException` | `amazon_ebs/models/internal_server_exception.py` |

