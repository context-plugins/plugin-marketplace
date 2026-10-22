<!-- Generated file — do not edit; regenerated with the SDK. -->

# Announcements — operations

Accessor: `client.announcements` · Source: `src/resources/announcements.ts` · 4 operations · Request and error types: namespace `Announcements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAnnouncementPublic

- **Signature**: `createAnnouncementPublic(request: Announcements.CreateAnnouncementPublicRequest, options?: RequestOptions): ApiPromise<AnnouncementResponse, Announcements.CreateAnnouncementPublicError>`
- **Wire**: `POST /api/v2/announcements`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnnouncementResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Announcements.CreateAnnouncementPublicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [409] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Announcements.CreateAnnouncementPublicRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateAnnouncementBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAnnouncementBody` | `createAnnouncementBodySchema` | `src/models/create-announcement-body.ts` |
| `AnnouncementResponse` | `announcementResponseSchema` | `src/models/announcement-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAnnouncementPublic

- **Signature**: `deleteAnnouncementPublic(request: Announcements.DeleteAnnouncementPublicRequest, options?: RequestOptions): ApiPromise<undefined, Announcements.DeleteAnnouncementPublicError>`
- **Wire**: `DELETE /api/v2/announcements/{announcementId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Announcements.DeleteAnnouncementPublicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Announcements.DeleteAnnouncementPublicRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `announcementId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAnnouncementsPublic

- **Signature**: `getAnnouncementsPublic(request: Announcements.GetAnnouncementsPublicRequest, options?: RequestOptions): ApiPromise<GetAnnouncementsPublic200Response, Announcements.GetAnnouncementsPublicError>`
- **Wire**: `GET /api/v2/announcements`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetAnnouncementsPublic200Response`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Announcements.GetAnnouncementsPublicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Announcements.GetAnnouncementsPublicRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `status` | `query` | `Status9` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status9` | `status9Schema` | `src/models/status9.ts` |
| `GetAnnouncementsPublic200Response` | `getAnnouncementsPublic200ResponseSchema` | `src/models/get-announcements-public200-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateAnnouncementPublic

- **Signature**: `updateAnnouncementPublic(request: Announcements.UpdateAnnouncementPublicRequest, options?: RequestOptions): ApiPromise<AnnouncementResponse, Announcements.UpdateAnnouncementPublicError>`
- **Wire**: `PATCH /api/v2/announcements/{announcementId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnnouncementResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Announcements.UpdateAnnouncementPublicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [409] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Announcements.UpdateAnnouncementPublicRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `announcementId` | `path` | `string` | yes |
| `body` | `body` | `AnnouncementPatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnnouncementPatchOperation` | `announcementPatchOperationSchema` | `src/models/announcement-patch-operation.ts` |
| `AnnouncementResponse` | `announcementResponseSchema` | `src/models/announcement-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

