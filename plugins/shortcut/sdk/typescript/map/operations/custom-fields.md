<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.customFields` · Source: `src/resources/custom-fields.ts` · 4 operations · Request and error types: namespace `CustomFields`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteCustomField

- **Signature**: `deleteCustomField(request: CustomFields.DeleteCustomFieldRequest, options?: RequestOptions): ApiPromise<undefined, CustomFields.DeleteCustomFieldError>`
- **Wire**: `DELETE /api/v3/custom-fields/{custom-field-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `CustomFields.DeleteCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.DeleteCustomFieldRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customFieldPublicId` | `path` | `custom-field-public-id` | `string` | yes |

### getCustomField

- **Signature**: `getCustomField(request: CustomFields.GetCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomField, CustomFields.GetCustomFieldError>`
- **Wire**: `GET /api/v3/custom-fields/{custom-field-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomField`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `CustomFields.GetCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.GetCustomFieldRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customFieldPublicId` | `path` | `custom-field-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomField` | `customFieldSchema` | `src/models/custom-field.ts` |

### listCustomFields

- **Signature**: `listCustomFields(options?: RequestOptions): ApiPromise<CustomField[], CustomFields.ListCustomFieldsError>`
- **Wire**: `GET /api/v3/custom-fields`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomField[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `CustomFields.ListCustomFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomField` | `customFieldSchema` | `src/models/custom-field.ts` |

### updateCustomField

- **Signature**: `updateCustomField(request: CustomFields.UpdateCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomField, CustomFields.UpdateCustomFieldError>`
- **Wire**: `PUT /api/v3/custom-fields/{custom-field-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomField`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `CustomFields.UpdateCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"dataConflictError"` [409] `DataConflictError` · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.UpdateCustomFieldRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customFieldPublicId` | `path` | `custom-field-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateCustomField` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomField` | `updateCustomFieldSchema` | `src/models/update-custom-field.ts` |
| `CustomField` | `customFieldSchema` | `src/models/custom-field.ts` |
| `DataConflictError` | `dataConflictErrorSchema` | `src/models/data-conflict-error.ts` |

