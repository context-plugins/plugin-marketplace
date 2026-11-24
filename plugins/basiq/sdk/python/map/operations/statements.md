<!-- Generated file — do not edit; regenerated with the SDK. -->

# Statements — operations

Accessor: `client.statements` · Source: `basiq/apis/statements.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.statements.create_statement

- **Route**: `POST /users/{userId}/statements`
- **Auth**: `api_key` OR `services_token`
- **Signature**: `def create_statement(user_id: str, institution_id: str, statement: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `institution_id`, `statement`
- **Params**: `user_id` — path `userId` · `institution_id` — multipart field `institutionId` · `statement` — multipart file
- **Returns (parsed)**: `UsersStatementsResponse`
- **Returns (raw)**: `ApiResult[UsersStatementsResponse, CreateStatementErrorBody]`
- **Error**: `CreateStatementErrorBody` — **Case A (typed)**
- **Error arms**: `UsersStatements400Error1` [400] · `UsersStatements403Error1` [403] · `UsersStatements404Error1` [404] · `UsersStatements500Error1` [500] · `UsersStatements503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersStatementsResponse` | `basiq/models/users_statements_response.py` |
| `CreateStatementErrorBody` | `basiq/errors/create_statement_error.py` |
| `UsersStatements400Error1` | `basiq/models/users_statements400_error1.py` |
| `UsersStatements403Error1` | `basiq/models/users_statements403_error1.py` |
| `UsersStatements404Error1` | `basiq/models/users_statements404_error1.py` |
| `UsersStatements500Error1` | `basiq/models/users_statements500_error1.py` |
| `UsersStatements503Error1` | `basiq/models/users_statements503_error1.py` |

