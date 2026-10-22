<!-- Generated file — do not edit; regenerated with the SDK. -->

# Moderations — operations

Accessor: `client.moderations` · Source: `src/resources/moderations.ts` · 1 operation · Request and error types: namespace `Moderations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listResourcesByModerationKindAndStatus

- **Signature**: `listResourcesByModerationKindAndStatus(request: Moderations.ListResourcesByModerationKindAndStatusRequest, options?: RequestOptions): ApiPromise<ListResponse, Moderations.ListResourcesByModerationKindAndStatusError>`
- **Wire**: `GET /v1_1/{cloud_name}/resources/{resource_type}/moderations/{moderation_kind}/{moderation_status}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Moderations.ListResourcesByModerationKindAndStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Moderations.ListResourcesByModerationKindAndStatusRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `resourceType` | `path` | `resource_type` | `ResourceType` | yes |
| `moderationKind` | `path` | `moderation_kind` | `ModerationKind` | yes |
| `moderationStatus` | `path` | `moderation_status` | `ModerationStatus2` | yes |
| `fields` | `query` | — | `Fields` | no |
| `nextCursor` | `query` | `next_cursor` | `string` | no |
| `maxResults` | `query` | `max_results` | `number` | no |
| `direction` | `query` | — | `DirectionEnum` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `ModerationKind` | `moderationKindSchema` | `src/models/moderation-kind.ts` |
| `ModerationStatus2` | `moderationStatus2Schema` | `src/models/moderation-status2.ts` |
| `Fields` | `fieldsSchema` | `src/models/unions/fields.ts` |
| `DirectionEnum` | `directionEnumSchema` | `src/models/direction-enum.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

