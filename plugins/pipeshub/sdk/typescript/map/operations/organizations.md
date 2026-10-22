<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `src/resources/organizations.ts` · 1 operation · Request and error types: namespace `Organizations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCurrentOrganization

- **Signature**: `getCurrentOrganization(options?: RequestOptions): ApiPromise<Organization, Organizations.GetCurrentOrganizationError>`
- **Wire**: `GET /org`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Organization`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Organizations.GetCurrentOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Organization` | `organizationSchema` | `src/models/organization.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

