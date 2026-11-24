<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeys — operations

Accessor: `client.apiKeys` · Source: `src/resources/api-keys.ts` · 3 operations · Request types: namespace `ApiKeys`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApikeysById

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteApikeysById(request: ApiKeys.DeleteApikeysByIdRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /apikeys/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ApiKeys.DeleteApikeysByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getApikeys

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getApikeys(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /apikeys`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### postApikeys

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postApikeys(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /apikeys`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

