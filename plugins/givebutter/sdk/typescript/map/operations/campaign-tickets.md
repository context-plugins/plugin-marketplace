<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignTickets — operations

Accessor: `client.campaignTickets` · Source: `src/resources/campaign-tickets.ts` · 3 operations · Request and error types: namespace `CampaignTickets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### campaignsItemsTicketsIndex

- **Signature**: `campaignsItemsTicketsIndex(request: CampaignTickets.CampaignsItemsTicketsIndexRequest, options?: RequestOptions): ApiPromise<V1CampaignsItemsTicketsResponse, CampaignTickets.CampaignsItemsTicketsIndexError>`
- **Wire**: `GET /v1/campaigns/{campaign}/items/tickets`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CampaignsItemsTicketsResponse`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignTickets.CampaignsItemsTicketsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignTickets.CampaignsItemsTicketsIndexRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CampaignsItemsTicketsResponse` | `v1CampaignsItemsTicketsResponseSchema` | `src/models/v1-campaigns-items-tickets-response.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsItemsTicketsShow

- **Signature**: `campaignsItemsTicketsShow(request: CampaignTickets.CampaignsItemsTicketsShowRequest, options?: RequestOptions): ApiPromise<CampaignItemTicketResource, CampaignTickets.CampaignsItemsTicketsShowError>`
- **Wire**: `GET /v1/campaigns/{campaign}/items/tickets/{ticketId}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CampaignItemTicketResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignTickets.CampaignsItemsTicketsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignTickets.CampaignsItemsTicketsShowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `ticketId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignItemTicketResource` | `campaignItemTicketResourceSchema` | `src/models/campaign-item-ticket-resource.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsItemsTicketsStore

- **Signature**: `campaignsItemsTicketsStore(request: CampaignTickets.CampaignsItemsTicketsStoreRequest, options?: RequestOptions): ApiPromise<CampaignItemTicketResource, CampaignTickets.CampaignsItemsTicketsStoreError>`
- **Wire**: `POST /v1/campaigns/{campaign}/items/tickets`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CampaignItemTicketResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignTickets.CampaignsItemsTicketsStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignTickets.CampaignsItemsTicketsStoreRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `body` | `body` | `StoreCampaignItemTicketRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreCampaignItemTicketRequest` | `storeCampaignItemTicketRequestSchema` | `src/models/store-campaign-item-ticket-request.ts` |
| `CampaignItemTicketResource` | `campaignItemTicketResourceSchema` | `src/models/campaign-item-ticket-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

