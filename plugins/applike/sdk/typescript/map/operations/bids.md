<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bids — operations

Accessor: `client.bids` · Source: `src/resources/bids.ts` · 2 operations · Request and error types: namespace `Bids`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `applike`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postManagementV1Bids

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postManagementV1Bids(request?: Bids.PostManagementV1BidsRequest, options?: RequestOptions): ApiPromise<ListBidsResponse, Bids.PostManagementV1BidsError>`
- **Wire**: `POST /management/v1/bids`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBidsResponse`
- **Error**: `ApplikeError` with `kind: "api"`, an instance of `Bids.PostManagementV1BidsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bids.PostManagementV1BidsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListBidsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBidsRequest` | `listBidsRequestSchema` | `src/models/list-bids-request.ts` |
| `ListBidsResponse` | `listBidsResponseSchema` | `src/models/list-bids-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postManagementV1BidsUpload

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postManagementV1BidsUpload(request?: Bids.PostManagementV1BidsUploadRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Bids.PostManagementV1BidsUploadError>`
- **Wire**: `POST /management/v1/bids/upload`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApplikeError` with `kind: "api"`, an instance of `Bids.PostManagementV1BidsUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"uploadBidsInvalidBidResponse"` [400] `UploadBidsInvalidBidResponse` · `"errorResponse"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bids.PostManagementV1BidsUploadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadBidInput[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadBidInput` | `uploadBidInputSchema` | `src/models/upload-bid-input.ts` |
| `UploadBidsInvalidBidResponse` | `uploadBidsInvalidBidResponseSchema` | `src/models/upload-bids-invalid-bid-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

