<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerService — operations

Accessor: `client.partnerService` · Source: `src/resources/partner-service.ts` · 1 operation · Request and error types: namespace `PartnerService`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `semrush`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postApisV4AppCenterV2PartnerViewerStatus

- **Signature**: `postApisV4AppCenterV2PartnerViewerStatus(request?: PartnerService.PostApisV4AppCenterV2PartnerViewerStatusRequest, options?: RequestOptions): ApiPromise<ViewerStatusResponse, PartnerService.PostApisV4AppCenterV2PartnerViewerStatusError>`
- **Wire**: `POST /apis/v4/app-center/v2/partner/viewer-status`
- **Auth**: `jwtIssuerToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ViewerStatusResponse`
- **Error**: `SemrushError` with `kind: "api"`, an instance of `PartnerService.PostApisV4AppCenterV2PartnerViewerStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"error401"` [401] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerService.PostApisV4AppCenterV2PartnerViewerStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ViewerStatusRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ViewerStatusRequest` | `viewerStatusRequestSchema` | `src/models/viewer-status-request.ts` |
| `ViewerStatusResponse` | `viewerStatusResponseSchema` | `src/models/viewer-status-response.ts` |

