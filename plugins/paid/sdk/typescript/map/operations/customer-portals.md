<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerPortals — operations

Accessor: `client.customerPortals` · Source: `src/resources/customer-portals.ts` · 1 operation · Request and error types: namespace `CustomerPortals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomerPortal

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCustomerPortal(request: CustomerPortals.CreateCustomerPortalRequestParams, options?: RequestOptions): ApiPromise<CustomerPortal, CustomerPortals.CreateCustomerPortalError>`
- **Wire**: `POST /customer-portals/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerPortal`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomerPortals.CreateCustomerPortalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerPortals.CreateCustomerPortalRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreateCustomerPortalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerPortalRequest` | `createCustomerPortalRequestSchema` | `src/models/create-customer-portal-request.ts` |
| `CustomerPortal` | `customerPortalSchema` | `src/models/customer-portal.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

