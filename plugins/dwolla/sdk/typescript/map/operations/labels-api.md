<!-- Generated file — do not edit; regenerated with the SDK. -->

# LabelsApi — operations

Accessor: `client.labelsApi` · Source: `src/resources/labels-api.ts` · 9 operations · Request and error types: namespace `LabelsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomerLabel

- **Signature**: `createCustomerLabel(request: LabelsApi.CreateCustomerLabelRequest, options?: RequestOptions): ApiPromise<undefined, LabelsApi.CreateCustomerLabelError>`
- **Wire**: `POST /customers/{id}/labels`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `LabelsApi.CreateCustomerLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LabelsApi.CreateCustomerLabelRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `CustomersLabelsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `CustomersLabelsRequest` | `customersLabelsRequestSchema` | `src/models/customers-labels-request.ts` |

### createLabelLedgerEntry

- **Signature**: `createLabelLedgerEntry(request: LabelsApi.CreateLabelLedgerEntryRequest, options?: RequestOptions): ApiPromise<undefined, LabelsApi.CreateLabelLedgerEntryError>`
- **Wire**: `POST /labels/{id}/ledger-entries`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `LabelsApi.CreateLabelLedgerEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LabelsApi.CreateLabelLedgerEntryRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `LabelsLedgerEntriesRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `LabelsLedgerEntriesRequest` | `labelsLedgerEntriesRequestSchema` | `src/models/labels-ledger-entries-request.ts` |

### createLabelReallocation

- **Signature**: `createLabelReallocation(request: LabelsApi.CreateLabelReallocationRequest, options?: RequestOptions): ApiPromise<undefined, LabelsApi.CreateLabelReallocationError>`
- **Wire**: `POST /label-reallocations`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `LabelsApi.CreateLabelReallocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LabelsApi.CreateLabelReallocationRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `LabelReallocationsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `LabelReallocationsRequest` | `labelReallocationsRequestSchema` | `src/models/label-reallocations-request.ts` |

### getLabel

- **Signature**: `getLabel(request: LabelsApi.GetLabelRequest, options?: RequestOptions): ApiPromise<undefined, LabelsApi.GetLabelError>`
- **Wire**: `GET /labels/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `LabelsApi.GetLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LabelsApi.GetLabelRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getLabelLedgerEntry

- **Signature**: `getLabelLedgerEntry(request: LabelsApi.GetLabelLedgerEntryRequest, options?: RequestOptions): ApiPromise<undefined, LabelsApi.GetLabelLedgerEntryError>`
- **Wire**: `GET /ledger-entries/{ledgerEntryId}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `LabelsApi.GetLabelLedgerEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LabelsApi.GetLabelLedgerEntryRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `ledgerEntryId` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listCustomerLabels

- **Signature**: `listCustomerLabels(request: LabelsApi.ListCustomerLabelsRequest, options?: RequestOptions): ApiPromise<undefined, LabelsApi.ListCustomerLabelsError>`
- **Wire**: `GET /customers/{id}/labels`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `LabelsApi.ListCustomerLabelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LabelsApi.ListCustomerLabelsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `string` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listLabelLedgerEntries

- **Signature**: `listLabelLedgerEntries(request: LabelsApi.ListLabelLedgerEntriesRequest, options?: RequestOptions): ApiPromise<undefined, LabelsApi.ListLabelLedgerEntriesError>`
- **Wire**: `GET /labels/{id}/ledger-entries`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `LabelsApi.ListLabelLedgerEntriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LabelsApi.ListLabelLedgerEntriesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `number` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### removeLabel

- **Signature**: `removeLabel(request: LabelsApi.RemoveLabelRequest, options?: RequestOptions): ApiPromise<undefined, LabelsApi.RemoveLabelError>`
- **Wire**: `DELETE /labels/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `LabelsApi.RemoveLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LabelsApi.RemoveLabelRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### retrieveLabelReallocation

- **Signature**: `retrieveLabelReallocation(request: LabelsApi.RetrieveLabelReallocationRequest, options?: RequestOptions): ApiPromise<undefined, LabelsApi.RetrieveLabelReallocationError>`
- **Wire**: `GET /label-reallocations/{reallocationId}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `LabelsApi.RetrieveLabelReallocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LabelsApi.RetrieveLabelReallocationRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `reallocationId` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

