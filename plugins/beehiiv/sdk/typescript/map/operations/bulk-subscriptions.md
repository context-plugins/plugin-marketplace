<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSubscriptions — operations

Accessor: `client.bulkSubscriptions` · Source: `src/resources/bulk-subscriptions.ts` · 1 operation · Request and error types: namespace `BulkSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create3

- **Signature**: `create3(request: BulkSubscriptions.Create3Request, options?: RequestOptions): ApiPromise<BulkSubscriptionCreateResponse, BulkSubscriptions.Create3Error>`
- **Wire**: `POST /publications/{publicationId}/bulk_subscriptions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkSubscriptionCreateResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `BulkSubscriptions.Create3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkSubscriptions.Create3Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsBulkSubscriptionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsBulkSubscriptionsRequest` | `publicationsBulkSubscriptionsRequestSchema` | `src/models/publications-bulk-subscriptions-request.ts` |
| `BulkSubscriptionCreateResponse` | `bulkSubscriptionCreateResponseSchema` | `src/models/bulk-subscription-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

