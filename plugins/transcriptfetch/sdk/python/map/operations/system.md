<!-- Generated file — do not edit; regenerated with the SDK. -->

# System — operations

Accessor: `client.system` · Source: `transcript_fetch/apis/system.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.system.get_api_v2_health

- **Route**: `GET /api/v2/health`
- **Signature**: `def get_api_v2_health(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Health`
- **Returns (raw)**: `ApiResult[Health, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Health` | `transcript_fetch/models/health.py` |

### client.system.get_api_v2_me

- **Route**: `GET /api/v2/me`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v2_me(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, GetApiV2MeErrorBody]`
- **Error**: `GetApiV2MeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `GetApiV2MeErrorBody` | `transcript_fetch/errors/get_api_v2_me_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

### client.system.health_check

- **Route**: `GET /api/v1/health`
- **Signature**: `def health_check(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Health`
- **Returns (raw)**: `ApiResult[Health, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Health` | `transcript_fetch/models/health.py` |

### client.system.me

- **Route**: `GET /api/v1/me`
- **Auth**: `bearer_auth`
- **Signature**: `def me(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SuccessEnvelope`
- **Returns (raw)**: `ApiResult[SuccessEnvelope, MeErrorBody]`
- **Error**: `MeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessEnvelope` | `transcript_fetch/models/success_envelope.py` |
| `MeErrorBody` | `transcript_fetch/errors/me_error.py` |
| `ErrorEnvelope` | `transcript_fetch/models/error_envelope.py` |

