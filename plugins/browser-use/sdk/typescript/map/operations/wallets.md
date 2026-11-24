<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wallets — operations

Accessor: `client.wallets` · Source: `src/resources/wallets.ts` · 2 operations · Request and error types: namespace `Wallets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-use`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getStripeLinkStatusStripeLinkGet

- **Signature**: `getStripeLinkStatusStripeLinkGet(options?: RequestOptions): ApiPromise<StripeLinkStatusResponse, Wallets.GetStripeLinkStatusStripeLinkGetError>`
- **Wire**: `GET /stripe-link`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StripeLinkStatusResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Wallets.GetStripeLinkStatusStripeLinkGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `StripeLinkStatusResponse` | `stripeLinkStatusResponseSchema` | `src/models/stripe-link-status-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listAgentcardWalletsAgentcardWalletsGet

- **Signature**: `listAgentcardWalletsAgentcardWalletsGet(options?: RequestOptions): ApiPromise<AgentCardWalletListResponse, Wallets.ListAgentcardWalletsAgentcardWalletsGetError>`
- **Wire**: `GET /agentcard/wallets`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentCardWalletListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Wallets.ListAgentcardWalletsAgentcardWalletsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentCardWalletListResponse` | `agentCardWalletListResponseSchema` | `src/models/agent-card-wallet-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

