<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wallets — operations

Accessor: `client.Wallets` · Source: `src/BrowserUse/Api/Wallets.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetStripeLinkStatusStripeLinkGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetStripeLinkStatusStripeLinkGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StripeLinkStatusResponse`
- **Error**: `ApiException<GetStripeLinkStatusStripeLinkGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StripeLinkStatusResponse` | `src/BrowserUse/Models/StripeLinkStatusResponse.cs` |
| `GetStripeLinkStatusStripeLinkGetError` | `src/BrowserUse/Errors/GetStripeLinkStatusStripeLinkGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListAgentcardWalletsAgentcardWalletsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListAgentcardWalletsAgentcardWalletsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AgentCardWalletListResponse`
- **Error**: `ApiException<ListAgentcardWalletsAgentcardWalletsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AgentCardWalletListResponse` | `src/BrowserUse/Models/AgentCardWalletListResponse.cs` |
| `ListAgentcardWalletsAgentcardWalletsGetError` | `src/BrowserUse/Errors/ListAgentcardWalletsAgentcardWalletsGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

