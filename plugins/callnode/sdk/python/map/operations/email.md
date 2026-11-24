<!-- Generated file — do not edit; regenerated with the SDK. -->

# Email — operations

Accessor: `client.email` · Source: `call_node/apis/email.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.email.create_email_domain

- **Route**: `POST /api/v1/email/domains`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def create_email_domain(body: ApiV1EmailDomainsRequest | ApiV1EmailDomainsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EmailDomain`
- **Returns (raw)**: `ApiResult[EmailDomain, CreateEmailDomainErrorBody]`
- **Error**: `CreateEmailDomainErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1EmailDomainsRequest` | `call_node/models/api_v1_email_domains_request.py` |
| `ApiV1EmailDomainsRequestDict` | `call_node/models/api_v1_email_domains_request.py` |
| `EmailDomain` | `call_node/models/email_domain.py` |
| `CreateEmailDomainErrorBody` | `call_node/errors/create_email_domain_error.py` |
| `Error` | `call_node/models/error.py` |

### client.email.delete_email_domain

- **Route**: `DELETE /api/v1/email/domains/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def delete_email_domain(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEmailDomainErrorBody]`
- **Error**: `DeleteEmailDomainErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEmailDomainErrorBody` | `call_node/errors/delete_email_domain_error.py` |
| `Error` | `call_node/models/error.py` |

### client.email.get_email_domain

- **Route**: `GET /api/v1/email/domains/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def get_email_domain(id_: str, *, refresh: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `refresh` — query
- **Returns (parsed)**: `EmailDomain`
- **Returns (raw)**: `ApiResult[EmailDomain, GetEmailDomainErrorBody]`
- **Error**: `GetEmailDomainErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EmailDomain` | `call_node/models/email_domain.py` |
| `GetEmailDomainErrorBody` | `call_node/errors/get_email_domain_error.py` |
| `Error` | `call_node/models/error.py` |

### client.email.get_email_message

- **Route**: `GET /api/v1/email/messages/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def get_email_message(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `EmailMessage`
- **Returns (raw)**: `ApiResult[EmailMessage, GetEmailMessageErrorBody]`
- **Error**: `GetEmailMessageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EmailMessage` | `call_node/models/email_message.py` |
| `GetEmailMessageErrorBody` | `call_node/errors/get_email_message_error.py` |
| `Error` | `call_node/models/error.py` |

### client.email.list_email_domains

- **Route**: `GET /api/v1/email/domains`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_email_domains(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1EmailDomainsResponse`
- **Returns (raw)**: `ApiResult[ApiV1EmailDomainsResponse, ListEmailDomainsErrorBody]`
- **Error**: `ListEmailDomainsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1EmailDomainsResponse` | `call_node/models/api_v1_email_domains_response.py` |
| `ListEmailDomainsErrorBody` | `call_node/errors/list_email_domains_error.py` |
| `Error` | `call_node/models/error.py` |

### client.email.list_email_messages

- **Route**: `GET /api/v1/email/messages`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_email_messages(*, status: Status3OrStr | None = None, limit: int | None = 25, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1EmailMessagesResponse`
- **Returns (raw)**: `ApiResult[ApiV1EmailMessagesResponse, ListEmailMessagesErrorBody]`
- **Error**: `ListEmailMessagesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status3OrStr` | `call_node/models/enums/status3.py` |
| `ApiV1EmailMessagesResponse` | `call_node/models/api_v1_email_messages_response.py` |
| `ListEmailMessagesErrorBody` | `call_node/errors/list_email_messages_error.py` |
| `Error` | `call_node/models/error.py` |

### client.email.send_email

- **Route**: `POST /api/v1/email/messages`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def send_email(body: SendEmailRequest | SendEmailRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_idempotency_key` — header `X-Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `EmailMessage`
- **Returns (raw)**: `ApiResult[EmailMessage, SendEmailErrorBody]`
- **Error**: `SendEmailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 403, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SendEmailRequest` | `call_node/models/send_email_request.py` |
| `SendEmailRequestDict` | `call_node/models/send_email_request.py` |
| `EmailMessage` | `call_node/models/email_message.py` |
| `SendEmailErrorBody` | `call_node/errors/send_email_error.py` |
| `Error` | `call_node/models/error.py` |

### client.email.verify_email_domain

- **Route**: `POST /api/v1/email/domains/{id}/verify`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def verify_email_domain(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `EmailDomain`
- **Returns (raw)**: `ApiResult[EmailDomain, VerifyEmailDomainErrorBody]`
- **Error**: `VerifyEmailDomainErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EmailDomain` | `call_node/models/email_domain.py` |
| `VerifyEmailDomainErrorBody` | `call_node/errors/verify_email_domain_error.py` |
| `Error` | `call_node/models/error.py` |

