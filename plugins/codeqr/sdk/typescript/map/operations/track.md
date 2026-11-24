<!-- Generated file — do not edit; regenerated with the SDK. -->

# Track — operations

Accessor: `client.track` · Source: `src/resources/track.ts` · 2 operations · Request and error types: namespace `Track`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `code-qr`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### trackLead

- **Signature**: `trackLead(request?: Track.TrackLeadRequestParams, options?: RequestOptions): ApiPromise<TrackLeadResponse, Track.TrackLeadError>`
- **Wire**: `POST /track/lead`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrackLeadResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Track.TrackLeadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Track.TrackLeadRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TrackLeadRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrackLeadRequest` | `trackLeadRequestSchema` | `src/models/track-lead-request.ts` |
| `TrackLeadResponse` | `trackLeadResponseSchema` | `src/models/track-lead-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### trackSale

- **Signature**: `trackSale(request?: Track.TrackSaleRequestParams, options?: RequestOptions): ApiPromise<TrackSaleResponse, Track.TrackSaleError>`
- **Wire**: `POST /track/sale`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrackSaleResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Track.TrackSaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Track.TrackSaleRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TrackSaleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrackSaleRequest` | `trackSaleRequestSchema` | `src/models/track-sale-request.ts` |
| `TrackSaleResponse` | `trackSaleResponseSchema` | `src/models/track-sale-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

