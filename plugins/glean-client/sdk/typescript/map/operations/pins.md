<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pins — operations

Accessor: `client.pins` · Source: `src/resources/pins.ts` · 5 operations · Request and error types: namespace `Pins`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### editpin

- **Signature**: `editpin(request: Pins.EditpinRequest, options?: RequestOptions): ApiPromise<PinDocument, Pins.EditpinError>`
- **Wire**: `POST /rest/api/v1/editpin`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PinDocument`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Pins.EditpinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pins.EditpinRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `EditPinRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EditPinRequest` | `editPinRequestSchema` | `src/models/edit-pin-request.ts` |
| `PinDocument` | `pinDocumentSchema` | `src/models/pin-document.ts` |

### getpin

- **Signature**: `getpin(request: Pins.GetpinRequest, options?: RequestOptions): ApiPromise<GetPinResponse, Pins.GetpinError>`
- **Wire**: `POST /rest/api/v1/getpin`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetPinResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Pins.GetpinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pins.GetpinRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetPinRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPinRequest` | `getPinRequestSchema` | `src/models/get-pin-request.ts` |
| `GetPinResponse` | `getPinResponseSchema` | `src/models/get-pin-response.ts` |

### listpins

- **Signature**: `listpins(request: Pins.ListpinsRequest, options?: RequestOptions): ApiPromise<ListPinsResponse, Pins.ListpinsError>`
- **Wire**: `POST /rest/api/v1/listpins`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListPinsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Pins.ListpinsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pins.ListpinsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPinsResponse` | `listPinsResponseSchema` | `src/models/list-pins-response.ts` |

### pin

- **Signature**: `pin(request: Pins.PinRequestParams, options?: RequestOptions): ApiPromise<PinDocument, Pins.PinError>`
- **Wire**: `POST /rest/api/v1/pin`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PinDocument`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Pins.PinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pins.PinRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `PinRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PinRequest` | `pinRequestSchema` | `src/models/pin-request.ts` |
| `PinDocument` | `pinDocumentSchema` | `src/models/pin-document.ts` |

### unpin

- **Signature**: `unpin(request: Pins.UnpinRequest, options?: RequestOptions): ApiPromise<undefined, Pins.UnpinError>`
- **Wire**: `POST /rest/api/v1/unpin`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Pins.UnpinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pins.UnpinRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `Unpin` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unpin` | `unpinSchema` | `src/models/unpin.ts` |

