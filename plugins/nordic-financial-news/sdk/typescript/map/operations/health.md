<!-- Generated file — do not edit; regenerated with the SDK. -->

# Health — operations

Accessor: `client.health` · Source: `src/resources/health.ts` · 1 operation · Request types: namespace `Health`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Health

- **Signature**: `getApiV1Health(options?: RequestOptions): ApiPromise<ApiV1HealthResponse, ApiError>`
- **Wire**: `GET /api/v1/health`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1HealthResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1HealthResponse` | `apiV1HealthResponseSchema` | `src/models/api-v1-health-response.ts` |

