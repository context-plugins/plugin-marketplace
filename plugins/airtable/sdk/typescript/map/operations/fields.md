<!-- Generated file — do not edit; regenerated with the SDK. -->

# Fields — operations

Accessor: `client.fields` · Source: `src/resources/fields.ts` · 2 operations · Request and error types: namespace `Fields`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airtable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createField

- **Signature**: `createField(request: Fields.CreateFieldRequestParams, options?: RequestOptions): ApiPromise<FieldSchema, Fields.CreateFieldError>`
- **Wire**: `POST /meta/bases/{baseId}/tables/{tableId}/fields`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FieldSchema`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Fields.CreateFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fields.CreateFieldRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `body` | `body` | `CreateFieldRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateFieldRequest` | `createFieldRequestSchema` | `src/models/create-field-request.ts` |
| `FieldSchema` | `fieldSchemaSchema` | `src/models/field-schema.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateField

- **Signature**: `updateField(request: Fields.UpdateFieldRequest, options?: RequestOptions): ApiPromise<FieldSchema, Fields.UpdateFieldError>`
- **Wire**: `PATCH /meta/bases/{baseId}/tables/{tableId}/fields/{fieldId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FieldSchema`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Fields.UpdateFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fields.UpdateFieldRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableId` | `path` | `string` | yes |
| `fieldId` | `path` | `string` | yes |
| `body` | `body` | `MetaBasesTablesFieldsFieldIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetaBasesTablesFieldsFieldIdRequest` | `metaBasesTablesFieldsFieldIdRequestSchema` | `src/models/meta-bases-tables-fields-field-id-request.ts` |
| `FieldSchema` | `fieldSchemaSchema` | `src/models/field-schema.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

