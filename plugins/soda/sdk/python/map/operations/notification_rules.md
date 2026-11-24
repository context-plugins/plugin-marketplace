<!-- Generated file — do not edit; regenerated with the SDK. -->

# NotificationRules — operations

Accessor: `client.notification_rules` · Source: `soda/apis/notification_rules.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.notification_rules.delete_api_v1_notification_rules_notification_rule_id

- **Route**: `DELETE /api/v1/notificationRules/{notificationRuleId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_notification_rules_notification_rule_id(notification_rule_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `notification_rule_id`
- **Params**: `notification_rule_id` — path `notificationRuleId`
- **Returns (parsed)**: `PublicApiDeleteNotificationRuleResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteNotificationRuleResponse, DeleteApiV1NotificationRulesNotificationRuleIdErrorBody]`
- **Error**: `DeleteApiV1NotificationRulesNotificationRuleIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteNotificationRuleResponse` | `soda/models/public_api_delete_notification_rule_response.py` |
| `DeleteApiV1NotificationRulesNotificationRuleIdErrorBody` | `soda/errors/delete_api_v1_notification_rules_notification_rule_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.notification_rules.get_api_v1_notification_rules

- **Route**: `GET /api/v1/notificationRules`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_notification_rules(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiListNotificationRulesResponse`
- **Returns (raw)**: `ApiResult[PublicApiListNotificationRulesResponse, GetApiV1NotificationRulesErrorBody]`
- **Error**: `GetApiV1NotificationRulesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiListNotificationRulesResponse` | `soda/models/public_api_list_notification_rules_response.py` |
| `GetApiV1NotificationRulesErrorBody` | `soda/errors/get_api_v1_notification_rules_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.notification_rules.post_api_v1_notification_rules

- **Route**: `POST /api/v1/notificationRules`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_notification_rules(body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiNotificationRuleDto`
- **Returns (raw)**: `ApiResult[PublicApiNotificationRuleDto, PostApiV1NotificationRulesErrorBody]`
- **Error**: `PostApiV1NotificationRulesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiNotificationRuleRequestDto` | `soda/models/public_api_notification_rule_request_dto.py` |
| `PublicApiNotificationRuleRequestDtoDict` | `soda/models/public_api_notification_rule_request_dto.py` |
| `PublicApiNotificationRuleDto` | `soda/models/public_api_notification_rule_dto.py` |
| `PostApiV1NotificationRulesErrorBody` | `soda/errors/post_api_v1_notification_rules_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.notification_rules.post_api_v1_notification_rules_notification_rule_id

- **Route**: `POST /api/v1/notificationRules/{notificationRuleId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_notification_rules_notification_rule_id(notification_rule_id: str, body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `notification_rule_id`, `body`
- **Params**: `notification_rule_id` — path `notificationRuleId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiNotificationRuleDto`
- **Returns (raw)**: `ApiResult[PublicApiNotificationRuleDto, PostApiV1NotificationRulesNotificationRuleIdErrorBody]`
- **Error**: `PostApiV1NotificationRulesNotificationRuleIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiNotificationRuleRequestDto` | `soda/models/public_api_notification_rule_request_dto.py` |
| `PublicApiNotificationRuleRequestDtoDict` | `soda/models/public_api_notification_rule_request_dto.py` |
| `PublicApiNotificationRuleDto` | `soda/models/public_api_notification_rule_dto.py` |
| `PostApiV1NotificationRulesNotificationRuleIdErrorBody` | `soda/errors/post_api_v1_notification_rules_notification_rule_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

