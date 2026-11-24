<!-- Generated file — do not edit; regenerated with the SDK. -->

# InternetGateways — operations

Accessor: `client.InternetGateways` · Source: `src/AmazonVpc/Api/InternetGateways.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AttachInternetGateway

- **Auth**: `options.Sigv4Auth`
- **Signature**: `AttachInternetGateway(AttachInternetGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InternetGatewayId`, `VpcId`
- **Query params (wire ← C#)**: `InternetGatewayId` ← `InternetGatewayId`, `VpcId` ← `VpcId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AttachInternetGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AttachInternetGatewayRequest` | `src/AmazonVpc/Requests/InternetGateways/AttachInternetGatewayRequest.cs` |
| `AttachInternetGatewayError` | `src/AmazonVpc/Errors/AttachInternetGatewayError.cs` |

### CreateInternetGateway

- **Auth**: `options.Sigv4Auth`
- **Signature**: `CreateInternetGateway(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateInternetGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateInternetGatewayError` | `src/AmazonVpc/Errors/CreateInternetGatewayError.cs` |

