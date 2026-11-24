<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profile — operations

Accessor: `client.profile` · Source: `src/resources/profile.ts` · 1 operation · Request types: namespace `Profile`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `financial-modeling-prep`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompanyProfile

- **Signature**: `getCompanyProfile(request: Profile.GetCompanyProfileRequest, options?: RequestOptions): ApiPromise<CompanyProfile[], ApiError>`
- **Wire**: `GET /profile/{symbol}`
- **Auth**: `apiKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyProfile[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinancialModelingPrepError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Profile.GetCompanyProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyProfile` | `companyProfileSchema` | `src/models/company-profile.ts` |

