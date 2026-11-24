<!-- Generated file — do not edit; regenerated with the SDK. -->

# Versions — operations

Accessor: `client.versions` · Source: `src/resources/versions.ts` · 1 operation · Request types: namespace `Versions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `salesforce-service-cloud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiVersions

- **Signature**: `getApiVersions(options?: RequestOptions): ApiPromise<SupportedVersions, ApiError>`
- **Wire**: `GET /versions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportedVersions`
- **Error**: `SalesforceServiceCloudError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SupportedVersions` | `supportedVersionsSchema` | `src/models/supported-versions.ts` |

