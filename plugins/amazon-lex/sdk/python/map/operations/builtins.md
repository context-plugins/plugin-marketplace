<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builtins — operations

Accessor: `client.builtins` · Source: `amazon_lex/apis/builtins.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.builtins.get_builtin_intent

- **Route**: `GET /builtins/intents/{signature}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_builtins_api`
- **Signature**: `def get_builtin_intent(signature: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `signature`
- **Params**: `signature` — path
- **Returns (parsed)**: `GetBuiltinIntentResponse`
- **Returns (raw)**: `ApiResult[GetBuiltinIntentResponse, GetBuiltinIntentErrorBody]`
- **Error**: `GetBuiltinIntentErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBuiltinIntentResponse` | `amazon_lex/models/get_builtin_intent_response.py` |
| `GetBuiltinIntentErrorBody` | `amazon_lex/errors/get_builtin_intent_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.builtins.get_builtin_intents

- **Route**: `GET /builtins/intents`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_builtins_api`
- **Signature**: `def get_builtin_intents(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetBuiltinIntentsResponse`
- **Returns (raw)**: `ApiResult[GetBuiltinIntentsResponse, GetBuiltinIntentsErrorBody]`
- **Error**: `GetBuiltinIntentsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBuiltinIntentsResponse` | `amazon_lex/models/get_builtin_intents_response.py` |
| `GetBuiltinIntentsErrorBody` | `amazon_lex/errors/get_builtin_intents_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.builtins.get_builtin_slot_types

- **Route**: `GET /builtins/slottypes`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_builtins_api`
- **Signature**: `def get_builtin_slot_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetBuiltinSlotTypesResponse`
- **Returns (raw)**: `ApiResult[GetBuiltinSlotTypesResponse, GetBuiltinSlotTypesErrorBody]`
- **Error**: `GetBuiltinSlotTypesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBuiltinSlotTypesResponse` | `amazon_lex/models/get_builtin_slot_types_response.py` |
| `GetBuiltinSlotTypesErrorBody` | `amazon_lex/errors/get_builtin_slot_types_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.builtins.list_built_in_intents

- **Route**: `POST /builtins/locales/{localeId}/intents`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_builtins_api`
- **Signature**: `def list_built_in_intents(locale_id: str, *, body: ListBuiltInIntentsRequest | ListBuiltInIntentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `locale_id`
- **Params**: `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `ListBuiltInIntentsResponse`
- **Returns (raw)**: `ApiResult[ListBuiltInIntentsResponse, ListBuiltInIntentsErrorBody]`
- **Error**: `ListBuiltInIntentsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBuiltInIntentsRequest` | `amazon_lex/models/list_built_in_intents_request.py` |
| `ListBuiltInIntentsRequestDict` | `amazon_lex/models/list_built_in_intents_request.py` |
| `ListBuiltInIntentsResponse` | `amazon_lex/models/list_built_in_intents_response.py` |
| `ListBuiltInIntentsErrorBody` | `amazon_lex/errors/list_built_in_intents_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.builtins.list_built_in_slot_types

- **Route**: `POST /builtins/locales/{localeId}/slottypes`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_builtins_api`
- **Signature**: `def list_built_in_slot_types(locale_id: str, *, body: ListBuiltInSlotTypesRequest | ListBuiltInSlotTypesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `locale_id`
- **Params**: `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `ListBuiltInSlotTypesResponse`
- **Returns (raw)**: `ApiResult[ListBuiltInSlotTypesResponse, ListBuiltInSlotTypesErrorBody]`
- **Error**: `ListBuiltInSlotTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBuiltInSlotTypesRequest` | `amazon_lex/models/list_built_in_slot_types_request.py` |
| `ListBuiltInSlotTypesRequestDict` | `amazon_lex/models/list_built_in_slot_types_request.py` |
| `ListBuiltInSlotTypesResponse` | `amazon_lex/models/list_built_in_slot_types_response.py` |
| `ListBuiltInSlotTypesErrorBody` | `amazon_lex/errors/list_built_in_slot_types_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

