<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudIncidents — operations

Accessor: `client.cloudIncidents` · Source: `src/resources/cloud-incidents.ts` · 2 operations · Request and error types: namespace `CloudIncidents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getKnownIssue

- **Signature**: `getKnownIssue(request: CloudIncidents.GetKnownIssueRequest, options?: RequestOptions): ApiPromise<CoreV1CloudincidentsResponse1, CloudIncidents.GetKnownIssueError>`
- **Wire**: `GET /core/v1/cloudincidents/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoreV1CloudincidentsResponse1`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudIncidents.GetKnownIssueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudIncidents.GetKnownIssueRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CoreV1CloudincidentsResponse1` | `coreV1CloudincidentsResponse1Schema` | `src/models/core-v1-cloudincidents-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listKnownIssues

- **Signature**: `listKnownIssues(request?: CloudIncidents.ListKnownIssuesRequest, options?: RequestOptions): ApiPromise<CoreV1CloudincidentsResponse, CloudIncidents.ListKnownIssuesError>`
- **Wire**: `GET /core/v1/cloudincidents`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoreV1CloudincidentsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudIncidents.ListKnownIssuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudIncidents.ListKnownIssuesRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `minCreationTime` | `query` | `string` | no | — |
| `maxCreationTime` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CoreV1CloudincidentsResponse` | `coreV1CloudincidentsResponseSchema` | `src/models/core-v1-cloudincidents-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

