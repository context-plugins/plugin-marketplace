<!-- Generated file — do not edit; regenerated with the SDK. -->

# KeyResults — operations

Accessor: `client.keyResults` · Source: `src/resources/key-results.ts` · 2 operations · Request and error types: namespace `KeyResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getKeyResult

- **Signature**: `getKeyResult(request: KeyResults.GetKeyResultRequest, options?: RequestOptions): ApiPromise<KeyResult, KeyResults.GetKeyResultError>`
- **Wire**: `GET /api/v3/key-results/{key-result-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `KeyResult`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `KeyResults.GetKeyResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KeyResults.GetKeyResultRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `keyResultPublicId` | `path` | `key-result-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KeyResult` | `keyResultSchema` | `src/models/key-result.ts` |

### updateKeyResult

- **Signature**: `updateKeyResult(request: KeyResults.UpdateKeyResultRequest, options?: RequestOptions): ApiPromise<KeyResult, KeyResults.UpdateKeyResultError>`
- **Wire**: `PUT /api/v3/key-results/{key-result-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `KeyResult`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `KeyResults.UpdateKeyResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KeyResults.UpdateKeyResultRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `keyResultPublicId` | `path` | `key-result-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateKeyResult` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateKeyResult` | `updateKeyResultSchema` | `src/models/update-key-result.ts` |
| `KeyResult` | `keyResultSchema` | `src/models/key-result.ts` |

