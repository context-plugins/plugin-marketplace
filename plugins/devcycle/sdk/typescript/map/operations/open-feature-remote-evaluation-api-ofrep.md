<!-- Generated file — do not edit; regenerated with the SDK. -->

# OpenFeatureRemoteEvaluationApiOfrep — operations

Accessor: `client.openFeatureRemoteEvaluationApiOfrep` · Source: `src/resources/open-feature-remote-evaluation-api-ofrep.ts` · 2 operations · Request and error types: namespace `OpenFeatureRemoteEvaluationApiOfrep`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postOfrepV1EvaluateFlags

- **Server**: `defaultDevCycleBucketingBucketingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postOfrepV1EvaluateFlags(request?: OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsRequest, options?: RequestOptions): ApiPromise<OfrepBulkEvaluationSuccess, OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsError>`
- **Wire**: `POST /ofrep/v1/evaluate/flags`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OfrepBulkEvaluationSuccess`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"ofrepBulkEvaluationFailure"` [400] `OfrepBulkEvaluationFailure` · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"ofrepGeneralErrorResponse"` [500] `OfrepGeneralErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `body` | `body` | — | `OfrepBulkEvaluationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OfrepBulkEvaluationRequest` | `ofrepBulkEvaluationRequestSchema` | `src/models/ofrep-bulk-evaluation-request.ts` |
| `OfrepBulkEvaluationSuccess` | `ofrepBulkEvaluationSuccessSchema` | `src/models/ofrep-bulk-evaluation-success.ts` |
| `OfrepBulkEvaluationFailure` | `ofrepBulkEvaluationFailureSchema` | `src/models/ofrep-bulk-evaluation-failure.ts` |
| `OfrepGeneralErrorResponse` | `ofrepGeneralErrorResponseSchema` | `src/models/ofrep-general-error-response.ts` |

### postOfrepV1EvaluateFlagsByKey

- **Server**: `defaultDevCycleBucketingBucketingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postOfrepV1EvaluateFlagsByKey(request: OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyRequest, options?: RequestOptions): ApiPromise<OfrepEvaluationSuccess, OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyError>`
- **Wire**: `POST /ofrep/v1/evaluate/flags/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OfrepEvaluationSuccess`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"ofrepEvaluationFailure"` [400] `OfrepEvaluationFailure` · `"ofrepFlagNotFound"` [404] `OfrepFlagNotFound` · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"ofrepGeneralErrorResponse"` [500] `OfrepGeneralErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `OfrepEvaluationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OfrepEvaluationRequest` | `ofrepEvaluationRequestSchema` | `src/models/ofrep-evaluation-request.ts` |
| `OfrepEvaluationSuccess` | `ofrepEvaluationSuccessSchema` | `src/models/ofrep-evaluation-success.ts` |
| `OfrepEvaluationFailure` | `ofrepEvaluationFailureSchema` | `src/models/ofrep-evaluation-failure.ts` |
| `OfrepFlagNotFound` | `ofrepFlagNotFoundSchema` | `src/models/ofrep-flag-not-found.ts` |
| `OfrepGeneralErrorResponse` | `ofrepGeneralErrorResponseSchema` | `src/models/ofrep-general-error-response.ts` |

