<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientsApi — operations

Accessor: `client.clientsApi` · Source: `src/resources/clients-api.ts` · 2 operations · Request and error types: namespace `ClientsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getClient

- **Signature**: `getClient(request: ClientsApi.GetClientRequest, options?: RequestOptions): ApiPromise<undefined, ClientsApi.GetClientError>`
- **Wire**: `GET /v2/clients/{organizationId}`
- **Auth**: `advancedAccessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ClientsApi.GetClientError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientsApi.GetClientRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationId` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listClients

- **Signature**: `listClients(request: ClientsApi.ListClientsRequest, options?: RequestOptions): ApiPromise<undefined, ClientsApi.ListClientsError>`
- **Wire**: `GET /v2/clients`
- **Auth**: `advancedAccessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ClientsApi.ListClientsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientsApi.ListClientsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `embed` | `query` | — | `string` | no |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

