<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `lusha/apis/webhooks_api.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.create_opt_out_subscription

- **Route**: `POST /api/subscriptions/opt-out`
- **Auth**: `api_key_auth`
- **Signature**: `def create_opt_out_subscription(body: CreateOptOutSubscriptionRequest | CreateOptOutSubscriptionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `OptOutSubscriptionResponse`
- **Returns (raw)**: `ApiResult[OptOutSubscriptionResponse, CreateOptOutSubscriptionErrorBody]`
- **Error**: `CreateOptOutSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateOptOutSubscriptionRequest` | `lusha/models/create_opt_out_subscription_request.py` |
| `CreateOptOutSubscriptionRequestDict` | `lusha/models/create_opt_out_subscription_request.py` |
| `OptOutSubscriptionResponse` | `lusha/models/opt_out_subscription_response.py` |
| `CreateOptOutSubscriptionErrorBody` | `lusha/errors/create_opt_out_subscription_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.create_subscription

- **Route**: `POST /api/subscriptions`
- **Auth**: `api_key_auth`
- **Signature**: `def create_subscription(body: CreateSubscriptionRequest | CreateSubscriptionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateSubscriptionResponse`
- **Returns (raw)**: `ApiResult[CreateSubscriptionResponse, CreateSubscriptionErrorBody]`
- **Error**: `CreateSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSubscriptionRequest` | `lusha/models/create_subscription_request.py` |
| `CreateSubscriptionRequestDict` | `lusha/models/create_subscription_request.py` |
| `CreateSubscriptionResponse` | `lusha/models/create_subscription_response.py` |
| `CreateSubscriptionErrorBody` | `lusha/errors/create_subscription_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.delete_subscriptions

- **Route**: `POST /api/subscriptions/delete`
- **Auth**: `api_key_auth`
- **Signature**: `def delete_subscriptions(body: ApiSubscriptionsDeleteRequest | ApiSubscriptionsDeleteRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DeleteSubscriptionResponse`
- **Returns (raw)**: `ApiResult[DeleteSubscriptionResponse, DeleteSubscriptionsErrorBody]`
- **Error**: `DeleteSubscriptionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiSubscriptionsDeleteRequest` | `lusha/models/api_subscriptions_delete_request.py` |
| `ApiSubscriptionsDeleteRequestDict` | `lusha/models/api_subscriptions_delete_request.py` |
| `DeleteSubscriptionResponse` | `lusha/models/delete_subscription_response.py` |
| `DeleteSubscriptionsErrorBody` | `lusha/errors/delete_subscriptions_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.get_account_secret

- **Route**: `GET /api/account/secret`
- **Auth**: `api_key_auth`
- **Signature**: `def get_account_secret(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiAccountSecretResponse`
- **Returns (raw)**: `ApiResult[ApiAccountSecretResponse, GetAccountSecretErrorBody]`
- **Error**: `GetAccountSecretErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiAccountSecretResponse` | `lusha/models/api_account_secret_response.py` |
| `GetAccountSecretErrorBody` | `lusha/errors/get_account_secret_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.get_audit_log_stats

- **Route**: `GET /api/audit-logs/stats`
- **Auth**: `api_key_auth`
- **Signature**: `def get_audit_log_stats(*, subscription_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `subscription_id` — query `subscriptionId`
- **Returns (parsed)**: `AuditLogStatsResponse`
- **Returns (raw)**: `ApiResult[AuditLogStatsResponse, GetAuditLogStatsErrorBody]`
- **Error**: `GetAuditLogStatsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuditLogStatsResponse` | `lusha/models/audit_log_stats_response.py` |
| `GetAuditLogStatsErrorBody` | `lusha/errors/get_audit_log_stats_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.get_audit_logs

- **Route**: `GET /api/audit-logs`
- **Auth**: `api_key_auth`
- **Signature**: `def get_audit_logs(*, subscription_id: str | None = None, status: StatusLushaWebhooksApiOrStr | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `subscription_id` — query `subscriptionId` · `status` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `AuditLogsResponse`
- **Returns (raw)**: `ApiResult[AuditLogsResponse, GetAuditLogsErrorBody]`
- **Error**: `GetAuditLogsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusLushaWebhooksApiOrStr` | `lusha/models/enums/status_lusha_webhooks_api.py` |
| `AuditLogsResponse` | `lusha/models/audit_logs_response.py` |
| `GetAuditLogsErrorBody` | `lusha/errors/get_audit_logs_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.get_subscription_by_id

- **Route**: `GET /api/subscriptions/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_subscription_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SubscriptionWithoutSecret`
- **Returns (raw)**: `ApiResult[SubscriptionWithoutSecret, GetSubscriptionByIdErrorBody]`
- **Error**: `GetSubscriptionByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionWithoutSecret` | `lusha/models/subscription_without_secret.py` |
| `GetSubscriptionByIdErrorBody` | `lusha/errors/get_subscription_by_id_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.list_subscriptions

- **Route**: `GET /api/subscriptions`
- **Auth**: `api_key_auth`
- **Signature**: `def list_subscriptions(*, limit: int | None = 10, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query
- **Returns (parsed)**: `SubscriptionListResponse`
- **Returns (raw)**: `ApiResult[SubscriptionListResponse, ListSubscriptionsErrorBody]`
- **Error**: `ListSubscriptionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionListResponse` | `lusha/models/subscription_list_response.py` |
| `ListSubscriptionsErrorBody` | `lusha/errors/list_subscriptions_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.regenerate_account_secret

- **Route**: `POST /api/account/secret/regenerate`
- **Auth**: `api_key_auth`
- **Signature**: `def regenerate_account_secret(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiAccountSecretRegenerateResponse`
- **Returns (raw)**: `ApiResult[ApiAccountSecretRegenerateResponse, RegenerateAccountSecretErrorBody]`
- **Error**: `RegenerateAccountSecretErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiAccountSecretRegenerateResponse` | `lusha/models/api_account_secret_regenerate_response.py` |
| `RegenerateAccountSecretErrorBody` | `lusha/errors/regenerate_account_secret_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.test_subscription

- **Route**: `POST /api/subscriptions/{id}/test`
- **Auth**: `api_key_auth`
- **Signature**: `def test_subscription(id_: str, *, mode: ModeOrStr | None = Mode.FULL, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `mode` — query
- **Returns (parsed)**: `TestSubscriptionResponse`
- **Returns (raw)**: `ApiResult[TestSubscriptionResponse, TestSubscriptionErrorBody]`
- **Error**: `TestSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModeOrStr` | `lusha/models/enums/mode.py` |
| `TestSubscriptionResponse` | `lusha/models/test_subscription_response.py` |
| `TestSubscriptionErrorBody` | `lusha/errors/test_subscription_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.webhooks_api.update_subscription

- **Route**: `PATCH /api/subscriptions/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def update_subscription(id_: str, body: UpdateSubscriptionRequest | UpdateSubscriptionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionResponse`
- **Returns (raw)**: `ApiResult[SubscriptionResponse, UpdateSubscriptionErrorBody]`
- **Error**: `UpdateSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateSubscriptionRequest` | `lusha/models/update_subscription_request.py` |
| `UpdateSubscriptionRequestDict` | `lusha/models/update_subscription_request.py` |
| `SubscriptionResponse` | `lusha/models/subscription_response.py` |
| `UpdateSubscriptionErrorBody` | `lusha/errors/update_subscription_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

