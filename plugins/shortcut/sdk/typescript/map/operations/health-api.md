<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthApi — operations

Accessor: `client.healthApi` · Source: `src/resources/health-api.ts` · 1 operation · Request and error types: namespace `HealthApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### updateHealth

- **Signature**: `updateHealth(request: HealthApi.UpdateHealthRequest, options?: RequestOptions): ApiPromise<Health, HealthApi.UpdateHealthError>`
- **Wire**: `PUT /api/v3/health/{health-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Health`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `HealthApi.UpdateHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HealthApi.UpdateHealthRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `healthPublicId` | `path` | `health-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateHealth` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateHealth` | `updateHealthSchema` | `src/models/update-health.ts` |
| `Health` | `healthSchema` | `src/models/health.ts` |

