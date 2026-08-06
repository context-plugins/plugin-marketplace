# MessagingV1UsecaseApi — operations

Accessor: `client.MessagingV1UsecaseApi` · Source: `Api/MessagingV1UsecaseApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchUsecase
- **HTTP**: `GET /v1/Services/Usecases` (Default1 (messaging))
- **Signature**: `FetchUsecase(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1Usecase`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
