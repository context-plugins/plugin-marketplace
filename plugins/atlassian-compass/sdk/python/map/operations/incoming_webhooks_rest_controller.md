<!-- Generated file — do not edit; regenerated with the SDK. -->

# IncomingWebhooksRestController — operations

Accessor: `client.incoming_webhooks_rest_controller` · Source: `atlassian_compass/apis/incoming_webhooks_rest_controller.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.incoming_webhooks_rest_controller.handle_webhook_invocation

- **Route**: `POST /compass/v1/webhooks/{webhookId}`
- **Auth**: `basic_auth`
- **Signature**: `def handle_webhook_invocation(webhook_id: str, body: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`, `body`
- **Params**: `webhook_id` — path `webhookId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, HandleWebhookInvocationErrorBody]`
- **Error**: `HandleWebhookInvocationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseDto` [400, 401, 404, 405] · `str` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HandleWebhookInvocationErrorBody` | `atlassian_compass/errors/handle_webhook_invocation_error.py` |
| `ErrorResponseDto` | `atlassian_compass/models/error_response_dto.py` |

