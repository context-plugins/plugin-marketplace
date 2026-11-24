<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeprecatedFeaturesV1 — operations

Accessor: `client.deprecatedFeaturesV1` · Source: `src/resources/deprecated-features-v1.ts` · 12 operations · Request and error types: namespace `DeprecatedFeaturesV1`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### featuresControllerCreateMultipleV1

- **Signature**: `featuresControllerCreateMultipleV1(request: DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Request, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api[], DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Error>`
- **Wire**: `POST /v1/projects/{project}/features/multiple`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerCreateV1

- **Signature**: `featuresControllerCreateV1(request: DeprecatedFeaturesV1.FeaturesControllerCreateV1Request, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerCreateV1Error>`
- **Wire**: `POST /v1/projects/{project}/features`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerCreateV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerCreateV1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateFeatureDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateFeatureDto` | `createFeatureDtoSchema` | `src/models/create-feature-dto.ts` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerFindAllLinkedIssuesV1

- **Signature**: `featuresControllerFindAllLinkedIssuesV1(request: DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Request, options?: RequestOptions): ApiPromise<JiraIssueLink[], DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Error>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}/integrations/jira/issues`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JiraIssueLink[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JiraIssueLink` | `jiraIssueLinkSchema` | `src/models/jira-issue-link.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

### featuresControllerFindAllV1

- **Signature**: `featuresControllerFindAllV1(request: DeprecatedFeaturesV1.FeaturesControllerFindAllV1Request, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api[], DeprecatedFeaturesV1.FeaturesControllerFindAllV1Error>`
- **Wire**: `GET /v1/projects/{project}/features`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerFindAllV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerFindAllV1Request` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `project` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `createdBy` | `query` | `string` | no | — |
| `type` | `query` | `Type9` | no | — |
| `status` | `query` | `Status5` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Type9` | `type9Schema` | `src/models/type9.ts` |
| `Status5` | `status5Schema` | `src/models/status5.ts` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

### featuresControllerFindOneV1

- **Signature**: `featuresControllerFindOneV1(request: DeprecatedFeaturesV1.FeaturesControllerFindOneV1Request, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerFindOneV1Error>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerFindOneV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerFindOneV1Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featuresControllerFindStaticConfigurationV1

- **Signature**: `featuresControllerFindStaticConfigurationV1(request: DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Request, options?: RequestOptions): ApiPromise<StaticConfiguration, DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Error>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}/static-configuration`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StaticConfiguration`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StaticConfiguration` | `staticConfigurationSchema` | `src/models/static-configuration.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerLinkIssueV1

- **Signature**: `featuresControllerLinkIssueV1(request: DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Request, options?: RequestOptions): ApiPromise<JiraIssueLink, DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Error>`
- **Wire**: `POST /v1/projects/{project}/features/{feature}/integrations/jira/issues`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JiraIssueLink`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `LinkJiraIssueDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkJiraIssueDto` | `linkJiraIssueDtoSchema` | `src/models/link-jira-issue-dto.ts` |
| `JiraIssueLink` | `jiraIssueLinkSchema` | `src/models/jira-issue-link.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerRemoveLinkedIssueV1

- **Signature**: `featuresControllerRemoveLinkedIssueV1(request: DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Request, options?: RequestOptions): ApiPromise<undefined, DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Error>`
- **Wire**: `DELETE /v1/projects/{project}/features/{feature}/integrations/jira/issues/{issue_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feature` | `path` | — | `string` | yes |
| `issueId` | `path` | `issue_id` | `string` | yes |
| `key` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featuresControllerRemoveV1

- **Signature**: `featuresControllerRemoveV1(request: DeprecatedFeaturesV1.FeaturesControllerRemoveV1Request, options?: RequestOptions): ApiPromise<undefined, DeprecatedFeaturesV1.FeaturesControllerRemoveV1Error>`
- **Wire**: `DELETE /v1/projects/{project}/features/{feature}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerRemoveV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerRemoveV1Request` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `deleteVariables` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featuresControllerUpdateStaticConfigurationV1

- **Signature**: `featuresControllerUpdateStaticConfigurationV1(request: DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Request, options?: RequestOptions): ApiPromise<StaticConfiguration, DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Error>`
- **Wire**: `PATCH /v1/projects/{project}/features/{feature}/static-configuration`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StaticConfiguration`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Request` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateStaticConfigurationDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStaticConfigurationDto` | `updateStaticConfigurationDtoSchema` | `src/models/update-static-configuration-dto.ts` |
| `StaticConfiguration` | `staticConfigurationSchema` | `src/models/static-configuration.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerUpdateStatusV1

- **Signature**: `featuresControllerUpdateStatusV1(request: DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Request, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Error>`
- **Wire**: `PATCH /v1/projects/{project}/features/{feature}/status`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Request` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateFeatureStatusDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFeatureStatusDto` | `updateFeatureStatusDtoSchema` | `src/models/update-feature-status-dto.ts` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerUpdateV1

- **Signature**: `featuresControllerUpdateV1(request: DeprecatedFeaturesV1.FeaturesControllerUpdateV1Request, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerUpdateV1Error>`
- **Wire**: `PATCH /v1/projects/{project}/features/{feature}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `DeprecatedFeaturesV1.FeaturesControllerUpdateV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeprecatedFeaturesV1.FeaturesControllerUpdateV1Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateFeatureDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFeatureDto` | `updateFeatureDtoSchema` | `src/models/update-feature-dto.ts` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

