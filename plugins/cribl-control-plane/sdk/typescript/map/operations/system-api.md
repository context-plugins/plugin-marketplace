<!-- Generated file — do not edit; regenerated with the SDK. -->

# SystemApi — operations

Accessor: `client.systemApi` · Source: `src/resources/system-api.ts` · 3 operations · Request and error types: namespace `SystemApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSystemSettingsRestart

- **Signature**: `createSystemSettingsRestart(options?: RequestOptions): ApiPromise<CountedSystemRestartResponse, SystemApi.CreateSystemSettingsRestartError>`
- **Wire**: `POST /system/settings/restart`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedSystemRestartResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `SystemApi.CreateSystemSettingsRestartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error403"` [403] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedSystemRestartResponse` | `countedSystemRestartResponseSchema` | `src/models/counted-system-restart-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSystemSettingsConf

- **Signature**: `getSystemSettingsConf(options?: RequestOptions): ApiPromise<CountedSystemSettingsConf, SystemApi.GetSystemSettingsConfError>`
- **Wire**: `GET /system/settings/conf`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedSystemSettingsConf`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `SystemApi.GetSystemSettingsConfError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedSystemSettingsConf` | `countedSystemSettingsConfSchema` | `src/models/counted-system-settings-conf.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateSystemSettingsConf

- **Signature**: `updateSystemSettingsConf(request: SystemApi.UpdateSystemSettingsConfRequest, options?: RequestOptions): ApiPromise<CountedSystemSettingsConfResponse, SystemApi.UpdateSystemSettingsConfError>`
- **Wire**: `PATCH /system/settings/conf`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedSystemSettingsConfResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `SystemApi.UpdateSystemSettingsConfError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error403"` [403] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SystemApi.UpdateSystemSettingsConfRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SystemSettingsConfUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SystemSettingsConfUpdate` | `systemSettingsConfUpdateSchema` | `src/models/system-settings-conf-update.ts` |
| `CountedSystemSettingsConfResponse` | `countedSystemSettingsConfResponseSchema` | `src/models/counted-system-settings-conf-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

