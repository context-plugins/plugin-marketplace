<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credentials — operations

Accessor: `client.Credentials` · Source: `src/PlinthUsGrantsData/Api/Credentials.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AnswerChallenge

- **Signature**: `AnswerChallenge(AnswerChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `UnlockResult`
- **Error**: `ApiException<AnswerChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnswerChallengeRequest` | `src/PlinthUsGrantsData/Requests/Credentials/AnswerChallengeRequest.cs` |
| `AnswerRequest` | `src/PlinthUsGrantsData/Models/AnswerRequest.cs` |
| `UnlockResult` | `src/PlinthUsGrantsData/Models/UnlockResult.cs` |
| `AnswerChallengeError` | `src/PlinthUsGrantsData/Errors/AnswerChallengeError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |

### DescribeAgentKey

- **Signature**: `DescribeAgentKey(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### DescribeChallenge

- **Signature**: `DescribeChallenge(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### MintAgentKey

- **Signature**: `MintAgentKey(MintAgentKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TrialKey`
- **Error**: `ApiException<MintAgentKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MintAgentKeyRequest` | `src/PlinthUsGrantsData/Requests/Credentials/MintAgentKeyRequest.cs` |
| `AgentKeyRequest` | `src/PlinthUsGrantsData/Models/AgentKeyRequest.cs` |
| `TrialKey` | `src/PlinthUsGrantsData/Models/TrialKey.cs` |
| `MintAgentKeyError` | `src/PlinthUsGrantsData/Errors/MintAgentKeyError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |

### TakeChallenge

- **Signature**: `TakeChallenge(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ChallengeIssued`
- **Error**: `ApiException<TakeChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChallengeIssued` | `src/PlinthUsGrantsData/Models/ChallengeIssued.cs` |
| `TakeChallengeError` | `src/PlinthUsGrantsData/Errors/TakeChallengeError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |

