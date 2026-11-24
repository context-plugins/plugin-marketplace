<!-- Generated file — do not edit; regenerated with the SDK. -->

# NatGateways — operations

Accessor: `client.natGateways` · Source: `src/resources/nat-gateways.ts` · 2 operations · Request and error types: namespace `NatGateways`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-vpc`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createNatGateway

- **Signature**: `createNatGateway(request: NatGateways.CreateNatGatewayRequest, options?: RequestOptions): ApiPromise<undefined, NatGateways.CreateNatGatewayError>`
- **Wire**: `GET /?Action=CreateNatGateway`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `NatGateways.CreateNatGatewayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NatGateways.CreateNatGatewayRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subnetId` | `query` | `SubnetId` | `string` | yes |
| `allocationId` | `query` | `AllocationId` | `string` | no |
| `connectivityType` | `query` | `ConnectivityType` | `ConnectivityType1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectivityType1` | `connectivityType1Schema` | `src/models/connectivity-type1.ts` |

### describeNatGateways

- **Signature**: `describeNatGateways(request?: NatGateways.DescribeNatGatewaysRequest, options?: RequestOptions): ApiPromise<undefined, NatGateways.DescribeNatGatewaysError>`
- **Wire**: `GET /?Action=DescribeNatGateways`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `NatGateways.DescribeNatGatewaysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NatGateways.DescribeNatGatewaysRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `natGatewayId` | `query` | `NatGatewayId` | `string[]` | no |
| `filter` | `query` | `Filter` | `string[]` | no |
| `maxResults` | `query` | `MaxResults` | `number` | no |
| `nextToken` | `query` | `NextToken` | `string` | no |

