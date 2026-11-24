<!-- Generated file — do not edit; regenerated with the SDK. -->

# SystemApi — operations

Accessor: `client.SystemApi` · Source: `src/TranscriptFetch/Api/SystemApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV2Health

- **Signature**: `GetApiV2Health(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Health`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Health` | `src/TranscriptFetch/Models/Health.cs` |

### GetApiV2Me

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV2Me(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<GetApiV2MeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `GetApiV2MeError` | `src/TranscriptFetch/Errors/GetApiV2MeError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

### HealthCheck

- **Signature**: `HealthCheck(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Health`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Health` | `src/TranscriptFetch/Models/Health.cs` |

### Me

- **Auth**: `options.BearerAuth`
- **Signature**: `Me(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SuccessEnvelope`
- **Error**: `ApiException<MeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SuccessEnvelope` | `src/TranscriptFetch/Models/SuccessEnvelope.cs` |
| `MeError` | `src/TranscriptFetch/Errors/MeError.cs` |
| `ErrorEnvelope` | `src/TranscriptFetch/Models/ErrorEnvelope.cs` |

