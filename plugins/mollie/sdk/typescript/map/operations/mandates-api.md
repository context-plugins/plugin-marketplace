<!-- Generated file — do not edit; regenerated with the SDK. -->

# MandatesApi — operations

Accessor: `client.mandatesApi` · Source: `src/resources/mandates-api.ts` · 4 operations · Request and error types: namespace `MandatesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMandate

- **Signature**: `createMandate(request: MandatesApi.CreateMandateRequest, options?: RequestOptions): ApiPromise<undefined, MandatesApi.CreateMandateError>`
- **Wire**: `POST /v2/customers/{customerId}/mandates`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MandatesApi.CreateMandateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MandatesApi.CreateMandateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `MandateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MandateRequest` | `mandateRequestSchema` | `src/models/mandate-request.ts` |

### getMandate

- **Signature**: `getMandate(request: MandatesApi.GetMandateRequest, options?: RequestOptions): ApiPromise<undefined, MandatesApi.GetMandateError>`
- **Wire**: `GET /v2/customers/{customerId}/mandates/{mandateId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MandatesApi.GetMandateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MandatesApi.GetMandateRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `mandateId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listMandates

- **Signature**: `listMandates(request: MandatesApi.ListMandatesRequest, options?: RequestOptions): ApiPromise<undefined, MandatesApi.ListMandatesError>`
- **Wire**: `GET /v2/customers/{customerId}/mandates`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MandatesApi.ListMandatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MandatesApi.ListMandatesRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `scopes` | `query` | — | `MandateScopes[]` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |
| `MandateScopes` | `mandateScopesSchema` | `src/models/mandate-scopes.ts` |

### revokeMandate

- **Signature**: `revokeMandate(request: MandatesApi.RevokeMandateRequest, options?: RequestOptions): ApiPromise<undefined, MandatesApi.RevokeMandateError>`
- **Wire**: `DELETE /v2/customers/{customerId}/mandates/{mandateId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `MandatesApi.RevokeMandateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MandatesApi.RevokeMandateRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `mandateId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `DeleteValuesSalesInvoice` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteValuesSalesInvoice` | `deleteValuesSalesInvoiceSchema` | `src/models/delete-values-sales-invoice.ts` |

