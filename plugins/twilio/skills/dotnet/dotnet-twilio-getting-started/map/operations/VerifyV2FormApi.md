# VerifyV2FormApi — operations

Accessor: `client.VerifyV2FormApi` · Source: `Api/VerifyV2FormApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchForm
- **HTTP**: `GET /v2/Forms/{FormType}` (Default13 (verify))
- **Notes**: Fetch the forms for a specific Form Type.
- **Signature**: `FetchForm(FormEnumFormTypes formType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2Form`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
