<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatasetGroups — operations

Accessor: `client.datasetGroups` · Source: `src/resources/dataset-groups.ts` · 5 operations · Request and error types: namespace `DatasetGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDatasetGroup

- **Signature**: `createDatasetGroup(request: DatasetGroups.CreateDatasetGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, DatasetGroups.CreateDatasetGroupError>`
- **Wire**: `POST /#CreateDatasetGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `DatasetGroups.CreateDatasetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetGroups.CreateDatasetGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### deleteDatasetGroup

- **Signature**: `deleteDatasetGroup(request: DatasetGroups.DeleteDatasetGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, DatasetGroups.DeleteDatasetGroupError>`
- **Wire**: `POST /#DeleteDatasetGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `DatasetGroups.DeleteDatasetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetGroups.DeleteDatasetGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

### describeDatasetGroup

- **Signature**: `describeDatasetGroup(request: DatasetGroups.DescribeDatasetGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, DatasetGroups.DescribeDatasetGroupError>`
- **Wire**: `POST /#DescribeDatasetGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `DatasetGroups.DescribeDatasetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetGroups.DescribeDatasetGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### listDatasetGroups

- **Signature**: `listDatasetGroups(request: DatasetGroups.ListDatasetGroupsRequestParams, options?: RequestOptions): ApiPromise<undefined, DatasetGroups.ListDatasetGroupsError>`
- **Wire**: `POST /#ListDatasetGroups`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `DatasetGroups.ListDatasetGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetGroups.ListDatasetGroupsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### updateDatasetGroup

- **Signature**: `updateDatasetGroup(request: DatasetGroups.UpdateDatasetGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, DatasetGroups.UpdateDatasetGroupError>`
- **Wire**: `POST /#UpdateDatasetGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `DatasetGroups.UpdateDatasetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetGroups.UpdateDatasetGroupRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

