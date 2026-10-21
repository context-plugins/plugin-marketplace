<!-- Generated file — do not edit; regenerated with the SDK. -->

# Announcements — operations

Accessor: `client.announcements` · Source: `src/resources/announcements.ts` · 3 operations · Request and error types: namespace `Announcements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createannouncement

- **Signature**: `createannouncement(request: Announcements.CreateannouncementRequest, options?: RequestOptions): ApiPromise<Announcement, Announcements.CreateannouncementError>`
- **Wire**: `POST /rest/api/v1/createannouncement`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Announcement`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Announcements.CreateannouncementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Announcements.CreateannouncementRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `CreateAnnouncementRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAnnouncementRequest` | `createAnnouncementRequestSchema` | `src/models/create-announcement-request.ts` |
| `Announcement` | `announcementSchema` | `src/models/announcement.ts` |

### deleteannouncement

- **Signature**: `deleteannouncement(request: Announcements.DeleteannouncementRequest, options?: RequestOptions): ApiPromise<undefined, Announcements.DeleteannouncementError>`
- **Wire**: `POST /rest/api/v1/deleteannouncement`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Announcements.DeleteannouncementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Announcements.DeleteannouncementRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `DeleteAnnouncementRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteAnnouncementRequest` | `deleteAnnouncementRequestSchema` | `src/models/delete-announcement-request.ts` |

### updateannouncement

- **Signature**: `updateannouncement(request: Announcements.UpdateannouncementRequest, options?: RequestOptions): ApiPromise<Announcement, Announcements.UpdateannouncementError>`
- **Wire**: `POST /rest/api/v1/updateannouncement`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Announcement`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Announcements.UpdateannouncementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Announcements.UpdateannouncementRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `UpdateAnnouncementRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAnnouncementRequest` | `updateAnnouncementRequestSchema` | `src/models/update-announcement-request.ts` |
| `Announcement` | `announcementSchema` | `src/models/announcement.ts` |

