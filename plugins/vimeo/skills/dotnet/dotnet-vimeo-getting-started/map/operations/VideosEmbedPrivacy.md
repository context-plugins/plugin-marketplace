# VideosEmbedPrivacy — operations

Accessor: `client.VideosEmbedPrivacy` · Source: `Api/VideosEmbedPrivacy.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoPrivacyDomain
- **HTTP**: `PUT /videos/{video_id}/privacy/domains/{domain}` (Default (api))
- **Notes**: This method adds the specified domain to a video's allowlist.
- **Signature**: `AddVideoPrivacyDomain(string domain, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoPrivacyDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoPrivacyDomain
- **HTTP**: `DELETE /videos/{video_id}/privacy/domains/{domain}` (Default (api))
- **Notes**: This method removes the specified domain from a video's allowlist.
- **Signature**: `DeleteVideoPrivacyDomain(string domain, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoPrivacyDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoPrivacyDomains
- **HTTP**: `GET /videos/{video_id}/privacy/domains` (Default (api))
- **Notes**: This method returns every domain on the specified video's allowlist.
- **Signature**: `GetVideoPrivacyDomains(double videoId, Direction? direction, double? page, double? perPage, Sort78? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `DomainConnection`
- **Error**: `SdkException<GetVideoPrivacyDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
