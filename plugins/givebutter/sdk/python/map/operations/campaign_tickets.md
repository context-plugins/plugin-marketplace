<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignTickets — operations

Accessor: `client.campaign_tickets` · Source: `givebutter/apis/campaign_tickets.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaign_tickets.campaigns_items_tickets_index

- **Route**: `GET /v1/campaigns/{campaign}/items/tickets`
- **Auth**: `http`
- **Signature**: `def campaigns_items_tickets_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`
- **Params**: `campaign` — path
- **Returns (parsed)**: `V1CampaignsItemsTicketsResponse`
- **Returns (raw)**: `ApiResult[V1CampaignsItemsTicketsResponse, CampaignsItemsTicketsIndexErrorBody]`
- **Error**: `CampaignsItemsTicketsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1CampaignsItemsTicketsResponse` | `givebutter/models/v1_campaigns_items_tickets_response.py` |
| `CampaignsItemsTicketsIndexErrorBody` | `givebutter/errors/campaigns_items_tickets_index_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.campaign_tickets.campaigns_items_tickets_show

- **Route**: `GET /v1/campaigns/{campaign}/items/tickets/{ticketId}`
- **Auth**: `http`
- **Signature**: `def campaigns_items_tickets_show(campaign: int, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `ticket_id`
- **Params**: `campaign` — path · `ticket_id` — path `ticketId`
- **Returns (parsed)**: `CampaignItemTicketResource`
- **Returns (raw)**: `ApiResult[CampaignItemTicketResource, CampaignsItemsTicketsShowErrorBody]`
- **Error**: `CampaignsItemsTicketsShowErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignItemTicketResource` | `givebutter/models/campaign_item_ticket_resource.py` |
| `CampaignsItemsTicketsShowErrorBody` | `givebutter/errors/campaigns_items_tickets_show_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.campaign_tickets.campaigns_items_tickets_store

- **Route**: `POST /v1/campaigns/{campaign}/items/tickets`
- **Auth**: `http`
- **Signature**: `def campaigns_items_tickets_store(campaign: int, body: StoreCampaignItemTicketRequest | StoreCampaignItemTicketRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `body`
- **Params**: `campaign` — path · `body` — JSON body
- **Returns (parsed)**: `CampaignItemTicketResource`
- **Returns (raw)**: `ApiResult[CampaignItemTicketResource, CampaignsItemsTicketsStoreErrorBody]`
- **Error**: `CampaignsItemsTicketsStoreErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreCampaignItemTicketRequest` | `givebutter/models/store_campaign_item_ticket_request.py` |
| `StoreCampaignItemTicketRequestDict` | `givebutter/models/store_campaign_item_ticket_request.py` |
| `CampaignItemTicketResource` | `givebutter/models/campaign_item_ticket_resource.py` |
| `CampaignsItemsTicketsStoreErrorBody` | `givebutter/errors/campaigns_items_tickets_store_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

