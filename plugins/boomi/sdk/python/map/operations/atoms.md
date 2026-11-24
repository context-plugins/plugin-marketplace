<!-- Generated file — do not edit; regenerated with the SDK. -->

# Atoms — operations

Accessor: `client.atoms` · Source: `boomi/apis/atoms.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.atoms.delete_atom

- **Route**: `DELETE /Atom/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def delete_atom(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAtomErrorBody]`
- **Error**: `DeleteAtomErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAtomErrorBody` | `boomi/errors/delete_atom_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.atoms.get_atom

- **Route**: `GET /Atom/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def get_atom(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Atom`
- **Returns (raw)**: `ApiResult[Atom, GetAtomErrorBody]`
- **Error**: `GetAtomErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Atom` | `boomi/models/atom.py` |
| `GetAtomErrorBody` | `boomi/errors/get_atom_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.atoms.query_atoms

- **Route**: `POST /Atom/query`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def query_atoms(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AtomQueryResult`
- **Returns (raw)**: `ApiResult[AtomQueryResult, QueryAtomsErrorBody]`
- **Error**: `QueryAtomsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QueryRequest` | `boomi/models/query_request.py` |
| `QueryRequestDict` | `boomi/models/query_request.py` |
| `AtomQueryResult` | `boomi/models/atom_query_result.py` |
| `QueryAtomsErrorBody` | `boomi/errors/query_atoms_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.atoms.update_atom

- **Route**: `POST /Atom/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def update_atom(id_: str, body: AtomInput | AtomInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Atom`
- **Returns (raw)**: `ApiResult[Atom, UpdateAtomErrorBody]`
- **Error**: `UpdateAtomErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AtomInput` | `boomi/models/atom_input.py` |
| `AtomInputDict` | `boomi/models/atom_input.py` |
| `Atom` | `boomi/models/atom.py` |
| `UpdateAtomErrorBody` | `boomi/errors/update_atom_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

