<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blocks — operations

Accessor: `client.blocks` · Source: `src/resources/blocks.ts` · 3 operations · Request and error types: namespace `Blocks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-ebs`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSnapshotBlock

- **Signature**: `getSnapshotBlock(request: Blocks.GetSnapshotBlockRequest, options?: RequestOptions): ApiPromise<GetSnapshotBlockResponse, Blocks.GetSnapshotBlockError>`
- **Wire**: `GET /snapshots/{SnapshotId}/blocks/{BlockIndex}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetSnapshotBlockResponse`
- **Error**: `AmazonEbsError` with `kind: "api"`, an instance of `Blocks.GetSnapshotBlockError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"requestThrottledException"` [400] `RequestThrottledException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blocks.GetSnapshotBlockRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `snapshotId` | `path` | `SnapshotId` | `string` | yes |
| `blockIndex` | `path` | `BlockIndex` | `number` | yes |
| `blockToken` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSnapshotBlockResponse` | `getSnapshotBlockResponseSchema` | `src/models/get-snapshot-block-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `RequestThrottledException` | `requestThrottledExceptionSchema` | `src/models/request-throttled-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |

### listSnapshotBlocks

- **Signature**: `listSnapshotBlocks(request: Blocks.ListSnapshotBlocksRequest, options?: RequestOptions): ApiPromise<ListSnapshotBlocksResponse, Blocks.ListSnapshotBlocksError>`
- **Wire**: `GET /snapshots/{SnapshotId}/blocks`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSnapshotBlocksResponse`
- **Error**: `AmazonEbsError` with `kind: "api"`, an instance of `Blocks.ListSnapshotBlocksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"requestThrottledException"` [400] `RequestThrottledException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blocks.ListSnapshotBlocksRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `snapshotId` | `path` | `SnapshotId` | `string` | yes |
| `pageToken` | `query` | — | `string` | no |
| `maxResults` | `query` | — | `number` | no |
| `startingBlockIndex` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSnapshotBlocksResponse` | `listSnapshotBlocksResponseSchema` | `src/models/list-snapshot-blocks-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `RequestThrottledException` | `requestThrottledExceptionSchema` | `src/models/request-throttled-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |

### putSnapshotBlock

- **Signature**: `putSnapshotBlock(request: Blocks.PutSnapshotBlockRequest, options?: RequestOptions): ApiPromise<PutSnapshotBlockResponse, Blocks.PutSnapshotBlockError>`
- **Wire**: `PUT /snapshots/{SnapshotId}/blocks/{BlockIndex}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON string. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutSnapshotBlockResponse`
- **Error**: `AmazonEbsError` with `kind: "api"`, an instance of `Blocks.PutSnapshotBlockError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"requestThrottledException"` [400] `RequestThrottledException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blocks.PutSnapshotBlockRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `snapshotId` | `path` | `SnapshotId` | `string` | yes |
| `blockIndex` | `path` | `BlockIndex` | `number` | yes |
| `xAmzDataLength` | `header` | `x-amz-Data-Length` | `number` | yes |
| `xAmzChecksum` | `header` | `x-amz-Checksum` | `string` | yes |
| `xAmzChecksumAlgorithm` | `header` | `x-amz-Checksum-Algorithm` | `XAmzChecksumAlgorithm` | yes |
| `xAmzProgress` | `header` | `x-amz-Progress` | `number` | no |
| `body` | `body` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzChecksumAlgorithm` | `xAmzChecksumAlgorithmSchema` | `src/models/xamz-checksum-algorithm.ts` |
| `PutSnapshotBlockResponse` | `putSnapshotBlockResponseSchema` | `src/models/put-snapshot-block-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `RequestThrottledException` | `requestThrottledExceptionSchema` | `src/models/request-throttled-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |

