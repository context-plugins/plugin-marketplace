# RetrieveTheTriggers — operations

Accessor: `client.RetrieveTheTriggers` · Source: `Api/RetrieveTheTriggers.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAllAvailableTriggers
- **HTTP**: `GET /m2m/v2/triggers` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieves all of the available triggers for pseudo-MDN.
- **Signature**: `GetAllAvailableTriggers(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TriggerValueResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAllTriggersByAccountName
- **HTTP**: `GET /m2m/v2/triggers/accounts/{accountName}` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieve the triggers associated with an account name.
- **Signature**: `GetAllTriggersByAccountName(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TriggerValueResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAllTriggersByTriggerCategory
- **HTTP**: `GET /m2m/v2/triggers/categories/PromoAlerts` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieves all of the triggers for the specified account associated with the PromoAlert category
- **Signature**: `GetAllTriggersByTriggerCategory(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TriggerValueResponse2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTriggersById
- **HTTP**: `GET /m2m/v2/triggers/{triggerId}` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrives a specific trigger by its ID.
- **Signature**: `GetTriggersById(string triggerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TriggerValueResponse2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
