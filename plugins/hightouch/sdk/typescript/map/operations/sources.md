<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sources — operations

Accessor: `client.sources` · Source: `src/resources/sources.ts` · 4 operations · Request and error types: namespace `Sources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSource

- **Signature**: `createSource(request: Sources.CreateSourceRequest, options?: RequestOptions): ApiPromise<SourcesResponse1, Sources.CreateSourceError>`
- **Wire**: `POST /sources`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SourcesResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Sources.CreateSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"validateErrorJson"` [409] `ValidateErrorJson` · `"validateErrorJson2"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.CreateSourceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SourceCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceCreate` | `sourceCreateSchema` | `src/models/source-create.ts` |
| `SourcesResponse1` | `sourcesResponse1Schema` | `src/models/unions/sources-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### getSource

- **Signature**: `getSource(request: Sources.GetSourceRequest, options?: RequestOptions): ApiPromise<Source, Sources.GetSourceError>`
- **Wire**: `GET /sources/{sourceId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Source`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Sources.GetSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetSourceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourceId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Source` | `sourceSchema` | `src/models/source.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### listSource

- **Signature**: `listSource(request?: Sources.ListSourceRequest, options?: RequestOptions): ApiPromise<SourcesResponse, Sources.ListSourceError>`
- **Wire**: `GET /sources`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SourcesResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Sources.ListSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.ListSourceRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `name` | `query` | `string` | no | — |
| `slug` | `query` | `string` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `100` |
| `orderBy` | `query` | `OrderByHightouchDestinationsApi` | no | `OrderByHightouchDestinationsApi.Id` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByHightouchDestinationsApi` | `orderByHightouchDestinationsApiSchema` | `src/models/order-by-hightouch-destinations-api.ts` |
| `SourcesResponse` | `sourcesResponseSchema` | `src/models/sources-response.ts` |

### updateSource

- **Signature**: `updateSource(request: Sources.UpdateSourceRequest, options?: RequestOptions): ApiPromise<SourcesResponse1, Sources.UpdateSourceError>`
- **Wire**: `PATCH /sources/{sourceId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SourcesResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Sources.UpdateSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.UpdateSourceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourceId` | `path` | `number` | yes |
| `body` | `body` | `SourceUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceUpdate` | `sourceUpdateSchema` | `src/models/source-update.ts` |
| `SourcesResponse1` | `sourcesResponse1Schema` | `src/models/unions/sources-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

