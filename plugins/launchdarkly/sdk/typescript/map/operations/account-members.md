<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountMembers — operations

Accessor: `client.accountMembers` · Source: `src/resources/account-members.ts` · 7 operations · Request and error types: namespace `AccountMembers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMember

- **Signature**: `deleteMember(request: AccountMembers.DeleteMemberRequest, options?: RequestOptions): ApiPromise<undefined, AccountMembers.DeleteMemberError>`
- **Wire**: `DELETE /api/v2/members/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountMembers.DeleteMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMembers.DeleteMemberRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getMember

- **Signature**: `getMember(request: AccountMembers.GetMemberRequest, options?: RequestOptions): ApiPromise<Member, AccountMembers.GetMemberError>`
- **Wire**: `GET /api/v2/members/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Member`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountMembers.GetMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMembers.GetMemberRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Member` | `memberSchema` | `src/models/member.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getMembers

- **Signature**: `getMembers(request: AccountMembers.GetMembersRequest, options?: RequestOptions): ApiPromise<Members, AccountMembers.GetMembersError>`
- **Wire**: `GET /api/v2/members`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Members`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountMembers.GetMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMembers.GetMembersRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `filter` | `query` | `string` | no |
| `expand` | `query` | `string` | no |
| `sort` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Members` | `membersSchema` | `src/models/members.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchMember

- **Signature**: `patchMember(request: AccountMembers.PatchMemberRequest, options?: RequestOptions): ApiPromise<Member, AccountMembers.PatchMemberError>`
- **Wire**: `PATCH /api/v2/members/{id}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Member`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountMembers.PatchMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMembers.PatchMemberRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `Member` | `memberSchema` | `src/models/member.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchMembers

- **Signature**: `patchMembers(request: AccountMembers.PatchMembersRequest, options?: RequestOptions): ApiPromise<BulkEditMembersRep, AccountMembers.PatchMembersError>`
- **Wire**: `PATCH /api/v2/members`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkEditMembersRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountMembers.PatchMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMembers.PatchMembersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MembersPatchInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MembersPatchInput` | `membersPatchInputSchema` | `src/models/members-patch-input.ts` |
| `BulkEditMembersRep` | `bulkEditMembersRepSchema` | `src/models/bulk-edit-members-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postMemberTeams

- **Signature**: `postMemberTeams(request: AccountMembers.PostMemberTeamsRequest, options?: RequestOptions): ApiPromise<Member, AccountMembers.PostMemberTeamsError>`
- **Wire**: `POST /api/v2/members/{id}/teams`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Member`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountMembers.PostMemberTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMembers.PostMemberTeamsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `MemberTeamsPostInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberTeamsPostInput` | `memberTeamsPostInputSchema` | `src/models/member-teams-post-input.ts` |
| `Member` | `memberSchema` | `src/models/member.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postMembers

- **Signature**: `postMembers(request: AccountMembers.PostMembersRequest, options?: RequestOptions): ApiPromise<Members, AccountMembers.PostMembersError>`
- **Wire**: `POST /api/v2/members`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Members`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountMembers.PostMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMembers.PostMembersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NewMemberForm[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NewMemberForm` | `newMemberFormSchema` | `src/models/new-member-form.ts` |
| `Members` | `membersSchema` | `src/models/members.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

