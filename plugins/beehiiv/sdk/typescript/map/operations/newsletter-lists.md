<!-- Generated file — do not edit; regenerated with the SDK. -->

# NewsletterLists — operations

Accessor: `client.newsletterLists` · Source: `src/resources/newsletter-lists.ts` · 5 operations · Request and error types: namespace `NewsletterLists`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create7

- **Signature**: `create7(request: NewsletterLists.Create7Request, options?: RequestOptions): ApiPromise<NewsletterListResponse, NewsletterLists.Create7Error>`
- **Wire**: `POST /publications/{publicationId}/newsletter_lists`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NewsletterListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterLists.Create7Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterLists.Create7Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsNewsletterListsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsNewsletterListsRequest` | `publicationsNewsletterListsRequestSchema` | `src/models/publications-newsletter-lists-request.ts` |
| `NewsletterListResponse` | `newsletterListResponseSchema` | `src/models/newsletter-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### delete2

- **Signature**: `delete2(request: NewsletterLists.Delete2Request, options?: RequestOptions): ApiPromise<undefined, NewsletterLists.Delete2Error>`
- **Wire**: `DELETE /publications/{publicationId}/newsletter_lists/{newsletterListId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterLists.Delete2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterLists.Delete2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `newsletterListId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index14

- **Signature**: `index14(request: NewsletterLists.Index14Request, options?: RequestOptions): ApiPromise<NewsletterListIndexResponse, NewsletterLists.Index14Error>`
- **Wire**: `GET /publications/{publicationId}/newsletter_lists`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NewsletterListIndexResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterLists.Index14Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterLists.Index14Request` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `NewsletterListIndexResponse` | `newsletterListIndexResponseSchema` | `src/models/newsletter-list-index-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show10

- **Signature**: `show10(request: NewsletterLists.Show10Request, options?: RequestOptions): ApiPromise<NewsletterListResponse, NewsletterLists.Show10Error>`
- **Wire**: `GET /publications/{publicationId}/newsletter_lists/{newsletterListId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NewsletterListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterLists.Show10Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterLists.Show10Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `newsletterListId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NewsletterListResponse` | `newsletterListResponseSchema` | `src/models/newsletter-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### update2

- **Signature**: `update2(request: NewsletterLists.Update2Request, options?: RequestOptions): ApiPromise<NewsletterListResponse, NewsletterLists.Update2Error>`
- **Wire**: `PATCH /publications/{publicationId}/newsletter_lists/{newsletterListId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NewsletterListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterLists.Update2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterLists.Update2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `newsletterListId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsNewsletterListsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsNewsletterListsRequest1` | `publicationsNewsletterListsRequest1Schema` | `src/models/publications-newsletter-lists-request1.ts` |
| `NewsletterListResponse` | `newsletterListResponseSchema` | `src/models/newsletter-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

