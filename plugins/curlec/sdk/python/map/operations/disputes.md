<!-- Generated file — do not edit; regenerated with the SDK. -->

# Disputes — operations

Accessor: `client.disputes` · Source: `curlec/apis/disputes.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.disputes.accept_dispute

- **Route**: `POST /disputes/{id}/accept`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def accept_dispute(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Dispute`
- **Returns (raw)**: `ApiResult[Dispute, AcceptDisputeErrorBody]`
- **Error**: `AcceptDisputeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Dispute` | `curlec/models/dispute.py` |
| `AcceptDisputeErrorBody` | `curlec/errors/accept_dispute_error.py` |
| `Error` | `curlec/models/error.py` |

### client.disputes.contest_dispute

- **Route**: `PATCH /disputes/{id}/contest`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def contest_dispute(id_: str, body: DisputesContestRequest | DisputesContestRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Dispute`
- **Returns (raw)**: `ApiResult[Dispute, ContestDisputeErrorBody]`
- **Error**: `ContestDisputeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DisputesContestRequest` | `curlec/models/disputes_contest_request.py` |
| `DisputesContestRequestDict` | `curlec/models/disputes_contest_request.py` |
| `Dispute` | `curlec/models/dispute.py` |
| `ContestDisputeErrorBody` | `curlec/errors/contest_dispute_error.py` |
| `Error` | `curlec/models/error.py` |

### client.disputes.fetch_all_disputes

- **Route**: `GET /disputes`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_all_disputes(*, count: int | None = 10, skip: int | None = 0, expand: ExpandOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `skip` — query · `expand` — query `expand[]`
- **Returns (parsed)**: `DisputesResponse`
- **Returns (raw)**: `ApiResult[DisputesResponse, FetchAllDisputesErrorBody]`
- **Error**: `FetchAllDisputesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExpandOrStr` | `curlec/models/enums/expand.py` |
| `DisputesResponse` | `curlec/models/disputes_response.py` |
| `FetchAllDisputesErrorBody` | `curlec/errors/fetch_all_disputes_error.py` |
| `Error` | `curlec/models/error.py` |

### client.disputes.fetch_dispute

- **Route**: `GET /disputes/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_dispute(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Dispute`
- **Returns (raw)**: `ApiResult[Dispute, FetchDisputeErrorBody]`
- **Error**: `FetchDisputeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Dispute` | `curlec/models/dispute.py` |
| `FetchDisputeErrorBody` | `curlec/errors/fetch_dispute_error.py` |
| `Error` | `curlec/models/error.py` |

