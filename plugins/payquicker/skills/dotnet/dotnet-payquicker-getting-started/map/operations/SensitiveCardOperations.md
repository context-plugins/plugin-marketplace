# SensitiveCardOperations — operations

Accessor: `client.SensitiveCardOperations` · Source: `Api/SensitiveCardOperations.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCardDataToken
- **HTTP**: `GET /prepaid-cards/{destination-token}/show` (Api (api))
- **Notes**: Generate a one-time token used to reveal prepaid card PCI data (card number, CVV, expiry) in the form of image data (base64) or JSON. This is the first step of a two-step client-side flow — the returned token is then passed to Fetch Card Data using client-side authentication. For a step-by-step guide, see Display a Virtual Card .
- **Signature**: `CreateCardDataToken(string format, string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `requestOptions` = null
- **Query params (wire ← C#)**: `format` ← `format`
- **Returns**: `ShowCardTokenResult`
- **Error**: `SdkException<CreateCardDataTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCardPinToken
- **HTTP**: `GET /prepaid-cards/{destination-token}/pin` (Api (api))
- **Notes**: Generate one part of a two-part token required to reveal or set a prepaid card PIN using client-side authentication. The returned token is passed to either Fetch Card PIN or Update Card PIN . For a step-by-step guide, see Get or Set a Card PIN .
- **Signature**: `CreateCardPinToken(string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `requestOptions` = null
- **Returns**: `CardPinTokenResult`
- **Error**: `SdkException<CreateCardPinTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCardPin
- **HTTP**: `POST /prepaid-cards/{destination-token}/pin` (Api (api))
- **Notes**: Reveal the current PIN for a prepaid card . Requires a token from Create Card PIN Token and uses client-side authentication. For a step-by-step guide, see Get or Set a Card PIN .
- **Signature**: `GetCardPin(GetCardPinRequest body, string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `requestOptions` = null
- **Returns**: `CardPinResult`
- **Error**: `SdkException<GetCardPinError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetCardPin
- **HTTP**: `PUT /prepaid-cards/{destination-token}/pin` (Api (api))
- **Notes**: Set or change the PIN for a prepaid card , if supported by the program. Requires a token from Create Card PIN Token and uses client-side authentication. For a step-by-step guide, see Get or Set a Card PIN .
- **Signature**: `SetCardPin(SetCardPinRequest body, string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `requestOptions` = null
- **Returns**: `CardPinResult`
- **Error**: `SdkException<SetCardPinError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowCard
- **HTTP**: `POST /prepaid-cards/{destination-token}/show` (Api (api))
- **Notes**: Return prepaid card PCI data (card number, CVV, expiry) in the form of image data, text, or both. This is the second step of a two-step client-side flow — call Create Card Data Token first to obtain the required token, then use client-side authentication to call this endpoint. For a step-by-step guide, see Display a Virtual Card .
- **Signature**: `ShowCard(ShowCardRequest body, string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `requestOptions` = null
- **Returns**: `ShowCardResult`
- **Error**: `SdkException<ShowCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
