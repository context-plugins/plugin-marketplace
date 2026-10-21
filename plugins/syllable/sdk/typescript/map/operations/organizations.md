<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `src/resources/organizations.ts` · 4 operations · Request and error types: namespace `Organizations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### organizationsCreate

- **Signature**: `organizationsCreate(request: Organizations.OrganizationsCreateRequest, options?: RequestOptions): ApiPromise<OrganizationResponse, Organizations.OrganizationsCreateError>`
- **Wire**: `POST /api/v1/organizations/`
- **Auth**: `apiKeyHeader`
- **Request body**: `multipart/form-data` — every field marked `form`. `logo` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Organizations.OrganizationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.OrganizationsCreateRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `logo` | `form` | — | `FileInput` | yes |
| `displayName` | `form` | `display_name` | `string` | yes |
| `description` | `form` | — | `Description9` | no |
| `domains` | `form` | — | `Domains` | no |
| `samlProviderId` | `form` | `saml_provider_id` | `SamlProviderId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Description9` | `description9Schema` | `src/models/unions/description9.ts` |
| `Domains` | `domainsSchema` | `src/models/unions/domains.ts` |
| `SamlProviderId` | `samlProviderIdSchema` | `src/models/unions/saml-provider-id.ts` |
| `OrganizationResponse` | `organizationResponseSchema` | `src/models/organization-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### organizationsDelete

- **Signature**: `organizationsDelete(request: Organizations.OrganizationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.OrganizationsDeleteError>`
- **Wire**: `DELETE /api/v1/organizations/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Organizations.OrganizationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.OrganizationsDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deleteComments` | `form` | `delete_comments` | `DeleteComments` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteComments` | `deleteCommentsSchema` | `src/models/unions/delete-comments.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### organizationsGet

- **Signature**: `organizationsGet(options?: RequestOptions): ApiPromise<OrganizationResponse, ApiError>`
- **Wire**: `GET /api/v1/organizations/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationResponse`
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationResponse` | `organizationResponseSchema` | `src/models/organization-response.ts` |

### organizationsUpdate

- **Signature**: `organizationsUpdate(request: Organizations.OrganizationsUpdateRequest, options?: RequestOptions): ApiPromise<OrganizationResponse, Organizations.OrganizationsUpdateError>`
- **Wire**: `PUT /api/v1/organizations/`
- **Auth**: `apiKeyHeader`
- **Request body**: `multipart/form-data` — every field marked `form`. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Organizations.OrganizationsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.OrganizationsUpdateRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `displayName` | `form` | `display_name` | `string` | yes |
| `logo` | `form` | — | `Logo` | no |
| `description` | `form` | — | `Description9` | no |
| `domains` | `form` | — | `Domains` | no |
| `samlProviderId` | `form` | `saml_provider_id` | `SamlProviderId` | no |
| `updateComments` | `form` | `update_comments` | `UpdateComments` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/unions/logo.ts` |
| `Description9` | `description9Schema` | `src/models/unions/description9.ts` |
| `Domains` | `domainsSchema` | `src/models/unions/domains.ts` |
| `SamlProviderId` | `samlProviderIdSchema` | `src/models/unions/saml-provider-id.ts` |
| `UpdateComments` | `updateCommentsSchema` | `src/models/unions/update-comments.ts` |
| `OrganizationResponse` | `organizationResponseSchema` | `src/models/organization-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

