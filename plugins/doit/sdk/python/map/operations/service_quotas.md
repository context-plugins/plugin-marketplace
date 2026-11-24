<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceQuotas — operations

Accessor: `client.service_quotas` · Source: `doi_t/apis/service_quotas.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.service_quotas.list_service_quotas

- **Route**: `GET /core/v1/service-quotas`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_service_quotas(*, cloud_provider: CloudProvider1OrStr | None = None, min_utilization_percent: float | None = None, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `cloud_provider` — query `cloudProvider` · `min_utilization_percent` — query `minUtilizationPercent` · `max_results` — query `maxResults` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ServiceQuotaList`
- **Returns (raw)**: `ApiResult[ServiceQuotaList, ListServiceQuotasErrorBody]`
- **Error**: `ListServiceQuotasErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudProvider1OrStr` | `doi_t/models/enums/cloud_provider1.py` |
| `ServiceQuotaList` | `doi_t/models/service_quota_list.py` |
| `ListServiceQuotasErrorBody` | `doi_t/errors/list_service_quotas_error.py` |
| `Error` | `doi_t/models/error.py` |

