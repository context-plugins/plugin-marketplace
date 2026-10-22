<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.usage` · Source: `src/resources/usage.ts` · 1 operation · Request and error types: namespace `Usage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUsage

- **Signature**: `getUsage(request: Usage.GetUsageRequest, options?: RequestOptions): ApiPromise<UsageResponse, Usage.GetUsageError>`
- **Wire**: `GET /v1_1/{cloud_name}/usage`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Usage.GetUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Usage.GetUsageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `date` | `query` | — | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageResponse` | `usageResponseSchema` | `src/models/usage-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

