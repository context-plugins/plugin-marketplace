<!-- Generated file — do not edit; regenerated with the SDK. -->

# Segments — operations

Accessor: `client.segments` · Source: `src/resources/segments.ts` · 18 operations · Request and error types: namespace `Segments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBigSegmentExport

- **Signature**: `createBigSegmentExport(request: Segments.CreateBigSegmentExportRequest, options?: RequestOptions): ApiPromise<undefined, Segments.CreateBigSegmentExportError>`
- **Wire**: `POST /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.CreateBigSegmentExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.CreateBigSegmentExportRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### createBigSegmentImport

- **Signature**: `createBigSegmentImport(request: Segments.CreateBigSegmentImportRequest, options?: RequestOptions): ApiPromise<undefined, Segments.CreateBigSegmentImportError>`
- **Wire**: `POST /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.CreateBigSegmentImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.CreateBigSegmentImportRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |
| `file` | `form` | `FileInput` | no |
| `mode` | `form` | `string` | no |
| `waitOnApprovals` | `form` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteSegment

- **Signature**: `deleteSegment(request: Segments.DeleteSegmentRequest, options?: RequestOptions): ApiPromise<undefined, Segments.DeleteSegmentError>`
- **Wire**: `DELETE /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.DeleteSegmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.DeleteSegmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getBigSegmentExport

- **Signature**: `getBigSegmentExport(request: Segments.GetBigSegmentExportRequest, options?: RequestOptions): ApiPromise<Export, Segments.GetBigSegmentExportError>`
- **Wire**: `GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Export`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.GetBigSegmentExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.GetBigSegmentExportRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `environmentKey` | `path` | — | `string` | yes |
| `segmentKey` | `path` | — | `string` | yes |
| `exportId` | `path` | `exportID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Export` | `exportSchema` | `src/models/export.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getBigSegmentImport

- **Signature**: `getBigSegmentImport(request: Segments.GetBigSegmentImportRequest, options?: RequestOptions): ApiPromise<Import, Segments.GetBigSegmentImportError>`
- **Wire**: `GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Import`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.GetBigSegmentImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.GetBigSegmentImportRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `environmentKey` | `path` | — | `string` | yes |
| `segmentKey` | `path` | — | `string` | yes |
| `importId` | `path` | `importID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Import` | `importSchema` | `src/models/import.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getContextInstanceSegmentsMembershipByEnv

- **Signature**: `getContextInstanceSegmentsMembershipByEnv(request: Segments.GetContextInstanceSegmentsMembershipByEnvRequest, options?: RequestOptions): ApiPromise<ContextInstanceSegmentMemberships, Segments.GetContextInstanceSegmentsMembershipByEnvError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContextInstanceSegmentMemberships`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.GetContextInstanceSegmentsMembershipByEnvError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.GetContextInstanceSegmentsMembershipByEnvRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `body` | `body` | `Record<string, Record<string, unknown>>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContextInstanceSegmentMemberships` | `contextInstanceSegmentMembershipsSchema` | `src/models/context-instance-segment-memberships.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### getExpiringTargetsForSegment

- **Signature**: `getExpiringTargetsForSegment(request: Segments.GetExpiringTargetsForSegmentRequest, options?: RequestOptions): ApiPromise<ExpiringTargetGetResponse, Segments.GetExpiringTargetsForSegmentError>`
- **Wire**: `GET /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExpiringTargetGetResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.GetExpiringTargetsForSegmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.GetExpiringTargetsForSegmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpiringTargetGetResponse` | `expiringTargetGetResponseSchema` | `src/models/expiring-target-get-response.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getExpiringUserTargetsForSegment

- **Signature**: `getExpiringUserTargetsForSegment(request: Segments.GetExpiringUserTargetsForSegmentRequest, options?: RequestOptions): ApiPromise<ExpiringUserTargetGetResponse, Segments.GetExpiringUserTargetsForSegmentError>`
- **Wire**: `GET /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExpiringUserTargetGetResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.GetExpiringUserTargetsForSegmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.GetExpiringUserTargetsForSegmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpiringUserTargetGetResponse` | `expiringUserTargetGetResponseSchema` | `src/models/expiring-user-target-get-response.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getSegment

- **Signature**: `getSegment(request: Segments.GetSegmentRequest, options?: RequestOptions): ApiPromise<UserSegment, Segments.GetSegmentError>`
- **Wire**: `GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserSegment`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.GetSegmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.GetSegmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserSegment` | `userSegmentSchema` | `src/models/user-segment.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getSegmentMembershipForContext

- **Signature**: `getSegmentMembershipForContext(request: Segments.GetSegmentMembershipForContextRequest, options?: RequestOptions): ApiPromise<BigSegmentTarget, Segments.GetSegmentMembershipForContextError>`
- **Wire**: `GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BigSegmentTarget`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.GetSegmentMembershipForContextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.GetSegmentMembershipForContextRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |
| `contextKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BigSegmentTarget` | `bigSegmentTargetSchema` | `src/models/big-segment-target.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getSegmentMembershipForUser

