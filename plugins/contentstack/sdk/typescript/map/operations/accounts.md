<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 1 operation · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllAccounts

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllAccounts(request: Accounts.GetAllAccountsRequest, options?: RequestOptions): ApiPromise<AccountList, Accounts.GetAllAccountsError>`
- **Wire**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/accounts`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Accounts.GetAllAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.GetAllAccountsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountList` | `accountListSchema` | `src/models/account-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

