<!-- Generated file — do not edit; regenerated with the SDK. -->

# Compliance — operations

Accessor: `client.compliance` · Source: `src/resources/compliance.ts` · 2 operations · Request and error types: namespace `Compliance`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `postscript`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### redact

- **Signature**: `redact(request?: Compliance.RedactRequest, options?: RequestOptions): ApiPromise<ApiV2ComplianceRedactResponse, Compliance.RedactError>`
- **Wire**: `PATCH /api/v2/compliance/redact`
- **Auth**: `sec0`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2ComplianceRedactResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Compliance.RedactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2ComplianceRedact403Error1"` [403] `ApiV2ComplianceRedact403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Compliance.RedactRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |
| `body` | `body` | — | `ApiV2ComplianceRedactRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2ComplianceRedactRequest` | `apiV2ComplianceRedactRequestSchema` | `src/models/api-v2-compliance-redact-request.ts` |
| `ApiV2ComplianceRedactResponse` | `apiV2ComplianceRedactResponseSchema` | `src/models/api-v2-compliance-redact-response.ts` |
| `ApiV2ComplianceRedact403Error1` | `apiV2ComplianceRedact403Error1Schema` | `src/models/api-v2-compliance-redact403-error1.ts` |

### unsubscribe

- **Signature**: `unsubscribe(request?: Compliance.UnsubscribeRequest, options?: RequestOptions): ApiPromise<ApiV2ComplianceUnsubscribeResponse, Compliance.UnsubscribeError>`
- **Wire**: `PATCH /api/v2/compliance/unsubscribe`
- **Auth**: `sec0`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2ComplianceUnsubscribeResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Compliance.UnsubscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2ComplianceUnsubscribe403Error1"` [403] `ApiV2ComplianceUnsubscribe403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Compliance.UnsubscribeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |
| `body` | `body` | — | `ApiV2ComplianceUnsubscribeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2ComplianceUnsubscribeRequest` | `apiV2ComplianceUnsubscribeRequestSchema` | `src/models/api-v2-compliance-unsubscribe-request.ts` |
| `ApiV2ComplianceUnsubscribeResponse` | `apiV2ComplianceUnsubscribeResponseSchema` | `src/models/api-v2-compliance-unsubscribe-response.ts` |
| `ApiV2ComplianceUnsubscribe403Error1` | `apiV2ComplianceUnsubscribe403Error1Schema` | `src/models/api-v2-compliance-unsubscribe403-error1.ts` |

