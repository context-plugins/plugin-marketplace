# NumbersV1PortingWebhookConfigurationApi — operations

Accessor: `client.NumbersV1PortingWebhookConfigurationApi` · Source: `Api/NumbersV1PortingWebhookConfigurationApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePortingWebhookConfiguration
- **HTTP**: `POST /v1/Porting/Configuration/Webhook` (Default5 (numbers))
- **Notes**: Create a Webhook Configuration
- **Signature**: `CreatePortingWebhookConfiguration(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1PortingWebhookConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
