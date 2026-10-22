<!-- Generated file — do not edit; regenerated with the SDK. -->

# ActivityApi — operations

Accessor: `client.activityApi` · Source: `src/resources/activity-api.ts` · 2 operations · Request and error types: namespace `ActivityApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activity

- **Signature**: `activity(request: ActivityApi.ActivityRequest, options?: RequestOptions): ApiPromise<undefined, ActivityApi.ActivityError>`
- **Wire**: `POST /rest/api/v1/activity`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ActivityApi.ActivityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ActivityApi.ActivityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Activity` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Activity` | `activitySchema` | `src/models/activity.ts` |

### feedback

- **Signature**: `feedback(request: ActivityApi.FeedbackRequest, options?: RequestOptions): ApiPromise<undefined, ActivityApi.FeedbackError>`
- **Wire**: `POST /rest/api/v1/feedback`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ActivityApi.FeedbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ActivityApi.FeedbackRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feedback` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `Feedback` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Feedback` | `feedbackSchema` | `src/models/feedback.ts` |

