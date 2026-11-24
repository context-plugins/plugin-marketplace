<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `src/resources/workspaces.ts` · 3 operations · Request and error types: namespace `Workspaces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### identify2

- **Signature**: `identify2(request: Workspaces.Identify2Request, options?: RequestOptions): ApiPromise<WorkspaceIdentifyResponse, Workspaces.Identify2Error>`
- **Wire**: `GET /workspaces/identify`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceIdentifyResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Workspaces.Identify2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.Identify2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceIdentifyResponse` | `workspaceIdentifyResponseSchema` | `src/models/workspace-identify-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### permissions

- **Signature**: `permissions(request: Workspaces.PermissionsRequest, options?: RequestOptions): ApiPromise<WorkspacePermissionsResponse, Workspaces.PermissionsError>`
- **Wire**: `GET /workspaces/permissions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacePermissionsResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Workspaces.PermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.PermissionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacePermissionsResponse` | `workspacePermissionsResponseSchema` | `src/models/workspace-permissions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### publicationsBySubscriptionEmail

- **Signature**: `publicationsBySubscriptionEmail(request: Workspaces.PublicationsBySubscriptionEmailRequest, options?: RequestOptions): ApiPromise<PublicationsBySubscriptionEmailResponseItem[], Workspaces.PublicationsBySubscriptionEmailError>`
- **Wire**: `GET /workspaces/publications/by_subscription_email/{email}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicationsBySubscriptionEmailResponseItem[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Workspaces.PublicationsBySubscriptionEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.PublicationsBySubscriptionEmailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `email` | `path` | — | `string` | yes |
| `expand` | `query` | — | `PublicationsBySubscriptionEmailRequestExpandItem[]` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsBySubscriptionEmailRequestExpandItem` | `publicationsBySubscriptionEmailRequestExpandItemSchema` | `src/models/publications-by-subscription-email-request-expand-item.ts` |
| `PublicationsBySubscriptionEmailResponseItem` | `publicationsBySubscriptionEmailResponseItemSchema` | `src/models/publications-by-subscription-email-response-item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

