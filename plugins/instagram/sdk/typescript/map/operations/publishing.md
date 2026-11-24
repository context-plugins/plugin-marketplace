<!-- Generated file — do not edit; regenerated with the SDK. -->

# Publishing — operations

Accessor: `client.publishing` · Source: `src/resources/publishing.ts` · 4 operations · Request types: namespace `Publishing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instagram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMediaContainer

- **Signature**: `createMediaContainer(request: Publishing.CreateMediaContainerRequest, options?: RequestOptions): ApiPromise<ContainerResponse, ApiError>`
- **Wire**: `POST /{user_id}/media`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContainerResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Publishing.CreateMediaContainerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `CreateContainerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateContainerRequest` | `createContainerRequestSchema` | `src/models/create-container-request.ts` |
| `ContainerResponse` | `containerResponseSchema` | `src/models/container-response.ts` |

### getContainer

- **Signature**: `getContainer(request: Publishing.GetContainerRequest, options?: RequestOptions): ApiPromise<ResponseInstagramGraphPublishingApi, ApiError>`
- **Wire**: `GET /{container_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResponseInstagramGraphPublishingApi`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Publishing.GetContainerRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `containerId` | `path` | `container_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseInstagramGraphPublishingApi` | `responseInstagramGraphPublishingApiSchema` | `src/models/response-instagram-graph-publishing-api.ts` |

### getContentPublishingLimit

- **Signature**: `getContentPublishingLimit(request: Publishing.GetContentPublishingLimitRequest, options?: RequestOptions): ApiPromise<ContentPublishingLimitResponse, ApiError>`
- **Wire**: `GET /{user_id}/content_publishing_limit`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContentPublishingLimitResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Publishing.GetContentPublishingLimitRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentPublishingLimitResponse` | `contentPublishingLimitResponseSchema` | `src/models/content-publishing-limit-response.ts` |

### publishMedia

- **Signature**: `publishMedia(request: Publishing.PublishMediaRequest, options?: RequestOptions): ApiPromise<MediaPublishResponse, ApiError>`
- **Wire**: `POST /{user_id}/media_publish`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MediaPublishResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Publishing.PublishMediaRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `MediaPublishRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MediaPublishRequest` | `mediaPublishRequestSchema` | `src/models/media-publish-request.ts` |
| `MediaPublishResponse` | `mediaPublishResponseSchema` | `src/models/media-publish-response.ts` |

