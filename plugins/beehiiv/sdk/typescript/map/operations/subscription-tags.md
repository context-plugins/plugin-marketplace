<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubscriptionTags — operations

Accessor: `client.subscriptionTags` · Source: `src/resources/subscription-tags.ts` · 1 operation · Request and error types: namespace `SubscriptionTags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create10

- **Signature**: `create10(request: SubscriptionTags.Create10Request, options?: RequestOptions): ApiPromise<SubscriptionTagsCreateResponse, SubscriptionTags.Create10Error>`
- **Wire**: `POST /publications/{publicationId}/subscriptions/{subscriptionId}/tags`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionTagsCreateResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `SubscriptionTags.Create10Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionTags.Create10Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsSubscriptionsTagsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsSubscriptionsTagsRequest` | `publicationsSubscriptionsTagsRequestSchema` | `src/models/publications-subscriptions-tags-request.ts` |
| `SubscriptionTagsCreateResponse` | `subscriptionTagsCreateResponseSchema` | `src/models/subscription-tags-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

