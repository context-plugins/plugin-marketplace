<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `src/resources/campaigns.ts` · 5 operations · Request and error types: namespace `Campaigns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### campaignsDestroy

- **Signature**: `campaignsDestroy(request: Campaigns.CampaignsDestroyRequest, options?: RequestOptions): ApiPromise<undefined, Campaigns.CampaignsDestroyError>`
- **Wire**: `DELETE /v1/campaigns/{campaign}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Campaigns.CampaignsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1Campaigns409Error1"` [409] `V1Campaigns409Error1` · `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.CampaignsDestroyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1Campaigns409Error1` | `v1Campaigns409Error1Schema` | `src/models/v1-campaigns409-error1.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsIndex

- **Signature**: `campaignsIndex(request?: Campaigns.CampaignsIndexRequest, options?: RequestOptions): ApiPromise<V1CampaignsResponse, ApiError>`
- **Wire**: `GET /v1/campaigns`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CampaignsResponse`
- **Error**: `GivebutterError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Campaigns.CampaignsIndexRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `scope` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CampaignsResponse` | `v1CampaignsResponseSchema` | `src/models/v1-campaigns-response.ts` |

### campaignsShow

- **Signature**: `campaignsShow(request: Campaigns.CampaignsShowRequest, options?: RequestOptions): ApiPromise<CampaignResource, Campaigns.CampaignsShowError>`
- **Wire**: `GET /v1/campaigns/{campaign}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CampaignResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Campaigns.CampaignsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.CampaignsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignResource` | `campaignResourceSchema` | `src/models/campaign-resource.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsStore

- **Signature**: `campaignsStore(request: Campaigns.CampaignsStoreRequest, options?: RequestOptions): ApiPromise<CampaignResource, Campaigns.CampaignsStoreError>`
- **Wire**: `POST /v1/campaigns`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CampaignResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Campaigns.CampaignsStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.CampaignsStoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoreCampaignRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreCampaignRequest` | `storeCampaignRequestSchema` | `src/models/store-campaign-request.ts` |
| `CampaignResource` | `campaignResourceSchema` | `src/models/campaign-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### campaignsUpdate

- **Signature**: `campaignsUpdate(request: Campaigns.CampaignsUpdateRequest, options?: RequestOptions): ApiPromise<CampaignResource, Campaigns.CampaignsUpdateError>`
- **Wire**: `PUT /v1/campaigns/{campaign}`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CampaignResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Campaigns.CampaignsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.CampaignsUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `body` | `body` | `UpdateCampaignRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCampaignRequest` | `updateCampaignRequestSchema` | `src/models/update-campaign-request.ts` |
| `CampaignResource` | `campaignResourceSchema` | `src/models/campaign-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

