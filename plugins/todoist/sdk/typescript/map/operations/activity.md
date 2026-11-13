<!-- Generated file — do not edit; regenerated with the SDK. -->

# Activity — operations

Accessor: `client.activity` · Source: `src/resources/activity.ts` · 1 operation · Request and error types: namespace `Activity`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getActivityLogsApiV1ActivitiesGet

- **Signature**: `getActivityLogsApiV1ActivitiesGet(request?: Activity.GetActivityLogsApiV1ActivitiesGetRequest, options?: RequestOptions): ApiPromise<PaginatedList, Activity.GetActivityLogsApiV1ActivitiesGetError>`
- **Wire**: `GET /api/v1/activities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Activity.GetActivityLogsApiV1ActivitiesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Activity.GetActivityLogsApiV1ActivitiesGetRequest` (18):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `objectType` | `query` | `object_type` | `ObjectType` | no | — |
| `objectId` | `query` | `object_id` | `ObjectId` | no | — |
| `parentProjectId` | `query` | `parent_project_id` | `ParentProjectId` | no | — |
| `parentItemId` | `query` | `parent_item_id` | `ParentItemId` | no | — |
| `includeParentObject` | `query` | `include_parent_object` | `boolean` | no | `false` |
| `includeChildObjects` | `query` | `include_child_objects` | `boolean` | no | `false` |
| `initiatorId` | `query` | `initiator_id` | `InitiatorId` | no | — |
| `initiatorIdNull` | `query` | `initiator_id_null` | `boolean` | no | — |
| `eventType` | `query` | `event_type` | `string` | no | — |
| `ensureLastState` | `query` | `ensure_last_state` | `boolean` | no | `false` |
| `objectEventTypes` | `query` | `object_event_types` | `string[]` | no | — |
| `workspaceId` | `query` | `workspace_id` | `WorkspaceId` | no | — |
| `annotateNotes` | `query` | `annotate_notes` | `boolean` | no | `false` |
| `annotateParents` | `query` | `annotate_parents` | `boolean` | no | `false` |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `dateFrom` | `query` | `date_from` | `Date` (date-time) | no | — |
| `dateTo` | `query` | `date_to` | `Date` (date-time) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObjectType` | `objectTypeSchema` | `src/models/object-type.ts` |
| `ObjectId` | `objectIdSchema` | `src/models/unions/object-id.ts` |
| `ParentProjectId` | `parentProjectIdSchema` | `src/models/unions/parent-project-id.ts` |
| `ParentItemId` | `parentItemIdSchema` | `src/models/unions/parent-item-id.ts` |
| `InitiatorId` | `initiatorIdSchema` | `src/models/unions/initiator-id.ts` |
| `WorkspaceId` | `workspaceIdSchema` | `src/models/unions/workspace-id.ts` |
| `PaginatedList` | `paginatedListSchema` | `src/models/paginated-list.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

