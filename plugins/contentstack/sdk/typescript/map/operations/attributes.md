<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attributes — operations

Accessor: `client.attributes` · Source: `src/resources/attributes.ts` · 4 operations · Request and error types: namespace `Attributes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAttribute

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createAttribute(request: Attributes.CreateAttributeRequestParams, options?: RequestOptions): ApiPromise<Attribute, Attributes.CreateAttributeError>`
- **Wire**: `POST /attributes`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Attribute`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Attributes.CreateAttributeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attributes.CreateAttributeRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `body` | `body` | — | `CreateAttributeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAttributeRequest` | `createAttributeRequestSchema` | `src/models/create-attribute-request.ts` |
| `Attribute` | `attributeSchema` | `src/models/attribute.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### deleteAttribute

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteAttribute(request: Attributes.DeleteAttributeRequest, options?: RequestOptions): ApiPromise<undefined, Attributes.DeleteAttributeError>`
- **Wire**: `DELETE /attributes/{id}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Attributes.DeleteAttributeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [404] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attributes.DeleteAttributeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### getAllAttributes

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllAttributes(request: Attributes.GetAllAttributesRequest, options?: RequestOptions): ApiPromise<AttributeList, Attributes.GetAllAttributesError>`
- **Wire**: `GET /attributes`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AttributeList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Attributes.GetAllAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attributes.GetAllAttributesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttributeList` | `attributeListSchema` | `src/models/attribute-list.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### updateAttribute

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateAttribute(request: Attributes.UpdateAttributeRequest, options?: RequestOptions): ApiPromise<Attribute, Attributes.UpdateAttributeError>`
- **Wire**: `PUT /attributes/{id}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Attribute`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Attributes.UpdateAttributeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi3"` [404] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attributes.UpdateAttributeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `body` | `body` | — | `CreateAttributeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAttributeRequest` | `createAttributeRequestSchema` | `src/models/create-attribute-request.ts` |
| `Attribute` | `attributeSchema` | `src/models/attribute.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

