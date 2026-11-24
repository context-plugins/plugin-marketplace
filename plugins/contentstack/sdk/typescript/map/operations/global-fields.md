<!-- Generated file — do not edit; regenerated with the SDK. -->

# GlobalFields — operations

Accessor: `client.globalFields` · Source: `src/resources/global-fields.ts` · 2 operations · Request and error types: namespace `GlobalFields`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllGlobalFields

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllGlobalFields(request: GlobalFields.GetAllGlobalFieldsRequest, options?: RequestOptions): ApiPromise<GlobalFieldList, GlobalFields.GetAllGlobalFieldsError>`
- **Wire**: `GET /global_fields`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GlobalFieldList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `GlobalFields.GetAllGlobalFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GlobalFields.GetAllGlobalFieldsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `accessToken` | `header` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GlobalFieldList` | `globalFieldListSchema` | `src/models/global-field-list.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### getSingleGlobalField

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSingleGlobalField(request: GlobalFields.GetSingleGlobalFieldRequest, options?: RequestOptions): ApiPromise<GlobalField, GlobalFields.GetSingleGlobalFieldError>`
- **Wire**: `GET /global_fields/{global_field_uid}`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GlobalField`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `GlobalFields.GetSingleGlobalFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"errorContentstackAssetsApi2"` [404] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GlobalFields.GetSingleGlobalFieldRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `globalFieldUid` | `path` | `global_field_uid` | `string` | yes |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `accessToken` | `header` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GlobalField` | `globalFieldSchema` | `src/models/global-field.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

