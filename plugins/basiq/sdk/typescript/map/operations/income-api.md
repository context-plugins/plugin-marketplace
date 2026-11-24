<!-- Generated file — do not edit; regenerated with the SDK. -->

# IncomeApi — operations

Accessor: `client.incomeApi` · Source: `src/resources/income-api.ts` · 2 operations · Request and error types: namespace `IncomeApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getIncome

- **Signature**: `getIncome(request: IncomeApi.GetIncomeRequest, options?: RequestOptions): ApiPromise<IncomeResponse, IncomeApi.GetIncomeError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /users/{userId}/income/{snapshotId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IncomeResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `IncomeApi.GetIncomeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersIncome400Error1"` [400] `UsersIncome400Error1` · `"usersIncome403Error1"` [403] `UsersIncome403Error1` · `"usersIncome404Error1"` [404] `UsersIncome404Error1` · `"usersIncome500Error1"` [500] `UsersIncome500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IncomeApi.GetIncomeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `snapshotId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncomeResponse` | `incomeResponseSchema` | `src/models/income-response.ts` |
| `UsersIncome400Error1` | `usersIncome400Error1Schema` | `src/models/users-income400-error1.ts` |
| `UsersIncome403Error1` | `usersIncome403Error1Schema` | `src/models/users-income403-error1.ts` |
| `UsersIncome404Error1` | `usersIncome404Error1Schema` | `src/models/users-income404-error1.ts` |
| `UsersIncome500Error1` | `usersIncome500Error1Schema` | `src/models/users-income500-error1.ts` |

### postIncome

- **Signature**: `postIncome(request: IncomeApi.PostIncomeRequest, options?: RequestOptions): ApiPromise<IncomeResponse, IncomeApi.PostIncomeError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /users/{userId}/income`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncomeResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `IncomeApi.PostIncomeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersIncome400Error1"` [400] `UsersIncome400Error1` · `"usersIncome403Error1"` [403] `UsersIncome403Error1` · `"usersIncome404Error1"` [404] `UsersIncome404Error1` · `"usersIncome500Error1"` [500] `UsersIncome500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IncomeApi.PostIncomeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `UsersIncomeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersIncomeRequest` | `usersIncomeRequestSchema` | `src/models/users-income-request.ts` |
| `IncomeResponse` | `incomeResponseSchema` | `src/models/income-response.ts` |
| `UsersIncome400Error1` | `usersIncome400Error1Schema` | `src/models/users-income400-error1.ts` |
| `UsersIncome403Error1` | `usersIncome403Error1Schema` | `src/models/users-income403-error1.ts` |
| `UsersIncome404Error1` | `usersIncome404Error1Schema` | `src/models/users-income404-error1.ts` |
| `UsersIncome500Error1` | `usersIncome500Error1Schema` | `src/models/users-income500-error1.ts` |

