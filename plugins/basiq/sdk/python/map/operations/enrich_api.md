<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnrichApi — operations

Accessor: `client.enrich_api` · Source: `basiq/apis/enrich_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.enrich_api.enrich

- **Route**: `GET /enrich`
- **Auth**: `services_token`
- **Signature**: `def enrich(q: str, institution: str, country: str, *, mcc: str | None = None, account_type: str | None = None, amount: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`, `institution`, `country`
- **Params**: `q` — query · `institution` — query · `country` — query · `mcc` — query · `account_type` — query `accountType` · `amount` — query
- **Returns (parsed)**: `EnrichResponse`
- **Returns (raw)**: `ApiResult[EnrichResponse, EnrichErrorBody]`
- **Error**: `EnrichErrorBody` — **Case A (typed)**
- **Error arms**: `Enrich400Error1` [400] · `Enrich403Error1` [403] · `Enrich500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnrichResponse` | `basiq/models/enrich_response.py` |
| `EnrichErrorBody` | `basiq/errors/enrich_error.py` |
| `Enrich400Error1` | `basiq/models/enrich400_error1.py` |
| `Enrich403Error1` | `basiq/models/enrich403_error1.py` |
| `Enrich500Error1` | `basiq/models/enrich500_error1.py` |

### client.enrich_api.get_merchant_by_id

- **Route**: `GET /merchants/{merchantId}`
- **Auth**: `services_token`
- **Signature**: `def get_merchant_by_id(merchant_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `merchant_id`
- **Params**: `merchant_id` — path `merchantId`
- **Returns (parsed)**: `SingleMerchantResponse`
- **Returns (raw)**: `ApiResult[SingleMerchantResponse, GetMerchantByIdErrorBody]`
- **Error**: `GetMerchantByIdErrorBody` — **Case A (typed)**
- **Error arms**: `MerchantNotFoundError` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SingleMerchantResponse` | `basiq/models/single_merchant_response.py` |
| `GetMerchantByIdErrorBody` | `basiq/errors/get_merchant_by_id_error.py` |
| `MerchantNotFoundError` | `basiq/models/merchant_not_found_error.py` |

### client.enrich_api.merchant_search

- **Route**: `GET /merchants`
- **Auth**: `services_token`
- **Signature**: `def merchant_search(*, abn: str | None = None, merchant_name: str | None = None, suburb: str | None = None, entity_type: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `abn` — query · `merchant_name` — query `merchantName` · `suburb` — query · `entity_type` — query `entityType`
- **Returns (parsed)**: `MerchantsResponse`
- **Returns (raw)**: `ApiResult[MerchantsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MerchantsResponse` | `basiq/models/merchants_response.py` |

