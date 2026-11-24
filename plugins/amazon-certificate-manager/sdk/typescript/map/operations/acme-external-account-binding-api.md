<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeExternalAccountBindingApi — operations

Accessor: `client.acmeExternalAccountBindingApi` · Source: `src/resources/acme-external-account-binding-api.ts` · 5 operations · Request and error types: namespace `AcmeExternalAccountBindingApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-certificate-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAcmeExternalAccountBinding

- **Signature**: `createAcmeExternalAccountBinding(request: AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingError>`
- **Wire**: `POST /#CreateAcmeExternalAccountBinding`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi` | `xAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiSchema` | `src/models/xamz-target-aws-certificate-manager-acme-external-account-binding-api.ts` |

### deleteAcmeExternalAccountBinding

- **Signature**: `deleteAcmeExternalAccountBinding(request: AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingError>`
- **Wire**: `POST /#DeleteAcmeExternalAccountBinding`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi` | `xAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiSchema` | `src/models/xamz-target1-aws-certificate-manager-acme-external-account-binding-api.ts` |

### describeAcmeExternalAccountBinding

- **Signature**: `describeAcmeExternalAccountBinding(request: AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingError>`
- **Wire**: `POST /#DescribeAcmeExternalAccountBinding`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi` | `xAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiSchema` | `src/models/xamz-target2-aws-certificate-manager-acme-external-account-binding-api.ts` |

### listAcmeExternalAccountBindings

- **Signature**: `listAcmeExternalAccountBindings(request: AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsError>`
- **Wire**: `POST /#ListAcmeExternalAccountBindings`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi` | `xAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiSchema` | `src/models/xamz-target3-aws-certificate-manager-acme-external-account-binding-api.ts` |

### revokeAcmeExternalAccountBinding

- **Signature**: `revokeAcmeExternalAccountBinding(request: AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingError>`
- **Wire**: `POST /#RevokeAcmeExternalAccountBinding`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi` | `xAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiSchema` | `src/models/xamz-target4-aws-certificate-manager-acme-external-account-binding-api.ts` |

