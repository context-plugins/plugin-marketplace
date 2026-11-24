<!-- Generated file — do not edit; regenerated with the SDK. -->

# Replacements — operations

Accessor: `client.replacements` · Source: `src/resources/replacements.ts` · 1 operation · Request and error types: namespace `Replacements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### updateItemReplacement

- **Signature**: `updateItemReplacement(request: Replacements.UpdateItemReplacementRequest, options?: RequestOptions): ApiPromise<ReplacementResponse, Replacements.UpdateItemReplacementError>`
- **Wire**: `PUT /v2/post_checkout/orders/{order_id}/items/{order_item_id}/replacement`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReplacementResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Replacements.UpdateItemReplacementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Replacements.UpdateItemReplacementRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |
| `orderItemId` | `path` | `order_item_id` | `string` | yes |
| `body` | `body` | — | `ReplacementDecisionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReplacementDecisionRequest` | `replacementDecisionRequestSchema` | `src/models/replacement-decision-request.ts` |
| `ReplacementResponse` | `replacementResponseSchema` | `src/models/replacement-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

