<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sql — operations

Accessor: `client.sql` · Source: `plinth_us_grants_data/apis/sql.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sql.post_api_v1_sql

- **Route**: `POST /api/v1/sql`
- **Auth**: `api_key_auth`
- **Signature**: `def post_api_v1_sql(body: ApiV1SqlRequest | ApiV1SqlRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SqlResponse`
- **Returns (raw)**: `ApiResult[SqlResponse, PostApiV1SqlErrorBody]`
- **Error**: `PostApiV1SqlErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SqlRequest` | `plinth_us_grants_data/models/api_v1_sql_request.py` |
| `ApiV1SqlRequestDict` | `plinth_us_grants_data/models/api_v1_sql_request.py` |
| `SqlResponse` | `plinth_us_grants_data/models/sql_response.py` |
| `PostApiV1SqlErrorBody` | `plinth_us_grants_data/errors/post_api_v1_sql_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |

### client.sql.run_sql

- **Route**: `POST /api/sql`
- **Auth**: `api_key_auth`
- **Signature**: `def run_sql(body: ApiSqlRequest | ApiSqlRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RunSqlErrorBody]`
- **Error**: `RunSqlErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiSqlRequest` | `plinth_us_grants_data/models/api_sql_request.py` |
| `ApiSqlRequestDict` | `plinth_us_grants_data/models/api_sql_request.py` |
| `RunSqlErrorBody` | `plinth_us_grants_data/errors/run_sql_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |

