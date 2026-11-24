<!-- Generated file — do not edit; regenerated with the SDK. -->

# SecFilings — operations

Accessor: `client.secFilings` · Source: `src/resources/sec-filings.ts` · 1 operation · Request and error types: namespace `SecFilings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### secFilingsSecFilingsGet

- **Signature**: `secFilingsSecFilingsGet(request?: SecFilings.SecFilingsSecFilingsGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, SecFilings.SecFilingsSecFilingsGetError>`
- **Wire**: `GET /sec-filings`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `SecFilings.SecFilingsSecFilingsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SecFilings.SecFilingsSecFilingsGetRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `ticker` | `query` | — | `string` | no | — |
| `form` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `15` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

