<!-- Generated file — do not edit; regenerated with the SDK. -->

# FleetApi — operations

Accessor: `client.fleetApi` · Source: `src/resources/fleet-api.ts` · 5 operations · Request and error types: namespace `FleetApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchGetFleets

- **Signature**: `batchGetFleets(request: FleetApi.BatchGetFleetsRequest, options?: RequestOptions): ApiPromise<undefined, FleetApi.BatchGetFleetsError>`
- **Wire**: `POST /#BatchGetFleets`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `FleetApi.BatchGetFleetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FleetApi.BatchGetFleetsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildFleetApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildFleetApi` | `xAmzTargetAwsCodeBuildFleetApiSchema` | `src/models/xamz-target-aws-code-build-fleet-api.ts` |

### createFleet

- **Signature**: `createFleet(request: FleetApi.CreateFleetRequest, options?: RequestOptions): ApiPromise<undefined, FleetApi.CreateFleetError>`
- **Wire**: `POST /#CreateFleet`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `FleetApi.CreateFleetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FleetApi.CreateFleetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCodeBuildFleetApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCodeBuildFleetApi` | `xAmzTarget1AwsCodeBuildFleetApiSchema` | `src/models/xamz-target1-aws-code-build-fleet-api.ts` |

### deleteFleet

- **Signature**: `deleteFleet(request: FleetApi.DeleteFleetRequest, options?: RequestOptions): ApiPromise<undefined, FleetApi.DeleteFleetError>`
- **Wire**: `POST /#DeleteFleet`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `FleetApi.DeleteFleetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FleetApi.DeleteFleetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCodeBuildFleetApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCodeBuildFleetApi` | `xAmzTarget2AwsCodeBuildFleetApiSchema` | `src/models/xamz-target2-aws-code-build-fleet-api.ts` |

### listFleets

- **Signature**: `listFleets(request: FleetApi.ListFleetsRequest, options?: RequestOptions): ApiPromise<undefined, FleetApi.ListFleetsError>`
- **Wire**: `POST /#ListFleets`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `FleetApi.ListFleetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FleetApi.ListFleetsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsCodeBuildFleetApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsCodeBuildFleetApi` | `xAmzTarget3AwsCodeBuildFleetApiSchema` | `src/models/xamz-target3-aws-code-build-fleet-api.ts` |

### updateFleet

- **Signature**: `updateFleet(request: FleetApi.UpdateFleetRequest, options?: RequestOptions): ApiPromise<undefined, FleetApi.UpdateFleetError>`
- **Wire**: `POST /#UpdateFleet`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `FleetApi.UpdateFleetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FleetApi.UpdateFleetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsCodeBuildFleetApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsCodeBuildFleetApi` | `xAmzTarget4AwsCodeBuildFleetApiSchema` | `src/models/xamz-target4-aws-code-build-fleet-api.ts` |

