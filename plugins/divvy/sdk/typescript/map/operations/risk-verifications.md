<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskVerifications — operations

Accessor: `client.riskVerifications` · Source: `src/resources/risk-verifications.ts` · 4 operations · Request and error types: namespace `RiskVerifications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRiskVerificationPhone

- **Signature**: `createRiskVerificationPhone(request: RiskVerifications.CreateRiskVerificationPhoneRequest, options?: RequestOptions): ApiPromise<undefined, RiskVerifications.CreateRiskVerificationPhoneError>`
- **Wire**: `POST /v3/risk-verifications/phone`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DivvyError` with `kind: "api"`, an instance of `RiskVerifications.CreateRiskVerificationPhoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RiskVerifications.CreateRiskVerificationPhoneRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `PhoneVerificationRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PhoneVerificationRequestDto` | `phoneVerificationRequestDtoSchema` | `src/models/phone-verification-request-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getRiskVerificationPhone

- **Signature**: `getRiskVerificationPhone(request?: RiskVerifications.GetRiskVerificationPhoneRequest, options?: RequestOptions): ApiPromise<GetPhoneStatusResponseDto, RiskVerifications.GetRiskVerificationPhoneError>`
- **Wire**: `GET /v3/risk-verifications/phone`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPhoneStatusResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `RiskVerifications.GetRiskVerificationPhoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RiskVerifications.GetRiskVerificationPhoneRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPhoneStatusResponseDto` | `getPhoneStatusResponseDtoSchema` | `src/models/get-phone-status-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getRiskVerifications

- **Signature**: `getRiskVerifications(request?: RiskVerifications.GetRiskVerificationsRequest, options?: RequestOptions): ApiPromise<VerificationResponseDto, RiskVerifications.GetRiskVerificationsError>`
- **Wire**: `GET /v3/risk-verifications`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerificationResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `RiskVerifications.GetRiskVerificationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RiskVerifications.GetRiskVerificationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerificationResponseDto` | `verificationResponseDtoSchema` | `src/models/verification-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### initiateRiskVerifications

- **Signature**: `initiateRiskVerifications(request?: RiskVerifications.InitiateRiskVerificationsRequest, options?: RequestOptions): ApiPromise<VerificationResponseDto, RiskVerifications.InitiateRiskVerificationsError>`
- **Wire**: `POST /v3/risk-verifications`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerificationResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `RiskVerifications.InitiateRiskVerificationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RiskVerifications.InitiateRiskVerificationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerificationResponseDto` | `verificationResponseDtoSchema` | `src/models/verification-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

