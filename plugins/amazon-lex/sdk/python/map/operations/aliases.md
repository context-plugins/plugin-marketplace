<!-- Generated file — do not edit; regenerated with the SDK. -->

# Aliases — operations

Accessor: `client.aliases` · Source: `amazon_lex/apis/aliases.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aliases.delete_bot_alias

- **Route**: `DELETE /bots/{botName}/aliases/{name}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_bot_alias(bot_name: str, name: str, *, body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `name`
- **Params**: `bot_name` — path `botName` · `name` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteBotAliasErrorBody]`
- **Error**: `DeleteBotAliasErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexDeleteBotAliasRequest` | `amazon_lex/models/models_lex_delete_bot_alias_request.py` |
| `ModelsLexDeleteBotAliasRequestDict` | `amazon_lex/models/models_lex_delete_bot_alias_request.py` |
| `DeleteBotAliasErrorBody` | `amazon_lex/errors/delete_bot_alias_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.aliases.get_bot_alias

- **Route**: `GET /bots/{botName}/aliases/{name}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_bot_alias(bot_name: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `name`
- **Params**: `bot_name` — path `botName` · `name` — path
- **Returns (parsed)**: `GetBotAliasResponse`
- **Returns (raw)**: `ApiResult[GetBotAliasResponse, GetBotAliasErrorBody]`
- **Error**: `GetBotAliasErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBotAliasResponse` | `amazon_lex/models/get_bot_alias_response.py` |
| `GetBotAliasErrorBody` | `amazon_lex/errors/get_bot_alias_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.aliases.get_bot_aliases

- **Route**: `GET /bots/{botName}/aliases`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_bot_aliases(bot_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`
- **Params**: `bot_name` — path `botName`
- **Returns (parsed)**: `GetBotAliasesResponse`
- **Returns (raw)**: `ApiResult[GetBotAliasesResponse, GetBotAliasesErrorBody]`
- **Error**: `GetBotAliasesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBotAliasesResponse` | `amazon_lex/models/get_bot_aliases_response.py` |
| `GetBotAliasesErrorBody` | `amazon_lex/errors/get_bot_aliases_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.aliases.put_bot_alias

- **Route**: `PUT /bots/{botName}/aliases/{name}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def put_bot_alias(bot_name: str, name: str, *, body: PutBotAliasRequest | PutBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `name`
- **Params**: `bot_name` — path `botName` · `name` — path · `body` — JSON body
- **Returns (parsed)**: `PutBotAliasResponse`
- **Returns (raw)**: `ApiResult[PutBotAliasResponse, PutBotAliasErrorBody]`
- **Error**: `PutBotAliasErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ConflictException` [409] · `PreconditionFailedException` [412] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutBotAliasRequest` | `amazon_lex/models/put_bot_alias_request.py` |
| `PutBotAliasRequestDict` | `amazon_lex/models/put_bot_alias_request.py` |
| `PutBotAliasResponse` | `amazon_lex/models/put_bot_alias_response.py` |
| `PutBotAliasErrorBody` | `amazon_lex/errors/put_bot_alias_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

