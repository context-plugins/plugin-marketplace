<!-- Generated file — do not edit; regenerated with the SDK. -->

# Settings — operations

Accessor: `client.settings` · Source: `src/resources/settings.ts` · 7 operations · Request and error types: namespace `Settings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomTheme

- **Signature**: `createCustomTheme(request: Settings.CreateCustomThemeRequestParams, options?: RequestOptions): ApiPromise<CustomTheme, Settings.CreateCustomThemeError>`
- **Wire**: `POST /analytics/v1/settings/themes`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomTheme`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Settings.CreateCustomThemeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settings.CreateCustomThemeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateCustomThemeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomThemeRequest` | `createCustomThemeRequestSchema` | `src/models/create-custom-theme-request.ts` |
| `CustomTheme` | `customThemeSchema` | `src/models/custom-theme.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteCustomTheme

- **Signature**: `deleteCustomTheme(request: Settings.DeleteCustomThemeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Settings.DeleteCustomThemeError>`
- **Wire**: `DELETE /analytics/v1/settings/themes/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Settings.DeleteCustomThemeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settings.DeleteCustomThemeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getActiveTheme

- **Signature**: `getActiveTheme(options?: RequestOptions): ApiPromise<ActiveTheme, Settings.GetActiveThemeError>`
- **Wire**: `GET /analytics/v1/settings/active-theme`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ActiveTheme`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Settings.GetActiveThemeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ActiveTheme` | `activeThemeSchema` | `src/models/active-theme.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCustomTheme

- **Signature**: `getCustomTheme(request: Settings.GetCustomThemeRequest, options?: RequestOptions): ApiPromise<CustomTheme, Settings.GetCustomThemeError>`
- **Wire**: `GET /analytics/v1/settings/themes/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomTheme`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Settings.GetCustomThemeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settings.GetCustomThemeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomTheme` | `customThemeSchema` | `src/models/custom-theme.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCustomThemes

- **Signature**: `listCustomThemes(options?: RequestOptions): ApiPromise<AnalyticsV1SettingsThemesResponse, Settings.ListCustomThemesError>`
- **Wire**: `GET /analytics/v1/settings/themes`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsV1SettingsThemesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Settings.ListCustomThemesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsV1SettingsThemesResponse` | `analyticsV1SettingsThemesResponseSchema` | `src/models/analytics-v1-settings-themes-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setActiveTheme

- **Signature**: `setActiveTheme(request: Settings.SetActiveThemeRequestParams, options?: RequestOptions): ApiPromise<ActiveTheme, Settings.SetActiveThemeError>`
- **Wire**: `PUT /analytics/v1/settings/active-theme`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ActiveTheme`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Settings.SetActiveThemeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settings.SetActiveThemeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SetActiveThemeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetActiveThemeRequest` | `setActiveThemeRequestSchema` | `src/models/set-active-theme-request.ts` |
| `ActiveTheme` | `activeThemeSchema` | `src/models/active-theme.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateCustomTheme

- **Signature**: `updateCustomTheme(request: Settings.UpdateCustomThemeRequestParams, options?: RequestOptions): ApiPromise<CustomTheme, Settings.UpdateCustomThemeError>`
- **Wire**: `PATCH /analytics/v1/settings/themes/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomTheme`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Settings.UpdateCustomThemeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settings.UpdateCustomThemeRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateCustomThemeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomThemeRequest` | `updateCustomThemeRequestSchema` | `src/models/update-custom-theme-request.ts` |
| `CustomTheme` | `customThemeSchema` | `src/models/custom-theme.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

