# ObservabilityNotifications — operations

Accessor: `client.ObservabilityNotifications` · Source: `Api/ObservabilityNotifications.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RecommendationServiceAckNotifications
- **HTTP**: `POST /insights/api/v1/orgs/{org_id}/notifications/ack` (Default)
- **Notes**: Marks notifications of the specified `notification_type` as read for the given list of devices.
- **Signature**: `RecommendationServiceAckNotifications(string orgId, OreAckNotificationsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV1OrgsDeleteUserResponse`
- **Error**: `SdkException<RecommendationServiceAckNotificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDetailStatus(out DetailStatus)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RecommendationServiceGetNotifications
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/notifications` (Default)
- **Notes**: Returns a paginated list of notifications (recommendation- and interface-role-derived) for the given organization.
- **Signature**: `RecommendationServiceGetNotifications(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `selectionPaginationPageSize` — nullable, no default → **must pass explicitly**
  - `selectionPaginationPageOffset` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`
- **Returns**: `OreNotificationsListResponse`
- **Error**: `SdkException<RecommendationServiceGetNotificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDetailStatus(out DetailStatus)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
