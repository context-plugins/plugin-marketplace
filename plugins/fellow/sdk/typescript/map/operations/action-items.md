<!-- Generated file — do not edit; regenerated with the SDK. -->

# ActionItems — operations

Accessor: `client.actionItems` · Source: `src/resources/action-items.ts` · 4 operations · Request types: namespace `ActionItems`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fellow`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsDeveloperApiApiArchiveActionItem

- **Signature**: `appsDeveloperApiApiArchiveActionItem(request: ActionItems.AppsDeveloperApiApiArchiveActionItemRequest, options?: RequestOptions): ApiPromise<ActionItemResponse, ApiError>`
- **Wire**: `POST /api/v1/action_item/{action_item_id}/archive`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ActionItemResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ActionItems.AppsDeveloperApiApiArchiveActionItemRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `actionItemId` | `path` | `action_item_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActionItemResponse` | `actionItemResponseSchema` | `src/models/action-item-response.ts` |

### appsDeveloperApiApiGetActionItemById

- **Signature**: `appsDeveloperApiApiGetActionItemById(request: ActionItems.AppsDeveloperApiApiGetActionItemByIdRequest, options?: RequestOptions): ApiPromise<ActionItemResponse, ApiError>`
- **Wire**: `GET /api/v1/action_item/{action_item_id}`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ActionItemResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ActionItems.AppsDeveloperApiApiGetActionItemByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `actionItemId` | `path` | `action_item_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActionItemResponse` | `actionItemResponseSchema` | `src/models/action-item-response.ts` |

### appsDeveloperApiApiGetActionItems

- **Signature**: `appsDeveloperApiApiGetActionItems(request: ActionItems.AppsDeveloperApiApiGetActionItemsRequest, options?: RequestOptions): ApiPromise<ActionItemsListResponse, ApiError>`
- **Wire**: `POST /api/v1/action_items`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ActionItemsListResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ActionItems.AppsDeveloperApiApiGetActionItemsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetActionItemsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetActionItemsRequest` | `getActionItemsRequestSchema` | `src/models/get-action-items-request.ts` |
| `ActionItemsListResponse` | `actionItemsListResponseSchema` | `src/models/action-items-list-response.ts` |

### appsDeveloperApiApiMarkActionItemComplete

- **Signature**: `appsDeveloperApiApiMarkActionItemComplete(request: ActionItems.AppsDeveloperApiApiMarkActionItemCompleteRequest, options?: RequestOptions): ApiPromise<ActionItemResponse, ApiError>`
- **Wire**: `POST /api/v1/action_item/{action_item_id}/complete`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ActionItemResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ActionItems.AppsDeveloperApiApiMarkActionItemCompleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `actionItemId` | `path` | `action_item_id` | `string` | yes |
| `body` | `body` | — | `MarkActionItemCompleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MarkActionItemCompleteRequest` | `markActionItemCompleteRequestSchema` | `src/models/mark-action-item-complete-request.ts` |
| `ActionItemResponse` | `actionItemResponseSchema` | `src/models/action-item-response.ts` |

