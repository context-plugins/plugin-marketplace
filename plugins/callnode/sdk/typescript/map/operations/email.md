<!-- Generated file — do not edit; regenerated with the SDK. -->

# Email — operations

Accessor: `client.email` · Source: `src/resources/email.ts` · 8 operations · Request and error types: namespace `Email`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `call-node`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEmailDomain

- **Signature**: `createEmailDomain(request: Email.CreateEmailDomainRequest, options?: RequestOptions): ApiPromise<EmailDomain, Email.CreateEmailDomainError>`
- **Wire**: `POST /api/v1/email/domains`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EmailDomain`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Email.CreateEmailDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [409] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Email.CreateEmailDomainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1EmailDomainsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1EmailDomainsRequest` | `apiV1EmailDomainsRequestSchema` | `src/models/api-v1-email-domains-request.ts` |
| `EmailDomain` | `emailDomainSchema` | `src/models/email-domain.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteEmailDomain

- **Signature**: `deleteEmailDomain(request: Email.DeleteEmailDomainRequest, options?: RequestOptions): ApiPromise<undefined, Email.DeleteEmailDomainError>`
- **Wire**: `DELETE /api/v1/email/domains/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Email.DeleteEmailDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Email.DeleteEmailDomainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getEmailDomain

- **Signature**: `getEmailDomain(request: Email.GetEmailDomainRequest, options?: RequestOptions): ApiPromise<EmailDomain, Email.GetEmailDomainError>`
- **Wire**: `GET /api/v1/email/domains/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EmailDomain`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Email.GetEmailDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Email.GetEmailDomainRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `refresh` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmailDomain` | `emailDomainSchema` | `src/models/email-domain.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getEmailMessage

- **Signature**: `getEmailMessage(request: Email.GetEmailMessageRequest, options?: RequestOptions): ApiPromise<EmailMessage, Email.GetEmailMessageError>`
- **Wire**: `GET /api/v1/email/messages/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EmailMessage`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Email.GetEmailMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Email.GetEmailMessageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmailMessage` | `emailMessageSchema` | `src/models/email-message.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listEmailDomains

- **Signature**: `listEmailDomains(options?: RequestOptions): ApiPromise<ApiV1EmailDomainsResponse, Email.ListEmailDomainsError>`
- **Wire**: `GET /api/v1/email/domains`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1EmailDomainsResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Email.ListEmailDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1EmailDomainsResponse` | `apiV1EmailDomainsResponseSchema` | `src/models/api-v1-email-domains-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listEmailMessages

- **Signature**: `listEmailMessages(request?: Email.ListEmailMessagesRequest, options?: RequestOptions): ApiPromise<ApiV1EmailMessagesResponse, Email.ListEmailMessagesError>`
- **Wire**: `GET /api/v1/email/messages`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1EmailMessagesResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Email.ListEmailMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Email.ListEmailMessagesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `status` | `query` | `Status3` | no | — |
| `limit` | `query` | `number` | no | `25` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status3` | `status3Schema` | `src/models/status3.ts` |
| `ApiV1EmailMessagesResponse` | `apiV1EmailMessagesResponseSchema` | `src/models/api-v1-email-messages-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sendEmail

- **Signature**: `sendEmail(request: Email.SendEmailRequestParams, options?: RequestOptions): ApiPromise<EmailMessage, Email.SendEmailError>`
- **Wire**: `POST /api/v1/email/messages`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EmailMessage`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Email.SendEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [403] `Error` · `"error5"` [429] `Error` · `"error6"` [502] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Email.SendEmailRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xIdempotencyKey` | `header` | `X-Idempotency-Key` | `string` | no |
| `body` | `body` | — | `SendEmailRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SendEmailRequest` | `sendEmailRequestSchema` | `src/models/send-email-request.ts` |
| `EmailMessage` | `emailMessageSchema` | `src/models/email-message.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### verifyEmailDomain

- **Signature**: `verifyEmailDomain(request: Email.VerifyEmailDomainRequest, options?: RequestOptions): ApiPromise<EmailDomain, Email.VerifyEmailDomainError>`
- **Wire**: `POST /api/v1/email/domains/{id}/verify`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EmailDomain`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Email.VerifyEmailDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Email.VerifyEmailDomainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmailDomain` | `emailDomainSchema` | `src/models/email-domain.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

