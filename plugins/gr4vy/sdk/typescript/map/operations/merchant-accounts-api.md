<!-- Generated file — do not edit; regenerated with the SDK. -->

# MerchantAccountsApi — operations

Accessor: `client.merchantAccountsApi` · Source: `src/resources/merchant-accounts-api.ts` · 4 operations · Request and error types: namespace `MerchantAccountsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMerchantAccount

- **Signature**: `createMerchantAccount(request: MerchantAccountsApi.CreateMerchantAccountRequest, options?: RequestOptions): ApiPromise<MerchantAccount, MerchantAccountsApi.CreateMerchantAccountError>`
- **Wire**: `POST /merchant-accounts`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MerchantAccount`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `MerchantAccountsApi.CreateMerchantAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantAccountsApi.CreateMerchantAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MerchantAccountCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantAccountCreate` | `merchantAccountCreateSchema` | `src/models/merchant-account-create.ts` |
| `MerchantAccount` | `merchantAccountSchema` | `src/models/merchant-account.ts` |
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

### getMerchantAccount

- **Signature**: `getMerchantAccount(request: MerchantAccountsApi.GetMerchantAccountRequest, options?: RequestOptions): ApiPromise<MerchantAccount, MerchantAccountsApi.GetMerchantAccountError>`
- **Wire**: `GET /merchant-accounts/{merchant_account_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantAccount`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `MerchantAccountsApi.GetMerchantAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantAccountsApi.GetMerchantAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `merchantAccountId` | `path` | `merchant_account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantAccount` | `merchantAccountSchema` | `src/models/merchant-account.ts` |
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

### listMerchantAccounts

- **Signature**: `listMerchantAccounts(request: MerchantAccountsApi.ListMerchantAccountsRequest, options?: RequestOptions): ApiPromise<MerchantAccounts, MerchantAccountsApi.ListMerchantAccountsError>`
- **Wire**: `GET /merchant-accounts`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantAccounts`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `MerchantAccountsApi.ListMerchantAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantAccountsApi.ListMerchantAccountsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | `Cursor` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `search` | `query` | `Search2` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `Search2` | `search2Schema` | `src/models/unions/search2.ts` |
| `MerchantAccounts` | `merchantAccountsSchema` | `src/models/merchant-accounts.ts` |
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

### updateMerchantAccount

- **Signature**: `updateMerchantAccount(request: MerchantAccountsApi.UpdateMerchantAccountRequest, options?: RequestOptions): ApiPromise<MerchantAccount, MerchantAccountsApi.UpdateMerchantAccountError>`
- **Wire**: `PUT /merchant-accounts/{merchant_account_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MerchantAccount`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `MerchantAccountsApi.UpdateMerchantAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantAccountsApi.UpdateMerchantAccountRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `merchantAccountId` | `path` | `merchant_account_id` | `string` | yes |
| `body` | `body` | — | `MerchantAccountUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantAccountUpdate` | `merchantAccountUpdateSchema` | `src/models/merchant-account-update.ts` |
| `MerchantAccount` | `merchantAccountSchema` | `src/models/merchant-account.ts` |
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

