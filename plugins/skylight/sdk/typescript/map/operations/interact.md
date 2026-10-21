<!-- Generated file — do not edit; regenerated with the SDK. -->

# Interact — operations

Accessor: `client.interact` · Source: `src/resources/interact.ts` · 8 operations · Request and error types: namespace `Interact`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skylight-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### click

- **Signature**: `click(request: Interact.ClickRequestParams, options?: RequestOptions): ApiPromise<StandardResponse, Interact.ClickError>`
- **Wire**: `POST /interact/click/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Interact.ClickError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Interact.ClickRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `ClickRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClickRequest` | `clickRequestSchema` | `src/models/click-request.ts` |
| `StandardResponse` | `standardResponseSchema` | `src/models/standard-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### drag

- **Signature**: `drag(request: Interact.DragRequestParams, options?: RequestOptions): ApiPromise<StandardResponse, Interact.DragError>`
- **Wire**: `POST /interact/drag/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Interact.DragError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Interact.DragRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `DragRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DragRequest` | `dragRequestSchema` | `src/models/drag-request.ts` |
| `StandardResponse` | `standardResponseSchema` | `src/models/standard-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### install

- **Signature**: `install(request: Interact.InstallRequest, options?: RequestOptions): ApiPromise<PackageInstallResponse, Interact.InstallError>`
- **Wire**: `POST /interact/install/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PackageInstallResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Interact.InstallError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Interact.InstallRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `PackageInstallRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PackageInstallRequest` | `packageInstallRequestSchema` | `src/models/package-install-request.ts` |
| `PackageInstallResponse` | `packageInstallResponseSchema` | `src/models/package-install-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### keypress

- **Signature**: `keypress(request: Interact.KeypressRequest, options?: RequestOptions): ApiPromise<StandardResponse, Interact.KeypressError>`
- **Wire**: `POST /interact/keypress/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Interact.KeypressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Interact.KeypressRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `KeyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KeyRequest` | `keyRequestSchema` | `src/models/key-request.ts` |
| `StandardResponse` | `standardResponseSchema` | `src/models/standard-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### move

- **Signature**: `move(request: Interact.MoveRequest, options?: RequestOptions): ApiPromise<StandardResponse, Interact.MoveError>`
- **Wire**: `POST /interact/move/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Interact.MoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Interact.MoveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `MouseMoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MouseMoveRequest` | `mouseMoveRequestSchema` | `src/models/mouse-move-request.ts` |
| `StandardResponse` | `standardResponseSchema` | `src/models/standard-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### screenshot

- **Signature**: `screenshot(request: Interact.ScreenshotRequest, options?: RequestOptions): ApiPromise<ScreenshotResponse, Interact.ScreenshotError>`
- **Wire**: `POST /interact/screenshot/{instance_id}`
- **Auth**: `apikey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScreenshotResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Interact.ScreenshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Interact.ScreenshotRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScreenshotResponse` | `screenshotResponseSchema` | `src/models/screenshot-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### scroll

- **Signature**: `scroll(request: Interact.ScrollRequestParams, options?: RequestOptions): ApiPromise<StandardResponse, Interact.ScrollError>`
- **Wire**: `POST /interact/scroll/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Interact.ScrollError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Interact.ScrollRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `ScrollRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScrollRequest` | `scrollRequestSchema` | `src/models/scroll-request.ts` |
| `StandardResponse` | `standardResponseSchema` | `src/models/standard-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### type

- **Signature**: `type(request: Interact.TypeRequestParams, options?: RequestOptions): ApiPromise<StandardResponse, Interact.TypeError>`
- **Wire**: `POST /interact/type/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Interact.TypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Interact.TypeRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `TypeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypeRequest` | `typeRequestSchema` | `src/models/type-request.ts` |
| `StandardResponse` | `standardResponseSchema` | `src/models/standard-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

