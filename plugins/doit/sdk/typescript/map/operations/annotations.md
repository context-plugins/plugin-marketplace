<!-- Generated file — do not edit; regenerated with the SDK. -->

# Annotations — operations

Accessor: `client.annotations` · Source: `src/resources/annotations.ts` · 5 operations · Request and error types: namespace `Annotations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAnnotation

- **Signature**: `createAnnotation(request: Annotations.CreateAnnotationRequestParams, options?: RequestOptions): ApiPromise<AnnotationListItem, Annotations.CreateAnnotationError>`
- **Wire**: `POST /analytics/v1/annotations`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnnotationListItem`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Annotations.CreateAnnotationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Annotations.CreateAnnotationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateAnnotationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAnnotationRequest` | `createAnnotationRequestSchema` | `src/models/create-annotation-request.ts` |
| `AnnotationListItem` | `annotationListItemSchema` | `src/models/annotation-list-item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAnnotation

- **Signature**: `deleteAnnotation(request: Annotations.DeleteAnnotationRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Annotations.DeleteAnnotationError>`
- **Wire**: `DELETE /analytics/v1/annotations/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Annotations.DeleteAnnotationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Annotations.DeleteAnnotationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAnnotation

- **Signature**: `getAnnotation(request: Annotations.GetAnnotationRequest, options?: RequestOptions): ApiPromise<AnnotationListItem, Annotations.GetAnnotationError>`
- **Wire**: `GET /analytics/v1/annotations/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnnotationListItem`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Annotations.GetAnnotationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Annotations.GetAnnotationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnnotationListItem` | `annotationListItemSchema` | `src/models/annotation-list-item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAnnotations

- **Signature**: `listAnnotations(request?: Annotations.ListAnnotationsRequest, options?: RequestOptions): ApiPromise<AnalyticsV1AnnotationsResponse, Annotations.ListAnnotationsError>`
- **Wire**: `GET /analytics/v1/annotations`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsV1AnnotationsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Annotations.ListAnnotationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Annotations.ListAnnotationsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `sortBy` | `query` | `SortByDoiTAnnotationsApi` | no | — |
| `sortOrder` | `query` | `SortOrder` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortByDoiTAnnotationsApi` | `sortByDoiTAnnotationsApiSchema` | `src/models/sort-by-doi-tannotations-api.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `AnalyticsV1AnnotationsResponse` | `analyticsV1AnnotationsResponseSchema` | `src/models/analytics-v1-annotations-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateAnnotation

- **Signature**: `updateAnnotation(request: Annotations.UpdateAnnotationRequestParams, options?: RequestOptions): ApiPromise<AnnotationListItem, Annotations.UpdateAnnotationError>`
- **Wire**: `PATCH /analytics/v1/annotations/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnnotationListItem`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Annotations.UpdateAnnotationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Annotations.UpdateAnnotationRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateAnnotationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAnnotationRequest` | `updateAnnotationRequestSchema` | `src/models/update-annotation-request.ts` |
| `AnnotationListItem` | `annotationListItemSchema` | `src/models/annotation-list-item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

