<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.meta` · Source: `src/resources/meta.ts` · 1 operation · Request types: namespace `Meta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `unbounce`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiMeta

- **Signature**: `getApiMeta(options?: RequestOptions): ApiPromise<Response, ApiError>`
- **Wire**: `GET /`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Response`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Response` | `responseSchema` | `src/models/response.ts` |

