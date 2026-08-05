# EventsBasedBillingSegments — operations

Accessor: `client.EventsBasedBillingSegments` · Source: `Api/EventsBasedBillingSegments.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkCreateSegments
- **HTTP**: `POST /components/{component_id}/price_points/{price_point_id}/segments/bulk.json` (Production)
- **Notes**: Creates multiple segments in one request. The array of segments can contain up to `2000` records. If any of the records contain an error the whole request would fail and none of the requested segments get created. The error response contains a message for only the one segment that failed validation, with the corresponding index in the array. You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.
- **Signature**: `BulkCreateSegments(string componentId, string pricePointId, BulkCreateSegments? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ListSegmentsResponse`
- **Error**: `SdkException<BulkCreateSegmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetEventBasedBillingSegment1(out EventBasedBillingSegment1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BulkUpdateSegments
- **HTTP**: `PUT /components/{component_id}/price_points/{price_point_id}/segments/bulk.json` (Production)
- **Notes**: Updates multiple segments in one request. The array of segments can contain up to `1000` records. If any of the records contain an error the whole request would fail and none of the requested segments get updated. The error response contains a message for only the one segment that failed validation, with the corresponding index in the array. You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.
- **Signature**: `BulkUpdateSegments(string componentId, string pricePointId, BulkUpdateSegments? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ListSegmentsResponse`
- **Error**: `SdkException<BulkUpdateSegmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetEventBasedBillingSegment1(out EventBasedBillingSegment1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSegment
- **HTTP**: `POST /components/{component_id}/price_points/{price_point_id}/segments.json` (Production)
- **Notes**: Creates a new segment for a component with a segmented metric. It allows you to specify properties to bill upon and prices for each Segment. You can only pass as many "property_values" as the related Metric has segmenting properties defined. You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.
- **Signature**: `CreateSegment(string componentId, string pricePointId, CreateSegmentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SegmentResponse`
- **Error**: `SdkException<CreateSegmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetEventBasedBillingSegmentErrors1(out EventBasedBillingSegmentErrors1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSegment
- **HTTP**: `DELETE /components/{component_id}/price_points/{price_point_id}/segments/{id}.json` (Production)
- **Notes**: Deletes a segment with the specified ID. You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.
- **Signature**: `DeleteSegment(string componentId, string pricePointId, double id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSegmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSegmentsForPricePoint
- **HTTP**: `GET /components/{component_id}/price_points/{price_point_id}/segments.json` (Production)
- **Notes**: Lists segments created for a given price point, in order of creation. You can pass `page` and `per_page` parameters in order to access all of the segments. By default it will return `30` records. You can set `per_page` to `200` at most. You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.
- **Signature**: `ListSegmentsForPricePoint(string componentId, string pricePointId, ListSegmentsFilter? filter, int? page = 1, int? perPage = 30, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 30, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `filter` ← `filter`
- **Returns**: `ListSegmentsResponse`
- **Error**: `SdkException<ListSegmentsForPricePointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetEventBasedBillingListSegmentsErrors1(out EventBasedBillingListSegmentsErrors1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### UpdateSegment
- **HTTP**: `PUT /components/{component_id}/price_points/{price_point_id}/segments/{id}.json` (Production)
- **Notes**: Updates a single segment for a component with a segmented metric. It allows you to update the pricing for the segment. You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.
- **Signature**: `UpdateSegment(string componentId, string pricePointId, double id, UpdateSegmentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SegmentResponse`
- **Error**: `SdkException<UpdateSegmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetEventBasedBillingSegmentErrors1(out EventBasedBillingSegmentErrors1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
