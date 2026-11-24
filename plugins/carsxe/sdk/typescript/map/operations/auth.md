<!-- Generated file — do not edit; regenerated with the SDK. -->

# Auth — operations

Accessor: `client.auth2` · Source: `src/resources/auth.ts` · 1 operation · Request types: namespace `Auth`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### validateKey

- **Signature**: `validateKey(request: Auth.ValidateKeyRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/auth/validate`
- **Auth**: `apiKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CarsXeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Auth.ValidateKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `query` | `string` | yes |

