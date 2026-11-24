<!-- Generated file — do not edit; regenerated with the SDK. -->

# SocialAccountApi — operations

Accessor: `client.socialAccountApi` · Source: `src/resources/social-account-api.ts` · 13 operations · Request and error types: namespace `SocialAccountApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### socialAccountConnect

- **Signature**: `socialAccountConnect(request?: SocialAccountApi.SocialAccountConnectRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountConnectResponse, SocialAccountApi.SocialAccountConnectError>`
- **Wire**: `POST /api/v1/social-account/connect`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountConnectResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountConnectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountConnect400Error1"` [400] `ApiV1SocialAccountConnect400Error1` · `"apiV1SocialAccountConnect401Error1"` [401] `ApiV1SocialAccountConnect401Error1` · `"apiV1SocialAccountConnect403Error1"` [403] `ApiV1SocialAccountConnect403Error1` · `"apiV1SocialAccountConnect404Error1"` [404] `ApiV1SocialAccountConnect404Error1` · `"apiV1SocialAccountConnect429Error1"` [429] `ApiV1SocialAccountConnect429Error1` · `"apiV1SocialAccountConnect500Error1"` [500] `ApiV1SocialAccountConnect500Error1` · `"apiV1SocialAccountConnect502Error1"` [502] `ApiV1SocialAccountConnect502Error1` · `"apiV1SocialAccountConnect503Error1"` [503] `ApiV1SocialAccountConnect503Error1` · `"apiV1SocialAccountConnect504Error1"` [504] `ApiV1SocialAccountConnect504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountConnectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountConnectRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountConnectRequest` | `apiV1SocialAccountConnectRequestSchema` | `src/models/api-v1-social-account-connect-request.ts` |
| `ApiV1SocialAccountConnectResponse` | `apiV1SocialAccountConnectResponseSchema` | `src/models/api-v1-social-account-connect-response.ts` |
| `ApiV1SocialAccountConnect400Error1` | `apiV1SocialAccountConnect400Error1Schema` | `src/models/api-v1-social-account-connect400-error1.ts` |
| `ApiV1SocialAccountConnect401Error1` | `apiV1SocialAccountConnect401Error1Schema` | `src/models/api-v1-social-account-connect401-error1.ts` |
| `ApiV1SocialAccountConnect403Error1` | `apiV1SocialAccountConnect403Error1Schema` | `src/models/api-v1-social-account-connect403-error1.ts` |
| `ApiV1SocialAccountConnect404Error1` | `apiV1SocialAccountConnect404Error1Schema` | `src/models/api-v1-social-account-connect404-error1.ts` |
| `ApiV1SocialAccountConnect429Error1` | `apiV1SocialAccountConnect429Error1Schema` | `src/models/api-v1-social-account-connect429-error1.ts` |
| `ApiV1SocialAccountConnect500Error1` | `apiV1SocialAccountConnect500Error1Schema` | `src/models/api-v1-social-account-connect500-error1.ts` |
| `ApiV1SocialAccountConnect502Error1` | `apiV1SocialAccountConnect502Error1Schema` | `src/models/api-v1-social-account-connect502-error1.ts` |
| `ApiV1SocialAccountConnect503Error1` | `apiV1SocialAccountConnect503Error1Schema` | `src/models/api-v1-social-account-connect503-error1.ts` |
| `ApiV1SocialAccountConnect504Error1` | `apiV1SocialAccountConnect504Error1Schema` | `src/models/api-v1-social-account-connect504-error1.ts` |

### socialAccountConnectionCheck

- **Signature**: `socialAccountConnectionCheck(request?: SocialAccountApi.SocialAccountConnectionCheckRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountConnectionCheckResponse, SocialAccountApi.SocialAccountConnectionCheckError>`
- **Wire**: `POST /api/v1/social-account/connection-check`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountConnectionCheckResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountConnectionCheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountConnectionCheck400Error1"` [400] `ApiV1SocialAccountConnectionCheck400Error1` · `"apiV1SocialAccountConnectionCheck401Error1"` [401] `ApiV1SocialAccountConnectionCheck401Error1` · `"apiV1SocialAccountConnectionCheck403Error1"` [403] `ApiV1SocialAccountConnectionCheck403Error1` · `"apiV1SocialAccountConnectionCheck404Error1"` [404] `ApiV1SocialAccountConnectionCheck404Error1` · `"apiV1SocialAccountConnectionCheck429Error1"` [429] `ApiV1SocialAccountConnectionCheck429Error1` · `"apiV1SocialAccountConnectionCheck500Error1"` [500] `ApiV1SocialAccountConnectionCheck500Error1` · `"apiV1SocialAccountConnectionCheck502Error1"` [502] `ApiV1SocialAccountConnectionCheck502Error1` · `"apiV1SocialAccountConnectionCheck503Error1"` [503] `ApiV1SocialAccountConnectionCheck503Error1` · `"apiV1SocialAccountConnectionCheck504Error1"` [504] `ApiV1SocialAccountConnectionCheck504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountConnectionCheckRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountConnectionCheckRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountConnectionCheckRequest` | `apiV1SocialAccountConnectionCheckRequestSchema` | `src/models/api-v1-social-account-connection-check-request.ts` |
| `ApiV1SocialAccountConnectionCheckResponse` | `apiV1SocialAccountConnectionCheckResponseSchema` | `src/models/api-v1-social-account-connection-check-response.ts` |
| `ApiV1SocialAccountConnectionCheck400Error1` | `apiV1SocialAccountConnectionCheck400Error1Schema` | `src/models/api-v1-social-account-connection-check400-error1.ts` |
| `ApiV1SocialAccountConnectionCheck401Error1` | `apiV1SocialAccountConnectionCheck401Error1Schema` | `src/models/api-v1-social-account-connection-check401-error1.ts` |
| `ApiV1SocialAccountConnectionCheck403Error1` | `apiV1SocialAccountConnectionCheck403Error1Schema` | `src/models/api-v1-social-account-connection-check403-error1.ts` |
| `ApiV1SocialAccountConnectionCheck404Error1` | `apiV1SocialAccountConnectionCheck404Error1Schema` | `src/models/api-v1-social-account-connection-check404-error1.ts` |
| `ApiV1SocialAccountConnectionCheck429Error1` | `apiV1SocialAccountConnectionCheck429Error1Schema` | `src/models/api-v1-social-account-connection-check429-error1.ts` |
| `ApiV1SocialAccountConnectionCheck500Error1` | `apiV1SocialAccountConnectionCheck500Error1Schema` | `src/models/api-v1-social-account-connection-check500-error1.ts` |
| `ApiV1SocialAccountConnectionCheck502Error1` | `apiV1SocialAccountConnectionCheck502Error1Schema` | `src/models/api-v1-social-account-connection-check502-error1.ts` |
| `ApiV1SocialAccountConnectionCheck503Error1` | `apiV1SocialAccountConnectionCheck503Error1Schema` | `src/models/api-v1-social-account-connection-check503-error1.ts` |
| `ApiV1SocialAccountConnectionCheck504Error1` | `apiV1SocialAccountConnectionCheck504Error1Schema` | `src/models/api-v1-social-account-connection-check504-error1.ts` |

### socialAccountCopy

- **Signature**: `socialAccountCopy(request?: SocialAccountApi.SocialAccountCopyRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountCopyResponse[], SocialAccountApi.SocialAccountCopyError>`
- **Wire**: `POST /api/v1/social-account/copy`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountCopyResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountCopyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountCopy400Error1"` [400] `ApiV1SocialAccountCopy400Error1` · `"apiV1SocialAccountCopy401Error1"` [401] `ApiV1SocialAccountCopy401Error1` · `"apiV1SocialAccountCopy403Error1"` [403] `ApiV1SocialAccountCopy403Error1` · `"apiV1SocialAccountCopy404Error1"` [404] `ApiV1SocialAccountCopy404Error1` · `"apiV1SocialAccountCopy429Error1"` [429] `ApiV1SocialAccountCopy429Error1` · `"apiV1SocialAccountCopy500Error1"` [500] `ApiV1SocialAccountCopy500Error1` · `"apiV1SocialAccountCopy502Error1"` [502] `ApiV1SocialAccountCopy502Error1` · `"apiV1SocialAccountCopy503Error1"` [503] `ApiV1SocialAccountCopy503Error1` · `"apiV1SocialAccountCopy504Error1"` [504] `ApiV1SocialAccountCopy504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountCopyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountCopyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountCopyRequest` | `apiV1SocialAccountCopyRequestSchema` | `src/models/api-v1-social-account-copy-request.ts` |
| `ApiV1SocialAccountCopyResponse` | `apiV1SocialAccountCopyResponseSchema` | `src/models/api-v1-social-account-copy-response.ts` |
| `ApiV1SocialAccountCopy400Error1` | `apiV1SocialAccountCopy400Error1Schema` | `src/models/api-v1-social-account-copy400-error1.ts` |
| `ApiV1SocialAccountCopy401Error1` | `apiV1SocialAccountCopy401Error1Schema` | `src/models/api-v1-social-account-copy401-error1.ts` |
| `ApiV1SocialAccountCopy403Error1` | `apiV1SocialAccountCopy403Error1Schema` | `src/models/api-v1-social-account-copy403-error1.ts` |
| `ApiV1SocialAccountCopy404Error1` | `apiV1SocialAccountCopy404Error1Schema` | `src/models/api-v1-social-account-copy404-error1.ts` |
| `ApiV1SocialAccountCopy429Error1` | `apiV1SocialAccountCopy429Error1Schema` | `src/models/api-v1-social-account-copy429-error1.ts` |
| `ApiV1SocialAccountCopy500Error1` | `apiV1SocialAccountCopy500Error1Schema` | `src/models/api-v1-social-account-copy500-error1.ts` |
| `ApiV1SocialAccountCopy502Error1` | `apiV1SocialAccountCopy502Error1Schema` | `src/models/api-v1-social-account-copy502-error1.ts` |
| `ApiV1SocialAccountCopy503Error1` | `apiV1SocialAccountCopy503Error1Schema` | `src/models/api-v1-social-account-copy503-error1.ts` |
| `ApiV1SocialAccountCopy504Error1` | `apiV1SocialAccountCopy504Error1Schema` | `src/models/api-v1-social-account-copy504-error1.ts` |

### socialAccountCreatePortalLink

- **Signature**: `socialAccountCreatePortalLink(request?: SocialAccountApi.SocialAccountCreatePortalLinkRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountCreatePortalLinkResponse, SocialAccountApi.SocialAccountCreatePortalLinkError>`
- **Wire**: `POST /api/v1/social-account/create-portal-link`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountCreatePortalLinkResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountCreatePortalLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountCreatePortalLink400Error1"` [400] `ApiV1SocialAccountCreatePortalLink400Error1` · `"apiV1SocialAccountCreatePortalLink401Error1"` [401] `ApiV1SocialAccountCreatePortalLink401Error1` · `"apiV1SocialAccountCreatePortalLink403Error1"` [403] `ApiV1SocialAccountCreatePortalLink403Error1` · `"apiV1SocialAccountCreatePortalLink404Error1"` [404] `ApiV1SocialAccountCreatePortalLink404Error1` · `"apiV1SocialAccountCreatePortalLink429Error1"` [429] `ApiV1SocialAccountCreatePortalLink429Error1` · `"apiV1SocialAccountCreatePortalLink500Error1"` [500] `ApiV1SocialAccountCreatePortalLink500Error1` · `"apiV1SocialAccountCreatePortalLink502Error1"` [502] `ApiV1SocialAccountCreatePortalLink502Error1` · `"apiV1SocialAccountCreatePortalLink503Error1"` [503] `ApiV1SocialAccountCreatePortalLink503Error1` · `"apiV1SocialAccountCreatePortalLink504Error1"` [504] `ApiV1SocialAccountCreatePortalLink504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountCreatePortalLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountCreatePortalLinkRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountCreatePortalLinkRequest` | `apiV1SocialAccountCreatePortalLinkRequestSchema` | `src/models/api-v1-social-account-create-portal-link-request.ts` |
| `ApiV1SocialAccountCreatePortalLinkResponse` | `apiV1SocialAccountCreatePortalLinkResponseSchema` | `src/models/api-v1-social-account-create-portal-link-response.ts` |
| `ApiV1SocialAccountCreatePortalLink400Error1` | `apiV1SocialAccountCreatePortalLink400Error1Schema` | `src/models/api-v1-social-account-create-portal-link400-error1.ts` |
| `ApiV1SocialAccountCreatePortalLink401Error1` | `apiV1SocialAccountCreatePortalLink401Error1Schema` | `src/models/api-v1-social-account-create-portal-link401-error1.ts` |
| `ApiV1SocialAccountCreatePortalLink403Error1` | `apiV1SocialAccountCreatePortalLink403Error1Schema` | `src/models/api-v1-social-account-create-portal-link403-error1.ts` |
| `ApiV1SocialAccountCreatePortalLink404Error1` | `apiV1SocialAccountCreatePortalLink404Error1Schema` | `src/models/api-v1-social-account-create-portal-link404-error1.ts` |
| `ApiV1SocialAccountCreatePortalLink429Error1` | `apiV1SocialAccountCreatePortalLink429Error1Schema` | `src/models/api-v1-social-account-create-portal-link429-error1.ts` |
| `ApiV1SocialAccountCreatePortalLink500Error1` | `apiV1SocialAccountCreatePortalLink500Error1Schema` | `src/models/api-v1-social-account-create-portal-link500-error1.ts` |
| `ApiV1SocialAccountCreatePortalLink502Error1` | `apiV1SocialAccountCreatePortalLink502Error1Schema` | `src/models/api-v1-social-account-create-portal-link502-error1.ts` |
| `ApiV1SocialAccountCreatePortalLink503Error1` | `apiV1SocialAccountCreatePortalLink503Error1Schema` | `src/models/api-v1-social-account-create-portal-link503-error1.ts` |
| `ApiV1SocialAccountCreatePortalLink504Error1` | `apiV1SocialAccountCreatePortalLink504Error1Schema` | `src/models/api-v1-social-account-create-portal-link504-error1.ts` |

### socialAccountDisableMessaging

- **Signature**: `socialAccountDisableMessaging(request?: SocialAccountApi.SocialAccountDisableMessagingRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountMessagingDisableResponse, SocialAccountApi.SocialAccountDisableMessagingError>`
- **Wire**: `POST /api/v1/social-account/messaging/disable`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountMessagingDisableResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountDisableMessagingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountMessagingDisable400Error1"` [400] `ApiV1SocialAccountMessagingDisable400Error1` · `"apiV1SocialAccountMessagingDisable401Error1"` [401] `ApiV1SocialAccountMessagingDisable401Error1` · `"apiV1SocialAccountMessagingDisable403Error1"` [403] `ApiV1SocialAccountMessagingDisable403Error1` · `"apiV1SocialAccountMessagingDisable404Error1"` [404] `ApiV1SocialAccountMessagingDisable404Error1` · `"apiV1SocialAccountMessagingDisable429Error1"` [429] `ApiV1SocialAccountMessagingDisable429Error1` · `"apiV1SocialAccountMessagingDisable500Error1"` [500] `ApiV1SocialAccountMessagingDisable500Error1` · `"apiV1SocialAccountMessagingDisable502Error1"` [502] `ApiV1SocialAccountMessagingDisable502Error1` · `"apiV1SocialAccountMessagingDisable503Error1"` [503] `ApiV1SocialAccountMessagingDisable503Error1` · `"apiV1SocialAccountMessagingDisable504Error1"` [504] `ApiV1SocialAccountMessagingDisable504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountDisableMessagingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountMessagingDisableRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountMessagingDisableRequest` | `apiV1SocialAccountMessagingDisableRequestSchema` | `src/models/api-v1-social-account-messaging-disable-request.ts` |
| `ApiV1SocialAccountMessagingDisableResponse` | `apiV1SocialAccountMessagingDisableResponseSchema` | `src/models/api-v1-social-account-messaging-disable-response.ts` |
| `ApiV1SocialAccountMessagingDisable400Error1` | `apiV1SocialAccountMessagingDisable400Error1Schema` | `src/models/api-v1-social-account-messaging-disable400-error1.ts` |
| `ApiV1SocialAccountMessagingDisable401Error1` | `apiV1SocialAccountMessagingDisable401Error1Schema` | `src/models/api-v1-social-account-messaging-disable401-error1.ts` |
| `ApiV1SocialAccountMessagingDisable403Error1` | `apiV1SocialAccountMessagingDisable403Error1Schema` | `src/models/api-v1-social-account-messaging-disable403-error1.ts` |
| `ApiV1SocialAccountMessagingDisable404Error1` | `apiV1SocialAccountMessagingDisable404Error1Schema` | `src/models/api-v1-social-account-messaging-disable404-error1.ts` |
| `ApiV1SocialAccountMessagingDisable429Error1` | `apiV1SocialAccountMessagingDisable429Error1Schema` | `src/models/api-v1-social-account-messaging-disable429-error1.ts` |
| `ApiV1SocialAccountMessagingDisable500Error1` | `apiV1SocialAccountMessagingDisable500Error1Schema` | `src/models/api-v1-social-account-messaging-disable500-error1.ts` |
| `ApiV1SocialAccountMessagingDisable502Error1` | `apiV1SocialAccountMessagingDisable502Error1Schema` | `src/models/api-v1-social-account-messaging-disable502-error1.ts` |
| `ApiV1SocialAccountMessagingDisable503Error1` | `apiV1SocialAccountMessagingDisable503Error1Schema` | `src/models/api-v1-social-account-messaging-disable503-error1.ts` |
| `ApiV1SocialAccountMessagingDisable504Error1` | `apiV1SocialAccountMessagingDisable504Error1Schema` | `src/models/api-v1-social-account-messaging-disable504-error1.ts` |

### socialAccountDisconnect

- **Signature**: `socialAccountDisconnect(request?: SocialAccountApi.SocialAccountDisconnectRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountDisconnectResponse, SocialAccountApi.SocialAccountDisconnectError>`
- **Wire**: `DELETE /api/v1/social-account/disconnect`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountDisconnectResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountDisconnectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountDisconnect400Error1"` [400] `ApiV1SocialAccountDisconnect400Error1` · `"apiV1SocialAccountDisconnect401Error1"` [401] `ApiV1SocialAccountDisconnect401Error1` · `"apiV1SocialAccountDisconnect403Error1"` [403] `ApiV1SocialAccountDisconnect403Error1` · `"apiV1SocialAccountDisconnect404Error1"` [404] `ApiV1SocialAccountDisconnect404Error1` · `"apiV1SocialAccountDisconnect429Error1"` [429] `ApiV1SocialAccountDisconnect429Error1` · `"apiV1SocialAccountDisconnect500Error1"` [500] `ApiV1SocialAccountDisconnect500Error1` · `"apiV1SocialAccountDisconnect502Error1"` [502] `ApiV1SocialAccountDisconnect502Error1` · `"apiV1SocialAccountDisconnect503Error1"` [503] `ApiV1SocialAccountDisconnect503Error1` · `"apiV1SocialAccountDisconnect504Error1"` [504] `ApiV1SocialAccountDisconnect504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountDisconnectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountDisconnectRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountDisconnectRequest` | `apiV1SocialAccountDisconnectRequestSchema` | `src/models/api-v1-social-account-disconnect-request.ts` |
| `ApiV1SocialAccountDisconnectResponse` | `apiV1SocialAccountDisconnectResponseSchema` | `src/models/api-v1-social-account-disconnect-response.ts` |
| `ApiV1SocialAccountDisconnect400Error1` | `apiV1SocialAccountDisconnect400Error1Schema` | `src/models/api-v1-social-account-disconnect400-error1.ts` |
| `ApiV1SocialAccountDisconnect401Error1` | `apiV1SocialAccountDisconnect401Error1Schema` | `src/models/api-v1-social-account-disconnect401-error1.ts` |
| `ApiV1SocialAccountDisconnect403Error1` | `apiV1SocialAccountDisconnect403Error1Schema` | `src/models/api-v1-social-account-disconnect403-error1.ts` |
| `ApiV1SocialAccountDisconnect404Error1` | `apiV1SocialAccountDisconnect404Error1Schema` | `src/models/api-v1-social-account-disconnect404-error1.ts` |
| `ApiV1SocialAccountDisconnect429Error1` | `apiV1SocialAccountDisconnect429Error1Schema` | `src/models/api-v1-social-account-disconnect429-error1.ts` |
| `ApiV1SocialAccountDisconnect500Error1` | `apiV1SocialAccountDisconnect500Error1Schema` | `src/models/api-v1-social-account-disconnect500-error1.ts` |
| `ApiV1SocialAccountDisconnect502Error1` | `apiV1SocialAccountDisconnect502Error1Schema` | `src/models/api-v1-social-account-disconnect502-error1.ts` |
| `ApiV1SocialAccountDisconnect503Error1` | `apiV1SocialAccountDisconnect503Error1Schema` | `src/models/api-v1-social-account-disconnect503-error1.ts` |
| `ApiV1SocialAccountDisconnect504Error1` | `apiV1SocialAccountDisconnect504Error1Schema` | `src/models/api-v1-social-account-disconnect504-error1.ts` |

### socialAccountEnableMessaging

- **Signature**: `socialAccountEnableMessaging(request?: SocialAccountApi.SocialAccountEnableMessagingRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountMessagingEnableResponse, SocialAccountApi.SocialAccountEnableMessagingError>`
- **Wire**: `POST /api/v1/social-account/messaging/enable`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountMessagingEnableResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountEnableMessagingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountMessagingEnable400Error1"` [400] `ApiV1SocialAccountMessagingEnable400Error1` · `"apiV1SocialAccountMessagingEnable401Error1"` [401] `ApiV1SocialAccountMessagingEnable401Error1` · `"apiV1SocialAccountMessagingEnable403Error1"` [403] `ApiV1SocialAccountMessagingEnable403Error1` · `"apiV1SocialAccountMessagingEnable404Error1"` [404] `ApiV1SocialAccountMessagingEnable404Error1` · `"apiV1SocialAccountMessagingEnable429Error1"` [429] `ApiV1SocialAccountMessagingEnable429Error1` · `"apiV1SocialAccountMessagingEnable500Error1"` [500] `ApiV1SocialAccountMessagingEnable500Error1` · `"apiV1SocialAccountMessagingEnable502Error1"` [502] `ApiV1SocialAccountMessagingEnable502Error1` · `"apiV1SocialAccountMessagingEnable503Error1"` [503] `ApiV1SocialAccountMessagingEnable503Error1` · `"apiV1SocialAccountMessagingEnable504Error1"` [504] `ApiV1SocialAccountMessagingEnable504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountEnableMessagingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountMessagingEnableRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountMessagingEnableRequest` | `apiV1SocialAccountMessagingEnableRequestSchema` | `src/models/api-v1-social-account-messaging-enable-request.ts` |
| `ApiV1SocialAccountMessagingEnableResponse` | `apiV1SocialAccountMessagingEnableResponseSchema` | `src/models/api-v1-social-account-messaging-enable-response.ts` |
| `ApiV1SocialAccountMessagingEnable400Error1` | `apiV1SocialAccountMessagingEnable400Error1Schema` | `src/models/api-v1-social-account-messaging-enable400-error1.ts` |
| `ApiV1SocialAccountMessagingEnable401Error1` | `apiV1SocialAccountMessagingEnable401Error1Schema` | `src/models/api-v1-social-account-messaging-enable401-error1.ts` |
| `ApiV1SocialAccountMessagingEnable403Error1` | `apiV1SocialAccountMessagingEnable403Error1Schema` | `src/models/api-v1-social-account-messaging-enable403-error1.ts` |
| `ApiV1SocialAccountMessagingEnable404Error1` | `apiV1SocialAccountMessagingEnable404Error1Schema` | `src/models/api-v1-social-account-messaging-enable404-error1.ts` |
| `ApiV1SocialAccountMessagingEnable429Error1` | `apiV1SocialAccountMessagingEnable429Error1Schema` | `src/models/api-v1-social-account-messaging-enable429-error1.ts` |
| `ApiV1SocialAccountMessagingEnable500Error1` | `apiV1SocialAccountMessagingEnable500Error1Schema` | `src/models/api-v1-social-account-messaging-enable500-error1.ts` |
| `ApiV1SocialAccountMessagingEnable502Error1` | `apiV1SocialAccountMessagingEnable502Error1Schema` | `src/models/api-v1-social-account-messaging-enable502-error1.ts` |
| `ApiV1SocialAccountMessagingEnable503Error1` | `apiV1SocialAccountMessagingEnable503Error1Schema` | `src/models/api-v1-social-account-messaging-enable503-error1.ts` |
| `ApiV1SocialAccountMessagingEnable504Error1` | `apiV1SocialAccountMessagingEnable504Error1Schema` | `src/models/api-v1-social-account-messaging-enable504-error1.ts` |

### socialAccountGetAccountsToDelete

- **Signature**: `socialAccountGetAccountsToDelete(request?: SocialAccountApi.SocialAccountGetAccountsToDeleteRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountToDeleteResponse, SocialAccountApi.SocialAccountGetAccountsToDeleteError>`
- **Wire**: `GET /api/v1/social-account/to-delete`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1SocialAccountToDeleteResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountGetAccountsToDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountToDelete400Error1"` [400] `ApiV1SocialAccountToDelete400Error1` · `"apiV1SocialAccountToDelete401Error1"` [401] `ApiV1SocialAccountToDelete401Error1` · `"apiV1SocialAccountToDelete403Error1"` [403] `ApiV1SocialAccountToDelete403Error1` · `"apiV1SocialAccountToDelete404Error1"` [404] `ApiV1SocialAccountToDelete404Error1` · `"apiV1SocialAccountToDelete429Error1"` [429] `ApiV1SocialAccountToDelete429Error1` · `"apiV1SocialAccountToDelete500Error1"` [500] `ApiV1SocialAccountToDelete500Error1` · `"apiV1SocialAccountToDelete502Error1"` [502] `ApiV1SocialAccountToDelete502Error1` · `"apiV1SocialAccountToDelete503Error1"` [503] `ApiV1SocialAccountToDelete503Error1` · `"apiV1SocialAccountToDelete504Error1"` [504] `ApiV1SocialAccountToDelete504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountGetAccountsToDeleteRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountToDeleteResponse` | `apiV1SocialAccountToDeleteResponseSchema` | `src/models/api-v1-social-account-to-delete-response.ts` |
| `ApiV1SocialAccountToDelete400Error1` | `apiV1SocialAccountToDelete400Error1Schema` | `src/models/api-v1-social-account-to-delete400-error1.ts` |
| `ApiV1SocialAccountToDelete401Error1` | `apiV1SocialAccountToDelete401Error1Schema` | `src/models/api-v1-social-account-to-delete401-error1.ts` |
| `ApiV1SocialAccountToDelete403Error1` | `apiV1SocialAccountToDelete403Error1Schema` | `src/models/api-v1-social-account-to-delete403-error1.ts` |
| `ApiV1SocialAccountToDelete404Error1` | `apiV1SocialAccountToDelete404Error1Schema` | `src/models/api-v1-social-account-to-delete404-error1.ts` |
| `ApiV1SocialAccountToDelete429Error1` | `apiV1SocialAccountToDelete429Error1Schema` | `src/models/api-v1-social-account-to-delete429-error1.ts` |
| `ApiV1SocialAccountToDelete500Error1` | `apiV1SocialAccountToDelete500Error1Schema` | `src/models/api-v1-social-account-to-delete500-error1.ts` |
| `ApiV1SocialAccountToDelete502Error1` | `apiV1SocialAccountToDelete502Error1Schema` | `src/models/api-v1-social-account-to-delete502-error1.ts` |
| `ApiV1SocialAccountToDelete503Error1` | `apiV1SocialAccountToDelete503Error1Schema` | `src/models/api-v1-social-account-to-delete503-error1.ts` |
| `ApiV1SocialAccountToDelete504Error1` | `apiV1SocialAccountToDelete504Error1Schema` | `src/models/api-v1-social-account-to-delete504-error1.ts` |

### socialAccountGetByType

- **Signature**: `socialAccountGetByType(request: SocialAccountApi.SocialAccountGetByTypeRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountByTypeResponse, SocialAccountApi.SocialAccountGetByTypeError>`
- **Wire**: `GET /api/v1/social-account/by-type`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1SocialAccountByTypeResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountGetByTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountByType400Error1"` [400] `ApiV1SocialAccountByType400Error1` · `"apiV1SocialAccountByType401Error1"` [401] `ApiV1SocialAccountByType401Error1` · `"apiV1SocialAccountByType403Error1"` [403] `ApiV1SocialAccountByType403Error1` · `"apiV1SocialAccountByType404Error1"` [404] `ApiV1SocialAccountByType404Error1` · `"apiV1SocialAccountByType429Error1"` [429] `ApiV1SocialAccountByType429Error1` · `"apiV1SocialAccountByType500Error1"` [500] `ApiV1SocialAccountByType500Error1` · `"apiV1SocialAccountByType502Error1"` [502] `ApiV1SocialAccountByType502Error1` · `"apiV1SocialAccountByType503Error1"` [503] `ApiV1SocialAccountByType503Error1` · `"apiV1SocialAccountByType504Error1"` [504] `ApiV1SocialAccountByType504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountGetByTypeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `Type` | yes |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `ApiV1SocialAccountByTypeResponse` | `apiV1SocialAccountByTypeResponseSchema` | `src/models/api-v1-social-account-by-type-response.ts` |
| `ApiV1SocialAccountByType400Error1` | `apiV1SocialAccountByType400Error1Schema` | `src/models/api-v1-social-account-by-type400-error1.ts` |
| `ApiV1SocialAccountByType401Error1` | `apiV1SocialAccountByType401Error1Schema` | `src/models/api-v1-social-account-by-type401-error1.ts` |
| `ApiV1SocialAccountByType403Error1` | `apiV1SocialAccountByType403Error1Schema` | `src/models/api-v1-social-account-by-type403-error1.ts` |
| `ApiV1SocialAccountByType404Error1` | `apiV1SocialAccountByType404Error1Schema` | `src/models/api-v1-social-account-by-type404-error1.ts` |
| `ApiV1SocialAccountByType429Error1` | `apiV1SocialAccountByType429Error1Schema` | `src/models/api-v1-social-account-by-type429-error1.ts` |
| `ApiV1SocialAccountByType500Error1` | `apiV1SocialAccountByType500Error1Schema` | `src/models/api-v1-social-account-by-type500-error1.ts` |
| `ApiV1SocialAccountByType502Error1` | `apiV1SocialAccountByType502Error1Schema` | `src/models/api-v1-social-account-by-type502-error1.ts` |
| `ApiV1SocialAccountByType503Error1` | `apiV1SocialAccountByType503Error1Schema` | `src/models/api-v1-social-account-by-type503-error1.ts` |
| `ApiV1SocialAccountByType504Error1` | `apiV1SocialAccountByType504Error1Schema` | `src/models/api-v1-social-account-by-type504-error1.ts` |

### socialAccountProfileRefresh

- **Signature**: `socialAccountProfileRefresh(request?: SocialAccountApi.SocialAccountProfileRefreshRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountProfileRefreshResponse, SocialAccountApi.SocialAccountProfileRefreshError>`
- **Wire**: `POST /api/v1/social-account/profile-refresh`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountProfileRefreshResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountProfileRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountProfileRefresh400Error1"` [400] `ApiV1SocialAccountProfileRefresh400Error1` · `"apiV1SocialAccountProfileRefresh401Error1"` [401] `ApiV1SocialAccountProfileRefresh401Error1` · `"apiV1SocialAccountProfileRefresh403Error1"` [403] `ApiV1SocialAccountProfileRefresh403Error1` · `"apiV1SocialAccountProfileRefresh404Error1"` [404] `ApiV1SocialAccountProfileRefresh404Error1` · `"apiV1SocialAccountProfileRefresh429Error1"` [429] `ApiV1SocialAccountProfileRefresh429Error1` · `"apiV1SocialAccountProfileRefresh500Error1"` [500] `ApiV1SocialAccountProfileRefresh500Error1` · `"apiV1SocialAccountProfileRefresh502Error1"` [502] `ApiV1SocialAccountProfileRefresh502Error1` · `"apiV1SocialAccountProfileRefresh503Error1"` [503] `ApiV1SocialAccountProfileRefresh503Error1` · `"apiV1SocialAccountProfileRefresh504Error1"` [504] `ApiV1SocialAccountProfileRefresh504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountProfileRefreshRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountProfileRefreshRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountProfileRefreshRequest` | `apiV1SocialAccountProfileRefreshRequestSchema` | `src/models/api-v1-social-account-profile-refresh-request.ts` |
| `ApiV1SocialAccountProfileRefreshResponse` | `apiV1SocialAccountProfileRefreshResponseSchema` | `src/models/api-v1-social-account-profile-refresh-response.ts` |
| `ApiV1SocialAccountProfileRefresh400Error1` | `apiV1SocialAccountProfileRefresh400Error1Schema` | `src/models/api-v1-social-account-profile-refresh400-error1.ts` |
| `ApiV1SocialAccountProfileRefresh401Error1` | `apiV1SocialAccountProfileRefresh401Error1Schema` | `src/models/api-v1-social-account-profile-refresh401-error1.ts` |
| `ApiV1SocialAccountProfileRefresh403Error1` | `apiV1SocialAccountProfileRefresh403Error1Schema` | `src/models/api-v1-social-account-profile-refresh403-error1.ts` |
| `ApiV1SocialAccountProfileRefresh404Error1` | `apiV1SocialAccountProfileRefresh404Error1Schema` | `src/models/api-v1-social-account-profile-refresh404-error1.ts` |
| `ApiV1SocialAccountProfileRefresh429Error1` | `apiV1SocialAccountProfileRefresh429Error1Schema` | `src/models/api-v1-social-account-profile-refresh429-error1.ts` |
| `ApiV1SocialAccountProfileRefresh500Error1` | `apiV1SocialAccountProfileRefresh500Error1Schema` | `src/models/api-v1-social-account-profile-refresh500-error1.ts` |
| `ApiV1SocialAccountProfileRefresh502Error1` | `apiV1SocialAccountProfileRefresh502Error1Schema` | `src/models/api-v1-social-account-profile-refresh502-error1.ts` |
| `ApiV1SocialAccountProfileRefresh503Error1` | `apiV1SocialAccountProfileRefresh503Error1Schema` | `src/models/api-v1-social-account-profile-refresh503-error1.ts` |
| `ApiV1SocialAccountProfileRefresh504Error1` | `apiV1SocialAccountProfileRefresh504Error1Schema` | `src/models/api-v1-social-account-profile-refresh504-error1.ts` |

### socialAccountRefreshChannels

- **Signature**: `socialAccountRefreshChannels(request?: SocialAccountApi.SocialAccountRefreshChannelsRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountRefreshChannelsResponse, SocialAccountApi.SocialAccountRefreshChannelsError>`
- **Wire**: `POST /api/v1/social-account/refresh-channels`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountRefreshChannelsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountRefreshChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountRefreshChannels400Error1"` [400] `ApiV1SocialAccountRefreshChannels400Error1` · `"apiV1SocialAccountRefreshChannels401Error1"` [401] `ApiV1SocialAccountRefreshChannels401Error1` · `"apiV1SocialAccountRefreshChannels403Error1"` [403] `ApiV1SocialAccountRefreshChannels403Error1` · `"apiV1SocialAccountRefreshChannels404Error1"` [404] `ApiV1SocialAccountRefreshChannels404Error1` · `"apiV1SocialAccountRefreshChannels429Error1"` [429] `ApiV1SocialAccountRefreshChannels429Error1` · `"apiV1SocialAccountRefreshChannels500Error1"` [500] `ApiV1SocialAccountRefreshChannels500Error1` · `"apiV1SocialAccountRefreshChannels502Error1"` [502] `ApiV1SocialAccountRefreshChannels502Error1` · `"apiV1SocialAccountRefreshChannels503Error1"` [503] `ApiV1SocialAccountRefreshChannels503Error1` · `"apiV1SocialAccountRefreshChannels504Error1"` [504] `ApiV1SocialAccountRefreshChannels504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountRefreshChannelsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountRefreshChannelsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountRefreshChannelsRequest` | `apiV1SocialAccountRefreshChannelsRequestSchema` | `src/models/api-v1-social-account-refresh-channels-request.ts` |
| `ApiV1SocialAccountRefreshChannelsResponse` | `apiV1SocialAccountRefreshChannelsResponseSchema` | `src/models/api-v1-social-account-refresh-channels-response.ts` |
| `ApiV1SocialAccountRefreshChannels400Error1` | `apiV1SocialAccountRefreshChannels400Error1Schema` | `src/models/api-v1-social-account-refresh-channels400-error1.ts` |
| `ApiV1SocialAccountRefreshChannels401Error1` | `apiV1SocialAccountRefreshChannels401Error1Schema` | `src/models/api-v1-social-account-refresh-channels401-error1.ts` |
| `ApiV1SocialAccountRefreshChannels403Error1` | `apiV1SocialAccountRefreshChannels403Error1Schema` | `src/models/api-v1-social-account-refresh-channels403-error1.ts` |
| `ApiV1SocialAccountRefreshChannels404Error1` | `apiV1SocialAccountRefreshChannels404Error1Schema` | `src/models/api-v1-social-account-refresh-channels404-error1.ts` |
| `ApiV1SocialAccountRefreshChannels429Error1` | `apiV1SocialAccountRefreshChannels429Error1Schema` | `src/models/api-v1-social-account-refresh-channels429-error1.ts` |
| `ApiV1SocialAccountRefreshChannels500Error1` | `apiV1SocialAccountRefreshChannels500Error1Schema` | `src/models/api-v1-social-account-refresh-channels500-error1.ts` |
| `ApiV1SocialAccountRefreshChannels502Error1` | `apiV1SocialAccountRefreshChannels502Error1Schema` | `src/models/api-v1-social-account-refresh-channels502-error1.ts` |
| `ApiV1SocialAccountRefreshChannels503Error1` | `apiV1SocialAccountRefreshChannels503Error1Schema` | `src/models/api-v1-social-account-refresh-channels503-error1.ts` |
| `ApiV1SocialAccountRefreshChannels504Error1` | `apiV1SocialAccountRefreshChannels504Error1Schema` | `src/models/api-v1-social-account-refresh-channels504-error1.ts` |

### socialAccountSetChannel

- **Signature**: `socialAccountSetChannel(request?: SocialAccountApi.SocialAccountSetChannelRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountSetChannelResponse, SocialAccountApi.SocialAccountSetChannelError>`
- **Wire**: `POST /api/v1/social-account/set-channel`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountSetChannelResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountSetChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountSetChannel400Error1"` [400] `ApiV1SocialAccountSetChannel400Error1` · `"apiV1SocialAccountSetChannel401Error1"` [401] `ApiV1SocialAccountSetChannel401Error1` · `"apiV1SocialAccountSetChannel403Error1"` [403] `ApiV1SocialAccountSetChannel403Error1` · `"apiV1SocialAccountSetChannel404Error1"` [404] `ApiV1SocialAccountSetChannel404Error1` · `"apiV1SocialAccountSetChannel429Error1"` [429] `ApiV1SocialAccountSetChannel429Error1` · `"apiV1SocialAccountSetChannel500Error1"` [500] `ApiV1SocialAccountSetChannel500Error1` · `"apiV1SocialAccountSetChannel502Error1"` [502] `ApiV1SocialAccountSetChannel502Error1` · `"apiV1SocialAccountSetChannel503Error1"` [503] `ApiV1SocialAccountSetChannel503Error1` · `"apiV1SocialAccountSetChannel504Error1"` [504] `ApiV1SocialAccountSetChannel504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountSetChannelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountSetChannelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountSetChannelRequest` | `apiV1SocialAccountSetChannelRequestSchema` | `src/models/api-v1-social-account-set-channel-request.ts` |
| `ApiV1SocialAccountSetChannelResponse` | `apiV1SocialAccountSetChannelResponseSchema` | `src/models/api-v1-social-account-set-channel-response.ts` |
| `ApiV1SocialAccountSetChannel400Error1` | `apiV1SocialAccountSetChannel400Error1Schema` | `src/models/api-v1-social-account-set-channel400-error1.ts` |
| `ApiV1SocialAccountSetChannel401Error1` | `apiV1SocialAccountSetChannel401Error1Schema` | `src/models/api-v1-social-account-set-channel401-error1.ts` |
| `ApiV1SocialAccountSetChannel403Error1` | `apiV1SocialAccountSetChannel403Error1Schema` | `src/models/api-v1-social-account-set-channel403-error1.ts` |
| `ApiV1SocialAccountSetChannel404Error1` | `apiV1SocialAccountSetChannel404Error1Schema` | `src/models/api-v1-social-account-set-channel404-error1.ts` |
| `ApiV1SocialAccountSetChannel429Error1` | `apiV1SocialAccountSetChannel429Error1Schema` | `src/models/api-v1-social-account-set-channel429-error1.ts` |
| `ApiV1SocialAccountSetChannel500Error1` | `apiV1SocialAccountSetChannel500Error1Schema` | `src/models/api-v1-social-account-set-channel500-error1.ts` |
| `ApiV1SocialAccountSetChannel502Error1` | `apiV1SocialAccountSetChannel502Error1Schema` | `src/models/api-v1-social-account-set-channel502-error1.ts` |
| `ApiV1SocialAccountSetChannel503Error1` | `apiV1SocialAccountSetChannel503Error1Schema` | `src/models/api-v1-social-account-set-channel503-error1.ts` |
| `ApiV1SocialAccountSetChannel504Error1` | `apiV1SocialAccountSetChannel504Error1Schema` | `src/models/api-v1-social-account-set-channel504-error1.ts` |

### socialAccountUnsetChannel

- **Signature**: `socialAccountUnsetChannel(request?: SocialAccountApi.SocialAccountUnsetChannelRequest, options?: RequestOptions): ApiPromise<ApiV1SocialAccountUnsetChannelResponse, SocialAccountApi.SocialAccountUnsetChannelError>`
- **Wire**: `POST /api/v1/social-account/unset-channel`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SocialAccountUnsetChannelResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `SocialAccountApi.SocialAccountUnsetChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SocialAccountUnsetChannel400Error1"` [400] `ApiV1SocialAccountUnsetChannel400Error1` · `"apiV1SocialAccountUnsetChannel401Error1"` [401] `ApiV1SocialAccountUnsetChannel401Error1` · `"apiV1SocialAccountUnsetChannel403Error1"` [403] `ApiV1SocialAccountUnsetChannel403Error1` · `"apiV1SocialAccountUnsetChannel404Error1"` [404] `ApiV1SocialAccountUnsetChannel404Error1` · `"apiV1SocialAccountUnsetChannel429Error1"` [429] `ApiV1SocialAccountUnsetChannel429Error1` · `"apiV1SocialAccountUnsetChannel500Error1"` [500] `ApiV1SocialAccountUnsetChannel500Error1` · `"apiV1SocialAccountUnsetChannel502Error1"` [502] `ApiV1SocialAccountUnsetChannel502Error1` · `"apiV1SocialAccountUnsetChannel503Error1"` [503] `ApiV1SocialAccountUnsetChannel503Error1` · `"apiV1SocialAccountUnsetChannel504Error1"` [504] `ApiV1SocialAccountUnsetChannel504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SocialAccountApi.SocialAccountUnsetChannelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SocialAccountUnsetChannelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SocialAccountUnsetChannelRequest` | `apiV1SocialAccountUnsetChannelRequestSchema` | `src/models/api-v1-social-account-unset-channel-request.ts` |
| `ApiV1SocialAccountUnsetChannelResponse` | `apiV1SocialAccountUnsetChannelResponseSchema` | `src/models/api-v1-social-account-unset-channel-response.ts` |
| `ApiV1SocialAccountUnsetChannel400Error1` | `apiV1SocialAccountUnsetChannel400Error1Schema` | `src/models/api-v1-social-account-unset-channel400-error1.ts` |
| `ApiV1SocialAccountUnsetChannel401Error1` | `apiV1SocialAccountUnsetChannel401Error1Schema` | `src/models/api-v1-social-account-unset-channel401-error1.ts` |
| `ApiV1SocialAccountUnsetChannel403Error1` | `apiV1SocialAccountUnsetChannel403Error1Schema` | `src/models/api-v1-social-account-unset-channel403-error1.ts` |
| `ApiV1SocialAccountUnsetChannel404Error1` | `apiV1SocialAccountUnsetChannel404Error1Schema` | `src/models/api-v1-social-account-unset-channel404-error1.ts` |
| `ApiV1SocialAccountUnsetChannel429Error1` | `apiV1SocialAccountUnsetChannel429Error1Schema` | `src/models/api-v1-social-account-unset-channel429-error1.ts` |
| `ApiV1SocialAccountUnsetChannel500Error1` | `apiV1SocialAccountUnsetChannel500Error1Schema` | `src/models/api-v1-social-account-unset-channel500-error1.ts` |
| `ApiV1SocialAccountUnsetChannel502Error1` | `apiV1SocialAccountUnsetChannel502Error1Schema` | `src/models/api-v1-social-account-unset-channel502-error1.ts` |
| `ApiV1SocialAccountUnsetChannel503Error1` | `apiV1SocialAccountUnsetChannel503Error1Schema` | `src/models/api-v1-social-account-unset-channel503-error1.ts` |
| `ApiV1SocialAccountUnsetChannel504Error1` | `apiV1SocialAccountUnsetChannel504Error1Schema` | `src/models/api-v1-social-account-unset-channel504-error1.ts` |

