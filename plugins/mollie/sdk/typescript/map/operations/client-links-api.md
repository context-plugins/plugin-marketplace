<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientLinksApi — operations

Accessor: `client.clientLinksApi` · Source: `src/resources/client-links-api.ts` · 1 operation · Request and error types: namespace `ClientLinksApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createClientLink

- **Signature**: `createClientLink(request: ClientLinksApi.CreateClientLinkRequest, options?: RequestOptions): ApiPromise<undefined, ClientLinksApi.CreateClientLinkError>`
- **Wire**: `POST /v2/client-links`
- **Auth**: `advancedAccessToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ClientLinksApi.CreateClientLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientLinksApi.CreateClientLinkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `ClientLinkRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientLinkRequest` | `clientLinkRequestSchema` | `src/models/client-link-request.ts` |

