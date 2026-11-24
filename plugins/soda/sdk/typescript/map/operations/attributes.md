<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attributes — operations

Accessor: `client.attributes` · Source: `src/resources/attributes.ts` · 4 operations · Request and error types: namespace `Attributes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1AttributesAttributeId

- **Signature**: `deleteApiV1AttributesAttributeId(request: Attributes.DeleteApiV1AttributesAttributeIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteAttributeResponse, Attributes.DeleteApiV1AttributesAttributeIdError>`
- **Wire**: `DELETE /api/v1/attributes/{attributeId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteAttributeResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Attributes.DeleteApiV1AttributesAttributeIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attributes.DeleteApiV1AttributesAttributeIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `attributeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteAttributeResponse` | `publicApiDeleteAttributeResponseSchema` | `src/models/public-api-delete-attribute-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1Attributes

- **Signature**: `getApiV1Attributes(request?: Attributes.GetApiV1AttributesRequest, options?: RequestOptions): ApiPromise<PublicApiListAttributesResponse, Attributes.GetApiV1AttributesError>`
- **Wire**: `GET /api/v1/attributes`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListAttributesResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Attributes.GetApiV1AttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attributes.GetApiV1AttributesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `resourceType` | `query` | `AttributeResourceTypeDto` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttributeResourceTypeDto` | `attributeResourceTypeDtoSchema` | `src/models/attribute-resource-type-dto.ts` |
| `PublicApiListAttributesResponse` | `publicApiListAttributesResponseSchema` | `src/models/public-api-list-attributes-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1Attributes

- **Signature**: `postApiV1Attributes(request: Attributes.PostApiV1AttributesRequest, options?: RequestOptions): ApiPromise<PublicApiCreateAttributeResponse, Attributes.PostApiV1AttributesError>`
- **Wire**: `POST /api/v1/attributes`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiCreateAttributeResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Attributes.PostApiV1AttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attributes.PostApiV1AttributesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiCreateAttributeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateAttributeRequestDto` | `publicApiCreateAttributeRequestDtoSchema` | `src/models/public-api-create-attribute-request-dto.ts` |
| `PublicApiCreateAttributeResponse` | `publicApiCreateAttributeResponseSchema` | `src/models/public-api-create-attribute-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1AttributesAttributeId

- **Signature**: `postApiV1AttributesAttributeId(request: Attributes.PostApiV1AttributesAttributeIdRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateAttributeResponse, Attributes.PostApiV1AttributesAttributeIdError>`
- **Wire**: `POST /api/v1/attributes/{attributeId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateAttributeResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Attributes.PostApiV1AttributesAttributeIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attributes.PostApiV1AttributesAttributeIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `attributeId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateAttributeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateAttributeRequestDto` | `publicApiUpdateAttributeRequestDtoSchema` | `src/models/public-api-update-attribute-request-dto.ts` |
| `PublicApiUpdateAttributeResponse` | `publicApiUpdateAttributeResponseSchema` | `src/models/public-api-update-attribute-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

