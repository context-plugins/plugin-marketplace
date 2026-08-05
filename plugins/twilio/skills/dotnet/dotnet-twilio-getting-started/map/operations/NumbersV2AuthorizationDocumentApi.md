# NumbersV2AuthorizationDocumentApi — operations

Accessor: `client.NumbersV2AuthorizationDocumentApi` · Source: `Api/NumbersV2AuthorizationDocumentApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAuthorizationDocument
- **HTTP**: `POST /v2/HostedNumber/AuthorizationDocuments` (Default7 (numbers))
- **Notes**: Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
- **Signature**: `CreateAuthorizationDocument(string addressSid, string email, string contactPhoneNumber, IReadOnlyList<string> hostedNumberOrderSids, string? contactTitle, IReadOnlyList<string>? ccEmails, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `contactTitle` — nullable, no default → **must pass explicitly**
  - `ccEmails` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AddressSid` ← `addressSid`, `Email` ← `email`, `ContactPhoneNumber` ← `contactPhoneNumber`, `HostedNumberOrderSids` ← `hostedNumberOrderSids`, `ContactTitle` ← `contactTitle`, `CcEmails` ← `ccEmails`
- **Returns**: `NumbersV2AuthorizationDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAuthorizationDocument
- **HTTP**: `DELETE /v2/HostedNumber/AuthorizationDocuments/{Sid}` (Default7 (numbers))
- **Notes**: Cancel the AuthorizationDocument request.
- **Signature**: `DeleteAuthorizationDocument(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchAuthorizationDocument
- **HTTP**: `GET /v2/HostedNumber/AuthorizationDocuments/{Sid}` (Default7 (numbers))
- **Notes**: Fetch a specific AuthorizationDocument.
- **Signature**: `FetchAuthorizationDocument(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2AuthorizationDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListAuthorizationDocument
- **HTTP**: `GET /v2/HostedNumber/AuthorizationDocuments` (Default7 (numbers))
- **Notes**: Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
- **Signature**: `ListAuthorizationDocument(string? email, AuthorizationDocumentEnumStatus? status, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`email` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Email` ← `email`, `Status` ← `status`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAuthorizationDocumentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
