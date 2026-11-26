<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `src/resources/authentication.ts` · 4 operations · Request and error types: namespace `Authentication`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSessionInfo

- **Signature**: `getSessionInfo(request?: Authentication.GetSessionInfoRequest, options?: RequestOptions): ApiPromise<SessionInfoResponseDto, Authentication.GetSessionInfoError>`
- **Wire**: `GET /v3/login/session`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionInfoResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Authentication.GetSessionInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.GetSessionInfoRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionInfoResponseDto` | `sessionInfoResponseDtoSchema` | `src/models/session-info-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listAllOrganizations

- **Signature**: `listAllOrganizations(request?: Authentication.ListAllOrganizationsRequest, options?: RequestOptions): ApiPromise<ListAllResponseDtoAllOrganizationsResponseDto, Authentication.ListAllOrganizationsError>`
- **Wire**: `GET /v3/login/organizations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAllResponseDtoAllOrganizationsResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Authentication.ListAllOrganizationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.ListAllOrganizationsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAllResponseDtoAllOrganizationsResponseDto` | `listAllResponseDtoAllOrganizationsResponseDtoSchema` | `src/models/list-all-response-dto-all-organizations-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### login

- **Signature**: `login(request: Authentication.LoginRequest, options?: RequestOptions): ApiPromise<LoginResponseDto, Authentication.LoginError>`
- **Wire**: `POST /v3/login`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LoginResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Authentication.LoginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.LoginRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LoginRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginRequestDto` | `loginRequestDtoSchema` | `src/models/login-request-dto.ts` |
| `LoginResponseDto` | `loginResponseDtoSchema` | `src/models/login-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### logout

- **Signature**: `logout(request?: Authentication.LogoutRequest, options?: RequestOptions): ApiPromise<undefined, Authentication.LogoutError>`
- **Wire**: `POST /v3/logout`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `Authentication.LogoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.LogoutRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

