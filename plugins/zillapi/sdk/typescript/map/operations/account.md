<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 2 operations · Request types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `zillapi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMe

- **Signature**: `getMe(options?: RequestOptions): ApiPromise<V1MeResponse, ApiError>`
- **Wire**: `GET /v1/me`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MeResponse`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MeResponse` | `v1MeResponseSchema` | `src/models/v1-me-response.ts` |

### getUsage

- **Signature**: `getUsage(request?: Account.GetUsageRequest, options?: RequestOptions): ApiPromise<V1UsageResponse, ApiError>`
- **Wire**: `GET /v1/usage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UsageResponse`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Account.GetUsageRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `since` | `query` | `Date` (date-time) | no | — |
| `limit` | `query` | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UsageResponse` | `v1UsageResponseSchema` | `src/models/v1-usage-response.ts` |

