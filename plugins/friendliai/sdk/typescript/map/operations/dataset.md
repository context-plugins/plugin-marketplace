<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dataset — operations

Accessor: `client.dataset` · Source: `src/resources/dataset.ts` · 16 operations · Request and error types: namespace `Dataset`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addSamples

- **Signature**: `addSamples(request: Dataset.AddSamplesRequest, options?: RequestOptions): ApiPromise<AddSamplesResponse, Dataset.AddSamplesError>`
- **Wire**: `POST /beta/dataset/{dataset_id}/split/{split_id}/sample`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AddSamplesResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.AddSamplesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.AddSamplesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `splitId` | `path` | `split_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `AddSamplesResponse` | `addSamplesResponseSchema` | `src/models/add-samples-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### createDataset

- **Signature**: `createDataset(request: Dataset.CreateDatasetRequestParams, options?: RequestOptions): ApiPromise<DatasetInfo, Dataset.CreateDatasetError>`
- **Wire**: `POST /beta/dataset`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatasetInfo`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.CreateDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.CreateDatasetRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `CreateDatasetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `CreateDatasetRequest` | `createDatasetRequestSchema` | `src/models/create-dataset-request.ts` |
| `DatasetInfo` | `datasetInfoSchema` | `src/models/dataset-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### createSplit

- **Signature**: `createSplit(request: Dataset.CreateSplitRequest, options?: RequestOptions): ApiPromise<SplitInfo, Dataset.CreateSplitError>`
- **Wire**: `POST /beta/dataset/{dataset_id}/split`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SplitInfo`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.CreateSplitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.CreateSplitRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `name` | `query` | — | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `SplitInfo` | `splitInfoSchema` | `src/models/split-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### createVersion

- **Signature**: `createVersion(request: Dataset.CreateVersionRequest, options?: RequestOptions): ApiPromise<VersionInfo, Dataset.CreateVersionError>`
- **Wire**: `POST /beta/dataset/{dataset_id}/version`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VersionInfo`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.CreateVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.CreateVersionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `comment` | `query` | — | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `VersionInfo` | `versionInfoSchema` | `src/models/version-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteDataset

- **Signature**: `deleteDataset(request: Dataset.DeleteDatasetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Dataset.DeleteDatasetError>`
- **Wire**: `DELETE /beta/dataset/{dataset_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.DeleteDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.DeleteDatasetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteSamples

- **Signature**: `deleteSamples(request: Dataset.DeleteSamplesRequest, options?: RequestOptions): ApiPromise<DeleteSamplesResponse, Dataset.DeleteSamplesError>`
- **Wire**: `POST /beta/dataset/{dataset_id}/split/{split_id}/sample/delete`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteSamplesResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.DeleteSamplesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.DeleteSamplesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `splitId` | `path` | `split_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `Sampleid[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `Sampleid` | `sampleidSchema` | `src/models/unions/sampleid.ts` |
| `DeleteSamplesResponse` | `deleteSamplesResponseSchema` | `src/models/delete-samples-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteSplit

- **Signature**: `deleteSplit(request: Dataset.DeleteSplitRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Dataset.DeleteSplitError>`
- **Wire**: `DELETE /beta/dataset/{dataset_id}/split/{split_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.DeleteSplitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.DeleteSplitRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `splitId` | `path` | `split_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteVersion

- **Signature**: `deleteVersion(request: Dataset.DeleteVersionRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Dataset.DeleteVersionError>`
- **Wire**: `DELETE /beta/dataset/{dataset_id}/version/{version_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.DeleteVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.DeleteVersionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `versionId` | `path` | `version_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getDataset

- **Signature**: `getDataset(request: Dataset.GetDatasetRequest, options?: RequestOptions): ApiPromise<DatasetInfo, Dataset.GetDatasetError>`
- **Wire**: `GET /beta/dataset/{dataset_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatasetInfo`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.GetDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.GetDatasetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DatasetInfo` | `datasetInfoSchema` | `src/models/dataset-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getSplit

- **Signature**: `getSplit(request: Dataset.GetSplitRequest, options?: RequestOptions): ApiPromise<SplitInfo, Dataset.GetSplitError>`
- **Wire**: `GET /beta/dataset/{dataset_id}/split/{split_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SplitInfo`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.GetSplitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.GetSplitRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `splitId` | `path` | `split_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `SplitInfo` | `splitInfoSchema` | `src/models/split-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getVersion

- **Signature**: `getVersion(request: Dataset.GetVersionRequest, options?: RequestOptions): ApiPromise<VersionInfo, Dataset.GetVersionError>`
- **Wire**: `GET /beta/dataset/{dataset_id}/version/{version_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VersionInfo`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.GetVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.GetVersionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `versionId` | `path` | `version_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `VersionInfo` | `versionInfoSchema` | `src/models/version-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listDatasets

- **Signature**: `listDatasets(request: Dataset.ListDatasetsRequest, options?: RequestOptions): ApiPromise<ListDatasetsResponse, Dataset.ListDatasetsError>`
- **Wire**: `GET /beta/dataset`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDatasetsResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.ListDatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.ListDatasetsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `query` | — | `string` | yes |
| `cursor` | `query` | — | `Cursor2` | no |
| `limit` | `query` | — | `Limit3` | no |
| `direction` | `query` | — | `Direction1` | no |
| `nameSearch` | `query` | — | `Namesearch` | no |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor2` | `cursor2Schema` | `src/models/unions/cursor2.ts` |
| `Limit3` | `limit3Schema` | `src/models/unions/limit3.ts` |
| `Direction1` | `direction1Schema` | `src/models/unions/direction1.ts` |
| `Namesearch` | `namesearchSchema` | `src/models/unions/namesearch.ts` |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ListDatasetsResponse` | `listDatasetsResponseSchema` | `src/models/list-datasets-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listSamples

- **Signature**: `listSamples(request: Dataset.ListSamplesRequest, options?: RequestOptions): ApiPromise<ListSamplesResponse, Dataset.ListSamplesError>`
- **Wire**: `GET /beta/dataset/{dataset_id}/split/{split_id}/sample`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSamplesResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.ListSamplesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.ListSamplesRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `splitId` | `path` | `split_id` | `string` | yes |
| `cursor` | `query` | — | `Cursor2` | no |
| `limit` | `query` | — | `Limit3` | no |
| `direction` | `query` | — | `Direction1` | no |
| `versionId` | `query` | — | `Versionid` | no |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor2` | `cursor2Schema` | `src/models/unions/cursor2.ts` |
| `Limit3` | `limit3Schema` | `src/models/unions/limit3.ts` |
| `Direction1` | `direction1Schema` | `src/models/unions/direction1.ts` |
| `Versionid` | `versionidSchema` | `src/models/unions/versionid.ts` |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ListSamplesResponse` | `listSamplesResponseSchema` | `src/models/list-samples-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listSplits

- **Signature**: `listSplits(request: Dataset.ListSplitsRequest, options?: RequestOptions): ApiPromise<ListSplitsResponse, Dataset.ListSplitsError>`
- **Wire**: `GET /beta/dataset/{dataset_id}/split`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSplitsResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.ListSplitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.ListSplitsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `cursor` | `query` | — | `Cursor2` | no |
| `limit` | `query` | — | `Limit3` | no |
| `direction` | `query` | — | `Direction1` | no |
| `versionId` | `query` | — | `Versionid` | no |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor2` | `cursor2Schema` | `src/models/unions/cursor2.ts` |
| `Limit3` | `limit3Schema` | `src/models/unions/limit3.ts` |
| `Direction1` | `direction1Schema` | `src/models/unions/direction1.ts` |
| `Versionid` | `versionidSchema` | `src/models/unions/versionid.ts` |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ListSplitsResponse` | `listSplitsResponseSchema` | `src/models/list-splits-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listVersions

- **Signature**: `listVersions(request: Dataset.ListVersionsRequest, options?: RequestOptions): ApiPromise<ListVersionsResponse, Dataset.ListVersionsError>`
- **Wire**: `GET /beta/dataset/{dataset_id}/version`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListVersionsResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.ListVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.ListVersionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ListVersionsResponse` | `listVersionsResponseSchema` | `src/models/list-versions-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### uploadRawSamples

- **Signature**: `uploadRawSamples(request: Dataset.UploadRawSamplesRequest, options?: RequestOptions): ApiPromise<AddSamplesResponse, Dataset.UploadRawSamplesError>`
- **Wire**: `PUT /beta/dataset/{dataset_id}/split/{split_id}/sample`
- **Auth**: `token`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AddSamplesResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Dataset.UploadRawSamplesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.UploadRawSamplesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `datasetId` | `path` | `dataset_id` | `string` | yes |
| `splitId` | `path` | `split_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `file` | `form` | — | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `AddSamplesResponse` | `addSamplesResponseSchema` | `src/models/add-samples-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

