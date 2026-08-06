# VerifyV2MessagingConfiguration — operations

Accessor: `client.VerifyV2MessagingConfiguration` · Source: `Api/VerifyV2MessagingConfiguration.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMessagingConfiguration
- **HTTP**: `POST /v2/Services/{ServiceSid}/MessagingConfigurations` (Default3 (verify))
- **Notes**: Create a new MessagingConfiguration for a service.
- **Signature**: `CreateMessagingConfiguration(string serviceSid, string country, string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Country` ← `country`, `MessagingServiceSid` ← `messagingServiceSid`
- **Returns**: `VerifyV2ServiceMessagingConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMessagingConfiguration
- **HTTP**: `DELETE /v2/Services/{ServiceSid}/MessagingConfigurations/{Country}` (Default3 (verify))
- **Notes**: Delete a specific MessagingConfiguration.
- **Signature**: `DeleteMessagingConfiguration(string serviceSid, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchMessagingConfiguration
- **HTTP**: `GET /v2/Services/{ServiceSid}/MessagingConfigurations/{Country}` (Default3 (verify))
- **Notes**: Fetch a specific MessagingConfiguration.
- **Signature**: `FetchMessagingConfiguration(string serviceSid, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2ServiceMessagingConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListMessagingConfiguration
- **HTTP**: `GET /v2/Services/{ServiceSid}/MessagingConfigurations` (Default3 (verify))
- **Notes**: Retrieve a list of all Messaging Configurations for a Service.
- **Signature**: `ListMessagingConfiguration(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListMessagingConfigurationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateMessagingConfiguration
- **HTTP**: `POST /v2/Services/{ServiceSid}/MessagingConfigurations/{Country}` (Default3 (verify))
- **Notes**: Update a specific MessagingConfiguration
- **Signature**: `UpdateMessagingConfiguration(string serviceSid, string country, string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `MessagingServiceSid` ← `messagingServiceSid`
- **Returns**: `VerifyV2ServiceMessagingConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
