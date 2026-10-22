<!-- Generated file — do not edit; regenerated with the SDK. -->

# MethodsApi — operations

Accessor: `client.methodsApi` · Source: `src/resources/methods-api.ts` · 7 operations · Request and error types: namespace `MethodsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### disableMethod

- **Signature**: `disableMethod(request: MethodsApi.DisableMethodRequest, options?: RequestOptions): ApiPromise<undefined, MethodsApi.DisableMethodError>`
- **Wire**: `DELETE /v2/profiles/{profileId}/methods/{methodId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MethodsApi.DisableMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MethodsApi.DisableMethodRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | — | `string` | yes |
| `methodId` | `path` | — | `Method` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Method` | `methodSchema` | `src/models/method.ts` |

### disableMethodIssuer

- **Signature**: `disableMethodIssuer(request: MethodsApi.DisableMethodIssuerRequest, options?: RequestOptions): ApiPromise<undefined, MethodsApi.DisableMethodIssuerError>`
- **Wire**: `DELETE /v2/profiles/{profileId}/methods/{methodId}/issuers/{issuerId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MethodsApi.DisableMethodIssuerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MethodsApi.DisableMethodIssuerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | — | `string` | yes |
| `methodId` | `path` | — | `MethodIdWithIssuer` | yes |
| `issuerId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MethodIdWithIssuer` | `methodIdWithIssuerSchema` | `src/models/method-id-with-issuer.ts` |

### enableMethod

- **Signature**: `enableMethod(request: MethodsApi.EnableMethodRequest, options?: RequestOptions): ApiPromise<undefined, MethodsApi.EnableMethodError>`
- **Wire**: `POST /v2/profiles/{profileId}/methods/{methodId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MethodsApi.EnableMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MethodsApi.EnableMethodRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | — | `string` | yes |
| `methodId` | `path` | — | `Method` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Method` | `methodSchema` | `src/models/method.ts` |

### enableMethodIssuer

- **Signature**: `enableMethodIssuer(request: MethodsApi.EnableMethodIssuerRequest, options?: RequestOptions): ApiPromise<undefined, MethodsApi.EnableMethodIssuerError>`
- **Wire**: `POST /v2/profiles/{profileId}/methods/{methodId}/issuers/{issuerId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MethodsApi.EnableMethodIssuerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MethodsApi.EnableMethodIssuerRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | — | `string` | yes |
| `methodId` | `path` | — | `MethodIdWithIssuer` | yes |
| `issuerId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2ProfilesMethodsIssuersIssuerIdRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MethodIdWithIssuer` | `methodIdWithIssuerSchema` | `src/models/method-id-with-issuer.ts` |
| `V2ProfilesMethodsIssuersIssuerIdRequest` | `v2ProfilesMethodsIssuersIssuerIdRequestSchema` | `src/models/v2-profiles-methods-issuers-issuer-id-request.ts` |

### getMethod

- **Signature**: `getMethod(request: MethodsApi.GetMethodRequest, options?: RequestOptions): ApiPromise<undefined, MethodsApi.GetMethodError>`
- **Wire**: `GET /v2/methods/{methodId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MethodsApi.GetMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MethodsApi.GetMethodRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `methodId` | `path` | — | `Method` | yes |
| `locale` | `query` | — | `Locale` | no |
| `currency` | `query` | — | `string` | no |
| `profileId` | `query` | — | `string` | no |
| `include` | `query` | — | `string` | no |
| `sequenceType` | `query` | — | `SequenceType` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Method` | `methodSchema` | `src/models/method.ts` |
| `Locale` | `localeSchema` | `src/models/locale.ts` |
| `SequenceType` | `sequenceTypeSchema` | `src/models/sequence-type.ts` |

### listAllMethods

- **Signature**: `listAllMethods(request: MethodsApi.ListAllMethodsRequest, options?: RequestOptions): ApiPromise<undefined, MethodsApi.ListAllMethodsError>`
- **Wire**: `GET /v2/methods/all`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MethodsApi.ListAllMethodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MethodsApi.ListAllMethodsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `Locale` | no |
| `amount` | `query` | — | `Amount` | no |
| `include` | `query` | — | `string` | no |
| `sequenceType` | `query` | — | `SequenceType` | no |
| `profileId` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Locale` | `localeSchema` | `src/models/locale.ts` |
| `Amount` | `amountSchema` | `src/models/amount.ts` |
| `SequenceType` | `sequenceTypeSchema` | `src/models/sequence-type.ts` |

### listMethods

- **Signature**: `listMethods(request: MethodsApi.ListMethodsRequest, options?: RequestOptions): ApiPromise<undefined, MethodsApi.ListMethodsError>`
- **Wire**: `GET /v2/methods`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MethodsApi.ListMethodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MethodsApi.ListMethodsRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sequenceType` | `query` | — | `SequenceType` | no |
| `locale` | `query` | — | `Locale` | no |
| `amount` | `query` | — | `Amount` | no |
| `resource` | `query` | — | `MethodResourceParameter` | no |
| `billingCountry` | `query` | — | `string` | no |
| `includeWallets` | `query` | — | `MethodIncludeWalletsParameter` | no |
| `orderLineCategories` | `query` | — | `LineCategories` | no |
| `profileId` | `query` | — | `string` | no |
| `include` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SequenceType` | `sequenceTypeSchema` | `src/models/sequence-type.ts` |
| `Locale` | `localeSchema` | `src/models/locale.ts` |
| `Amount` | `amountSchema` | `src/models/amount.ts` |
| `MethodResourceParameter` | `methodResourceParameterSchema` | `src/models/method-resource-parameter.ts` |
| `MethodIncludeWalletsParameter` | `methodIncludeWalletsParameterSchema` | `src/models/method-include-wallets-parameter.ts` |
| `LineCategories` | `lineCategoriesSchema` | `src/models/line-categories.ts` |

