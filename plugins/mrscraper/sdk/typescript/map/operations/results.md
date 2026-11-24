<!-- Generated file — do not edit; regenerated with the SDK. -->

# Results — operations

Accessor: `client.results` · Source: `src/resources/results.ts` · 1 operation · Request types: namespace `Results`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mr-scraper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1ResultsResultId

- **Signature**: `getApiV1ResultsResultId(request: Results.GetApiV1ResultsResultIdRequest, options?: RequestOptions): ApiPromise<GetApiV1ResultsResultidResponse, ApiError>`
- **Wire**: `GET /api/v1/results/{resultId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetApiV1ResultsResultidResponse`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Results.GetApiV1ResultsResultIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resultId` | `path` | — | `string` | yes |
| `includeHtml` | `query` | `include_html` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetApiV1ResultsResultidResponse` | `getApiV1ResultsResultidResponseSchema` | `src/models/get-api-v1-results-resultid-response.ts` |

