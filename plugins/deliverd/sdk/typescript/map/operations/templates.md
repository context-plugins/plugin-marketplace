<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.templates` · Source: `src/resources/templates.ts` · 1 operation · Request types: namespace `Templates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Templates

- **Signature**: `getApiV1Templates(options?: RequestOptions): ApiPromise<ApiV1TemplatesResponse, ApiError>`
- **Wire**: `GET /api/v1/templates`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1TemplatesResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TemplatesResponse` | `apiV1TemplatesResponseSchema` | `src/models/api-v1-templates-response.ts` |

