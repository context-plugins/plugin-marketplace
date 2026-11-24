<!-- Generated file — do not edit; regenerated with the SDK. -->

# Platforms — operations

Accessor: `client.platforms` · Source: `src/resources/platforms.ts` · 2 operations · Request and error types: namespace `Platforms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `prisma-reviews`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPlatform

- **Signature**: `getPlatform(request: Platforms.GetPlatformRequest, options?: RequestOptions): ApiPromise<Platform, Platforms.GetPlatformError>`
- **Wire**: `GET /v1/platforms/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Platform`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Platforms.GetPlatformError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Platforms.GetPlatformRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `PlatformId` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformId` | `platformIdSchema` | `src/models/platform-id.ts` |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listPlatforms

- **Signature**: `listPlatforms(options?: RequestOptions): ApiPromise<PlatformList, Platforms.ListPlatformsError>`
- **Wire**: `GET /v1/platforms`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformList`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Platforms.ListPlatformsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformList` | `platformListSchema` | `src/models/platform-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

