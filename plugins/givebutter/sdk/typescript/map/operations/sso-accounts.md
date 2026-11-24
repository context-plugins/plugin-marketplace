<!-- Generated file — do not edit; regenerated with the SDK. -->

# SsoAccounts — operations

Accessor: `client.ssoAccounts` · Source: `src/resources/sso-accounts.ts` · 1 operation · Request and error types: namespace `SsoAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### ssoAccount

- **Signature**: `ssoAccount(options?: RequestOptions): ApiPromise<SsoAccountResource, SsoAccounts.SsoAccountError>`
- **Wire**: `GET /sso/v1/account`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SsoAccountResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `SsoAccounts.SsoAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authenticationException1"` [401] `AuthenticationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SsoAccountResource` | `ssoAccountResourceSchema` | `src/models/sso-account-resource.ts` |
| `AuthenticationException1` | `authenticationException1Schema` | `src/models/authentication-exception1.ts` |

