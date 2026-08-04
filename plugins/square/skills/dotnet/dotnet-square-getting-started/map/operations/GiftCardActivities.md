# GiftCardActivities — operations

Accessor: `client.GiftCardActivities` · Source: `Api/GiftCardActivities.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateGiftCardActivity
- **HTTP**: `POST /v2/gift-cards/activities` (Default (connect))
- **Notes**: Creates a gift card activity to manage the balance or state of a gift card . For example, create an `ACTIVATE` activity to activate a gift card with an initial balance before first use.
- **Signature**: `CreateGiftCardActivity(CreateGiftCardActivityRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateGiftCardActivityResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListGiftCardActivities
- **HTTP**: `GET /v2/gift-cards/activities` (Default (connect))
- **Notes**: Lists gift card activities. By default, you get gift card activities for all gift cards in the seller's account. You can optionally specify query parameters to filter the list. For example, you can get a list of gift card activities for a gift card, for all gift cards in a specific region, or for activities within a time window.
- **Signature**: `ListGiftCardActivities(string? giftCardId, string? type, string? locationId, string? beginTime, string? endTime, int? limit, string? cursor, string? sortOrder, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`giftCardId` … `sortOrder`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `gift_card_id` ← `giftCardId`, `type` ← `type`, `location_id` ← `locationId`, `begin_time` ← `beginTime`, `end_time` ← `endTime`, `limit` ← `limit`, `cursor` ← `cursor`, `sort_order` ← `sortOrder`
- **Returns**: `ListGiftCardActivitiesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
