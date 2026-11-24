<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pages — operations

Accessor: `client.pages` · Source: `src/resources/pages.ts` · 6 operations · Request types: namespace `Pages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `unbounce`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPage

- **Signature**: `getPage(request: Pages.GetPageRequest, options?: RequestOptions): ApiPromise<Page, ApiError>`
- **Wire**: `GET /pages/{page_id}`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Page`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pages.GetPageRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/page.ts` |

### listAccountPages

- **Signature**: `listAccountPages(request: Pages.ListAccountPagesRequest, options?: RequestOptions): ApiPromise<PageCollection, ApiError>`
- **Wire**: `GET /accounts/{account_id}/pages`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PageCollection`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pages.ListAccountPagesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PageCollection` | `pageCollectionSchema` | `src/models/page-collection.ts` |

### listFormFields

- **Signature**: `listFormFields(request: Pages.ListFormFieldsRequest, options?: RequestOptions): ApiPromise<PagesFormFieldsResponse, ApiError>`
- **Wire**: `GET /pages/{page_id}/form_fields`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagesFormFieldsResponse`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pages.ListFormFieldsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagesFormFieldsResponse` | `pagesFormFieldsResponseSchema` | `src/models/pages-form-fields-response.ts` |

### listPages

- **Signature**: `listPages(options?: RequestOptions): ApiPromise<PageCollection, ApiError>`
- **Wire**: `GET /pages`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PageCollection`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `PageCollection` | `pageCollectionSchema` | `src/models/page-collection.ts` |

### listPagesForDomain

- **Signature**: `listPagesForDomain(request: Pages.ListPagesForDomainRequest, options?: RequestOptions): ApiPromise<PageCollection, ApiError>`
- **Wire**: `GET /domains/{domain_id}/pages`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PageCollection`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pages.ListPagesForDomainRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainId` | `path` | `domain_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PageCollection` | `pageCollectionSchema` | `src/models/page-collection.ts` |

### listSubAccountPages

- **Signature**: `listSubAccountPages(request: Pages.ListSubAccountPagesRequest, options?: RequestOptions): ApiPromise<PageCollection, ApiError>`
- **Wire**: `GET /sub_accounts/{sub_account_id}/pages`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PageCollection`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pages.ListSubAccountPagesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subAccountId` | `path` | `sub_account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PageCollection` | `pageCollectionSchema` | `src/models/page-collection.ts` |

