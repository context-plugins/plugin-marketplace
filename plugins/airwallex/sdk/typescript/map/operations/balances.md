<!-- Generated file — do not edit; regenerated with the SDK. -->

# Balances — operations

Accessor: `client.balances` · Source: `src/resources/balances.ts` · 1 operation · Request types: namespace `Balances`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airwallex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCurrentBalances

- **Signature**: `getCurrentBalances(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/v1/balances/current`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

