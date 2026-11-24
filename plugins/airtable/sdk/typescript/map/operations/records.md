<!-- Generated file — do not edit; regenerated with the SDK. -->

# Records — operations

Accessor: `client.records` · Source: `src/resources/records.ts` · 6 operations · Request and error types: namespace `Records`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airtable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRecords

- **Signature**: `createRecords(request: Records.CreateRecordsRequest, options?: RequestOptions): ApiPromise<Response, Records.CreateRecordsError>`
- **Wire**: `POST /{baseId}/{tableIdOrName}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Response`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Records.CreateRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Records.CreateRecordsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableIdOrName` | `path` | `string` | yes |
| `body` | `body` | `Request` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Request` | `requestSchema` | `src/models/request.ts` |
| `Response` | `responseSchema` | `src/models/response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteRecord

- **Signature**: `deleteRecord(request: Records.DeleteRecordRequest, options?: RequestOptions): ApiPromise<RecordDeleted, Records.DeleteRecordError>`
- **Wire**: `DELETE /{baseId}/{tableIdOrName}/{recordId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordDeleted`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Records.DeleteRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Records.DeleteRecordRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableIdOrName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordDeleted` | `recordDeletedSchema` | `src/models/record-deleted.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRecord

- **Signature**: `getRecord(request: Records.GetRecordRequest, options?: RequestOptions): ApiPromise<RecordModel, Records.GetRecordError>`
- **Wire**: `GET /{baseId}/{tableIdOrName}/{recordId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecordModel`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Records.GetRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Records.GetRecordRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableIdOrName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |
| `returnFieldsByFieldId` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordModel` | `recordModelSchema` | `src/models/record-model.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listRecords

- **Signature**: `listRecords(request: Records.ListRecordsRequest, options?: RequestOptions): ApiPromise<RecordList, Records.ListRecordsError>`
- **Wire**: `GET /{baseId}/{tableIdOrName}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecordList`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Records.ListRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Records.ListRecordsRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `baseId` | `path` | — | `string` | yes | — |
| `tableIdOrName` | `path` | — | `string` | yes | — |
| `fields` | `query` | `fields[]` | `string[]` | no | — |
| `filterByFormula` | `query` | — | `string` | no | — |
| `maxRecords` | `query` | — | `number` | no | — |
| `pageSize` | `query` | — | `number` | no | `100` |
| `sort` | `query` | — | `Sort[]` | no | — |
| `view` | `query` | — | `string` | no | — |
| `cellFormat` | `query` | — | `CellFormat` | no | — |
| `timeZone` | `query` | — | `string` | no | — |
| `userLocale` | `query` | — | `string` | no | — |
| `returnFieldsByFieldId` | `query` | — | `boolean` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `CellFormat` | `cellFormatSchema` | `src/models/cell-format.ts` |
| `RecordList` | `recordListSchema` | `src/models/record-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### replaceRecord

- **Signature**: `replaceRecord(request: Records.ReplaceRecordRequest, options?: RequestOptions): ApiPromise<RecordModel, Records.ReplaceRecordError>`
- **Wire**: `PUT /{baseId}/{tableIdOrName}/{recordId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordModel`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Records.ReplaceRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Records.ReplaceRecordRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableIdOrName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |
| `body` | `body` | `RecordIdRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordIdRequest1` | `recordIdRequest1Schema` | `src/models/record-id-request1.ts` |
| `RecordModel` | `recordModelSchema` | `src/models/record-model.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateRecord

- **Signature**: `updateRecord(request: Records.UpdateRecordRequest, options?: RequestOptions): ApiPromise<RecordModel, Records.UpdateRecordError>`
- **Wire**: `PATCH /{baseId}/{tableIdOrName}/{recordId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordModel`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Records.UpdateRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Records.UpdateRecordRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableIdOrName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |
| `body` | `body` | `RecordIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordIdRequest` | `recordIdRequestSchema` | `src/models/record-id-request.ts` |
| `RecordModel` | `recordModelSchema` | `src/models/record-model.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

