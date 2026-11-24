<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccessToken — operations

Accessor: `client.accessToken` · Source: `src/resources/access-token.ts` · 2 operations · Request types: namespace `AccessToken`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccessToken

- **Signature**: `getAccessToken(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /access-token`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### revokeAccessToken

- **Signature**: `revokeAccessToken(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /access-token`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

