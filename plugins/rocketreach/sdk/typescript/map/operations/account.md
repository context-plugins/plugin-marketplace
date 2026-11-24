<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 3 operations · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `rocket-reach`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createNewApiKey

- **Signature**: `createNewApiKey(request?: Account.CreateNewApiKeyRequest, options?: RequestOptions): ApiPromise<ApiKey, Account.CreateNewApiKeyError>`
- **Wire**: `POST /account/key/`
- **Auth**: `rocketReachApiKey`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiKey`
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `Account.CreateNewApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.CreateNewApiKeyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `form` | `api_key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKey` | `apiKeySchema` | `src/models/api-key.ts` |

### getAccount

- **Signature**: `getAccount(options?: RequestOptions): ApiPromise<UserModel, Account.GetAccountError>`
- **Wire**: `GET /account/`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserModel`
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `Account.GetAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UserModel` | `userModelSchema` | `src/models/user-model.ts` |

### getUniversalAccount

- **Signature**: `getUniversalAccount(options?: RequestOptions): ApiPromise<UniversalCreditsUserModelWithExtraAttributes, Account.GetUniversalAccountError>`
- **Wire**: `GET /universal/account/`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UniversalCreditsUserModelWithExtraAttributes`
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `Account.GetUniversalAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UniversalCreditsUserModelWithExtraAttributes` | `universalCreditsUserModelWithExtraAttributesSchema` | `src/models/universal-credits-user-model-with-extra-attributes.ts` |

