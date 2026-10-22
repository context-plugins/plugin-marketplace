<!-- Generated file — do not edit; regenerated with the SDK. -->

# RelayProxyConfigurations — operations

Accessor: `client.relayProxyConfigurations` · Source: `src/resources/relay-proxy-configurations.ts` · 6 operations · Request and error types: namespace `RelayProxyConfigurations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteRelayAutoConfig

- **Signature**: `deleteRelayAutoConfig(request: RelayProxyConfigurations.DeleteRelayAutoConfigRequest, options?: RequestOptions): ApiPromise<undefined, RelayProxyConfigurations.DeleteRelayAutoConfigError>`
- **Wire**: `DELETE /api/v2/account/relay-auto-configs/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `RelayProxyConfigurations.DeleteRelayAutoConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RelayProxyConfigurations.DeleteRelayAutoConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getRelayProxyConfig

- **Signature**: `getRelayProxyConfig(request: RelayProxyConfigurations.GetRelayProxyConfigRequest, options?: RequestOptions): ApiPromise<RelayAutoConfigRep, RelayProxyConfigurations.GetRelayProxyConfigError>`
- **Wire**: `GET /api/v2/account/relay-auto-configs/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RelayAutoConfigRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `RelayProxyConfigurations.GetRelayProxyConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RelayProxyConfigurations.GetRelayProxyConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RelayAutoConfigRep` | `relayAutoConfigRepSchema` | `src/models/relay-auto-config-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getRelayProxyConfigs

- **Signature**: `getRelayProxyConfigs(options?: RequestOptions): ApiPromise<RelayAutoConfigCollectionRep, RelayProxyConfigurations.GetRelayProxyConfigsError>`
- **Wire**: `GET /api/v2/account/relay-auto-configs`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RelayAutoConfigCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `RelayProxyConfigurations.GetRelayProxyConfigsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RelayAutoConfigCollectionRep` | `relayAutoConfigCollectionRepSchema` | `src/models/relay-auto-config-collection-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchRelayAutoConfig

- **Signature**: `patchRelayAutoConfig(request: RelayProxyConfigurations.PatchRelayAutoConfigRequest, options?: RequestOptions): ApiPromise<RelayAutoConfigRep, RelayProxyConfigurations.PatchRelayAutoConfigError>`
- **Wire**: `PATCH /api/v2/account/relay-auto-configs/{id}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RelayAutoConfigRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `RelayProxyConfigurations.PatchRelayAutoConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"patchFailedErrorRep"` [422] `PatchFailedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RelayProxyConfigurations.PatchRelayAutoConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PatchWithComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchWithComment` | `patchWithCommentSchema` | `src/models/patch-with-comment.ts` |
| `RelayAutoConfigRep` | `relayAutoConfigRepSchema` | `src/models/relay-auto-config-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `PatchFailedErrorRep` | `patchFailedErrorRepSchema` | `src/models/patch-failed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postRelayAutoConfig

- **Signature**: `postRelayAutoConfig(request: RelayProxyConfigurations.PostRelayAutoConfigRequest, options?: RequestOptions): ApiPromise<RelayAutoConfigRep, RelayProxyConfigurations.PostRelayAutoConfigError>`
- **Wire**: `POST /api/v2/account/relay-auto-configs`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RelayAutoConfigRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `RelayProxyConfigurations.PostRelayAutoConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RelayProxyConfigurations.PostRelayAutoConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RelayAutoConfigPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RelayAutoConfigPost` | `relayAutoConfigPostSchema` | `src/models/relay-auto-config-post.ts` |
| `RelayAutoConfigRep` | `relayAutoConfigRepSchema` | `src/models/relay-auto-config-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### resetRelayAutoConfig

- **Signature**: `resetRelayAutoConfig(request: RelayProxyConfigurations.ResetRelayAutoConfigRequest, options?: RequestOptions): ApiPromise<RelayAutoConfigRep, RelayProxyConfigurations.ResetRelayAutoConfigError>`
- **Wire**: `POST /api/v2/account/relay-auto-configs/{id}/reset`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RelayAutoConfigRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `RelayProxyConfigurations.ResetRelayAutoConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RelayProxyConfigurations.ResetRelayAutoConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `expiry` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RelayAutoConfigRep` | `relayAutoConfigRepSchema` | `src/models/relay-auto-config-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

