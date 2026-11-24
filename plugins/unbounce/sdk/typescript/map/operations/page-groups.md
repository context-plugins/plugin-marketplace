<!-- Generated file — do not edit; regenerated with the SDK. -->

# PageGroups — operations

Accessor: `client.pageGroups` · Source: `src/resources/page-groups.ts` · 2 operations · Request types: namespace `PageGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `unbounce`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listPageGroupsForSubAccount

- **Signature**: `listPageGroupsForSubAccount(request: PageGroups.ListPageGroupsForSubAccountRequest, options?: RequestOptions): ApiPromise<SubAccountsPageGroupsResponse, ApiError>`
- **Wire**: `GET /sub_accounts/{sub_account_id}/page_groups`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubAccountsPageGroupsResponse`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PageGroups.ListPageGroupsForSubAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subAccountId` | `path` | `sub_account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubAccountsPageGroupsResponse` | `subAccountsPageGroupsResponseSchema` | `src/models/sub-accounts-page-groups-response.ts` |

### listPagesForPageGroup

- **Signature**: `listPagesForPageGroup(request: PageGroups.ListPagesForPageGroupRequest, options?: RequestOptions): ApiPromise<PageCollection, ApiError>`
- **Wire**: `GET /page_groups/{page_group_id}/pages`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PageCollection`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PageGroups.ListPagesForPageGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageGroupId` | `path` | `page_group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PageCollection` | `pageCollectionSchema` | `src/models/page-collection.ts` |

