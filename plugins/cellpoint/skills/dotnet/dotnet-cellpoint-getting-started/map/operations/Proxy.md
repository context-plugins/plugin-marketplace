# Proxy — operations

Accessor: `client.Proxy` · Source: `Api/Proxy.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DocumentProxy
- **HTTP**: `POST /payments/v1/document-proxy` (Default (payments))
- **Notes**: A client can use this endpoint to transmit card data to a third party. The third party can then use the card data to process a payment on behalf of the client. The client is never in possession of the card data. The third party is responsible for the security of the card data. Third parties must be registered with Cellpoint and configured to receive card data from the client. The client must have a valid access token to use this endpoint.
- **Signature**: `DocumentProxy(string targetHost, string targetEndpoint, string targetAuthentication, string targetJsonPathCardNumber, string targetJsonPathExpiryDate, string targetJsonPathSecurityCode, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DocumentProxyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
