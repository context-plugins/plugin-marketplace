<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrdersLines — operations

Accessor: `client.ordersLines` · Source: `src/resources/orders-lines.ts` · 1 operation · Request types: namespace `OrdersLines`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### update3

- **Signature**: `update3(request: OrdersLines.Update3Request, options?: RequestOptions): ApiPromise<Order, ApiError>`
- **Wire**: `PUT /orders/{orderId}/lines`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrdersLines.Update3Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `OrdersLinesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrdersLinesRequest` | `ordersLinesRequestSchema` | `src/models/orders-lines-request.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |

