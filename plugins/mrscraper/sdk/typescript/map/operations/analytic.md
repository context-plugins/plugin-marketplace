<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytic — operations

Accessor: `client.analytic` · Source: `src/resources/analytic.ts` · 1 operation · Request types: namespace `Analytic`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mr-scraper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1AnalyticStatuses

- **Signature**: `getApiV1AnalyticStatuses(request?: Analytic.GetApiV1AnalyticStatusesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/v1/analytic/statuses`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Analytic.GetApiV1AnalyticStatusesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiTokenName` | `query` | `string` | no |
| `domain` | `query` | `string` | no |
| `endDate` | `query` | `string` | no |
| `startDate` | `query` | `string` | no |

