<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountUpdaterApi — operations

Accessor: `client.accountUpdaterApi` · Source: `src/resources/account-updater-api.ts` · 1 operation · Request and error types: namespace `AccountUpdaterApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAccountUpdaterJob

- **Signature**: `createAccountUpdaterJob(request: AccountUpdaterApi.CreateAccountUpdaterJobRequest, options?: RequestOptions): ApiPromise<AccountUpdaterJob, AccountUpdaterApi.CreateAccountUpdaterJobError>`
- **Wire**: `POST /account-updater/jobs`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountUpdaterJob`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `AccountUpdaterApi.CreateAccountUpdaterJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUpdaterApi.CreateAccountUpdaterJobRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `body` | `body` | — | `AccountUpdaterJobCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `AccountUpdaterJobCreate` | `accountUpdaterJobCreateSchema` | `src/models/account-updater-job-create.ts` |
| `AccountUpdaterJob` | `accountUpdaterJobSchema` | `src/models/account-updater-job.ts` |
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

