# RaiseDisputes — operations

Accessor: `client.RaiseDisputes` · Source: `Api/RaiseDisputes.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDisputes
- **HTTP**: `GET /disputes` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of raised disputes that match the query parameters. This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.
- **Signature**: `GetDisputes(string? status, string? paymentInstrument, string? createdSince, string? createdUntil, string? offset, string? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `paymentInstrument` ← `paymentInstrument`, `createdSince` ← `createdSince`, `createdUntil` ← `createdUntil`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<IReadOnlyList<DisputeResponse>>`
- **Error**: `SdkException<GetDisputesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDisputes401Error1(out Disputes401Error1)` [401] · `TryGetDisputes403Error1(out Disputes403Error1)` [403] · `TryGetDisputes422Error1(out Disputes422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDisputesId
- **HTTP**: `GET /disputes/{id}` (Default (balanceplatform-api-test))
- **Notes**: Get a raised dispute by ID.
- **Signature**: `GetDisputesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DisputeResponse`
- **Error**: `SdkException<GetDisputesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDisputes401Error1(out Disputes401Error1)` [401] · `TryGetDisputes403Error1(out Disputes403Error1)` [403] · `TryGetDisputes422Error1(out Disputes422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchDisputesId
- **HTTP**: `PATCH /disputes/{id}` (Default (balanceplatform-api-test))
- **Notes**: Update information related to a raised dispute, or change a dispute's status from draft to submitted or closed . Note: Changing the status of a dispute to submitted or closed is a final action. You cannot make updates to a submitted or closed dispute. Make sure to upload all supporting attachments using the `POST /disputes/{id}/attachments` endpoint before you submit a dispute. When you update a dispute to submitted , Adyen sends the raised dispute to the card scheme for review and acquirer defense. When you update a raised dispute to closed , Adyen closes the dispute, and the dispute is no longer eligible for review by the card scheme.
- **Signature**: `PatchDisputesId(string id, PatchableDisputeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DisputeResponse`
- **Error**: `SdkException<PatchDisputesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDisputes401Error1(out Disputes401Error1)` [401] · `TryGetDisputes403Error1(out Disputes403Error1)` [403] · `TryGetDisputes422Error1(out Disputes422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDisputes
- **HTTP**: `POST /disputes` (Default (balanceplatform-api-test))
- **Notes**: Raise a dispute for an underlying transaction, providing a dispute type and the amount you want to dispute. Raising a dispute returns a dispute ID, which you can use to update details about the dispute, provide supporting documentation, close the dispute, or submit the dispute for a chargeback. You can also use the dispute ID to view the status of the dispute.
- **Signature**: `PostDisputes(DisputeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DisputeResponse`
- **Error**: `SdkException<PostDisputesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDisputes401Error1(out Disputes401Error1)` [401] · `TryGetDisputes403Error1(out Disputes403Error1)` [403] · `TryGetDisputes422Error1(out Disputes422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
