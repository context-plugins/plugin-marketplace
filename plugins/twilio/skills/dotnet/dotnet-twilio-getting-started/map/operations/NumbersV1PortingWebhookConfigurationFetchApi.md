# NumbersV1PortingWebhookConfigurationFetchApi — operations

Accessor: `client.NumbersV1PortingWebhookConfigurationFetchApi` · Source: `Api/NumbersV1PortingWebhookConfigurationFetchApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchPortingWebhookConfigurationFetch
- **HTTP**: `GET /v1/Porting/Configuration/Webhook` (Default5 (numbers))
- **Notes**: Allows to fetch the webhook configuration
- **Signature**: `FetchPortingWebhookConfigurationFetch(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1PortingWebhookConfigurationFetch`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
