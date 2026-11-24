<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 1 operation · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ortto`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### mergeAccounts

- **Signature**: `mergeAccounts(request: Accounts.MergeAccountsRequest, options?: RequestOptions): ApiPromise<undefined, Accounts.MergeAccountsError>`
- **Wire**: `POST /accounts/merge`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OrttoError` with `kind: "api"`, an instance of `Accounts.MergeAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.MergeAccountsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountsMergeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsMergeRequest` | `accountsMergeRequestSchema` | `src/models/accounts-merge-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

