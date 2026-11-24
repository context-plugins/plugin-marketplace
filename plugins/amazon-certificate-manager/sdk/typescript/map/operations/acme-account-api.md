<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeAccountApi — operations

Accessor: `client.acmeAccountApi` · Source: `src/resources/acme-account-api.ts` · 3 operations · Request and error types: namespace `AcmeAccountApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-certificate-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeAcmeAccount

- **Signature**: `describeAcmeAccount(request: AcmeAccountApi.DescribeAcmeAccountRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeAccountApi.DescribeAcmeAccountError>`
- **Wire**: `POST /#DescribeAcmeAccount`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeAccountApi.DescribeAcmeAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeAccountApi.DescribeAcmeAccountRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### listAcmeAccounts

- **Signature**: `listAcmeAccounts(request: AcmeAccountApi.ListAcmeAccountsRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeAccountApi.ListAcmeAccountsError>`
- **Wire**: `POST /#ListAcmeAccounts`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeAccountApi.ListAcmeAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeAccountApi.ListAcmeAccountsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

### revokeAcmeAccount

- **Signature**: `revokeAcmeAccount(request: AcmeAccountApi.RevokeAcmeAccountRequestParams, options?: RequestOptions): ApiPromise<undefined, AcmeAccountApi.RevokeAcmeAccountError>`
- **Wire**: `POST /#RevokeAcmeAccount`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCertificateManagerError` with `kind: "api"`, an instance of `AcmeAccountApi.RevokeAcmeAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AcmeAccountApi.RevokeAcmeAccountRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

