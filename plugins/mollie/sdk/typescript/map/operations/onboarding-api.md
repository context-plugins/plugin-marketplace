<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnboardingApi — operations

Accessor: `client.onboardingApi` · Source: `src/resources/onboarding-api.ts` · 2 operations · Request and error types: namespace `OnboardingApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOnboardingStatus

- **Signature**: `getOnboardingStatus(request: OnboardingApi.GetOnboardingStatusRequest, options?: RequestOptions): ApiPromise<undefined, OnboardingApi.GetOnboardingStatusError>`
- **Wire**: `GET /v2/onboarding/me`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `OnboardingApi.GetOnboardingStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnboardingApi.GetOnboardingStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### submitOnboardingData

- **Signature**: `submitOnboardingData(request: OnboardingApi.SubmitOnboardingDataRequest, options?: RequestOptions): ApiPromise<undefined, OnboardingApi.SubmitOnboardingDataError>`
- **Wire**: `POST /v2/onboarding/me`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `OnboardingApi.SubmitOnboardingDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnboardingApi.SubmitOnboardingDataRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2OnboardingMeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2OnboardingMeRequest` | `v2OnboardingMeRequestSchema` | `src/models/v2-onboarding-me-request.ts` |

