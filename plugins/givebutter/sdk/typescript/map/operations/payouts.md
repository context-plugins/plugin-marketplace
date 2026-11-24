<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payouts — operations

Accessor: `client.payouts` · Source: `src/resources/payouts.ts` · 2 operations · Request and error types: namespace `Payouts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### payoutsIndex

- **Signature**: `payoutsIndex(options?: RequestOptions): ApiPromise<V1PayoutsResponse, ApiError>`
- **Wire**: `GET /v1/payouts`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PayoutsResponse`
- **Error**: `GivebutterError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PayoutsResponse` | `v1PayoutsResponseSchema` | `src/models/v1-payouts-response.ts` |

### payoutsShow

- **Signature**: `payoutsShow(request: Payouts.PayoutsShowRequest, options?: RequestOptions): ApiPromise<PayoutResource, Payouts.PayoutsShowError>`
- **Wire**: `GET /v1/payouts/{payout}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Payouts.PayoutsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payouts.PayoutsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `payout` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutResource` | `payoutResourceSchema` | `src/models/payout-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

