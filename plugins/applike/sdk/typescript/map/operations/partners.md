<!-- Generated file — do not edit; regenerated with the SDK. -->

# Partners — operations

Accessor: `client.partners` · Source: `src/resources/partners.ts` · 1 operation · Request and error types: namespace `Partners`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `applike`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postManagementV1Partners

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postManagementV1Partners(request?: Partners.PostManagementV1PartnersRequest, options?: RequestOptions): ApiPromise<ListPartnersResponse, Partners.PostManagementV1PartnersError>`
- **Wire**: `POST /management/v1/partners`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListPartnersResponse`
- **Error**: `ApplikeError` with `kind: "api"`, an instance of `Partners.PostManagementV1PartnersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Partners.PostManagementV1PartnersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListPartnersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPartnersRequest` | `listPartnersRequestSchema` | `src/models/list-partners-request.ts` |
| `ListPartnersResponse` | `listPartnersResponseSchema` | `src/models/list-partners-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

