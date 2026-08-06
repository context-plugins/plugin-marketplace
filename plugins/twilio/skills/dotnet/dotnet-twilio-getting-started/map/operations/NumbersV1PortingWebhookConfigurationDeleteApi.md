# NumbersV1PortingWebhookConfigurationDeleteApi — operations

Accessor: `client.NumbersV1PortingWebhookConfigurationDeleteApi` · Source: `Api/NumbersV1PortingWebhookConfigurationDeleteApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeletePortingWebhookConfigurationDelete
- **HTTP**: `DELETE /v1/Porting/Configuration/Webhook/{WebhookType}` (Default5 (numbers))
- **Notes**: Allows the client to delete a webhook configuration.
- **Signature**: `DeletePortingWebhookConfigurationDelete(PortingWebhookConfigurationDeleteEnumWebhookType webhookType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
