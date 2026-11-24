<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignDiscountCodes — operations

Accessor: `client.campaign_discount_codes` · Source: `givebutter/apis/campaign_discount_codes.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaign_discount_codes.campaigns_discount_codes_destroy

- **Route**: `DELETE /v1/campaigns/{campaign}/discount-codes/{discountCode}`
- **Auth**: `http`
- **Signature**: `def campaigns_discount_codes_destroy(campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `discount_code`
- **Params**: `campaign` — path · `discount_code` — path `discountCode`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CampaignsDiscountCodesDestroyErrorBody]`
- **Error**: `CampaignsDiscountCodesDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `V1CampaignsDiscountCodes422Error1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignsDiscountCodesDestroyErrorBody` | `givebutter/errors/campaigns_discount_codes_destroy_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `V1CampaignsDiscountCodes422Error1` | `givebutter/models/v1_campaigns_discount_codes422_error1.py` |

### client.campaign_discount_codes.campaigns_discount_codes_index

- **Route**: `GET /v1/campaigns/{campaign}/discount-codes`
- **Auth**: `http`
- **Signature**: `def campaigns_discount_codes_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`
- **Params**: `campaign` — path
- **Returns (parsed)**: `V1CampaignsDiscountCodesResponse`
- **Returns (raw)**: `ApiResult[V1CampaignsDiscountCodesResponse, CampaignsDiscountCodesIndexErrorBody]`
- **Error**: `CampaignsDiscountCodesIndexErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1CampaignsDiscountCodesResponse` | `givebutter/models/v1_campaigns_discount_codes_response.py` |
| `CampaignsDiscountCodesIndexErrorBody` | `givebutter/errors/campaigns_discount_codes_index_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.campaign_discount_codes.campaigns_discount_codes_show

- **Route**: `GET /v1/campaigns/{campaign}/discount-codes/{discountCode}`
- **Auth**: `http`
- **Signature**: `def campaigns_discount_codes_show(campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `discount_code`
- **Params**: `campaign` — path · `discount_code` — path `discountCode`
- **Returns (parsed)**: `CampaignDiscountCodeResource`
- **Returns (raw)**: `ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesShowErrorBody]`
- **Error**: `CampaignsDiscountCodesShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignDiscountCodeResource` | `givebutter/models/campaign_discount_code_resource.py` |
| `CampaignsDiscountCodesShowErrorBody` | `givebutter/errors/campaigns_discount_codes_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.campaign_discount_codes.campaigns_discount_codes_store

- **Route**: `POST /v1/campaigns/{campaign}/discount-codes`
- **Auth**: `http`
- **Signature**: `def campaigns_discount_codes_store(campaign: int, body: StoreCampaignDiscountCodeRequest | StoreCampaignDiscountCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `body`
- **Params**: `campaign` — path · `body` — JSON body
- **Returns (parsed)**: `CampaignDiscountCodeResource`
- **Returns (raw)**: `ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesStoreErrorBody]`
- **Error**: `CampaignsDiscountCodesStoreErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreCampaignDiscountCodeRequest` | `givebutter/models/store_campaign_discount_code_request.py` |
| `StoreCampaignDiscountCodeRequestDict` | `givebutter/models/store_campaign_discount_code_request.py` |
| `CampaignDiscountCodeResource` | `givebutter/models/campaign_discount_code_resource.py` |
| `CampaignsDiscountCodesStoreErrorBody` | `givebutter/errors/campaigns_discount_codes_store_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.campaign_discount_codes.campaigns_discount_codes_update

- **Route**: `PUT /v1/campaigns/{campaign}/discount-codes/{discountCode}`
- **Auth**: `http`
- **Signature**: `def campaigns_discount_codes_update(campaign: int, discount_code: int, body: UpdateCampaignDiscountCodeRequest | UpdateCampaignDiscountCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `discount_code`, `body`
- **Params**: `campaign` — path · `discount_code` — path `discountCode` · `body` — JSON body
- **Returns (parsed)**: `CampaignDiscountCodeResource`
- **Returns (raw)**: `ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesUpdateErrorBody]`
- **Error**: `CampaignsDiscountCodesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCampaignDiscountCodeRequest` | `givebutter/models/update_campaign_discount_code_request.py` |
| `UpdateCampaignDiscountCodeRequestDict` | `givebutter/models/update_campaign_discount_code_request.py` |
| `CampaignDiscountCodeResource` | `givebutter/models/campaign_discount_code_resource.py` |
| `CampaignsDiscountCodesUpdateErrorBody` | `givebutter/errors/campaigns_discount_codes_update_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

