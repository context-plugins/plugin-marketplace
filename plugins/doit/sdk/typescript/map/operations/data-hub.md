<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataHub — operations

Accessor: `client.dataHub` · Source: `src/resources/data-hub.ts` · 11 operations · Request and error types: namespace `DataHub`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDatahubDataset

- **Signature**: `createDatahubDataset(request: DataHub.CreateDatahubDatasetRequest, options?: RequestOptions): ApiPromise<DatahubV1DatasetsResponse1, DataHub.CreateDatahubDatasetError>`
- **Wire**: `POST /datahub/v1/datasets`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatahubV1DatasetsResponse1`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.CreateDatahubDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.CreateDatahubDatasetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DatahubV1DatasetsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1DatasetsRequest` | `datahubV1DatasetsRequestSchema` | `src/models/datahub-v1-datasets-request.ts` |
| `DatahubV1DatasetsResponse1` | `datahubV1DatasetsResponse1Schema` | `src/models/datahub-v1-datasets-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### datahubEvents

- **Signature**: `datahubEvents(request: DataHub.DatahubEventsRequest, options?: RequestOptions): ApiPromise<DatahubV1EventsResponse, DataHub.DatahubEventsError>`
- **Wire**: `POST /datahub/v1/events`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatahubV1EventsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.DatahubEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.DatahubEventsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DatahubV1EventsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1EventsRequest` | `datahubV1EventsRequestSchema` | `src/models/datahub-v1-events-request.ts` |
| `DatahubV1EventsResponse` | `datahubV1EventsResponseSchema` | `src/models/datahub-v1-events-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### datahubEventsCsvFile

- **Signature**: `datahubEventsCsvFile(request?: DataHub.DatahubEventsCsvFileRequest, options?: RequestOptions): ApiPromise<DatahubV1CsvUploadResponse, DataHub.DatahubEventsCsvFileError>`
- **Wire**: `POST /datahub/v1/csv/upload`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatahubV1CsvUploadResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.DatahubEventsCsvFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.DatahubEventsCsvFileRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `provider` | `form` | `string` | no | — |
| `file` | `form` | `FileInput` | no | — |
| `schemaTemplate` | `form` | `string` | no | — |
| `periodStart` | `form` | `string` (date) | no | — |
| `periodEnd` | `form` | `string` (date) | no | — |
| `replace` | `form` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1CsvUploadResponse` | `datahubV1CsvUploadResponseSchema` | `src/models/datahub-v1-csv-upload-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### datahubImportProviderRecords

- **Signature**: `datahubImportProviderRecords(request: DataHub.DatahubImportProviderRecordsRequest, options?: RequestOptions): ApiPromise<DatahubV1ImportResponse, DataHub.DatahubImportProviderRecordsError>`
- **Wire**: `POST /datahub/v1/import`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatahubV1ImportResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.DatahubImportProviderRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.DatahubImportProviderRecordsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DatahubV1ImportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1ImportRequest` | `datahubV1ImportRequestSchema` | `src/models/datahub-v1-import-request.ts` |
| `DatahubV1ImportResponse` | `datahubV1ImportResponseSchema` | `src/models/datahub-v1-import-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteDatahubDataset

- **Signature**: `deleteDatahubDataset(request: DataHub.DeleteDatahubDatasetRequest, options?: RequestOptions): ApiPromise<DatahubV1DatasetsResponse2, DataHub.DeleteDatahubDatasetError>`
- **Wire**: `DELETE /datahub/v1/datasets/{name}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatahubV1DatasetsResponse2`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.DeleteDatahubDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.DeleteDatahubDatasetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1DatasetsResponse2` | `datahubV1DatasetsResponse2Schema` | `src/models/datahub-v1-datasets-response2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteDatahubDatasets

- **Signature**: `deleteDatahubDatasets(request: DataHub.DeleteDatahubDatasetsRequest, options?: RequestOptions): ApiPromise<DatahubV1DatasetsResponse2, DataHub.DeleteDatahubDatasetsError>`
- **Wire**: `DELETE /datahub/v1/datasets`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatahubV1DatasetsResponse2`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.DeleteDatahubDatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.DeleteDatahubDatasetsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DatahubV1DatasetsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1DatasetsRequest1` | `datahubV1DatasetsRequest1Schema` | `src/models/datahub-v1-datasets-request1.ts` |
| `DatahubV1DatasetsResponse2` | `datahubV1DatasetsResponse2Schema` | `src/models/datahub-v1-datasets-response2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteDatahubEventsByFilter

