<!-- Generated file — do not edit; regenerated with the SDK. -->

# Memory — operations

Accessor: `client.memory` · Source: `parallel/apis/memory.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.memory.clear_memory_v1beta_memory_clear_post

- **Route**: `POST /v1beta/memory/clear`
- **Auth**: `api_key_auth`
- **Signature**: `def clear_memory_v1beta_memory_clear_post(body: MemoryClearRequest | MemoryClearRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ClearMemoryV1BetaMemoryClearPostErrorBody]`
- **Error**: `ClearMemoryV1BetaMemoryClearPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemoryClearRequest` | `parallel/models/memory_clear_request.py` |
| `MemoryClearRequestDict` | `parallel/models/memory_clear_request.py` |
| `ClearMemoryV1BetaMemoryClearPostErrorBody` | `parallel/errors/clear_memory_v1_beta_memory_clear_post_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.memory.evict_memory_source_v1beta_memory_evict_post

- **Route**: `POST /v1beta/memory/evict`
- **Auth**: `api_key_auth`
- **Signature**: `def evict_memory_source_v1beta_memory_evict_post(body: MemoryEvictRequest | MemoryEvictRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, EvictMemorySourceV1BetaMemoryEvictPostErrorBody]`
- **Error**: `EvictMemorySourceV1BetaMemoryEvictPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemoryEvictRequest` | `parallel/models/memory_evict_request.py` |
| `MemoryEvictRequestDict` | `parallel/models/memory_evict_request.py` |
| `EvictMemorySourceV1BetaMemoryEvictPostErrorBody` | `parallel/errors/evict_memory_source_v1_beta_memory_evict_post_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.memory.retrieve_memory_v1beta_memory_retrieve_post

- **Route**: `POST /v1beta/memory/retrieve`
- **Auth**: `api_key_auth`
- **Signature**: `def retrieve_memory_v1beta_memory_retrieve_post(body: MemoryRetrieveRequest | MemoryRetrieveRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `MemoryRetrieveResponse`
- **Returns (raw)**: `ApiResult[MemoryRetrieveResponse, RetrieveMemoryV1BetaMemoryRetrievePostErrorBody]`
- **Error**: `RetrieveMemoryV1BetaMemoryRetrievePostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemoryRetrieveRequest` | `parallel/models/memory_retrieve_request.py` |
| `MemoryRetrieveRequestDict` | `parallel/models/memory_retrieve_request.py` |
| `MemoryRetrieveResponse` | `parallel/models/memory_retrieve_response.py` |
| `RetrieveMemoryV1BetaMemoryRetrievePostErrorBody` | `parallel/errors/retrieve_memory_v1_beta_memory_retrieve_post_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

