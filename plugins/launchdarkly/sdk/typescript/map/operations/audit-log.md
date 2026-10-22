<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLog — operations

Accessor: `client.auditLog` · Source: `src/resources/audit-log.ts` · 4 operations · Request and error types: namespace `AuditLog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAuditLogEntries

- **Signature**: `getAuditLogEntries(request: AuditLog.GetAuditLogEntriesRequest, options?: RequestOptions): ApiPromise<AuditLogEntryListingRepCollection, AuditLog.GetAuditLogEntriesError>`
- **Wire**: `GET /api/v2/auditlog`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditLogEntryListingRepCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AuditLog.GetAuditLogEntriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLog.GetAuditLogEntriesRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `before` | `query` | `number` | no |
| `after` | `query` | `number` | no |
| `q` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `spec` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuditLogEntryListingRepCollection` | `auditLogEntryListingRepCollectionSchema` | `src/models/audit-log-entry-listing-rep-collection.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getAuditLogEntry

- **Signature**: `getAuditLogEntry(request: AuditLog.GetAuditLogEntryRequest, options?: RequestOptions): ApiPromise<AuditLogEntryRep, AuditLog.GetAuditLogEntryError>`
- **Wire**: `GET /api/v2/auditlog/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditLogEntryRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AuditLog.GetAuditLogEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLog.GetAuditLogEntryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuditLogEntryRep` | `auditLogEntryRepSchema` | `src/models/audit-log-entry-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postAuditLogEntries

- **Signature**: `postAuditLogEntries(request: AuditLog.PostAuditLogEntriesRequest, options?: RequestOptions): ApiPromise<AuditLogEntryListingRepCollection, AuditLog.PostAuditLogEntriesError>`
- **Wire**: `POST /api/v2/auditlog`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuditLogEntryListingRepCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AuditLog.PostAuditLogEntriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLog.PostAuditLogEntriesRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `before` | `query` | `number` | no |
| `after` | `query` | `number` | no |
| `q` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `body` | `body` | `StatementPost[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatementPost` | `statementPostSchema` | `src/models/statement-post.ts` |
| `AuditLogEntryListingRepCollection` | `auditLogEntryListingRepCollectionSchema` | `src/models/audit-log-entry-listing-rep-collection.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postAuditLogEntryCounts

- **Signature**: `postAuditLogEntryCounts(request: AuditLog.PostAuditLogEntryCountsRequest, options?: RequestOptions): ApiPromise<CountBucketsResult, AuditLog.PostAuditLogEntryCountsError>`
- **Wire**: `POST /api/v2/auditlog/counts`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountBucketsResult`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AuditLog.PostAuditLogEntryCountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLog.PostAuditLogEntryCountsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `after` | `query` | `number` | yes |
| `before` | `query` | `number` | no |
| `buckets` | `query` | `number` | no |
| `body` | `body` | `StatementPost[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatementPost` | `statementPostSchema` | `src/models/statement-post.ts` |
| `CountBucketsResult` | `countBucketsResultSchema` | `src/models/count-buckets-result.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

