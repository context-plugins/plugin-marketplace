# PayeeManagement — operations

Accessor: `client.PayeeManagement` · Source: `Api/PayeeManagement.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePayee
- **HTTP**: `POST /payees` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Create a payee
- **Signature**: `CreatePayee(Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, PayeeForUpdateEntity1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayeeEntity`
- **Error**: `SdkException<CreatePayeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetPayeeEntity(out PayeeEntity)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeletePayee
- **HTTP**: `DELETE /payees/{payeeId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Delete a payee
- **Signature**: `DeletePayee(string payeeId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayeeEntity`
- **Error**: `SdkException<DeletePayeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPayee
- **HTTP**: `GET /payees/{payeeId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Get a payee
- **Signature**: `GetPayee(string payeeId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayeeEntity`
- **Error**: `SdkException<GetPayeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchForPayees
- **HTTP**: `GET /payees` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Search for payees
- **Signature**: `SearchForPayees(string? updatedSince, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`updatedSince` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `updatedSince` ← `updatedSince`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PayeesEntity`
- **Error**: `SdkException<SearchForPayeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePayee
- **HTTP**: `PATCH /payees/{payeeId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Used to update an existing payee. The payee type must match the existing payee. This call updates the payee's fields to the values provided. If a field is not provided, the payee's field is not updated
- **Signature**: `UpdatePayee(string payeeId, Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, PayeeForUpdateEntity? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayeeEntity`
- **Error**: `SdkException<UpdatePayeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetPayeeEntity(out PayeeEntity)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
