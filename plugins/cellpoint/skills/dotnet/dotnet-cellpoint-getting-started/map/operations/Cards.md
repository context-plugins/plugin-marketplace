# Cards — operations

Accessor: `client.Cards` · Source: `Api/Cards.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CardSchemeLookup
- **HTTP**: `POST /payments/v1/schemes` (Default (payments))
- **Notes**: Lookup the card scheme via BIN data.
- **Signature**: `CardSchemeLookup(Bin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentsV1SchemesResponse`
- **Error**: `SdkException<CardSchemeLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CardTokenize
- **HTTP**: `POST /payments/v1/orders/{orderId}/card-tokens` (Default (payments))
- **Notes**: Tokenize a card to use for a later authorization. Tokenization is useful to prevent other parts system from having to interact with PCI information. Tokens are single-use and will expire after 15 minutes.
- **Signature**: `CardTokenize(string orderId, Card? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TokenizedCard`
- **Error**: `SdkException<CardTokenizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ExternalCardTokenize
- **HTTP**: `POST /payments/v1/orders/{orderId}/external-card-tokens` (Default (payments))
- **Notes**: Tokenize an externally tokenized data to use for a later authorization. Tokenization is useful to prevent other parts system from having to interact with PCI information. Tokens are single-use and will expire after 15 minutes. Unlike the regular tokenization, this endpoint is used to tokenize data that has already been tokenized by a third party, such as a payment gateway or a wallet provider. Such data typically billing details too. This endpoint will return these billing details.
- **Signature**: `ExternalCardTokenize(string orderId, ExternallyTokenizedCard? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TokenizedCardWithContactData`
- **Error**: `SdkException<ExternalCardTokenizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
