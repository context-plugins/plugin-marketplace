# ResourceInformation — operations

Accessor: `client.ResourceInformation` · Source: `Api/ResourceInformation.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetResource
- **HTTP**: `GET /resources/{resourceId}` (Resource (financialdataexchange-prod))
- **Notes**: Retrieve the details of the identified resource
- **Signature**: `GetResource(string resourceId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResourceEntity`
- **Error**: `SdkException<GetResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetResources
- **HTTP**: `GET /resources` (Resource (financialdataexchange-prod))
- **Notes**: Retrieve all the resources
- **Signature**: `GetResources(ResultType? resultType, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`resultType` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `resultType` ← `resultType`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `ResourceListEntity`
- **Error**: `SdkException<GetResourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 401, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
