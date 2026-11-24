<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checks — operations

Accessor: `client.checks` · Source: `src/resources/checks.ts` · 2 operations · Request and error types: namespace `Checks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1ChecksCheckId

- **Signature**: `deleteApiV1ChecksCheckId(request: Checks.DeleteApiV1ChecksCheckIdRequest, options?: RequestOptions): ApiPromise<undefined, Checks.DeleteApiV1ChecksCheckIdError>`
- **Wire**: `DELETE /api/v1/checks/{checkId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `Checks.DeleteApiV1ChecksCheckIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checks.DeleteApiV1ChecksCheckIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `checkId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1Checks

- **Signature**: `getApiV1Checks(request?: Checks.GetApiV1ChecksRequest, options?: RequestOptions): ApiPromise<PublicApiChecksResponse, Checks.GetApiV1ChecksError>`
- **Wire**: `GET /api/v1/checks`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiChecksResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Checks.GetApiV1ChecksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checks.GetApiV1ChecksRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `checkIds` | `query` | `string` | no |
| `dataStandardId` | `query` | `string` | no |
| `datasetId` | `query` | `string` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiChecksResponse` | `publicApiChecksResponseSchema` | `src/models/public-api-checks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

