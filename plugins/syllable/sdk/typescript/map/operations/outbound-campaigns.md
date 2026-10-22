<!-- Generated file — do not edit; regenerated with the SDK. -->

# OutboundCampaigns — operations

Accessor: `client.outboundCampaigns` · Source: `src/resources/outbound-campaigns.ts` · 5 operations · Request and error types: namespace `OutboundCampaigns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### outboundCampaignCreate

- **Signature**: `outboundCampaignCreate(request: OutboundCampaigns.OutboundCampaignCreateRequest, options?: RequestOptions): ApiPromise<ResponseOutboundCampaignCreate, OutboundCampaigns.OutboundCampaignCreateError>`
- **Wire**: `POST /api/v1/outbound/campaigns`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResponseOutboundCampaignCreate`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundCampaigns.OutboundCampaignCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCampaigns.OutboundCampaignCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OutboundCampaignInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OutboundCampaignInput` | `outboundCampaignInputSchema` | `src/models/outbound-campaign-input.ts` |
| `ResponseOutboundCampaignCreate` | `responseOutboundCampaignCreateSchema` | `src/models/unions/response-outbound-campaign-create.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundCampaignDelete

- **Signature**: `outboundCampaignDelete(request: OutboundCampaigns.OutboundCampaignDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, OutboundCampaigns.OutboundCampaignDeleteError>`
- **Wire**: `DELETE /api/v1/outbound/campaigns/{campaign_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundCampaigns.OutboundCampaignDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCampaigns.OutboundCampaignDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | `campaign_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundCampaignGetById

- **Signature**: `outboundCampaignGetById(request: OutboundCampaigns.OutboundCampaignGetByIdRequest, options?: RequestOptions): ApiPromise<OutboundCampaign, OutboundCampaigns.OutboundCampaignGetByIdError>`
- **Wire**: `GET /api/v1/outbound/campaigns/{campaign_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OutboundCampaign`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundCampaigns.OutboundCampaignGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCampaigns.OutboundCampaignGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | `campaign_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OutboundCampaign` | `outboundCampaignSchema` | `src/models/outbound-campaign.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundCampaignList

- **Signature**: `outboundCampaignList(request: OutboundCampaigns.OutboundCampaignListRequest, options?: RequestOptions): ApiPromise<ResponseOutboundCampaignList, OutboundCampaigns.OutboundCampaignListError>`
- **Wire**: `GET /api/v1/outbound/campaigns`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResponseOutboundCampaignList`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundCampaigns.OutboundCampaignListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1OutboundCampaigns400Error1"` [400] `ApiV1OutboundCampaigns400Error1` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCampaigns.OutboundCampaignListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `CampaignProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy314` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields26` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `CampaignProperties` | `campaignPropertiesSchema` | `src/models/campaign-properties.ts` |
| `OrderBy314` | `orderBy314Schema` | `src/models/unions/order-by314.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields26` | `fields26Schema` | `src/models/unions/fields26.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ResponseOutboundCampaignList` | `responseOutboundCampaignListSchema` | `src/models/unions/response-outbound-campaign-list.ts` |
| `ApiV1OutboundCampaigns400Error1` | `apiV1OutboundCampaigns400Error1Schema` | `src/models/api-v1-outbound-campaigns400-error1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### outboundCampaignUpdate

- **Signature**: `outboundCampaignUpdate(request: OutboundCampaigns.OutboundCampaignUpdateRequest, options?: RequestOptions): ApiPromise<OutboundCampaign, OutboundCampaigns.OutboundCampaignUpdateError>`
- **Wire**: `PUT /api/v1/outbound/campaigns/{campaign_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OutboundCampaign`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OutboundCampaigns.OutboundCampaignUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCampaigns.OutboundCampaignUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | `campaign_id` | `number` | yes |
| `body` | `body` | — | `OutboundCampaignInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OutboundCampaignInput` | `outboundCampaignInputSchema` | `src/models/outbound-campaign-input.ts` |
| `OutboundCampaign` | `outboundCampaignSchema` | `src/models/outbound-campaign.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

