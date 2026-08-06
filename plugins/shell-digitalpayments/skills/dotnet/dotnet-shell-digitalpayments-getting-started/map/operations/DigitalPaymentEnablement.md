# DigitalPaymentEnablement — operations

Accessor: `client.DigitalPaymentEnablement` · Source: `Api/DigitalPaymentEnablement.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MpayV1TokensRefPut
- **HTTP**: `PUT /PaymentEnablement/v1/ref` (Shell (api-test))
- **Notes**: Generates a DPAN and stores the relationship between the Reference ID, DPAN and the real PAN. This method is called during the customer registration process, ahead of any payment. The Reference ID is an identifier chosen by the client system for mobile payment registration. It must be unique in context of the client system, and is the key to obtaining and managing the payment details later.
- **Signature**: `MpayV1TokensRefPut(MobilePaymentRegistrationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentEnablementResponse`
- **Error**: `SdkException<MpayV1TokensRefPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetPaymentEnablementErrorResponse(out PaymentEnablementErrorResponse)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
