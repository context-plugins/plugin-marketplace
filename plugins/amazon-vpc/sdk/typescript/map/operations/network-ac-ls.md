<!-- Generated file — do not edit; regenerated with the SDK. -->

# NetworkAcLs — operations

Accessor: `client.networkAcLs` · Source: `src/resources/network-ac-ls.ts` · 2 operations · Request and error types: namespace `NetworkAcLs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-vpc`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createNetworkAcl

- **Signature**: `createNetworkAcl(request: NetworkAcLs.CreateNetworkAclRequest, options?: RequestOptions): ApiPromise<undefined, NetworkAcLs.CreateNetworkAclError>`
- **Wire**: `GET /?Action=CreateNetworkAcl`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `NetworkAcLs.CreateNetworkAclError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkAcLs.CreateNetworkAclRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vpcId` | `query` | `VpcId` | `string` | yes |

### describeNetworkAcls

- **Signature**: `describeNetworkAcls(request?: NetworkAcLs.DescribeNetworkAclsRequest, options?: RequestOptions): ApiPromise<undefined, NetworkAcLs.DescribeNetworkAclsError>`
- **Wire**: `GET /?Action=DescribeNetworkAcls`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `NetworkAcLs.DescribeNetworkAclsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkAcLs.DescribeNetworkAclsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `networkAclId` | `query` | `NetworkAclId` | `string[]` | no |
| `filter` | `query` | `Filter` | `string[]` | no |
| `maxResults` | `query` | `MaxResults` | `number` | no |
| `nextToken` | `query` | `NextToken` | `string` | no |

