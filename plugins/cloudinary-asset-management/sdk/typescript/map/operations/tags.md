<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `src/resources/tags.ts` · 1 operation · Request and error types: namespace `Tags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listResourceTags

- **Signature**: `listResourceTags(request: Tags.ListResourceTagsRequest, options?: RequestOptions): ApiPromise<TagsListResponse, Tags.ListResourceTagsError>`
- **Wire**: `GET /v1_1/{cloud_name}/tags/{resource_type}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagsListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Tags.ListResourceTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.ListResourceTagsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `prefix` | `query` | — | `string` | no |
| `nextCursor` | `query` | `next_cursor` | `string` | no |
| `maxResults` | `query` | `max_results` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `TagsListResponse` | `tagsListResponseSchema` | `src/models/tags-list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

