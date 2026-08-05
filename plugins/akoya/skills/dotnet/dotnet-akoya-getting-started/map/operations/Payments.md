# Payments — operations

Accessor: `client.Payments` · Source: `Api/Payments.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PaymentNetworks
- **HTTP**: `GET /payments/{version}/{providerId}/{accountId}/payment-networks` (Default (sandbox-products))
- **Notes**: This product supports use cases such as payment enablement or account opening. The response includes identifiers necessary to make ACH and RTP payments. Identifiers include account number, routing number, identifier type (actual or tokenized account number), and payment network type such as ACH or RTP. &lt;br&gt; To see the response schema, select the `200` response below. For an example payload response, see the `200` example response below the *Try it* feature. &gt; 🛑 &gt; &gt; The *id_token* should be used as the bearer token with this call.
- **Signature**: `PaymentNetworks(XAkoyaInteractionType? xAkoyaInteractionType, string version = "v2", string providerId = "mikomo", string accountId = ":accountId", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xAkoyaInteractionType` — nullable, no default → **must pass explicitly**
  - defaults: `version` = "v2", `providerId` = "mikomo", `accountId` = ":accountId", `requestOptions` = null
- **Returns**: `ArrayOfAccountPaymentNetworks`
- **Error**: `SdkException<PaymentNetworksError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEntity(out ErrorEntity)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
