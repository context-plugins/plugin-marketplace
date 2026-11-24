<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomCategoriesApi — operations

Accessor: `client.customCategoriesApi` · Source: `src/resources/custom-categories-api.ts` · 8 operations · Request and error types: namespace `CustomCategoriesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dope-security`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addCustomCategoryUrls

- **Signature**: `addCustomCategoryUrls(request: CustomCategoriesApi.AddCustomCategoryUrlsRequest, options?: RequestOptions): ApiPromise<SuccessMessage, CustomCategoriesApi.AddCustomCategoryUrlsError>`
- **Wire**: `POST /custom_categories/{custom_category_name}/urls`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `CustomCategoriesApi.AddCustomCategoryUrlsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomCategoriesApi.AddCustomCategoryUrlsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customCategoryName` | `path` | `custom_category_name` | `string` | yes |
| `body` | `body` | — | `CustomCategoriesUrlsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomCategoriesUrlsRequest` | `customCategoriesUrlsRequestSchema` | `src/models/custom-categories-urls-request.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### createCustomCategory

- **Signature**: `createCustomCategory(request: CustomCategoriesApi.CreateCustomCategoryRequest, options?: RequestOptions): ApiPromise<SuccessMessage, CustomCategoriesApi.CreateCustomCategoryError>`
- **Wire**: `POST /custom_categories/{custom_category_name}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `CustomCategoriesApi.CreateCustomCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomCategoriesApi.CreateCustomCategoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customCategoryName` | `path` | `custom_category_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### deleteAllCustomCategoryUrls

- **Signature**: `deleteAllCustomCategoryUrls(request: CustomCategoriesApi.DeleteAllCustomCategoryUrlsRequest, options?: RequestOptions): ApiPromise<SuccessMessage, CustomCategoriesApi.DeleteAllCustomCategoryUrlsError>`
- **Wire**: `DELETE /custom_categories/{custom_category_name}/urls`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `CustomCategoriesApi.DeleteAllCustomCategoryUrlsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomCategoriesApi.DeleteAllCustomCategoryUrlsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customCategoryName` | `path` | `custom_category_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### deleteCustomCategory

- **Signature**: `deleteCustomCategory(request: CustomCategoriesApi.DeleteCustomCategoryRequest, options?: RequestOptions): ApiPromise<SuccessMessage, CustomCategoriesApi.DeleteCustomCategoryError>`
- **Wire**: `DELETE /custom_categories/{custom_category_name}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `CustomCategoriesApi.DeleteCustomCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomCategoriesApi.DeleteCustomCategoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customCategoryName` | `path` | `custom_category_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### deleteCustomCategoryUrl

- **Signature**: `deleteCustomCategoryUrl(request: CustomCategoriesApi.DeleteCustomCategoryUrlRequest, options?: RequestOptions): ApiPromise<SuccessMessage, CustomCategoriesApi.DeleteCustomCategoryUrlError>`
- **Wire**: `DELETE /custom_categories/{custom_category_name}/url/{encoded_url}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `CustomCategoriesApi.DeleteCustomCategoryUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomCategoriesApi.DeleteCustomCategoryUrlRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customCategoryName` | `path` | `custom_category_name` | `string` | yes |
| `encodedUrl` | `path` | `encoded_url` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### listCustomCategories

- **Signature**: `listCustomCategories(request?: CustomCategoriesApi.ListCustomCategoriesRequest, options?: RequestOptions): ApiPromise<CustomCategoriesResponse, CustomCategoriesApi.ListCustomCategoriesError>`
- **Wire**: `GET /custom_categories`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomCategoriesResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `CustomCategoriesApi.ListCustomCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [403] `Errors` · `"errors2"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomCategoriesApi.ListCustomCategoriesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `first` | `query` | `number` | no | `50` |
| `after` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomCategoriesResponse` | `customCategoriesResponseSchema` | `src/models/custom-categories-response.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### listCustomCategoryUrls

- **Signature**: `listCustomCategoryUrls(request: CustomCategoriesApi.ListCustomCategoryUrlsRequest, options?: RequestOptions): ApiPromise<CustomCategoriesUrlsResponse, CustomCategoriesApi.ListCustomCategoryUrlsError>`
- **Wire**: `GET /custom_categories/{custom_category_name}/urls`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomCategoriesUrlsResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `CustomCategoriesApi.ListCustomCategoryUrlsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomCategoriesApi.ListCustomCategoryUrlsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customCategoryName` | `path` | `custom_category_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomCategoriesUrlsResponse` | `customCategoriesUrlsResponseSchema` | `src/models/custom-categories-urls-response.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

### overwriteCustomCategoryUrls

- **Signature**: `overwriteCustomCategoryUrls(request: CustomCategoriesApi.OverwriteCustomCategoryUrlsRequest, options?: RequestOptions): ApiPromise<SuccessMessage, CustomCategoriesApi.OverwriteCustomCategoryUrlsError>`
- **Wire**: `PUT /custom_categories/{custom_category_name}/urls`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessMessage`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `CustomCategoriesApi.OverwriteCustomCategoryUrlsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomCategoriesApi.OverwriteCustomCategoryUrlsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customCategoryName` | `path` | `custom_category_name` | `string` | yes |
| `body` | `body` | — | `CustomCategoriesUrlsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomCategoriesUrlsRequest` | `customCategoriesUrlsRequestSchema` | `src/models/custom-categories-urls-request.ts` |
| `SuccessMessage` | `successMessageSchema` | `src/models/success-message.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

