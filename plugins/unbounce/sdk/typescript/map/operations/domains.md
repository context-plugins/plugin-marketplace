<!-- Generated file — do not edit; regenerated with the SDK. -->

# Domains — operations

Accessor: `client.domains` · Source: `src/resources/domains.ts` · 2 operations · Request types: namespace `Domains`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `unbounce`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDomain

- **Signature**: `getDomain(request: Domains.GetDomainRequest, options?: RequestOptions): ApiPromise<Domain, ApiError>`
- **Wire**: `GET /domains/{domain_id}`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Domain`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Domains.GetDomainRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainId` | `path` | `domain_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Domain` | `domainSchema` | `src/models/domain.ts` |

### listDomainsForSubAccount

- **Signature**: `listDomainsForSubAccount(request: Domains.ListDomainsForSubAccountRequest, options?: RequestOptions): ApiPromise<SubAccountsDomainsResponse, ApiError>`
- **Wire**: `GET /sub_accounts/{sub_account_id}/domains`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubAccountsDomainsResponse`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Domains.ListDomainsForSubAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subAccountId` | `path` | `sub_account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubAccountsDomainsResponse` | `subAccountsDomainsResponseSchema` | `src/models/sub-accounts-domains-response.ts` |

