<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentServiceDefinitionsApi — operations

Accessor: `client.paymentServiceDefinitionsApi` · Source: `src/resources/payment-service-definitions-api.ts` · 3 operations · Request and error types: namespace `PaymentServiceDefinitionsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPaymentServiceDefinitionSession

- **Signature**: `createPaymentServiceDefinitionSession(request: PaymentServiceDefinitionsApi.CreatePaymentServiceDefinitionSessionRequest, options?: RequestOptions): ApiPromise<CreateSession, PaymentServiceDefinitionsApi.CreatePaymentServiceDefinitionSessionError>`
- **Wire**: `POST /payment-service-definitions/{payment_service_definition_id}/sessions`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateSession`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `PaymentServiceDefinitionsApi.CreatePaymentServiceDefinitionSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentServiceDefinitionsApi.CreatePaymentServiceDefinitionSessionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentServiceDefinitionId` | `path` | `payment_service_definition_id` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSession` | `createSessionSchema` | `src/models/create-session.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getPaymentServiceDefinition

- **Signature**: `getPaymentServiceDefinition(request: PaymentServiceDefinitionsApi.GetPaymentServiceDefinitionRequest, options?: RequestOptions): ApiPromise<PaymentServiceDefinition, PaymentServiceDefinitionsApi.GetPaymentServiceDefinitionError>`
- **Wire**: `GET /payment-service-definitions/{payment_service_definition_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentServiceDefinition`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `PaymentServiceDefinitionsApi.GetPaymentServiceDefinitionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentServiceDefinitionsApi.GetPaymentServiceDefinitionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentServiceDefinitionId` | `path` | `payment_service_definition_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentServiceDefinition` | `paymentServiceDefinitionSchema` | `src/models/payment-service-definition.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listPaymentServiceDefinitions

- **Signature**: `listPaymentServiceDefinitions(request: PaymentServiceDefinitionsApi.ListPaymentServiceDefinitionsRequest, options?: RequestOptions): ApiPromise<PaymentServiceDefinitions, PaymentServiceDefinitionsApi.ListPaymentServiceDefinitionsError>`
- **Wire**: `GET /payment-service-definitions`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentServiceDefinitions`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `PaymentServiceDefinitionsApi.ListPaymentServiceDefinitionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentServiceDefinitionsApi.ListPaymentServiceDefinitionsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | `Cursor` | no | — |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `PaymentServiceDefinitions` | `paymentServiceDefinitionsSchema` | `src/models/payment-service-definitions.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

