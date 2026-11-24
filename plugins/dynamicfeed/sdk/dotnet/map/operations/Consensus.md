<!-- Generated file — do not edit; regenerated with the SDK. -->

# Consensus — operations

Accessor: `client.Consensus` · Source: `src/DynamicFeed/Api/Consensus.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ConsensusConsensusGet

- **Signature**: `ConsensusConsensusGet(ConsensusConsensusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `symbol` ← `Symbol`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<ConsensusConsensusGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConsensusConsensusGetRequest` | `src/DynamicFeed/Requests/Consensus/ConsensusConsensusGetRequest.cs` |
| `Symbol` | `src/DynamicFeed/Models/AnyOf/Symbol.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `ConsensusConsensusGetError` | `src/DynamicFeed/Errors/ConsensusConsensusGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

