<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScimSchemaDiscovery — operations

Accessor: `client.scimSchemaDiscovery` · Source: `src/resources/scim-schema-discovery.ts` · 2 operations · Request types: namespace `ScimSchemaDiscovery`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getScimResourceTypes

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getScimResourceTypes(options?: RequestOptions): ApiPromise<ScimListResponse, ApiError>`
- **Wire**: `GET /scim/v2.0/ResourceTypes`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimListResponse`
- **Error**: `ContentstackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimListResponse` | `scimListResponseSchema` | `src/models/scim-list-response.ts` |

### getScimSchemas

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getScimSchemas(options?: RequestOptions): ApiPromise<ScimListResponse, ApiError>`
- **Wire**: `GET /scim/v2.0/Schemas`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimListResponse`
- **Error**: `ContentstackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimListResponse` | `scimListResponseSchema` | `src/models/scim-list-response.ts` |

