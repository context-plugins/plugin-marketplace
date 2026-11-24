<!-- Generated file — do not edit; regenerated with the SDK. -->

# Collections — operations

Accessor: `client.collections` · Source: `src/resources/collections.ts` · 4 operations · Request and error types: namespace `Collections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Collections

- **Signature**: `getApiV1Collections(request?: Collections.GetApiV1CollectionsRequest, options?: RequestOptions): ApiPromise<ApiV1CollectionsResponse1, ApiError>`
- **Wire**: `GET /api/v1/collections`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CollectionsResponse1`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Collections.GetApiV1CollectionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |
| `status` | `query` | `StatusDeliverdDevCollectionsApi` | no |
| `externalId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusDeliverdDevCollectionsApi` | `statusDeliverdDevCollectionsApiSchema` | `src/models/status-deliverd-dev-collections-api.ts` |
| `ApiV1CollectionsResponse1` | `apiV1CollectionsResponse1Schema` | `src/models/api-v1-collections-response1.ts` |

### getApiV1CollectionsById

- **Signature**: `getApiV1CollectionsById(request: Collections.GetApiV1CollectionsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1CollectionsResponse, Collections.GetApiV1CollectionsByIdError>`
- **Wire**: `GET /api/v1/collections/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CollectionsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Collections.GetApiV1CollectionsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.GetApiV1CollectionsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CollectionsResponse` | `apiV1CollectionsResponseSchema` | `src/models/api-v1-collections-response.ts` |

### postApiV1Collections

- **Signature**: `postApiV1Collections(request?: Collections.PostApiV1CollectionsRequest, options?: RequestOptions): ApiPromise<ApiV1CollectionsResponse, Collections.PostApiV1CollectionsError>`
- **Wire**: `POST /api/v1/collections`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CollectionsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Collections.PostApiV1CollectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.PostApiV1CollectionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1CollectionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CollectionsRequest` | `apiV1CollectionsRequestSchema` | `src/models/api-v1-collections-request.ts` |
| `ApiV1CollectionsResponse` | `apiV1CollectionsResponseSchema` | `src/models/api-v1-collections-response.ts` |

### postApiV1CollectionsByIdCancel

- **Signature**: `postApiV1CollectionsByIdCancel(request: Collections.PostApiV1CollectionsByIdCancelRequest, options?: RequestOptions): ApiPromise<ApiV1CollectionsCancelResponse, Collections.PostApiV1CollectionsByIdCancelError>`
- **Wire**: `POST /api/v1/collections/{id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CollectionsCancelResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Collections.PostApiV1CollectionsByIdCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Collections.PostApiV1CollectionsByIdCancelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CollectionsCancelResponse` | `apiV1CollectionsCancelResponseSchema` | `src/models/api-v1-collections-cancel-response.ts` |

