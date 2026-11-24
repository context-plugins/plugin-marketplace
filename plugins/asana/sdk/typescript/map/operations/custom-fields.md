<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.customFields` · Source: `src/resources/custom-fields.ts` · 8 operations · Request and error types: namespace `CustomFields`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomField

- **Signature**: `createCustomField(request?: CustomFields.CreateCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomFieldsResponse, CustomFields.CreateCustomFieldError>`
- **Wire**: `POST /custom_fields`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFields.CreateCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.CreateCustomFieldRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `body` | `body` | — | `CustomFieldsRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldsRequest` | `customFieldsRequestSchema` | `src/models/custom-fields-request.ts` |
| `CustomFieldsResponse` | `customFieldsResponseSchema` | `src/models/custom-fields-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createEnumOptionForCustomField

- **Signature**: `createEnumOptionForCustomField(request: CustomFields.CreateEnumOptionForCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomFieldsEnumOptionsResponse, CustomFields.CreateEnumOptionForCustomFieldError>`
- **Wire**: `POST /custom_fields/{custom_field_gid}/enum_options`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldsEnumOptionsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFields.CreateEnumOptionForCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.CreateEnumOptionForCustomFieldRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `customFieldGid` | `path` | `custom_field_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `body` | `body` | — | `CustomFieldsEnumOptionsRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldsEnumOptionsRequest` | `customFieldsEnumOptionsRequestSchema` | `src/models/custom-fields-enum-options-request.ts` |
| `CustomFieldsEnumOptionsResponse` | `customFieldsEnumOptionsResponseSchema` | `src/models/custom-fields-enum-options-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteCustomField

- **Signature**: `deleteCustomField(request: CustomFields.DeleteCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomFieldsResponse3, CustomFields.DeleteCustomFieldError>`
- **Wire**: `DELETE /custom_fields/{custom_field_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldsResponse3`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFields.DeleteCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.DeleteCustomFieldRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `customFieldGid` | `path` | `custom_field_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldsResponse3` | `customFieldsResponse3Schema` | `src/models/custom-fields-response3.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomField

- **Signature**: `getCustomField(request: CustomFields.GetCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomFieldsResponse, CustomFields.GetCustomFieldError>`
- **Wire**: `GET /custom_fields/{custom_field_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomFieldsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFields.GetCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.GetCustomFieldRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `customFieldGid` | `path` | `custom_field_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldsResponse` | `customFieldsResponseSchema` | `src/models/custom-fields-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomFieldsForWorkspace

- **Signature**: `getCustomFieldsForWorkspace(request: CustomFields.GetCustomFieldsForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesCustomFieldsResponse, CustomFields.GetCustomFieldsForWorkspaceError>`
- **Wire**: `GET /workspaces/{workspace_gid}/custom_fields`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesCustomFieldsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFields.GetCustomFieldsForWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.GetCustomFieldsForWorkspaceRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesCustomFieldsResponse` | `workspacesCustomFieldsResponseSchema` | `src/models/workspaces-custom-fields-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### insertEnumOptionForCustomField

- **Signature**: `insertEnumOptionForCustomField(request: CustomFields.InsertEnumOptionForCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomFieldsEnumOptionsInsertResponse, CustomFields.InsertEnumOptionForCustomFieldError>`
- **Wire**: `POST /custom_fields/{custom_field_gid}/enum_options/insert`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldsEnumOptionsInsertResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFields.InsertEnumOptionForCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.InsertEnumOptionForCustomFieldRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `customFieldGid` | `path` | `custom_field_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `CustomFieldsEnumOptionsInsertRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldsEnumOptionsInsertRequest` | `customFieldsEnumOptionsInsertRequestSchema` | `src/models/custom-fields-enum-options-insert-request.ts` |
| `CustomFieldsEnumOptionsInsertResponse` | `customFieldsEnumOptionsInsertResponseSchema` | `src/models/custom-fields-enum-options-insert-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateCustomField

- **Signature**: `updateCustomField(request: CustomFields.UpdateCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomFieldsResponse, CustomFields.UpdateCustomFieldError>`
- **Wire**: `PUT /custom_fields/{custom_field_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFields.UpdateCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.UpdateCustomFieldRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `customFieldGid` | `path` | `custom_field_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `CustomFieldsRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldsRequest` | `customFieldsRequestSchema` | `src/models/custom-fields-request.ts` |
| `CustomFieldsResponse` | `customFieldsResponseSchema` | `src/models/custom-fields-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateEnumOption

- **Signature**: `updateEnumOption(request: CustomFields.UpdateEnumOptionRequest, options?: RequestOptions): ApiPromise<EnumOptionsResponse, CustomFields.UpdateEnumOptionError>`
- **Wire**: `PUT /enum_options/{enum_option_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnumOptionsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `CustomFields.UpdateEnumOptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.UpdateEnumOptionRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `enumOptionGid` | `path` | `enum_option_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `EnumOptionsRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnumOptionsRequest` | `enumOptionsRequestSchema` | `src/models/enum-options-request.ts` |
| `EnumOptionsResponse` | `enumOptionsResponseSchema` | `src/models/enum-options-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

