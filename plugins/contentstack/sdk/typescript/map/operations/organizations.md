<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `src/resources/organizations.ts` · 3 operations · Request and error types: namespace `Organizations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllOrganizations

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllOrganizations(options?: RequestOptions): ApiPromise<OrganizationList, Organizations.GetAllOrganizationsError>`
- **Wire**: `GET /organizations`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Organizations.GetAllOrganizationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationList` | `organizationListSchema` | `src/models/organization-list.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### getOrganization

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrganization(request: Organizations.GetOrganizationRequest, options?: RequestOptions): ApiPromise<Organization, Organizations.GetOrganizationError>`
- **Wire**: `GET /organizations/{organization_uid}`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Organization`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Organizations.GetOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"error22"` [404] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetOrganizationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Organization` | `organizationSchema` | `src/models/organization.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### getOrganizationStacks

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrganizationStacks(request: Organizations.GetOrganizationStacksRequest, options?: RequestOptions): ApiPromise<StackList, Organizations.GetOrganizationStacksError>`
- **Wire**: `GET /organizations/{organization_uid}/stacks`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StackList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Organizations.GetOrganizationStacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetOrganizationStacksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StackList` | `stackListSchema` | `src/models/stack-list.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

