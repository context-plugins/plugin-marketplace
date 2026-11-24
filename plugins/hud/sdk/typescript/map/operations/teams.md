<!-- Generated file — do not edit; regenerated with the SDK. -->

# Teams — operations

Accessor: `client.teams` · Source: `src/resources/teams.ts` · 6 operations · Request and error types: namespace `Teams`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### inviteTeamMembersV2TeamInvitationsPost

- **Signature**: `inviteTeamMembersV2TeamInvitationsPost(request: Teams.InviteTeamMembersV2TeamInvitationsPostRequest, options?: RequestOptions): ApiPromise<TeamInviteResponse, Teams.InviteTeamMembersV2TeamInvitationsPostError>`
- **Wire**: `POST /v2/team/invitations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamInviteResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Teams.InviteTeamMembersV2TeamInvitationsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [502] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse7"` [429] `ErrorResponse` · `"errorResponse8"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.InviteTeamMembersV2TeamInvitationsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TeamInviteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamInviteRequest` | `teamInviteRequestSchema` | `src/models/team-invite-request.ts` |
| `TeamInviteResponse` | `teamInviteResponseSchema` | `src/models/team-invite-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listTeamInvitationsV2TeamInvitationsGet

- **Signature**: `listTeamInvitationsV2TeamInvitationsGet(options?: RequestOptions): ApiPromise<TeamInvitationsResponse, Teams.ListTeamInvitationsV2TeamInvitationsGetError>`
- **Wire**: `GET /v2/team/invitations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamInvitationsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Teams.ListTeamInvitationsV2TeamInvitationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [502] `ErrorResponse` · `"errorResponse7"` [429] `ErrorResponse` · `"errorResponse8"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamInvitationsResponse` | `teamInvitationsResponseSchema` | `src/models/team-invitations-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listTeamMembersV2TeamMembersGet

- **Signature**: `listTeamMembersV2TeamMembersGet(options?: RequestOptions): ApiPromise<TeamMembersResponse, Teams.ListTeamMembersV2TeamMembersGetError>`
- **Wire**: `GET /v2/team/members`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamMembersResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Teams.ListTeamMembersV2TeamMembersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamMembersResponse` | `teamMembersResponseSchema` | `src/models/team-members-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeTeamMembersV2TeamMembersBatchRemovePost

- **Signature**: `removeTeamMembersV2TeamMembersBatchRemovePost(request: Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostRequest, options?: RequestOptions): ApiPromise<TeamMemberBatchResponse, Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostError>`
- **Wire**: `POST /v2/team/members/batch-remove`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamMemberBatchResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [502] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse7"` [429] `ErrorResponse` · `"errorResponse8"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TeamMemberRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamMemberRemoveRequest` | `teamMemberRemoveRequestSchema` | `src/models/team-member-remove-request.ts` |
| `TeamMemberBatchResponse` | `teamMemberBatchResponseSchema` | `src/models/team-member-batch-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### revokeTeamInvitationsV2TeamInvitationsBatchRevokePost

- **Signature**: `revokeTeamInvitationsV2TeamInvitationsBatchRevokePost(request: Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest, options?: RequestOptions): ApiPromise<TeamInvitationRevokeResponse, Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError>`
- **Wire**: `POST /v2/team/invitations/batch-revoke`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamInvitationRevokeResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [502] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse7"` [429] `ErrorResponse` · `"errorResponse8"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TeamInvitationRevokeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamInvitationRevokeRequest` | `teamInvitationRevokeRequestSchema` | `src/models/team-invitation-revoke-request.ts` |
| `TeamInvitationRevokeResponse` | `teamInvitationRevokeResponseSchema` | `src/models/team-invitation-revoke-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateTeamMemberRolesV2TeamMembersBatchRolePost

- **Signature**: `updateTeamMemberRolesV2TeamMembersBatchRolePost(request: Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest, options?: RequestOptions): ApiPromise<TeamMemberBatchResponse, Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostError>`
- **Wire**: `POST /v2/team/members/batch-role`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamMemberBatchResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [502] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse7"` [429] `ErrorResponse` · `"errorResponse8"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TeamMemberRoleUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamMemberRoleUpdateRequest` | `teamMemberRoleUpdateRequestSchema` | `src/models/team-member-role-update-request.ts` |
| `TeamMemberBatchResponse` | `teamMemberBatchResponseSchema` | `src/models/team-member-batch-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

