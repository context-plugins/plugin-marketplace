<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeDomainValidationApi — operations

Accessor: `client.acmeDomainValidationApi` · Source: `src/resources/acme-domain-validation-api.ts` · 5 operations · Request and error types: namespace `AcmeDomainValidationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-certificate-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAcmeDomainValidation

- **Signature**: `createAcmeDomainValidation(request: AcmeDomainValidationApi.CreateAcmeDomainValidationRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeDomainValidationApi.CreateAcmeDomainValidationError>`
- **Wire**: `POST /#CreateAcmeDomainValidation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeDomainValidationApi.CreateAcmeDomainValidationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeDomainValidationApi.CreateAcmeDomainValidationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCertificateManagerAcmeDomainValidationApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCertificateManagerAcmeDomainValidationApi` | `xAmzTargetAwsCertificateManagerAcmeDomainValidationApiSchema` | `src/models/xamz-target-aws-certificate-manager-acme-domain-validation-api.ts` |

### deleteAcmeDomainValidation

- **Signature**: `deleteAcmeDomainValidation(request: AcmeDomainValidationApi.DeleteAcmeDomainValidationRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeDomainValidationApi.DeleteAcmeDomainValidationError>`
- **Wire**: `POST /#DeleteAcmeDomainValidation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeDomainValidationApi.DeleteAcmeDomainValidationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeDomainValidationApi.DeleteAcmeDomainValidationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi` | `xAmzTarget1AwsCertificateManagerAcmeDomainValidationApiSchema` | `src/models/xamz-target1-aws-certificate-manager-acme-domain-validation-api.ts` |

### describeAcmeDomainValidation

- **Signature**: `describeAcmeDomainValidation(request: AcmeDomainValidationApi.DescribeAcmeDomainValidationRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeDomainValidationApi.DescribeAcmeDomainValidationError>`
- **Wire**: `POST /#DescribeAcmeDomainValidation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeDomainValidationApi.DescribeAcmeDomainValidationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeDomainValidationApi.DescribeAcmeDomainValidationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi` | `xAmzTarget2AwsCertificateManagerAcmeDomainValidationApiSchema` | `src/models/xamz-target2-aws-certificate-manager-acme-domain-validation-api.ts` |

### listAcmeDomainValidations

- **Signature**: `listAcmeDomainValidations(request: AcmeDomainValidationApi.ListAcmeDomainValidationsRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeDomainValidationApi.ListAcmeDomainValidationsError>`
- **Wire**: `POST /#ListAcmeDomainValidations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeDomainValidationApi.ListAcmeDomainValidationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeDomainValidationApi.ListAcmeDomainValidationsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### updateAcmeDomainValidation

- **Signature**: `updateAcmeDomainValidation(request: AcmeDomainValidationApi.UpdateAcmeDomainValidationRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeDomainValidationApi.UpdateAcmeDomainValidationError>`
- **Wire**: `POST /#UpdateAcmeDomainValidation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeDomainValidationApi.UpdateAcmeDomainValidationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeDomainValidationApi.UpdateAcmeDomainValidationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

