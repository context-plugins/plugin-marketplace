# FlexV1InsightsUserRolesApi — operations

Accessor: `client.FlexV1InsightsUserRolesApi` · Source: `Api/FlexV1InsightsUserRolesApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchInsightsUserRoles
- **HTTP**: `GET /v1/Insights/UserRoles` (Default13 (flex-api))
- **Notes**: This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
- **Signature**: `FetchInsightsUserRoles(string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1InsightsUserRoles`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
