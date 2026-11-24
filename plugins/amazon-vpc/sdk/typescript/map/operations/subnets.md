<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subnets — operations

Accessor: `client.subnets` · Source: `src/resources/subnets.ts` · 3 operations · Request and error types: namespace `Subnets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-vpc`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSubnet

- **Signature**: `createSubnet(request: Subnets.CreateSubnetRequest, options?: RequestOptions): ApiPromise<undefined, Subnets.CreateSubnetError>`
- **Wire**: `GET /?Action=CreateSubnet`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `Subnets.CreateSubnetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subnets.CreateSubnetRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vpcId` | `query` | `VpcId` | `string` | yes |
| `cidrBlock` | `query` | `CidrBlock` | `string` | yes |
| `availabilityZone` | `query` | `AvailabilityZone` | `string` | no |
| `ipv6CidrBlock` | `query` | `Ipv6CidrBlock` | `string` | no |

### deleteSubnet

- **Signature**: `deleteSubnet(request: Subnets.DeleteSubnetRequest, options?: RequestOptions): ApiPromise<undefined, Subnets.DeleteSubnetError>`
- **Wire**: `GET /?Action=DeleteSubnet`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `Subnets.DeleteSubnetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subnets.DeleteSubnetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subnetId` | `query` | `SubnetId` | `string` | yes |

### describeSubnets

- **Signature**: `describeSubnets(request?: Subnets.DescribeSubnetsRequest, options?: RequestOptions): ApiPromise<undefined, Subnets.DescribeSubnetsError>`
- **Wire**: `GET /?Action=DescribeSubnets`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `Subnets.DescribeSubnetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subnets.DescribeSubnetsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subnetId` | `query` | `SubnetId` | `string[]` | no |
| `filter` | `query` | `Filter` | `string[]` | no |
| `maxResults` | `query` | `MaxResults` | `number` | no |
| `nextToken` | `query` | `NextToken` | `string` | no |

