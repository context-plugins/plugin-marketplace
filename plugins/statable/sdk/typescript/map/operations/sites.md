<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sites — operations

Accessor: `client.sites` · Source: `src/resources/sites.ts` · 21 operations · Request and error types: namespace `Sites`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `statable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFunnel

- **Signature**: `createFunnel(request: Sites.CreateFunnelRequest, options?: RequestOptions): ApiPromise<FunnelDefinition, Sites.CreateFunnelError>`
- **Wire**: `POST /sites/{id}/funnels`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FunnelDefinition`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.CreateFunnelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.CreateFunnelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `FunnelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunnelRequest` | `funnelRequestSchema` | `src/models/funnel-request.ts` |
| `FunnelDefinition` | `funnelDefinitionSchema` | `src/models/funnel-definition.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createGoal

- **Signature**: `createGoal(request: Sites.CreateGoalRequest, options?: RequestOptions): ApiPromise<Goal, Sites.CreateGoalError>`
- **Wire**: `POST /sites/{id}/goals`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Goal`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.CreateGoalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.CreateGoalRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `GoalRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalRequest` | `goalRequestSchema` | `src/models/goal-request.ts` |
| `Goal` | `goalSchema` | `src/models/goal.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createSite

- **Signature**: `createSite(request: Sites.CreateSiteRequestParams, options?: RequestOptions): ApiPromise<SiteDetail, Sites.CreateSiteError>`
- **Wire**: `POST /sites`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SiteDetail`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.CreateSiteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.CreateSiteRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CreateSiteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSiteRequest` | `createSiteRequestSchema` | `src/models/create-site-request.ts` |
| `SiteDetail` | `siteDetailSchema` | `src/models/site-detail.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteFunnel

- **Signature**: `deleteFunnel(request: Sites.DeleteFunnelRequest, options?: RequestOptions): ApiPromise<undefined, Sites.DeleteFunnelError>`
- **Wire**: `DELETE /sites/{id}/funnels/{funnelId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.DeleteFunnelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.DeleteFunnelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `funnelId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteGoal

- **Signature**: `deleteGoal(request: Sites.DeleteGoalRequest, options?: RequestOptions): ApiPromise<undefined, Sites.DeleteGoalError>`
- **Wire**: `DELETE /sites/{id}/goals/{goalId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.DeleteGoalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.DeleteGoalRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `goalId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteSite

- **Signature**: `deleteSite(request: Sites.DeleteSiteRequest, options?: RequestOptions): ApiPromise<undefined, Sites.DeleteSiteError>`
- **Wire**: `DELETE /sites/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.DeleteSiteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.DeleteSiteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getBlockedIPs

- **Signature**: `getBlockedIPs(request: Sites.GetBlockedIPsRequest, options?: RequestOptions): ApiPromise<SitesSettingsBlockedIpsResponse, Sites.GetBlockedIPsError>`
- **Wire**: `GET /sites/{id}/settings/blocked-ips`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SitesSettingsBlockedIpsResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.GetBlockedIPsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.GetBlockedIPsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SitesSettingsBlockedIpsResponse` | `sitesSettingsBlockedIpsResponseSchema` | `src/models/sites-settings-blocked-ips-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCountrySettings

- **Signature**: `getCountrySettings(request: Sites.GetCountrySettingsRequest, options?: RequestOptions): ApiPromise<CountryList, Sites.GetCountrySettingsError>`
- **Wire**: `GET /sites/{id}/settings/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountryList`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.GetCountrySettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.GetCountrySettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountryList` | `countryListSchema` | `src/models/country-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getHostnameSettings

- **Signature**: `getHostnameSettings(request: Sites.GetHostnameSettingsRequest, options?: RequestOptions): ApiPromise<HostnameList, Sites.GetHostnameSettingsError>`
- **Wire**: `GET /sites/{id}/settings/hostnames`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HostnameList`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.GetHostnameSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.GetHostnameSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HostnameList` | `hostnameListSchema` | `src/models/hostname-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPublicDashboard

- **Signature**: `getPublicDashboard(request: Sites.GetPublicDashboardRequest, options?: RequestOptions): ApiPromise<PublicDashboard, Sites.GetPublicDashboardError>`
- **Wire**: `GET /sites/{id}/settings/public-dashboard`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicDashboard`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.GetPublicDashboardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.GetPublicDashboardRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicDashboard` | `publicDashboardSchema` | `src/models/public-dashboard.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSiteSnippet

- **Signature**: `getSiteSnippet(request: Sites.GetSiteSnippetRequest, options?: RequestOptions): ApiPromise<SiteSnippet, Sites.GetSiteSnippetError>`
- **Wire**: `GET /sites/{id}/snippet`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteSnippet`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.GetSiteSnippetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.GetSiteSnippetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `type` | `query` | `Type` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `SiteSnippet` | `siteSnippetSchema` | `src/models/site-snippet.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getTrackingSettings

- **Signature**: `getTrackingSettings(request: Sites.GetTrackingSettingsRequest, options?: RequestOptions): ApiPromise<TrackingSettings, Sites.GetTrackingSettingsError>`
- **Wire**: `GET /sites/{id}/settings/tracking`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrackingSettings`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.GetTrackingSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.GetTrackingSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrackingSettings` | `trackingSettingsSchema` | `src/models/tracking-settings.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listSiteGoals

