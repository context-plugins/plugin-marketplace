<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connectors — operations

Accessor: `client.Connectors` · Source: `src/Basiq/Api/Connectors.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetConnector

- **Auth**: `options.ServicesToken`
- **Signature**: `GetConnector(GetConnectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ConnectorId`, `Method`
- **Returns**: `ConnectorsResponse1`
- **Error**: `ApiException<GetConnectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectors400Error1([NotNullWhen(true)] out Connectors400Error1? value)` [400] · `TryGetConnectors401Error1([NotNullWhen(true)] out Connectors401Error1? value)` [401] · `TryGetConnectors404Error1([NotNullWhen(true)] out Connectors404Error1? value)` [404] · `TryGetConnectors500Error1([NotNullWhen(true)] out Connectors500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetConnectorRequest` | `src/Basiq/Requests/Connectors/GetConnectorRequest.cs` |
| `ConnectorsResponse1` | `src/Basiq/Models/ConnectorsResponse1.cs` |
| `GetConnectorError` | `src/Basiq/Errors/GetConnectorError.cs` |
| `Connectors400Error1` | `src/Basiq/Models/Connectors400Error1.cs` |
| `Connectors401Error1` | `src/Basiq/Models/Connectors401Error1.cs` |
| `Connectors404Error1` | `src/Basiq/Models/Connectors404Error1.cs` |
| `Connectors500Error1` | `src/Basiq/Models/Connectors500Error1.cs` |

### GetConnectors

- **Auth**: `options.ServicesToken`
- **Signature**: `GetConnectors(GetConnectorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `ConnectorsResponse`
- **Error**: `ApiException<GetConnectorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectors400Error1([NotNullWhen(true)] out Connectors400Error1? value)` [400] · `TryGetConnectors401Error1([NotNullWhen(true)] out Connectors401Error1? value)` [401] · `TryGetConnectors404Error1([NotNullWhen(true)] out Connectors404Error1? value)` [404] · `TryGetConnectors500Error1([NotNullWhen(true)] out Connectors500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetConnectorsRequest` | `src/Basiq/Requests/Connectors/GetConnectorsRequest.cs` |
| `ConnectorsResponse` | `src/Basiq/Models/ConnectorsResponse.cs` |
| `GetConnectorsError` | `src/Basiq/Errors/GetConnectorsError.cs` |
| `Connectors400Error1` | `src/Basiq/Models/Connectors400Error1.cs` |
| `Connectors401Error1` | `src/Basiq/Models/Connectors401Error1.cs` |
| `Connectors404Error1` | `src/Basiq/Models/Connectors404Error1.cs` |
| `Connectors500Error1` | `src/Basiq/Models/Connectors500Error1.cs` |

