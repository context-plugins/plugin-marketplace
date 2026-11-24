<!-- Generated file — do not edit; regenerated with the SDK. -->

# UrlTestingTools — operations

Accessor: `client.urlTestingTools` · Source: `src/resources/url-testing-tools.ts` · 1 operation · Request and error types: namespace `UrlTestingTools`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-search-console`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchconsoleUrlTestingToolsMobileFriendlyTestRun

- **Signature**: `searchconsoleUrlTestingToolsMobileFriendlyTestRun(request: UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest, options?: RequestOptions): ApiPromise<RunMobileFriendlyTestResponse, UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunError>`
- **Wire**: `POST /v1/urlTestingTools/mobileFriendlyTest:run`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RunMobileFriendlyTestResponse`
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RunMobileFriendlyTestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunMobileFriendlyTestRequest` | `runMobileFriendlyTestRequestSchema` | `src/models/run-mobile-friendly-test-request.ts` |
| `RunMobileFriendlyTestResponse` | `runMobileFriendlyTestResponseSchema` | `src/models/run-mobile-friendly-test-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

