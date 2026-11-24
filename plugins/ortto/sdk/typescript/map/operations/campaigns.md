<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `src/resources/campaigns.ts` · 2 operations · Request and error types: namespace `Campaigns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ortto`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCampaignCalendar

- **Signature**: `getCampaignCalendar(request: Campaigns.GetCampaignCalendarRequest, options?: RequestOptions): ApiPromise<undefined, Campaigns.GetCampaignCalendarError>`
- **Wire**: `POST /campaign/calendar`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OrttoError` with `kind: "api"`, an instance of `Campaigns.GetCampaignCalendarError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.GetCampaignCalendarRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CampaignCalendarRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignCalendarRequest` | `campaignCalendarRequestSchema` | `src/models/campaign-calendar-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCampaignReport

- **Signature**: `getCampaignReport(request: Campaigns.GetCampaignReportRequest, options?: RequestOptions): ApiPromise<undefined, Campaigns.GetCampaignReportError>`
- **Wire**: `POST /campaign/reports/get`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OrttoError` with `kind: "api"`, an instance of `Campaigns.GetCampaignReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.GetCampaignReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CampaignReportsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignReportsGetRequest` | `campaignReportsGetRequestSchema` | `src/models/campaign-reports-get-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

