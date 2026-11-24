<!-- Generated file — do not edit; regenerated with the SDK. -->

# NewsletterListSubscriptions — operations

Accessor: `client.newsletterListSubscriptions` · Source: `src/resources/newsletter-list-subscriptions.ts` · 5 operations · Request and error types: namespace `NewsletterListSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create6

- **Signature**: `create6(request: NewsletterListSubscriptions.Create6Request, options?: RequestOptions): ApiPromise<NewsletterListSubscriptionResponse, NewsletterListSubscriptions.Create6Error>`
- **Wire**: `POST /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NewsletterListSubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterListSubscriptions.Create6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterListSubscriptions.Create6Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `newsletterListId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsNewsletterListsSubscriptionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsNewsletterListsSubscriptionsRequest` | `publicationsNewsletterListsSubscriptionsRequestSchema` | `src/models/publications-newsletter-lists-subscriptions-request.ts` |
| `NewsletterListSubscriptionResponse` | `newsletterListSubscriptionResponseSchema` | `src/models/newsletter-list-subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index13

- **Signature**: `index13(request: NewsletterListSubscriptions.Index13Request, options?: RequestOptions): ApiPromise<NewsletterListSubscriptionIndexResponse, NewsletterListSubscriptions.Index13Error>`
- **Wire**: `GET /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NewsletterListSubscriptionIndexResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterListSubscriptions.Index13Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterListSubscriptions.Index13Request` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `newsletterListId` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `page` | `query` | — | `number` | no | — |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `NewsletterListSubscriptionIndexResponse` | `newsletterListSubscriptionIndexResponseSchema` | `src/models/newsletter-list-subscription-index-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show9

- **Signature**: `show9(request: NewsletterListSubscriptions.Show9Request, options?: RequestOptions): ApiPromise<NewsletterListSubscriptionResponse, NewsletterListSubscriptions.Show9Error>`
- **Wire**: `GET /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NewsletterListSubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterListSubscriptions.Show9Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterListSubscriptions.Show9Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `newsletterListId` | `path` | — | `string` | yes |
| `newsletterListSubscriptionId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NewsletterListSubscriptionResponse` | `newsletterListSubscriptionResponseSchema` | `src/models/newsletter-list-subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### update

- **Signature**: `update(request: NewsletterListSubscriptions.UpdateRequest, options?: RequestOptions): ApiPromise<NewsletterListSubscriptionResponse, NewsletterListSubscriptions.UpdateError>`
- **Wire**: `PATCH /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NewsletterListSubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterListSubscriptions.UpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterListSubscriptions.UpdateRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `newsletterListId` | `path` | — | `string` | yes |
| `newsletterListSubscriptionId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest` | `publicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestSchema` | `src/models/publications-newsletter-lists-subscriptions-newsletter-list-subscription-id-request.ts` |
| `NewsletterListSubscriptionResponse` | `newsletterListSubscriptionResponseSchema` | `src/models/newsletter-list-subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateBySubscriptionId

- **Signature**: `updateBySubscriptionId(request: NewsletterListSubscriptions.UpdateBySubscriptionIdRequest, options?: RequestOptions): ApiPromise<NewsletterListSubscriptionResponse, NewsletterListSubscriptions.UpdateBySubscriptionIdError>`
- **Wire**: `PATCH /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/by_subscription_id/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NewsletterListSubscriptionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `NewsletterListSubscriptions.UpdateBySubscriptionIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsletterListSubscriptions.UpdateBySubscriptionIdRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `newsletterListId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest` | `publicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestSchema` | `src/models/publications-newsletter-lists-subscriptions-by-subscription-id-subscription-id-request.ts` |
| `NewsletterListSubscriptionResponse` | `newsletterListSubscriptionResponseSchema` | `src/models/newsletter-list-subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

