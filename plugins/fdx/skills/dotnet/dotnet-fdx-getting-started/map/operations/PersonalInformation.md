# PersonalInformation — operations

Accessor: `client.PersonalInformation` · Source: `Api/PersonalInformation.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountContact
- **HTTP**: `GET /accounts/{accountId}/contact` (Core (financialdataexchange-prod))
- **Notes**: Get contact information on the account
- **Signature**: `GetAccountContact(string accountId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountContactEntity`
- **Error**: `SdkException<GetAccountContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCustomer
- **HTTP**: `GET /customers/{customerId}` (Customer (financialdataexchange-prod))
- **Notes**: Retrieve customer information by customer id
- **Signature**: `GetCustomer(string customerId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CustomerEntity`
- **Error**: `SdkException<GetCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCustomerInfo
- **HTTP**: `GET /customers/current` (Customer (financialdataexchange-prod))
- **Notes**: Get information about the customer within the authorization scope
- **Signature**: `GetCustomerInfo(Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CustomerEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCustomers
- **HTTP**: `GET /customers` (Customer (financialdataexchange-prod))
- **Notes**: Retrieve account holders related to permissioned accounts
- **Signature**: `GetCustomers(string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `CustomersEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