- **Signature**: `listSiteGoals(request: Sites.ListSiteGoalsRequest, options?: RequestOptions): ApiPromise<SitesGoalsResponse, Sites.ListSiteGoalsError>`
- **Wire**: `GET /sites/{id}/goals`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SitesGoalsResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.ListSiteGoalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.ListSiteGoalsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SitesGoalsResponse` | `sitesGoalsResponseSchema` | `src/models/sites-goals-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setBlockedIPs

- **Signature**: `setBlockedIPs(request: Sites.SetBlockedIPsRequest, options?: RequestOptions): ApiPromise<SettingsCount, Sites.SetBlockedIPsError>`
- **Wire**: `PUT /sites/{id}/settings/blocked-ips`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SettingsCount`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.SetBlockedIPsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.SetBlockedIPsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SettingsCount` | `settingsCountSchema` | `src/models/settings-count.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setCountrySettings

- **Signature**: `setCountrySettings(request: Sites.SetCountrySettingsRequest, options?: RequestOptions): ApiPromise<SettingsCount, Sites.SetCountrySettingsError>`
- **Wire**: `PUT /sites/{id}/settings/countries`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SettingsCount`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.SetCountrySettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.SetCountrySettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `CountryListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountryListRequest` | `countryListRequestSchema` | `src/models/country-list-request.ts` |
| `SettingsCount` | `settingsCountSchema` | `src/models/settings-count.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setHostnameSettings

- **Signature**: `setHostnameSettings(request: Sites.SetHostnameSettingsRequest, options?: RequestOptions): ApiPromise<SettingsCount, Sites.SetHostnameSettingsError>`
- **Wire**: `PUT /sites/{id}/settings/hostnames`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SettingsCount`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.SetHostnameSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.SetHostnameSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `HostnameListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HostnameListRequest` | `hostnameListRequestSchema` | `src/models/hostname-list-request.ts` |
| `SettingsCount` | `settingsCountSchema` | `src/models/settings-count.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setPublicDashboard

- **Signature**: `setPublicDashboard(request: Sites.SetPublicDashboardRequest, options?: RequestOptions): ApiPromise<PublicDashboard, Sites.SetPublicDashboardError>`
- **Wire**: `PUT /sites/{id}/settings/public-dashboard`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicDashboard`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.SetPublicDashboardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.SetPublicDashboardRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `PublicDashboard` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicDashboard` | `publicDashboardSchema` | `src/models/public-dashboard.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setTrackingSettings

- **Signature**: `setTrackingSettings(request: Sites.SetTrackingSettingsRequest, options?: RequestOptions): ApiPromise<TrackingSettings, Sites.SetTrackingSettingsError>`
- **Wire**: `PUT /sites/{id}/settings/tracking`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrackingSettings`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.SetTrackingSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.SetTrackingSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `TrackingSettingsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrackingSettingsRequest` | `trackingSettingsRequestSchema` | `src/models/tracking-settings-request.ts` |
| `TrackingSettings` | `trackingSettingsSchema` | `src/models/tracking-settings.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateFunnel

- **Signature**: `updateFunnel(request: Sites.UpdateFunnelRequest, options?: RequestOptions): ApiPromise<FunnelDefinition, Sites.UpdateFunnelError>`
- **Wire**: `PUT /sites/{id}/funnels/{funnelId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FunnelDefinition`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.UpdateFunnelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.UpdateFunnelRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `funnelId` | `path` | `number` | yes |
| `body` | `body` | `FunnelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunnelRequest` | `funnelRequestSchema` | `src/models/funnel-request.ts` |
| `FunnelDefinition` | `funnelDefinitionSchema` | `src/models/funnel-definition.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateGoal

- **Signature**: `updateGoal(request: Sites.UpdateGoalRequest, options?: RequestOptions): ApiPromise<Goal, Sites.UpdateGoalError>`
- **Wire**: `PUT /sites/{id}/goals/{goalId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Goal`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.UpdateGoalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.UpdateGoalRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `goalId` | `path` | `number` | yes |
| `body` | `body` | `GoalRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalRequest` | `goalRequestSchema` | `src/models/goal-request.ts` |
| `Goal` | `goalSchema` | `src/models/goal.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateSite

- **Signature**: `updateSite(request: Sites.UpdateSiteRequestParams, options?: RequestOptions): ApiPromise<SiteDetail, Sites.UpdateSiteError>`
- **Wire**: `PATCH /sites/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SiteDetail`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Sites.UpdateSiteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.UpdateSiteRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `UpdateSiteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSiteRequest` | `updateSiteRequestSchema` | `src/models/update-site-request.ts` |
| `SiteDetail` | `siteDetailSchema` | `src/models/site-detail.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

