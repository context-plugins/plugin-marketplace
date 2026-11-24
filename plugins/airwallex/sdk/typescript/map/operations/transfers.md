<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transfers — operations

Accessor: `client.transfers` · Source: `src/resources/transfers.ts` · 2 operations · Request types: namespace `Transfers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airwallex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTransfer

- **Signature**: `createTransfer(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /api/v1/transfers/create`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getTransfer

- **Signature**: `getTransfer(request: Transfers.GetTransferRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/v1/transfers/{id}`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Transfers.GetTransferRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

