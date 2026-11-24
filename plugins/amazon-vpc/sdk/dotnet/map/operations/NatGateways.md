<!-- Generated file — do not edit; regenerated with the SDK. -->

# NatGateways — operations

Accessor: `client.NatGateways` · Source: `src/AmazonVpc/Api/NatGateways.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateNatGateway

- **Auth**: `options.Sigv4Auth`
- **Signature**: `CreateNatGateway(CreateNatGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubnetId`
- **Query params (wire ← C#)**: `SubnetId` ← `SubnetId`, `AllocationId` ← `AllocationId`, `ConnectivityType` ← `ConnectivityType`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateNatGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateNatGatewayRequest` | `src/AmazonVpc/Requests/NatGateways/CreateNatGatewayRequest.cs` |
| `ConnectivityType1` | `src/AmazonVpc/Models/Enums/ConnectivityType1.cs` |
| `CreateNatGatewayError` | `src/AmazonVpc/Errors/CreateNatGatewayError.cs` |

### DescribeNatGateways

- **Auth**: `options.Sigv4Auth`
- **Signature**: `DescribeNatGateways(DescribeNatGatewaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `NatGatewayId` ← `NatGatewayId`, `Filter` ← `Filter`, `MaxResults` ← `MaxResults`, `NextToken` ← `NextToken`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeNatGatewaysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeNatGatewaysRequest` | `src/AmazonVpc/Requests/NatGateways/DescribeNatGatewaysRequest.cs` |
| `DescribeNatGatewaysError` | `src/AmazonVpc/Errors/DescribeNatGatewaysError.cs` |

