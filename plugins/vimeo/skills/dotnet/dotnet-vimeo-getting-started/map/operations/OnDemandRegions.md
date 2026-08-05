# OnDemandRegions — operations

Accessor: `client.OnDemandRegions` · Source: `Api/OnDemandRegions.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVodRegion
- **HTTP**: `PUT /ondemand/pages/{ondemand_id}/regions/{country}` (Default (api))
- **Notes**: This method adds a single region to the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `AddVodRegion(string country, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandRegion`
- **Error**: `SdkException<AddVodRegionError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVodRegion
- **HTTP**: `DELETE /ondemand/pages/{ondemand_id}/regions/{country}` (Default (api))
- **Notes**: This method removes a single region from the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `DeleteVodRegion(string country, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVodRegionError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVodRegions
- **HTTP**: `DELETE /ondemand/pages/{ondemand_id}/regions` (Default (api))
- **Notes**: This method removes multiple regions from the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `DeleteVodRegions(double ondemandId, OndemandPagesRegionsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<OnDemandRegion>`
- **Error**: `SdkException<DeleteVodRegionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRegion
- **HTTP**: `GET /ondemand/regions/{country}` (Default (api))
- **Notes**: This method returns a single On Demand region.
- **Signature**: `GetRegion(string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandRegion`
- **Error**: `SdkException<GetRegionError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRegions
- **HTTP**: `GET /ondemand/regions` (Default (api))
- **Notes**: This method returns every existing On Demand region.
- **Signature**: `GetRegions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandRegionConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVodRegion
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/regions/{country}` (Default (api))
- **Notes**: This method returns a single region on the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `GetVodRegion(string country, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandRegion`
- **Error**: `SdkException<GetVodRegionError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodRegions
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/regions` (Default (api))
- **Notes**: This method returns every region on the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `GetVodRegions(double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandRegionConnection`
- **Error**: `SdkException<GetVodRegionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetVodRegions
- **HTTP**: `PUT /ondemand/pages/{ondemand_id}/regions` (Default (api))
- **Notes**: This method adds multiple regions to the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `SetVodRegions(double ondemandId, OndemandPagesRegionsRequest1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandRegion`
- **Error**: `SdkException<SetVodRegionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
