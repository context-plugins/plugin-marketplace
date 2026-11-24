<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deals — operations

Accessor: `client.deals` · Source: `relm_crm/apis/deals.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.deals.create_deal

- **Route**: `POST /deals`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_deal(body: DealInput | DealInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `Deal`
- **Returns (raw)**: `ApiResult[Deal, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `DealInput` | `relm_crm/models/deal_input.py` |
| `DealInputDict` | `relm_crm/models/deal_input.py` |
| `Deal` | `relm_crm/models/deal.py` |

### client.deals.delete_deal

- **Route**: `DELETE /deals/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def delete_deal(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Deleted`
- **Returns (raw)**: `ApiResult[Deleted, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Deleted` | `relm_crm/models/deleted.py` |

### client.deals.get_deal

- **Route**: `GET /deals/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_deal(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Deal`
- **Returns (raw)**: `ApiResult[Deal, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Deal` | `relm_crm/models/deal.py` |

### client.deals.list_deals

- **Route**: `GET /deals`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def list_deals(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, q: str | None = None, pipeline: str | None = None, pipeline_id: str | None = None, stage: str | None = None, company_id: str | None = None, primary_contact_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `include_deleted` — query · `q` — query · `pipeline` — query · `pipeline_id` — query · `stage` — query · `company_id` — query · `primary_contact_id` — query
- **Returns (parsed)**: `DealList`
- **Returns (raw)**: `ApiResult[DealList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `DealList` | `relm_crm/models/deal_list.py` |

### client.deals.restore_deal

- **Route**: `POST /deals/{id}/restore`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def restore_deal(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Deal`
- **Returns (raw)**: `ApiResult[Deal, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Deal` | `relm_crm/models/deal.py` |

### client.deals.update_deal

- **Route**: `PATCH /deals/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def update_deal(id_: str, body: DealInput | DealInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `Deal`
- **Returns (raw)**: `ApiResult[Deal, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `DealInput` | `relm_crm/models/deal_input.py` |
| `DealInputDict` | `relm_crm/models/deal_input.py` |
| `Deal` | `relm_crm/models/deal.py` |

