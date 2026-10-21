<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuth2Clients — operations

Accessor: `client.oAuth2Clients` · Source: `src/resources/oauth2-clients.ts` · 5 operations · Request and error types: namespace `OAuth2Clients`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createOAuth2Client

- **Signature**: `createOAuth2Client(request: OAuth2Clients.CreateOAuth2ClientRequest, options?: RequestOptions): ApiPromise<Client, OAuth2Clients.CreateOAuth2ClientError>`
- **Wire**: `POST /api/v2/oauth/clients`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Client`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `OAuth2Clients.CreateOAuth2ClientError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuth2Clients.CreateOAuth2ClientRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OauthClientPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthClientPost` | `oauthClientPostSchema` | `src/models/oauth-client-post.ts` |
| `Client` | `clientSchema` | `src/models/client.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |

### deleteOAuthClient

- **Signature**: `deleteOAuthClient(request: OAuth2Clients.DeleteOAuthClientRequest, options?: RequestOptions): ApiPromise<undefined, OAuth2Clients.DeleteOAuthClientError>`
- **Wire**: `DELETE /api/v2/oauth/clients/{clientId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `OAuth2Clients.DeleteOAuthClientError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuth2Clients.DeleteOAuthClientRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `clientId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### getOAuthClientById

- **Signature**: `getOAuthClientById(request: OAuth2Clients.GetOAuthClientByIdRequest, options?: RequestOptions): ApiPromise<Client, OAuth2Clients.GetOAuthClientByIdError>`
- **Wire**: `GET /api/v2/oauth/clients/{clientId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Client`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `OAuth2Clients.GetOAuthClientByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuth2Clients.GetOAuthClientByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `clientId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Client` | `clientSchema` | `src/models/client.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### getOAuthClients

- **Signature**: `getOAuthClients(options?: RequestOptions): ApiPromise<ClientCollection, OAuth2Clients.GetOAuthClientsError>`
- **Wire**: `GET /api/v2/oauth/clients`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `OAuth2Clients.GetOAuthClientsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientCollection` | `clientCollectionSchema` | `src/models/client-collection.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |

### patchOAuthClient

- **Signature**: `patchOAuthClient(request: OAuth2Clients.PatchOAuthClientRequest, options?: RequestOptions): ApiPromise<Client, OAuth2Clients.PatchOAuthClientError>`
- **Wire**: `PATCH /api/v2/oauth/clients/{clientId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Client`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `OAuth2Clients.PatchOAuthClientError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuth2Clients.PatchOAuthClientRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `clientId` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `Client` | `clientSchema` | `src/models/client.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

