<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShortcutApiClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 143 operations · Request and error types: namespace `ShortcutApiClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `ShortcutApiClient.CreateCategoryRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCategory

- **Signature**: `createCategory(request: ShortcutApiClient.CreateCategoryRequest, options?: RequestOptions): ApiPromise<Category, ShortcutApiClient.CreateCategoryError>`
- **Wire**: `POST /api/v3/categories`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Category`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateCategoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateCategory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCategory` | `createCategorySchema` | `src/models/create-category.ts` |
| `Category` | `categorySchema` | `src/models/category.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createDoc

- **Signature**: `createDoc(request: ShortcutApiClient.CreateDocRequest, options?: RequestOptions): ApiPromise<DocSlim, ShortcutApiClient.CreateDocError>`
- **Wire**: `POST /api/v3/documents`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocSlim`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateDocRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateDoc` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateDoc` | `createDocSchema` | `src/models/create-doc.ts` |
| `DocSlim` | `docSlimSchema` | `src/models/doc-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### createEntityTemplate

- **Signature**: `createEntityTemplate(request: ShortcutApiClient.CreateEntityTemplateRequest, options?: RequestOptions): ApiPromise<EntityTemplate, ShortcutApiClient.CreateEntityTemplateError>`
- **Wire**: `POST /api/v3/entity-templates`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityTemplate`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateEntityTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateEntityTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateEntityTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEntityTemplate` | `createEntityTemplateSchema` | `src/models/create-entity-template.ts` |
| `EntityTemplate` | `entityTemplateSchema` | `src/models/entity-template.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createEpic

- **Signature**: `createEpic(request: ShortcutApiClient.CreateEpicRequest, options?: RequestOptions): ApiPromise<Epic, ShortcutApiClient.CreateEpicError>`
- **Wire**: `POST /api/v3/epics`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Epic`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateEpicRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateEpic` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEpic` | `createEpicSchema` | `src/models/create-epic.ts` |
| `Epic` | `epicSchema` | `src/models/epic.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createEpicComment

- **Signature**: `createEpicComment(request: ShortcutApiClient.CreateEpicCommentRequest, options?: RequestOptions): ApiPromise<ThreadedComment, ShortcutApiClient.CreateEpicCommentError>`
- **Wire**: `POST /api/v3/epics/{epic-public-id}/comments`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ThreadedComment`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateEpicCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateEpicCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `body` | `body` | — | `CreateEpicComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEpicComment` | `createEpicCommentSchema` | `src/models/create-epic-comment.ts` |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createEpicCommentComment

- **Signature**: `createEpicCommentComment(request: ShortcutApiClient.CreateEpicCommentCommentRequest, options?: RequestOptions): ApiPromise<ThreadedComment, ShortcutApiClient.CreateEpicCommentCommentError>`
- **Wire**: `POST /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ThreadedComment`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateEpicCommentCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateEpicCommentCommentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `CreateCommentComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCommentComment` | `createCommentCommentSchema` | `src/models/create-comment-comment.ts` |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createEpicHealth

- **Signature**: `createEpicHealth(request: ShortcutApiClient.CreateEpicHealthRequest, options?: RequestOptions): ApiPromise<Health, ShortcutApiClient.CreateEpicHealthError>`
- **Wire**: `POST /api/v3/epics/{epic-public-id}/health`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Health`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateEpicHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateEpicHealthRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `body` | `body` | — | `CreateEpicHealth` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEpicHealth` | `createEpicHealthSchema` | `src/models/create-epic-health.ts` |
| `Health` | `healthSchema` | `src/models/health.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createGenericIntegration

- **Signature**: `createGenericIntegration(request: ShortcutApiClient.CreateGenericIntegrationRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.CreateGenericIntegrationError>`
- **Wire**: `POST /api/v3/integrations/webhook`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateGenericIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateGenericIntegrationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateGenericIntegration` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGenericIntegration` | `createGenericIntegrationSchema` | `src/models/create-generic-integration.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createGroup

- **Signature**: `createGroup(request: ShortcutApiClient.CreateGroupRequest, options?: RequestOptions): ApiPromise<Group, ShortcutApiClient.CreateGroupError>`
- **Wire**: `POST /api/v3/groups`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Group`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"unusableEntitlementError"` [403] `UnusableEntitlementError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGroup` | `createGroupSchema` | `src/models/create-group.ts` |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `UnusableEntitlementError` | `unusableEntitlementErrorSchema` | `src/models/unusable-entitlement-error.ts` |

### createIteration

- **Signature**: `createIteration(request: ShortcutApiClient.CreateIterationRequest, options?: RequestOptions): ApiPromise<Iteration, ShortcutApiClient.CreateIterationError>`
- **Wire**: `POST /api/v3/iterations`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Iteration`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateIterationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateIteration` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateIteration` | `createIterationSchema` | `src/models/create-iteration.ts` |
| `Iteration` | `iterationSchema` | `src/models/iteration.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createLabel

- **Signature**: `createLabel(request: ShortcutApiClient.CreateLabelRequest, options?: RequestOptions): ApiPromise<Label, ShortcutApiClient.CreateLabelError>`
- **Wire**: `POST /api/v3/labels`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Label`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateLabelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateLabelParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLabelParams` | `createLabelParamsSchema` | `src/models/create-label-params.ts` |
| `Label` | `labelSchema` | `src/models/label.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createLinkedFile

- **Signature**: `createLinkedFile(request: ShortcutApiClient.CreateLinkedFileRequest, options?: RequestOptions): ApiPromise<LinkedFile, ShortcutApiClient.CreateLinkedFileError>`
- **Wire**: `POST /api/v3/linked-files`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkedFile`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateLinkedFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateLinkedFileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateLinkedFile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLinkedFile` | `createLinkedFileSchema` | `src/models/create-linked-file.ts` |
| `LinkedFile` | `linkedFileSchema` | `src/models/linked-file.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createMilestone

- **Signature**: `createMilestone(request: ShortcutApiClient.CreateMilestoneRequest, options?: RequestOptions): ApiPromise<Milestone, ShortcutApiClient.CreateMilestoneError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v3/milestones`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Milestone`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateMilestoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"unusableEntitlementError"` [403] `UnusableEntitlementError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateMilestoneRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateMilestone` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMilestone` | `createMilestoneSchema` | `src/models/create-milestone.ts` |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `UnusableEntitlementError` | `unusableEntitlementErrorSchema` | `src/models/unusable-entitlement-error.ts` |

### createMultipleStories

- **Signature**: `createMultipleStories(request: ShortcutApiClient.CreateMultipleStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.CreateMultipleStoriesError>`
- **Wire**: `POST /api/v3/stories/bulk`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateMultipleStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateMultipleStoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateStories` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStories` | `createStoriesSchema` | `src/models/create-stories.ts` |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createObjective

