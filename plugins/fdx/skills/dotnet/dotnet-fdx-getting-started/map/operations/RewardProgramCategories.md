# RewardProgramCategories — operations

Accessor: `client.RewardProgramCategories` · Source: `Api/RewardProgramCategories.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetRewardProgramCategories
- **HTTP**: `GET /reward-programs/{rewardProgramId}/categories` (Core (financialdataexchange-prod))
- **Notes**: Get reward categories
- **Signature**: `GetRewardProgramCategories(string rewardProgramId, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `RewardCategoriesEntity`
- **Error**: `SdkException<GetRewardProgramCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
