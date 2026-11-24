<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `src/resources/organizations.ts` · 1 operation · Request and error types: namespace `Organizations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listOrganizations

- **Signature**: `listOrganizations(options?: RequestOptions): ApiPromise<IamV1OrganizationsResponse, Organizations.ListOrganizationsError>`
- **Wire**: `GET /iam/v1/organizations`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IamV1OrganizationsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Organizations.ListOrganizationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IamV1OrganizationsResponse` | `iamV1OrganizationsResponseSchema` | `src/models/iam-v1-organizations-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

