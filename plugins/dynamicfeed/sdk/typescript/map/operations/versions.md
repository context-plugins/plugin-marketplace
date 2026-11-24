<!-- Generated file — do not edit; regenerated with the SDK. -->

# Versions — operations

Accessor: `client.versions` · Source: `src/resources/versions.ts` · 1 operation · Request and error types: namespace `Versions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### versionsVersionsGet

- **Signature**: `versionsVersionsGet(request?: Versions.VersionsVersionsGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Versions.VersionsVersionsGetError>`
- **Wire**: `GET /versions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Versions.VersionsVersionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versions.VersionsVersionsGetRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `product` | `query` | — | `Product` | no | — |
| `q` | `query` | — | `Q` | no | — |
| `category` | `query` | — | `Category` | no | — |
| `onlySupported` | `query` | `only_supported` | `OnlySupported` | no | — |
| `onlyLts` | `query` | `only_lts` | `OnlyLts` | no | — |
| `limit` | `query` | — | `number` | no | `100` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Product` | `productSchema` | `src/models/unions/product.ts` |
| `Q` | `qSchema` | `src/models/unions/q.ts` |
| `Category` | `categorySchema` | `src/models/unions/category.ts` |
| `OnlySupported` | `onlySupportedSchema` | `src/models/unions/only-supported.ts` |
| `OnlyLts` | `onlyLtsSchema` | `src/models/unions/only-lts.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

