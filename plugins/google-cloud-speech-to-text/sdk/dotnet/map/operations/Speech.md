<!-- Generated file — do not edit; regenerated with the SDK. -->

# Speech — operations

Accessor: `client.Speech` · Source: `src/GoogleCloudSpeechToText/Api/Speech.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SpeechSpeechLongrunningrecognize

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechSpeechLongrunningrecognize(SpeechSpeechLongrunningrecognizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<SpeechSpeechLongrunningrecognizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechSpeechLongrunningrecognizeRequest` | `src/GoogleCloudSpeechToText/Requests/Speech/SpeechSpeechLongrunningrecognizeRequest.cs` |
| `LongRunningRecognizeRequest` | `src/GoogleCloudSpeechToText/Models/LongRunningRecognizeRequest.cs` |
| `Operation` | `src/GoogleCloudSpeechToText/Models/Operation.cs` |
| `SpeechSpeechLongrunningrecognizeError` | `src/GoogleCloudSpeechToText/Errors/SpeechSpeechLongrunningrecognizeError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechSpeechRecognize

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechSpeechRecognize(SpeechSpeechRecognizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecognizeResponse`
- **Error**: `ApiException<SpeechSpeechRecognizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechSpeechRecognizeRequest` | `src/GoogleCloudSpeechToText/Requests/Speech/SpeechSpeechRecognizeRequest.cs` |
| `RecognizeRequest` | `src/GoogleCloudSpeechToText/Models/RecognizeRequest.cs` |
| `RecognizeResponse` | `src/GoogleCloudSpeechToText/Models/RecognizeResponse.cs` |
| `SpeechSpeechRecognizeError` | `src/GoogleCloudSpeechToText/Errors/SpeechSpeechRecognizeError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

