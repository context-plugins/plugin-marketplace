<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rest — operations

Accessor: `client.rest` · Source: `src/resources/rest.ts` · 1 operation · Request and error types: namespace `Rest`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create

- **Server**: `defaultInstacartRestApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `create(request: Rest.CreateRequestParams, options?: RequestOptions): ApiPromise<undefined, Rest.CreateError>`
- **Wire**: `POST /rest/llm_integration/openapi/v2_1/recipes`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Rest.CreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Rest.CreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateRequest` | `createRequestSchema` | `src/models/create-request.ts` |

