<!-- Generated file — do not edit; regenerated with the SDK. -->

# LlmConfiguration — operations

Accessor: `client.llm_configuration` · Source: `contentstack/apis/llm_configuration.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.llm_configuration.configure_llm

- **Route**: `POST /v1/brand-kits/{brand_kit_uid}/llm-config`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def configure_llm(brand_kit_uid: str, organization_uid: str, body: CreateLlmConfigRequest | CreateLlmConfigRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `organization_uid`, `body`
- **Params**: `brand_kit_uid` — path · `organization_uid` — header · `body` — JSON body
- **Returns (parsed)**: `LlmConfig`
- **Returns (raw)**: `ApiResult[LlmConfig, ConfigureLlmErrorBody]`
- **Error**: `ConfigureLlmErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateLlmConfigRequest` | `contentstack/models/create_llm_config_request.py` |
| `CreateLlmConfigRequestDict` | `contentstack/models/create_llm_config_request.py` |
| `LlmConfig` | `contentstack/models/llm_config.py` |
| `ConfigureLlmErrorBody` | `contentstack/errors/configure_llm_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.llm_configuration.get_llm_config

- **Route**: `GET /v1/brand-kits/{brand_kit_uid}/llm-config`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def get_llm_config(brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `organization_uid`
- **Params**: `brand_kit_uid` — path · `organization_uid` — header
- **Returns (parsed)**: `LlmConfig`
- **Returns (raw)**: `ApiResult[LlmConfig, GetLlmConfigErrorBody]`
- **Error**: `GetLlmConfigErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LlmConfig` | `contentstack/models/llm_config.py` |
| `GetLlmConfigErrorBody` | `contentstack/errors/get_llm_config_error.py` |
| `Error` | `contentstack/models/error.py` |