- **Signature**: `deleteDatahubEventsByFilter(request: DataHub.DeleteDatahubEventsByFilterRequest, options?: RequestOptions): ApiPromise<DatahubV1EventsDeleteResponse, DataHub.DeleteDatahubEventsByFilterError>`
- **Wire**: `POST /datahub/v1/events/delete`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatahubV1EventsDeleteResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.DeleteDatahubEventsByFilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.DeleteDatahubEventsByFilterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DatahubV1EventsDeleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1EventsDeleteRequest` | `datahubV1EventsDeleteRequestSchema` | `src/models/datahub-v1-events-delete-request.ts` |
| `DatahubV1EventsDeleteResponse` | `datahubV1EventsDeleteResponseSchema` | `src/models/datahub-v1-events-delete-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### exportDatahubDatasetRecords

- **Signature**: `exportDatahubDatasetRecords(request: DataHub.ExportDatahubDatasetRecordsRequest, options?: RequestOptions): ApiPromise<Uint8Array, DataHub.ExportDatahubDatasetRecordsError>`
- **Wire**: `GET /datahub/v1/datasets/{name}/records`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Uint8Array` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.ExportDatahubDatasetRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.ExportDatahubDatasetRecordsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `name` | `path` | `string` | yes | — |
| `startTime` | `query` | `Date` (date-time) | yes | — |
| `endTime` | `query` | `Date` (date-time) | yes | — |
| `format` | `query` | `Format` | no | `Format.Csv` |
| `maxResults` | `query` | `number` | no | `10000` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getDatahubDataset

- **Signature**: `getDatahubDataset(request: DataHub.GetDatahubDatasetRequest, options?: RequestOptions): ApiPromise<DatahubV1DatasetsResponse4, DataHub.GetDatahubDatasetError>`
- **Wire**: `GET /datahub/v1/datasets/{name}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatahubV1DatasetsResponse4`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.GetDatahubDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.GetDatahubDatasetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1DatasetsResponse4` | `datahubV1DatasetsResponse4Schema` | `src/models/datahub-v1-datasets-response4.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listDatahubDatasets

- **Signature**: `listDatahubDatasets(options?: RequestOptions): ApiPromise<DatahubV1DatasetsResponse, DataHub.ListDatahubDatasetsError>`
- **Wire**: `GET /datahub/v1/datasets`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatahubV1DatasetsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.ListDatahubDatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1DatasetsResponse` | `datahubV1DatasetsResponseSchema` | `src/models/datahub-v1-datasets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateDatahubDataset

- **Signature**: `updateDatahubDataset(request: DataHub.UpdateDatahubDatasetRequest, options?: RequestOptions): ApiPromise<DatahubV1DatasetsResponse1, DataHub.UpdateDatahubDatasetError>`
- **Wire**: `PATCH /datahub/v1/datasets/{name}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatahubV1DatasetsResponse1`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `DataHub.UpdateDatahubDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataHub.UpdateDatahubDatasetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `DatahubV1DatasetsRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatahubV1DatasetsRequest2` | `datahubV1DatasetsRequest2Schema` | `src/models/datahub-v1-datasets-request2.ts` |
| `DatahubV1DatasetsResponse1` | `datahubV1DatasetsResponse1Schema` | `src/models/datahub-v1-datasets-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

