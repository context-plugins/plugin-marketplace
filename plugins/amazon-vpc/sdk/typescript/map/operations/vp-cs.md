<!-- Generated file — do not edit; regenerated with the SDK. -->

# VpCs — operations

Accessor: `client.vpCs` · Source: `src/resources/vp-cs.ts` · 4 operations · Request and error types: namespace `VpCs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-vpc`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createVpc

- **Signature**: `createVpc(request: VpCs.CreateVpcRequest, options?: RequestOptions): ApiPromise<undefined, VpCs.CreateVpcError>`
- **Wire**: `GET /?Action=CreateVpc`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `VpCs.CreateVpcError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VpCs.CreateVpcRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cidrBlock` | `query` | `CidrBlock` | `string` | yes |
| `amazonProvidedIpv6CidrBlock` | `query` | `AmazonProvidedIpv6CidrBlock` | `boolean` | no |
| `instanceTenancy` | `query` | `InstanceTenancy` | `InstanceTenancy1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstanceTenancy1` | `instanceTenancy1Schema` | `src/models/instance-tenancy1.ts` |

### deleteVpc

- **Signature**: `deleteVpc(request: VpCs.DeleteVpcRequest, options?: RequestOptions): ApiPromise<undefined, VpCs.DeleteVpcError>`
- **Wire**: `GET /?Action=DeleteVpc`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `VpCs.DeleteVpcError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VpCs.DeleteVpcRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vpcId` | `query` | `VpcId` | `string` | yes |

### describeVpcs

- **Signature**: `describeVpcs(request?: VpCs.DescribeVpcsRequest, options?: RequestOptions): ApiPromise<undefined, VpCs.DescribeVpcsError>`
- **Wire**: `GET /?Action=DescribeVpcs`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `VpCs.DescribeVpcsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VpCs.DescribeVpcsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vpcId` | `query` | `VpcId` | `string[]` | no |
| `filter` | `query` | `Filter` | `string[]` | no |
| `maxResults` | `query` | `MaxResults` | `number` | no |
| `nextToken` | `query` | `NextToken` | `string` | no |

### modifyVpcAttribute

- **Signature**: `modifyVpcAttribute(request: VpCs.ModifyVpcAttributeRequest, options?: RequestOptions): ApiPromise<undefined, VpCs.ModifyVpcAttributeError>`
- **Wire**: `GET /?Action=ModifyVpcAttribute`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `VpCs.ModifyVpcAttributeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VpCs.ModifyVpcAttributeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vpcId` | `query` | `VpcId` | `string` | yes |
| `enableDnsSupportValue` | `query` | `EnableDnsSupport.Value` | `boolean` | no |
| `enableDnsHostnamesValue` | `query` | `EnableDnsHostnames.Value` | `boolean` | no |

