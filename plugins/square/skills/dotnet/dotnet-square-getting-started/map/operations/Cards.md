# Cards — operations

Accessor: `client.Cards` · Source: `Api/Cards.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCard
- **HTTP**: `POST /v2/cards` (Default (connect))
- **Notes**: Adds a card on file to an existing merchant.
- **Signature**: `CreateCard(CreateCardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DisableCard
- **HTTP**: `POST /v2/cards/{card_id}/disable` (Default (connect))
- **Notes**: Disables the card, preventing any further updates or charges. Disabling an already disabled card is allowed but has no effect.
- **Signature**: `DisableCard(string cardId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DisableCardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCards
- **HTTP**: `GET /v2/cards` (Default (connect))
- **Notes**: Retrieves a list of cards owned by the account making the request. A max of 25 cards will be returned.
- **Signature**: `ListCards(string? cursor, string? customerId, string? referenceId, SortOrder? sortOrder, bool? includeDisabled = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`cursor` … `sortOrder`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `includeDisabled` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `customer_id` ← `customerId`, `include_disabled` ← `includeDisabled`, `reference_id` ← `referenceId`, `sort_order` ← `sortOrder`
- **Returns**: `ListCardsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCard
- **HTTP**: `GET /v2/cards/{card_id}` (Default (connect))
- **Notes**: Retrieves details for a specific Card.
- **Signature**: `RetrieveCard(string cardId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveCardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
