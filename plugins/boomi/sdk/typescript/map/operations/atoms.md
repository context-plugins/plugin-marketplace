<!-- Generated file — do not edit; regenerated with the SDK. -->

# Atoms — operations

Accessor: `client.atoms` · Source: `src/resources/atoms.ts` · 4 operations · Request and error types: namespace `Atoms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAtom

- **Signature**: `deleteAtom(request: Atoms.DeleteAtomRequest, options?: RequestOptions): ApiPromise<undefined, Atoms.DeleteAtomError>`
- **Wire**: `DELETE /Atom/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Atoms.DeleteAtomError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Atoms.DeleteAtomRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAtom

- **Signature**: `getAtom(request: Atoms.GetAtomRequest, options?: RequestOptions): ApiPromise<Atom, Atoms.GetAtomError>`
- **Wire**: `GET /Atom/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Atom`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Atoms.GetAtomError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Atoms.GetAtomRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Atom` | `atomSchema` | `src/models/atom.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### queryAtoms

- **Signature**: `queryAtoms(request: Atoms.QueryAtomsRequest, options?: RequestOptions): ApiPromise<AtomQueryResult, Atoms.QueryAtomsError>`
- **Wire**: `POST /Atom/query`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AtomQueryResult`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Atoms.QueryAtomsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Atoms.QueryAtomsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryRequest` | `queryRequestSchema` | `src/models/query-request.ts` |
| `AtomQueryResult` | `atomQueryResultSchema` | `src/models/atom-query-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateAtom

- **Signature**: `updateAtom(request: Atoms.UpdateAtomRequest, options?: RequestOptions): ApiPromise<Atom, Atoms.UpdateAtomError>`
- **Wire**: `POST /Atom/{id}`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Atom`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Atoms.UpdateAtomError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Atoms.UpdateAtomRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `AtomInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AtomInput` | `atomInputSchema` | `src/models/atom-input.ts` |
| `Atom` | `atomSchema` | `src/models/atom.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