- **Signature**: `getSegmentMembershipForUser(request: Segments.GetSegmentMembershipForUserRequest, options?: RequestOptions): ApiPromise<BigSegmentTarget, Segments.GetSegmentMembershipForUserError>`
- **Wire**: `GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BigSegmentTarget`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.GetSegmentMembershipForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.GetSegmentMembershipForUserRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |
| `userKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BigSegmentTarget` | `bigSegmentTargetSchema` | `src/models/big-segment-target.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getSegments

- **Signature**: `getSegments(request: Segments.GetSegmentsRequest, options?: RequestOptions): ApiPromise<UserSegments, Segments.GetSegmentsError>`
- **Wire**: `GET /api/v2/segments/{projectKey}/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserSegments`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.GetSegmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.GetSegmentsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserSegments` | `userSegmentsSchema` | `src/models/user-segments.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### patchExpiringTargetsForSegment

- **Signature**: `patchExpiringTargetsForSegment(request: Segments.PatchExpiringTargetsForSegmentRequest, options?: RequestOptions): ApiPromise<ExpiringTargetPatchResponse, Segments.PatchExpiringTargetsForSegmentError>`
- **Wire**: `PATCH /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExpiringTargetPatchResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.PatchExpiringTargetsForSegmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.PatchExpiringTargetsForSegmentRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |
| `body` | `body` | `PatchSegmentExpiringTargetInputRep` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchSegmentExpiringTargetInputRep` | `patchSegmentExpiringTargetInputRepSchema` | `src/models/patch-segment-expiring-target-input-rep.ts` |
| `ExpiringTargetPatchResponse` | `expiringTargetPatchResponseSchema` | `src/models/expiring-target-patch-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchExpiringUserTargetsForSegment

- **Signature**: `patchExpiringUserTargetsForSegment(request: Segments.PatchExpiringUserTargetsForSegmentRequest, options?: RequestOptions): ApiPromise<ExpiringUserTargetPatchResponse, Segments.PatchExpiringUserTargetsForSegmentError>`
- **Wire**: `PATCH /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExpiringUserTargetPatchResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.PatchExpiringUserTargetsForSegmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.PatchExpiringUserTargetsForSegmentRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |
| `body` | `body` | `PatchSegmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchSegmentRequest` | `patchSegmentRequestSchema` | `src/models/patch-segment-request.ts` |
| `ExpiringUserTargetPatchResponse` | `expiringUserTargetPatchResponseSchema` | `src/models/expiring-user-target-patch-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchSegment

- **Signature**: `patchSegment(request: Segments.PatchSegmentRequestParams, options?: RequestOptions): ApiPromise<UserSegment, Segments.PatchSegmentError>`
- **Wire**: `PATCH /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserSegment`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.PatchSegmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.PatchSegmentRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |
| `dryRun` | `query` | `boolean` | no |
| `body` | `body` | `PatchWithComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchWithComment` | `patchWithCommentSchema` | `src/models/patch-with-comment.ts` |
| `UserSegment` | `userSegmentSchema` | `src/models/user-segment.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postSegment

- **Signature**: `postSegment(request: Segments.PostSegmentRequest, options?: RequestOptions): ApiPromise<UserSegment, Segments.PostSegmentError>`
- **Wire**: `POST /api/v2/segments/{projectKey}/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserSegment`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.PostSegmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.PostSegmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `body` | `body` | `SegmentBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentBody` | `segmentBodySchema` | `src/models/segment-body.ts` |
| `UserSegment` | `userSegmentSchema` | `src/models/user-segment.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### updateBigSegmentContextTargets

- **Signature**: `updateBigSegmentContextTargets(request: Segments.UpdateBigSegmentContextTargetsRequest, options?: RequestOptions): ApiPromise<undefined, Segments.UpdateBigSegmentContextTargetsError>`
- **Wire**: `POST /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.UpdateBigSegmentContextTargetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.UpdateBigSegmentContextTargetsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |
| `body` | `body` | `SegmentUserState` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentUserState` | `segmentUserStateSchema` | `src/models/segment-user-state.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### updateBigSegmentTargets

- **Signature**: `updateBigSegmentTargets(request: Segments.UpdateBigSegmentTargetsRequest, options?: RequestOptions): ApiPromise<undefined, Segments.UpdateBigSegmentTargetsError>`
- **Wire**: `POST /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Segments.UpdateBigSegmentTargetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.UpdateBigSegmentTargetsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `segmentKey` | `path` | `string` | yes |
| `body` | `body` | `SegmentUserState` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentUserState` | `segmentUserStateSchema` | `src/models/segment-user-state.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

