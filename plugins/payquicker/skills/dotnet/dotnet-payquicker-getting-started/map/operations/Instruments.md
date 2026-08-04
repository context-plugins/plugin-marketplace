# Instruments — operations

Accessor: `client.Instruments` · Source: `Api/Instruments.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInstrument
- **HTTP**: `POST /instruments` (Api (api))
- **Notes**: Create a financial instrument. The `instrumentType` property identifies whether this is a bank account (`BANK`) or electronic wallet (`EWALLET`). Include exactly one of `userToken` or `accountToken` to identify the target user or account. The response shape is determined by the `instrumentType` — a BANK instrument returns a bank account result, while an EWALLET instrument returns an electronic wallet result.
- **Signature**: `CreateInstrument(InstrumentRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InstrumentResult`
- **Error**: `SdkException<CreateInstrumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInstrument
- **HTTP**: `DELETE /instruments/{destination-token}` (Api (api))
- **Notes**: Delete an instrument by destination token. Include `scope` and `instrumentType` in the request body.
- **Signature**: `DeleteInstrument(string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InstrumentResult`
- **Error**: `SdkException<DeleteInstrumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetInstrument
- **HTTP**: `GET /instruments/{destination-token}` (Api (api))
- **Notes**: Fetch a single instrument by destination token. Pass `instrumentType` as a query parameter to identify the instrument type. The response shape is determined by the `instrumentType` — a BANK instrument returns a bank account result, while an EWALLET instrument returns an electronic wallet result.
- **Signature**: `GetInstrument(string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InstrumentResult`
- **Error**: `SdkException<GetInstrumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadInstrumentRequirementSearch
- **HTTP**: `GET /instruments/requirements/search/{searchId}` (Api (api))
- **Notes**: Retrieve a specific page of results from a previously initiated instrument requirement search. Use the `searchId` returned by `POST /instruments/requirements/search` to paginate through results. The response shape is determined by the `instrumentType` of the originating search.
- **Signature**: `ReadInstrumentRequirementSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `InstrumentRequirementSearchResult`
- **Error**: `SdkException<ReadInstrumentRequirementSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ReadInstrumentSearch
- **HTTP**: `GET /instruments/search/{searchId}` (Api (api))
- **Notes**: Retrieve a specific page of results from a previously initiated instrument search. Use the `searchId` returned by `POST /instruments/search` to paginate through results. The response shape is determined by the `instrumentType` of the originating search.
- **Signature**: `ReadInstrumentSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `IntrumentSearchResult`
- **Error**: `SdkException<ReadInstrumentSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchInstrumentRequirements
- **HTTP**: `POST /instruments/requirements/search` (Api (api))
- **Notes**: Initiate a search for instrument requirements of a specific type. The request body must include `instrumentType` (`BANK` or `EWALLET`) and `scope` (user, account, or destination token). The `filters` correspond to the selected instrument type. Requirement search does not support sorting. Supported types and their filter schemas: - BANK — uses `BankAccountRequirementSearchRequest` with bank account requirement filter fields - EWALLET — uses `EwalletRequirementSearchRequest` with electronic wallet requirement filter fields
- **Signature**: `SearchInstrumentRequirements(InstrumentRequirementSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InstrumentRequirementSearchResult`
- **Error**: `SdkException<SearchInstrumentRequirementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchInstruments
- **HTTP**: `POST /instruments/search` (Api (api))
- **Notes**: Search for instruments — bank accounts or electronic wallets — of a specific type. The request body must include an `instrumentType` discriminator and a `scope` property addressing the target user. The `filters` and `sort` criteria correspond to the selected instrument type. Supported types and their filter schemas: - BANK — uses `BankAccountSearchRequest` with bank-account filter fields - EWALLET — uses `EwalletSearchRequest` with electronic-wallet filter fields The response carries the requested page and a `searchId`; use `GET /instruments/search/{searchId}` to paginate the cached result set. See Searching .
- **Signature**: `SearchInstruments(InstrumentSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `IntrumentSearchResult`
- **Error**: `SdkException<SearchInstrumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInstrument
- **HTTP**: `PUT /instruments/{destination-token}` (Api (api))
- **Notes**: Update an existing instrument by its destination token. Include `instrumentType` in the request body along with `userToken` or `accountToken`. Ownership is verified from the destination token. The response shape is determined by the `instrumentType`.
- **Signature**: `UpdateInstrument(InstrumentRequest body, string destinationToken = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `destinationToken` = "dest-4aed86e2-4929-45bf-814d-9030aef21e79", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InstrumentResult`
- **Error**: `SdkException<UpdateInstrumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
