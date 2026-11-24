<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organization — operations

Accessor: `client.organization` · Source: `src/resources/organization.ts` · 2 operations · Request and error types: namespace `Organization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `archbee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### organizationDisplayRules

- **Signature**: `organizationDisplayRules(options?: RequestOptions): ApiPromise<TeamDisplayRulesResponse, Organization.OrganizationDisplayRulesError>`
- **Wire**: `GET /team/display-rules`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamDisplayRulesResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `Organization.OrganizationDisplayRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"teamDisplayRules400Error1"` [400] `TeamDisplayRules400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamDisplayRulesResponse` | `teamDisplayRulesResponseSchema` | `src/models/team-display-rules-response.ts` |
| `TeamDisplayRules400Error1` | `teamDisplayRules400Error1Schema` | `src/models/team-display-rules400-error1.ts` |

### organizationExport

- **Signature**: `organizationExport(options?: RequestOptions): ApiPromise<undefined, Organization.OrganizationExportError>`
- **Wire**: `GET /team/export`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `Organization.OrganizationExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"teamExport400Error1"` [400] `TeamExport400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamExport400Error1` | `teamExport400Error1Schema` | `src/models/team-export400-error1.ts` |

