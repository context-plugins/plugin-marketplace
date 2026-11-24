<!-- Generated file — do not edit; regenerated with the SDK. -->

# BuyingGroup — operations

Accessor: `client.buyingGroup` · Source: `src/resources/buying-group.ts` · 1 operation · Request and error types: namespace `BuyingGroup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getContactsBuyingGroup

- **Signature**: `getContactsBuyingGroup(request: BuyingGroup.GetContactsBuyingGroupRequest, options?: RequestOptions): ApiPromise<V3BuyingGroupResponse, BuyingGroup.GetContactsBuyingGroupError>`
- **Wire**: `POST /v3/contacts/buying-group`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3BuyingGroupResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `BuyingGroup.GetContactsBuyingGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuyingGroup.GetContactsBuyingGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3BuyingGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3BuyingGroupRequest` | `v3BuyingGroupRequestSchema` | `src/models/v3-buying-group-request.ts` |
| `V3BuyingGroupResponse` | `v3BuyingGroupResponseSchema` | `src/models/v3-buying-group-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

