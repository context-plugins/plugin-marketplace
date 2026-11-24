<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mfa — operations

Accessor: `client.mfa` · Source: `src/resources/mfa.ts` · 6 operations · Request and error types: namespace `Mfa`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### generateChallenge

- **Signature**: `generateChallenge(request: Mfa.GenerateChallengeRequest, options?: RequestOptions): ApiPromise<MfaChallengeResponseDto, Mfa.GenerateChallengeError>`
- **Wire**: `POST /v3/mfa/challenge`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MfaChallengeResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Mfa.GenerateChallengeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mfa.GenerateChallengeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `MfaChallengeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MfaChallengeRequestDto` | `mfaChallengeRequestDtoSchema` | `src/models/mfa-challenge-request-dto.ts` |
| `MfaChallengeResponseDto` | `mfaChallengeResponseDtoSchema` | `src/models/mfa-challenge-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listMfaPhones

- **Signature**: `listMfaPhones(request?: Mfa.ListMfaPhonesRequest, options?: RequestOptions): ApiPromise<ListMfaPhoneResponseDto, ApiError>`
- **Wire**: `GET /v3/mfa/phones`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMfaPhoneResponseDto`
- **Error**: `DivvyError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Mfa.ListMfaPhonesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMfaPhoneResponseDto` | `listMfaPhoneResponseDtoSchema` | `src/models/list-mfa-phone-response-dto.ts` |

### setup

- **Signature**: `setup(request: Mfa.SetupRequest, options?: RequestOptions): ApiPromise<MfaSetupResponseDto, Mfa.SetupError>`
- **Wire**: `POST /v3/mfa/setup`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MfaSetupResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Mfa.SetupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mfa.SetupRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `MfaSetupRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MfaSetupRequestDto` | `mfaSetupRequestDtoSchema` | `src/models/mfa-setup-request-dto.ts` |
| `MfaSetupResponseDto` | `mfaSetupResponseDtoSchema` | `src/models/mfa-setup-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### stepUpSession

- **Signature**: `stepUpSession(request: Mfa.StepUpSessionRequest, options?: RequestOptions): ApiPromise<MfaStepUpResponseDto, ApiError>`
- **Wire**: `POST /v3/mfa/step-up`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MfaStepUpResponseDto`
- **Error**: `DivvyError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Mfa.StepUpSessionRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `MfaStepUpRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MfaStepUpRequestDto` | `mfaStepUpRequestDtoSchema` | `src/models/mfa-step-up-request-dto.ts` |
| `MfaStepUpResponseDto` | `mfaStepUpResponseDtoSchema` | `src/models/mfa-step-up-response-dto.ts` |

### validate

- **Signature**: `validate(request: Mfa.ValidateRequest, options?: RequestOptions): ApiPromise<StatusDto, Mfa.ValidateError>`
- **Wire**: `POST /v3/mfa/setup/validate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Mfa.ValidateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mfa.ValidateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `MfaSetupValidateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MfaSetupValidateRequestDto` | `mfaSetupValidateRequestDtoSchema` | `src/models/mfa-setup-validate-request-dto.ts` |
| `StatusDto` | `statusDtoSchema` | `src/models/status-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### validateChallenge

- **Signature**: `validateChallenge(request: Mfa.ValidateChallengeRequest, options?: RequestOptions): ApiPromise<MfaChallengeValidateResponseDto, Mfa.ValidateChallengeError>`
- **Wire**: `POST /v3/mfa/challenge/validate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MfaChallengeValidateResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Mfa.ValidateChallengeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mfa.ValidateChallengeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `MfaChallengeValidateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MfaChallengeValidateRequestDto` | `mfaChallengeValidateRequestDtoSchema` | `src/models/mfa-challenge-validate-request-dto.ts` |
| `MfaChallengeValidateResponseDto` | `mfaChallengeValidateResponseDtoSchema` | `src/models/mfa-challenge-validate-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

