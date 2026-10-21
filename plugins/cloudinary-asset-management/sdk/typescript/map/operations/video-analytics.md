<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoAnalytics — operations

Accessor: `client.videoAnalytics` · Source: `src/resources/video-analytics.ts` · 1 operation · Request and error types: namespace `VideoAnalytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVideoViews

- **Signature**: `getVideoViews(request: VideoAnalytics.GetVideoViewsRequest, options?: RequestOptions): ApiPromise<VideoViewsResponse, VideoAnalytics.GetVideoViewsError>`
- **Wire**: `GET /v1_1/{cloud_name}/video/analytics/views`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoViewsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `VideoAnalytics.GetVideoViewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideoAnalytics.GetVideoViewsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `expression` | `query` | — | `string` | no | — |
| `maxResults` | `query` | `max_results` | `number` | no | `10` |
| `sortBy` | `query` | `sort_by` | `SortBy` | no | `SortBy.ViewEndedAt2` |
| `nextCursor` | `query` | `next_cursor` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `VideoViewsResponse` | `videoViewsResponseSchema` | `src/models/video-views-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

