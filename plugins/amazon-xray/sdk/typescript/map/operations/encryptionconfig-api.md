<!-- Generated file — do not edit; regenerated with the SDK. -->

# EncryptionconfigApi — operations

Accessor: `client.encryptionconfigApi` · Source: `src/resources/encryptionconfig-api.ts` · 1 operation · Request and error types: namespace `EncryptionconfigApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEncryptionConfig

- **Signature**: `getEncryptionConfig(options?: RequestOptions): ApiPromise<GetEncryptionConfigResult, EncryptionconfigApi.GetEncryptionConfigError>`
- **Wire**: `POST /EncryptionConfig`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetEncryptionConfigResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `EncryptionconfigApi.GetEncryptionConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetEncryptionConfigResult` | `getEncryptionConfigResultSchema` | `src/models/get-encryption-config-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

