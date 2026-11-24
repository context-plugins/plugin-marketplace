<!-- Generated file — do not edit; regenerated with the SDK. -->

# Robot — operations

Accessor: `client.robot` · Source: `src/resources/robot.ts` · 10 operations · Request and error types: namespace `Robot`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### v1AnchorDailyV1AnchorDailyGet

- **Signature**: `v1AnchorDailyV1AnchorDailyGet(request?: Robot.V1AnchorDailyV1AnchorDailyGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Robot.V1AnchorDailyV1AnchorDailyGetError>`
- **Wire**: `GET /v1/anchor/daily`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Robot.V1AnchorDailyV1AnchorDailyGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Robot.V1AnchorDailyV1AnchorDailyGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1AnchorUpgradeV1AnchorUpgradePost

- **Signature**: `v1AnchorUpgradeV1AnchorUpgradePost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/anchor/upgrade`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1AnchorV1AnchorPost

- **Signature**: `v1AnchorV1AnchorPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/anchor`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1AwarenessV1AwarenessPost

- **Signature**: `v1AwarenessV1AwarenessPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/awareness`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1HumanoidV1HumanoidPost

- **Signature**: `v1HumanoidV1HumanoidPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/humanoid`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1MarineV1MarinePost

- **Signature**: `v1MarineV1MarinePost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/marine`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1PreflightV1PreflightPost

- **Signature**: `v1PreflightV1PreflightPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/preflight`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1RoadV1RoadPost

- **Signature**: `v1RoadV1RoadPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /v1/road`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1RobotReceiptSampleV1RobotReceiptSampleGet

- **Signature**: `v1RobotReceiptSampleV1RobotReceiptSampleGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/robot-receipt/sample`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### v1RobotReceiptV1RobotReceiptPost

- **Signature**: `v1RobotReceiptV1RobotReceiptPost(request?: Robot.V1RobotReceiptV1RobotReceiptPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Robot.V1RobotReceiptV1RobotReceiptPostError>`
- **Wire**: `POST /v1/robot-receipt`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Robot.V1RobotReceiptV1RobotReceiptPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Robot.V1RobotReceiptV1RobotReceiptPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

