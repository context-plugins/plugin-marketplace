<!-- Generated file — do not edit; regenerated with the SDK. -->

# SshKey — operations

Accessor: `client.sshKey` · Source: `src/resources/ssh-key.ts` · 5 operations · Request and error types: namespace `SshKey`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addSshKey

- **Signature**: `addSshKey(request: SshKey.AddSshKeyRequest, options?: RequestOptions): ApiPromise<undefined, SshKey.AddSshKeyError>`
- **Wire**: `POST /project/{vcs-type}/{username}/{project}/ssh-key`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `SshKey.AddSshKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SshKey.AddSshKeyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `body` | `body` | — | `ProjectProjectSshKeyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `ProjectProjectSshKeyRequest` | `projectProjectSshKeyRequestSchema` | `src/models/project-project-ssh-key-request.ts` |

### createCheckoutKey2

- **Signature**: `createCheckoutKey2(request: SshKey.CreateCheckoutKey2Request, options?: RequestOptions): ApiPromise<CheckoutKeyCircleCiRestApiV1SshKeyApi, SshKey.CreateCheckoutKey2Error>`
- **Wire**: `POST /project/{vcs-type}/{username}/{project}/checkout-key`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CheckoutKeyCircleCiRestApiV1SshKeyApi`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `SshKey.CreateCheckoutKey2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SshKey.CreateCheckoutKey2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `body` | `body` | — | `ProjectProjectCheckoutKeyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `ProjectProjectCheckoutKeyRequest` | `projectProjectCheckoutKeyRequestSchema` | `src/models/project-project-checkout-key-request.ts` |
| `CheckoutKeyCircleCiRestApiV1SshKeyApi` | `checkoutKeyCircleCiRestApiV1SshKeyApiSchema` | `src/models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.ts` |

### deleteCheckoutKey2

- **Signature**: `deleteCheckoutKey2(request: SshKey.DeleteCheckoutKey2Request, options?: RequestOptions): ApiPromise<ProjectProjectCheckoutKeyFingerprintResponse, SshKey.DeleteCheckoutKey2Error>`
- **Wire**: `DELETE /project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectProjectCheckoutKeyFingerprintResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `SshKey.DeleteCheckoutKey2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SshKey.DeleteCheckoutKey2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `fingerprint` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `ProjectProjectCheckoutKeyFingerprintResponse` | `projectProjectCheckoutKeyFingerprintResponseSchema` | `src/models/project-project-checkout-key-fingerprint-response.ts` |

### getCheckoutKey2

- **Signature**: `getCheckoutKey2(request: SshKey.GetCheckoutKey2Request, options?: RequestOptions): ApiPromise<CheckoutKeyCircleCiRestApiV1SshKeyApi, SshKey.GetCheckoutKey2Error>`
- **Wire**: `GET /project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckoutKeyCircleCiRestApiV1SshKeyApi`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `SshKey.GetCheckoutKey2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SshKey.GetCheckoutKey2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `fingerprint` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `CheckoutKeyCircleCiRestApiV1SshKeyApi` | `checkoutKeyCircleCiRestApiV1SshKeyApiSchema` | `src/models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.ts` |

### listCheckoutKeys2

- **Signature**: `listCheckoutKeys2(request: SshKey.ListCheckoutKeys2Request, options?: RequestOptions): ApiPromise<CheckoutKeyCircleCiRestApiV1SshKeyApi[], SshKey.ListCheckoutKeys2Error>`
- **Wire**: `GET /project/{vcs-type}/{username}/{project}/checkout-key`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckoutKeyCircleCiRestApiV1SshKeyApi[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `SshKey.ListCheckoutKeys2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SshKey.ListCheckoutKeys2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `CheckoutKeyCircleCiRestApiV1SshKeyApi` | `checkoutKeyCircleCiRestApiV1SshKeyApiSchema` | `src/models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.ts` |

