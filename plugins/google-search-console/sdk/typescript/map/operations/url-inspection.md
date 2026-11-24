<!-- Generated file — do not edit; regenerated with the SDK. -->

# UrlInspection — operations

Accessor: `client.urlInspection` · Source: `src/resources/url-inspection.ts` · 1 operation · Request and error types: namespace `UrlInspection`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-search-console`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchconsoleUrlInspectionIndexInspect

- **Signature**: `searchconsoleUrlInspectionIndexInspect(request: UrlInspection.SearchconsoleUrlInspectionIndexInspectRequest, options?: RequestOptions): ApiPromise<InspectUrlIndexResponse, UrlInspection.SearchconsoleUrlInspectionIndexInspectError>`
- **Wire**: `POST /v1/urlInspection/index:inspect`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InspectUrlIndexResponse`
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `UrlInspection.SearchconsoleUrlInspectionIndexInspectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UrlInspection.SearchconsoleUrlInspectionIndexInspectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InspectUrlIndexRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InspectUrlIndexRequest` | `inspectUrlIndexRequestSchema` | `src/models/inspect-url-index-request.ts` |
| `InspectUrlIndexResponse` | `inspectUrlIndexResponseSchema` | `src/models/inspect-url-index-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

