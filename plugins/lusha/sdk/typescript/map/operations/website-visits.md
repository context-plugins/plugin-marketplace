<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebsiteVisits — operations

Accessor: `client.websiteVisits` · Source: `src/resources/website-visits.ts` · 1 operation · Request and error types: namespace `WebsiteVisits`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getWebsiteVisits

- **Signature**: `getWebsiteVisits(request: WebsiteVisits.GetWebsiteVisitsRequest, options?: RequestOptions): ApiPromise<WebsiteVisitsResponse, WebsiteVisits.GetWebsiteVisitsError>`
- **Wire**: `POST /v3/companies/website-visits`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebsiteVisitsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `WebsiteVisits.GetWebsiteVisitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebsiteVisits.GetWebsiteVisitsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WebsiteVisitsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebsiteVisitsRequest` | `websiteVisitsRequestSchema` | `src/models/website-visits-request.ts` |
| `WebsiteVisitsResponse` | `websiteVisitsResponseSchema` | `src/models/website-visits-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

