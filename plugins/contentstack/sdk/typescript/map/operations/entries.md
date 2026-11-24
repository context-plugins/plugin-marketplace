<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entries — operations

Accessor: `client.entries` · Source: `src/resources/entries.ts` · 7 operations · Request and error types: namespace `Entries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEntry

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEntry(request: Entries.CreateEntryRequestParams, options?: RequestOptions): ApiPromise<Entry2, Entries.CreateEntryError>`
- **Wire**: `POST /content_types/{content_type_uid}/entries`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Entry2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Entries.CreateEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entries.CreateEntryRequestParams` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `locale` | `query` | — | `string` | no |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `authtoken` | `header` | — | `string` | no |
| `body` | `body` | — | `CreateEntryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEntryRequest` | `createEntryRequestSchema` | `src/models/create-entry-request.ts` |
| `Entry2` | `entry2Schema` | `src/models/entry2.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### deleteEntry

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteEntry(request: Entries.DeleteEntryRequest, options?: RequestOptions): ApiPromise<undefined, Entries.DeleteEntryError>`
- **Wire**: `DELETE /content_types/{content_type_uid}/entries/{entry_uid}`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Entries.DeleteEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"errorContentstackAssetsApi2"` [404] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entries.DeleteEntryRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `entryUid` | `path` | `entry_uid` | `string` | yes |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `authtoken` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### getAllEntries

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllEntries(request: Entries.GetAllEntriesRequest, options?: RequestOptions): ApiPromise<EntryList, Entries.GetAllEntriesError>`
- **Wire**: `GET /content_types/{content_type_uid}/entries`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntryList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Entries.GetAllEntriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"errorContentstackAssetsApi2"` [404] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entries.GetAllEntriesRequest` (14):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes | — |
| `locale` | `query` | — | `string` | no | — |
| `skip` | `query` | — | `number` | no | `0` |
| `limit` | `query` | — | `number` | no | `100` |
| `query` | `query` | — | `string` | no | — |
| `includeCount` | `query` | `include_count` | `boolean` | no | — |
| `includeContentType` | `query` | `include_content_type` | `boolean` | no | — |
| `includeReference` | `query` | `include_reference` | `boolean` | no | — |
| `only` | `query` | — | `string` | no | — |
| `except` | `query` | — | `string` | no | — |
| `asc` | `query` | — | `string` | no | — |
| `desc` | `query` | — | `string` | no | — |
| `apiKey` | `header` | `api_key` | `string` | yes | — |
| `accessToken` | `header` | `access_token` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntryList` | `entryListSchema` | `src/models/entry-list.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### getSingleEntry

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSingleEntry(request: Entries.GetSingleEntryRequest, options?: RequestOptions): ApiPromise<EntryModel, Entries.GetSingleEntryError>`
- **Wire**: `GET /content_types/{content_type_uid}/entries/{entry_uid}`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntryModel`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Entries.GetSingleEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"errorContentstackAssetsApi2"` [404] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entries.GetSingleEntryRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `entryUid` | `path` | `entry_uid` | `string` | yes |
| `locale` | `query` | — | `string` | no |
| `includeReference` | `query` | `include_reference` | `boolean` | no |
| `version` | `query` | — | `number` | no |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `accessToken` | `header` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntryModel` | `entryModelSchema` | `src/models/entry-model.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### publishEntry

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `publishEntry(request: Entries.PublishEntryRequest, options?: RequestOptions): ApiPromise<undefined, Entries.PublishEntryError>`
- **Wire**: `POST /content_types/{content_type_uid}/entries/{entry_uid}/publish`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Entries.PublishEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entries.PublishEntryRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `entryUid` | `path` | `entry_uid` | `string` | yes |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `authtoken` | `header` | — | `string` | no |
| `body` | `body` | — | `PublishRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublishRequest` | `publishRequestSchema` | `src/models/publish-request.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### unpublishEntry

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `unpublishEntry(request: Entries.UnpublishEntryRequest, options?: RequestOptions): ApiPromise<undefined, Entries.UnpublishEntryError>`
- **Wire**: `POST /content_types/{content_type_uid}/entries/{entry_uid}/unpublish`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Entries.UnpublishEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entries.UnpublishEntryRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `entryUid` | `path` | `entry_uid` | `string` | yes |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `authtoken` | `header` | — | `string` | no |
| `body` | `body` | — | `PublishRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublishRequest` | `publishRequestSchema` | `src/models/publish-request.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### updateEntry

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateEntry(request: Entries.UpdateEntryRequestParams, options?: RequestOptions): ApiPromise<Entry2, Entries.UpdateEntryError>`
- **Wire**: `PUT /content_types/{content_type_uid}/entries/{entry_uid}`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Entry2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Entries.UpdateEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entries.UpdateEntryRequestParams` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `entryUid` | `path` | `entry_uid` | `string` | yes |
| `locale` | `query` | — | `string` | no |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `authtoken` | `header` | — | `string` | no |
| `body` | `body` | — | `UpdateEntryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateEntryRequest` | `updateEntryRequestSchema` | `src/models/update-entry-request.ts` |
| `Entry2` | `entry2Schema` | `src/models/entry2.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

