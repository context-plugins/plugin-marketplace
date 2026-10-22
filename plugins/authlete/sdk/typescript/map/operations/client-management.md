<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientManagement — operations

Accessor: `client.clientManagement` · Source: `src/resources/client-management.ts` · 26 operations · Request and error types: namespace `ClientManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### clientAuthorizationDeleteApi

- **Signature**: `clientAuthorizationDeleteApi(request: ClientManagement.ClientAuthorizationDeleteApiRequest, options?: RequestOptions): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteApiError>`
- **Wire**: `DELETE /api/{serviceId}/client/authorization/delete/{clientId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientAuthorizationDeleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientAuthorizationDeleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientAuthorizationDeleteApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `subject` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientAuthorizationDeleteResponse` | `clientAuthorizationDeleteResponseSchema` | `src/models/client-authorization-delete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientAuthorizationDeleteApiPost

- **Signature**: `clientAuthorizationDeleteApiPost(request: ClientManagement.ClientAuthorizationDeleteApiPostRequest, options?: RequestOptions): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteApiPostError>`
- **Wire**: `POST /api/{serviceId}/client/authorization/delete/{clientId}`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientAuthorizationDeleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientAuthorizationDeleteApiPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [429] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientAuthorizationDeleteApiPostRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `subject` | `form` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientAuthorizationDeleteResponse` | `clientAuthorizationDeleteResponseSchema` | `src/models/client-authorization-delete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientAuthorizationDeleteBySubjectApi

- **Signature**: `clientAuthorizationDeleteBySubjectApi(request: ClientManagement.ClientAuthorizationDeleteBySubjectApiRequest, options?: RequestOptions): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteBySubjectApiError>`
- **Wire**: `DELETE /api/{serviceId}/client/authorization/delete/{clientId}/{subject}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientAuthorizationDeleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientAuthorizationDeleteBySubjectApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientAuthorizationDeleteBySubjectApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `subject` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientAuthorizationDeleteResponse` | `clientAuthorizationDeleteResponseSchema` | `src/models/client-authorization-delete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientAuthorizationGetListApi

- **Signature**: `clientAuthorizationGetListApi(request: ClientManagement.ClientAuthorizationGetListApiRequest, options?: RequestOptions): ApiPromise<ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListApiError>`
- **Wire**: `GET /api/{serviceId}/client/authorization/get/list`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientAuthorizationGetListResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientAuthorizationGetListApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientAuthorizationGetListApiRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `subject` | `query` | `string` | yes |
| `developer` | `query` | `string` | no |
| `start` | `query` | `number` | no |
| `end` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientAuthorizationGetListResponse` | `clientAuthorizationGetListResponseSchema` | `src/models/client-authorization-get-list-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientAuthorizationGetListApiPost

- **Signature**: `clientAuthorizationGetListApiPost(request: ClientManagement.ClientAuthorizationGetListApiPostRequest, options?: RequestOptions): ApiPromise<ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListApiPostError>`
- **Wire**: `POST /api/{serviceId}/client/authorization/get/list`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientAuthorizationGetListResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientAuthorizationGetListApiPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientAuthorizationGetListApiPostRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `subject` | `form` | `string` | yes |
| `developer` | `form` | `string` | no |
| `start` | `form` | `number` | no |
| `end` | `form` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientAuthorizationGetListResponse` | `clientAuthorizationGetListResponseSchema` | `src/models/client-authorization-get-list-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientAuthorizationGetListBySubjectApi

- **Signature**: `clientAuthorizationGetListBySubjectApi(request: ClientManagement.ClientAuthorizationGetListBySubjectApiRequest, options?: RequestOptions): ApiPromise<ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListBySubjectApiError>`
- **Wire**: `GET /api/{serviceId}/client/authorization/get/list/{subject}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientAuthorizationGetListResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientAuthorizationGetListBySubjectApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientAuthorizationGetListBySubjectApiRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `subject` | `path` | `string` | yes |
| `developer` | `query` | `string` | no |
| `start` | `query` | `number` | no |
| `end` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientAuthorizationGetListResponse` | `clientAuthorizationGetListResponseSchema` | `src/models/client-authorization-get-list-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientAuthorizationUpdateApi

- **Signature**: `clientAuthorizationUpdateApi(request: ClientManagement.ClientAuthorizationUpdateApiRequest, options?: RequestOptions): ApiPromise<Result, ClientManagement.ClientAuthorizationUpdateApiError>`
- **Wire**: `POST /api/{serviceId}/client/authorization/update/{clientId}`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Result`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientAuthorizationUpdateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"error404"` [404] no body · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientAuthorizationUpdateApiRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `subject` | `form` | `string` | yes |
| `scopes` | `form` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientCreateApi

- **Signature**: `clientCreateApi(request: ClientManagement.ClientCreateApiRequest, options?: RequestOptions): ApiPromise<Client, ClientManagement.ClientCreateApiError>`
- **Wire**: `POST /api/{serviceId}/client/create`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Client`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientCreateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientCreateApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `Client` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Client` | `clientSchema` | `src/models/client.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientCursorListApi

- **Signature**: `clientCursorListApi(request: ClientManagement.ClientCursorListApiRequest, options?: RequestOptions): ApiPromise<ClientCursorListResponse, ClientManagement.ClientCursorListApiError>`
- **Wire**: `GET /api/{serviceId}/client`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientCursorListResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientCursorListApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientCursorListApiRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `number` | yes |
| `cursor` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `includeTotalCount` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientCursorListResponse` | `clientCursorListResponseSchema` | `src/models/client-cursor-list-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientDeleteApi

- **Signature**: `clientDeleteApi(request: ClientManagement.ClientDeleteApiRequest, options?: RequestOptions): ApiPromise<undefined, ClientManagement.ClientDeleteApiError>`
- **Wire**: `DELETE /api/{serviceId}/client/delete/{clientId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientDeleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"error404"` [404] no body · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientDeleteApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientExtensionRequestablesScopesDeleteApi

- **Signature**: `clientExtensionRequestablesScopesDeleteApi(request: ClientManagement.ClientExtensionRequestablesScopesDeleteApiRequest, options?: RequestOptions): ApiPromise<undefined, ClientManagement.ClientExtensionRequestablesScopesDeleteApiError>`
- **Wire**: `DELETE /api/{serviceId}/client/extension/requestable_scopes/delete/{clientId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientExtensionRequestablesScopesDeleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientExtensionRequestablesScopesDeleteApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientExtensionRequestablesScopesGetApi

- **Signature**: `clientExtensionRequestablesScopesGetApi(request: ClientManagement.ClientExtensionRequestablesScopesGetApiRequest, options?: RequestOptions): ApiPromise<ClientExtensionRequestableScopesGetResponse, ClientManagement.ClientExtensionRequestablesScopesGetApiError>`
- **Wire**: `GET /api/{serviceId}/client/extension/requestable_scopes/get/{clientId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientExtensionRequestableScopesGetResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientExtensionRequestablesScopesGetApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientExtensionRequestablesScopesGetApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientExtensionRequestableScopesGetResponse` | `clientExtensionRequestableScopesGetResponseSchema` | `src/models/client-extension-requestable-scopes-get-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientExtensionRequestablesScopesUpdateApi

- **Signature**: `clientExtensionRequestablesScopesUpdateApi(request: ClientManagement.ClientExtensionRequestablesScopesUpdateApiRequest, options?: RequestOptions): ApiPromise<ClientExtensionRequestableScopesUpdateResponse, ClientManagement.ClientExtensionRequestablesScopesUpdateApiError>`
- **Wire**: `PUT /api/{serviceId}/client/extension/requestable_scopes/update/{clientId}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientExtensionRequestableScopesUpdateResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientExtensionRequestablesScopesUpdateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientExtensionRequestablesScopesUpdateApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `body` | `body` | `ClientExtensionRequestableScopesUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientExtensionRequestableScopesUpdateRequest` | `clientExtensionRequestableScopesUpdateRequestSchema` | `src/models/client-extension-requestable-scopes-update-request.ts` |
| `ClientExtensionRequestableScopesUpdateResponse` | `clientExtensionRequestableScopesUpdateResponseSchema` | `src/models/client-extension-requestable-scopes-update-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientExtensionRequestablesScopesUpdateApiPost

- **Signature**: `clientExtensionRequestablesScopesUpdateApiPost(request: ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostRequest, options?: RequestOptions): ApiPromise<ClientExtensionRequestableScopesUpdateResponse, ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostError>`
- **Wire**: `POST /api/{serviceId}/client/extension/requestable_scopes/update/{clientId}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientExtensionRequestableScopesUpdateResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `body` | `body` | `ClientExtensionRequestableScopesUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientExtensionRequestableScopesUpdateRequest` | `clientExtensionRequestableScopesUpdateRequestSchema` | `src/models/client-extension-requestable-scopes-update-request.ts` |
| `ClientExtensionRequestableScopesUpdateResponse` | `clientExtensionRequestableScopesUpdateResponseSchema` | `src/models/client-extension-requestable-scopes-update-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientFlagUpdateApi

- **Signature**: `clientFlagUpdateApi(request: ClientManagement.ClientFlagUpdateApiRequest, options?: RequestOptions): ApiPromise<ClientFlagUpdateResponse, ClientManagement.ClientFlagUpdateApiError>`
- **Wire**: `POST /api/{serviceId}/client/lock_flag/update/{clientIdentifier}`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientFlagUpdateResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientFlagUpdateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientFlagUpdateApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientIdentifier` | `path` | `string` | yes |
| `clientLocked` | `form` | `boolean` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientFlagUpdateResponse` | `clientFlagUpdateResponseSchema` | `src/models/client-flag-update-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientGetApi

- **Signature**: `clientGetApi(request: ClientManagement.ClientGetApiRequest, options?: RequestOptions): ApiPromise<Client, ClientManagement.ClientGetApiError>`
- **Wire**: `GET /api/{serviceId}/client/get/{clientId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Client`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientGetApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [404] `Result` · `"result5"` [429] `Result` · `"result6"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientGetApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Client` | `clientSchema` | `src/models/client.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientGetListApi

- **Signature**: `clientGetListApi(request: ClientManagement.ClientGetListApiRequest, options?: RequestOptions): ApiPromise<ClientGetListResponse, ClientManagement.ClientGetListApiError>`
- **Wire**: `GET /api/{serviceId}/client/get/list`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientGetListResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientGetListApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientGetListApiRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `developer` | `query` | `string` | no |
| `start` | `query` | `number` | no |
| `end` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientGetListResponse` | `clientGetListResponseSchema` | `src/models/client-get-list-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientGrantedScopesDeleteApi

- **Signature**: `clientGrantedScopesDeleteApi(request: ClientManagement.ClientGrantedScopesDeleteApiRequest, options?: RequestOptions): ApiPromise<Result, ClientManagement.ClientGrantedScopesDeleteApiError>`
- **Wire**: `DELETE /api/{serviceId}/client/granted_scopes/delete/{clientId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Result`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientGrantedScopesDeleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientGrantedScopesDeleteApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `subject` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientGrantedScopesDeleteBySubjectApi

- **Signature**: `clientGrantedScopesDeleteBySubjectApi(request: ClientManagement.ClientGrantedScopesDeleteBySubjectApiRequest, options?: RequestOptions): ApiPromise<Result, ClientManagement.ClientGrantedScopesDeleteBySubjectApiError>`
- **Wire**: `DELETE /api/{serviceId}/client/granted_scopes/delete/{clientId}/{subject}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Result`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientGrantedScopesDeleteBySubjectApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientGrantedScopesDeleteBySubjectApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `subject` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientGrantedScopesGetApi

- **Signature**: `clientGrantedScopesGetApi(request: ClientManagement.ClientGrantedScopesGetApiRequest, options?: RequestOptions): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetApiError>`
- **Wire**: `GET /api/{serviceId}/client/granted_scopes/get/{clientId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientAuthorizationDeleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientGrantedScopesGetApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientGrantedScopesGetApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `subject` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientAuthorizationDeleteResponse` | `clientAuthorizationDeleteResponseSchema` | `src/models/client-authorization-delete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientGrantedScopesGetApiPost

- **Signature**: `clientGrantedScopesGetApiPost(request: ClientManagement.ClientGrantedScopesGetApiPostRequest, options?: RequestOptions): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetApiPostError>`
- **Wire**: `POST /api/{serviceId}/client/granted_scopes/get/{clientId}`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientAuthorizationDeleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientGrantedScopesGetApiPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [429] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientGrantedScopesGetApiPostRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `subject` | `form` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientAuthorizationDeleteResponse` | `clientAuthorizationDeleteResponseSchema` | `src/models/client-authorization-delete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientGrantedScopesGetBySubjectApi

- **Signature**: `clientGrantedScopesGetBySubjectApi(request: ClientManagement.ClientGrantedScopesGetBySubjectApiRequest, options?: RequestOptions): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetBySubjectApiError>`
- **Wire**: `GET /api/{serviceId}/client/granted_scopes/get/{clientId}/{subject}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientAuthorizationDeleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientGrantedScopesGetBySubjectApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientGrantedScopesGetBySubjectApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientId` | `path` | `string` | yes |
| `subject` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientAuthorizationDeleteResponse` | `clientAuthorizationDeleteResponseSchema` | `src/models/client-authorization-delete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientSearchApi

- **Signature**: `clientSearchApi(request: ClientManagement.ClientSearchApiRequest, options?: RequestOptions): ApiPromise<ClientSearchResponse, ClientManagement.ClientSearchApiError>`
- **Wire**: `GET /api/{serviceId}/client/search`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientSearchResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientSearchApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientSearchApiRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `number` | yes |
| `q` | `query` | `string` | no |
| `cursor` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `includeTotalCount` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientSearchResponse` | `clientSearchResponseSchema` | `src/models/client-search-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientSecretRefreshApi

- **Signature**: `clientSecretRefreshApi(request: ClientManagement.ClientSecretRefreshApiRequest, options?: RequestOptions): ApiPromise<ClientSecretRefreshResponse, ClientManagement.ClientSecretRefreshApiError>`
- **Wire**: `GET /api/{serviceId}/client/secret/refresh/{clientIdentifier}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientSecretRefreshResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientSecretRefreshApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientSecretRefreshApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientIdentifier` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientSecretRefreshResponse` | `clientSecretRefreshResponseSchema` | `src/models/client-secret-refresh-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientSecretUpdateApi

- **Signature**: `clientSecretUpdateApi(request: ClientManagement.ClientSecretUpdateApiRequest, options?: RequestOptions): ApiPromise<ClientSecretRefreshResponse, ClientManagement.ClientSecretUpdateApiError>`
- **Wire**: `POST /api/{serviceId}/client/secret/update/{clientIdentifier}`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientSecretRefreshResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientSecretUpdateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientSecretUpdateApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `clientIdentifier` | `path` | `string` | yes |
| `clientSecret` | `form` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientSecretRefreshResponse` | `clientSecretRefreshResponseSchema` | `src/models/client-secret-refresh-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientUpdateApi

- **Signature**: `clientUpdateApi(request: ClientManagement.ClientUpdateApiRequest, options?: RequestOptions): ApiPromise<Client, ClientManagement.ClientUpdateApiError>`
- **Wire**: `POST /api/{serviceId}/client/update/{clientId}`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Client`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ClientManagement.ClientUpdateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"error404"` [404] no body · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientManagement.ClientUpdateApiRequest` (110):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceId` | `path` | — | `string` | yes |
| `clientIdTemplate` | `path` | `clientId` | `string` | yes |
| `number` | `form` | — | `number` | no |
| `serviceNumber` | `form` | — | `number` | no |
| `clientName` | `form` | — | `string` | no |
| `clientNames` | `form` | — | `TaggedValue[]` | no |
| `description` | `form` | — | `string` | no |
| `descriptions` | `form` | — | `TaggedValue[]` | no |
| `clientId` | `form` | — | `number` | no |
| `clientSecret` | `form` | — | `string` | no |
| `clientIdAlias` | `form` | — | `string` | no |
| `clientIdAliasEnabled` | `form` | — | `boolean` | no |
| `clientType` | `form` | — | `ClientType` | no |
| `applicationType` | `form` | — | `ApplicationType` | no |
| `logoUri` | `form` | — | `string` | no |
| `logoUris` | `form` | — | `TaggedValue[]` | no |
| `contacts` | `form` | — | `string[]` | no |
| `tlsClientCertificateBoundAccessTokens` | `form` | — | `boolean` | no |
| `dynamicallyRegistered` | `form` | — | `boolean` | no |
| `softwareId` | `form` | — | `string` | no |
| `developer` | `form` | — | `string` | no |
| `softwareVersion` | `form` | — | `string` | no |
| `registrationAccessTokenHash` | `form` | — | `string` | no |
| `createdAt` | `form` | — | `number` | no |
| `modifiedAt` | `form` | — | `number` | no |
| `grantTypes` | `form` | — | `GrantType[]` | no |
| `responseTypes` | `form` | — | `ResponseType[]` | no |
| `redirectUris` | `form` | — | `string[]` | no |
| `authorizationSignAlg` | `form` | — | `JwsAlg` | no |
| `authorizationEncryptionAlg` | `form` | — | `JweAlg` | no |
| `authorizationEncryptionEnc` | `form` | — | `JweEnc` | no |
| `tokenAuthMethod` | `form` | — | `ClientAuthMethod` | no |
| `tokenAuthSignAlg` | `form` | — | `JwsAlg` | no |
| `selfSignedCertificateKeyId` | `form` | — | `string` | no |
| `tlsClientAuthSubjectDn` | `form` | — | `string` | no |
| `tlsClientAuthSanDns` | `form` | — | `string` | no |
| `tlsClientAuthSanUri` | `form` | — | `string` | no |
| `tlsClientAuthSanIp` | `form` | — | `string` | no |
| `tlsClientAuthSanEmail` | `form` | — | `string` | no |
| `parRequired` | `form` | — | `boolean` | no |
| `requestObjectRequired` | `form` | — | `boolean` | no |
| `requestSignAlg` | `form` | — | `JwsAlg` | no |
| `requestEncryptionAlg` | `form` | — | `JweAlg` | no |
| `requestEncryptionEnc` | `form` | — | `JweEnc` | no |
| `requestUris` | `form` | — | `string[]` | no |
| `defaultMaxAge` | `form` | — | `number` | no |
| `defaultAcrs` | `form` | — | `string[]` | no |
| `idTokenSignAlg` | `form` | — | `JwsAlg` | no |
| `idTokenEncryptionAlg` | `form` | — | `JweAlg` | no |
| `idTokenEncryptionEnc` | `form` | — | `JweEnc` | no |
| `authTimeRequired` | `form` | — | `boolean` | no |
| `subjectType` | `form` | — | `SubjectType` | no |
| `sectorIdentifierUri` | `form` | — | `string` | no |
| `derivedSectorIdentifier` | `form` | — | `string` | no |
| `jwksUri` | `form` | — | `string` | no |
| `jwks` | `form` | — | `string` | no |
| `userInfoSignAlg` | `form` | — | `JwsAlg` | no |
| `userInfoEncryptionAlg` | `form` | — | `JweAlg` | no |
| `userInfoEncryptionEnc` | `form` | — | `JweEnc` | no |
| `loginUri` | `form` | — | `string` | no |
| `tosUri` | `form` | — | `string` | no |
| `tosUris` | `form` | — | `TaggedValue[]` | no |
| `policyUri` | `form` | — | `string` | no |
| `policyUris` | `form` | — | `TaggedValue[]` | no |
| `clientUri` | `form` | — | `string` | no |
| `clientUris` | `form` | — | `TaggedValue[]` | no |
| `bcDeliveryMode` | `form` | — | `string` | no |
| `bcNotificationEndpoint` | `form` | — | `string` | no |
| `bcRequestSignAlg` | `form` | — | `JwsAlg` | no |
| `bcUserCodeRequired` | `form` | — | `boolean` | no |
| `backchannelLogoutUri` | `form` | — | `string` | no |
| `backchannelLogoutSessionRequired` | `form` | — | `boolean` | no |
| `attributes` | `form` | — | `Pair[]` | no |
| `extension` | `form` | — | `ClientExtension` | no |
| `authorizationDetailsTypes` | `form` | — | `string[]` | no |
| `customMetadata` | `form` | — | `string` | no |
| `frontChannelRequestObjectEncryptionRequired` | `form` | — | `boolean` | no |
| `requestObjectEncryptionAlgMatchRequired` | `form` | — | `boolean` | no |
| `requestObjectEncryptionEncMatchRequired` | `form` | — | `boolean` | no |
| `digestAlgorithm` | `form` | — | `string` | no |
| `singleAccessTokenPerSubject` | `form` | — | `boolean` | no |
| `pkceRequired` | `form` | — | `boolean` | no |
| `pkceS256Required` | `form` | — | `boolean` | no |
| `dpopRequired` | `form` | — | `boolean` | no |
| `automaticallyRegistered` | `form` | — | `boolean` | no |
| `explicitlyRegistered` | `form` | — | `boolean` | no |
| `rsRequestSigned` | `form` | — | `boolean` | no |
| `rsSignedRequestKeyId` | `form` | — | `string` | no |
| `clientRegistrationTypes` | `form` | — | `ClientRegistrationType[]` | no |
| `organizationName` | `form` | — | `string` | no |
| `signedJwksUri` | `form` | — | `string` | no |
| `entityId` | `form` | — | `string` | no |
| `trustAnchorId` | `form` | — | `string` | no |
| `trustChain` | `form` | — | `string[]` | no |
| `trustChainExpiresAt` | `form` | — | `number` | no |
| `trustChainUpdatedAt` | `form` | — | `number` | no |
| `locked` | `form` | — | `boolean` | no |
| `credentialOfferEndpoint` | `form` | — | `string` | no |
| `fapiModes` | `form` | — | `FapiMode[]` | no |
| `responseModes` | `form` | — | `ResponseMode[]` | no |
| `credentialResponseEncryptionRequired` | `form` | — | `boolean` | no |
| `mtlsEndpointAliasesUsed` | `form` | — | `boolean` | no |
| `inScopeForTokenMigration` | `form` | — | `boolean` | no |
| `metadataDocumentLocation` | `form` | — | `string` | no |
| `metadataDocumentExpiresAt` | `form` | — | `number` | no |
| `metadataDocumentUpdatedAt` | `form` | — | `number` | no |
| `discoveredByMetadataDocument` | `form` | — | `boolean` | no |
| `clientSource` | `form` | — | `ClientSource` | no |
| `spiffeId` | `form` | — | `string` | no |
| `spiffeBundleEndpoint` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaggedValue` | `taggedValueSchema` | `src/models/tagged-value.ts` |
| `ClientType` | `clientTypeSchema` | `src/models/client-type.ts` |
| `ApplicationType` | `applicationTypeSchema` | `src/models/application-type.ts` |
| `GrantType` | `grantTypeSchema` | `src/models/grant-type.ts` |
| `ResponseType` | `responseTypeSchema` | `src/models/response-type.ts` |
| `JwsAlg` | `jwsAlgSchema` | `src/models/jws-alg.ts` |
| `JweAlg` | `jweAlgSchema` | `src/models/jwe-alg.ts` |
| `JweEnc` | `jweEncSchema` | `src/models/jwe-enc.ts` |
| `ClientAuthMethod` | `clientAuthMethodSchema` | `src/models/client-auth-method.ts` |
| `SubjectType` | `subjectTypeSchema` | `src/models/subject-type.ts` |
| `Pair` | `pairSchema` | `src/models/pair.ts` |
| `ClientExtension` | `clientExtensionSchema` | `src/models/client-extension.ts` |
| `ClientRegistrationType` | `clientRegistrationTypeSchema` | `src/models/client-registration-type.ts` |
| `FapiMode` | `fapiModeSchema` | `src/models/fapi-mode.ts` |
| `ResponseMode` | `responseModeSchema` | `src/models/response-mode.ts` |
| `ClientSource` | `clientSourceSchema` | `src/models/client-source.ts` |
| `Client` | `clientSchema` | `src/models/client.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

