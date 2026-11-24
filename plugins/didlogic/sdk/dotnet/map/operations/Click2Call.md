<!-- Generated file — do not edit; regenerated with the SDK. -->

# Click2Call — operations

Accessor: `client.Click2Call` · Source: `src/DidLogic/Api/Click2Call.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Click2CallCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `Click2CallCreate(Click2CallCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1Click2CallResponse`
- **Error**: `ApiException<Click2CallCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Click2Call401Error1([NotNullWhen(true)] out ApiV1Click2Call401Error1? value)` [401] · `TryGetApiV1Click2Call402Error1([NotNullWhen(true)] out ApiV1Click2Call402Error1? value)` [402] · `TryGetApiV1Click2Call403Error1([NotNullWhen(true)] out ApiV1Click2Call403Error1? value)` [403] · `TryGetApiV1Click2Call409Error1([NotNullWhen(true)] out ApiV1Click2Call409Error1? value)` [409] · `TryGetApiV1Click2Call422Error1([NotNullWhen(true)] out ApiV1Click2Call422Error1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Click2CallCreateRequest` | `src/DidLogic/Requests/Click2Call/Click2CallCreateRequest.cs` |
| `ApiV1Click2CallRequest` | `src/DidLogic/Models/ApiV1Click2CallRequest.cs` |
| `ApiV1Click2CallResponse` | `src/DidLogic/Models/ApiV1Click2CallResponse.cs` |
| `Click2CallCreateError` | `src/DidLogic/Errors/Click2CallCreateError.cs` |
| `ApiV1Click2Call401Error1` | `src/DidLogic/Models/ApiV1Click2Call401Error1.cs` |
| `ApiV1Click2Call402Error1` | `src/DidLogic/Models/ApiV1Click2Call402Error1.cs` |
| `ApiV1Click2Call403Error1` | `src/DidLogic/Models/ApiV1Click2Call403Error1.cs` |
| `ApiV1Click2Call409Error1` | `src/DidLogic/Models/ApiV1Click2Call409Error1.cs` |
| `ApiV1Click2Call422Error1` | `src/DidLogic/Models/ApiV1Click2Call422Error1.cs` |

### Click2CallDestroy

- **Auth**: `options.BearerAuth`
- **Signature**: `Click2CallDestroy(Click2CallDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<Click2CallDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Click2Call401Error1([NotNullWhen(true)] out ApiV1Click2Call401Error1? value)` [401] · `TryGetApiV1Click2Call403Error1([NotNullWhen(true)] out ApiV1Click2Call403Error1? value)` [403] · `TryGetApiV1Click2Call404Error1([NotNullWhen(true)] out ApiV1Click2Call404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Click2CallDestroyRequest` | `src/DidLogic/Requests/Click2Call/Click2CallDestroyRequest.cs` |
| `Click2CallDestroyError` | `src/DidLogic/Errors/Click2CallDestroyError.cs` |
| `ApiV1Click2Call401Error1` | `src/DidLogic/Models/ApiV1Click2Call401Error1.cs` |
| `ApiV1Click2Call403Error1` | `src/DidLogic/Models/ApiV1Click2Call403Error1.cs` |
| `ApiV1Click2Call404Error1` | `src/DidLogic/Models/ApiV1Click2Call404Error1.cs` |

### Click2CallShow

- **Auth**: `options.BearerAuth`
- **Signature**: `Click2CallShow(Click2CallShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1Click2CallResponse1`
- **Error**: `ApiException<Click2CallShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Click2Call401Error1([NotNullWhen(true)] out ApiV1Click2Call401Error1? value)` [401] · `TryGetApiV1Click2Call403Error1([NotNullWhen(true)] out ApiV1Click2Call403Error1? value)` [403] · `TryGetApiV1Click2Call404Error1([NotNullWhen(true)] out ApiV1Click2Call404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Click2CallShowRequest` | `src/DidLogic/Requests/Click2Call/Click2CallShowRequest.cs` |
| `ApiV1Click2CallResponse1` | `src/DidLogic/Models/ApiV1Click2CallResponse1.cs` |
| `Click2CallShowError` | `src/DidLogic/Errors/Click2CallShowError.cs` |
| `ApiV1Click2Call401Error1` | `src/DidLogic/Models/ApiV1Click2Call401Error1.cs` |
| `ApiV1Click2Call403Error1` | `src/DidLogic/Models/ApiV1Click2Call403Error1.cs` |
| `ApiV1Click2Call404Error1` | `src/DidLogic/Models/ApiV1Click2Call404Error1.cs` |

### RecordingsShow

- **Signature**: `RecordingsShow(RecordingsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Token`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RecordingsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecordingsShowRequest` | `src/DidLogic/Requests/Click2Call/RecordingsShowRequest.cs` |
| `RecordingsShowError` | `src/DidLogic/Errors/RecordingsShowError.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

