<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalsApi — operations

Accessor: `client.terminalsApi` · Source: `src/resources/terminals-api.ts` · 6 operations · Request and error types: namespace `TerminalsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTerminal

- **Signature**: `getTerminal(request: TerminalsApi.GetTerminalRequest, options?: RequestOptions): ApiPromise<undefined, TerminalsApi.GetTerminalError>`
- **Wire**: `GET /v2/terminals/{terminalId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `TerminalsApi.GetTerminalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalsApi.GetTerminalRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `terminalId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listTerminals

- **Signature**: `listTerminals(request: TerminalsApi.ListTerminalsRequest, options?: RequestOptions): ApiPromise<undefined, TerminalsApi.ListTerminalsError>`
- **Wire**: `GET /v2/terminals`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `TerminalsApi.ListTerminalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalsApi.ListTerminalsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### terminalsGetPairingCode

- **Signature**: `terminalsGetPairingCode(request: TerminalsApi.TerminalsGetPairingCodeRequest, options?: RequestOptions): ApiPromise<undefined, TerminalsApi.TerminalsGetPairingCodeError>`
- **Wire**: `GET /v2/terminals/pairing-codes/{pairingCodeId}`
- **Auth**: any of `apiKey`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `TerminalsApi.TerminalsGetPairingCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalsApi.TerminalsGetPairingCodeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pairingCodeId` | `path` | — | `string` | yes |
| `include` | `query` | — | `string` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### terminalsListPairingCodes

- **Signature**: `terminalsListPairingCodes(request: TerminalsApi.TerminalsListPairingCodesRequest, options?: RequestOptions): ApiPromise<undefined, TerminalsApi.TerminalsListPairingCodesError>`
- **Wire**: `GET /v2/terminals/pairing-codes`
- **Auth**: any of `apiKey`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `TerminalsApi.TerminalsListPairingCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalsApi.TerminalsListPairingCodesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `profileId` | `query` | — | `string` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### terminalsRequestPairingCode

- **Signature**: `terminalsRequestPairingCode(request: TerminalsApi.TerminalsRequestPairingCodeRequest, options?: RequestOptions): ApiPromise<undefined, TerminalsApi.TerminalsRequestPairingCodeError>`
- **Wire**: `POST /v2/terminals/pairing-codes`
- **Auth**: any of `apiKey`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `TerminalsApi.TerminalsRequestPairingCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalsApi.TerminalsRequestPairingCodeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `include` | `query` | — | `string` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2TerminalsPairingCodesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2TerminalsPairingCodesRequest` | `v2TerminalsPairingCodesRequestSchema` | `src/models/v2-terminals-pairing-codes-request.ts` |

### terminalsRevokePairingCode

- **Signature**: `terminalsRevokePairingCode(request: TerminalsApi.TerminalsRevokePairingCodeRequest, options?: RequestOptions): ApiPromise<undefined, TerminalsApi.TerminalsRevokePairingCodeError>`
- **Wire**: `DELETE /v2/terminals/pairing-codes/{pairingCodeId}`
- **Auth**: any of `apiKey`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `TerminalsApi.TerminalsRevokePairingCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalsApi.TerminalsRevokePairingCodeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pairingCodeId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

