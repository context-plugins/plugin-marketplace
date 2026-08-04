# PrepaidCards — operations

Accessor: `client.PrepaidCards` · Source: `Api/PrepaidCards.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPrepaidCard
- **HTTP**: `GET /prepaid-cards/{destination-token}` (Api (api))
- **Notes**: Fetch a single prepaid card by its destination token.
- **Signature**: `GetPrepaidCard(string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `CardResult`
- **Error**: `SdkException<GetPrepaidCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderPrepaidCard
- **HTTP**: `POST /prepaid-cards` (Api (api))
- **Notes**: Order a prepaid card . Include `scope` as a query parameter to identify the target user or account.
- **Signature**: `OrderPrepaidCard(OrderCardRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `CardResult`
- **Error**: `SdkException<OrderPrepaidCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadPrepaidCardSearch
- **HTTP**: `GET /prepaid-cards/search/{searchId}` (Api (api))
- **Notes**: Retrieve a page from a previous prepaid card search.
- **Signature**: `ReadPrepaidCardSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `CardSearchResult`
- **Error**: `SdkException<ReadPrepaidCardSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ReplacePrepaidCard
- **HTTP**: `POST /prepaid-cards/{destination-token}/replace` (Api (api))
- **Notes**: Replace a prepaid card that has been lost, stolen, or damaged. The replacement card is linked to the same user and destination. See Card Replacement Reasons for the list of valid replacement reasons and Manage Prepaid Cards for a step-by-step guide.
- **Signature**: `ReplacePrepaidCard(ReplaceCardRequest body, string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `CardResult`
- **Error**: `SdkException<ReplacePrepaidCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchPrepaidCards
- **HTTP**: `POST /prepaid-cards/search` (Api (api))
- **Notes**: Search for prepaid cards using a structured filter body. Include a `scope` property to address the target user. The response carries the requested page and a `searchId`; use `GET /prepaid-cards/search/{searchId}` to paginate the cached result set. See Searching .
- **Signature**: `SearchPrepaidCards(PrepaidCardSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `CardSearchResult`
- **Error**: `SdkException<SearchPrepaidCardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePrepaidCard
- **HTTP**: `PATCH /prepaid-cards/{destination-token}` (Api (api))
- **Notes**: Partially update a prepaid card , such as changing its status or card group. See Card Statuses for allowed status transitions.
- **Signature**: `UpdatePrepaidCard(UpdateCardRequest body, string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `CardResult`
- **Error**: `SdkException<UpdatePrepaidCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
