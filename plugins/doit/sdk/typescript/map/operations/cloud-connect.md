<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudConnect — operations

Accessor: `client.cloudConnect` · Source: `src/resources/cloud-connect.ts` · 5 operations · Request and error types: namespace `CloudConnect`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAccountRole

- **Signature**: `createAccountRole(request: CloudConnect.CreateAccountRoleRequest, options?: RequestOptions): ApiPromise<AwsAccountResponse, CloudConnect.CreateAccountRoleError>`
- **Wire**: `POST /core/v1/cloudconnect/aws/accounts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AwsAccountResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudConnect.CreateAccountRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [409] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudConnect.CreateAccountRoleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CoreV1CloudconnectAwsAccountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CoreV1CloudconnectAwsAccountsRequest` | `coreV1CloudconnectAwsAccountsRequestSchema` | `src/models/core-v1-cloudconnect-aws-accounts-request.ts` |
| `AwsAccountResponse` | `awsAccountResponseSchema` | `src/models/aws-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAccountRole

- **Signature**: `deleteAccountRole(request: CloudConnect.DeleteAccountRoleRequest, options?: RequestOptions): ApiPromise<undefined, CloudConnect.DeleteAccountRoleError>`
- **Wire**: `DELETE /core/v1/cloudconnect/aws/accounts/{accountID}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudConnect.DeleteAccountRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudConnect.DeleteAccountRoleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `accountID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAwsAccount

- **Signature**: `getAwsAccount(request: CloudConnect.GetAwsAccountRequest, options?: RequestOptions): ApiPromise<AwsAccountResponse, CloudConnect.GetAwsAccountError>`
- **Wire**: `GET /core/v1/cloudconnect/aws/accounts/{accountID}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AwsAccountResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudConnect.GetAwsAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudConnect.GetAwsAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `accountID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AwsAccountResponse` | `awsAccountResponseSchema` | `src/models/aws-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCloudConnectSupportedFeatures

- **Signature**: `getCloudConnectSupportedFeatures(request: CloudConnect.GetCloudConnectSupportedFeaturesRequest, options?: RequestOptions): ApiPromise<SupportedFeaturesResponse, CloudConnect.GetCloudConnectSupportedFeaturesError>`
- **Wire**: `GET /core/v1/cloudconnect/supportedFeatures/{accountID}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportedFeaturesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudConnect.GetCloudConnectSupportedFeaturesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudConnect.GetCloudConnectSupportedFeaturesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `accountID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SupportedFeaturesResponse` | `supportedFeaturesResponseSchema` | `src/models/supported-features-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateAwsFeature

- **Signature**: `updateAwsFeature(request: CloudConnect.UpdateAwsFeatureRequest, options?: RequestOptions): ApiPromise<AwsAccountResponse, CloudConnect.UpdateAwsFeatureError>`
- **Wire**: `PUT /core/v1/cloudconnect/aws/accounts/{accountID}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AwsAccountResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudConnect.UpdateAwsFeatureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudConnect.UpdateAwsFeatureRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `accountID` | `string` | yes |
| `body` | `body` | — | `CoreV1CloudconnectAwsAccountsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CoreV1CloudconnectAwsAccountsRequest1` | `coreV1CloudconnectAwsAccountsRequest1Schema` | `src/models/core-v1-cloudconnect-aws-accounts-request1.ts` |
| `AwsAccountResponse` | `awsAccountResponseSchema` | `src/models/aws-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

