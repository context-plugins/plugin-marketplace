# TutorialEssentials — operations

Accessor: `client.TutorialEssentials` · Source: `Api/TutorialEssentials.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeveloperTutorial
- **HTTP**: `GET /tutorial` (Default (api))
- **Notes**: This method tests whether users who are working through the Getting Started guides have set up their configurations correctly.
- **Signature**: `DeveloperTutorial(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
