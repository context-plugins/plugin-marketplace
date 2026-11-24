<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stacks — operations

Accessor: `client.stacks` · Source: `src/resources/stacks.ts` · 5 operations · Request and error types: namespace `Stacks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStack

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createStack(request: Stacks.CreateStackRequestParams, options?: RequestOptions): ApiPromise<Stack, Stacks.CreateStackError>`
- **Wire**: `POST /stacks`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Stack`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Stacks.CreateStackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"error22"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stacks.CreateStackRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |
| `body` | `body` | — | `CreateStackRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStackRequest` | `createStackRequestSchema` | `src/models/create-stack-request.ts` |
| `Stack` | `stackSchema` | `src/models/stack.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### deleteStack

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteStack(request: Stacks.DeleteStackRequest, options?: RequestOptions): ApiPromise<undefined, Stacks.DeleteStackError>`
- **Wire**: `DELETE /stacks/{api_key}`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Stacks.DeleteStackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"error22"` [404] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stacks.DeleteStackRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `path` | `api_key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### getAllStacks

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllStacks(options?: RequestOptions): ApiPromise<StackList, Stacks.GetAllStacksError>`
- **Wire**: `GET /stacks`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StackList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Stacks.GetAllStacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `StackList` | `stackListSchema` | `src/models/stack-list.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### getStack

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getStack(request: Stacks.GetStackRequest, options?: RequestOptions): ApiPromise<Stack, Stacks.GetStackError>`
- **Wire**: `GET /stacks/{api_key}`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stack`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Stacks.GetStackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"error22"` [404] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stacks.GetStackRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `path` | `api_key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Stack` | `stackSchema` | `src/models/stack.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### updateStack

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateStack(request: Stacks.UpdateStackRequestParams, options?: RequestOptions): ApiPromise<Stack, Stacks.UpdateStackError>`
- **Wire**: `PUT /stacks/{api_key}`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Stack`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Stacks.UpdateStackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"error22"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stacks.UpdateStackRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `path` | `api_key` | `string` | yes |
| `body` | `body` | — | `UpdateStackRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStackRequest` | `updateStackRequestSchema` | `src/models/update-stack-request.ts` |
| `Stack` | `stackSchema` | `src/models/stack.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

