# OnDemandPromotions — operations

Accessor: `client.OnDemandPromotions` · Source: `Api/OnDemandPromotions.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateVodPromotion
- **HTTP**: `POST /ondemand/pages/{ondemand_id}/promotions` (Default (api))
- **Notes**: This method adds a promotion to the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `CreateVodPromotion(double ondemandId, OndemandPagesPromotionsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandPromotion`
- **Error**: `SdkException<CreateVodPromotionError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVodPromotion
- **HTTP**: `DELETE /ondemand/pages/{ondemand_id}/promotions/{promotion_id}` (Default (api))
- **Notes**: This method deletes a promotion on the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `DeleteVodPromotion(double ondemandId, double promotionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVodPromotionError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodPromotion
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/promotions/{promotion_id}` (Default (api))
- **Notes**: This method returns a single promotion on the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `GetVodPromotion(double ondemandId, double promotionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandPromotion`
- **Error**: `SdkException<GetVodPromotionError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodPromotionCodes
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes` (Default (api))
- **Notes**: This method returns every code of the specified promotion on an On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `GetVodPromotionCodes(double ondemandId, double promotionId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `OnDemandPromotionCode`
- **Error**: `SdkException<GetVodPromotionCodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVodPromotions
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/promotions` (Default (api))
- **Notes**: This method returns every promotion on the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `GetVodPromotions(double ondemandId, Filter26 filter, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `OnDemandPromotion`
- **Error**: `SdkException<GetVodPromotionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
