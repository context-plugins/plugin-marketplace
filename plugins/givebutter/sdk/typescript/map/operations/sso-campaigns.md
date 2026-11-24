<!-- Generated file — do not edit; regenerated with the SDK. -->

# SsoCampaigns — operations

Accessor: `client.ssoCampaigns` · Source: `src/resources/sso-campaigns.ts` · 1 operation · Request and error types: namespace `SsoCampaigns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### ssoCampaignsShow

- **Signature**: `ssoCampaignsShow(request: SsoCampaigns.SsoCampaignsShowRequest, options?: RequestOptions): ApiPromise<CampaignResource, SsoCampaigns.SsoCampaignsShowError>`
- **Wire**: `GET /sso/v1/campaigns/{campaign}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CampaignResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `SsoCampaigns.SsoCampaignsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authenticationException1"` [401] `AuthenticationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SsoCampaigns.SsoCampaignsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignResource` | `campaignResourceSchema` | `src/models/campaign-resource.ts` |
| `AuthenticationException1` | `authenticationException1Schema` | `src/models/authentication-exception1.ts` |

