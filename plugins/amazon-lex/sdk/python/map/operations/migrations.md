<!-- Generated file — do not edit; regenerated with the SDK. -->

# Migrations — operations

Accessor: `client.migrations` · Source: `amazon_lex/apis/migrations.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.migrations.get_migration

- **Route**: `GET /migrations/{migrationId}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_migration(migration_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `migration_id`
- **Params**: `migration_id` — path `migrationId`
- **Returns (parsed)**: `GetMigrationResponse`
- **Returns (raw)**: `ApiResult[GetMigrationResponse, GetMigrationErrorBody]`
- **Error**: `GetMigrationErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMigrationResponse` | `amazon_lex/models/get_migration_response.py` |
| `GetMigrationErrorBody` | `amazon_lex/errors/get_migration_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.migrations.get_migrations

- **Route**: `GET /migrations`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_migrations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetMigrationsResponse`
- **Returns (raw)**: `ApiResult[GetMigrationsResponse, GetMigrationsErrorBody]`
- **Error**: `GetMigrationsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMigrationsResponse` | `amazon_lex/models/get_migrations_response.py` |
| `GetMigrationsErrorBody` | `amazon_lex/errors/get_migrations_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.migrations.start_migration

- **Route**: `POST /migrations`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def start_migration(*, body: StartMigrationRequest | StartMigrationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StartMigrationResponse`
- **Returns (raw)**: `ApiResult[StartMigrationResponse, StartMigrationErrorBody]`
- **Error**: `StartMigrationErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ModelsLexAccessDeniedException` [403] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartMigrationRequest` | `amazon_lex/models/start_migration_request.py` |
| `StartMigrationRequestDict` | `amazon_lex/models/start_migration_request.py` |
| `StartMigrationResponse` | `amazon_lex/models/start_migration_response.py` |
| `StartMigrationErrorBody` | `amazon_lex/errors/start_migration_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `ModelsLexAccessDeniedException` | `amazon_lex/models/models_lex_access_denied_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

