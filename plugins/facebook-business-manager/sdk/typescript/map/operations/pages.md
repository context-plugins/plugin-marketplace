<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pages — operations

Accessor: `client.pages` · Source: `src/resources/pages.ts` · 2 operations · Request and error types: namespace `Pages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPage

- **Signature**: `getPage(request: Pages.GetPageRequest, options?: RequestOptions): ApiPromise<Page, Pages.GetPageError>`
- **Wire**: `GET /{page_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Page`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Pages.GetPageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pages.GetPageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/page.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subscribePageApp

- **Signature**: `subscribePageApp(request: Pages.SubscribePageAppRequest, options?: RequestOptions): ApiPromise<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Pages.SubscribePageAppError>`
- **Wire**: `POST /{page_id}/subscribed_apps`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Pages.SubscribePageAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pages.SubscribePageAppRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |
| `body` | `body` | — | `SubscribedAppsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscribedAppsRequest` | `subscribedAppsRequestSchema` | `src/models/subscribed-apps-request.ts` |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema` | `src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

