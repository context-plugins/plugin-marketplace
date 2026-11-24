<!-- Generated file — do not edit; regenerated with the SDK. -->

# Settings — operations

Accessor: `client.settings` · Source: `src/resources/settings.ts` · 2 operations · Request and error types: namespace `Settings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFormSettings

- **Signature**: `getFormSettings(request: Settings.GetFormSettingsRequest, options?: RequestOptions): ApiPromise<FormSettingsEnvelope, Settings.GetFormSettingsError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/settings`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FormSettingsEnvelope`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Settings.GetFormSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settings.GetFormSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FormSettingsEnvelope` | `formSettingsEnvelopeSchema` | `src/models/form-settings-envelope.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateFormSettings

- **Signature**: `updateFormSettings(request: Settings.UpdateFormSettingsRequest, options?: RequestOptions): ApiPromise<FormSettingsEnvelope, Settings.UpdateFormSettingsError>`
- **Wire**: `PATCH /api/v1/manage/forms/{form}/settings`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FormSettingsEnvelope`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Settings.UpdateFormSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settings.UpdateFormSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FormSettingsEnvelope` | `formSettingsEnvelopeSchema` | `src/models/form-settings-envelope.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

