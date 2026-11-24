<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tenders — operations

Accessor: `client.tenders` · Source: `src/resources/tenders.ts` · 2 operations · Request and error types: namespace `Tenders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `compabase`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTenders

- **Signature**: `getTenders(request?: Tenders.GetTendersRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tenders.GetTendersError>`
- **Wire**: `GET /tenders`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Tenders.GetTendersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tenders.GetTendersRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `status` | `query` | — | `Status` | no |
| `industry` | `query` | — | `string` | no |
| `source` | `query` | — | `Source` | no |
| `region` | `query` | — | `string` | no |
| `city` | `query` | — | `string` | no |
| `postal` | `query` | — | `string` | no |
| `kind` | `query` | — | `Kind` | no |
| `valueMin` | `query` | `value_min` | `number` | no |
| `valueMax` | `query` | `value_max` | `number` | no |
| `currency` | `query` | — | `Currency` | no |
| `limit` | `query` | — | `Limit` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `Source` | `sourceSchema` | `src/models/source.ts` |
| `Kind` | `kindSchema` | `src/models/kind.ts` |
| `Currency` | `currencySchema` | `src/models/currency.ts` |
| `Limit` | `limitSchema` | `src/models/limit.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTendersAwards

- **Signature**: `getTendersAwards(request?: Tenders.GetTendersAwardsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tenders.GetTendersAwardsError>`
- **Wire**: `GET /tenders/awards`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Tenders.GetTendersAwardsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tenders.GetTendersAwardsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `industry` | `query` | `Industry` | no |
| `min` | `query` | `Min` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Industry` | `industrySchema` | `src/models/industry.ts` |
| `Min` | `minSchema` | `src/models/min.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

