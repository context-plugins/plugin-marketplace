# RewardProgramInformation — operations

Accessor: `client.RewardProgramInformation` · Source: `Api/RewardProgramInformation.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetRewardProgram
- **HTTP**: `GET /reward-programs/{rewardProgramId}` (Core (financialdataexchange-prod))
- **Notes**: Get a specific reward program
- **Signature**: `GetRewardProgram(string rewardProgramId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RewardProgramEntity`
- **Error**: `SdkException<GetRewardProgramError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchRewardPrograms
- **HTTP**: `GET /reward-programs` (Core (financialdataexchange-prod))
- **Notes**: Query all reward programs
- **Signature**: `SearchRewardPrograms(string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `RewardProgramsEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
