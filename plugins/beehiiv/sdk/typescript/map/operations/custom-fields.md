<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.customFields` · Source: `src/resources/custom-fields.ts` · 6 operations · Request and error types: namespace `CustomFields`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create4

- **Signature**: `create4(request: CustomFields.Create4Request, options?: RequestOptions): ApiPromise<CustomFieldResponse, CustomFields.Create4Error>`
- **Wire**: `POST /publications/{publicationId}/custom_fields`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `CustomFields.Create4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.Create4Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsCustomFieldsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsCustomFieldsRequest` | `publicationsCustomFieldsRequestSchema` | `src/models/publications-custom-fields-request.ts` |
| `CustomFieldResponse` | `customFieldResponseSchema` | `src/models/custom-field-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### delete

- **Signature**: `delete(request: CustomFields.DeleteRequest, options?: RequestOptions): ApiPromise<CustomFieldsDeleteResponse, CustomFields.DeleteError>`
- **Wire**: `DELETE /publications/{publicationId}/custom_fields/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldsDeleteResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `CustomFields.DeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.DeleteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldsDeleteResponse` | `customFieldsDeleteResponseSchema` | `src/models/custom-fields-delete-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index10

- **Signature**: `index10(request: CustomFields.Index10Request, options?: RequestOptions): ApiPromise<CustomFieldIndexResponse, CustomFields.Index10Error>`
- **Wire**: `GET /publications/{publicationId}/custom_fields`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomFieldIndexResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `CustomFields.Index10Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.Index10Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldIndexResponse` | `customFieldIndexResponseSchema` | `src/models/custom-field-index-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patch2

- **Signature**: `patch2(request: CustomFields.Patch2Request, options?: RequestOptions): ApiPromise<CustomFieldsPatchResponse, CustomFields.Patch2Error>`
- **Wire**: `PATCH /publications/{publicationId}/custom_fields/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldsPatchResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `CustomFields.Patch2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.Patch2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsCustomFieldsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsCustomFieldsRequest1` | `publicationsCustomFieldsRequest1Schema` | `src/models/publications-custom-fields-request1.ts` |
| `CustomFieldsPatchResponse` | `customFieldsPatchResponseSchema` | `src/models/custom-fields-patch-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### put2

- **Signature**: `put2(request: CustomFields.Put2Request, options?: RequestOptions): ApiPromise<CustomFieldResponse, CustomFields.Put2Error>`
- **Wire**: `PUT /publications/{publicationId}/custom_fields/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `CustomFields.Put2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.Put2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsCustomFieldsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsCustomFieldsRequest1` | `publicationsCustomFieldsRequest1Schema` | `src/models/publications-custom-fields-request1.ts` |
| `CustomFieldResponse` | `customFieldResponseSchema` | `src/models/custom-field-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show7

- **Signature**: `show7(request: CustomFields.Show7Request, options?: RequestOptions): ApiPromise<CustomFieldResponse, CustomFields.Show7Error>`
- **Wire**: `GET /publications/{publicationId}/custom_fields/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomFieldResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `CustomFields.Show7Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.Show7Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldResponse` | `customFieldResponseSchema` | `src/models/custom-field-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

