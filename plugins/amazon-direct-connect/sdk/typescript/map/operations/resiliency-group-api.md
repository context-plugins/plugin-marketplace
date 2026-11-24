<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResiliencyGroupApi — operations

Accessor: `client.resiliencyGroupApi` · Source: `src/resources/resiliency-group-api.ts` · 5 operations · Request and error types: namespace `ResiliencyGroupApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-direct-connect`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createResiliencyGroup

- **Signature**: `createResiliencyGroup(request: ResiliencyGroupApi.CreateResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, ResiliencyGroupApi.CreateResiliencyGroupError>`
- **Wire**: `POST /#CreateResiliencyGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `ResiliencyGroupApi.CreateResiliencyGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResiliencyGroupApi.CreateResiliencyGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsDirectConnectResiliencyGroupApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsDirectConnectResiliencyGroupApi` | `xAmzTargetAwsDirectConnectResiliencyGroupApiSchema` | `src/models/xamz-target-aws-direct-connect-resiliency-group-api.ts` |

### deleteResiliencyGroup

- **Signature**: `deleteResiliencyGroup(request: ResiliencyGroupApi.DeleteResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, ResiliencyGroupApi.DeleteResiliencyGroupError>`
- **Wire**: `POST /#DeleteResiliencyGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `ResiliencyGroupApi.DeleteResiliencyGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResiliencyGroupApi.DeleteResiliencyGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsDirectConnectResiliencyGroupApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsDirectConnectResiliencyGroupApi` | `xAmzTarget1AwsDirectConnectResiliencyGroupApiSchema` | `src/models/xamz-target1-aws-direct-connect-resiliency-group-api.ts` |

### getResiliencyGroup

- **Signature**: `getResiliencyGroup(request: ResiliencyGroupApi.GetResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, ResiliencyGroupApi.GetResiliencyGroupError>`
- **Wire**: `POST /#GetResiliencyGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `ResiliencyGroupApi.GetResiliencyGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResiliencyGroupApi.GetResiliencyGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsDirectConnectResiliencyGroupApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsDirectConnectResiliencyGroupApi` | `xAmzTarget2AwsDirectConnectResiliencyGroupApiSchema` | `src/models/xamz-target2-aws-direct-connect-resiliency-group-api.ts` |

### listResiliencyGroups

- **Signature**: `listResiliencyGroups(request: ResiliencyGroupApi.ListResiliencyGroupsRequestParams, options?: RequestOptions): ApiPromise<undefined, ResiliencyGroupApi.ListResiliencyGroupsError>`
- **Wire**: `POST /#ListResiliencyGroups`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `ResiliencyGroupApi.ListResiliencyGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResiliencyGroupApi.ListResiliencyGroupsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsDirectConnectResiliencyGroupApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsDirectConnectResiliencyGroupApi` | `xAmzTarget3AwsDirectConnectResiliencyGroupApiSchema` | `src/models/xamz-target3-aws-direct-connect-resiliency-group-api.ts` |

### updateResiliencyGroup

- **Signature**: `updateResiliencyGroup(request: ResiliencyGroupApi.UpdateResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, ResiliencyGroupApi.UpdateResiliencyGroupError>`
- **Wire**: `POST /#UpdateResiliencyGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsDirectConnectError` with `kind: "api"`, an instance of `ResiliencyGroupApi.UpdateResiliencyGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResiliencyGroupApi.UpdateResiliencyGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsDirectConnectResiliencyGroupApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsDirectConnectResiliencyGroupApi` | `xAmzTarget4AwsDirectConnectResiliencyGroupApiSchema` | `src/models/xamz-target4-aws-direct-connect-resiliency-group-api.ts` |

