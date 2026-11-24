<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 10 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-certificate-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccountConfiguration

- **Signature**: `getAccountConfiguration(request: Operations.GetAccountConfigurationRequest, options?: RequestOptions): ApiPromise<undefined, Operations.GetAccountConfigurationError>`
- **Wire**: `POST /#GetAccountConfiguration`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.GetAccountConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.GetAccountConfigurationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsCertificateManagerOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsCertificateManagerOperationsApi` | `xAmzTarget3AwsCertificateManagerOperationsApiSchema` | `src/models/xamz-target3-aws-certificate-manager-operations-api.ts` |

### getAcmeExternalAccountBindingCredentials

- **Signature**: `getAcmeExternalAccountBindingCredentials(request: Operations.GetAcmeExternalAccountBindingCredentialsRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.GetAcmeExternalAccountBindingCredentialsError>`
- **Wire**: `POST /#GetAcmeExternalAccountBindingCredentials`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.GetAcmeExternalAccountBindingCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.GetAcmeExternalAccountBindingCredentialsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5AwsCertificateManagerOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5AwsCertificateManagerOperationsApi` | `xAmzTarget5AwsCertificateManagerOperationsApiSchema` | `src/models/xamz-target5-aws-certificate-manager-operations-api.ts` |

### listCertificateDomainValidations

- **Signature**: `listCertificateDomainValidations(request: Operations.ListCertificateDomainValidationsRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.ListCertificateDomainValidationsError>`
- **Wire**: `POST /#ListCertificateDomainValidations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.ListCertificateDomainValidationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ListCertificateDomainValidationsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6AwsCertificateManagerOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6AwsCertificateManagerOperationsApi` | `xAmzTarget6AwsCertificateManagerOperationsApiSchema` | `src/models/xamz-target6-aws-certificate-manager-operations-api.ts` |

### putAccountConfiguration

- **Signature**: `putAccountConfiguration(request: Operations.PutAccountConfigurationRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.PutAccountConfigurationError>`
- **Wire**: `POST /#PutAccountConfiguration`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.PutAccountConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.PutAccountConfigurationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsCertificateManagerOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsCertificateManagerOperationsApi` | `xAmzTarget4AwsCertificateManagerOperationsApiSchema` | `src/models/xamz-target4-aws-certificate-manager-operations-api.ts` |

### renewCertificate

- **Signature**: `renewCertificate(request: Operations.RenewCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.RenewCertificateError>`
- **Wire**: `POST /#RenewCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.RenewCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RenewCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCertificateManagerOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCertificateManagerOperationsApi` | `xAmzTargetAwsCertificateManagerOperationsApiSchema` | `src/models/xamz-target-aws-certificate-manager-operations-api.ts` |

### requestCertificate2

- **Signature**: `requestCertificate2(request: Operations.RequestCertificate2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RequestCertificate2Error>`
- **Wire**: `POST /#RequestCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.RequestCertificate2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RequestCertificate2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCertificateManagerOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCertificateManagerOperationsApi` | `xAmzTarget1AwsCertificateManagerOperationsApiSchema` | `src/models/xamz-target1-aws-certificate-manager-operations-api.ts` |

### resendValidationEmail

- **Signature**: `resendValidationEmail(request: Operations.ResendValidationEmailRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.ResendValidationEmailError>`
- **Wire**: `POST /#ResendValidationEmail`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.ResendValidationEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ResendValidationEmailRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCertificateManagerOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCertificateManagerOperationsApi` | `xAmzTarget2AwsCertificateManagerOperationsApiSchema` | `src/models/xamz-target2-aws-certificate-manager-operations-api.ts` |

### tagResource

- **Signature**: `tagResource(request: Operations.TagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.TagResourceError>`
- **Wire**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.TagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.TagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7AwsCertificateManagerOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7AwsCertificateManagerOperationsApi` | `xAmzTarget7AwsCertificateManagerOperationsApiSchema` | `src/models/xamz-target7-aws-certificate-manager-operations-api.ts` |

### untagResource

- **Signature**: `untagResource(request: Operations.UntagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.UntagResourceError>`
- **Wire**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.UntagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.UntagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8AwsCertificateManagerOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8AwsCertificateManagerOperationsApi` | `xAmzTarget8AwsCertificateManagerOperationsApiSchema` | `src/models/xamz-target8-aws-certificate-manager-operations-api.ts` |

### updateCertificateOptions

- **Signature**: `updateCertificateOptions(request: Operations.UpdateCertificateOptionsRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.UpdateCertificateOptionsError>`
- **Wire**: `POST /#UpdateCertificateOptions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Operations.UpdateCertificateOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.UpdateCertificateOptionsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9` | `xAmzTarget9Schema` | `src/models/xamz-target9.ts` |

