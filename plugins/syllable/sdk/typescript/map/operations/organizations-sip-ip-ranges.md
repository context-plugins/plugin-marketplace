<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationsSipIpRanges — operations

Accessor: `client.organizationsSipIpRanges` · Source: `src/resources/organizations-sip-ip-ranges.ts` · 4 operations · Request and error types: namespace `OrganizationsSipIpRanges`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### organizationSipIpRangesCreate

- **Signature**: `organizationSipIpRangesCreate(request: OrganizationsSipIpRanges.OrganizationSipIpRangesCreateRequest, options?: RequestOptions): ApiPromise<OrganizationSipIpRange, OrganizationsSipIpRanges.OrganizationSipIpRangesCreateError>`
- **Wire**: `POST /api/v1/organizations/sip_ip_ranges/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationSipIpRange`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OrganizationsSipIpRanges.OrganizationSipIpRangesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsSipIpRanges.OrganizationSipIpRangesCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrganizationSipIpRangeCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationSipIpRangeCreate` | `organizationSipIpRangeCreateSchema` | `src/models/organization-sip-ip-range-create.ts` |
| `OrganizationSipIpRange` | `organizationSipIpRangeSchema` | `src/models/organization-sip-ip-range.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### organizationSipIpRangesDelete

- **Signature**: `organizationSipIpRangesDelete(request: OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteRequest, options?: RequestOptions): ApiPromise<undefined, OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteError>`
- **Wire**: `DELETE /api/v1/organizations/sip_ip_ranges/{sip_ip_range_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sipIpRangeId` | `path` | `sip_ip_range_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### organizationSipIpRangesList

- **Signature**: `organizationSipIpRangesList(options?: RequestOptions): ApiPromise<OrganizationSipIpRange[], ApiError>`
- **Wire**: `GET /api/v1/organizations/sip_ip_ranges/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationSipIpRange[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationSipIpRange` | `organizationSipIpRangeSchema` | `src/models/organization-sip-ip-range.ts` |

### organizationSipIpRangesUpdate

- **Signature**: `organizationSipIpRangesUpdate(request: OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateRequest, options?: RequestOptions): ApiPromise<OrganizationSipIpRange, OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateError>`
- **Wire**: `PUT /api/v1/organizations/sip_ip_ranges/{sip_ip_range_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationSipIpRange`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sipIpRangeId` | `path` | `sip_ip_range_id` | `number` | yes |
| `body` | `body` | — | `OrganizationSipIpRangeUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationSipIpRangeUpdate` | `organizationSipIpRangeUpdateSchema` | `src/models/organization-sip-ip-range-update.ts` |
| `OrganizationSipIpRange` | `organizationSipIpRangeSchema` | `src/models/organization-sip-ip-range.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

