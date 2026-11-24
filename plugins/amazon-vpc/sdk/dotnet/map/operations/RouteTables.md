<!-- Generated file — do not edit; regenerated with the SDK. -->

# RouteTables — operations

Accessor: `client.RouteTables` · Source: `src/AmazonVpc/Api/RouteTables.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AssociateRouteTable

- **Auth**: `options.Sigv4Auth`
- **Signature**: `AssociateRouteTable(AssociateRouteTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RouteTableId`
- **Query params (wire ← C#)**: `RouteTableId` ← `RouteTableId`, `SubnetId` ← `SubnetId`, `GatewayId` ← `GatewayId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssociateRouteTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateRouteTableRequest` | `src/AmazonVpc/Requests/RouteTables/AssociateRouteTableRequest.cs` |
| `AssociateRouteTableError` | `src/AmazonVpc/Errors/AssociateRouteTableError.cs` |

### CreateRoute

- **Auth**: `options.Sigv4Auth`
- **Signature**: `CreateRoute(CreateRouteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RouteTableId`
- **Query params (wire ← C#)**: `RouteTableId` ← `RouteTableId`, `DestinationCidrBlock` ← `DestinationCidrBlock`, `GatewayId` ← `GatewayId`, `NatGatewayId` ← `NatGatewayId`, `NetworkInterfaceId` ← `NetworkInterfaceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateRouteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRouteRequest` | `src/AmazonVpc/Requests/RouteTables/CreateRouteRequest.cs` |
| `CreateRouteError` | `src/AmazonVpc/Errors/CreateRouteError.cs` |

### CreateRouteTable

- **Auth**: `options.Sigv4Auth`
- **Signature**: `CreateRouteTable(CreateRouteTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VpcId`
- **Query params (wire ← C#)**: `VpcId` ← `VpcId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateRouteTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRouteTableRequest` | `src/AmazonVpc/Requests/RouteTables/CreateRouteTableRequest.cs` |
| `CreateRouteTableError` | `src/AmazonVpc/Errors/CreateRouteTableError.cs` |

### DescribeRouteTables

- **Auth**: `options.Sigv4Auth`
- **Signature**: `DescribeRouteTables(DescribeRouteTablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `RouteTableId` ← `RouteTableId`, `Filter` ← `Filter`, `MaxResults` ← `MaxResults`, `NextToken` ← `NextToken`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeRouteTablesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeRouteTablesRequest` | `src/AmazonVpc/Requests/RouteTables/DescribeRouteTablesRequest.cs` |
| `DescribeRouteTablesError` | `src/AmazonVpc/Errors/DescribeRouteTablesError.cs` |

