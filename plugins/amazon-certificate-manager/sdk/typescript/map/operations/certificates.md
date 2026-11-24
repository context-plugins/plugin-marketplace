<!-- Generated file — do not edit; regenerated with the SDK. -->

# Certificates — operations

Accessor: `client.certificates` · Source: `src/resources/certificates.ts` · 9 operations · Request and error types: namespace `Certificates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-certificate-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteCertificate

- **Signature**: `deleteCertificate(request: Certificates.DeleteCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, Certificates.DeleteCertificateError>`
- **Wire**: `POST /#DeleteCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Certificates.DeleteCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Certificates.DeleteCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCertificateManagerCertificatesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCertificateManagerCertificatesApi` | `xAmzTargetAwsCertificateManagerCertificatesApiSchema` | `src/models/xamz-target-aws-certificate-manager-certificates-api.ts` |

### describeCertificate

- **Signature**: `describeCertificate(request: Certificates.DescribeCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, Certificates.DescribeCertificateError>`
- **Wire**: `POST /#DescribeCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Certificates.DescribeCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Certificates.DescribeCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCertificateManagerCertificatesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCertificateManagerCertificatesApi` | `xAmzTarget1AwsCertificateManagerCertificatesApiSchema` | `src/models/xamz-target1-aws-certificate-manager-certificates-api.ts` |

### exportCertificate

- **Signature**: `exportCertificate(request: Certificates.ExportCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, Certificates.ExportCertificateError>`
- **Wire**: `POST /#ExportCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Certificates.ExportCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Certificates.ExportCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCertificateManagerCertificatesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCertificateManagerCertificatesApi` | `xAmzTarget2AwsCertificateManagerCertificatesApiSchema` | `src/models/xamz-target2-aws-certificate-manager-certificates-api.ts` |

### getCertificate

- **Signature**: `getCertificate(request: Certificates.GetCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, Certificates.GetCertificateError>`
- **Wire**: `POST /#GetCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Certificates.GetCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Certificates.GetCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsCertificateManagerCertificatesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsCertificateManagerCertificatesApi` | `xAmzTarget3AwsCertificateManagerCertificatesApiSchema` | `src/models/xamz-target3-aws-certificate-manager-certificates-api.ts` |

### importCertificate

- **Signature**: `importCertificate(request: Certificates.ImportCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, Certificates.ImportCertificateError>`
- **Wire**: `POST /#ImportCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Certificates.ImportCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Certificates.ImportCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsCertificateManagerCertificatesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsCertificateManagerCertificatesApi` | `xAmzTarget4AwsCertificateManagerCertificatesApiSchema` | `src/models/xamz-target4-aws-certificate-manager-certificates-api.ts` |

### listCertificates

- **Signature**: `listCertificates(request: Certificates.ListCertificatesRequestParams, options?: RequestOptions): ApiPromise<undefined, Certificates.ListCertificatesError>`
- **Wire**: `POST /#ListCertificates`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Certificates.ListCertificatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Certificates.ListCertificatesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### requestCertificate

- **Signature**: `requestCertificate(request: Certificates.RequestCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, Certificates.RequestCertificateError>`
- **Wire**: `POST /#RequestCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Certificates.RequestCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Certificates.RequestCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8` | `xAmzTarget8Schema` | `src/models/xamz-target8.ts` |

### revokeCertificate

- **Signature**: `revokeCertificate(request: Certificates.RevokeCertificateRequestParams, options?: RequestOptions): ApiPromise<undefined, Certificates.RevokeCertificateError>`
- **Wire**: `POST /#RevokeCertificate`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Certificates.RevokeCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Certificates.RevokeCertificateRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### searchCertificates

- **Signature**: `searchCertificates(request: Certificates.SearchCertificatesRequestParams, options?: RequestOptions): ApiPromise<undefined, Certificates.SearchCertificatesError>`
- **Wire**: `POST /#SearchCertificates`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `Certificates.SearchCertificatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Certificates.SearchCertificatesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7` | `xAmzTarget7Schema` | `src/models/xamz-target7.ts` |

