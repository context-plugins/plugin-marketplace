<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountTeam — operations

Accessor: `client.accountTeam` · Source: `src/resources/account-team.ts` · 1 operation · Request and error types: namespace `AccountTeam`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAccountTeam

- **Signature**: `listAccountTeam(options?: RequestOptions): ApiPromise<CustomersV1AccountTeamResponse, AccountTeam.ListAccountTeamError>`
- **Wire**: `GET /customers/v1/accountTeam`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersV1AccountTeamResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `AccountTeam.ListAccountTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersV1AccountTeamResponse` | `customersV1AccountTeamResponseSchema` | `src/models/customers-v1-account-team-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

