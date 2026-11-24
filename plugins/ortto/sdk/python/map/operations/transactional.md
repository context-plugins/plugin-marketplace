<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactional — operations

Accessor: `client.transactional` · Source: `ortto/apis/transactional.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transactional.send_transactional_email

- **Route**: `POST /transactional/send`
- **Auth**: `api_key_auth`
- **Signature**: `def send_transactional_email(body: TransactionalSendRequest | TransactionalSendRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SendTransactionalEmailErrorBody]`
- **Error**: `SendTransactionalEmailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransactionalSendRequest` | `ortto/models/transactional_send_request.py` |
| `TransactionalSendRequestDict` | `ortto/models/transactional_send_request.py` |
| `SendTransactionalEmailErrorBody` | `ortto/errors/send_transactional_email_error.py` |
| `Error` | `ortto/models/error.py` |

### client.transactional.send_transactional_sms

- **Route**: `POST /transactional/send-sms`
- **Auth**: `api_key_auth`
- **Signature**: `def send_transactional_sms(body: TransactionalSendSmsRequest | TransactionalSendSmsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SendTransactionalSmsErrorBody]`
- **Error**: `SendTransactionalSmsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransactionalSendSmsRequest` | `ortto/models/transactional_send_sms_request.py` |
| `TransactionalSendSmsRequestDict` | `ortto/models/transactional_send_sms_request.py` |
| `SendTransactionalSmsErrorBody` | `ortto/errors/send_transactional_sms_error.py` |
| `Error` | `ortto/models/error.py` |

