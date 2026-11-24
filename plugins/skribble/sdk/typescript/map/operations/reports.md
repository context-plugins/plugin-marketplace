<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 2 operations · Request and error types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getReportsEtsi

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getReportsEtsi(request: Reports.GetReportsEtsiRequest, options?: RequestOptions): ApiPromise<undefined, Reports.GetReportsEtsiError>`
- **Wire**: `GET /reports/{id}/etsi`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Reports.GetReportsEtsiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [404] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [406] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi8"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetReportsEtsiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

### getSkribbleReport

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSkribbleReport(request: Reports.GetSkribbleReportRequest, options?: RequestOptions): ApiPromise<BinaryContent, Reports.GetSkribbleReportError>`
- **Wire**: `GET /reports/{id}/skribble`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Reports.GetSkribbleReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [404] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [406] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi8"` [502] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi9"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetSkribbleReportRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `lang` | `query` | — | `Lang` | no | `Lang.En` |
| `attachEtsiReport` | `query` | `attachETSIReport` | `boolean` | no | `false` |
| `timeZone` | `query` | — | `string` | no | `"UTC"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Lang` | `langSchema` | `src/models/lang.ts` |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

