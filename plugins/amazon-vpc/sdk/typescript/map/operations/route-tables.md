<!-- Generated file — do not edit; regenerated with the SDK. -->

# RouteTables — operations

Accessor: `client.routeTables` · Source: `src/resources/route-tables.ts` · 4 operations · Request and error types: namespace `RouteTables`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-vpc`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### associateRouteTable

- **Signature**: `associateRouteTable(request: RouteTables.AssociateRouteTableRequest, options?: RequestOptions): ApiPromise<undefined, RouteTables.AssociateRouteTableError>`
- **Wire**: `GET /?Action=AssociateRouteTable`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `RouteTables.AssociateRouteTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RouteTables.AssociateRouteTableRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `routeTableId` | `query` | `RouteTableId` | `string` | yes |
| `subnetId` | `query` | `SubnetId` | `string` | no |
| `gatewayId` | `query` | `GatewayId` | `string` | no |

### createRoute

- **Signature**: `createRoute(request: RouteTables.CreateRouteRequest, options?: RequestOptions): ApiPromise<undefined, RouteTables.CreateRouteError>`
- **Wire**: `GET /?Action=CreateRoute`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `RouteTables.CreateRouteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RouteTables.CreateRouteRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `routeTableId` | `query` | `RouteTableId` | `string` | yes |
| `destinationCidrBlock` | `query` | `DestinationCidrBlock` | `string` | no |
| `gatewayId` | `query` | `GatewayId` | `string` | no |
| `natGatewayId` | `query` | `NatGatewayId` | `string` | no |
| `networkInterfaceId` | `query` | `NetworkInterfaceId` | `string` | no |

### createRouteTable

- **Signature**: `createRouteTable(request: RouteTables.CreateRouteTableRequest, options?: RequestOptions): ApiPromise<undefined, RouteTables.CreateRouteTableError>`
- **Wire**: `GET /?Action=CreateRouteTable`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `RouteTables.CreateRouteTableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RouteTables.CreateRouteTableRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vpcId` | `query` | `VpcId` | `string` | yes |

### describeRouteTables

- **Signature**: `describeRouteTables(request?: RouteTables.DescribeRouteTablesRequest, options?: RequestOptions): ApiPromise<undefined, RouteTables.DescribeRouteTablesError>`
- **Wire**: `GET /?Action=DescribeRouteTables`
- **Auth**: `sigv4Auth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonVpcError` with `kind: "api"`, an instance of `RouteTables.DescribeRouteTablesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RouteTables.DescribeRouteTablesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `routeTableId` | `query` | `RouteTableId` | `string[]` | no |
| `filter` | `query` | `Filter` | `string[]` | no |
| `maxResults` | `query` | `MaxResults` | `number` | no |
| `nextToken` | `query` | `NextToken` | `string` | no |

