<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignMembers — operations

Accessor: `client.campaignMembers` · Source: `src/resources/campaign-members.ts` · 3 operations · Request and error types: namespace `CampaignMembers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### campaignsMembersDestroy

- **Signature**: `campaignsMembersDestroy(request: CampaignMembers.CampaignsMembersDestroyRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, CampaignMembers.CampaignsMembersDestroyError>`
- **Wire**: `DELETE /v1/campaigns/{campaign}/members/{member}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignMembers.CampaignsMembersDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignMembers.CampaignsMembersDestroyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `member` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsMembersIndex

- **Signature**: `campaignsMembersIndex(request: CampaignMembers.CampaignsMembersIndexRequest, options?: RequestOptions): ApiPromise<V1CampaignsMembersResponse1, CampaignMembers.CampaignsMembersIndexError>`
- **Wire**: `GET /v1/campaigns/{campaign}/members`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CampaignsMembersResponse1`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignMembers.CampaignsMembersIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignMembers.CampaignsMembersIndexRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CampaignsMembersResponse1` | `v1CampaignsMembersResponse1Schema` | `src/models/unions/v1-campaigns-members-response1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsMembersShow

- **Signature**: `campaignsMembersShow(request: CampaignMembers.CampaignsMembersShowRequest, options?: RequestOptions): ApiPromise<V1CampaignsMembersResponse11, CampaignMembers.CampaignsMembersShowError>`
- **Wire**: `GET /v1/campaigns/{campaign}/members/{member}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CampaignsMembersResponse11`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignMembers.CampaignsMembersShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignMembers.CampaignsMembersShowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `member` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CampaignsMembersResponse11` | `v1CampaignsMembersResponse11Schema` | `src/models/unions/v1-campaigns-members-response11.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

