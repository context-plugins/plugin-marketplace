<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignTeams — operations

Accessor: `client.campaignTeams` · Source: `src/resources/campaign-teams.ts` · 3 operations · Request and error types: namespace `CampaignTeams`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### campaignsTeamsDestroy

- **Signature**: `campaignsTeamsDestroy(request: CampaignTeams.CampaignsTeamsDestroyRequest, options?: RequestOptions): ApiPromise<undefined, CampaignTeams.CampaignsTeamsDestroyError>`
- **Wire**: `DELETE /v1/campaigns/{campaign}/teams/{team}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignTeams.CampaignsTeamsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignTeams.CampaignsTeamsDestroyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `team` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsTeamsIndex

- **Signature**: `campaignsTeamsIndex(request: CampaignTeams.CampaignsTeamsIndexRequest, options?: RequestOptions): ApiPromise<V1CampaignsTeamsResponse, CampaignTeams.CampaignsTeamsIndexError>`
- **Wire**: `GET /v1/campaigns/{campaign}/teams`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CampaignsTeamsResponse`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignTeams.CampaignsTeamsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignTeams.CampaignsTeamsIndexRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CampaignsTeamsResponse` | `v1CampaignsTeamsResponseSchema` | `src/models/v1-campaigns-teams-response.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsTeamsShow

- **Signature**: `campaignsTeamsShow(request: CampaignTeams.CampaignsTeamsShowRequest, options?: RequestOptions): ApiPromise<CampaignTeamResource, CampaignTeams.CampaignsTeamsShowError>`
- **Wire**: `GET /v1/campaigns/{campaign}/teams/{team}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CampaignTeamResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignTeams.CampaignsTeamsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignTeams.CampaignsTeamsShowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `team` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignTeamResource` | `campaignTeamResourceSchema` | `src/models/campaign-team-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

