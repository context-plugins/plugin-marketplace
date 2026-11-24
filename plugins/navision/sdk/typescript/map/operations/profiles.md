<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profiles — operations

Accessor: `client.profiles` · Source: `src/resources/profiles.ts` · 1 operation · Request and error types: namespace `Profiles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listProfiles

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listProfiles(request: Profiles.ListProfilesRequest, options?: RequestOptions): ApiPromise<CompaniesApiProfilesResponse, Profiles.ListProfilesError>`
- **Wire**: `GET /companies({company_id})/profiles`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiProfilesResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Profiles.ListProfilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Profiles.ListProfilesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiProfilesResponse` | `companiesApiProfilesResponseSchema` | `src/models/companies-api-profiles-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