- **Signature**: `createObjective(request: ShortcutApiClient.CreateObjectiveRequest, options?: RequestOptions): ApiPromise<Objective, ShortcutApiClient.CreateObjectiveError>`
- **Wire**: `POST /api/v3/objectives`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Objective`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateObjectiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"unusableEntitlementError"` [403] `UnusableEntitlementError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateObjectiveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateObjective` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateObjective` | `createObjectiveSchema` | `src/models/create-objective.ts` |
| `Objective` | `objectiveSchema` | `src/models/objective.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `UnusableEntitlementError` | `unusableEntitlementErrorSchema` | `src/models/unusable-entitlement-error.ts` |

### createObjectiveHealth

- **Signature**: `createObjectiveHealth(request: ShortcutApiClient.CreateObjectiveHealthRequest, options?: RequestOptions): ApiPromise<Health, ShortcutApiClient.CreateObjectiveHealthError>`
- **Wire**: `POST /api/v3/objectives/{objective-public-id}/health`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Health`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateObjectiveHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateObjectiveHealthRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |
| `body` | `body` | — | `CreateObjectiveHealth` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateObjectiveHealth` | `createObjectiveHealthSchema` | `src/models/create-objective-health.ts` |
| `Health` | `healthSchema` | `src/models/health.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createProject

- **Signature**: `createProject(request: ShortcutApiClient.CreateProjectRequest, options?: RequestOptions): ApiPromise<Project, ShortcutApiClient.CreateProjectError>`
- **Wire**: `POST /api/v3/projects`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateProjectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateProject` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProject` | `createProjectSchema` | `src/models/create-project.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createStory

- **Signature**: `createStory(request: ShortcutApiClient.CreateStoryRequest, options?: RequestOptions): ApiPromise<Story, ShortcutApiClient.CreateStoryError>`
- **Wire**: `POST /api/v3/stories`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Story`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateStoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateStoryParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStoryParams` | `createStoryParamsSchema` | `src/models/create-story-params.ts` |
| `Story` | `storySchema` | `src/models/story.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createStoryComment

- **Signature**: `createStoryComment(request: ShortcutApiClient.CreateStoryCommentRequest, options?: RequestOptions): ApiPromise<StoryComment, ShortcutApiClient.CreateStoryCommentError>`
- **Wire**: `POST /api/v3/stories/{story-public-id}/comments`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryComment`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateStoryCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `body` | `body` | — | `CreateStoryComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStoryComment` | `createStoryCommentSchema` | `src/models/create-story-comment.ts` |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createStoryFromTemplate

- **Signature**: `createStoryFromTemplate(request: ShortcutApiClient.CreateStoryFromTemplateRequest, options?: RequestOptions): ApiPromise<Story, ShortcutApiClient.CreateStoryFromTemplateError>`
- **Wire**: `POST /api/v3/stories/from-template`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Story`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateStoryFromTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateStoryFromTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateStoryFromTemplateParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStoryFromTemplateParams` | `createStoryFromTemplateParamsSchema` | `src/models/create-story-from-template-params.ts` |
| `Story` | `storySchema` | `src/models/story.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createStoryLink

- **Signature**: `createStoryLink(request: ShortcutApiClient.CreateStoryLinkRequest, options?: RequestOptions): ApiPromise<StoryLink, ShortcutApiClient.CreateStoryLinkError>`
- **Wire**: `POST /api/v3/story-links`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryLink`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateStoryLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateStoryLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateStoryLink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStoryLink` | `createStoryLinkSchema` | `src/models/create-story-link.ts` |
| `StoryLink` | `storyLinkSchema` | `src/models/story-link.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createStoryReaction

- **Signature**: `createStoryReaction(request: ShortcutApiClient.CreateStoryReactionRequest, options?: RequestOptions): ApiPromise<StoryReaction[], ShortcutApiClient.CreateStoryReactionError>`
- **Wire**: `POST /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryReaction[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateStoryReactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateStoryReactionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `CreateOrDeleteStoryReaction` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrDeleteStoryReaction` | `createOrDeleteStoryReactionSchema` | `src/models/create-or-delete-story-reaction.ts` |
| `StoryReaction` | `storyReactionSchema` | `src/models/story-reaction.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### createTask

- **Signature**: `createTask(request: ShortcutApiClient.CreateTaskRequest, options?: RequestOptions): ApiPromise<Task, ShortcutApiClient.CreateTaskError>`
- **Wire**: `POST /api/v3/stories/{story-public-id}/tasks`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Task`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.CreateTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.CreateTaskRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `body` | `body` | — | `CreateTask` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTask` | `createTaskSchema` | `src/models/create-task.ts` |
| `Task` | `taskSchema` | `src/models/task.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteCategory

