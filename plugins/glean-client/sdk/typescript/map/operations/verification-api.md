<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerificationApi — operations

Accessor: `client.verificationApi` · Source: `src/resources/verification-api.ts` · 3 operations · Request and error types: namespace `VerificationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addverificationreminder

- **Signature**: `addverificationreminder(request: VerificationApi.AddverificationreminderRequest, options?: RequestOptions): ApiPromise<Verification, VerificationApi.AddverificationreminderError>`
- **Wire**: `POST /rest/api/v1/addverificationreminder`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Verification`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `VerificationApi.AddverificationreminderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerificationApi.AddverificationreminderRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `ReminderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReminderRequest` | `reminderRequestSchema` | `src/models/reminder-request.ts` |
| `Verification` | `verificationSchema` | `src/models/verification.ts` |

### listverifications

- **Signature**: `listverifications(request: VerificationApi.ListverificationsRequest, options?: RequestOptions): ApiPromise<VerificationFeed, VerificationApi.ListverificationsError>`
- **Wire**: `POST /rest/api/v1/listverifications`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerificationFeed`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `VerificationApi.ListverificationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerificationApi.ListverificationsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `count` | `query` | — | `number` | no |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerificationFeed` | `verificationFeedSchema` | `src/models/verification-feed.ts` |

### verify

- **Signature**: `verify(request: VerificationApi.VerifyRequestParams, options?: RequestOptions): ApiPromise<Verification, VerificationApi.VerifyError>`
- **Wire**: `POST /rest/api/v1/verify`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Verification`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `VerificationApi.VerifyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerificationApi.VerifyRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `VerifyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyRequest` | `verifyRequestSchema` | `src/models/verify-request.ts` |
| `Verification` | `verificationSchema` | `src/models/verification.ts` |

