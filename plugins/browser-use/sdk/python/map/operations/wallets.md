<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wallets — operations

Accessor: `client.wallets` · Source: `browser_use/apis/wallets.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.wallets.get_stripe_link_status_stripe_link_get

- **Route**: `GET /stripe-link`
- **Auth**: `api_key_header`
- **Signature**: `def get_stripe_link_status_stripe_link_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `StripeLinkStatusResponse`
- **Returns (raw)**: `ApiResult[StripeLinkStatusResponse, GetStripeLinkStatusStripeLinkGetErrorBody]`
- **Error**: `GetStripeLinkStatusStripeLinkGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StripeLinkStatusResponse` | `browser_use/models/stripe_link_status_response.py` |
| `GetStripeLinkStatusStripeLinkGetErrorBody` | `browser_use/errors/get_stripe_link_status_stripe_link_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.wallets.list_agentcard_wallets_agentcard_wallets_get

- **Route**: `GET /agentcard/wallets`
- **Auth**: `api_key_header`
- **Signature**: `def list_agentcard_wallets_agentcard_wallets_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AgentCardWalletListResponse`
- **Returns (raw)**: `ApiResult[AgentCardWalletListResponse, ListAgentcardWalletsAgentcardWalletsGetErrorBody]`
- **Error**: `ListAgentcardWalletsAgentcardWalletsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AgentCardWalletListResponse` | `browser_use/models/agent_card_wallet_list_response.py` |
| `ListAgentcardWalletsAgentcardWalletsGetErrorBody` | `browser_use/errors/list_agentcard_wallets_agentcard_wallets_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

