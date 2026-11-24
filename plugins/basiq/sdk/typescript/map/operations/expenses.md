<!-- Generated file — do not edit; regenerated with the SDK. -->

# Expenses — operations

Accessor: `client.expenses` · Source: `src/resources/expenses.ts` · 2 operations · Request and error types: namespace `Expenses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getExpenses

- **Signature**: `getExpenses(request: Expenses.GetExpensesRequest, options?: RequestOptions): ApiPromise<ExpensesResponse, Expenses.GetExpensesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /users/{userId}/expenses/{snapshotId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExpensesResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Expenses.GetExpensesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersExpenses400Error1"` [400] `UsersExpenses400Error1` · `"usersExpenses403Error1"` [403] `UsersExpenses403Error1` · `"usersExpenses404Error1"` [404] `UsersExpenses404Error1` · `"usersExpenses500Error1"` [500] `UsersExpenses500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Expenses.GetExpensesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `snapshotId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpensesResponse` | `expensesResponseSchema` | `src/models/expenses-response.ts` |
| `UsersExpenses400Error1` | `usersExpenses400Error1Schema` | `src/models/users-expenses400-error1.ts` |
| `UsersExpenses403Error1` | `usersExpenses403Error1Schema` | `src/models/users-expenses403-error1.ts` |
| `UsersExpenses404Error1` | `usersExpenses404Error1Schema` | `src/models/users-expenses404-error1.ts` |
| `UsersExpenses500Error1` | `usersExpenses500Error1Schema` | `src/models/users-expenses500-error1.ts` |

### postExpenses

- **Signature**: `postExpenses(request: Expenses.PostExpensesRequest, options?: RequestOptions): ApiPromise<ExpensesResponse, Expenses.PostExpensesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /users/{userId}/expenses`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExpensesResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Expenses.PostExpensesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersExpenses400Error1"` [400] `UsersExpenses400Error1` · `"usersExpenses403Error1"` [403] `UsersExpenses403Error1` · `"usersExpenses404Error1"` [404] `UsersExpenses404Error1` · `"usersExpenses500Error1"` [500] `UsersExpenses500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Expenses.PostExpensesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `UsersExpensesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersExpensesRequest` | `usersExpensesRequestSchema` | `src/models/users-expenses-request.ts` |
| `ExpensesResponse` | `expensesResponseSchema` | `src/models/expenses-response.ts` |
| `UsersExpenses400Error1` | `usersExpenses400Error1Schema` | `src/models/users-expenses400-error1.ts` |
| `UsersExpenses403Error1` | `usersExpenses403Error1Schema` | `src/models/users-expenses403-error1.ts` |
| `UsersExpenses404Error1` | `usersExpenses404Error1Schema` | `src/models/users-expenses404-error1.ts` |
| `UsersExpenses500Error1` | `usersExpenses500Error1Schema` | `src/models/users-expenses500-error1.ts` |

