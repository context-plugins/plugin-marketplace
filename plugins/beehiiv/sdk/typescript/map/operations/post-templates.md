<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostTemplates — operations

Accessor: `client.postTemplates` · Source: `src/resources/post-templates.ts` · 1 operation · Request and error types: namespace `PostTemplates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index16

- **Signature**: `index16(request: PostTemplates.Index16Request, options?: RequestOptions): ApiPromise<PostTemplatesGetResponse, PostTemplates.Index16Error>`
- **Wire**: `GET /publications/{publicationId}/post_templates`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PostTemplatesGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `PostTemplates.Index16Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostTemplates.Index16Request` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `order` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `orderBy` | `query` | `order_by` | `string` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `PostTemplatesGetResponse` | `postTemplatesGetResponseSchema` | `src/models/post-templates-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

