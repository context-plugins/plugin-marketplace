<!-- Generated file — do not edit; regenerated with the SDK. -->

# Statements — operations

Accessor: `client.statements` · Source: `src/resources/statements.ts` · 1 operation · Request and error types: namespace `Statements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStatement

- **Signature**: `createStatement(request: Statements.CreateStatementRequest, options?: RequestOptions): ApiPromise<UsersStatementsResponse, Statements.CreateStatementError>`
- **Wire**: `POST /users/{userId}/statements`
- **Auth**: any of `apiKey`, `servicesToken` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `statement` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersStatementsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Statements.CreateStatementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersStatements400Error1"` [400] `UsersStatements400Error1` · `"usersStatements403Error1"` [403] `UsersStatements403Error1` · `"usersStatements404Error1"` [404] `UsersStatements404Error1` · `"usersStatements500Error1"` [500] `UsersStatements500Error1` · `"usersStatements503Error1"` [503] `UsersStatements503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Statements.CreateStatementRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `institutionId` | `form` | `string` | yes |
| `statement` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersStatementsResponse` | `usersStatementsResponseSchema` | `src/models/users-statements-response.ts` |
| `UsersStatements400Error1` | `usersStatements400Error1Schema` | `src/models/users-statements400-error1.ts` |
| `UsersStatements403Error1` | `usersStatements403Error1Schema` | `src/models/users-statements403-error1.ts` |
| `UsersStatements404Error1` | `usersStatements404Error1Schema` | `src/models/users-statements404-error1.ts` |
| `UsersStatements500Error1` | `usersStatements500Error1Schema` | `src/models/users-statements500-error1.ts` |
| `UsersStatements503Error1` | `usersStatements503Error1Schema` | `src/models/users-statements503-error1.ts` |

