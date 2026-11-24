<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.automations` · Source: `src/resources/automations.ts` · 3 operations · Request and error types: namespace `Automations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index6

- **Signature**: `index6(request: Automations.Index6Request, options?: RequestOptions): ApiPromise<AutomationsListResponse, Automations.Index6Error>`
- **Wire**: `GET /publications/{publicationId}/automations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutomationsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Automations.Index6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.Index6Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `AutomationsListRequestExpandItem` | no |
| `limit` | `query` | — | `number` | no |
| `page` | `query` | — | `number` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationsListRequestExpandItem` | `automationsListRequestExpandItemSchema` | `src/models/automations-list-request-expand-item.ts` |
| `AutomationsListResponse` | `automationsListResponseSchema` | `src/models/automations-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listEmails

- **Signature**: `listEmails(request: Automations.ListEmailsRequest, options?: RequestOptions): ApiPromise<AutomationEmailsListResponse, Automations.ListEmailsError>`
- **Wire**: `GET /publications/{publicationId}/automations/{automationId}/emails`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutomationEmailsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Automations.ListEmailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.ListEmailsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `automationId` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `page` | `query` | — | `number` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationEmailsListResponse` | `automationEmailsListResponseSchema` | `src/models/automation-emails-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show3

- **Signature**: `show3(request: Automations.Show3Request, options?: RequestOptions): ApiPromise<AutomationsGetResponse, Automations.Show3Error>`
- **Wire**: `GET /publications/{publicationId}/automations/{automationId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutomationsGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Automations.Show3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.Show3Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `automationId` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `AutomationsGetRequestExpandItem` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationsGetRequestExpandItem` | `automationsGetRequestExpandItemSchema` | `src/models/automations-get-request-expand-item.ts` |
| `AutomationsGetResponse` | `automationsGetResponseSchema` | `src/models/automations-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

