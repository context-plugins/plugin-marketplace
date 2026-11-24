<!-- Generated file — do not edit; regenerated with the SDK. -->

# CacheReport — operations

Accessor: `client.cache_report` · Source: `aws_storage_gateway/apis/cache_report.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cache_report.cancel_cache_report

- **Route**: `POST /#CancelCacheReport`
- **Auth**: `sigv4`
- **Signature**: `def cancel_cache_report(x_amz_target: XAmzTargetAwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CancelCacheReportErrorBody]`
- **Error**: `CancelCacheReportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsStorageGatewayCacheReportApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target_aws_storage_gateway_cache_report_api.py` |
| `CancelCacheReportErrorBody` | `aws_storage_gateway/errors/cancel_cache_report_error.py` |

### client.cache_report.delete_cache_report

- **Route**: `POST /#DeleteCacheReport`
- **Auth**: `sigv4`
- **Signature**: `def delete_cache_report(x_amz_target: XAmzTarget1AwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCacheReportErrorBody]`
- **Error**: `DeleteCacheReportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsStorageGatewayCacheReportApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target1_aws_storage_gateway_cache_report_api.py` |
| `DeleteCacheReportErrorBody` | `aws_storage_gateway/errors/delete_cache_report_error.py` |

### client.cache_report.describe_cache_report

- **Route**: `POST /#DescribeCacheReport`
- **Auth**: `sigv4`
- **Signature**: `def describe_cache_report(x_amz_target: XAmzTarget2AwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeCacheReportErrorBody]`
- **Error**: `DescribeCacheReportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsStorageGatewayCacheReportApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target2_aws_storage_gateway_cache_report_api.py` |
| `DescribeCacheReportErrorBody` | `aws_storage_gateway/errors/describe_cache_report_error.py` |

### client.cache_report.list_cache_reports

- **Route**: `POST /#ListCacheReports`
- **Auth**: `sigv4`
- **Signature**: `def list_cache_reports(x_amz_target: XAmzTarget3AwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListCacheReportsErrorBody]`
- **Error**: `ListCacheReportsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsStorageGatewayCacheReportApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target3_aws_storage_gateway_cache_report_api.py` |
| `ListCacheReportsErrorBody` | `aws_storage_gateway/errors/list_cache_reports_error.py` |

### client.cache_report.start_cache_report

- **Route**: `POST /#StartCacheReport`
- **Auth**: `sigv4`
- **Signature**: `def start_cache_report(x_amz_target: XAmzTarget4AwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartCacheReportErrorBody]`
- **Error**: `StartCacheReportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsStorageGatewayCacheReportApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target4_aws_storage_gateway_cache_report_api.py` |
| `StartCacheReportErrorBody` | `aws_storage_gateway/errors/start_cache_report_error.py` |

