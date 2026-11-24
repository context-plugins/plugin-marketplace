<!-- Generated file — do not edit; regenerated with the SDK. -->

# Options — operations

Accessor: `client.Options` · Source: `src/Upstox/Api/Options.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetOptionContracts

- **Auth**: `options.Oauth2`
- **Signature**: `GetOptionContracts(GetOptionContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`, `expiry_date` ← `ExpiryDate`
- **Returns**: `GetOptionContractResponse`
- **Error**: `ApiException<GetOptionContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOptionContractsRequest` | `src/Upstox/Requests/Options/GetOptionContractsRequest.cs` |
| `GetOptionContractResponse` | `src/Upstox/Models/GetOptionContractResponse.cs` |
| `GetOptionContractsError` | `src/Upstox/Errors/GetOptionContractsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetPutCallOptionChain

- **Auth**: `options.Oauth2`
- **Signature**: `GetPutCallOptionChain(GetPutCallOptionChainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `ExpiryDate`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`, `expiry_date` ← `ExpiryDate`
- **Returns**: `GetOptionChainResponse`
- **Error**: `ApiException<GetPutCallOptionChainError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPutCallOptionChainRequest` | `src/Upstox/Requests/Options/GetPutCallOptionChainRequest.cs` |
| `GetOptionChainResponse` | `src/Upstox/Models/GetOptionChainResponse.cs` |
| `GetPutCallOptionChainError` | `src/Upstox/Errors/GetPutCallOptionChainError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

