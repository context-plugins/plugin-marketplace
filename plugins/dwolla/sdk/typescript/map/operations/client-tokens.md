<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientTokens — operations

Accessor: `client.clientTokens` · Source: `src/resources/client-tokens.ts` · 1 operation · Request and error types: namespace `ClientTokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createClientToken

- **Signature**: `createClientToken(request: ClientTokens.CreateClientTokenRequest, options?: RequestOptions): ApiPromise<undefined, ClientTokens.CreateClientTokenError>`
- **Wire**: `POST /client-tokens`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ClientTokens.CreateClientTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientTokens.CreateClientTokenRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `ClientTokensRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `ClientTokensRequest` | `clientTokensRequestSchema` | `src/models/client-tokens-request.ts` |

