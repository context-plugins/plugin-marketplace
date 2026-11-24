<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signups — operations

Accessor: `client.signups` · Source: `src/resources/signups.ts` · 1 operation · Request and error types: namespace `Signups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSignup

- **Signature**: `createSignup(request: Signups.CreateSignupRequestParams, options?: RequestOptions): ApiPromise<SignupsResponse, Signups.CreateSignupError>`
- **Wire**: `POST /signups`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignupsResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Signups.CreateSignupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"signupErrorResponse"` [400] `SignupErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"signupErrorResponse2"` [404] `SignupErrorResponse` · `"signupErrorResponse3"` [409] `SignupErrorResponse` · `"signupsResponse1"` [422] `SignupsResponse1` · `"internalServerError"` [500] `InternalServerError` · `"signupErrorResponse4"` [502] `SignupErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signups.CreateSignupRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSignupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSignupRequest` | `createSignupRequestSchema` | `src/models/create-signup-request.ts` |
| `SignupsResponse` | `signupsResponseSchema` | `src/models/unions/signups-response.ts` |
| `SignupErrorResponse` | `signupErrorResponseSchema` | `src/models/signup-error-response.ts` |
| `SignupsResponse1` | `signupsResponse1Schema` | `src/models/unions/signups-response1.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

