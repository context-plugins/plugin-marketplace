<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiAccess — operations

Accessor: `client.ApiAccess` · Source: `src/DidLogic/Api/ApiAccess.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CapabilitiesShow

- **Auth**: `options.BearerAuth`
- **Signature**: `CapabilitiesShow(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1CapabilitiesResponse`
- **Error**: `ApiException<CapabilitiesShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Capabilities401Error1([NotNullWhen(true)] out ApiV1Capabilities401Error1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1CapabilitiesResponse` | `src/DidLogic/Models/ApiV1CapabilitiesResponse.cs` |
| `CapabilitiesShowError` | `src/DidLogic/Errors/CapabilitiesShowError.cs` |
| `ApiV1Capabilities401Error1` | `src/DidLogic/Models/ApiV1Capabilities401Error1.cs` |

