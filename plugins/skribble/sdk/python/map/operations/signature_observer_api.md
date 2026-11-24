<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureObserverApi — operations

Accessor: `client.signature_observer_api` · Source: `skribble/apis/signature_observer_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signature_observer_api.add_signature_observer

- **Route**: `POST /signature-requests/{SR_ID}/observers`
- **Auth**: `bearer`
- **Server**: `default`
- **Signature**: `def add_signature_observer(sr_id: UUID, body: SignatureObserver | SignatureObserverDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `body`
- **Params**: `sr_id` — path `SR_ID` · `body` — JSON body
- **Returns (parsed)**: `SignatureObserverResponse`
- **Returns (raw)**: `ApiResult[SignatureObserverResponse, AddSignatureObserverErrorBody]`
- **Error**: `AddSignatureObserverErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureObserver` | `skribble/models/unions/signature_observer.py` |
| `SignatureObserverDict` | `skribble/models/unions/signature_observer.py` |
| `SignatureObserverResponse` | `skribble/models/unions/signature_observer_response.py` |
| `AddSignatureObserverErrorBody` | `skribble/errors/add_signature_observer_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_observer_api.delete_signature_observer

- **Route**: `DELETE /signature-requests/{SR_ID}/observers/{OBSERVER_ID}`
- **Auth**: `bearer`
- **Server**: `default`
- **Signature**: `def delete_signature_observer(sr_id: UUID, observer_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `observer_id`
- **Params**: `sr_id` — path `SR_ID` · `observer_id` — path `OBSERVER_ID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSignatureObserverErrorBody]`
- **Error**: `DeleteSignatureObserverErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSignatureObserverErrorBody` | `skribble/errors/delete_signature_observer_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_observer_api.get_signature_observer

- **Route**: `GET /signature-requests/{SR_ID}/observers/{OBSERVER_ID}`
- **Auth**: `bearer`
- **Server**: `default`
- **Signature**: `def get_signature_observer(sr_id: UUID, observer_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `observer_id`
- **Params**: `sr_id` — path `SR_ID` · `observer_id` — path `OBSERVER_ID`
- **Returns (parsed)**: `SignatureObserverResponse`
- **Returns (raw)**: `ApiResult[SignatureObserverResponse, GetSignatureObserverErrorBody]`
- **Error**: `GetSignatureObserverErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureObserverResponse` | `skribble/models/unions/signature_observer_response.py` |
| `GetSignatureObserverErrorBody` | `skribble/errors/get_signature_observer_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_observer_api.list_signature_observers

- **Route**: `GET /signature-requests/{SR_ID}/observers`
- **Auth**: `bearer`
- **Server**: `default`
- **Signature**: `def list_signature_observers(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID`
- **Returns (parsed)**: `list[SignatureObserverResponse]`
- **Returns (raw)**: `ApiResult[list[SignatureObserverResponse], ListSignatureObserversErrorBody]`
- **Error**: `ListSignatureObserversErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureObserverResponse` | `skribble/models/unions/signature_observer_response.py` |
| `ListSignatureObserversErrorBody` | `skribble/errors/list_signature_observers_error.py` |
| `Problem` | `skribble/models/problem.py` |

