<!-- Generated file — do not edit; regenerated with the SDK. -->

# RunnerApi — operations

Accessor: `client.runnerApi` · Source: `src/resources/runner-api.ts` · 1 operation · Request and error types: namespace `RunnerApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listRunners

- **Signature**: `listRunners(request?: RunnerApi.ListRunnersRequest, options?: RequestOptions): ApiPromise<RunnerResponse, RunnerApi.ListRunnersError>`
- **Wire**: `GET /runner`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RunnerResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `RunnerApi.ListRunnersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RunnerApi.ListRunnersRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `namespace` | `query` | — | `string` | no |
| `resourceClass` | `query` | `resource-class` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunnerResponse` | `runnerResponseSchema` | `src/models/runner-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

