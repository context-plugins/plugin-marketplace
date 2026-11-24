<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scans — operations

Accessor: `client.Scans` · Source: `src/AgentReady/Api/Scans.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetScan

- **Auth**: `options.ApiKey`
- **Signature**: `GetScan(GetScanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Scan`
- **Error**: `ApiException<GetScanError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScanRequest` | `src/AgentReady/Requests/Scans/GetScanRequest.cs` |
| `Scan` | `src/AgentReady/Models/Scan.cs` |
| `GetScanError` | `src/AgentReady/Errors/GetScanError.cs` |
| `Error` | `src/AgentReady/Models/Error.cs` |

### ListScans

- **Auth**: `options.ApiKey`
- **Signature**: `ListScans(ListScansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ScanListResponse`
- **Error**: `ApiException<ListScansError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListScansRequest` | `src/AgentReady/Requests/Scans/ListScansRequest.cs` |
| `ScanListResponse` | `src/AgentReady/Models/ScanListResponse.cs` |
| `ListScansError` | `src/AgentReady/Errors/ListScansError.cs` |
| `Error` | `src/AgentReady/Models/Error.cs` |

### StartScan

- **Auth**: `options.ApiKey`
- **Signature**: `StartScan(StartScanOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StartScanResponse`
- **Error**: `ApiException<StartScanError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 409, 422, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartScanOperationRequest` | `src/AgentReady/Requests/Scans/StartScanOperationRequest.cs` |
| `StartScanRequest` | `src/AgentReady/Models/StartScanRequest.cs` |
| `StartScanResponse` | `src/AgentReady/Models/StartScanResponse.cs` |
| `StartScanError` | `src/AgentReady/Errors/StartScanError.cs` |
| `Error` | `src/AgentReady/Models/Error.cs` |

### X402Scan

- **Signature**: `X402Scan(X402ScanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PaidScanResponse`
- **Error**: `ApiException<X402ScanError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `X402ScanRequest` | `src/AgentReady/Requests/Scans/X402ScanRequest.cs` |
| `ApiX402ScanRequest` | `src/AgentReady/Models/ApiX402ScanRequest.cs` |
| `PaidScanResponse` | `src/AgentReady/Models/PaidScanResponse.cs` |
| `X402ScanError` | `src/AgentReady/Errors/X402ScanError.cs` |
| `Error` | `src/AgentReady/Models/Error.cs` |

### X402ScanChallenge

- **Signature**: `X402ScanChallenge(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<X402ScanChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `X402ScanChallengeError` | `src/AgentReady/Errors/X402ScanChallengeError.cs` |
| `Error` | `src/AgentReady/Models/Error.cs` |

