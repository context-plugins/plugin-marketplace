<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactional — operations

Accessor: `client.transactional` · Source: `src/resources/transactional.ts` · 2 operations · Request and error types: namespace `Transactional`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ortto`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sendTransactionalEmail

- **Signature**: `sendTransactionalEmail(request: Transactional.SendTransactionalEmailRequest, options?: RequestOptions): ApiPromise<undefined, Transactional.SendTransactionalEmailError>`
- **Wire**: `POST /transactional/send`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OrttoError` with `kind: "api"`, an instance of `Transactional.SendTransactionalEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactional.SendTransactionalEmailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionalSendRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionalSendRequest` | `transactionalSendRequestSchema` | `src/models/transactional-send-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sendTransactionalSms

- **Signature**: `sendTransactionalSms(request: Transactional.SendTransactionalSmsRequest, options?: RequestOptions): ApiPromise<undefined, Transactional.SendTransactionalSmsError>`
- **Wire**: `POST /transactional/send-sms`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OrttoError` with `kind: "api"`, an instance of `Transactional.SendTransactionalSmsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactional.SendTransactionalSmsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionalSendSmsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionalSendSmsRequest` | `transactionalSendSmsRequestSchema` | `src/models/transactional-send-sms-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

