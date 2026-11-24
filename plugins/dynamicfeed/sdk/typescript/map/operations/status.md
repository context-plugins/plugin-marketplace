<!-- Generated file — do not edit; regenerated with the SDK. -->

# Status — operations

Accessor: `client.status` · Source: `src/resources/status.ts` · 1 operation · Request and error types: namespace `Status`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### statusStatusGet

- **Signature**: `statusStatusGet(request?: Status.StatusStatusGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Status.StatusStatusGetError>`
- **Wire**: `GET /status`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Status.StatusStatusGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Status.StatusStatusGetRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `category` | `query` | — | `Category` | no | — |
| `onlyIssues` | `query` | `only_issues` | `OnlyIssues` | no | — |
| `limit` | `query` | — | `number` | no | `100` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Category` | `categorySchema` | `src/models/unions/category.ts` |
| `OnlyIssues` | `onlyIssuesSchema` | `src/models/unions/only-issues.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

