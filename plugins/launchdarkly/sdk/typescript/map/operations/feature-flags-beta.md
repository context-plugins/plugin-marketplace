<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureFlagsBeta — operations

Accessor: `client.featureFlagsBeta` · Source: `src/resources/feature-flags-beta.ts` · 2 operations · Request and error types: namespace `FeatureFlagsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDependentFlags

- **Signature**: `getDependentFlags(request: FeatureFlagsBeta.GetDependentFlagsRequest, options?: RequestOptions): ApiPromise<MultiEnvironmentDependentFlags, FeatureFlagsBeta.GetDependentFlagsError>`
- **Wire**: `GET /api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MultiEnvironmentDependentFlags`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsBeta.GetDependentFlagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsBeta.GetDependentFlagsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MultiEnvironmentDependentFlags` | `multiEnvironmentDependentFlagsSchema` | `src/models/multi-environment-dependent-flags.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getDependentFlagsByEnv

- **Signature**: `getDependentFlagsByEnv(request: FeatureFlagsBeta.GetDependentFlagsByEnvRequest, options?: RequestOptions): ApiPromise<DependentFlagsByEnvironment, FeatureFlagsBeta.GetDependentFlagsByEnvError>`
- **Wire**: `GET /api/v2/flags/{projectKey}/{environmentKey}/{featureFlagKey}/dependent-flags`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DependentFlagsByEnvironment`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsBeta.GetDependentFlagsByEnvError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsBeta.GetDependentFlagsByEnvRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DependentFlagsByEnvironment` | `dependentFlagsByEnvironmentSchema` | `src/models/dependent-flags-by-environment.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