- **Signature**: `deleteCategory(request: ShortcutApiClient.DeleteCategoryRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteCategoryError>`
- **Wire**: `DELETE /api/v3/categories/{category-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteCategoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteCustomField

- **Signature**: `deleteCustomField(request: ShortcutApiClient.DeleteCustomFieldRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteCustomFieldError>`
- **Wire**: `DELETE /api/v3/custom-fields/{custom-field-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteCustomFieldRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customFieldPublicId` | `path` | `custom-field-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteDoc

- **Signature**: `deleteDoc(request: ShortcutApiClient.DeleteDocRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteDocError>`
- **Wire**: `DELETE /api/v3/documents/{doc-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteDocRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `body` | `body` | — | `GetDoc` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDoc` | `getDocSchema` | `src/models/get-doc.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### deleteEntityTemplate

- **Signature**: `deleteEntityTemplate(request: ShortcutApiClient.DeleteEntityTemplateRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteEntityTemplateError>`
- **Wire**: `DELETE /api/v3/entity-templates/{entity-template-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteEntityTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteEntityTemplateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entityTemplatePublicId` | `path` | `entity-template-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteEpic

- **Signature**: `deleteEpic(request: ShortcutApiClient.DeleteEpicRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteEpicError>`
- **Wire**: `DELETE /api/v3/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteEpicRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteEpicComment

- **Signature**: `deleteEpicComment(request: ShortcutApiClient.DeleteEpicCommentRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteEpicCommentError>`
- **Wire**: `DELETE /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteEpicCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteEpicCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteFile

- **Signature**: `deleteFile(request: ShortcutApiClient.DeleteFileRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteFileError>`
- **Wire**: `DELETE /api/v3/files/{file-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteFileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filePublicId` | `path` | `file-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteGenericIntegration

- **Signature**: `deleteGenericIntegration(request: ShortcutApiClient.DeleteGenericIntegrationRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteGenericIntegrationError>`
- **Wire**: `DELETE /api/v3/integrations/webhook/{integration-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteGenericIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteGenericIntegrationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `integrationPublicId` | `path` | `integration-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteIteration

- **Signature**: `deleteIteration(request: ShortcutApiClient.DeleteIterationRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteIterationError>`
- **Wire**: `DELETE /api/v3/iterations/{iteration-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteIterationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `iterationPublicId` | `path` | `iteration-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteLabel

- **Signature**: `deleteLabel(request: ShortcutApiClient.DeleteLabelRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteLabelError>`
- **Wire**: `DELETE /api/v3/labels/{label-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteLabelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteLinkedFile

- **Signature**: `deleteLinkedFile(request: ShortcutApiClient.DeleteLinkedFileRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteLinkedFileError>`
- **Wire**: `DELETE /api/v3/linked-files/{linked-file-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteLinkedFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteLinkedFileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `linkedFilePublicId` | `path` | `linked-file-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteMilestone

- **Signature**: `deleteMilestone(request: ShortcutApiClient.DeleteMilestoneRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteMilestoneError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /api/v3/milestones/{milestone-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteMilestoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteMilestoneRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `milestonePublicId` | `path` | `milestone-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteMultipleStories

- **Signature**: `deleteMultipleStories(request: ShortcutApiClient.DeleteMultipleStoriesRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteMultipleStoriesError>`
- **Wire**: `DELETE /api/v3/stories/bulk`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteMultipleStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteMultipleStoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteStories` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteStories` | `deleteStoriesSchema` | `src/models/delete-stories.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteObjective

- **Signature**: `deleteObjective(request: ShortcutApiClient.DeleteObjectiveRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteObjectiveError>`
- **Wire**: `DELETE /api/v3/objectives/{objective-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteObjectiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteObjectiveRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteProject

- **Signature**: `deleteProject(request: ShortcutApiClient.DeleteProjectRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteProjectError>`
- **Wire**: `DELETE /api/v3/projects/{project-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectPublicId` | `path` | `project-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteStory

- **Signature**: `deleteStory(request: ShortcutApiClient.DeleteStoryRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteStoryError>`
- **Wire**: `DELETE /api/v3/stories/{story-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteStoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteStoryComment

- **Signature**: `deleteStoryComment(request: ShortcutApiClient.DeleteStoryCommentRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteStoryCommentError>`
- **Wire**: `DELETE /api/v3/stories/{story-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteStoryCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteStoryLink

- **Signature**: `deleteStoryLink(request: ShortcutApiClient.DeleteStoryLinkRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteStoryLinkError>`
- **Wire**: `DELETE /api/v3/story-links/{story-link-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteStoryLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteStoryLinkRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyLinkPublicId` | `path` | `story-link-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteStoryReaction

- **Signature**: `deleteStoryReaction(request: ShortcutApiClient.DeleteStoryReactionRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteStoryReactionError>`
- **Wire**: `DELETE /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteStoryReactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteStoryReactionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `CreateOrDeleteStoryReaction` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrDeleteStoryReaction` | `createOrDeleteStoryReactionSchema` | `src/models/create-or-delete-story-reaction.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### deleteTask

- **Signature**: `deleteTask(request: ShortcutApiClient.DeleteTaskRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DeleteTaskError>`
- **Wire**: `DELETE /api/v3/stories/{story-public-id}/tasks/{task-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DeleteTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.DeleteTaskRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `taskPublicId` | `path` | `task-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### disableIterations

- **Signature**: `disableIterations(options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DisableIterationsError>`
- **Wire**: `PUT /api/v3/iterations/disable`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DisableIterationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### disableStoryTemplates

- **Signature**: `disableStoryTemplates(options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.DisableStoryTemplatesError>`
- **Wire**: `PUT /api/v3/entity-templates/disable`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.DisableStoryTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### enableIterations

- **Signature**: `enableIterations(options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.EnableIterationsError>`
- **Wire**: `PUT /api/v3/iterations/enable`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.EnableIterationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### enableStoryTemplates

- **Signature**: `enableStoryTemplates(options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.EnableStoryTemplatesError>`
- **Wire**: `PUT /api/v3/entity-templates/enable`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.EnableStoryTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getCategory

- **Signature**: `getCategory(request: ShortcutApiClient.GetCategoryRequest, options?: RequestOptions): ApiPromise<Category, ShortcutApiClient.GetCategoryError>`
- **Wire**: `GET /api/v3/categories/{category-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Category`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetCategoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Category` | `categorySchema` | `src/models/category.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getCurrentMemberInfo

- **Signature**: `getCurrentMemberInfo(options?: RequestOptions): ApiPromise<MemberInfo, ShortcutApiClient.GetCurrentMemberInfoError>`
- **Wire**: `GET /api/v3/member`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MemberInfo`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetCurrentMemberInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberInfo` | `memberInfoSchema` | `src/models/member-info.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getCustomField

- **Signature**: `getCustomField(request: ShortcutApiClient.GetCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomField, ShortcutApiClient.GetCustomFieldError>`
- **Wire**: `GET /api/v3/custom-fields/{custom-field-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomField`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetCustomFieldRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customFieldPublicId` | `path` | `custom-field-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomField` | `customFieldSchema` | `src/models/custom-field.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getDoc

- **Signature**: `getDoc(request: ShortcutApiClient.GetDocRequest, options?: RequestOptions): ApiPromise<Doc, ShortcutApiClient.GetDocError>`
- **Wire**: `GET /api/v3/documents/{doc-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Doc`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetDocRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `contentFormat` | `query` | `content_format` | `ContentFormat3` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentFormat3` | `contentFormat3Schema` | `src/models/content-format3.ts` |
| `Doc` | `docSchema` | `src/models/doc.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### getEntityTemplate

- **Signature**: `getEntityTemplate(request: ShortcutApiClient.GetEntityTemplateRequest, options?: RequestOptions): ApiPromise<EntityTemplate, ShortcutApiClient.GetEntityTemplateError>`
- **Wire**: `GET /api/v3/entity-templates/{entity-template-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityTemplate`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetEntityTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetEntityTemplateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entityTemplatePublicId` | `path` | `entity-template-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityTemplate` | `entityTemplateSchema` | `src/models/entity-template.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getEpic

- **Signature**: `getEpic(request: ShortcutApiClient.GetEpicRequest, options?: RequestOptions): ApiPromise<Epic, ShortcutApiClient.GetEpicError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Epic`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetEpicRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Epic` | `epicSchema` | `src/models/epic.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getEpicComment

- **Signature**: `getEpicComment(request: ShortcutApiClient.GetEpicCommentRequest, options?: RequestOptions): ApiPromise<ThreadedComment, ShortcutApiClient.GetEpicCommentError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ThreadedComment`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetEpicCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetEpicCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getEpicHealth

- **Signature**: `getEpicHealth(request: ShortcutApiClient.GetEpicHealthRequest, options?: RequestOptions): ApiPromise<Health, ShortcutApiClient.GetEpicHealthError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/health`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetEpicHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetEpicHealthRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getEpicWorkflow

- **Signature**: `getEpicWorkflow(options?: RequestOptions): ApiPromise<EpicWorkflow, ShortcutApiClient.GetEpicWorkflowError>`
- **Wire**: `GET /api/v3/epic-workflow`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicWorkflow`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetEpicWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicWorkflow` | `epicWorkflowSchema` | `src/models/epic-workflow.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getExternalLinkStories

- **Signature**: `getExternalLinkStories(request: ShortcutApiClient.GetExternalLinkStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.GetExternalLinkStoriesError>`
- **Wire**: `GET /api/v3/external-link/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetExternalLinkStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetExternalLinkStoriesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalLink` | `query` | `external_link` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getFile

- **Signature**: `getFile(request: ShortcutApiClient.GetFileRequest, options?: RequestOptions): ApiPromise<UploadedFile, ShortcutApiClient.GetFileError>`
- **Wire**: `GET /api/v3/files/{file-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UploadedFile`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetFileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filePublicId` | `path` | `file-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadedFile` | `uploadedFileSchema` | `src/models/uploaded-file.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getGenericIntegration

- **Signature**: `getGenericIntegration(request: ShortcutApiClient.GetGenericIntegrationRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.GetGenericIntegrationError>`
- **Wire**: `GET /api/v3/integrations/webhook/{integration-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetGenericIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetGenericIntegrationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `integrationPublicId` | `path` | `integration-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getGroup

- **Signature**: `getGroup(request: ShortcutApiClient.GetGroupRequest, options?: RequestOptions): ApiPromise<Group, ShortcutApiClient.GetGroupError>`
- **Wire**: `GET /api/v3/groups/{group-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Group`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupPublicId` | `path` | `group-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getIteration

- **Signature**: `getIteration(request: ShortcutApiClient.GetIterationRequest, options?: RequestOptions): ApiPromise<Iteration, ShortcutApiClient.GetIterationError>`
- **Wire**: `GET /api/v3/iterations/{iteration-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Iteration`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetIterationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `iterationPublicId` | `path` | `iteration-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Iteration` | `iterationSchema` | `src/models/iteration.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getKeyResult

- **Signature**: `getKeyResult(request: ShortcutApiClient.GetKeyResultRequest, options?: RequestOptions): ApiPromise<KeyResult, ShortcutApiClient.GetKeyResultError>`
- **Wire**: `GET /api/v3/key-results/{key-result-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `KeyResult`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetKeyResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetKeyResultRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `keyResultPublicId` | `path` | `key-result-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KeyResult` | `keyResultSchema` | `src/models/key-result.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getLabel

- **Signature**: `getLabel(request: ShortcutApiClient.GetLabelRequest, options?: RequestOptions): ApiPromise<Label, ShortcutApiClient.GetLabelError>`
- **Wire**: `GET /api/v3/labels/{label-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Label`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetLabelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Label` | `labelSchema` | `src/models/label.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getLinkedFile

- **Signature**: `getLinkedFile(request: ShortcutApiClient.GetLinkedFileRequest, options?: RequestOptions): ApiPromise<LinkedFile, ShortcutApiClient.GetLinkedFileError>`
- **Wire**: `GET /api/v3/linked-files/{linked-file-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinkedFile`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetLinkedFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetLinkedFileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `linkedFilePublicId` | `path` | `linked-file-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkedFile` | `linkedFileSchema` | `src/models/linked-file.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getMember

- **Signature**: `getMember(request: ShortcutApiClient.GetMemberRequest, options?: RequestOptions): ApiPromise<Member, ShortcutApiClient.GetMemberError>`
- **Wire**: `GET /api/v3/members/{member-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Member`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetMemberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `memberPublicId` | `path` | `member-public-id` | `string` | yes |
| `orgPublicId` | `query` | `org-public-id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Member` | `memberSchema` | `src/models/member.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getMilestone

- **Signature**: `getMilestone(request: ShortcutApiClient.GetMilestoneRequest, options?: RequestOptions): ApiPromise<Milestone, ShortcutApiClient.GetMilestoneError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v3/milestones/{milestone-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Milestone`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetMilestoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetMilestoneRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `milestonePublicId` | `path` | `milestone-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getObjective

- **Signature**: `getObjective(request: ShortcutApiClient.GetObjectiveRequest, options?: RequestOptions): ApiPromise<Objective, ShortcutApiClient.GetObjectiveError>`
- **Wire**: `GET /api/v3/objectives/{objective-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Objective`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetObjectiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetObjectiveRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Objective` | `objectiveSchema` | `src/models/objective.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getObjectiveHealth

- **Signature**: `getObjectiveHealth(request: ShortcutApiClient.GetObjectiveHealthRequest, options?: RequestOptions): ApiPromise<Health, ShortcutApiClient.GetObjectiveHealthError>`
- **Wire**: `GET /api/v3/objectives/{objective-public-id}/health`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetObjectiveHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetObjectiveHealthRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getProject

- **Signature**: `getProject(request: ShortcutApiClient.GetProjectRequest, options?: RequestOptions): ApiPromise<Project, ShortcutApiClient.GetProjectError>`
- **Wire**: `GET /api/v3/projects/{project-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectPublicId` | `path` | `project-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getRepository

- **Signature**: `getRepository(request: ShortcutApiClient.GetRepositoryRequest, options?: RequestOptions): ApiPromise<Repository, ShortcutApiClient.GetRepositoryError>`
- **Wire**: `GET /api/v3/repositories/{repo-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Repository`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetRepositoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetRepositoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `repoPublicId` | `path` | `repo-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Repository` | `repositorySchema` | `src/models/repository.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getStory

- **Signature**: `getStory(request: ShortcutApiClient.GetStoryRequest, options?: RequestOptions): ApiPromise<Story, ShortcutApiClient.GetStoryError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Story`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetStoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Story` | `storySchema` | `src/models/story.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getStoryComment

- **Signature**: `getStoryComment(request: ShortcutApiClient.GetStoryCommentRequest, options?: RequestOptions): ApiPromise<StoryComment, ShortcutApiClient.GetStoryCommentError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoryComment`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetStoryCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getStoryLink

- **Signature**: `getStoryLink(request: ShortcutApiClient.GetStoryLinkRequest, options?: RequestOptions): ApiPromise<StoryLink, ShortcutApiClient.GetStoryLinkError>`
- **Wire**: `GET /api/v3/story-links/{story-link-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoryLink`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetStoryLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetStoryLinkRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyLinkPublicId` | `path` | `story-link-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryLink` | `storyLinkSchema` | `src/models/story-link.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getTask

- **Signature**: `getTask(request: ShortcutApiClient.GetTaskRequest, options?: RequestOptions): ApiPromise<Task, ShortcutApiClient.GetTaskError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/tasks/{task-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Task`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetTaskRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `taskPublicId` | `path` | `task-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Task` | `taskSchema` | `src/models/task.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### getWorkflow

- **Signature**: `getWorkflow(request: ShortcutApiClient.GetWorkflowRequest, options?: RequestOptions): ApiPromise<Workflow, ShortcutApiClient.GetWorkflowError>`
- **Wire**: `GET /api/v3/workflows/{workflow-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Workflow`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.GetWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.GetWorkflowRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowPublicId` | `path` | `workflow-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Workflow` | `workflowSchema` | `src/models/workflow.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### linkDocumentToEpic

- **Signature**: `linkDocumentToEpic(request: ShortcutApiClient.LinkDocumentToEpicRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.LinkDocumentToEpicError>`
- **Wire**: `PUT /api/v3/documents/{doc-public-id}/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.LinkDocumentToEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"shortcutError2"` [404] `ShortcutError` · `"unprocessableError"` [422] `UnprocessableError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.LinkDocumentToEpicRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |
| `UnprocessableError` | `unprocessableErrorSchema` | `src/models/unprocessable-error.ts` |

### listCategories

- **Signature**: `listCategories(options?: RequestOptions): ApiPromise<Category[], ShortcutApiClient.ListCategoriesError>`
- **Wire**: `GET /api/v3/categories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Category[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Category` | `categorySchema` | `src/models/category.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listCategoryMilestones

- **Signature**: `listCategoryMilestones(request: ShortcutApiClient.ListCategoryMilestonesRequest, options?: RequestOptions): ApiPromise<Milestone[], ShortcutApiClient.ListCategoryMilestonesError>`
- **Wire**: `GET /api/v3/categories/{category-public-id}/milestones`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Milestone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListCategoryMilestonesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListCategoryMilestonesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listCategoryObjectives

- **Signature**: `listCategoryObjectives(request: ShortcutApiClient.ListCategoryObjectivesRequest, options?: RequestOptions): ApiPromise<Milestone[], ShortcutApiClient.ListCategoryObjectivesError>`
- **Wire**: `GET /api/v3/categories/{category-public-id}/objectives`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Milestone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListCategoryObjectivesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListCategoryObjectivesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listCustomFields

- **Signature**: `listCustomFields(options?: RequestOptions): ApiPromise<CustomField[], ShortcutApiClient.ListCustomFieldsError>`
- **Wire**: `GET /api/v3/custom-fields`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomField[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListCustomFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomField` | `customFieldSchema` | `src/models/custom-field.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listDocs

- **Signature**: `listDocs(options?: RequestOptions): ApiPromise<DocSlim[], ShortcutApiClient.ListDocsError>`
- **Wire**: `GET /api/v3/documents`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListDocsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DocSlim` | `docSlimSchema` | `src/models/doc-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### listDocumentEpics

- **Signature**: `listDocumentEpics(request: ShortcutApiClient.ListDocumentEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], ShortcutApiClient.ListDocumentEpicsError>`
- **Wire**: `GET /api/v3/documents/{doc-public-id}/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListDocumentEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListDocumentEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### listEntityTemplates

- **Signature**: `listEntityTemplates(options?: RequestOptions): ApiPromise<EntityTemplate[], ShortcutApiClient.ListEntityTemplatesError>`
- **Wire**: `GET /api/v3/entity-templates`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityTemplate[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListEntityTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityTemplate` | `entityTemplateSchema` | `src/models/entity-template.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listEpicComments

- **Signature**: `listEpicComments(request: ShortcutApiClient.ListEpicCommentsRequest, options?: RequestOptions): ApiPromise<ThreadedComment[], ShortcutApiClient.ListEpicCommentsError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/comments`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ThreadedComment[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListEpicCommentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListEpicCommentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listEpicDocuments

- **Signature**: `listEpicDocuments(request: ShortcutApiClient.ListEpicDocumentsRequest, options?: RequestOptions): ApiPromise<DocSlim[], ShortcutApiClient.ListEpicDocumentsError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/documents`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListEpicDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListEpicDocumentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocSlim` | `docSlimSchema` | `src/models/doc-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listEpicHealths

- **Signature**: `listEpicHealths(request: ShortcutApiClient.ListEpicHealthsRequest, options?: RequestOptions): ApiPromise<Health[], ShortcutApiClient.ListEpicHealthsError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/health-history`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListEpicHealthsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListEpicHealthsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listEpicStories

- **Signature**: `listEpicStories(request: ShortcutApiClient.ListEpicStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.ListEpicStoriesError>`
- **Wire**: `GET /api/v3/epics/{epic-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListEpicStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListEpicStoriesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listEpics

- **Signature**: `listEpics(request?: ShortcutApiClient.ListEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], ShortcutApiClient.ListEpicsError>`
- **Wire**: `GET /api/v3/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listEpicsPaginated

- **Signature**: `listEpicsPaginated(request?: ShortcutApiClient.ListEpicsPaginatedRequest, options?: RequestOptions): ApiPromise<EpicPaginatedResults, ShortcutApiClient.ListEpicsPaginatedError>`
- **Wire**: `GET /api/v3/epics/paginated`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicPaginatedResults`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListEpicsPaginatedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListEpicsPaginatedRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `pageSize` | `query` | `page_size` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicPaginatedResults` | `epicPaginatedResultsSchema` | `src/models/epic-paginated-results.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listFiles

- **Signature**: `listFiles(options?: RequestOptions): ApiPromise<UploadedFile[], ShortcutApiClient.ListFilesError>`
- **Wire**: `GET /api/v3/files`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UploadedFile[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadedFile` | `uploadedFileSchema` | `src/models/uploaded-file.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listGroupStories

- **Signature**: `listGroupStories(request: ShortcutApiClient.ListGroupStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.ListGroupStoriesError>`
- **Wire**: `GET /api/v3/groups/{group-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListGroupStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListGroupStoriesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupPublicId` | `path` | `group-public-id` | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listGroups

- **Signature**: `listGroups(request?: ShortcutApiClient.ListGroupsRequest, options?: RequestOptions): ApiPromise<Group[], ShortcutApiClient.ListGroupsError>`
- **Wire**: `GET /api/v3/groups`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Group[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListGroupsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `archived` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listIterationStories

- **Signature**: `listIterationStories(request: ShortcutApiClient.ListIterationStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.ListIterationStoriesError>`
- **Wire**: `GET /api/v3/iterations/{iteration-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListIterationStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListIterationStoriesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `iterationPublicId` | `path` | `iteration-public-id` | `number` | yes |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listIterations

- **Signature**: `listIterations(options?: RequestOptions): ApiPromise<IterationSlim[], ShortcutApiClient.ListIterationsError>`
- **Wire**: `GET /api/v3/iterations`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IterationSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListIterationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IterationSlim` | `iterationSlimSchema` | `src/models/iteration-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listLabelEpics

- **Signature**: `listLabelEpics(request: ShortcutApiClient.ListLabelEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], ShortcutApiClient.ListLabelEpicsError>`
- **Wire**: `GET /api/v3/labels/{label-public-id}/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListLabelEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListLabelEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listLabelStories

- **Signature**: `listLabelStories(request: ShortcutApiClient.ListLabelStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.ListLabelStoriesError>`
- **Wire**: `GET /api/v3/labels/{label-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListLabelStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListLabelStoriesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listLabels

- **Signature**: `listLabels(request?: ShortcutApiClient.ListLabelsRequest, options?: RequestOptions): ApiPromise<Label[], ShortcutApiClient.ListLabelsError>`
- **Wire**: `GET /api/v3/labels`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Label[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListLabelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListLabelsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slim` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Label` | `labelSchema` | `src/models/label.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listLinkedFiles

- **Signature**: `listLinkedFiles(options?: RequestOptions): ApiPromise<LinkedFile[], ShortcutApiClient.ListLinkedFilesError>`
- **Wire**: `GET /api/v3/linked-files`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinkedFile[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListLinkedFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkedFile` | `linkedFileSchema` | `src/models/linked-file.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listMembers

- **Signature**: `listMembers(request?: ShortcutApiClient.ListMembersRequest, options?: RequestOptions): ApiPromise<Member[], ShortcutApiClient.ListMembersError>`
- **Wire**: `GET /api/v3/members`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Member[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListMembersRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orgPublicId` | `query` | `org-public-id` | `string` | no |
| `disabled` | `query` | — | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Member` | `memberSchema` | `src/models/member.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listMilestoneEpics

- **Signature**: `listMilestoneEpics(request: ShortcutApiClient.ListMilestoneEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], ShortcutApiClient.ListMilestoneEpicsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v3/milestones/{milestone-public-id}/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListMilestoneEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListMilestoneEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `milestonePublicId` | `path` | `milestone-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listMilestones

- **Signature**: `listMilestones(options?: RequestOptions): ApiPromise<Milestone[], ShortcutApiClient.ListMilestonesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v3/milestones`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Milestone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListMilestonesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listObjectiveEpics

- **Signature**: `listObjectiveEpics(request: ShortcutApiClient.ListObjectiveEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], ShortcutApiClient.ListObjectiveEpicsError>`
- **Wire**: `GET /api/v3/objectives/{objective-public-id}/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListObjectiveEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListObjectiveEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listObjectiveHealths

- **Signature**: `listObjectiveHealths(request: ShortcutApiClient.ListObjectiveHealthsRequest, options?: RequestOptions): ApiPromise<Health[], ShortcutApiClient.ListObjectiveHealthsError>`
- **Wire**: `GET /api/v3/objectives/{objective-public-id}/health-history`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListObjectiveHealthsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListObjectiveHealthsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listObjectives

- **Signature**: `listObjectives(options?: RequestOptions): ApiPromise<Objective[], ShortcutApiClient.ListObjectivesError>`
- **Wire**: `GET /api/v3/objectives`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Objective[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListObjectivesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Objective` | `objectiveSchema` | `src/models/objective.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listProjects

- **Signature**: `listProjects(options?: RequestOptions): ApiPromise<Project[], ShortcutApiClient.ListProjectsError>`
- **Wire**: `GET /api/v3/projects`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listRepositories

- **Signature**: `listRepositories(options?: RequestOptions): ApiPromise<Repository[], ShortcutApiClient.ListRepositoriesError>`
- **Wire**: `GET /api/v3/repositories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Repository[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListRepositoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Repository` | `repositorySchema` | `src/models/repository.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listStories

- **Signature**: `listStories(request: ShortcutApiClient.ListStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.ListStoriesError>`
- **Wire**: `GET /api/v3/projects/{project-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListStoriesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectPublicId` | `path` | `project-public-id` | `number` | yes |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listStoryComment

- **Signature**: `listStoryComment(request: ShortcutApiClient.ListStoryCommentRequest, options?: RequestOptions): ApiPromise<StoryComment[], ShortcutApiClient.ListStoryCommentError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/comments`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoryComment[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListStoryCommentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listStorySubTasks

- **Signature**: `listStorySubTasks(request: ShortcutApiClient.ListStorySubTasksRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.ListStorySubTasksError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/sub-tasks`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListStorySubTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.ListStorySubTasksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### listWorkflows

- **Signature**: `listWorkflows(options?: RequestOptions): ApiPromise<Workflow[], ShortcutApiClient.ListWorkflowsError>`
- **Wire**: `GET /api/v3/workflows`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Workflow[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.ListWorkflowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Workflow` | `workflowSchema` | `src/models/workflow.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### queryStories

- **Signature**: `queryStories(request: ShortcutApiClient.QueryStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.QueryStoriesError>`
- **Wire**: `POST /api/v3/stories/search`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.QueryStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.QueryStoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchStories` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchStories` | `searchStoriesSchema` | `src/models/search-stories.ts` |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### search

- **Signature**: `search(request: ShortcutApiClient.SearchRequest, options?: RequestOptions): ApiPromise<SearchResults, ShortcutApiClient.SearchError>`
- **Wire**: `GET /api/v3/search`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchResults`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"shortcutError"` [404] `ShortcutError` · `"shortcutError2"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.SearchRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `SearchResults` | `searchResultsSchema` | `src/models/search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### searchDocuments

- **Signature**: `searchDocuments(request: ShortcutApiClient.SearchDocumentsRequest, options?: RequestOptions): ApiPromise<DocSearchResults, ShortcutApiClient.SearchDocumentsError>`
- **Wire**: `GET /api/v3/search/documents`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocSearchResults`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.SearchDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"shortcutError"` [404] `ShortcutError` · `"shortcutError2"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.SearchDocumentsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `title` | `query` | — | `string` | yes |
| `archived` | `query` | — | `boolean` | no |
| `createdByMe` | `query` | `created_by_me` | `boolean` | no |
| `followedByMe` | `query` | `followed_by_me` | `boolean` | no |
| `pageSize` | `query` | `page_size` | `number` | no |
| `next` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocSearchResults` | `docSearchResultsSchema` | `src/models/doc-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### searchEpics

- **Signature**: `searchEpics(request: ShortcutApiClient.SearchEpicsRequest, options?: RequestOptions): ApiPromise<EpicSearchResults, ShortcutApiClient.SearchEpicsError>`
- **Wire**: `GET /api/v3/search/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSearchResults`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.SearchEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"shortcutError"` [404] `ShortcutError` · `"shortcutError2"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.SearchEpicsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `EpicSearchResults` | `epicSearchResultsSchema` | `src/models/epic-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### searchIterations

- **Signature**: `searchIterations(request: ShortcutApiClient.SearchIterationsRequest, options?: RequestOptions): ApiPromise<IterationSearchResults, ShortcutApiClient.SearchIterationsError>`
- **Wire**: `GET /api/v3/search/iterations`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IterationSearchResults`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.SearchIterationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"shortcutError"` [404] `ShortcutError` · `"shortcutError2"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.SearchIterationsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `IterationSearchResults` | `iterationSearchResultsSchema` | `src/models/iteration-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### searchMilestones

- **Signature**: `searchMilestones(request: ShortcutApiClient.SearchMilestonesRequest, options?: RequestOptions): ApiPromise<ObjectiveSearchResults, ShortcutApiClient.SearchMilestonesError>`
- **Wire**: `GET /api/v3/search/milestones`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ObjectiveSearchResults`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.SearchMilestonesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"shortcutError"` [404] `ShortcutError` · `"shortcutError2"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.SearchMilestonesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `ObjectiveSearchResults` | `objectiveSearchResultsSchema` | `src/models/objective-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### searchObjectives

- **Signature**: `searchObjectives(request: ShortcutApiClient.SearchObjectivesRequest, options?: RequestOptions): ApiPromise<ObjectiveSearchResults, ShortcutApiClient.SearchObjectivesError>`
- **Wire**: `GET /api/v3/search/objectives`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ObjectiveSearchResults`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.SearchObjectivesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"shortcutError"` [404] `ShortcutError` · `"shortcutError2"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.SearchObjectivesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `ObjectiveSearchResults` | `objectiveSearchResultsSchema` | `src/models/objective-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### searchStories

- **Signature**: `searchStories(request: ShortcutApiClient.SearchStoriesRequest, options?: RequestOptions): ApiPromise<StorySearchResults, ShortcutApiClient.SearchStoriesError>`
- **Wire**: `GET /api/v3/search/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySearchResults`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.SearchStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"shortcutError"` [404] `ShortcutError` · `"shortcutError2"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.SearchStoriesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `StorySearchResults` | `storySearchResultsSchema` | `src/models/story-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### storyHistory

- **Signature**: `storyHistory(request: ShortcutApiClient.StoryHistoryRequest, options?: RequestOptions): ApiPromise<History[], ShortcutApiClient.StoryHistoryError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/history`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `History[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.StoryHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.StoryHistoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `History` | `historySchema` | `src/models/history.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### unlinkCommentThreadFromSlack

- **Signature**: `unlinkCommentThreadFromSlack(request: ShortcutApiClient.UnlinkCommentThreadFromSlackRequest, options?: RequestOptions): ApiPromise<StoryComment, ShortcutApiClient.UnlinkCommentThreadFromSlackError>`
- **Wire**: `POST /api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryComment`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UnlinkCommentThreadFromSlackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UnlinkCommentThreadFromSlackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### unlinkDocumentFromEpic

- **Signature**: `unlinkDocumentFromEpic(request: ShortcutApiClient.UnlinkDocumentFromEpicRequest, options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.UnlinkDocumentFromEpicError>`
- **Wire**: `DELETE /api/v3/documents/{doc-public-id}/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UnlinkDocumentFromEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UnlinkDocumentFromEpicRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### updateCategory

- **Signature**: `updateCategory(request: ShortcutApiClient.UpdateCategoryRequest, options?: RequestOptions): ApiPromise<Category, ShortcutApiClient.UpdateCategoryError>`
- **Wire**: `PUT /api/v3/categories/{category-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Category`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateCategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateCategory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCategory` | `updateCategorySchema` | `src/models/update-category.ts` |
| `Category` | `categorySchema` | `src/models/category.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateCustomField

- **Signature**: `updateCustomField(request: ShortcutApiClient.UpdateCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomField, ShortcutApiClient.UpdateCustomFieldError>`
- **Wire**: `PUT /api/v3/custom-fields/{custom-field-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomField`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"dataConflictError"` [409] `DataConflictError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateCustomFieldRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customFieldPublicId` | `path` | `custom-field-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateCustomField` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomField` | `updateCustomFieldSchema` | `src/models/update-custom-field.ts` |
| `CustomField` | `customFieldSchema` | `src/models/custom-field.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `DataConflictError` | `dataConflictErrorSchema` | `src/models/data-conflict-error.ts` |

### updateDoc

- **Signature**: `updateDoc(request: ShortcutApiClient.UpdateDocRequest, options?: RequestOptions): ApiPromise<Doc, ShortcutApiClient.UpdateDocError>`
- **Wire**: `PUT /api/v3/documents/{doc-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Doc`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateDocRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docPublicId` | `path` | `doc-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateDoc` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateDoc` | `updateDocSchema` | `src/models/update-doc.ts` |
| `Doc` | `docSchema` | `src/models/doc.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### updateEntityTemplate

- **Signature**: `updateEntityTemplate(request: ShortcutApiClient.UpdateEntityTemplateRequest, options?: RequestOptions): ApiPromise<EntityTemplate, ShortcutApiClient.UpdateEntityTemplateError>`
- **Wire**: `PUT /api/v3/entity-templates/{entity-template-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityTemplate`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateEntityTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateEntityTemplateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entityTemplatePublicId` | `path` | `entity-template-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateEntityTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateEntityTemplate` | `updateEntityTemplateSchema` | `src/models/update-entity-template.ts` |
| `EntityTemplate` | `entityTemplateSchema` | `src/models/entity-template.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateEpic

- **Signature**: `updateEpic(request: ShortcutApiClient.UpdateEpicRequest, options?: RequestOptions): ApiPromise<Epic, ShortcutApiClient.UpdateEpicError>`
- **Wire**: `PUT /api/v3/epics/{epic-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Epic`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateEpicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateEpicRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateEpic` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateEpic` | `updateEpicSchema` | `src/models/update-epic.ts` |
| `Epic` | `epicSchema` | `src/models/epic.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateEpicComment

- **Signature**: `updateEpicComment(request: ShortcutApiClient.UpdateEpicCommentRequest, options?: RequestOptions): ApiPromise<ThreadedComment, ShortcutApiClient.UpdateEpicCommentError>`
- **Wire**: `PUT /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ThreadedComment`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateEpicCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateEpicCommentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `epicPublicId` | `path` | `epic-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateComment` | `updateCommentSchema` | `src/models/update-comment.ts` |
| `ThreadedComment` | `threadedCommentSchema` | `src/models/threaded-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateFile

- **Signature**: `updateFile(request: ShortcutApiClient.UpdateFileRequest, options?: RequestOptions): ApiPromise<UploadedFile, ShortcutApiClient.UpdateFileError>`
- **Wire**: `PUT /api/v3/files/{file-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadedFile`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateFileRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filePublicId` | `path` | `file-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateFile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFile` | `updateFileSchema` | `src/models/update-file.ts` |
| `UploadedFile` | `uploadedFileSchema` | `src/models/uploaded-file.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateGroup

- **Signature**: `updateGroup(request: ShortcutApiClient.UpdateGroupRequest, options?: RequestOptions): ApiPromise<Group, ShortcutApiClient.UpdateGroupError>`
- **Wire**: `PUT /api/v3/groups/{group-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Group`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"unusableEntitlementError"` [403] `UnusableEntitlementError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupPublicId` | `path` | `group-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateGroup` | `updateGroupSchema` | `src/models/update-group.ts` |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |
| `UnusableEntitlementError` | `unusableEntitlementErrorSchema` | `src/models/unusable-entitlement-error.ts` |

### updateHealth

- **Signature**: `updateHealth(request: ShortcutApiClient.UpdateHealthRequest, options?: RequestOptions): ApiPromise<Health, ShortcutApiClient.UpdateHealthError>`
- **Wire**: `PUT /api/v3/health/{health-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Health`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateHealthRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `healthPublicId` | `path` | `health-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateHealth` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateHealth` | `updateHealthSchema` | `src/models/update-health.ts` |
| `Health` | `healthSchema` | `src/models/health.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateIteration

- **Signature**: `updateIteration(request: ShortcutApiClient.UpdateIterationRequest, options?: RequestOptions): ApiPromise<Iteration, ShortcutApiClient.UpdateIterationError>`
- **Wire**: `PUT /api/v3/iterations/{iteration-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Iteration`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateIterationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `iterationPublicId` | `path` | `iteration-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateIteration` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateIteration` | `updateIterationSchema` | `src/models/update-iteration.ts` |
| `Iteration` | `iterationSchema` | `src/models/iteration.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateKeyResult

- **Signature**: `updateKeyResult(request: ShortcutApiClient.UpdateKeyResultRequest, options?: RequestOptions): ApiPromise<KeyResult, ShortcutApiClient.UpdateKeyResultError>`
- **Wire**: `PUT /api/v3/key-results/{key-result-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `KeyResult`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateKeyResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateKeyResultRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `keyResultPublicId` | `path` | `key-result-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateKeyResult` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateKeyResult` | `updateKeyResultSchema` | `src/models/update-key-result.ts` |
| `KeyResult` | `keyResultSchema` | `src/models/key-result.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateLabel

- **Signature**: `updateLabel(request: ShortcutApiClient.UpdateLabelRequest, options?: RequestOptions): ApiPromise<Label, ShortcutApiClient.UpdateLabelError>`
- **Wire**: `PUT /api/v3/labels/{label-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Label`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateLabelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `labelPublicId` | `path` | `label-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateLabel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateLabel` | `updateLabelSchema` | `src/models/update-label.ts` |
| `Label` | `labelSchema` | `src/models/label.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateLinkedFile

- **Signature**: `updateLinkedFile(request: ShortcutApiClient.UpdateLinkedFileRequest, options?: RequestOptions): ApiPromise<LinkedFile, ShortcutApiClient.UpdateLinkedFileError>`
- **Wire**: `PUT /api/v3/linked-files/{linked-file-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkedFile`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateLinkedFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateLinkedFileRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `linkedFilePublicId` | `path` | `linked-file-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateLinkedFile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateLinkedFile` | `updateLinkedFileSchema` | `src/models/update-linked-file.ts` |
| `LinkedFile` | `linkedFileSchema` | `src/models/linked-file.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateMilestone

- **Signature**: `updateMilestone(request: ShortcutApiClient.UpdateMilestoneRequest, options?: RequestOptions): ApiPromise<Milestone, ShortcutApiClient.UpdateMilestoneError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /api/v3/milestones/{milestone-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Milestone`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateMilestoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateMilestoneRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `milestonePublicId` | `path` | `milestone-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateMilestone` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateMilestone` | `updateMilestoneSchema` | `src/models/update-milestone.ts` |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateMultipleStories

- **Signature**: `updateMultipleStories(request: ShortcutApiClient.UpdateMultipleStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], ShortcutApiClient.UpdateMultipleStoriesError>`
- **Wire**: `PUT /api/v3/stories/bulk`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateMultipleStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateMultipleStoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateStories` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStories` | `updateStoriesSchema` | `src/models/update-stories.ts` |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateObjective

- **Signature**: `updateObjective(request: ShortcutApiClient.UpdateObjectiveRequest, options?: RequestOptions): ApiPromise<Objective, ShortcutApiClient.UpdateObjectiveError>`
- **Wire**: `PUT /api/v3/objectives/{objective-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Objective`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateObjectiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateObjectiveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateObjective` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateObjective` | `updateObjectiveSchema` | `src/models/update-objective.ts` |
| `Objective` | `objectiveSchema` | `src/models/objective.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateProject

- **Signature**: `updateProject(request: ShortcutApiClient.UpdateProjectRequest, options?: RequestOptions): ApiPromise<Project, ShortcutApiClient.UpdateProjectError>`
- **Wire**: `PUT /api/v3/projects/{project-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateProjectRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectPublicId` | `path` | `project-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateProject` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateProject` | `updateProjectSchema` | `src/models/update-project.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateStory

- **Signature**: `updateStory(request: ShortcutApiClient.UpdateStoryRequest, options?: RequestOptions): ApiPromise<Story, ShortcutApiClient.UpdateStoryError>`
- **Wire**: `PUT /api/v3/stories/{story-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Story`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateStoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateStory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStory` | `updateStorySchema` | `src/models/update-story.ts` |
| `Story` | `storySchema` | `src/models/story.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateStoryComment

- **Signature**: `updateStoryComment(request: ShortcutApiClient.UpdateStoryCommentRequest, options?: RequestOptions): ApiPromise<StoryComment, ShortcutApiClient.UpdateStoryCommentError>`
- **Wire**: `PUT /api/v3/stories/{story-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryComment`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateStoryCommentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateStoryComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStoryComment` | `updateStoryCommentSchema` | `src/models/update-story-comment.ts` |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateStoryLink

- **Signature**: `updateStoryLink(request: ShortcutApiClient.UpdateStoryLinkRequest, options?: RequestOptions): ApiPromise<StoryLink, ShortcutApiClient.UpdateStoryLinkError>`
- **Wire**: `PUT /api/v3/story-links/{story-link-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryLink`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateStoryLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateStoryLinkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyLinkPublicId` | `path` | `story-link-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateStoryLink` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStoryLink` | `updateStoryLinkSchema` | `src/models/update-story-link.ts` |
| `StoryLink` | `storyLinkSchema` | `src/models/story-link.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### updateTask

- **Signature**: `updateTask(request: ShortcutApiClient.UpdateTaskRequest, options?: RequestOptions): ApiPromise<Task, ShortcutApiClient.UpdateTaskError>`
- **Wire**: `PUT /api/v3/stories/{story-public-id}/tasks/{task-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Task`
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UpdateTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UpdateTaskRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `taskPublicId` | `path` | `task-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateTask` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTask` | `updateTaskSchema` | `src/models/update-task.ts` |
| `Task` | `taskSchema` | `src/models/task.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

### uploadFiles

- **Signature**: `uploadFiles(request: ShortcutApiClient.UploadFilesRequest, options?: RequestOptions): ApiPromise<UploadedFile[], ShortcutApiClient.UploadFilesError>`
- **Wire**: `POST /api/v3/files`
- **Auth**: `apiToken`
- **Request body**: `multipart/form-data` — every field marked `form`. `file0`, `file1`, `file2` and `file3` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadedFile[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutApiError` with `kind: "api"`, an instance of `ShortcutApiClient.UploadFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"shortcutError"` [400] `ShortcutError` · `"shortcutError2"` [404] `ShortcutError` · `"shortcutError3"` [422] `ShortcutError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShortcutApiClient.UploadFilesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `file0` | `form` | — | `FileInput` | yes |
| `storyId` | `form` | `story_id` | `number` | no |
| `file1` | `form` | — | `FileInput` | no |
| `file2` | `form` | — | `FileInput` | no |
| `file3` | `form` | — | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadedFile` | `uploadedFileSchema` | `src/models/uploaded-file.ts` |
| `ShortcutError` | `shortcutErrorSchema` | `src/models/shortcut-error.ts` |

