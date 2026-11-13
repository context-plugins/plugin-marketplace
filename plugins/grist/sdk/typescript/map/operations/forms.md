<!-- Generated file — do not edit; regenerated with the SDK. -->

# Forms — operations

Accessor: `client.forms` · Source: `src/resources/forms.ts` · 1 operation · Request and error types: namespace `Forms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFormData

- **Signature**: `getFormData(request: Forms.GetFormDataRequest, options?: RequestOptions): ApiPromise<DocsFormsResponse, Forms.GetFormDataError>`
- **Wire**: `GET /docs/{docId}/forms/{viewSectionId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocsFormsResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Forms.GetFormDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forms.GetFormDataRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `viewSectionId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsFormsResponse` | `docsFormsResponseSchema` | `src/models/docs-forms-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

