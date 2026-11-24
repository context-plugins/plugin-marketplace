<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContentTypes — operations

Accessor: `client.contentTypes` · Source: `src/resources/content-types.ts` · 5 operations · Request and error types: namespace `ContentTypes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createContentType

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createContentType(request: ContentTypes.CreateContentTypeRequestParams, options?: RequestOptions): ApiPromise<ContentType2, ContentTypes.CreateContentTypeError>`
- **Wire**: `POST /content_types`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContentType2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ContentTypes.CreateContentTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContentTypes.CreateContentTypeRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `body` | `body` | — | `CreateContentTypeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateContentTypeRequest` | `createContentTypeRequestSchema` | `src/models/create-content-type-request.ts` |
| `ContentType2` | `contentType2Schema` | `src/models/content-type2.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### deleteContentType

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteContentType(request: ContentTypes.DeleteContentTypeRequest, options?: RequestOptions): ApiPromise<undefined, ContentTypes.DeleteContentTypeError>`
- **Wire**: `DELETE /content_types/{content_type_uid}`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ContentTypes.DeleteContentTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"errorContentstackAssetsApi2"` [404] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContentTypes.DeleteContentTypeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `apiKey` | `header` | `api_key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### getAllContentTypes

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllContentTypes(request: ContentTypes.GetAllContentTypesRequest, options?: RequestOptions): ApiPromise<ContentTypeList, ContentTypes.GetAllContentTypesError>`
- **Wire**: `GET /content_types`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContentTypeList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ContentTypes.GetAllContentTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContentTypes.GetAllContentTypesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includeCount` | `query` | `include_count` | `boolean` | no |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `accessToken` | `header` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentTypeList` | `contentTypeListSchema` | `src/models/content-type-list.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### getSingleContentType

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSingleContentType(request: ContentTypes.GetSingleContentTypeRequest, options?: RequestOptions): ApiPromise<ContentType, ContentTypes.GetSingleContentTypeError>`
- **Wire**: `GET /content_types/{content_type_uid}`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContentType`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ContentTypes.GetSingleContentTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"errorContentstackAssetsApi2"` [404] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContentTypes.GetSingleContentTypeRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `version` | `query` | — | `number` | no |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `accessToken` | `header` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### updateContentType

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateContentType(request: ContentTypes.UpdateContentTypeRequest, options?: RequestOptions): ApiPromise<ContentType2, ContentTypes.UpdateContentTypeError>`
- **Wire**: `PUT /content_types/{content_type_uid}`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContentType2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ContentTypes.UpdateContentTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContentTypes.UpdateContentTypeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentTypeUid` | `path` | `content_type_uid` | `string` | yes |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `body` | `body` | — | `CreateContentTypeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateContentTypeRequest` | `createContentTypeRequestSchema` | `src/models/create-content-type-request.ts` |
| `ContentType2` | `contentType2Schema` | `src/models/content-type2.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

