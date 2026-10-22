<!-- Generated file — do not edit; regenerated with the SDK. -->

# Health — operations

Accessor: `client.health` · Source: `src/resources/health.ts` · 1 operation · Request types: namespace `Health`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-cloud-public-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getHealthStatus

- **Signature**: `getHealthStatus(options?: RequestOptions): ApiPromise<Response, ApiError>`
- **Wire**: `GET /`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Response`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Response` | `responseSchema` | `src/models/response.ts` |

