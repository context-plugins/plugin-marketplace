# Customers — operations

Accessor: `client.Customers` · Source: `Api/Customers.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CustomerInfo
- **HTTP**: `GET /customers/{version}/{providerId}/current` (Default (sandbox-products))
- **Notes**: This product supports use cases such as payment enablement, account opening, and identity verification. Responses return information about the authorized end-user, the customer associated with the `id_token` used in the call. This information may include, but is not limited to, the customer identifier, name, email, address, and phone number. &lt;br&gt; To see the response schema, select the `200` response below. For an example payload response, see the `200` example response below the *Try it* feature. This product requires consumer consent to share all account holder information. &gt; 🛑 The `id_token` should be used as the bearer token with this call. &gt;
- **Signature**: `CustomerInfo(XAkoyaInteractionType? xAkoyaInteractionType, string version = "v2", string providerId = "mikomo", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xAkoyaInteractionType` — nullable, no default → **must pass explicitly**
  - defaults: `version` = "v2", `providerId` = "mikomo", `requestOptions` = null
- **Returns**: `CurrentCustomer`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountHolder
- **HTTP**: `GET /contacts/{version}/{providerId}/{accountId}` (Default (sandbox-products))
- **Notes**: This product supports use cases such as payment enablement, account opening, identity verification,or lending &amp; credit enhancement. Responses return information about the authorized consumer, the customer associated with the `id_token` used in the call, and the relationship specific to the provided `accountId`. &gt; 📌 Please note! &gt; &gt; This endpoint provides additional information which may not be required for your use case, making it inefficient compared to the /customer info endpoint. Please refer to to the Customers guide for more information about this endpoint. Get account holder information. Based on FDX 5.2.1. This product requires consumer consent to share all account holder information. &gt; 🛑 The `id_token` should be used as the bearer token with this call. &gt;
- **Signature**: `GetAccountHolder(XAkoyaInteractionType? xAkoyaInteractionType, string accountId = ":accountId", string version = "v2", string providerId = "mikomo", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xAkoyaInteractionType` — nullable, no default → **must pass explicitly**
  - defaults: `accountId` = ":accountId", `version` = "v2", `providerId` = "mikomo", `requestOptions` = null
- **Returns**: `AccountContactEntity`
- **Error**: `SdkException<GetAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEntity(out ErrorEntity)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
