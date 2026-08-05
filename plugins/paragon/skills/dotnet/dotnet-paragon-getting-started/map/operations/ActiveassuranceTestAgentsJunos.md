# ActiveassuranceTestAgentsJunos — operations

Accessor: `client.ActiveassuranceTestAgentsJunos` · Source: `Api/ActiveassuranceTestAgentsJunos.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TestAgentServiceStatusJunosTestAgent
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents:statusJunosTestAgent` (Default)
- **Signature**: `TestAgentServiceStatusJunosTestAgent(string orgId, StatusJunosTestAgentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
