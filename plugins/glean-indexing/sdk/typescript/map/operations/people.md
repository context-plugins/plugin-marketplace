<!-- Generated file — do not edit; regenerated with the SDK. -->

# People — operations

Accessor: `client.people` · Source: `src/resources/people.ts` · 8 operations · Request and error types: namespace `People`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-indexing-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkIndexEmployees

- **Signature**: `bulkIndexEmployees(options?: RequestOptions): ApiPromise<undefined, People.BulkIndexEmployeesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/index/v1/bulkindexemployees`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `People.BulkIndexEmployeesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### bulkIndexEmployees1

- **Signature**: `bulkIndexEmployees1(options?: RequestOptions): ApiPromise<undefined, People.BulkIndexEmployees1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/index/v1/indexemployeelist`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `People.BulkIndexEmployees1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### bulkIndexTeams

- **Signature**: `bulkIndexTeams(options?: RequestOptions): ApiPromise<undefined, People.BulkIndexTeamsError>`
- **Wire**: `POST /api/index/v1/bulkindexteams`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `People.BulkIndexTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### deleteEmployee

- **Signature**: `deleteEmployee(options?: RequestOptions): ApiPromise<undefined, People.DeleteEmployeeError>`
- **Wire**: `POST /api/index/v1/deleteemployee`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `People.DeleteEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### deleteTeam

- **Signature**: `deleteTeam(options?: RequestOptions): ApiPromise<undefined, People.DeleteTeamError>`
- **Wire**: `POST /api/index/v1/deleteteam`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `People.DeleteTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### indexEmployee

- **Signature**: `indexEmployee(options?: RequestOptions): ApiPromise<undefined, People.IndexEmployeeError>`
- **Wire**: `POST /api/index/v1/indexemployee`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `People.IndexEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### indexTeam

- **Signature**: `indexTeam(options?: RequestOptions): ApiPromise<undefined, People.IndexTeamError>`
- **Wire**: `POST /api/index/v1/indexteam`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `People.IndexTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### schedulesTheProcessingOfUploadedEmployeesAndTeams

- **Signature**: `schedulesTheProcessingOfUploadedEmployeesAndTeams(options?: RequestOptions): ApiPromise<undefined, People.SchedulesTheProcessingOfUploadedEmployeesAndTeamsError>`
- **Wire**: `POST /api/index/v1/processallemployeesandteams`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `People.SchedulesTheProcessingOfUploadedEmployeesAndTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

