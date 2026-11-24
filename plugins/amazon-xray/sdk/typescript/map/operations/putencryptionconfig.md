<!-- Generated file — do not edit; regenerated with the SDK. -->

# Putencryptionconfig — operations

Accessor: `client.putencryptionconfig` · Source: `src/resources/putencryptionconfig.ts` · 1 operation · Request and error types: namespace `Putencryptionconfig`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### putEncryptionConfig

- **Signature**: `putEncryptionConfig(request?: Putencryptionconfig.PutEncryptionConfigRequestParams, options?: RequestOptions): ApiPromise<PutEncryptionConfigResult, Putencryptionconfig.PutEncryptionConfigError>`
- **Wire**: `POST /PutEncryptionConfig`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutEncryptionConfigResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Putencryptionconfig.PutEncryptionConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Putencryptionconfig.PutEncryptionConfigRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PutEncryptionConfigRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PutEncryptionConfigRequest` | `putEncryptionConfigRequestSchema` | `src/models/put-encryption-config-request.ts` |
| `PutEncryptionConfigResult` | `putEncryptionConfigResultSchema` | `src/models/put-encryption-config-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

