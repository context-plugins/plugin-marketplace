<!-- Generated file — do not edit; regenerated with the SDK. -->

# Seal — operations

Accessor: `client.seal` · Source: `skribble/apis/seal.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.seal.seal_document

- **Route**: `POST /seal`
- **Auth**: `bearer`
- **Server**: `default_skribble_seal_api`
- **Signature**: `def seal_document(body: CreateSealRequest | CreateSealRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateSealResponse`
- **Returns (raw)**: `ApiResult[CreateSealResponse, SealDocumentErrorBody]`
- **Error**: `SealDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSealRequest` | `skribble/models/create_seal_request.py` |
| `CreateSealRequestDict` | `skribble/models/create_seal_request.py` |
| `CreateSealResponse` | `skribble/models/create_seal_response.py` |
| `SealDocumentErrorBody` | `skribble/errors/seal_document_error.py` |
| `Problem` | `skribble/models/problem.py` |

