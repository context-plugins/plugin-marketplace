<!-- Generated file — do not edit; regenerated with the SDK. -->

# Utility — operations

Accessor: `client.utility` · Source: `src/resources/utility.ts` · 1 operation · Request and error types: namespace `Utility`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1TestLogin

- **Signature**: `getApiV1TestLogin(options?: RequestOptions): ApiPromise<PublicApiTestLoginResponse, Utility.GetApiV1TestLoginError>`
- **Wire**: `GET /api/v1/test-login`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiTestLoginResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Utility.GetApiV1TestLoginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiTestLoginResponse` | `publicApiTestLoginResponseSchema` | `src/models/public-api-test-login-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

