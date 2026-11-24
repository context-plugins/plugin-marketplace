<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomAudiences — operations

Accessor: `client.customAudiences` · Source: `src/resources/custom-audiences.ts` · 2 operations · Request and error types: namespace `CustomAudiences`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomAudience

- **Signature**: `createCustomAudience(request: CustomAudiences.CreateCustomAudienceRequest, options?: RequestOptions): ApiPromise<CreateResponse, CustomAudiences.CreateCustomAudienceError>`
- **Wire**: `POST /act_{ad_account_id}/customaudiences`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `CustomAudiences.CreateCustomAudienceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomAudiences.CreateCustomAudienceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes |
| `body` | `body` | — | `CustomAudienceCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomAudienceCreate` | `customAudienceCreateSchema` | `src/models/custom-audience-create.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCustomAudiences

- **Signature**: `listCustomAudiences(request: CustomAudiences.ListCustomAudiencesRequest, options?: RequestOptions): ApiPromise<CustomAudienceList, CustomAudiences.ListCustomAudiencesError>`
- **Wire**: `GET /act_{ad_account_id}/customaudiences`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomAudienceList`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `CustomAudiences.ListCustomAudiencesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomAudiences.ListCustomAudiencesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes | — |
| `fields` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `after` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomAudienceList` | `customAudienceListSchema` | `src/models/custom-audience-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

