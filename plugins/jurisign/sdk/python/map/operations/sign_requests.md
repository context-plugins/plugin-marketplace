<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignRequests — operations

Accessor: `client.sign_requests` · Source: `juri_sign/apis/sign_requests.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sign_requests.cancel_sign_request

- **Route**: `POST /sign-requests/{id}/cancel`
- **Auth**: `bearer_auth`
- **Signature**: `def cancel_sign_request(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SignRequestsCancelResponse`
- **Returns (raw)**: `ApiResult[SignRequestsCancelResponse, CancelSignRequestErrorBody]`
- **Error**: `CancelSignRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthenticated1` [401] · `NotFound1` [404] · `Error1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignRequestsCancelResponse` | `juri_sign/models/sign_requests_cancel_response.py` |
| `CancelSignRequestErrorBody` | `juri_sign/errors/cancel_sign_request_error.py` |
| `Unauthenticated1` | `juri_sign/models/unauthenticated1.py` |
| `NotFound1` | `juri_sign/models/not_found1.py` |
| `Error1` | `juri_sign/models/error1.py` |

### client.sign_requests.create_sign_request

- **Route**: `POST /sign-requests`
- **Auth**: `bearer_auth`
- **Signature**: `def create_sign_request(body: CreateSignRequestInput | CreateSignRequestInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SignRequestsResponse1`
- **Returns (raw)**: `ApiResult[SignRequestsResponse1, CreateSignRequestErrorBody]`
- **Error**: `CreateSignRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthenticated1` [401] · `ValidationError1` [422] · `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSignRequestInput` | `juri_sign/models/create_sign_request_input.py` |
| `CreateSignRequestInputDict` | `juri_sign/models/create_sign_request_input.py` |
| `SignRequestsResponse1` | `juri_sign/models/sign_requests_response1.py` |
| `CreateSignRequestErrorBody` | `juri_sign/errors/create_sign_request_error.py` |
| `Unauthenticated1` | `juri_sign/models/unauthenticated1.py` |
| `ValidationError1` | `juri_sign/models/validation_error1.py` |

### client.sign_requests.download_proof

- **Route**: `GET /sign-requests/{id}/proof`
- **Auth**: `bearer_auth`
- **Signature**: `def download_proof(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DownloadProofErrorBody]`
- **Error**: `DownloadProofErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthenticated1` [401] · `NotFound1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DownloadProofErrorBody` | `juri_sign/errors/download_proof_error.py` |
| `Unauthenticated1` | `juri_sign/models/unauthenticated1.py` |
| `NotFound1` | `juri_sign/models/not_found1.py` |

### client.sign_requests.download_signed_pdf

- **Route**: `GET /sign-requests/{id}/download`
- **Auth**: `bearer_auth`
- **Signature**: `def download_signed_pdf(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DownloadSignedPdfErrorBody]`
- **Error**: `DownloadSignedPdfErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthenticated1` [401] · `NotFound1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DownloadSignedPdfErrorBody` | `juri_sign/errors/download_signed_pdf_error.py` |
| `Unauthenticated1` | `juri_sign/models/unauthenticated1.py` |
| `NotFound1` | `juri_sign/models/not_found1.py` |

### client.sign_requests.get_sign_request

- **Route**: `GET /sign-requests/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_sign_request(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SignRequestsResponse2`
- **Returns (raw)**: `ApiResult[SignRequestsResponse2, GetSignRequestErrorBody]`
- **Error**: `GetSignRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthenticated1` [401] · `NotFound1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignRequestsResponse2` | `juri_sign/models/sign_requests_response2.py` |
| `GetSignRequestErrorBody` | `juri_sign/errors/get_sign_request_error.py` |
| `Unauthenticated1` | `juri_sign/models/unauthenticated1.py` |
| `NotFound1` | `juri_sign/models/not_found1.py` |

### client.sign_requests.list_sign_requests

- **Route**: `GET /sign-requests`
- **Auth**: `bearer_auth`
- **Signature**: `def list_sign_requests(*, status: StatusJuriSignSignRequestsApiOrStr | None = None, per_page: int | None = 20, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `per_page` — query · `page` — query
- **Returns (parsed)**: `SignRequestsResponse`
- **Returns (raw)**: `ApiResult[SignRequestsResponse, ListSignRequestsErrorBody]`
- **Error**: `ListSignRequestsErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthenticated1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusJuriSignSignRequestsApiOrStr` | `juri_sign/models/enums/status_juri_sign_sign_requests_api.py` |
| `SignRequestsResponse` | `juri_sign/models/sign_requests_response.py` |
| `ListSignRequestsErrorBody` | `juri_sign/errors/list_sign_requests_error.py` |
| `Unauthenticated1` | `juri_sign/models/unauthenticated1.py` |

### client.sign_requests.send_sign_request

- **Route**: `POST /sign-requests/{id}/send`
- **Auth**: `bearer_auth`
- **Signature**: `def send_sign_request(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SignRequestsSendResponse`
- **Returns (raw)**: `ApiResult[SignRequestsSendResponse, SendSignRequestErrorBody]`
- **Error**: `SendSignRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthenticated1` [401] · `NotFound1` [404] · `Error1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignRequestsSendResponse` | `juri_sign/models/sign_requests_send_response.py` |
| `SendSignRequestErrorBody` | `juri_sign/errors/send_sign_request_error.py` |
| `Unauthenticated1` | `juri_sign/models/unauthenticated1.py` |
| `NotFound1` | `juri_sign/models/not_found1.py` |
| `Error1` | `juri_sign/models/error1.py` |

