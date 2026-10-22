<!-- Generated file — do not edit; regenerated with the SDK. -->

# Other — operations

Accessor: `client.other` · Source: `src/resources/other.ts` · 5 operations · Request and error types: namespace `Other`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCallerIdentity

- **Signature**: `getCallerIdentity(options?: RequestOptions): ApiPromise<CallerIdentityRep, Other.GetCallerIdentityError>`
- **Wire**: `GET /api/v2/caller-identity`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CallerIdentityRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Other.GetCallerIdentityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CallerIdentityRep` | `callerIdentityRepSchema` | `src/models/caller-identity-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getIps

- **Signature**: `getIps(options?: RequestOptions): ApiPromise<IpList, Other.GetIpsError>`
- **Wire**: `GET /api/v2/public-ip-list`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IpList`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Other.GetIpsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IpList` | `ipListSchema` | `src/models/ip-list.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getOpenapiSpec

- **Signature**: `getOpenapiSpec(options?: RequestOptions): ApiPromise<undefined, Other.GetOpenapiSpecError>`
- **Wire**: `GET /api/v2/openapi.json`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Other.GetOpenapiSpecError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getRoot

- **Signature**: `getRoot(options?: RequestOptions): ApiPromise<RootResponse, Other.GetRootError>`
- **Wire**: `GET /api/v2`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RootResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Other.GetRootError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RootResponse` | `rootResponseSchema` | `src/models/root-response.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getVersions

- **Signature**: `getVersions(options?: RequestOptions): ApiPromise<VersionsRep, Other.GetVersionsError>`
- **Wire**: `GET /api/v2/versions`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VersionsRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Other.GetVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `VersionsRep` | `versionsRepSchema` | `src/models/versions-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

