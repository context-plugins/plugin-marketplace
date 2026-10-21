<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntrospectionEndpoint — operations

Accessor: `client.introspectionEndpoint` · Source: `src/resources/introspection-endpoint.ts` · 2 operations · Request and error types: namespace `IntrospectionEndpoint`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authIntrospectionApi

- **Signature**: `authIntrospectionApi(request: IntrospectionEndpoint.AuthIntrospectionApiRequest, options?: RequestOptions): ApiPromise<IntrospectionResponse, IntrospectionEndpoint.AuthIntrospectionApiError>`
- **Wire**: `POST /api/{serviceId}/auth/introspection`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntrospectionResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `IntrospectionEndpoint.AuthIntrospectionApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntrospectionEndpoint.AuthIntrospectionApiRequest` (18):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `token` | `form` | `string` | yes |
| `scopes` | `form` | `string[]` | no |
| `subject` | `form` | `string` | no |
| `clientCertificate` | `form` | `string` | no |
| `dpop` | `form` | `string` | no |
| `htm` | `form` | `string` | no |
| `htu` | `form` | `string` | no |
| `resources` | `form` | `string[]` | no |
| `acrValues` | `form` | `string[]` | no |
| `maxAge` | `form` | `number` | no |
| `requiredComponents` | `form` | `string[]` | no |
| `uri` | `form` | `string` | no |
| `message` | `form` | `string` | no |
| `headers` | `form` | `Pair[]` | no |
| `targetUri` | `form` | `string` | no |
| `dpopNonceRequired` | `form` | `boolean` | no |
| `requestBodyContained` | `form` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pair` | `pairSchema` | `src/models/pair.ts` |
| `IntrospectionResponse` | `introspectionResponseSchema` | `src/models/introspection-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authIntrospectionStandardApi

- **Signature**: `authIntrospectionStandardApi(request: IntrospectionEndpoint.AuthIntrospectionStandardApiRequest, options?: RequestOptions): ApiPromise<StandardIntrospectionResponse, IntrospectionEndpoint.AuthIntrospectionStandardApiError>`
- **Wire**: `POST /api/{serviceId}/auth/introspection/standard`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardIntrospectionResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `IntrospectionEndpoint.AuthIntrospectionStandardApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntrospectionEndpoint.AuthIntrospectionStandardApiRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `parameters` | `form` | `string` | yes |
| `withHiddenProperties` | `form` | `boolean` | no |
| `rsUri` | `form` | `string` | no |
| `httpAcceptHeader` | `form` | `string` | no |
| `introspectionSignAlg` | `form` | `string` | no |
| `introspectionEncryptionAlg` | `form` | `string` | no |
| `introspectionEncryptionEnc` | `form` | `string` | no |
| `sharedKeyForSign` | `form` | `string` | no |
| `sharedKeyForEncryption` | `form` | `string` | no |
| `publicKeyForEncryption` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StandardIntrospectionResponse` | `standardIntrospectionResponseSchema` | `src/models/standard-introspection-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

