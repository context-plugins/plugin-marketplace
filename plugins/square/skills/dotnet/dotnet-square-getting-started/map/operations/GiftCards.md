# GiftCards — operations

Accessor: `client.GiftCards` · Source: `Api/GiftCards.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateGiftCard
- **HTTP**: `POST /v2/gift-cards` (Default (connect))
- **Notes**: Creates a digital gift card or registers a physical (plastic) gift card. The resulting gift card has a `PENDING` state. To activate a gift card so that it can be redeemed for purchases, call CreateGiftCardActivity and create an `ACTIVATE` activity with the initial balance. Alternatively, you can use RefundPayment to refund a payment to the new gift card.
- **Signature**: `CreateGiftCard(CreateGiftCardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateGiftCardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LinkCustomerToGiftCard
- **HTTP**: `POST /v2/gift-cards/{gift_card_id}/link-customer` (Default (connect))
- **Notes**: Links a customer to a gift card, which is also referred to as adding a card on file.
- **Signature**: `LinkCustomerToGiftCard(string giftCardId, LinkCustomerToGiftCardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LinkCustomerToGiftCardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListGiftCards
- **HTTP**: `GET /v2/gift-cards` (Default (connect))
- **Notes**: Lists all gift cards. You can specify optional filters to retrieve a subset of the gift cards. Results are sorted by `created_at` in ascending order.
- **Signature**: `ListGiftCards(string? type, string? state, int? limit, string? cursor, string? customerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`type` … `customerId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `state` ← `state`, `limit` ← `limit`, `cursor` ← `cursor`, `customer_id` ← `customerId`
- **Returns**: `ListGiftCardsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveGiftCard
- **HTTP**: `GET /v2/gift-cards/{id}` (Default (connect))
- **Notes**: Retrieves a gift card using the gift card ID.
- **Signature**: `RetrieveGiftCard(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveGiftCardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveGiftCardFromGan
- **HTTP**: `POST /v2/gift-cards/from-gan` (Default (connect))
- **Notes**: Retrieves a gift card using the gift card account number (GAN).
- **Signature**: `RetrieveGiftCardFromGan(RetrieveGiftCardFromGanrequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveGiftCardFromGanresponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveGiftCardFromNonce
- **HTTP**: `POST /v2/gift-cards/from-nonce` (Default (connect))
- **Notes**: Retrieves a gift card using a secure payment token that represents the gift card.
- **Signature**: `RetrieveGiftCardFromNonce(RetrieveGiftCardFromNonceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveGiftCardFromNonceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnlinkCustomerFromGiftCard
- **HTTP**: `POST /v2/gift-cards/{gift_card_id}/unlink-customer` (Default (connect))
- **Notes**: Unlinks a customer from a gift card, which is also referred to as removing a card on file.
- **Signature**: `UnlinkCustomerFromGiftCard(string giftCardId, UnlinkCustomerFromGiftCardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UnlinkCustomerFromGiftCardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
