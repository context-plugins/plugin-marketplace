<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExtensionDeploymentStatusApi — operations

Accessor: `client.extensionDeploymentStatusApi` · Source: `src/resources/extension-deployment-status-api.ts` · 1 operation · Request and error types: namespace `ExtensionDeploymentStatusApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listExtensionDeploymentStatuses

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listExtensionDeploymentStatuses(request: ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesRequest, options?: RequestOptions): ApiPromise<CompaniesApiExtensionDeploymentStatusResponse, ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesError>`
- **Wire**: `GET /companies({company_id})/extensionDeploymentStatus`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiExtensionDeploymentStatusResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiExtensionDeploymentStatusResponse` | `companiesApiExtensionDeploymentStatusResponseSchema` | `src/models/companies-api-extension-deployment-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

