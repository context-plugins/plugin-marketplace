<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFieldSettings — operations

Accessor: `client.customFieldSettings` · Source: `src/resources/custom-field-settings.ts` · 2 operations · Request and error types: namespace `CustomFieldSettings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCustomFieldSettingsForPortfolio

- **Signature**: `getCustomFieldSettingsForPortfolio(request: CustomFieldSettings.GetCustomFieldSettingsForPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosCustomFieldSettingsResponse, CustomFieldSettings.GetCustomFieldSettingsForPortfolioError>`
- **Wire**: `GET /portfolios/{portfolio_gid}/custom_field_settings`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PortfoliosCustomFieldSettingsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFieldSettings.GetCustomFieldSettingsForPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFieldSettings.GetCustomFieldSettingsForPortfolioRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosCustomFieldSettingsResponse` | `portfoliosCustomFieldSettingsResponseSchema` | `src/models/portfolios-custom-field-settings-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomFieldSettingsForProject

- **Signature**: `getCustomFieldSettingsForProject(request: CustomFieldSettings.GetCustomFieldSettingsForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsCustomFieldSettingsResponse, CustomFieldSettings.GetCustomFieldSettingsForProjectError>`
- **Wire**: `GET /projects/{project_gid}/custom_field_settings`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsCustomFieldSettingsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFieldSettings.GetCustomFieldSettingsForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFieldSettings.GetCustomFieldSettingsForProjectRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsCustomFieldSettingsResponse` | `projectsCustomFieldSettingsResponseSchema` | `src/models/projects-custom-field-settings-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

