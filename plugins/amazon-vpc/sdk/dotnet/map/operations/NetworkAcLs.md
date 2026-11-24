<!-- Generated file — do not edit; regenerated with the SDK. -->

# NetworkAcLs — operations

Accessor: `client.NetworkAcLs` · Source: `src/AmazonVpc/Api/NetworkAcLs.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateNetworkAcl

- **Auth**: `options.Sigv4Auth`
- **Signature**: `CreateNetworkAcl(CreateNetworkAclRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VpcId`
- **Query params (wire ← C#)**: `VpcId` ← `VpcId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateNetworkAclError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateNetworkAclRequest` | `src/AmazonVpc/Requests/NetworkAcLs/CreateNetworkAclRequest.cs` |
| `CreateNetworkAclError` | `src/AmazonVpc/Errors/CreateNetworkAclError.cs` |

### DescribeNetworkAcls

- **Auth**: `options.Sigv4Auth`
- **Signature**: `DescribeNetworkAcls(DescribeNetworkAclsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `NetworkAclId` ← `NetworkAclId`, `Filter` ← `Filter`, `MaxResults` ← `MaxResults`, `NextToken` ← `NextToken`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeNetworkAclsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeNetworkAclsRequest` | `src/AmazonVpc/Requests/NetworkAcLs/DescribeNetworkAclsRequest.cs` |
| `DescribeNetworkAclsError` | `src/AmazonVpc/Errors/DescribeNetworkAclsError.cs` |

