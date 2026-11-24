<!-- Generated file — do not edit; regenerated with the SDK. -->

# VpCs — operations

Accessor: `client.VpCs` · Source: `src/AmazonVpc/Api/VpCs.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateVpc

- **Auth**: `options.Sigv4Auth`
- **Signature**: `CreateVpc(CreateVpcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CidrBlock`
- **Query params (wire ← C#)**: `CidrBlock` ← `CidrBlock`, `AmazonProvidedIpv6CidrBlock` ← `AmazonProvidedIpv6CidrBlock`, `InstanceTenancy` ← `InstanceTenancy`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateVpcError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVpcRequest` | `src/AmazonVpc/Requests/VpCs/CreateVpcRequest.cs` |
| `InstanceTenancy1` | `src/AmazonVpc/Models/Enums/InstanceTenancy1.cs` |
| `CreateVpcError` | `src/AmazonVpc/Errors/CreateVpcError.cs` |

### DeleteVpc

- **Auth**: `options.Sigv4Auth`
- **Signature**: `DeleteVpc(DeleteVpcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VpcId`
- **Query params (wire ← C#)**: `VpcId` ← `VpcId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVpcError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVpcRequest` | `src/AmazonVpc/Requests/VpCs/DeleteVpcRequest.cs` |
| `DeleteVpcError` | `src/AmazonVpc/Errors/DeleteVpcError.cs` |

### DescribeVpcs

- **Auth**: `options.Sigv4Auth`
- **Signature**: `DescribeVpcs(DescribeVpcsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `VpcId` ← `VpcId`, `Filter` ← `Filter`, `MaxResults` ← `MaxResults`, `NextToken` ← `NextToken`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeVpcsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeVpcsRequest` | `src/AmazonVpc/Requests/VpCs/DescribeVpcsRequest.cs` |
| `DescribeVpcsError` | `src/AmazonVpc/Errors/DescribeVpcsError.cs` |

### ModifyVpcAttribute

- **Auth**: `options.Sigv4Auth`
- **Signature**: `ModifyVpcAttribute(ModifyVpcAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VpcId`
- **Query params (wire ← C#)**: `VpcId` ← `VpcId`, `EnableDnsSupport.Value` ← `EnableDnsSupportValue`, `EnableDnsHostnames.Value` ← `EnableDnsHostnamesValue`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ModifyVpcAttributeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModifyVpcAttributeRequest` | `src/AmazonVpc/Requests/VpCs/ModifyVpcAttributeRequest.cs` |
| `ModifyVpcAttributeError` | `src/AmazonVpc/Errors/ModifyVpcAttributeError.cs` |

