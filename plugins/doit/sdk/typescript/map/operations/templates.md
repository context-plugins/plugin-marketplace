<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.templates` · Source: `src/resources/templates.ts` · 2 operations · Request and error types: namespace `Templates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCloudflowTemplate2

- **Signature**: `getCloudflowTemplate2(request: Templates.GetCloudflowTemplate2Request, options?: RequestOptions): ApiPromise<CloudflowTemplate, Templates.GetCloudflowTemplate2Error>`
- **Wire**: `GET /cloudflow/v1/templates/{templateId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowTemplate`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Templates.GetCloudflowTemplate2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.GetCloudflowTemplate2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `templateId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowTemplate` | `cloudflowTemplateSchema` | `src/models/cloudflow-template.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCloudflowTemplates2

- **Signature**: `listCloudflowTemplates2(request?: Templates.ListCloudflowTemplates2Request, options?: RequestOptions): ApiPromise<CloudflowTemplateListResponse, Templates.ListCloudflowTemplates2Error>`
- **Wire**: `GET /cloudflow/v1/templates`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowTemplateListResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Templates.ListCloudflowTemplates2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.ListCloudflowTemplates2Request` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowTemplateListResponse` | `cloudflowTemplateListResponseSchema` | `src/models/cloudflow-template-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

