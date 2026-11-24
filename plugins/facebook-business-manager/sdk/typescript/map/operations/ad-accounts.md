<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdAccounts — operations

Accessor: `client.adAccounts` · Source: `src/resources/ad-accounts.ts` · 1 operation · Request and error types: namespace `AdAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAdAccount

- **Signature**: `getAdAccount(request: AdAccounts.GetAdAccountRequest, options?: RequestOptions): ApiPromise<AdAccount, AdAccounts.GetAdAccountError>`
- **Wire**: `GET /act_{ad_account_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdAccount`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `AdAccounts.GetAdAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdAccounts.GetAdAccountRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdAccount` | `adAccountSchema` | `src/models/ad-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

