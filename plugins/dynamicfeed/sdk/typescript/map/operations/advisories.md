<!-- Generated file — do not edit; regenerated with the SDK. -->

# Advisories — operations

Accessor: `client.advisories` · Source: `src/resources/advisories.ts` · 2 operations · Request and error types: namespace `Advisories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### advisoriesAdvisoriesGet

- **Signature**: `advisoriesAdvisoriesGet(request?: Advisories.AdvisoriesAdvisoriesGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Advisories.AdvisoriesAdvisoriesGetError>`
- **Wire**: `GET /advisories`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Advisories.AdvisoriesAdvisoriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Advisories.AdvisoriesAdvisoriesGetRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `q` | `query` | — | `Q` | no | — |
| `package` | `query` | — | `Package` | no | — |
| `ecosystem` | `query` | — | `Ecosystem` | no | — |
| `severity` | `query` | — | `Severity` | no | — |
| `minCvss` | `query` | `min_cvss` | `MinCvss` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Q` | `qSchema` | `src/models/unions/q.ts` |
| `Package` | `packageSchema` | `src/models/unions/package.ts` |
| `Ecosystem` | `ecosystemSchema` | `src/models/unions/ecosystem.ts` |
| `Severity` | `severitySchema` | `src/models/unions/severity.ts` |
| `MinCvss` | `minCvssSchema` | `src/models/unions/min-cvss.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### advisoriesCheckAdvisoriesCheckGet

- **Signature**: `advisoriesCheckAdvisoriesCheckGet(request: Advisories.AdvisoriesCheckAdvisoriesCheckGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Advisories.AdvisoriesCheckAdvisoriesCheckGetError>`
- **Wire**: `GET /advisories/check`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Advisories.AdvisoriesCheckAdvisoriesCheckGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Advisories.AdvisoriesCheckAdvisoriesCheckGetRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `package` | `query` | — | `string` | yes |
| `version` | `query` | — | `Version` | no |
| `ecosystem` | `query` | — | `Ecosystem1` | no |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Version` | `versionSchema` | `src/models/unions/version.ts` |
| `Ecosystem1` | `ecosystem1Schema` | `src/models/unions/ecosystem1.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

