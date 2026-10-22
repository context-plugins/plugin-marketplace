<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeyPairs — operations

Accessor: `client.apiKeyPairs` · Source: `src/resources/api-key-pairs.ts` · 5 operations · Request and error types: namespace `ApiKeyPairs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createApiKeyPair

- **Signature**: `createApiKeyPair(request: ApiKeyPairs.CreateApiKeyPairRequest, options?: RequestOptions): ApiPromise<ApiKeyPair, ApiKeyPairs.CreateApiKeyPairError>`
- **Wire**: `POST /api-key-pairs`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiKeyPair`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `ApiKeyPairs.CreateApiKeyPairError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeyPairs.CreateApiKeyPairRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiKeyPairCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKeyPairCreate` | `apiKeyPairCreateSchema` | `src/models/api-key-pair-create.ts` |
| `ApiKeyPair` | `apiKeyPairSchema` | `src/models/api-key-pair.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteApiKeyPair

- **Signature**: `deleteApiKeyPair(request: ApiKeyPairs.DeleteApiKeyPairRequest, options?: RequestOptions): ApiPromise<undefined, ApiKeyPairs.DeleteApiKeyPairError>`
- **Wire**: `DELETE /api-key-pairs/{api_key_pair_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `ApiKeyPairs.DeleteApiKeyPairError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeyPairs.DeleteApiKeyPairRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKeyPairId` | `path` | `api_key_pair_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getApiKeyPair

- **Signature**: `getApiKeyPair(request: ApiKeyPairs.GetApiKeyPairRequest, options?: RequestOptions): ApiPromise<ApiKeyPair, ApiKeyPairs.GetApiKeyPairError>`
- **Wire**: `GET /api-key-pairs/{api_key_pair_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiKeyPair`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `ApiKeyPairs.GetApiKeyPairError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeyPairs.GetApiKeyPairRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKeyPairId` | `path` | `api_key_pair_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKeyPair` | `apiKeyPairSchema` | `src/models/api-key-pair.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listApiKeyPairs

- **Signature**: `listApiKeyPairs(request: ApiKeyPairs.ListApiKeyPairsRequest, options?: RequestOptions): ApiPromise<CollectionApiKeyPair, ApiKeyPairs.ListApiKeyPairsError>`
- **Wire**: `GET /api-key-pairs`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CollectionApiKeyPair`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `ApiKeyPairs.ListApiKeyPairsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeyPairs.ListApiKeyPairsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | `Cursor` | no | — |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `CollectionApiKeyPair` | `collectionApiKeyPairSchema` | `src/models/collection-api-key-pair.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateApiKeyPair

- **Signature**: `updateApiKeyPair(request: ApiKeyPairs.UpdateApiKeyPairRequest, options?: RequestOptions): ApiPromise<ApiKeyPair, ApiKeyPairs.UpdateApiKeyPairError>`
- **Wire**: `PUT /api-key-pairs/{api_key_pair_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiKeyPair`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `ApiKeyPairs.UpdateApiKeyPairError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeyPairs.UpdateApiKeyPairRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKeyPairId` | `path` | `api_key_pair_id` | `string` | yes |
| `body` | `body` | — | `ApiKeyPairUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKeyPairUpdate` | `apiKeyPairUpdateSchema` | `src/models/api-key-pair-update.ts` |
| `ApiKeyPair` | `apiKeyPairSchema` | `src/models/api-key-pair.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

