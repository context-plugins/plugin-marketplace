<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.discovery` · Source: `src/resources/discovery.ts` · 4 operations · Request types: namespace `Discovery`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `relm-crm`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSchema

- **Signature**: `getSchema(options?: RequestOptions): ApiPromise<SchemaDoc, ApiError>`
- **Wire**: `GET /schema`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SchemaDoc`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SchemaDoc` | `schemaDocSchema` | `src/models/schema-doc.ts` |

### getSettings

- **Signature**: `getSettings(options?: RequestOptions): ApiPromise<Settings, ApiError>`
- **Wire**: `GET /settings`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Settings`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Settings` | `settingsSchema` | `src/models/settings.ts` |

### getUsage

- **Signature**: `getUsage(options?: RequestOptions): ApiPromise<Usage, ApiError>`
- **Wire**: `GET /usage`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Usage`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Usage` | `usageSchema` | `src/models/usage.ts` |

### setSettings

- **Signature**: `setSettings(request: Discovery.SetSettingsRequest, options?: RequestOptions): ApiPromise<Settings, ApiError>`
- **Wire**: `PATCH /settings`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Settings`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Discovery.SetSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SettingsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SettingsRequest` | `settingsRequestSchema` | `src/models/settings-request.ts` |
| `Settings` | `settingsSchema` | `src/models/settings.ts` |

