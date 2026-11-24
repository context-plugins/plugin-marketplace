<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/GoogleCloudSpeechToText/Api/Operations.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SpeechOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechOperationsGet(SpeechOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OperationsId`
- **Returns**: `Operation`
- **Error**: `ApiException<SpeechOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechOperationsGetRequest` | `src/GoogleCloudSpeechToText/Requests/Operations/SpeechOperationsGetRequest.cs` |
| `Operation` | `src/GoogleCloudSpeechToText/Models/Operation.cs` |
| `SpeechOperationsGetError` | `src/GoogleCloudSpeechToText/Errors/SpeechOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechOperationsList(SpeechOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `name` ← `Name`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `ListOperationsResponse`
- **Error**: `ApiException<SpeechOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechOperationsListRequest` | `src/GoogleCloudSpeechToText/Requests/Operations/SpeechOperationsListRequest.cs` |
| `ListOperationsResponse` | `src/GoogleCloudSpeechToText/Models/ListOperationsResponse.cs` |
| `SpeechOperationsListError` | `src/GoogleCloudSpeechToText/Errors/SpeechOperationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

