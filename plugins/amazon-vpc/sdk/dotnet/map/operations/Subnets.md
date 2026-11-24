<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subnets — operations

Accessor: `client.Subnets` · Source: `src/AmazonVpc/Api/Subnets.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSubnet

- **Auth**: `options.Sigv4Auth`
- **Signature**: `CreateSubnet(CreateSubnetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VpcId`, `CidrBlock`
- **Query params (wire ← C#)**: `VpcId` ← `VpcId`, `CidrBlock` ← `CidrBlock`, `AvailabilityZone` ← `AvailabilityZone`, `Ipv6CidrBlock` ← `Ipv6CidrBlock`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateSubnetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSubnetRequest` | `src/AmazonVpc/Requests/Subnets/CreateSubnetRequest.cs` |
| `CreateSubnetError` | `src/AmazonVpc/Errors/CreateSubnetError.cs` |

### DeleteSubnet

- **Auth**: `options.Sigv4Auth`
- **Signature**: `DeleteSubnet(DeleteSubnetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubnetId`
- **Query params (wire ← C#)**: `SubnetId` ← `SubnetId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSubnetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSubnetRequest` | `src/AmazonVpc/Requests/Subnets/DeleteSubnetRequest.cs` |
| `DeleteSubnetError` | `src/AmazonVpc/Errors/DeleteSubnetError.cs` |

### DescribeSubnets

- **Auth**: `options.Sigv4Auth`
- **Signature**: `DescribeSubnets(DescribeSubnetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `SubnetId` ← `SubnetId`, `Filter` ← `Filter`, `MaxResults` ← `MaxResults`, `NextToken` ← `NextToken`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeSubnetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeSubnetsRequest` | `src/AmazonVpc/Requests/Subnets/DescribeSubnetsRequest.cs` |
| `DescribeSubnetsError` | `src/AmazonVpc/Errors/DescribeSubnetsError.cs` |

