<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bases — operations

Accessor: `client.bases` · Source: `src/resources/bases.ts` · 4 operations · Request and error types: namespace `Bases`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airtable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBase

- **Signature**: `createBase(request: Bases.CreateBaseRequestParams, options?: RequestOptions): ApiPromise<BaseSchema, Bases.CreateBaseError>`
- **Wire**: `POST /meta/bases`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BaseSchema`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Bases.CreateBaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [422] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bases.CreateBaseRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateBaseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBaseRequest` | `createBaseRequestSchema` | `src/models/create-base-request.ts` |
| `BaseSchema` | `baseSchemaSchema` | `src/models/base-schema.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getBaseSchema

- **Signature**: `getBaseSchema(request: Bases.GetBaseSchemaRequest, options?: RequestOptions): ApiPromise<MetaBasesTablesResponse, Bases.GetBaseSchemaError>`
- **Wire**: `GET /meta/bases/{baseId}/tables`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetaBasesTablesResponse`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Bases.GetBaseSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bases.GetBaseSchemaRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `include` | `query` | `Include[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `MetaBasesTablesResponse` | `metaBasesTablesResponseSchema` | `src/models/meta-bases-tables-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listBases

- **Signature**: `listBases(request?: Bases.ListBasesRequest, options?: RequestOptions): ApiPromise<BaseList, Bases.ListBasesError>`
- **Wire**: `GET /meta/bases`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BaseList`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Bases.ListBasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bases.ListBasesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `offset` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseList` | `baseListSchema` | `src/models/base-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### whoami

- **Signature**: `whoami(options?: RequestOptions): ApiPromise<MetaWhoamiResponse, Bases.WhoamiError>`
- **Wire**: `GET /meta/whoami`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetaWhoamiResponse`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Bases.WhoamiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `MetaWhoamiResponse` | `metaWhoamiResponseSchema` | `src/models/meta-whoami-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

