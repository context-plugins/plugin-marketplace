# MerchantOnboarding — operations

Accessor: `client.MerchantOnboarding` · Source: `Api/MerchantOnboarding.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMerchant
- **HTTP**: `POST /wallet/merchantonboarding/v1` (Default (api))
- **Notes**: Creates a new merchant entity in the Merchant System of Record and returns a unique Merchant ID used by Paze.
- **Signature**: `CreateMerchant(MerchantOnboardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MerchantResponse`
- **Error**: `SdkException<CreateMerchantError>` — **Case A (typed)**
- **Error accessors**: `TryGetBaseResponse(out BaseResponse)` [404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
