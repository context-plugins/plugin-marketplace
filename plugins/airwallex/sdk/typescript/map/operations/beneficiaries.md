<!-- Generated file — do not edit; regenerated with the SDK. -->

# Beneficiaries — operations

Accessor: `client.beneficiaries` · Source: `src/resources/beneficiaries.ts` · 3 operations · Request types: namespace `Beneficiaries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airwallex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBeneficiary

- **Signature**: `createBeneficiary(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /api/v1/beneficiaries/create`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getBeneficiary

- **Signature**: `getBeneficiary(request: Beneficiaries.GetBeneficiaryRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/v1/beneficiaries/{id}`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Beneficiaries.GetBeneficiaryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### listBeneficiaries

- **Signature**: `listBeneficiaries(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/v1/beneficiaries`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

