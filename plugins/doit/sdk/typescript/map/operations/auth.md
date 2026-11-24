<!-- Generated file — do not edit; regenerated with the SDK. -->

# Auth — operations

Accessor: `client.auth2` · Source: `src/resources/auth.ts` · 1 operation · Request and error types: namespace `Auth`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### validate

- **Signature**: `validate(options?: RequestOptions): ApiPromise<ValidateResponse, Auth.ValidateError>`
- **Wire**: `GET /auth/v1/validate`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ValidateResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Auth.ValidateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ValidateResponse` | `validateResponseSchema` | `src/models/validate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

